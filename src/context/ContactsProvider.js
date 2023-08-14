import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = createContext();

const useContacts = () => {
  return useContext(ContactsContext);
};

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const createContacts = (id, name) =>
    setContacts((prevContacts) => [...prevContacts, { id, name }]);

  return (
    <ContactsContext.Provider value={{ contacts, createContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsProvider, useContacts };
