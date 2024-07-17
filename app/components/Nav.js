import Link from "next/link"
import { faBuildingShield } from "@fortawesome/free-solid-svg-icons"
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faAddressBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Nav({toggle}) {
    const linkArray = [
        {id: 1, icon: faBuildingShield, href: '#company', name:'Empresa'},
        {id: 2, icon: faScrewdriverWrench, href: '#services', name:'Servicios'},
        {id: 3, icon: faLightbulb, href: '#purpose', name:'Propósito'},
        {id: 4, icon: faAddressBook, href: '#contact', name:'Contacto'}
    ]
    return (    
        <nav className="flex justify-center items-center">
            <div className="flex flex-col gap-3 md:flex-row">
                {linkArray.map(link => (
                    <Link key={link.id} href={link.href} className="w-auto h-16 flex items-center justify-center cursor-pointer" /*onClick={toggle}*/>   
                        <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden 
                                font-semibold shadow transition-all duration-150 ease-in-out rounded 
                                hover:pl-10 hover:pr-6 bg-slate-700 text-white hover:text-gray-200 
                                 group hover:shadow-2xl hover:shadow-cyan-600 ">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out
                                bg-cyan-600 group-hover:h-full">
                            </span>
                                
                            <FontAwesomeIcon className="size-6 absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12" icon={link.icon} /*style={{color: "var(--light-blue"}}*//>
                            <FontAwesomeIcon className="size-6 absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200" icon={link.icon} /*style={{color: "var(--light-blue"}}*//>
                            <span className=" ml-0.5 relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-gray-200">{link.name}</span>
                        </div>
                </Link>
                ))}
            </div>
        </nav>
        
    )
}