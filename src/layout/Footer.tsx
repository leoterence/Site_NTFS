import { Instagram,Facebook} from "lucide-react"
import { Images } from "@/asset/Images"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="w-11/12 mx-auto flex flex-col p-1 gap-y-4 gap-x-10 py-7 lg:flex-row">
        <div className="  flex flex-col gap-y-2 lg:w-1/2 ">
            <p  className="text-md font-semibold">PLAY <span className="bg-gradient-to-r from-violet-600 to to-sky-600">NFT</span></p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,<br /> voluptatum temporibus. Adipisci, eaque. Quo, nemo. Lorem <br /> ipsum dolor sit amet.</p>
            <ul className="flex flex-row items-center  w-32 justify-around ">
                <li className="cursor-pointer">
                    <Image 
                        src={Images[0]}
                        alt="twitter"
                        width={15}
                        height={15}
                    />
                </li>
                <li className="cursor-pointer"><Instagram className="w-5" /></li>
                <li className="cursor-pointer"><Facebook className="w-5" /></li>
                <li className="cursor-pointer">
                    <Image 
                        src={Images[1]}
                        alt="twitter"
                        width={18}
                        height={18}
                    />
                </li>
            </ul>          
        </div>
        <div className="flex flex-wrap gap-y-5  w-full">
            <div className="w-1/2 md:w-1/4">
                <h3 className="text-sky-600">Explore</h3>
                <ul className="text-sm flex flex-col gap-y-3">
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Art</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Photography</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Music</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Games</li>
                </ul>
            </div>
            <div className="w-1/2 md:w-1/4">
                <h3 className="text-sky-600">My Account</h3>
                <ul className="text-sm flex flex-col gap-y-3">
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Art</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Photography</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Music</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Games</li>
                </ul>
            </div>
            <div className="w-1/2 md:w-1/4">
                <h3 className="text-sky-600">Resources</h3>
                <ul className="text-sm flex flex-col gap-y-3">
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Art</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Photography</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Music</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Games</li>
                </ul>
            </div>
            <div className="w-1/2 md:w-1/4">
                <h3 className="text-sky-600">Company</h3>
                <ul className="text-sm flex flex-col gap-y-3">
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Art</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Photography</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Music</li>
                    <li className="cursor-pointer textt-gray-100  hover:text-white/50 transition ease-in-out delay-100">Games</li>
                </ul>
            </div>
        </div>
    </div>
  )
}