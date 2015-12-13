const PouchDB = require('pouchdb')
var db = new PouchDB('http://localhost:5984/kittens')

db.bulkDocs([
  {
    _id: 'mittens',
    cuteness: '9.0',
    occupation: 'kitten'
  },
  {
    _id: 'littens',
    cuteness: '7.0',
    occupation: 'kitten'
  },
  {
    _id: 'fittens',
    cuteness: '8.5',
    occupation: 'kitten'
  }
])

db.allDocs({
  include_docs: true,
  attachments: true
}).then(result => console.log(result.rows[0]))
.catch(err => console.log(err))
