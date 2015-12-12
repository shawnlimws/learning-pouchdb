var PouchDB = require('pouchdb')

var db = new PouchDB('kittens')

var doc = {
  '_id': '1',
  'name': 'charlotte'
}
db.put(doc)

var doc2 = {
  '_id': '2',
  'name': 'shawn'
}
db.put(doc2)

db.get('1').then(doc => {
  doc.name = 'ngehwee'
  return db.put(doc)
}).then(() => db.get('1')
).then(doc =>
  console.log(doc)
)

db.info().then(info =>
  console.log(info)
)
