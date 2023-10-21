// File: ContactForm.tsx
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8">
      <div className="my-2">
        <label htmlFor="text" className="text-res-109 my-2 text-sm font-medium">
          Company Name
        </label>

        <div className="relative my-2">
          <input
            type="text"
            className="w-full rounded-lg h-14 border-res-105 border px-4 text-sm shadow-sm"
            placeholder="Enter business name"
          />
        </div>
      </div>

      <div className="my-2">
        <label htmlFor="text" className="text-res-109 my-2 text-sm font-medium">
          Business Email Address
        </label>

        <div className="relative my-2">
          <input
            type="email"
            className="w-full rounded-lg h-14 border-res-105 border px-4 text-sm shadow-sm"
            placeholder="Enter email address"
          />
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="text" className="text-res-109 my-2 text-sm font-medium">
          Subject (Optional)
        </label>

        <div className="relative my-2">
          <input
            type="text"
            className="w-full rounded-lg h-14 border-res-105 border px-4 text-sm shadow-sm"
            placeholder="Enter subject"
          />
        </div>
      </div>
      <div className="my-2">
        <label htmlFor="text" className="text-res-109 my-2 text-sm font-medium">
          Tell us what you need
        </label>

        <div className="relative my-2">
          <textarea
            className="resize-none w-full h-[105px] rounded-lg border-res-105 border px-4 text-sm shadow-sm"
           
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="block w-full rounded-lg bg-res-102 px-5 py-3 text-sm font-extrabold text-white"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;
