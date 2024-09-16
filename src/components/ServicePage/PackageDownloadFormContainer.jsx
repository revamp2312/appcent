import React from 'react'
import PackageDowloadForm from './PackageDowloadForm'

const PackageDownloadFormContainer = ({subtitle}) => {
  return (
    <div className="flex justify-center items-center m-auto w-full px-6 tablet:px-14 laptop:px-[70px] py-12">
    <div className="w-full max-w-[1440px] flex flex-col justify-center items-start gap-12 laptop:flex-row">
      <div className="flex flex-col gap-2 items-start justify-start max-w-[495px] w-full">
          <h2 className="text-[var(--accent-color)]">Let’s Work Together</h2>
          <h4>{subtitle}</h4>
      </div>
      <div>
          <PackageDowloadForm  />
      </div>
    </div>
  </div>
  )
}

export default PackageDownloadFormContainer