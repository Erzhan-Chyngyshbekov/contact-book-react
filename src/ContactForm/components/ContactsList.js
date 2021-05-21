import React, { useState } from "react";
import classes from "../form.module.css";
// import cancelImg from "../../assets/icons/cancel.png";
// import editImg from "../../assets/icons/pencil.png";
import ModalWindow from "./ModalWindow";
import ContactItem from "./ContactItem";

function ContacstList(props) {
  const { contactsList, setContactsList } = props;

  const [editingContact, setEditingContact] = useState(null);

  const removeContact = (index) => {
    setContactsList(contactsList.filter((_, i) => i !== index));
  };

  const handleEditClick = (index) => {
    setEditingContact(index);
  };

  return (
    <ul className={classes.contactsList}>
      <h1>Contact List</h1>
      {contactsList.map((item, index) =>
        index === editingContact ? (
          <ModalWindow
            index={index}
            currentFullName={item.fullName}
            currentEmail={item.email}
            currentPhoneNumber={item.phoneNumber}
            contactsList={contactsList}
            setContactsList={setContactsList}
            setEditingContact={setEditingContact}
          />
        ) : (
          <ContactItem
            item={item}
            index={index}
            removeContact={removeContact}
            handleEditClick={handleEditClick}
          />
        )
      )}
    </ul>
  );
}

export default ContacstList;
