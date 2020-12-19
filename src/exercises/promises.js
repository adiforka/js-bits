// not actually runnable. example only
function processAllUsers() {
  const sql = 'SELECT id FROM users'
  db.query(sql, []).then(users =>
    waitForEach(user => processUser(user.id), users)
  )
}

const waitForEach = (processFunc, [head, ...tail]) => {
  !head
    ? Promise.resolve()
    : processFn(head).then(waitForEach(processFunc, tail))
}
