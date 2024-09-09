import Benefits from '@/components/ServicePage/Benefits'
import Capabilities from '@/components/ServicePage/Capabilities'
import HeroSection from '@/components/ServicePage/HeroSection'
import IntroSection from '@/components/ServicePage/IntroSection'
import PackageDownloadFormContainer from '@/components/ServicePage/PackageDownloadFormContainer'
import ServiceCTA from '@/components/ServicePage/ServiceCTA'
import VideoSection from '@/components/ServicePage/VideoSection'
import { BenefitsData, CapabilityData, HeroData, IntroData, VideoSectionData } from './constant'

const page = () => {
  return (
    <div>
      <HeroSection data={HeroData} />
      <IntroSection data={IntroData} />
      <Capabilities data={CapabilityData}/>
      <Benefits data={BenefitsData}/>
      <VideoSection data={VideoSectionData} />
      <PackageDownloadFormContainer/>
      <ServiceCTA />
    </div>
  )
}

export default page