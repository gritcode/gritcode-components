// import styling
import './truncate.scss'

// import template
import template from './truncate.html'

export default {
  template: template,
  replace: true,
  computed: {
    truncateWidth() {
      return (isNaN(this.width)) ? this.width : `${this.width}px`
    },
  },
  props: {
    width: {
      default: '20em',
    },
  },
}
