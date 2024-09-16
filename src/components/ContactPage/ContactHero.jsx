import Image from "next/image"
import ContactForm from "./ContactForm"


const ContactHero = () => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-[60px] laptop:flex-row">
        <div className="flex flex-col gap-12 items-start justify-center laptop:max-w-[576px] w-full">
            <div className="flex flex-col gap-4 justify-center items-start">
                <h2>Building A Great Company Takes Time. We&apos;re Here to Support Your Journey.</h2>
                <p>We can&apos;t wait to hear from you. Talk to us today.</p>
            </div>
            <div className="w-full">
                <Image className="w-full" src="/contactPageImages/ContactHero.png" width={576} height={266} alt="Contact-Hero" />
            </div>
        </div>
        <div>
            <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactHero