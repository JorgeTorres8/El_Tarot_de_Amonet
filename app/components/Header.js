import Link from "next/link"
import Image from "next/image"
import Nav from "./Nav"
import DarkModeToggle from "./DarkModeToggle"

export default function Header(){
    return (
        <header className="header">
            <div>
                <Link href='/'>
                    <Image
                        src="/img/icon.png"
                        alt="Amonet Icon"
                        width={140}
                        height={40}
                        priority
                    />
                </Link>
            </div>

            <div className="flex flex-col justify-between items-center gap-3">
                <DarkModeToggle/>
                <Nav/>
            </div>
        </header>
    )
}