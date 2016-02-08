// import dependencies
import './wizard.scss'
import wizardTemplate from './wizard.html'
import wizardSteptemplate from './wizard-step.html'
import vsIcon from 'vuestrap-icons/src/components/icons'
import {changeLocation} from '../../utils/helpers.js'

// export component object
export const wizard = {
  template: wizardTemplate,
  replace: true,
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      countItems: 0,
    }
  },
  methods: {
    changeCurrentIndex(index) {
      // change currentIndex
      // if previous step is valid
      // if previousDisabled is not set on the current step
      if (this.$children[this.currentIndex].disablePrevious && this.currentIndex > index) return false
      if (this.$children[index - 1] && this.$children[index - 1].valid || index < this.currentIndex) {
        this.currentIndex = index
        return true
      }
      return false
    },
  },
  ready() {
    // get all steps
    this.countItems = this.$children.length

    // set index for each wiard-step component
    this.$children.forEach((item, index) => {
      item.index = index
    })
  }
}

export const wizardStep = {
  template: wizardSteptemplate,
  replace: true,
  data() {
    return {
      index: null,
      active: false,
    }
  },
  computed: {
    isActive() {
      return (this.$parent.currentIndex === this.index)
    },
    isPrevious() {
      // every step before current index
      return this.$parent.currentIndex > this.index
    },
    isNext() {
      // everything after current index
      return this.$parent.currentIndex < this.index
    }
  },
  props: {
    link: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: false,
    },
    iconNumber: {
      type: String,
      default: false,
    },
    title: {
      type: String,
      default: false,
    },
    description: {
      type: String,
      default: false,
    },
    progress: {
      type: Number,
      default: 0,
    },
    valid: {
      type: Boolean,
      default: false,
    },
    disablePrevious: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeCurrentIndex() {
      if (this.$parent.changeCurrentIndex(this.index) && this.link) {
        // redirect user to the new location
        changeLocation(this.$router, this.link)
      }
    },
  },
  watch: {
    progress(val) {
      this._progressBar.style.width = val + '%'
      if (val === 100) {
        this.valid = true
      } else {
        this.valid = false
      }
    },
    valid(val) {
      if (val) {
        this.progress = 100
      }
    }
  },
  components: {
    vsIcon,
  },
  ready() {
    this._progressBar = this.$el.querySelector('.wizard-progress-value')
  }
}
