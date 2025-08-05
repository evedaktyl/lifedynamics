'use client';

import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import dynamic from 'next/dynamic';

const timeSlots = [
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM'
];

const Calendar = dynamic(() => import('react-calendar'), { ssr: false });

export default function BookPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
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

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      message: form.message,
      phone: `${form.countryCode}${form.contactNumber}`.trim(),
      date: selectedDate?.toISOString(),
      time: selectedTime,
    };

    try {
      console.log(payload);

      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setStep(1);
        setSelectedDate(new Date());
        setSelectedTime('');
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+65',
          contactNumber: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6">
      <h1 className="text-2xl font-bold mb-4">Book a Consultation</h1>

      {step === 1 && (
        <div className="space-y-6">
          {/* Inline calendar */}
          <div>
            <p className="mb-2 text-sm font-medium">Select a date</p>
            <Calendar
              onChange={(value) => {
                const date = Array.isArray(value) ? value[0] : value;
                setSelectedDate(date!);
              }}
              value={selectedDate}
              minDate={new Date()}
              tileDisabled={({ date, view }) =>
                view === 'month' && !(date.getDay() === 3 || date.getDay() === 4)
              }
              className="react-calendar border rounded-md overflow-hidden"
            />
          </div>

          {/* Time slots */}
          <div>
            <p className="mb-2 text-sm font-medium">Select a time</p>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`border p-2 text-sm rounded ${
                    selectedTime === slot
                      ? 'bg-accent-blue text-white'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => selectedDate && selectedTime && setStep(2)}
            disabled={!selectedDate || !selectedTime}
            className="mt-4 w-full bg-accent-blue text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-gray-600">
            Booking for <strong>{selectedDate?.toDateString()}</strong> at <strong>{selectedTime}</strong>
          </p>
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

          <input
            type="email"
            name="email"
            placeholder="Your Email"
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
            placeholder="Optional message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded min-h-[100px]"
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-accent-blue text-white px-6 py-2 rounded"
            >
              Submit Booking
            </button>
          </div>
        </form>
      )}

      {status === 'success' && (
        <p className="text-green-600 mt-4">Booking submitted successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
