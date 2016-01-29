/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'
/**
 * IMPORT EACH COMPONENT
 */
import toast from './toast'
import buttonToggle from './button-Toggle'
import dropdownMultiselect from './dropdown-multiselect'
import {offcanvasDrawer, offcanvasWrapper} from './offcanvas-drawer'
import spinner from './spinner'
import truncate from './truncate'
import fileUpload from './file-upload'

const gritcode = {
	toast,
	buttonToggle,
	dropdownMultiselect,
	offcanvasWrapper,
	offcanvasDrawer,
	spinner,
	truncate,
	fileUpload
}

// export all components under global variable
export default gritcode
