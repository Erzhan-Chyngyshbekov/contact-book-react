import React, { useState } from "react";
import classes from "../form.module.css";

function ModalWindow(props) {
  const {
    index,
    currentFullName,
    currentEmail,
    currentPhoneNumber,
    contactsList,
    setContactsList,
    setEditingContact,
  } = props;

  const [fullName, setFullName] = useState(currentFullName);

  const [email, setEmail] = useState(currentEmail);

  const [phoneNumber, setPhoneNumber] = useState(currentPhoneNumber);

  const handleEdit = (e) => {
    e.preventDefault();
    setContactsList(
      contactsList.map((item, i) =>
        i === index ? { fullName, email, phoneNumber } : item
      )
    );
    setEditingContact(null);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal_dialog}>
        <div className={classes.modal_header}>
          <h3 className={classes.modal_title}>Update Form</h3>
        </div>
        <div className={classes.modal_body}>
          <form onSubmit={handleEdit} className={classes.modal_content}>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              name="fullName"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              required
            />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              name="phoneNumber"
              required
            />
            <button>OK</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
