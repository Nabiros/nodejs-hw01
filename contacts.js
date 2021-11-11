const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.resolve('./db/contacts.json');

// TODO: задокументировать каждую функцию

const listContacts = (async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8')
    console.log(JSON.parse(data))
  } catch (error) {
    console.error(error)
  }
});

function getContactById(contactId) {
  // ...твой код
};

function removeContact(contactId) {
  // ...твой код
};

function addContact(name, email, phone) {
  fs.appendFile(contactsPath, 'test', 'utf8')
}

// const addContact = async (name, email, phone)=> {
//   const newContact = '';
//   try {
//     await fs.writeFile(contactsPath, newContact, 'utf8');
//   } catch (error) {
//     console.error(error);
//   }
// };

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};


// fs.readFile(path[, options], callback)
// fs.writeFile(file, data[, options], callback)

// function listContacts() {
//   fs.readFile(contactsPath, 'utf8', (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//     console.log(data);
// })
// };