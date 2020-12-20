// a generic dictionary class built around an array of tuples for keys/values
export class Dictionary<K, V> {
  store: [k: K, v: V][] = []

  set(key: K, value: V) {
    // if key already in store, overrite (self use of has method)
    if (this.has(key)) {
      for (let i = 0; i < this.store.length; i++) {
        this.store[0][1] = value
      }
    }
    // if key not already in store, push
    else {
      this.store.push([key, value])
    }
    return this
  }
  get(key: K) {
    let value = this.store.filter(entry => entry[0] === key)[0][1]
    return value
  }

  has(key: K) {
    return this.store.some(entry => entry[0] === key)
  }

  remove(key: K) {
    // self-use of has method
    if (this.has(key)) {
      let keyIdx = this.store.findIndex(entry => entry[0] === key)
      return this.store.splice(keyIdx, 1)[1]
    }
  }

  clear() {
    this.store = []
  }

  size() {
    return this.store.length
  }

  toString() {
    let representation = ''
    for (const entry of this.store) {
      console.log(entry)
    }
    return representation
  }

  // not the deepest clone at all, so keeping this private, at least for now.
  private entries() {
    return [...this.store]
  }
}
