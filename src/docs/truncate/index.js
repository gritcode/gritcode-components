import meta from './truncate.json'
import template from './truncate.html'
import snippet from './snippet.html'
import vsTruncate from 'src/components/truncate'
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
      width: '10em',
      widths: [
        {text: '10em', value: '10em'},
        {text: '15em', value: '15em'},
        {text: '20em', value: '20em'},
      ]
    }
  },
  components: {
    vsTruncate,
    docsDemo,
  },
}
