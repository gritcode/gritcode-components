/**
 * Other utilities for demo pages
 *
 */

// pulled from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
export function makeid() {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

// check if browser supports css3 transitions
export function csstransitions() {
  const style = document.documentElement.style
  return (
      style.webkitTransition !== undefined ||
      style.MozTransition !== undefined ||
      style.OTransition !== undefined ||
      style.MsTransition !== undefined ||
      style.transition !== undefined
  )
}


/**
 * test if given url is same origin than app url
 * @param  {string} url to compare with app url
 * @return {boolean}
 */
export const testSameOrigin = (url) => {
    const loc = window.location
    const a = document.createElement('a')
    a.href = url
    return a.hostname == loc.hostname &&
           a.port == loc.port &&
           a.protocol == loc.protocol
}
