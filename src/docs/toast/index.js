import meta from './toast.json'
import template from './toast.html'
import snippet from './snippet.html'
import vsToast from 'src/components/toast'
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
      hideProgress: false,
      duration: 6000,
      durations: [
        {text: 1000, value: 1000},
        {text: 3000, value: 3000},
        {text: 6000, value: 6000},
      ],
      position: 'bottom left',
      positions: [
        {text: 'top left', value: 'top left'},
        {text: 'top right', value: 'top right'},
        {text: 'bottom left', value: 'bottom left'},
        {text: 'bottom right', value: 'bottom right'},
      ],
    }
  },
  components: {
    vsToast,
    docsDemo,
  },
}
