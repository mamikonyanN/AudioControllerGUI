import { create } from 'zustand'

const debounce = (func, delay) => {
  let debounceTimer
  return function () {
    const context = this
    const args = arguments
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => func.apply(context, args), delay)
  }
}

const useAudioStore = create((set) => {
  const wsUrl =
    import.meta.env.MODE === 'production'
      ? `ws://${window.location.host}/ws`
      : 'ws://localhost:8080/ws'

  const socket = new WebSocket(wsUrl)

  socket.onopen = () => void 0
  socket.onclose = () => void 0
  socket.onmessage = (event) => set(() => JSON.parse(event.data))
  const debouncedSend = debounce((arg) => socket.send(arg), 300)
  const send = (arg) => socket.send(arg)

  return {
    updateField: ([type, value], debounce = true) => {
      set((state) => {
        if (debounce) debouncedSend(JSON.stringify({ type, value }))
        else send(JSON.stringify({ type, value }))

        return { ...state, [type]: value }
      })
    },
  }
})

export default useAudioStore
