// based on href='https://css-tricks.com/drag-and-drop-file-uploading/'

// import dependencies
import './file-upload.scss'
import 'vuestrap/components/labels'
import 'vuestrap/components/alert'
import vsIcon from 'vuestrap-icons/src/components/icons'
import template from './file-upload.html'
import {testSameOrigin} from 'src/utils/helpers.js'

// export component object
export default {
    template: template,
    replace: true,
    data() {
      return {
        state: null,
        dragover: false,
        progress: '0%',
        errorMessage: '',
      }
    },
    props: {
        accept: {
          type: String,
          default: '',
        },
        ajax: {
          type: String,
          default: '',
        },
        autoSubmit: {
          type: Boolean,
          default: false,
        },
        id: {
          type: String,
          default: '',
        },
        method: {
          type: String,
          default: 'POST',
        },
        model: {
          default: null,
        },
        multiple: {
          type: Boolean,
          default: false,
        },
        fileList: {
          default: null,
        },
        hideButton: {
          type: Boolean,
          default: false,
        },
        text: {
          type: Object,
          default() {
            return {
              action: 'Choose a file',
              drag: 'or drag it here.',
              selected: 'files selected',
              button: 'Upload',
              uploading: 'Uploading...',
              done: 'Done!',
              more: 'Upload more?',
              retry: 'Try again!',
            }
          }
        },
    },
    computed: {
      advancedUpload() {
        const div = document.createElement('div')
        return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window
      },
      displaySelectionText() {
        if (!this.fileList.length) return ''
        return this.fileList.length > 1 ? `${this.fileList.length} ${this.text.selected}` : this.fileList[0].name
      }
    },
    methods: {
      setError(message) {
        this.state = 'error'
        this.errorMessage = message
        this.$dispatch('completed::file-upload', {error: this.errorMessage})
      },
      parseResponse(response) {
        let data = null
        try {
          data = JSON.parse(response)
        } catch (e) {
          // if no json returned we assume success
          this.setError('Unexpected response from the server')
        }
        // set either success or error based on data returned from the server
        if (data.success === true) {
          this.state = 'success'
          this.model = data.data
          this.$dispatch('completed::file-upload', {model: this.model})
        } else {
          this.setError(data.error)
        }
      },
      submitForm() {
        if (!this.fileList.length) return
        if (this.ajax) {
          this.state = 'uploading'
          if (this.advancedUpload) {
            // ajax file upload for modern browsers

            // gathering the form data
            const ajaxData = new FormData()
            // Loop through each of the selected files.
            for (let i = 0; i < this.fileList.length; i++) {
              const file = this.fileList[i]

              // Check the file type.
              if (this.accept && !file.type.match(this.accept)) {
                continue
              }

              // Add the file to the request.
              ajaxData.append('files[]', file, file.name)
            }

            // ajax request
            const xhr = new XMLHttpRequest()
            // xhr.setRequestHeader('Content-Length')
            xhr.open(this.method, this.ajax, true)

            xhr.onload = () => {
              this.state = null
              if (xhr.status >= 200 && xhr.status < 400) {
                this.parseResponse(xhr.responseText)
              } else {
                this.parseResponse(xhr.responseText)
              }
            }

            xhr.upload.onprogress = (e) => {
              this.progress = parseInt((e.loaded / e.total) * 100, 10) + '%'
            }

            xhr.onerror = () => {
              this.setError('There was an error with ajax request')
            }

            // Send request to server
            xhr.send(ajaxData)
          } else {
            // fallback Ajax solution upload for older browsers but only if same-origin
            if (testSameOrigin(this.ajax)) {
              const iframeName  = 'uploadiframe' + new Date().getTime()
              const iframe = document.createElement('iframe')

              iframe.setAttribute('name', iframeName)
              iframe.style.display = 'none'

              document.body.appendChild(iframe)
              this.$el.setAttribute('target', iframeName)

              iframe.addEventListener('load', () => {
                this.state = 'uploading'
                // this will not work on cross origin requests when using iframe
                this.parseResponse(iframe.contentDocument.body.innerHTML)
                this.$el.removeAttribute('target')
                iframe.parentNode.removeChild(iframe)
              })
              this.$el.submit()
            } else {
              // we cannot guarantee a success in case of cross-origin request within iframe
              // browsers will block access to the iframe.contentDocument.body.innerHTML so we can't tell if the request was a success
              // TODO: add redirect functionality, similar to the https://github.com/blueimp/jQuery-File-Upload/wiki/Cross-domain-uploads#cross-site-iframe-transport-uploads
              this.setError('Cross-origin requests are not supported within iframe')
            }
          }
        }
      },
      restart() {
        this.fileList = []
        this.state = null
      },
      onChange(e) {
        if (this.advancedUpload) {
          this.fileList = e.target.files
          if (this.autoSubmit) {
            this.submitForm()
          }
        } else {
          this.fileList.push({name: this._input.value.replace(/^.*\\/, '')})
        }
      }
    },
    components: {
      vsIcon
    },
    events: {
      'submit::file-upload'(id) {
        if (this.id === id) {
          this.submitForm()
        }
      }
    },
    ready() {
      this._input = this.$el.querySelector('input')
      if (this.advancedUpload) {
        let events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter']
        events.forEach((event) => {
          this.$el.addEventListener(event, (e) => {
            // preventing the unwanted behaviours
            e.preventDefault()
            e.stopPropagation()
          })
        })

        // drag start
        events = ['dragover', 'dragenter']
        events.forEach((event) => {
          this.$el.addEventListener(event, () => {
            this.dragover = true
          })
        })

        // drag end
        events = ['dragend', 'dragleave', 'drop']
        events.forEach((event) => {
          this.$el.addEventListener(event, (e) => {
            this.dragover = false
            if (event === 'drop') {
              this.fileList = e.dataTransfer.files // the files that were dropped
              if (this.autoSubmit) {
                this.submitForm()
              }
            }
          })
        })
      }
    },
    beforeDestroy() {
      const events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter']
      events.forEach((event) => {
        this.$el.removeEventListener(event)
      })
    }
}
