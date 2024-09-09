import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const ContactInfo = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-5 laptop:flex-row">
        <div className="p-6 flex flex-col gap-2 flex-1 border-[1px] border-solid w-full ">
            <div className="text-[var(--accent-color)]"><MdEmail size={24}/></div>
            <div className="flex flex-col gap-1 items-start justify-center">
                <div><h5>Send us an email</h5></div>
                <div><p>info@appcentric.com</p></div>
            </div>

        </div>
        <div className="p-6 flex flex-col gap-2 flex-1 border-[1px] border-solid w-full">
            <div className="text-[var(--accent-color)]"><FaPhone size={24} /></div>
            <div className="flex flex-col gap-1 items-start justify-center">
                <div><h5>Call us directly</h5></div>
                <div><p>+632 8 883 5358 - Weekdays 9am to 6pm GMT+8</p></div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default ContactInfo