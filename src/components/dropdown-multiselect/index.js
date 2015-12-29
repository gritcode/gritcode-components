// import styling
import './dropdown-multiselect.scss'
import 'vuestrap/components/dropdown'

// import template
import template from './dropdown-multiselect.html'

// import dependencies
import vsIcon from 'vuestrap-icons/src/components/icons'

// export component object
export default {
  template: template,
  replace: true,
  data() {
    return {
      show: false,
      selected: false,
    }
  },
  props: {
    model: {
      type: Array,
      default: [],
      twoWay: true,
      required: true
    },
    list: {
      type: Array,
      default: [],
      required: true
    },
    caret: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'left'
    },
    size: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default'
    },
    maxCount: {
      type: Number,
      default: 2
    },
    defaultText: {
      type: String,
      default: 'Plase select one'
    },
    defaultTextMultiple: {
        type: String,
        default: 'items selected'
    },
    dropup: {
      type: Boolean,
      default: false
    },
    returnObject: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    btnVariant() {
      return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
    dropdownToggle() {
      return this.caret ? 'dropdown-toggle' : ''
    },
    displayItem() {
      // if zero show default message
      if (this.model.length === 0) {
          return this.defaultText
      }
      // if more than limit show "X items selected"
      if (this.model.length > this.maxCount) {
          return this.model.length + ' ' + this.defaultTextMultiple
      }

      // otherwise show all items selected with coma seperated
      const results = []
      this.model.forEach((modelItem) => {
        if (this.returnObject) {
          results.push(modelItem.text)
        } else {
          // find matching text
          this.list.forEach((listItem) => {
            if (listItem.value === modelItem) {
              results.push(listItem.text)
            }
          })
        }
      })
      return results.join(', ')
    }
  },
  methods: {
    toggle(e) {
      // hide an alert
      this.show = !this.show
        // Dispatch an event from the current vm that propagates all the way up to its $root
      if (this.show) {
        this.$dispatch('shown:dropdown')
        e.stopPropagation()
      } else {
        this.$dispatch('hidden::dropdown')
      }
    },
    select(itemIndex) {
      const modelIndex = this.checked(itemIndex)
      if (modelIndex !== false) {
        this.model.splice(modelIndex, 1)
      } else {
        if (this.returnObject) {
          this.model.push(this.list[itemIndex])
        } else {
          this.model.push(this.list[itemIndex].value)
        }
      }

      // Dispatch an event from the current vm that propagates all the way up to its $root
      this.$dispatch('selected::dropdown', this.model)
    },
    checked(index) {
      if (!this.list) return false
      let result = false
      if (this.returnObject) {
        for (let i = 0; i < this.model.length; i++) {
          if (this.model[i].value === this.list[index].value) {
            result = i
          }
        }
      } else {
         result = (this.model.indexOf(this.list[index].value) !== -1) ? this.model.indexOf(this.list[index].value) : false
      }
      return result
    }
  },
  events: {
    'hide::dropdown'() {
      this.show = false
    }
  },
  components: {
    vsIcon
  },
}
