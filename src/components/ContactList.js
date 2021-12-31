import React from 'react';
import ContactCard from './ContactCard';
// import List from 'semantic-ui-react';
const ContactList = (props)=>{
  console.log(props);

  const deleteContactHandler = (id) => {
    console.log("Fdf" +id)
    props.getContactId(id);
  };
  const renderContactList = props.contact.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
}
export default ContactList;