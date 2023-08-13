import { inject, type Directive } from 'vue'



const imgLazy: Directive = {
  mounted(el, binding) {
    const cb = new IntersectionObserver((entries) => {
      const entrie = entries[0]
      if (!entrie.isIntersecting) {
        return
      }
      
      if (binding.value) {
        el.src = binding.value
      }
    }, {
      root: null,
      threshold: 0
    })

    cb.observe(el)

  }
}

export default imgLazy
