import meta from './file-upload.json'
import template from './file-upload.html'
import snippet from './snippet.html'
import vsFileUpload from 'src/components/file-upload'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/' + meta.name,
    name: meta.name,
    title: meta.title,
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      model: null,
      fileList: [],
      multiple: true,
      hideButton: false,
      autoSubmit: false,
      ajaxUrl: (process.env.NODE_ENV === 'docs') ? 'http://mosquito.ie:3004/upload' : 'http://localhost:3004/upload'
    }
  },
  components: {
    vsFileUpload,
    docsDemo,
  },
}
