import meta from './offcanvas-drawer.json'
import template from './offcanvas-drawer.html'
import snippet from './snippet.html'
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
      opened: false,
    }
  },
  components: {
    docsDemo,
  },
}
