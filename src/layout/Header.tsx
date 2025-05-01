import NavBare from "@/components/NavBare"
import SearCh from "@/components/Search"
import Link from "next/link"
export default function Header() {
  return (
    <div className="px-5 py-7 flex flex-row justify-between items-center md:justify-around md:px-0">
      <p  className="text-xl font-semibold md:text-2xl"><Link href='/'>PLAY <span className="bg-gradient-to-r from-violet-600 to to-sky-600">NFT</span></Link></p>
      <NavBare/>
      <div className="hidden md:flex flex-row gap-x-2 ">
        <SearCh/>
        <button  className="bg-gradient-to-r from-violet-700 to to-sky-700 w-22 rounded-lg cursor-pointer hover:text-white/50 active:text-white active:scale-3d">Register</button>
      </div>
    </div>
  )
}