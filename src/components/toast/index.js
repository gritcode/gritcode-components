// import styling
import './toast.scss'

// import template
import template from './toast.html'

// hide toast after default duration
const DURATION = 6000 // in ms

// this transition time is set in scss and defines how long it takes to animate in/out the toast element
const TOAST_ANIMATION = 300 // in ms

export default {
  template: template,
  replace: true,
  computed: {
    toastContext() {
      return !this.context ? `` : `toast-${this.context}`
    },
    toastPosition() {
      return !this.position ? `bottom left` : this.position
    }
  },
  data() {
    return {
      activeToast: false,
      activeProgressBar: false,
      animation: null,
      animationInProgress: false,
      queue: [],
      style: {
        transition: 'width 0s'
      }
    }
  },
  props: {
    context: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: DURATION,
    },
    message: {
      type: String,
      default: 'Done!',
    },
    onAjaxErrors: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'bottom left',
    },
    hideProgress: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    pause() {
      this.activeProgressBar = false
      clearTimeout(this.animation)
      this.style.transition = 'width 0.1s'
    },
    clear() {
      this.activeToast = false
      this.activeProgressBar = false
      this.animationInProgress = false
      this.style.transition = 'width 0s'
      clearTimeout(this.animation)
      // show next toast from the queue
      if (this.queue.length > 0) {
        this._toastAnimation = setTimeout(() => {
          const toast = this.queue.shift()
          this.show(toast)
        }, TOAST_ANIMATION)
      }
    },
    animate() {
      this.style.transition = 'width ' + this.duration / 1000 + 's'
      this.activeProgressBar = true
      this.animation = setTimeout(this.clear, this.duration)
    },
    show(options) {
      this.context = 'default'
      this.animationInProgress = true
      if (options.message) {
        this.message = options.message
      }
      if (options.context) {
        this.context = options.context
      }
      if (options.success) {
        this.context = 'success'
        this.message = options.success
      }
      if (options.info) {
        this.context = 'info'
        this.message = options.info
      }
      if (options.warning) {
        this.context = 'warning'
        this.message = options.warning
      }
      if (options.error) {
        this.context = 'danger'
        this.message = options.error
      }
      // wait for dom element
      setTimeout(() => {
        this.activeToast = true
        this.animate()
      })
    },
    addToQueue(options) {
      if (this.animationInProgress || this.queue.length > 0) {
        // if some other toast is curently animating, add it to the queue
        this.queue.push(options)
      } else {
        // if first toast, show it
        this.show(options)
      }
    }
  },
  events: {
    'end::ajax'(options) {
      if (this.onAjaxErrors && options.error) {
        this.addToQueue(options)
      }
    },
    'show::toast'(options) {
      this.addToQueue(options)
    }
  },
  destroyed() {
    clearTimeout(this._animation)
    clearTimeout(this._toastAnimation)
  },
}
