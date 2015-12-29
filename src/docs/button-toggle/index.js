import meta from './button-toggle.json'
import template from './button-toggle.html'
import snippet from './snippet.html'
import vsButtonToggle from 'src/components/button-toggle'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {sizes, variants} from 'utils'

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
      model: true,
      size: 'md',
      sizes: sizes,
      variant: 'default',
      variants: variants,
    }
  },
  components: {
    vsButtonToggle,
    docsDemo,
  },
}
