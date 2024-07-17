import { ref } from 'vue'

class OffcanvasController {
    state = ref<Record<string, boolean>>({})

    toggle(offcanvasName: string) {
        if (this.state.value[offcanvasName] !== undefined) {
            this.state.value[offcanvasName] = !this.state.value[offcanvasName]
            document.body.classList[this.state.value[offcanvasName] === true ? 'add' : 'remove'](
                'is-offcanvas-open'
            )
        }
    }

    close(offcanvasName: string) {
        if (offcanvasName && this.state.value[offcanvasName] !== undefined) {
            this.state.value[offcanvasName] = false
            return
        }

        for (const state in this.state.value) {
            this.state.value[state] = false
        }

        document.body.classList.remove('is-offcanvas-open')
    }

    isOpen(offcanvasName: string): boolean {
        return this.state.value[offcanvasName] ? true : false
    }
}

export const offcanvasController = new OffcanvasController()
