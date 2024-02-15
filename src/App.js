import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Mainpage from "./pages/mainPage";
import Editcontactpage from "./pages/editContactPage";
import Createcontactpage from "./pages/createContactPage";

function App() {
  const [contacts, setContacts] = useState([])
  const control = {contacts, setContacts}

  return (
    <Routes>
    <Route path='/' element={<Mainpage control={control} />}></Route>
    <Route path='/edit_contact' element={<Editcontactpage control ={control} />}></Route>
    <Route path='/create_contact' element={<Createcontactpage control={control} />}></Route>
    
  </Routes>);
    
  
}

export default App;
