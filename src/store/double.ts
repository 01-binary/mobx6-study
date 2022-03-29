import { observable } from 'mobx'

const doubleStore = observable({
  value: 1,
  get double() {
    return this.value * 2
  },
  increment() {
    this.value++
  },
})

export default doubleStore