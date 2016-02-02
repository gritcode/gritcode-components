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
import {wizard, wizardStep} from './wizard'

const gritcode = {
	toast,
	buttonToggle,
	dropdownMultiselect,
	offcanvasWrapper,
	offcanvasDrawer,
	spinner,
	truncate,
	fileUpload,
	wizard,
	wizardStep,
}

// export all components under global variable
export default gritcode
