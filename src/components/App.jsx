import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './Form/Form';
import { ContactsList } from './Contacts/Contacts';


export class App extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  };

   onSubmit = (values, { formikBag }) => {
  const { contacts } = this.state;

  const contactExists = contacts.some(contact => contact.name === values.name);

  if (contactExists) {
    alert(`Contact "${values.name}" already exists in the list.`);
  } else {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
    formikBag.resetForm();
  }
};

  render() {
    const { contacts } = this.state; 
    
    return (
      <div>
        <ContactForm onSubmit={this.onSubmit} reset={this.resetForm}/>
        <ContactsList contacts={contacts}/>
      </div>
    );
  }
}
