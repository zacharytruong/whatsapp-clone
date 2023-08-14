import React, { useState } from 'react';
import { Button, Modal, Nav, Tab } from 'react-bootstrap';
import Contacts from './Contacts';
import Conversations from './Conversations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSTATIONS_KEY = 'conversation';
const CONTACTS_KEY = 'contacts';

const Sidebar = ({ id }) => {
  const [activeKey, setActiveKey] = useState(CONVERSTATIONS_KEY);
  const converstationOpen = activeKey === CONVERSTATIONS_KEY;
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSTATIONS_KEY}>Coversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-end overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSTATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-end small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0" onClick={() => setModalOpen(true)}>
          New {converstationOpen ? CONVERSTATIONS_KEY : CONTACTS_KEY}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {converstationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default Sidebar;
