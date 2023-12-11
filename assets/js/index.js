const disclosures = document.querySelectorAll('.js-disclosure')

// toggle disclosure
const toggleDisclosure = (disclosure) => {
  const open = disclosure.getAttribute('aria-expanded') === 'true'

  disclosure.setAttribute('aria-expanded', !open)
}

// Service Worker Registration
const serviceWorkerRegistration = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('Service Worker Registered')
      })
      .catch((error) => {
        console.log('Service Worker Registration Failed', error)
      })
  }
}

const init = () => {
  if (!disclosures.length) {
    return
  }

  disclosures.forEach((component) => {
    component.dataset.state = 'ready'

    const disclosureButtons = component.querySelectorAll('.js-disclosure-btn')

    disclosureButtons.forEach((btn) => {
      // remove title and disabled
      btn.removeAttribute('title')
      btn.removeAttribute('disabled')

      // add event listener
      btn.addEventListener('click', () => {
        toggleDisclosure(btn)
      })
    })
  })
}

init()
serviceWorkerRegistration()
