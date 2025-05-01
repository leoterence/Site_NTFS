'use client'
import { useState,useEffect } from "react"
import clsx from "clsx"
import { Menu } from "lucide-react"

const Link =[
  {name :'Home'},
  {name :'Exploration'},
  {name :'Marketplace'},
  {name :'Artists'},
  {name :'News'}



]
export default function NavBare() {
  const[focus,isfocus]=useState('Home')
  const[open,isopen]=useState(false)
  useEffect(()=>{

    const isClick=(e:MouseEvent)=>{
      const menu = document.getElementById('menu')
      if(menu && !menu.contains(e.target as Node)){
        isopen(false)
      }
    }
    document.addEventListener('mousedown',isClick)
    return ()=>{
      document.removeEventListener('mousedown',isClick)
    }
  },[])
  return (
    <div>
            <ul className="hidden md:flex flex-row gap-x-7 ">
            {Link.map((link)=>{
              return(
                <li key={link.name} onClick={()=>isfocus(`${link.name}`)} className={clsx('text-gray-50/70 text-sm font-semibold flex flex-col cursor-pointer hover:text-white md:text-md ',{"text-white ":focus === link.name})} >{link.name}<div className={clsx("h-[1.5px] w-7 bg-gradient-to-r  from-violet-700 to to-sky-700 rounded-b-full ",{"block":focus==link.name,"hidden":focus!=link.name})}></div></li>
              )
            })}
          </ul>
          {/*petit ecran */}
          <ul className="flex flex-col md:hidden" id="menu">
          <Menu  onClick={()=>isopen(!open)} className="relative"/>
            <div className={`${open? "block":"hidden"} absolute top-15 -translate-x-15 bgColor  `}> 
                  {Link.map((link)=>{
                  return(
                    <li key={link.name} onClick={()=>isfocus(`${link.name}`)} className={clsx('text-gray-50/70 text-sm font-semibold flex flex-col cursor-pointer px-3 py-2 hover:bg-gradient-to-r from-violet-700 to-sky-700',{"text-white":focus === link.name})} >{link.name}<div className={clsx("h-[1.5px] w-7 bg-gradient-to-r  from-violet-700 to to-sky-700 rounded-b-full ",{"block":focus==link.name,"hidden":focus!=link.name})}></div></li>
                  )
                })}
            </div>
          </ul>
    </div>
  )
}