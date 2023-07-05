

import {Routes, Route} from "react-router-dom";
import Contacts from "./Contacts"
import ContactForm from "../Components/ContactForm"
import Dashboard from "./Charts_and_Maps"
import EditContact from "../Components/Edit_Contact"
const AllRoutes=()=>{


    return(
         
        <Routes >
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/> 
            <Route path="/dashboard" element={<Dashboard/>}/>  
            <Route path="/edit/:id" element={<EditContact/>}/>         
        </Routes>
        
    )
}

export default AllRoutes