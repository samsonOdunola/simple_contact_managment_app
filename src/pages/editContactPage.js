import Navbar from '../components/navbar'
import { useState } from 'react'
import Primarybutton from '../components/buttons/primary'

export const Editcontactpage = ({ control }) => {
  const { contacts, setContacts } = control
  const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let newContacts = contacts
    
    if (lastName === "" && firstName === "") {
      alert("Please enter a value")
    } else {
      
      for (let i = 0; i < newContacts.length; i++){
        if (newContacts[i].email === email) {
          newContacts[i].firstName = firstName 
          newContacts[i].lastName = lastName
  
          
        }
        
      }
      
    }
    
    console.log(newContacts);
    setContacts(newContacts)
    setEmail("")
        setFirstName("")
        setLastName("")
    alert("Success")
    
  }
  const handleSelection = (selection) => {
    setEmail(selection.email)
    setFirstName(selection.firstName)
    setLastName(selection.lastName)
    
  }
  return (
    <div>
      <Navbar />
      <section>
        <ol>
          {contacts.map((contact, index) => {
            return <li onClick={()=>handleSelection(contact)} key={index}>
              {contact.email}
            </li>
          })}
        </ol>
        <form onSubmit={(e) => handleSubmit(e, contacts)}>
          <h3>Edit User Information</h3>
          <label>Email Address:</label>
      <input type="email" name="email" value={email} readOnly />

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

      <Primarybutton label="Save"/>
    </form>
      </section>
      
    </div>
  )
}

export default Editcontactpage
