import React, { useState } from "react";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";

export default function ContactForm() {
  const [contactsList, setContactsList] = useState([]);

  return (
    <div>
      <Form contactsList={contactsList} setContactsList={setContactsList} />

      <ContactsList
        contactsList={contactsList}
        setContactsList={setContactsList}
      />
    </div>
  );
}
