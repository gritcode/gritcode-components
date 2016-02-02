import 'vuestrap/components/labels'
import 'vuestrap/components/forms'
import meta from './wizard.json'
import template from './wizard.html'
import {sizes} from 'src/utils'
import snippet from './snippet.html'
import {wizard as vsWizard, wizardStep as vsWizardStep} from 'src/components/wizard'
import docsDemo from 'vuestrap-docs/src/components/demo'

export default {
  route: {
    url: '/' + meta.name,
    name: meta.name,
    title: meta.title,
  },
  template: template,
  data() {
    return {
      meta: meta,
      snippet: snippet,
      list: [
        {text: 'Requester Details', href: '/requester', description: 'Your details'},
        {text: 'First Collection', href: '/first-collection', description: 'The first collection of data'},
        {text: 'Second Collection', href: '/second-collection', description: 'The second collection of data'},
        {text: 'Payment', href: '/payment', description: 'Payment options'},
        {text: 'Confirmation', href: '/confirmation', description: 'Confirm the cleanse'},
      ],
      icons: true,
      models: {
        email: '',
        firstName: '',
        lastName: '',
        cardType: '',
        cardNumber: '',
        cardHolder: '',
        cardExpiryMonth: '01',
        cardExpiryYear: '2017',
      },
      progress: {
        step1: 0,
        step2: 0,
        step3: 0,
      },
      currentStep: 0,
    }
  },
  components: {
    vsWizard,
    vsWizardStep,
    docsDemo,
  },
  events: {
    'shown::wizard'(id) {
      setTimeout(() => {
        this.$root.$broadcast('hide::wizard', id)
      }, 2000)
    }
  },
  methods: {
    startAgain() {
      this.models = {
        email: '',
        firstName: '',
        lastName: '',
        cardType: '',
        cardNumber: '',
        cardHolder: '',
        cardExpiryMonth: '01',
        cardExpiryYear: '2017',
      },
      this.progress = {
        step1: 0,
        step2: 0,
        step3: 0,
      },
      this.currentStep = 0
    },
  },
  watch: {
    models: {
      handler() {
        // step 1
        if (this.currentStep === 0) {
          this.progress.step1 = 0
          if (this.models.email.length) {
            this.progress.step1 += 100 / 3
          }
          if (this.models.firstName.length) {
            this.progress.step1 += 100 / 3
          }
          if (this.models.lastName.length) {
            this.progress.step1 += 100 / 3
          }
        }

        // step 2
        if (this.currentStep === 1) {
          this.progress.step2 = 0
          if (this.models.cardType.length) {
            this.progress.step2 += 100 / 3
          }
          if (this.models.cardNumber.length) {
            this.progress.step2 += 100 / 3
          }
          if (this.models.cardHolder.length) {
            this.progress.step2 += 100 / 3
          }
        }
      },
      deep: true,
    }
  }
}
