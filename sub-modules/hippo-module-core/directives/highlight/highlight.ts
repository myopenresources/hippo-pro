import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'
import './highlight.scss'
import type { Directive } from 'vue';

const highlight: Directive = {
    mounted: (el, binding) => {
        const targets = el.querySelectorAll('code')
        targets.forEach((target: any) => {
            if (binding.value) {
                target.textContent = binding.value;
            }
            (hljs as any).highlightBlock(target);
        })
    },
    updated: (el, binding) => {
        const targets = el.querySelectorAll('code')
        targets.forEach((target: any) => {
            if (binding.value) {
                target.textContent = binding.value;
                (hljs as any).highlightBlock(target);
            }
        })
    }
}

export default highlight