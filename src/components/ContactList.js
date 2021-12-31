import React from 'react';
// import List from 'semantic-ui-react';
const ContactList = (props)=>{
       console.log(props)
  return (
      <div className='ui celled list '>Contact list
       <ul className='ui list'>
          {
          props.contact.map((e) => {
            return (
            <> 
              <div className='ui grid'>
              <div class="five wide column"><b>{e.id}  {e.name}</b></div>
              <div class="five wide column"> {e.email}</div>
              <div className='five wide column'> <i className='trash alternate icon'></i></div>
              </div>
             </>
             )
           })
          }
       </ul>
       
       </div>
 
  );
}
export default ContactList;