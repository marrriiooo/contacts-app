import React from "react";
import ContactItem from "./ContactItem";

function ContactListt({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} onDelete={onDelete} {...contact} />
      ))}
    </div>
  );
}

export default ContactListt;
