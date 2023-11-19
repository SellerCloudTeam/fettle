import type { NextPage } from 'next'
import { useState } from 'react'
import { useInterval } from 'usehooks-ts'
import Image from 'next/image'
import IncidentsSection from "../src/incidents"
import ServicesSection from "../src/services"
import { REFRESH_INTERVAL_MILLISECONDS } from '../src/utils/constants'

const Home: NextPage = () => {
  const [refresh, setRefresh] = useState<number>(0)

  useInterval(
    () => setRefresh(refresh + 1),
    REFRESH_INTERVAL_MILLISECONDS
  );

  return (
    <div className='h-full w-full '>
      <div className="mt-20 absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="w-full h-32 absolute bg-blue-200">
        <div className="mt-3 md:pl-40 md:pr-40 sm:w-full h-full">
          <img src="/sellercloud.svg" width={150} height={100} className="w-40 h-16 w-full mx-auto" alt="Logo" />
        </div>
      </div>
      <div className='mt-20 w-full absolute overflow-scroll	'>
        <ServicesSection key={refresh} />
      </div >
    </div>
  )
}

export default Home;
