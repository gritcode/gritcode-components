/**
 * IMPORT EACH COMPONENT
 */
import toast from './toast'
import buttonToggle from './button-toggle'
import dropdownMultiselect from './dropdown-multiselect'
import {offcanvasDrawer, offcanvasWrapper} from './offcanvas-drawer'
import spinner from './spinner'
import truncate from './truncate'
import fileUpload from './file-upload'
import {wizard, wizardStep} from './wizard'

const gritcode = {
	'vsToast': toast,
	'vsButtonToggle': buttonToggle,
	'vsDropdownMultiselect': dropdownMultiselect,
	'vsOffcanvasWrapper': offcanvasWrapper,
	'vsOffcanvasDrawer': offcanvasDrawer,
	'vsSpinner': spinner,
	'vsTruncate': truncate,
	'vsFileUpload': fileUpload,
	'vsWizard': wizard,
	'vsWizardStep': wizardStep,
}

// export all components under global variable
export default gritcode
