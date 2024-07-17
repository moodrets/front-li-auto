import { ref } from 'vue'

class ModalController {
    state = ref<Record<string, boolean>>({})

    toggle(modalName: string) {
        if (modalName && this.state.value[modalName] !== undefined) {
            this.state.value[modalName] = !this.state.value[modalName]
            document.body.classList[this.state.value[modalName] === true ? 'add' : 'remove'](
                'is-modal-open'
            )
        }
    }

    close(modalName: string) {
        if (modalName && this.state.value[modalName] !== undefined) {
            this.state.value[modalName] = false
        }
        document.body.classList.remove('is-modal-open')
    }
}

export const modalController = new ModalController()
