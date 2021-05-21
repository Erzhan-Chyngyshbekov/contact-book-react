import React from "react";
import classes from "../form.module.css";
import cancelImg from "../../assets/icons/cancel.png";
import editImg from "../../assets/icons/pencil.png";

function ContactItem(props) {
  const { item, index, removeContact, handleEditClick } = props;

  return (
    <li key={index}>
      <h2> {item.fullName} </h2>
      <p> {item.email} </p>
      <p> {item.phoneNumber} </p>
      <img
        onClick={() => handleEditClick(index)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
      <img
        onClick={() => removeContact(index)}
        className={classes.cancelIcon}
        src={cancelImg}
        alt="cancel-img"
      />
    </li>
  );
}

export default ContactItem;
