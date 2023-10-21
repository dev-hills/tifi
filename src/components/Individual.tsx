import React from "react";

const Individual: React.FC = () => {
  return (
    <form action="/" method="post" className="flex flex-col w-[90%] md:w-[57%] lg:w-[40%]  mx-auto mb-28">
      <label className="text-gray-700 mb-2 mt-6">Full Name</label>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        className="mb-4 p-3 rounded-md border border-[#D0D5DD] focus:outline-none focus:border-orange-500"
      />

      <label className="text-gray-700 mb-2">Email Address</label>
      <input
        type="email"
        name="emailAddress"
        placeholder="Email Address"
        className="mb-4 p-3 rounded-md border border-[#D0D5DD] focus:outline-none focus:border-orange-500"

      />

      <label className="text-gray-700 mb-2">Subject</label>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="mb-4 p-3 rounded-md border border-[#D0D5DD] focus:outline-none focus:border-orange-500"
      />

      <label className="text-gray-700 mb-2">Comment</label>
      <textarea
        name="comment"
        placeholder="Comment"
        className="mb-4 p-3 rounded-md border border-[#D0D5DD]focus:outline-none focus-border-orange-500"
      />

      <button
        type="submit"
        className="bg-orange-500 text-white p-3 rounded-md"
      >
        Send Message
      </button>
    </form>
  );
};

export default Individual;
