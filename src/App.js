import React, { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {

   const LOCAL_STORAGE_KEY="contacts";
     const [contact, setcontact] = useState([]);

  const addContactHandler =(newcontact)=>{
          console.log(newcontact);
          
          var length = contact.length+1;
          setcontact([...contact, {id : length+1,...newcontact}]);
        
         console.log("all" + contact);
  }
 // this useeffect will called before the second one, it means we have to maintain the order of useEffect
  useEffect(()=>{
   
    try{
      var contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(contact) {setcontact(contacts)};
    }catch(error){
     
    }  
},[]);

 useEffect(()=>{
   
     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contact));
 },[contact]);

   const removeContactHandler = (id)=>{
      console.log("fdsfsd")
      const newContactList =contact.filter((e)=>{
         return e.id!=id;
      })

      setcontact(newContactList);
   }
  
  return (
    <div className="ui container ">
     <Header/>
     <AddContact  addContactHandler={addContactHandler}/>
    <ContactList  contact={contact} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
