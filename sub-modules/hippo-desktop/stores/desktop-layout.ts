import { defineStore } from 'pinia'
export const useDesktopLayoutStore = defineStore('desktopLayout', {
  state: () => {
    return {
      visitedViews: [],
      cachedViews: []
    } as any
  },
  getters: {
    getVisitedViews(state) {
      return state.visitedViews
    },
    getCachedViews(state: any) {
      return state.cachedViews
    }
  },
  actions: {
    addVisitedView(view: any) {
      if (this.visitedViews.some((v: any) => v.path === view.path)) {
        return
      }

      const newView: any = {
        ...view,
        title: view.meta.title || 'no-name',
        icon:view.meta.icon || 'Document',
      }

      this.visitedViews.push(newView)

      if (!view.meta.noCache) {
        this.cachedViews.push(view.name)
      }
    },
    delVisitedView(view: any) {
      return new Promise((resolve) => {
        for (const [i, v] of this.visitedViews.entries()) {
          if (v.path === view.path) {
            this.visitedViews.splice(i, 1)
            break
          }
        }
        for (const i of this.cachedViews) {
          if (i === view.name) {
            const index = this.cachedViews.indexOf(i)
            this.cachedViews.splice(index, 1)
            break
          }
        }
        resolve([...this.visitedViews])
      })
    },
    delOthersViews(view: any) {
      return new Promise((resolve) => {
        for (const [i, v] of this.visitedViews.entries()) {
          if (v.path === view.path) {
            this.visitedViews = this.visitedViews.slice(i, i + 1)
            break
          }
        }
        for (const i of this.cachedViews) {
          if (i === view.name) {
            const index = this.cachedViews.indexOf(i)
            this.cachedViews = this.cachedViews.slice(index, i + 1)
            break
          }
        }
        resolve([...this.visitedViews])
      })
    },
    delAllViews() {
      return new Promise((resolve) => {
        this.visitedViews = []
        this.cachedViews = []
        resolve([...this.visitedViews])
      })
    }
  }
})
