import type { Directive } from 'vue'


const errorSrc: Directive = {
    mounted(el, binding) {
        const dataRtry = el.getAttribute("data-error-src-rtry");

        if (null === dataRtry || undefined === dataRtry) {
            el.setAttribute("data-error-src-rtry", 3);
        }

        el.addEventListener('load', () => {
            el.setAttribute("data-error-src-rtry", 3);
        })

        el.addEventListener('error', () => {
            const retry = el.getAttribute("data-error-src-rtry");

            if (retry <= 0) {
                el.removeEventListener('error', () => {
                    if (binding.value !== '') {
                        el.src = binding.value;
                    }
                });
                return;
            }

            el.setAttribute("data-error-src-rtry", retry - 1);
            if (binding.value !== '') {
                el.src = binding.value;
            }
        });
    },
    unmounted(el, binding) {
        el.removeEventListener('load', () => {
            el.setAttribute("data-error-src-rtry", 3);
        });

        el.removeEventListener('error', () => {
            const retry = el.getAttribute("data-error-src-rtry");

            if (retry <= 0) {
                el.removeEventListener('error', () => {
                    if (binding.value !== '') {
                        el.src = binding.value;
                    }
                });
                return;
            }

            el.setAttribute("data-error-src-rtry", retry - 1);
            if (binding.value !== '') {
                el.src = binding.value;
            }
        });
    }
}

export default errorSrc
