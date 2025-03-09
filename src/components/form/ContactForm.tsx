"use client";

import { useState } from 'react';
import Button from '../ui/button';
import Input from '../ui/input';
import Textarea from '../ui/textarea';
import { API_URL } from '@/config';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the entire formData object
      });

      console.log("Request data:", formData)

      if (!response.ok) {
        const errorData = await response.text();
        console.error('HTTP error, status = ' + response.status, errorData);
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      setSubmissionStatus({ success: true, message: result.message });

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setSubmissionStatus({ success: false, message: 'Failed to send email.' });
      // alert('Failed to send email.');
    } finally {
      setLoading(false);
      setFormData({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="mt-2 space-y-2 w-[17rem] xs:w-[27rem]"
        style={{ "flexGrow": "1", "flexBasis": "min-content", "flexShrink": "1" }}
      >
        {/* FullName */}
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        {/* EmailAddress */}
        <Input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />

        {/* PhoneNumber */}
        <Input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />

        {/* Subject */}
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />

        {/* Message */}
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={3}
          required
        ></Textarea>

        {/* Button */}
        <div className="w-full">
          <Button size="md" variant="secondary" className='w-full' disabled={loading}>
            {loading ? "Sending..." : "Submit Inquiry"}
          </Button>
        </div>

      </form>

      {/* Display submission status */}
      {submissionStatus && (
        <div className={`mt-4 p-4 rounded ${submissionStatus.success ? 'bg-success/50 text-success' : 'bg-error/50 text-error'}`}>{submissionStatus.message}</div>
      )}
    </div>
  );
};

export default ContactForm;
