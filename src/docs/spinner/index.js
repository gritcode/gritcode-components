import meta from './spinner.json'
import template from './spinner.html'
import {sizes} from 'src/utils'
import snippet from './snippet.html'
import vsSpinner from 'src/components/spinner'
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
      fixed: false,
      size: 'lg',
      sizes: sizes.concat({text: 'xl', value: 'xl'}),
    }
  },
  components: {
    vsSpinner,
    docsDemo,
  },
  events: {
    'shown::spinner'(id) {
      setTimeout(() => {
        this.$root.$broadcast('hide::spinner', id)
      }, 2000)
    }
  }
}
