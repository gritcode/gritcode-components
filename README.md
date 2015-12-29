Gritcode Components
=========

Gritcode Components extend Bootstrap 4 with [vuestrap](http://kzima.github.io/vuestrap#readme) web components built with Vue.js and Webpack.

DEMO
=========

[Documentation](http://gritcode.github.io/gritcode-components/#/toast)

QUICK USE
=========

For compiled components, use it within your Vue instance like this:

```js
new Vue({
	el: '#app',
	components: { 'toast': gritcode.toast }
})
```

-- OR --

If you chosen to work with source components, just import* desired component like so:

```js
import toast from 'gritcode-components/src/components/toast'
```

and then load it in your Vue instance:

```js
new Vue({
	el: '#app',
	components: { 'vs-toast': toast }
})
```

*Note: You will need <a href="https://github.com/babel/babel-loader">Babel Loader</a> in your Webpack config file to support ES6 syntax.

You can then use icon component in your html, like so:
```html
<vs-toast></vs-toast>
```

TODO
=========
- document events
- testing
