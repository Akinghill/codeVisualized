import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { db } from '../../firebase/firebase';

export default function ContactForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      toast.error('Email not valid.')
      return 
    }

    db.collection('contacts')
      .add({
        email: email,
      })
      .then(() => {
        setEmail('');
        toast.dark(
          "Congrats you've been added to our list! Great things are coming soon!"
        );
      })
      .catch((err) => {
        toast.error('Sorry we are unable to add you at this time.');
      });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
