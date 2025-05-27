import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setStatus('Name and email are required.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('Invalid email format.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/leads', formData);
      setStatus(res.data.message);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setStatus('Failed to submit lead. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lead Generation Form</h2>
      <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
      <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default LeadForm;
