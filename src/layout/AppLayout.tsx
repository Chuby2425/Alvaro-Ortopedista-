import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
        <header className="fixed top-0 left-0 right-0 z-1 flex items-center justify-between gap-7 px-6 py-10 bg-white">

            <a href="#inicio" className="flex items-center gap-3.5">

                
                <img src="/logo.svg" alt="Logo del Dr. Álvaro Cordero Herrera" className="h-14 w-auto" />

                
                <span className="flex flex-col leading-5">
                    
                    <span className="text-primario text-2xl font-bold">Dr. Álvaro Cordero Herrera</span>
                    <span className="mt-0.5 text-secondary text-sm tracking-widest">ORTOPEDIA Y TRAUMATOLOGÍA</span>
                </span>
            </a>

            <nav className="flex items-center gap-7 *:text-text *:text-sm *:(transition-colors duration-200 ease-in) *:hover:text-secondary" aria-label="Navegación principal">
                <Link to={'#'}>Inicio</Link>
                <Link to={'#'}>Formación Académica</Link> 
                <Link to={'#'}>Sobre mí</Link>
                <Link to={'#'}>Contacto</Link>
            </nav>


            <a href="#contacto" className="inline-block px-7 py-3.5 border-none rounded-full bg-primary text-white text-sm font-semibold text-center cursor-pointer transition-colors duration-200 ease-in-out hover:bg-secondary hover:text-white">
                Agendar cita
            </a>

        </header>

        <Outlet/>
    </>
  )
}
