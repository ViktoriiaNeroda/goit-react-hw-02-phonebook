import React, { useState } from 'react';
import { StyledContact, StyledFilter, StyledList, StyledTextFilter, Title } from './Contacts.styled';

export function ContactsList({ contacts }) {
    
const [searchText, setSearchText] = useState('');
  const filteredContacts = contacts.filter(contact =>
  contact.name && contact.name.toLowerCase().includes(searchText.toLowerCase())
);

    const handleSearchChange = event => {
    setSearchText(event.target.value);
  };

  
  return (
      <>
          <div>
          <Title>Contacts</Title>
          <StyledTextFilter>Find contact by name</StyledTextFilter>
          <StyledFilter type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Search by name"></StyledFilter>
        </div>
          <StyledList>
             {filteredContacts.map(contact => (
            <StyledContact key={contact.id}>
            {contact.name}: {contact.number}
            </StyledContact>
           ))}
         </StyledList>
      </>
  );
}
