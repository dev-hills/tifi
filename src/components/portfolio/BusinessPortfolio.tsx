import React from "react";

const BusinessPortfolio: React.FC = () => {
  return (
    <form class="flex flex-col lg:w-[40%] md:w-[70%] w-[100%] p-4 mx-auto py-16 font-jakarta-sans text-[14px] font-medium">
      <label htmlFor="" class="mb-6">Company Name
        <input type="text" placeholder='Enter business name' class="block border rounded-[8px] p-2 w-[100%] mt-2"/></label>
        <label htmlFor="" class="mb-6">Email Address
        <input type="text" placeholder='Enter email address' class="block border rounded-[8px] p-2 w-[100%] mt-2" /></label>
        <label htmlFor="" class="mb-6">Subject (optional)
        <input type="text" placeholder='Enter subject' class="block border rounded-[8px] p-2 w-[100%] mt-2"/></label>
        <label htmlFor="" class="mb-6">Tell us what we can do for you <textarea name="" id="" cols="30" rows="10" placeholder='Type your message' class="block border rounded-[8px] p-2 w-[100%] mt-2"/></label>
        <button class="bg-[#FF601F] text-white rounded-[8px] p-4 uppercase">Send Message</button>
    </form>
  );
};

export default BusinessPortfolio;
