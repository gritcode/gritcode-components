Gritcode Components
=========

Gritcode Components extend Bootstrap 4 with [vuestrap](https://github.com/kzima/vuestrap/#readme) web components built with Vue.js and Webpack.

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

THEMING
=========
To be able to use your app theme with component's scss variables, you will need to use [vuestrap-theme-loader](https://github.com/kzima/vueastrap-theme-loader) in your webpack config file.

```js
npm install vuestrap-theme-loader --save-dev
```

See [vuestrap-starter](https://github.com/kzima/vuestrap-starter) for a webpack config example with theme loader.

TODO
=========
- document events
- testing
