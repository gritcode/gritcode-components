import meta from './dropdown-multiselect.json'
import template from './dropdown-multiselect.html'
import snippet from './snippet.html'
import vsDropdownMultiselect from 'src/components/dropdown-multiselect'
import docsDemo from 'vuestrap-docs/src/components/demo'
import {positions, sizes, variants} from 'src/utils'

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
      model: [],
      list: [
        {text: 'Australia', value: 'AU'},
        {text: 'China', value: 'CN'},
        {text: 'Germany', value: 'DE'},
        {text: 'Macao', value: 'MO'},
        {text: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'},
        {text: 'Panama', value: 'PA'},
        {text: 'Papua New Guinea', value: 'PG'},
        {text: 'Poland', value: 'PL'},
        {text: 'United Arab Emirates', value: 'AE'},
        {text: 'United Kingdom', value: 'GB'},
        {text: 'United States', value: 'US'},
      ],
      caret: true,
      dropup: false,
      position: 'left',
      positions: positions,
      size: 'md',
      sizes: sizes,
      variant: 'default',
      variants: variants,
    }
  },
  components: {
    vsDropdownMultiselect,
    docsDemo,
  },
}
