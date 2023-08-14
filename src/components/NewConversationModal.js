import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useContacts } from '../context/ContactsProvider';
import { useConversations } from '../context/ConversationProvider';

const NewConversationModal = ({ closeModal }) => {
  const { contacts } = useContacts();
  const [selectedContactIds, setSlectedContactId] = useState([]);
  const { createConversations } = useConversations();

  const handleCheckboxChange = (contactId) => {
    setSlectedContactId((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return prevId !== contactId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversations(selectedContactIds);
    closeModal();
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
