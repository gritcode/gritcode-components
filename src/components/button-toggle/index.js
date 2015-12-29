import './button-toggle.scss'
import template from './button-toggle.html'

export default {
    template: template,
    replace: true,
    data() {
      return {
        something: 'djdj',
      }
    },
    computed: {
    	btnVariant() {
    		return !this.variant || this.variant === 'default' ? 'btn-primary' : 'btn-' + this.variant
    	},
    	btnSize() {
    		return !this.size || this.size === 'default' ? '' : 'btn-' + this.size
    	}
    },
    props: {
        model: {
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
        }
    },
    methods: {
        show() {
            this.model = true
        },
        hide() {
            this.model = false
        },
        toggle() {
            this.model = !this.model
        }
    }
}
