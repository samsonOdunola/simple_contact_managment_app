import React from 'react'
import Navbar from '../components/navbar'
import Secondarybutton from '../components/buttons/secondary'


export const Mainpage = ({ control }) => {
    const { contacts, setContacts } = control
    
    const removeContact = (email) => {  
        
        let newContactList = contacts.filter((contact) => contact.email !== email)
        setContacts(newContactList)
    }
  return (
      <div className='main'>
          <Navbar />
          <h1>Contact Information</h1>
          <table>
          <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
              </thead>
              <tbody>
                  {contacts.map((entry, index) => {
                  return <tr key={index}>
                      <td>{entry.firstName}</td>
                      <td>{entry.lastName}</td>
                      <td>{entry.email}</td>
                      <td><button className='sec-btn' onClick={()=>removeContact(entry.email)} >Remove</button></td>
                  </tr>
              })}
              </tbody>{            
              
          }</table>
      </div>
  )
}

export default Mainpage