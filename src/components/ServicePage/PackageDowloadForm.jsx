"use client"

const PackageDowloadForm = () => {


//   const onButtonClick = () => {
//     const pdfUrl = {pdfToDownload};
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "service.pdf"; // specify the filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };
  return (
    <div className="p-6 tablet:p-12 bg-[var(--primary-color)] rounded laptop:max-w-[716px] w-full">
      <form id="package-form" className="flex flex-col gap-8" >
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

        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#5C5C5C]">
          By submitting this form, you confirm that you agree to the storing and processing of your personal data by Appcentric as described in the Privacy Policy.
          </p>
          <div className="w-full">
            <button className="w-full py-4 px-6 rounded-lg text-[white] bg-primary-btn-bg   ">
            Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PackageDowloadForm;
