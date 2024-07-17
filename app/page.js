'use client';
import Header from "./components/Header";
import Lists from "./components/Lists";
import useTarot from "./hook/useTarot";

export default function Home() {

  const {readings} = useTarot();

  return (
  <>
    <Header/>
    <div className="min-h-screen p-16 bg-white dark:bg-black" /*flex flex-col items-center justify-between*/>
      <h1>Bienvenidos a la lectura del Tarot de Amonet</h1>
      <p>Hola a todos probando</p>

      <main>
        <Lists
          readings={readings}
        />
      </main>
    </div>
  </>
  );
}
