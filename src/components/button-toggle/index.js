import './button-toggle.scss'
import template from './button-toggle.html'

const ANIMATION = 350 // in ms

export default {
    template: template,
    replace: true,
    computed: {
        btnVariant() {
            return !this.variant || this.variant === 'default' ? 'btn-primary' : 'btn-' + this.variant
        },
        btnSize() {
            return !this.size || this.size === 'default' ? '' : 'btn-' + this.size
        }
    },
    data() {
      return {
        active: true,
      }
    },
    props: {
        model: {
            type: Boolean,
            twoWay: true,
        },
        disabled: {
            type: Boolean,
            twoWay: true,
        },
        size: {
            type: String,
            default: 'md'
        },
        variant: {
            type: String,
            default: 'primary'
        },
        text: {
            type: Object,
            default: '',
            required: true,
        },
    },
    methods: {
        toggle(value) {
            this.active = value || !this.active
            setTimeout(() => {
                this.model = this.active
                this.$dispatch('toggled::button-toggle', this.model)
            }, ANIMATION)
        }
    },
    ready() {
        this.active = this.model
    }
}
