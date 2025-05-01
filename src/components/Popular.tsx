'use client'
import Coeur from '@/asset/coeur.png'
import Image from "next/image"
import { Swiper,SwiperSlide } from "swiper/react"
import { Sliders } from "@/asset/Images"


import 'swiper/css';
import 'swiper/css/effect-coverflow'


import { EffectCoverflow,Mousewheel } from "swiper/modules";

type Img ={
  src:string,
  width:number,
  height:number
}

type SlidePropos = {
  img:Img,
  id:number
}


const Slider = ({img,id}:SlidePropos)=>{
  return(
    <div className="w-[220px] shrink-0 relative">
    <Image
        src={img}
        alt={`image-${id}`}
        height={100}
        width={100}
      className="w-full h-72  rounded-xl"
    />
  <div className="absolute border border-green-900 left-0 right-0 p-2 bottom-0 z-50 bg-gradient-to-r from-violet-600/90 to-sky-600/90 rounded-b-xl flex flex-row justify-between ">
        <div >
            <h3 className="text-lg font-bold">Digital Decade</h3>
            <p className="text-sm">by Anthony gargasz</p> 
        </div>
        <div className="text-xs flex flex-col  items-center justify-center gap-y-1">
          <p className="border border-violet-700/50 px-3 rounded-md">245 ETH</p>
          <p className="flex flex-row gap-x-1">
            <Image 
              src={Coeur}
              alt="coeur"
              height={20}
              width={15}
            />
            <span className="font-semibold">50k</span>
          </p>
        </div>
  </div>
</div>
  )
}



export default function Popular() {
  const milieur = Slider.length/2
  return (
    <div className="mb-7">
      <h2 className="text-3xl py-7 md:text-4xl">Popular this week</h2>
      <Swiper
      direction={'horizontal'}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 7,
        },
      }}
      spaceBetween={10}
      centeredSlides={true}
      initialSlide={milieur}
      loop={true}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: true,
        sensitivity: 0.3,
        thresholdDelta: 20,
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate:0,
        depth:80,
        stretch:10,
        modifier:1,
      }}
      modules={[EffectCoverflow,Mousewheel]}
      className="w-full mx-auto py-7"
      >
          {
            Sliders.map((img,id)=>{
              return(
                <SwiperSlide  key={id}>
                   <Slider id={id} img={img}  key={id}/>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
     
    </div>
  )
}
































