import React from 'react'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Primarybutton from '../components/buttons/primary'

export const Createcontactpage = ({ control }) => {
    const  {contacts, setContacts} = control
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const handleSubmit = (e, contacts) => {
        e.preventDefault()
        let newUser = { email, firstName, lastName }
        contacts.push(newUser)
        setContacts(contacts)
        setEmail("")
        setFirstName("")
        setLastName("")
        alert("User Saved Successfully")
    
    }
    return (<>
        <Navbar/>
    <form onSubmit={(e) => handleSubmit(e, contacts)}>
          <label>Email Address:</label>
      <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        required
        minLength={3}
        maxLength={25}
      />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        minLength={2}
        maxLength={30}
      />

      <Primarybutton label="Create Contact"/>
    </form></>
        
  )
}

export default Createcontactpage