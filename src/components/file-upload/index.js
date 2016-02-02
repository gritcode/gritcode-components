// inspired by href='https://css-tricks.com/drag-and-drop-file-uploading/'

// import dependencies
import './file-upload.scss'
import 'vuestrap/components/labels'
import template from './file-upload.html'
import {testSameOrigin, trigger} from '../../utils/helpers.js'

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
        formId: {
          type: String,
          default: '',
        },
        method: {
          type: String,
          default: 'POST',
        },
        name: {
          type: String,
          default: 'files',
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
              restart: 'Upload more?',
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
        let result = this.fileList.length > 1 ? `${this.fileList.length} ${this.text.selected}` : this.fileList[0].name
        if (this.state === 'retry') {
          result += ` (change)`
        }
        return result
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
        if (data.success) {
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
              ajaxData.append(this.name, file, file.name)
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
              const loaded = e.loaded ? e.loaded : 0
              const total = e.total ? e.total : 1
              this.progress = parseInt((loaded / total) * 100, 10) + '%'
            }

            xhr.onerror = () => {
              this.setError('There was an error with ajax request')
            }

            // Send request to server
            xhr.send(ajaxData)
          } else {
            // fallback Ajax solution for older browsers for same-origin requests
            if (testSameOrigin(this.ajax)) {
              const iframeName  = 'uploadiframe' + new Date().getTime()
              const iframe = document.createElement('iframe')

              iframe.setAttribute('name', iframeName)
              iframe.style.display = 'none'

              document.body.appendChild(iframe)
              this._wrappingForm.setAttribute('target', iframeName)

              iframe.addEventListener('load', () => {
                // this will not work on cross origin requests when using iframe
                this.parseResponse(iframe.contentDocument.body.innerHTML)
                this._wrappingForm.removeAttribute('target')
                iframe.parentNode.removeChild(iframe)
              })
              this._wrappingForm.submit()
            } else {
              // we cannot guarantee a success in case of cross-origin request within iframe
              // browsers will block access to the iframe.contentDocument.body.innerHTML so we can't tell if the request was a success
              // TODO: add redirect functionality, similar to the https://github.com/blueimp/jQuery-File-Upload/wiki/Cross-domain-uploads#cross-site-iframe-transport-uploads
              this.setError('Cross-origin requests are not supported within iframe')
            }
          }
        }
      },
      retry() {
        this.state = 'retry'
        trigger(this._input, 'change')
      },
      restart() {
        this.state = null
        this.fileList = []
      },
      onChange(e) {
        if (this.state === 'retry') {
          this.state = null
        }
        if (this.advancedUpload) {
          this.fileList = e.target.files
          if (this.autoSubmit) {
            this.submitForm()
          }
        } else {
          this.fileList.push({name: this._input.value.replace(/^.*\\/, '')})
        }
      },
      _eventHandler(e) {
        // stop propagation to avoid accidental behaviour
        e.preventDefault()
        e.stopPropagation()

        // handle dragover
        if (e.type === 'dragover' || e.type === 'dragenter') {
          this.dragover = true
        }

        // handle dragleave
        if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
          this.dragover = false
          if (e.type === 'drop') {
            this.fileList = e.dataTransfer.files // the files that were dropped
            if (this.autoSubmit) {
              this.submitForm()
            }
          }
        }
      }
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
          this.$el.addEventListener(event, (e) => this._eventHandler(e))
        })

        // drag start
        events = ['dragover', 'dragenter']
        events.forEach((event) => (e) => this._eventHandler(e))

        // drag end
        events = ['dragend', 'dragleave', 'drop']
        events.forEach((event) => {
          this.$el.addEventListener(event, (e) => this._eventHandler(e))
        })
      } else {
        // get a wrapping form element id paseed in options
        if (!this.formId) {
          throw "You need to wrap this component in a form and specify it's id in a 'form-id' attribute."
        }
        this._wrappingForm = document.getElementById(this.formId)
      }
    },
    beforeDestroy() {
      const events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter']
      events.forEach((event) => {
        this.$el.removeEventListener(event, () => this._eventHandler())
      })
    }
}
