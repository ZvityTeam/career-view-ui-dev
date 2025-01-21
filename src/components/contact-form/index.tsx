import React, { useState } from 'react';

export const ContactForm = () => {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Google Form Details
  const GOOGLE_FORM_ACTION_URL =
    'https://docs.google.com/forms/d/e/[GOOGLE_FORM_ID]/formResponse';
  const GOOGLE_FORM_FIELDS = {
    name: 'entry.368036041', // Replace with actual field ID
    age: 'entry.13949470', // Replace with actual field ID
  };

  // ✅ Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ Create form payload
    const formPayload = new FormData();
    formPayload.append(GOOGLE_FORM_FIELDS.name, formData.name);
    formPayload.append(GOOGLE_FORM_FIELDS.age, formData.age);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors', // Required for Google Forms
      });

      // ✅ Reset form and show success message
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5s
      setFormData({ name: '', age: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='mx-auto max-w-lg rounded bg-white p-6 shadow'>
      <h2 className='mb-4 text-2xl font-bold'>Contact Form</h2>

      {isSubmitted && (
        <p className='mb-4 text-green-500'>✅ Form submitted successfully!</p>
      )}

      <form onSubmit={handleSubmit}>
        <label className='mb-2 block'>Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          required
          className='mb-3 w-full border p-2'
        />

        <label className='mb-2 block'>Age:</label>
        <input
          type='number'
          name='age'
          value={formData.age}
          onChange={handleChange}
          placeholder='Enter your age'
          required
          className='mb-3 w-full border p-2'
        />

        <button
          type='submit'
          className={`rounded bg-blue-500 px-4 py-2 text-white ${
            isSubmitting ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
