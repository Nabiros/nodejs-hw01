const contacts = require('./contacts');

console.log(contacts.listContacts());
// const fs = require('fs').promises;
// const path = require('path');

// async () => {
//   try {
//     const data = await fs.readFile(path.resolve('./package.json'), 'utf8')
//     console.log(JSON.parse(data).dependencies)
//   } catch (error) {
//     console.error(error)
//   }
// }