import React from 'react';

export default class AddContacts extends React.Component{
    
     constructor(){
       super();
       this.state = {
        name : "",
        email: ""
      }
     }
    

    add = (e)=>{
      // not refresh on submit 
        e.preventDefault();
        if(this.state.name=== "" && this.state.email===""){
          alert("Please fill all the details");
          return;
        }
         this.props.addContactHandler(this.state);
        console.log(this.state);

        this.setState({name: "" , email: ""});
        
    }
    setName = (event)=>{
        this.setState({name: event.target.value});
    }
    setEmail = (event)=>{
      this.setState({email :event.target.value});
  }
    render(){
        return (
          <div className='ui main'>
              <h2>Add Contact </h2>
              <form className='ui form' onSubmit={this.add}>
                  <div className='field'>
                    <label>Name</label>
                    <input type ='text' name='name' placeholder='Name' value={this.state.name} onChange={this.setName} />
                  </div>
                  <div className='field'>
                    <label>Email</label>
                    <input type ='email' name='email' placeholder='Email' value={this.state.email}  onChange={this.setEmail } />
                  </div>
                  <button className='ui button blue'>Add</button>
              </form>
             </div>
           
        )
    }

}