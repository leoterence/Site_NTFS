import { COLAB } from "@/asset/Images"
import Image from "next/image"

export default function Colab() {
  return (
    <div className="bg-gradient-to-r from-violet-800 to-sky-700  text-sm   md:-mx-10">
        <ul className="flex flex-row justify-between items-center  overflow-x-scroll gap-x-7 py-2  scrollbar-hide px-3">
            <li className="italic font-semibold">
               Paypal
            </li>
            <li className="font-semibold">coinbase</li>
            <li className="font-semibold flex flex-row items-center"> <Image src={COLAB[0]} alt="coin" width={13} height={13} className="h-[13.5px] mr-[0.5px]"/>BINANCE</li>
            <li className="font-semibold">Revolut</li>
            <li className="font-semibold">EXODUS</li>
            <li className="font-semibold flex flex-row items-center">BITFINEX <Image src={COLAB[1]} alt="BITFINEX" width={13} height={13}/></li>
            <li className="font-semibold">Blockchain</li>
        </ul>
    </div>
  )
}