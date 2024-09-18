"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formSuccesfullySubmitted,setFormSuccessfullySubmitted]=useState(false)
  return (
    <div className="laptop:p-12 laptop:shadow-contactFormBoxShadow rounded flex flex-col gap-4">
      {formSuccesfullySubmitted &&      <div className="max-w-[637px] flex gap-2 justify-center items-center px-5 py-4 border-[var(--accent-color)] border-solid border-[1px] bg-[var(--primary-color)] rounded">
           
            <div className="text-base">
              Thank you for reaching out! Your inquiry has been received and
              will be addressed shortly.
            </div>
          </div>}
      <form id="form" className="flex flex-col gap-8" onSubmit={(e)=>{
        e.preventDefault()
        setFormSuccessfullySubmitted(true)}}>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-5 justify-center items-center w-full laptop:flex-row">
          <div className="flex flex-1 flex-col gap-2 w-full">
            <label htmlFor="">Name*</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Robert Cruz"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 w-full">
            <label htmlFor="">Email Address*</label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@company.com"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center w-full laptop:flex-row">
          <div className="flex flex-1 flex-col gap-2 w-full">
          <label htmlFor="">Company</label>
            <input
              name="company"
              type="text"
              placeholder="Your company name"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 w-full">
            <label htmlFor="">Contact Number</label>
            <input
              required
              name="email"
              type="tel"
              placeholder="+65-XXXX-YYYY"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">How can we help?</label>
            <textarea
              name="email"
              type="email"
              placeholder="Tell us a little about the inquiry"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#5C5C5C] ">
          By submitting this form, you confirm that you agree to the storing and processing of your personal data by Appcentric as described in the Privacy Policy.
          </p>
          <div className="w-full">
            <button className="w-full py-4 px-6 rounded-lg text-[white] bg-primary-btn-bg   ">
            Get Experts
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
