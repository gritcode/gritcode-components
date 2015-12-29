import template from './introduction.html'
import 'vuestrap/components/jumbotron'

export default {
	route: {
		url: '/',
		name: 'introduction',
		title: 'Intoduction',
	},
	data() {
		return {
			pkg: this.$parent.pkg,
			componentNameCamelCase: 'toast',
			componentName: 'toast',
			componentNameSurfixed: 'vs-toast'
		}
	},
  template: template,
}
