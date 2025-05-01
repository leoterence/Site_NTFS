import { Search } from "lucide-react"
export default function SearCh() {
  return (
    <div className="bg-gradient-to-r from-violet-700 to-blue-700 h-9 w-25 justify-center flex items-center rounded-2xl">
            <div className="w-24 h-8 flex flex-row items-center rounded-xl px-2 gap-x-1 justify-center bgColor " ><Search className="w-4 mt-1 "/><input type="text" placeholder="Search" className="w-full outline-0 "/></div>
    </div>
  )
}