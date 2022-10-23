import React, { useState } from 'react';

import { MajorButton } from './MajorButton';

const FORM_ENDPOINT = ''; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-sm">We&apos;ll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="relative w-full rounded border-0 bg-white p-3 text-sm text-gray-600 shadow outline-none placeholder:text-gray-400 focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="relative w-full rounded border-0 bg-white p-3 text-sm text-gray-600 shadow outline-none placeholder:text-gray-400 focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="relative h-60 w-full rounded border-0 bg-white p-3 text-sm text-gray-600 shadow outline-none placeholder:text-gray-400 focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <MajorButton
          text="Send"
          link="submit"
          // className="mr-1 mb-1 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
          type_="submit"
        />
      </div>
    </form>
  );
};

export default ContactForm;
