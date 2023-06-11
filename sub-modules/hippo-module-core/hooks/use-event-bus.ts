import mitt from 'mitt'

let eventBus: any = null
if (null === eventBus) {
  eventBus = mitt()
}

function useEventBus() {
  return eventBus
}

function useEventBusEmit(eventName: string, data: any = {}) {
  eventBus.emit(eventName, data)
}

function useEventBusOn(eventName: string, handle: Function) {
  eventBus.on(eventName, handle)

  eventBus
}

function useEventBusRemove(eventName: string, handle: Function) {
  eventBus.off(eventName, handle)
}

function useEventBusClear() {
  eventBus.all.clear()
}

export { useEventBus, useEventBusEmit, useEventBusOn, useEventBusRemove, useEventBusClear }
