"use-client";

const ContactForm = () => {
  return (
    <div className="p-12 shadow-contactFormBoxShadow rounded">
      <form id="form" className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-5 justify-center items-center w-full">
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="">Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Robert Cruz"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
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
          <div className="flex gap-5 justify-center items-center w-full">
          <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="">Company</label>
            <input
              name="company"
              type="text"
              placeholder="Your company name"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
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
              required
              name="email"
              type="email"
              placeholder="Tell us a little about the inquiry"
              className="border-[1px] border-[#D0D5DD] border-solid rounded-lg py-3 px-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm ">
            By submitting this form, you confirm that you agree to the storing
            and processing of your personal data by Blink CX as described in the
            Privacy Policy.
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
