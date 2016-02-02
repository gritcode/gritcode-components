// import styling
import './toast.scss'

// import template
import template from './toast.html'

// this delays trigger of the first toast (queue)
const DEBOUNCE = 300 // in ms

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
    },
    debounce: {
      type: Number,
      default: DEBOUNCE,
    }
  },
  methods: {
    pause() {
      this.activeProgressBar = false
      clearTimeout(this.animation)
      this.style.transition = 'width 0.1s'
    },
    clear() {
      setTimeout(() => {
        this.activeProgressBar = false
        this.animationInProgress = false
        this.style.transition = 'width 0s'
        this.activeToast = false
        clearTimeout(this.animation)
        // show next toast from the queue
        if (this.queue.length > 0) {
          this._toastAnimation = setTimeout(() => {
            const toast = this.queue.shift()
            this.show(toast)
          }, TOAST_ANIMATION)
        }
      }, TOAST_ANIMATION)
    },
    animate() {
      this.style.transition = 'width ' + this.duration / 1000 + 's'
      this.activeProgressBar = true
      this.animation = setTimeout(this.clear, this.duration)
    },
    show(options) {
      this.context = 'default'
      this.animationInProgress = true
      this.message = options.message || 'Done!'
      this.context = options.context || ''
      this.debounce = options.debounce || DEBOUNCE
      this.duration = options.duration || DURATION
      this.hideProgress = options.hideProgress || false
      this.position = options.position || 'bottom left'
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
      // wait for dom element (so that position class can take effect when triggered via event)
      setTimeout(() => {
        this.activeToast = true
        this.animate()
      }, 100)
    },
    addToQueue(options) {
      if (this.animationInProgress || this.queue.length > 0) {
        // if some other toast is curently animating, add it to the queue
        this.queue.push(options)
      } else {
        // if first toast, show it
        setTimeout(() => {
          this.show(options)
        }, this.debounce)
      }
    }
  },
  events: {
    'end::ajax'(options) {
      if (this.onAjaxErrors && options && options.error) {
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
