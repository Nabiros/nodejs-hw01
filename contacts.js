const path = require('path');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('./db/contacts.json');

fs.readFile(contactsPath, 'utf8', (error, data) => {
  if (error) {
    console.log(error)
    return
  }
  const jsonParse = JSON.parse(data)
  console.log(jsonParse)
})

async function listContacts () {
  try {
    const data = await fs.readFile(contactsPath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error(error)
  }
};

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const findContactById = contacts.find(contact => contact.id === Number(contactId))
    return findContactById;
  }
  catch (error) {
    console.error(error);
  }
};

async function removeContact(contactId) {
  try {
    const contact = await listContacts();
    const newContactList = contact.filter(contact => contact.id !== Number(contactId))
    await fs.writeFile(contactsPath, JSON.stringify(newContactList, null, 2))
    return newContactList;
  }
  catch (error) {
    console.error(error)
  }
};

async function addContact(name, email, phone) {
  const newContact = { id: uuidv4(), name, email, phone }
  try {
    const findContacts = await fs.readFile(contactsPath, 'utf8')
    const parseContacts = JSON.parse(findContacts);
    const newContactList = [...parseContacts, newContact]
    await fs.writeFile(contactsPath, JSON.stringify(newContactList, null, 2), 'utf8');
    return newContactList;
  }
  catch (error) {
    console.error(error)
  }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};