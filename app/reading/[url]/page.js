'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import readingJson from '../../../includes/reading.json'
import DarkModeToggle from '@/app/components/DarkModeToggle';
import Nav from '@/app/components/Nav';

export default function Reading(){
  const [reading, setReading] = useState([]);

  const pathname = usePathname();
  const path = pathname.split("/");
  const lastPart = path[path.length - 1];

  useEffect(() => {
    const foundReading = readingJson.find((item) => item.url === lastPart);
    setReading(foundReading);
  }, []);
  
    const {id, name, description, duration, url, price, image} = reading;

    return (
      <>  
        <header>
        </header>
        
        <style jsx>{`
          header{
            background-image: linear-gradient(to bottom, rgb(0 0 0 / .2), rgb(0 0 0 /.3)), url(${image});
            background-size: cover;
            background-position: center;
            min-height: 30vh;
            position: relative;
            border-bottom-left-radius: 50% 20%;
            border-bottom-right-radius: 50% 20%;
          }
          @media(min-width: 768px) {
              header {
                min-height: 100vh;
              }
            }
        `}</style>

        <section className='min-h-screen p-16 bg-white dark:bg-black'>
          <div className="flex flex-col justify-between items-center gap-3">
              <DarkModeToggle/>
              <Nav/>
            </div>
          <h1 className=' text-center text-5xl'>{name}</h1>

          {/*<div className='mt-10 flex justify-center items-center gap-7'>
            <p className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-semibold rounded-lg px-5 py-2.5 text-center'>{duration}</p>
            <p className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-semibold rounded-lg px-5 py-2.5 text-center"'>{price}</p>
          </div>*/}

          <p>{description}</p>

          <div className='mt-10 flex justify-center items-center gap-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
              <div className="hover:-translate-y-2 group bg-zinc-200 duration-500 w-60 h-44 flex text-neutral-600 flex-col 
                justify-center items-center flex-grow relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-zinc-700 hover:dark:shadow-cyan-700">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-[spin_20s_linear_infinite] hover:animate-[spin_3s_linear_infinite] absolute blur z-10 fill-violet-400 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                  <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                  ></path>
                </svg>

                <div className="z-20 flex flex-col justify-center items-center cursor-default">
                  <p className="font-bold text-stone-800">Duración</p>
                  <span className="font-bold text-6xl text-stone-950 ">{duration}</span>
                </div>
              </div>
            
              <div className="hover:-translate-y-2 group bg-zinc-200 duration-500 w-48 h-44 flex text-neutral-600 flex-col 
                justify-center items-center flex-grow relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-zinc-700 hover:dark:shadow-cyan-700"> {/*animate-[bounce_1s_ease-in-out_infinite] */}
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-[spin_20s_linear_infinite] hover:animate-[spin_3s_linear_infinite] absolute blur z-10 fill-violet-400 duration-500 group-hover:blur-none group-hover:scale-105"
                >
                  <path
                    transform="translate(100 100)"
                    d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                  ></path>
                </svg>

                <div className="z-20 flex flex-col justify-center items-center cursor-default">
                  <p className="font-bold text-stone-800">Valor</p>
                  <span className="font-bold text-6xl text-stone-950">{price}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2>Política de cancelación</h2>

            <p>En caso de existir cambios por mi parte se te harán saber. Si al final no puedes acudir a la cita debes avisar 
              mínimo con 4 horas de antelación y habrá la posibilidad de cambiar la cita . 
              Tiempo de espera máximo para sesión será de 15 minutos, en caso de no haber avisado la tardanza, 
              se cerrará la sesión y no se devolverá el dinero por ningún motivo ni ninguna excepción.</p>
          </div>
        </section>
      </>
    )
}

/*export async function getStaticPaths() {
    const urls = readingJson.map((readingClass) => readingClass.url);
    
    const paths = urls.map((url) => ({
      params: { url: url.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async (context) => {
    const readingJ = readingJson.find((classes) => classes.url == context.params.url);
    return {
      props: {
        readingJ,
      },
    };
  };*/