import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
function App() {

  const contacts =[
       {
         id: '1',
         name: 'Deepak',
         email: 'dsv2075@gmail.com'
       },
       
       {
        id: '2',
        name: 'Rahul',
        email: 'rah2075@gmail.com'
      }
  ]
  return (
    <div className="ui container ">
     <Header/>
     <AddContact/>
    <ContactList  contact={contacts}/>
    </div>
  );
}

export default App;
