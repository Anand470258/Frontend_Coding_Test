import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../Redux/action';
import { connect } from 'react-redux';


// type CustomTextFieldProps = {
//     first_name: string,
//     last_name: string,
//     handleChange: void,
// }
function ContactForm() {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })
    const handleChange = (e) => {        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleSave() {
        
        dispatch(addContact(form))
        
       
    }
    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl font-bold mb-4">Create Contact</h2>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="mob"
                    type="number"
                    name="mob"
                    min='10'
                    max='10'
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={'inactive'}>Inactive</option>
                </select>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSave} >
                Save Contact
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    
    return {
        contactList: state.contactList, // Assuming 'data' is the property name in your root reducer
    };
  };
  
  export default connect(mapStateToProps, { addContact })(ContactForm);
// export default ContactForm