import { Images } from "@/asset/Images"
import Image from "next/image"
export default function Art() {
  return (
    <div>
           <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl py-7 md:text-4xl">Explore Artworks</h2>
                <div className="flex flex-wrap gap-x-5 gap-y-4">
                  {/* c est la premiere section de art */}
                    <div className="bg-gradient-to-r from-black/15 from-10% to-sky-500 to-90% w-[250px] mx-auto border border-t border-b border-white/45 rounded-xl p-1 flex flex-col gap-y-1 ">
                        {/* section image */}
                            <div >
                                {/* ********* */}
                                <ul className="flex flex-row gap-x-1">
                                    <li >
                                        <Image 
                                          src={Images[2]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="rounded-tl-xl h-24"
                                        />
                                    </li>
                                    <li >
                                        <Image 
                                          src={Images[7]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="h-24 hover hover:scale-50"
                                        />
                                    </li>                             
                                    <li >
                                        <Image 
                                          src={Images[4]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className=" rounded-tr h-24 "
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <Image 
                                          src={Images[19]}
                                          alt="photo1"
                                          width={50}
                                          height={50}
                                          quality={100}
                                          className="w-full h-16"
                                        />
                            </div>
                            <div className="flex flex-row justify-between p-2 text-sm">
                              <p>Abstract</p>
                              <p className="border rounded-lg text-[13px] px-1 border-violet-600/80">30 items</p>
                            </div>
                        </div>

                         {/* c est la deuxieme section de art */}
                    <div className="bg-gradient-to-r from-black/15 from-10% to-sky-500 to-90% w-[250px] mx-auto border border-t border-b border-white/45 rounded-xl p-1 flex flex-col gap-y-1">
                        {/* section image */}
                            <div >
                                {/* ********* */}
                                <ul className="flex flex-row gap-x-1">
                                    <li >
                                        <Image 
                                          src={Images[3]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="rounded-tl-xl"
                                        />
                                    </li>
                                    <li >
                                        <Image 
                                          src={Images[5]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                        />
                                    </li>                             
                                    <li >
                                        <Image 
                                          src={Images[6]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className=" rounded-tr h-24 "
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <Image 
                                          src={Images[19]}
                                          alt="photo1"
                                          width={50}
                                          height={50}
                                          quality={100}
                                          className="w-full h-16"
                                        />
                            </div>
                            <div className="flex flex-row justify-between p-2 text-sm">
                              <p>Abstract</p>
                              <p className="border rounded-lg text-[13px] px-1 border-violet-600/80">30 items</p>
                            </div>
                        </div>
                         {/* c est la troisieme section de art */}
                    <div className="bg-gradient-to-r from-black/15 from-10% to-sky-500 to-90% w-[250px] mx-auto border border-t border-b border-white/45 rounded-xl p-1 flex flex-col gap-y-1">
                        {/* section image */}
                            <div >
                                {/* ********* */}
                                <ul className="flex flex-row gap-x-1">
                                    <li >
                                        <Image 
                                          src={Images[8]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="rounded-tl-xl h-24 hover:scale-50"
                                        />
                                    </li>
                                    <li >
                                        <Image 
                                          src={Images[9]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="h-24 hover scale-50"
                                        />
                                    </li>                             
                                    <li >
                                        <Image 
                                          src={Images[10]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className=" rounded-tr h-24 "
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <Image 
                                          src={Images[19]}
                                          alt="photo1"
                                          width={50}
                                          height={50}
                                          quality={100}
                                          className="w-full h-16"
                                        />
                            </div>
                            <div className="flex flex-row justify-between p-2 text-sm">
                              <p>Abstract</p>
                              <p className="border rounded-lg text-[13px] px-1 border-violet-600/80">30 items</p>
                            </div>
                        </div>
                             {/* c est la quatrieme section de art */}
                    <div className=" hidden bg-gradient-to-r from-black/15 from-10% to-sky-500 to-90% w-[250px] mx-auto border border-t border-b border-white/45 rounded-xl p-1 sm:flex flex-col gap-y-1">
                        {/* section image */}
                            <div >
                                {/* ********* */}
                                <ul className="flex flex-row gap-x-1">
                                    <li >
                                        <Image 
                                          src={Images[11]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="rounded-tl-xl h-24 hover:scale-50"
                                        />
                                    </li>
                                    <li >
                                        <Image 
                                          src={Images[12]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="h-24 hover scale-50"
                                        />
                                    </li>                             
                                    <li >
                                        <Image 
                                          src={Images[13]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className=" rounded-tr-xl h-24 "
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <Image 
                                          src={Images[19]}
                                          alt="photo1"
                                          width={50}
                                          height={50}
                                          quality={100}
                                          className="w-full h-16"
                                        />
                            </div>
                            <div className="flex flex-row justify-between p-2 text-sm">
                              <p>Abstract</p>
                              <p className="border rounded-lg text-[13px] px-1 border-violet-600/80">30 items</p>
                            </div>
                        </div>
                             {/* c est la cinquieme section de art */}
                    <div className="hidden bg-gradient-to-r from-black/15 from-10% to-sky-500 to-90% w-[250px] mx-auto border border-t border-b border-white/45 rounded-xl p-1 md:flex flex-col gap-y-1">
                        {/* section image */}
                            <div >
                                {/* ********* */}
                                <ul className="flex flex-row gap-x-1">
                                    <li >
                                        <Image 
                                          src={Images[14]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="rounded-tl-xl h-24 hover:scale-50"
                                        />
                                    </li>
                                    <li >
                                        <Image 
                                          src={Images[15]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="h-24 hover scale-50"
                                        />
                                    </li>                             
                                    <li >
                                        <Image 
                                          src={Images[16]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className=" rounded-tr h-24 "
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <Image 
                                          src={Images[19]}
                                          alt="photo1"
                                          width={50}
                                          height={50}
                                          quality={100}
                                          className="w-full h-16"
                                        />
                            </div>
                            <div className="flex flex-row justify-between p-2 text-sm">
                              <p>Abstract</p>
                              <p className="border rounded-lg text-[13px] px-1 border-violet-600/80">30 items</p>
                            </div>
                        </div>
                             {/* c est la sixieme section de art */}
                    <div className=" hidden bg-gradient-to-r from-black/15 from-10% to-sky-500 to-90% w-[250px] mx-auto border border-t border-b border-white/45 rounded-xl p-1 md:flex flex-col gap-y-1">
                        {/* section image */}
                            <div >
                                {/* ********* */}
                                <ul className="flex flex-row gap-x-1">
                                    <li >
                                        <Image 
                                          src={Images[17]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="rounded-tl-xl h-24 hover:scale-50"
                                        />
                                    </li>
                                    <li >
                                        <Image 
                                          src={Images[18]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className="h-24 hover scale-50"
                                        />
                                    </li>                             
                                    <li >
                                        <Image 
                                          src={Images[4]}
                                          alt="photo1"
                                          width={80}
                                          height={50}
                                          className=" rounded-tr h-24"                           
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div>
                            <Image 
                                          src={Images[19]}
                                          alt="photo1"
                                          width={50}
                                          height={50}
                                          quality={100}
                                          className="w-full h-16"
                                        />
                            </div>
                            <div className="flex flex-row justify-between p-2 text-sm">
                              <p>Abstract</p>
                              <p className="border rounded-lg text-[13px] px-1 border-violet-600/80">30 items</p>
                            </div>
                        </div>
                </div>
           </div>
          
    </div>
  )
}