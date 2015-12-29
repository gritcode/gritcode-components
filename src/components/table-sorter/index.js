// import styling
import './table-sorter.scss'

// import template
import template from './table-sorter.html'

// import external dependencies
import vsIcon from 'vuestrap-icons/src/components/icons'

export default {
  template: template,
  replace: true,
  data() {
    return {  
      orderAsc: true,
    }
  },
  props: {
    model: {
      type: Object, 
      twoWay: true,
    },
    sortBy: {
      type: String,
      default: '',
    }
  },
  methods: {
    setSort() {
      // toggle order
      if (this.model.sortBy === this.sortBy) {
        this.orderAsc = !this.orderAsc
      } else {
        this.orderAsc = true
      }

      // set the model
      this.model.sortBy = this.sortBy
      this.model.orderAsc = this.orderAsc
    },
  },
  events: {
  },
  components: {
    vsIcon,
  },
}
