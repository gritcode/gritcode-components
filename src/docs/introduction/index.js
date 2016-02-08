import template from './introduction.html'
import 'vuestrap/components/jumbotron'
import pkg from 'package.json'

export default {
	route: {
		url: '/',
		name: 'introduction',
		title: 'Intoduction',
	},
	data() {
		return {
			pkg: pkg,
			componentNameCamelCase: 'toast',
			componentName: 'toast',
			componentNameSurfixed: 'vs-toast'
		}
	},
  template: template,
}
