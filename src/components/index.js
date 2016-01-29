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
	'vsToast': toast,
	'vsButtonToggle': buttonToggle,
	'vsDropdownMultiselect': dropdownMultiselect,
	'vsOffcanvasWrapper': offcanvasWrapper,
	'vsOffcanvasDrawer': offcanvasDrawer,
	'vsSpinner': spinner,
	'vsTruncate': truncate,
	'vsFileUpload': fileUpload,
}

// export all components under global variable
export default gritcode
