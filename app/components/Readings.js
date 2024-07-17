'use client';
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from 'next/navigation';

export default function Readings({reading}){
    const {id, name, description, duration, url, image} = reading;
    const router = useRouter();

    return (
        <div>

        <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-zinc-700 hover:dark:shadow-cyan-700
         hover:scale-105 duration-500 hover:cursor-pointer dark:bg-gray-800">


            <Image 
                src={`${image}`}
                className="w-full"
                alt={`${name} image`}
                width={400}
                height={400}
                priority={true}
                draggable={false}
            />
            
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white text-center">{name}</div>
                <p className="text-gray-700 dark:text-gray-50 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{duration}</span>
                <button
                    onClick={() => router.push(`/reading/${url}`)}
                    className="flex items-center justify-between gap-2 bg-purple-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                >
                        Más información
                        <FontAwesomeIcon className="size-6" icon={faCircleChevronRight} /*style={{color: "var(--light-blue"}}*//>
                </button>
            </div>
        </div>
        </div>
    )
}