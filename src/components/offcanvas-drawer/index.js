// import styling
import './offcanvas-drawer.scss'

// import template
import template from './offcanvas-drawer.html'

export const offcanvasWrapper = {
  template: template,
  replace: true,
  data() {
    return {
      show: false,
    }
  },
  props: {
    id: {
      type: String,
      required: true,
      default: ''
    },
    animation: {
      type: String,
      default: 'ease',
    },
    align: {
      type: String,
      default: 'left',
    },
  },
  methods: {
    toggle() {
      this.show = !this.show
      if (this.show) {
        this.$dispatch('shown::offcanvas-drawer', this.id)
      } else {
        this.$dispatch('hiden::offcanvas-drawer', this.id)
      }
    },
  },
  events: {
    'toggle::offcanvas-drawer'(id) {
      if (id === this.id) {
        this.toggle()
      }
    }
  },
}

export const offcanvasDrawer = {
  template: '<div class="offcanvas-drawer"><slot></slot></div>',
  replace: true,
}
