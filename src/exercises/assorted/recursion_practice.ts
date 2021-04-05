let categories = [
  { id: 'media', parent: null },
  { id: 'audio', parent: 'media' },
  { id: 'book', parent: 'media' },
  { id: 'video', parent: 'media' },
  { id: 'metal', parent: 'audio' },
  { id: 'hip-hop', parent: 'audio' },
  { id: 'jazz', parent: 'audio' },
  { id: 'horror', parent: 'video' },
  { id: 'comedy', parent: 'video' },
  { id: 'action', parent: 'video' },
  { id: 'non-fiction', parent: 'book' },
  { id: 'romance', parent: 'book' },
  { id: 'biography', parent: 'book' }
]

let makeTree = (categories, parent) => {
  let node = {}
  const sentinel = null
  categories
    .filter(c => c.parent === parent)
    .forEach(c => (node[c.id] = makeTree(categories, c.id)))

  if (Object.getOwnPropertyNames(node).length === 0) {
    return sentinel
  }

  return node
}

console.log(JSON.stringify(makeTree(categories, null), null, 2))
