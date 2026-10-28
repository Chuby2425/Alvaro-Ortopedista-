export default function HomeView() {
  return (
    <>
      {/* Sección Hero con máscara de recorte elíptica */}
      <section 
        id="inicio" 
        className="mt-25 relative flex items-center min-h-125 max-[900px]:min-h-140 max-[600px]:min-h-135 px-[7%] pt-22.5 pb-32.5 max-[900px]:px-[5%] max-[900px]:pt-14 max-[900px]:pb-25 max-[600px]:px-[6%] max-[600px]:pt-11 max-[600px]:pb-22 box-border bg-hero [clip-path:ellipse(120%_100%_at_50%_0%)]"
      >
        {/* Contenedor de la Imagen de Fondo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="hero.jpg" 
            alt="Dr. Álvaro Cordero Herrera" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Capa de Gradiente (se fusiona a azul sólido en móviles) */}
          <div className="absolute inset-0 bg-linear-to-r from-[rgba(47,91,126,0.92)] via-[rgba(47,91,126,0.55)] to-transparent max-[600px]:bg-[rgba(20,57,107,0.8)]" />
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 w-full max-w-140 max-[900px]:max-w-130">
          <p className="text-accent text-[0.8rem] font-bold tracking-[2px]">
            ORTOPEDIA Y TRAUMATOLOGÍA
          </p>
          <h1 className="my-5 text-white text-[clamp(2.5rem,4vw,4.2rem)] max-[600px]:text-[2.6rem] font-semibold Lauren line-leading-[1.15]">
            Tu movimiento,<br />
            <span className="text-accent">mi compromiso.</span>
          </h1>
          <p className="max-w-120 mb-7.5 text-white/90 text-[1.05rem] max-[600px]:text-base leading-[1.8]">
            Atención especializada para cuidar tu salud, recuperar tu movilidad y mejorar tu calidad de vida.
          </p>
          <a 
            href="#contacto" 
            className="inline-block px-7 py-3.5 max-[600px]:px-3.5 max-[600px]:py-2.5 border-none rounded-full bg-accent text-primario text-[0.9rem] max-[600px]:text-[0.85rem] font-semibold text-center cursor-pointer transition-colors duration-200 ease-out hover:bg-white hover:text-primario"
          >
            Agendar cita
          </a>
        </div>
      </section>

      {/* Sección de Especialidades */}
      <section id="servicios" className="px-[7%] py-20 max-[600px]:px-[6%] max-[600px]:py-13.75 text-center bg-white">
        <h2 className="mb-4 text-primario text-[clamp(1.8rem,3vw,2.5rem)] font-semibold">
          Atención especializada para ti
        </h2>
        <p className="text-secondary">
          Tratamientos y orientación para cuidar tu salud musculoesquelética.
        </p>
      </section>

      {/* Sección Informativa del Médico */}
      <section id="sobre-mi" className="px-[7%] py-20 max-[600px]:px-[6%] max-[600px]:py-13.75 text-center bg-light">
        <h2 className="mb-4 text-primario text-[clamp(1.8rem,3vw,2.5rem)] font-semibold">
          Sobre el doctor
        </h2>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="px-[7%] py-20 max-[600px]:px-[6%] max-[600px]:py-13.75 text-center bg-white">
        <h2 className="mb-4 text-primario text-[clamp(1.8rem,3vw,2.5rem)] font-semibold">
          Agenda tu cita
        </h2>
      </section>
    </>
  );
}
