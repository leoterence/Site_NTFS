import { Images } from "@/asset/Images"
import Image from "next/image"



export default function Hero() {
  return (
    <div className="my-7 ml-4 flex flex-row justify-between items-center gap-x-4 lg:justify-around">
        <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-2  items-start ml-2">
                  <h1 className="text-start text-4xl font-semibold md:text-5xl lg:text-6xl">Discover,Collect <br /> and Sell Dope <br /> Art and NFTS</h1>
                  <p className="text-xs text-start md:text-md">The world's largest digital matketplace for crypto <br /> collections and non fungible tokens (NFTs)</p>
              </div>
              <div className="flex flex-row justify-start gap-x-3 ml-2 items-center">
                  <p className="border border-white/30 px-4 rounded-lg p-1 bg-gradient-to-r from-violet-700 to-sky-600 cursor-pointer hover:text-white/50 active:scale-3d  ">Discover</p>
                  <p className="bg-gradient-to-r from-violet-700 to-sky-700 w-20 h-8 rounded-lg p-0.5 cursor-pointer active:scale-3d"><span className="bgColor px-4 block h-7 rounded-lg cursor-pointer hover:text-white/75 active:scale-3d ">Create</span></p>
                  <p><span className="underline text-[13px] cursor-pointer hover:text-white/50 active:text-white">Watch a video</span></p>
              </div>
              <div className="flex justify-start mt-6">
                  <ul className="border  border-white/35 ml-2 px-4 flex flex-row gap-x-10 bg-gradient-to-r from-violet-700 to-sky-600 rounded-lg py-1">
                      <li>
                          <p className="font-bold text-lg">27K +</p>
                          <p className="text-xs">Art works</p>
                      </li>
                      <li>
                          <p className="font-bold text-lg">20K +</p>
                          <p className="text-xs">Art works</p>
                      </li>
                      <li>
                          <p className="font-bold text-lg">7K +</p>
                          <p className="text-xs">Art works</p>
                      </li>
                  </ul>
              </div> 
              <div className="bp-2 mb-5 flex flex-row justify-start pl-5">
                  <ul className="px-5 flex flex-row gap-x-20">
                      <li>
                          <ul className="flex flex-row relative h-full w-20">
                              <li>
                             
                                  <Image 
                                    src={Images[14]}
                                    alt="personne1"
                                    width={40}
                                    height={40}
                                    className="rounded-full absolute z-0 -left-7 "
                                  />
                              </li>
                              <li>
                                  <Image 
                                    src={Images[15]}
                                    alt="personne1"
                                    width={40}
                                    height={40}
                                    className="rounded-full absolute"
                                  />
                              </li>
                              <li>
                                  <Image 
                                    src={Images[18]}
                                    alt="personne1"
                                    width={40}
                                    height={40}
                                    className="rounded-full absolute left-7 z-15"
                                  />
                              </li>
                              <li>
                                  <Image 
                                    src={Images[16]}
                                    alt="personne1"
                                    width={40}
                                    height={40}
                                    className="rounded-full absolute left-14 z-30"
                                  />
                              </li>
                              <li>
                                  <Image 
                                    src={Images[17]}
                                    alt="personne1"
                                    width={40}
                                    height={40}
                                    className="rounded-full absolute left-21 z-40"
                                  />
                              </li>
                          </ul>
                      </li>
                      <li>
                          <p className="font-bold text-md">40K +</p>
                          <p className="text-xs">Active Users</p>
                      </li>
                  </ul>
              </div>
        </div>
        <div className="hidden md:block">
            <Image 
                src={Images[5]}
                alt="image5"
                className="rounded-lg"
            />
        </div>
    </div>
  )
}