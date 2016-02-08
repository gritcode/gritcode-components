/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

// import vuestrap dependencies
import 'vuestrap/components/nav'
import 'vuestrap/components/navbar'
import 'vuestrap/components/buttons'
import 'vuestrap/components/list-group'
import 'vuestrap/components/forms'
import 'vuestrap/components/labels'
import 'vuestrap/components/alert'
import 'vuestrap/components/tables'
import 'vuestrap/components/dropdown'

// import modules and pages
import introduction from 'src/docs/introduction'
import toast from 'src/docs/toast'
import truncate from 'src/docs/truncate'
import spinner from 'src/docs/spinner'
import offcanvasDrawer from 'src/docs/offcanvas-drawer'
import dropdownMultiselect from 'src/docs/dropdown-multiselect'
import buttonToggle from 'src/docs/button-toggle'
import fileUpload from 'src/docs/file-upload'
import wizard from 'src/docs/wizard'

export default {
	pages: [
		introduction,
		toast,
		truncate,
		spinner,
		offcanvasDrawer,
		dropdownMultiselect,
		buttonToggle,
		fileUpload,
		wizard,
	]
}
