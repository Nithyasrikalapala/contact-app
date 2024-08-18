import React,{useState,useEffect}from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { v4 as uuid} from "uuid";
import './App.css';
import Header from "./Header";

import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from './ContactDetails';


function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const[contacts,setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
};

const removeContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id!==id;
  });
  setContacts(newContactList);
}
  useEffect(()=>{
     const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     if(retriveContacts) setContacts(retriveContacts);
  },[]);
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

  },[contacts]);

  
  return (
    <div className="ui container">
      <Router>
      <Header/>
      
      <Routes>
      <Route
       path="/add" 
       element= {
        <ContactList
        
        contacts={contacts}
        getContactId={removeContactHandler}
        />
      }
    />
       <Route
          path="/"
          element={
            <AddContact addContactHandler={addContactHandler} />
          }
        />


      <Route path="/contact/:id"
      element={<ContactDetail/>}/>
      </Routes>
      </Router>
      
    </div>
  )
}

export default App;
