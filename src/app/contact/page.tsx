'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+65',
    contactNumber: '',
    message: '',
  });

  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      message: form.message,
      phone: `${form.countryCode}${form.contactNumber}`.trim(),
    };

    try {
        console.log({
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            phone: `${form.countryCode}${form.contactNumber}`,
            message: form.message,
        });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+65',
          contactNumber: '',
          message: '',
        });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className='bg-background mt-20 ml-20'>
      <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <div className="flex gap-4">
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            required
            className="w-1/3 border border-gray-300 p-2 rounded"
          >
            <option value="+65">🇸🇬 +65 (SG)</option>
            <option value="+60">🇲🇾 +60 (MY)</option>
            <option value="+86">🇨🇳 +86 (CN)</option>
            <option value="+1">🇺🇸 +1 (US)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+61">🇦🇺 +61 (AU)</option>
            <option value="+91">🇮🇳 +91 (IN)</option>
            {/* Add more if needed */}
          </select>

          <input
            type="tel"
            name="contactNumber"
            placeholder="Phone Number"
            value={form.contactNumber}
            onChange={handleChange}
            required
            className="w-2/3 border border-gray-300 p-2 rounded"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-2 rounded min-h-[120px]"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
