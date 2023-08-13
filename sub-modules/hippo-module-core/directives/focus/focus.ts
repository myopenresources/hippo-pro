import type { Directive } from 'vue'

function focusHandle(args: any) {
    return (event: any) => {
        args && args.selectTxt && event.currentTarget.select();
    }
}

const focus: Directive = {
    mounted(el, binding) {
        el.addEventListener('focus', focusHandle(binding.value))
        el.focus();

    },
    unmounted(el, binding) {
        el.removeEventListener('focus', focusHandle(binding.value))
    }
}

export default focus
