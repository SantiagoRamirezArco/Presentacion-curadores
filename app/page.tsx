"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft, Users, GraduationCap, Briefcase, Building, Award, User, Mail, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const juntaDirectiva = [
  { 
    id: 1, 
    nombre: "William Enrique Taboada Díaz", 
    cargo: "Presidente", 
    foto: "/professional-woman-executive.png",
    detalles: {
      titulo: "Curador Urbano 1 Montería",
      experiencia: "Arquitecto de la Universidad La Gran Colombia, Especialista en Urbanismo - Especialista en Derecho Urbano Magíster en Derecho y Gestión Urbanística – Universidad del Rosario\n\nExperiencia laboral: Coordinador de Vivienda de la ciudad de Montería Director de la Política Departamental de Vivienda de Córdoba, Asesor en temas de desarrollo territorial de varios municipios en Colombia, Curador Urbano 1 de la ciudad de Montería 2015-2020 y 2021-2026 y actualmente Presidente del Colegio Nacional de Curadores Urbanos 2025-2026",
    }
  },
  { 
    id: 2, 
    nombre: "Martha Cecilia Palomino Quiñonez", 
    cargo: "Vicepresidente", 
    foto: "/professional-architect.png",
    detalles: {
      posesion: "2 de enero de 2023",
      experiencia: "Se posesiono el 2 de enero de 2023 como Curadora Urbana 1 de Cali, funge como Vicepresidenta del Colegio Nacional de Curadores Urbanos, acumula más de 30 años de experiencia en el sector público y privado dentro de su ejercicio profesional. Se desempeño como asesora de la secretaria de Planeación Municipal de Palmira, Coordinadora de Macroproyectos en la secretaria De vivienda Social y Hábitat del Distrito Especial de Santiago de Cali, Subdirectora de Infraestructura Vial del Departamento del Valle del Cauca y Directora de Planeación Territorial e Informática en el municipio de Yumbo.\n\nEgresada de la Universidad de San Buenaventura de Cali con:\n\n• Máster en Gestión de Ciudad y Planificación Urbana de la Universidad Oberta de Cataluña España\n• Maestría en Derecho y Gestión Urbana – Universidad del Rosario\n• Especialización en Paisajismo – Universidad del Valle\n• Especialización en Derecho Urbano – Universidad del Rosario\n• Múltiples especializaciones en la Universidad Oberta de Cataluña España",
      universidad: "Universidad de San Buenaventura de Cali",
      formacion: [
        "Máster en Gestión de Ciudad y Planificación Urbana - Universidad Oberta de Cataluña España",
        "Maestría en Derecho y Gestión Urbana – Universidad del Rosario",
        "Especialización en Paisajismo – Universidad del Valle",
        "Especialización en Derecho Urbano – Universidad del Rosario",
        "Múltiples especializaciones en la Universidad Oberta de Cataluña España"
      ],
      experienciaProfesional: [
        "Asesora de la Secretaría de Planeación Municipal de Palmira",
        "Coordinadora de Macroproyectos en la Secretaría de Vivienda Social y Hábitat del Distrito Especial de Santiago de Cali",
        "Subdirectora de Infraestructura Vial del Departamento del Valle del Cauca",
        "Directora de Planeación Territorial e Informática en el municipio de Yumbo"
      ]
    }
  },
  {
    id: 3,
    nombre: "Martha Liliana Nieto Estévez",
    cargo: "Secretaria Ejecutiva",
    foto: "/professional-woman-engineer.png",
    detalles: {
      titulo: "Curadora Urbana 1 de Cúcuta",
      experiencia: "Ingeniera Civil de la Universidad Francisco de Paula Santander, Abogada de la Universidad de Santander, Especialista en Administración de la Construcción de la Universidad Francisco de Paula Santander, en Planificación y Administración del Desarrollo Regional con énfasis Ordenamiento Territorial de la Universidad de los Andes, en Derecho Inmobiliario Notarial y Urbanístico en la Unilibre, Magister en Gestión Urbana Universidad Piloto de Colombia y cursando Especialización en Derecho Administrativo Unilibre.\n\n18 años experiencia como Curador Urbana 1 de Cúcuta (15-junio-2007 a la fecha)\n12 años experiencia en Alcaldía de Cúcuta 13-01-1995 a 14-06-2007 en cargos carrera administrativa: Profesional Universitario área control físico y Ambiental Departamento Administrativo de Planeación Municipal, Directora (e) Planeación Municipal, Jefe (e) Estudios Socioeconómicos y Proyectos de inversión encargada, Jefe Demarcación, nomenclatura y usos del suelo Departamento Administrativo de Control Urbano (1995-1996)\nDocente modalidad cátedra Universidad Libre de Colombia seccionales, Cúcuta y Socorro.",
    }
  },
  {
    id: 15,
    nombre: "Ángela María Restrepo Uribe",
    cargo: "Dignatario",
    foto: "/professional-woman-architect.png",
    detalles: {
      titulo: "Curadora Urbana Segunda de Medellín",
      experiencia: "Arquitecta, egresada de la Facultad de Arquitectura de la Universidad Nacional de Colombia. Es Especialista en Administración Pública de la Escuela Superior de Administración Pública – ESAP, Especialista en Gestión y Procesos Urbanos de la Escuela de Ingeniería de Antioquia y Especialista en Derecho Urbano de la Universidad Externado de Colombia.\n\nCon una experiencia de 35 años, desde julio de 2007 y hasta octubre del año 2018, previo concursos de méritos, se desempeñó como Curadora Urbana Tercera de Medellín. Entre los años 2014 y 2018, por designación del Alcalde de la ciudad, ocupó en provisionalidad los cargos de Curadora Urbana Segunda y Cuarta de Medellín. Entre el año 2015 y 2018 fue miembro de la Junta Directiva del Colegio Nacional de Curadores, siendo su Presidente durante dos años.\n\nSe ha desempeñado como Consultora para Corantioquia en el tema de Espacio Público, para el Concejo Municipal de La Estrella como asesora en asuntos inherentes a la gestión pública y a la planeación y para el Municipio de Medellín en el proceso de revisión del Plan de Ordenamiento Territorial. Para la empresa privada ha prestado sus servicios como Asesora Técnica en la aplicación de los requisitos, trámites y normas para la obtención de Licencias de Urbanismo y Construcción, así como en la interpretación y aplicación de las normas urbanísticas y de construcción.\n\nFue Secretaria de Planeación y Desarrollo Municipal, Secretaria Privada y Secretaria de Gobierno en el Municipio de La Estrella, así como Coordinadora para la Formulación del Plan de Ordenamiento Territorial y Asesora de Planeación por espacio de nueve años. En el Área Metropolitana del Valle de Aburrá se desempeñó como Jefe de Departamento de Planeación y Desarrollo Metropolitano, Directora de Planeación Metropolitana y Asesora Técnica Municipal por un período de cinco años. En el municipio de Girardota fue Secretaria de Planeación y Obras.\n\nDesde junio de 2023 se desempeña como Curadora Urbana Segunda de Medellín."
    }
  },
]

const dignatarios = [
  { 
    id: 4, 
    nombre: "Sandra del Pilar Pardo Suárez", 
    cargo: "Dignatario", 
    foto: "/professional-man-doctor.png",
    detalles: {
      titulo: "Curadora Urbana 2 Ibagué",
      experiencia: "Profesional de la arquitectura egresada de la Universidad la Gran Colombia, especialista en Planeación Territorial en la Fundación Universidad de América y en Derecho Urbano en el Colegio Mayor de Nuestra Señora del Rosario.\n\nCatedrática\nAños 2000 y 2001 - Universidad Antonio Nariño, facultad de arquitectura, (metodología de la investigación, ética profesional)\nAños 2008 y 2009 - Universidad de Ibagué, facultad de arquitectura, (taller VII, construcción VI, urbanismo IV)\n\n29 años Experiencia profesional\nSector Público (6 Años)\n- Directora de ordenamiento territorial – alcaldía de Ibagué (2002-2003)\n- Asesora de municipios (guamo 1999, Cajamarca 2001, Ambalema 2004, Ibagué 2001, 2020)\n- Función Pública – Curadora Urbana n° 1 de Ibagué en provisionalidad (enero de 2013 a 30 de julio de 2014)\n- Curadora Urbana n° 2 de Ibagué en propiedad desde el 22 de junio del año 2021 hasta la fecha.\n\nSector Privado (23 Años)\nProfesional independiente realizando:\n- Consultorías y asesorías para elaborar proyectos, diseño urbanístico, arquitectónico, instrumentos de planificación, interventorías de obra, prefactibilidad de proyectos, asesoría en ordenamiento territorial y análisis de normas nacionales y locales de varios municipios para verificar la ejecución de proyectos en ellos.\n- En la empresa que creé en el año 2017 (Crecimiento Urbano SAS) para desarrollar consultorías, asesorías y construcción.\n- Arquitecta asesora en constructoras.\n- Director ejecutivo sociedad colombiana de arquitectos regional Tolima (1999-2000)\n- Director administrativo proyecto de reconstrucción de los municipios de Roncesvalles y Cajamarca para el forec con la Sociedad Colombiana de Arquitectos Regional Tolima (1999 – 2000)",
    }
  },
  { 
    id: 5, 
    nombre: "Jose Yair Caicedo Palacios", 
    cargo: "Dignatario", 
    foto: "/professional-woman-architect.png",
    detalles: {
      titulo: "Curador Urbano 1 de Barrancabermeja",
      experiencia: "Matrícula Profesional: A252000-16509055\nArquitecto Universidad La Gran Colombia\nEspecialista en Planeamiento Urbano y Regional\nEspecialista en Espacio Público Construido\nMagister en Planeación Urbana y Regional\nyair.caicedo@curaduria1barrancabermeja.com.co\n\nPerfil Profesional\nArquitecto, nacido el 27 de Agosto de 1975 en el distrito de Buenaventura (valle del cauca), en el año 1975, egresado de la universidad La Gran Colombia desde hace 25 años, Especialista en planeamiento urbano y regional, especialista en espacio público construido, magister en planeación urbana y regional con énfasis en diseño urbano, con experiencia de 25 años en proyectos de ordenamiento, planeación, diseño y norma urbana y arquitectónico específico Bogotá, Barrancabermeja Cali, Buenaventura, Santa Marta, Medellín, Ipiales, Tunja, Toca, Jagua de Ibirico y Ciudad de Panamá en: Revisión de planes de ordenamiento territorial, formulación de planes de mitigación de impactos planes de implantación de equipamientos colectivos, planes parciales, unidades de planificación rural, reglamentación de unidades de planeamiento zonal, norma urbana y rural, diseño de hospitales, centros universitarios y casas campestres, edificios multifamiliares, centros comerciales. Además de secretario de planeación municipal, Curador Suplente, docente de maestría y dos publicaciones en revistas indexadas y Actual Curador de Barrancabermeja.",
    }
  },

  { 
    id: 7, 
    nombre: "Mauricio Vargas Cuellar", 
    cargo: "Dignatario", 
    foto: "/professional-architect.png",
    detalles: {
      titulo: "Curador Urbano 1 Neiva",
      experiencia: "Experiencia Profesional:\nDepartamento Administrativo de Planeación distrital – 13 años - 1984-1997\nCurador Urbano – 28 años desde 1997 a la fecha\n\nArquitecto con más de 40 años de experiencia en planeación urbana, desarrollo regional, estudios urbanísticos, ordenamiento territorial y gestión de proyectos etc. Cuenta con formación avanzada en áreas complementarias como derecho urbano, evaluación social de proyectos planeación administración y gestión urbana.\n\nFormación Académica:\n\n• Arquitectura, Universidad Piloto de Colombia (1983)\n• Especialización en Evaluación Social de Proyectos, Universidad de los Andes (1997)\n• Especialización en Planeación Urbana y Regional, ESAP (1999)\n• Especialización en Planificación y Administración del Desarrollo Regional, Universidad de los Andes (2003)\n• Especialización en Derecho Urbano, Universidad Externado de Colombia (2006)\n• Maestría en Gestión Urbana, Universidad Piloto de Colombia (2012)",
    }
  },
  { 
    id: 8, 
    nombre: "Janeth Arango Castaño", 
    cargo: "Dignatario", 
    foto: "/professional-woman-engineer.png",
    detalles: {
      titulo: "Curadora Urbana 4 Medellín",
      experiencia: "Abogada Magister en Procesos Urbanos y Ambientales, Especialista en Derecho Administrativo, Gestión Pública, Derecho Urbano, Gestión de la Ciudad y del Territorio, cuenta con curso de especialización en Urbanismo y Desarrollo Sostenible (España), curso de especialización en Planificación Estratégica Territorial (Argentina), con Diplomados en Ordenamiento Territorial y Derecho Urbano, Cursos de Avalúos y Gestión del Suelo.\n\nExperiencia específica para el sector público y privado en derecho administrativo, urbanístico e inmobiliario, asesora jurídica en instrumentos de planificación, gestión y financiación, formulación de Planes de Ordenamiento territorial, Macroproyectos urbanos, Planes Parciales, elaboración y revisión de norma urbanística, planes locales, estudio de títulos, procesos de negociación y titulación de predios, en procesos administrativos, urbanísticos y de Reglamento de Propiedad Horizontal.\n\nDesignada como Curadora Urbana Cuarta de Medellín el 23 de junio de 2023.",
    }
  },
  { 
    id: 9, 
    nombre: "Dennys Esther Valverde Sanchez", 
    cargo: "Dignatario", 
    foto: "/professional-man-doctor.png",
    detalles: {
      titulo: "Curadora Urbana 1 de Puerto Colombia",
      experiencia: "Ingeniera Civil especialista en Derecho Urbano de la Universidad Externado de Colombia y especialista en Régimen de Propiedad Horizontal de la Universidad de Cataluña. Con amplia experiencia en temas relacionados con el ordenamiento del territorio y planificación urbana. Ha desempeñado su carrera profesional en el desarrollo y control urbano.\n\nCarrera profesional en el desarrollo y control urbano, ejerciendo como:\n• Jefe de la División de Control Urbano y Espacio Público de Barranquilla.\n• Asistente de los Curadores Urbanos Roque Amín Escaf y Luis Alviar Piedrahita.\n• Curadora (E) en el Distrito de Barranquilla.\n• Subgerente Técnico del Instituto Distrital de Urbanismo y Control IDUC, coordinando el estudio de Recuperación del Espacio Público del Centro Histórico de Barranquilla y su área de influencia.\n• Elaboración del Manual del Espacio Público de Barranquilla, en calidad de Coordinadora -Asesora de la Cámara de Comercio de Barranquilla, destacándose la participación en la Coordinación Interinstitucional del Plan Parcial del Barrio Siape y su área de influencia\n• Formulación de múltiples Planes Parciales, UPR, revisiones de Planes de Ordenamiento Territorial además de Consultorías a empresas constructoras a nivel nacional.\n• Curadora Primera del Distrito de Santa Marta.\n• Curadora Primera del municipio de Puerto Colombia.",
    }
  },
]

const procuradores = [
  {
    id: 10,
    nombre: "Martha Ligia Bonilla Currea",
    cargo: "Procurador Principal",
    foto: "/professional-woman-architect.png",
    detalles: {
      titulo: "Coordinadora Nacional de Procuradores",
      experiencia: "Arquitecta de la Universidad La Gran Colombia, Especialista en Derecho Urbano de la Universidad Externado de Colombia y Magister en Gestión Urbana de la Universidad Piloto de Colombia.\n\nExperiencia Laboral\n\n• Curadora Urbana No. 1 de Tunja. Marzo de 2002 a Marzo de 2007.\n• Curadora Urbana No. 1 de Tunja. Julio de 2012 a Julio de 2017.\n• Curadora Urbana No. 1 de Tunja. Noviembre de 2017 a Noviembre 2022.\n• Curadora Urbana No. 2 (E) de Tunja. Mayo de 2019 a Octubre de 2021.\n• Curadora Urbana No. 1 de Tunja. Noviembre de 2022 a la fecha.\n• Catedrática Universidad Santo Tomás de Tunja.\n• Secretaria de Despacho- Secretaría de Infraestructura de la Alcaldía Mayor de Tunja.\n• Funcionaria de la Gobernación de Boyacá – Secretaría de Infraestructura Departamental – Jefe de Estudios y Diseños.\n• Jefe de Planeación Municipal de Moniquirá.",
    }
  },
  {
    id: 11,
    nombre: "Lilia Margarita Amaya Nuñez",
    cargo: "Procurador Suplente",
    foto: "/professional-woman-executive.png",
    detalles: {
      titulo: "Curadora Urbana 3 Manizales",
      experiencia: "Arquitecta de la Universidad Nacional de Colombia, sede Manizales. Especialista en Diseño Ambiental de la Universidad Nacional de Colombia, sede Manizales.\n\n• Curadora Urbana Tercera de Manizales. Enero de 2020 a la fecha.\n• Jefe de Control Urbano de la Secretaría de Planeación Municipal de Manizales.\n• Subdirectora Técnica de Planeación de la Secretaría de Planeación Municipal de Manizales.\n• Jefe del Departamento Administrativo de Planeación Municipal de Manizales.\n• Consultora independiente en temas urbanos, arquitectónicos y ambientales en Caldas y otros departamentos.\n• Gerente de Proyectos en empresa constructora.\n• Docente universitaria."
    }
  },
]

const colaboradores = [
  {
    id: 12,
    nombre: "Fanny Adriana Leon Acero",
    cargo: "Coordinadora Jurídica Nacional",
    foto: "/professional-architect.png",
    detalles: {
      titulo: "Coordinadora Jurídica Nacional",
      experiencia: "Abogada, especialista en Derecho Urbano y Derecho Administrativo, con cerca de 19 años de experiencia en el análisis, aplicación y seguimiento de la normativa urbanística y administrativa. Amplia trayectoria en el estudio y gestión de instrumentos de planificación urbana, así como en la asesoría y acompañamiento jurídico en el ejercicio de la función de los Curadores Urbanos."
    }
  },
  { 
    id: 13, 
    nombre: "Jesus Esteban Jaramillo Buitrago", 
    cargo: "Contador", 
    foto: "/professional-woman-engineer.png",
    detalles: {
      titulo: "Revisor Fiscal",
      experiencia: "Contador Público de la Universidad de Medellín, Especialista en Gestión Tributaria de la Universidad de Medellín.\n\nExperiencia Laboral\n\n• Revisor Fiscal del Colegio Nacional de Curadores Urbanos. Febrero de 2016 a la fecha.\n• Contador. Noviembre de 2006 a febrero de 2016.\n• Asesor Contable y Tributario Independiente. 2002 a 2006.\n• Contador de empresas del sector privado. 1998 a 2002."
    }
  },
  { 
    id: 14, 
    nombre: "Sandra Yaneth Urete Guzman", 
    cargo: "Secretaria", 
    foto: "/professional-man-doctor.png",
    detalles: {
      titulo: "Secretaria General",
      experiencia: "Tecnóloga en Sistematización de Datos del Politécnico Colombiano \"Jaime Isaza Cadavid\". Técnica Profesional en Secretariado Ejecutivo Bilingüe del Politécnico Grancolombiano.\n\nExperiencia Laboral\n\n• Secretaria General del Colegio Nacional de Curadores Urbanos. Agosto de 2002 a la fecha.\n• Secretaria Ejecutiva de empresa del sector privado.\n• Secretaria de Gerencia de empresa del sector privado.\n• Secretaria de Contaduría de empresa del sector privado."
    }
  },
]

const todosMiembros = [...juntaDirectiva, ...dignatarios, ...procuradores, ...colaboradores]

export default function PresentacionJunta() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Slide 0: Portada
  // Slide 1: Índice
  // Slides 2+: Miembros individuales
  // Última slide: Cierre

  const totalSlides = todosMiembros.length + 3

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsAnimating(false), 200)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsAnimating(false), 200)
  }

  const goToSlide = (slideIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(slideIndex)
    setTimeout(() => setIsAnimating(false), 200)
  }

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isAnimating])

  const renderPortada = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#2c4687] via-[#3b5398] to-[#8a94bb] flex items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos modernos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos flotantes con gradientes */}
        <div className="absolute top-20 right-32 w-72 h-72 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-48 h-48 bg-gradient-to-br from-[#d4d4e1]/30 to-transparent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-80 w-64 h-64 bg-gradient-to-tr from-[#f6f6f6]/20 to-transparent rounded-full animate-pulse delay-1000"></div>
        
        {/* Elementos geométricos modernos */}
        <div className="absolute top-40 left-20 w-32 h-32 border-2 border-white/20 rotate-45 animate-pulse delay-200"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border-2 border-[#d4d4e1]/30 rotate-12 animate-pulse delay-700"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto px-8">
        {/* Logo con diseño premium */}
        <div className="mb-16 animate-fade-in">
          <div className="relative">
            {/* Logo principal más grande y visible */}
            <div className="w-64 h-64 mx-auto flex items-center justify-center">
              <Image
                src="/logo-cncu.png"
                alt="Logo Colegio Nacional de Curadores Urbanos"
                width={220}
                height={220}
                className="object-contain filter drop-shadow-2xl"
              />
            </div>
            
            {/* Círculos decorativos sutiles detrás del logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 border border-white/10 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 border border-white/15 rounded-full animate-pulse delay-600"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border border-white/5 rounded-full animate-pulse delay-900"></div>
            </div>
            
            {/* Resplandor sutil detrás del logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Títulos con tipografía mejorada */}
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up tracking-tight">
            <span className="bg-gradient-to-r from-white to-[#f6f6f6] bg-clip-text text-transparent">
              Presentación
            </span>
          </h1>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-white/95 mb-3 animate-slide-up delay-200 tracking-wide">
              Junta Directiva
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#f6f6f6] to-[#d4d4e1] mx-auto rounded-full animate-scale-in delay-400"></div>
          </div>
          
          <h3 className="text-xl md:text-2xl text-white/85 mb-2 animate-slide-up delay-400 font-medium">
            Colegio Nacional de Curadores Urbanos
          </h3>
          
          <div className="inline-block">
            <h4 className="text-lg md:text-xl text-white/75 mb-2 animate-slide-up delay-500 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
              2025-2026
            </h4>
          </div>
        </div>

        {/* Botón con diseño premium */}
        <div className="animate-fade-in delay-600">
          <Button
            onClick={nextSlide}
            size="lg"
            className="relative bg-gradient-to-r from-white to-[#f6f6f6] text-[#2c4687] hover:from-[#f6f6f6] hover:to-[#d4d4e1] font-bold px-10 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 group overflow-hidden"
          >
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="relative z-10 flex items-center">
              Comenzar Presentación
              <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
          
          {/* Indicador de navegación */}
          <div className="mt-8 text-white/60 text-sm animate-fade-in delay-1000">
            <div className="flex items-center justify-center space-x-2">
              <span>Presiona</span>
              <kbd className="bg-white/20 px-2 py-1 rounded text-xs font-mono">→</kbd>
              <span>o</span>
              <kbd className="bg-white/20 px-2 py-1 rounded text-xs font-mono">Espacio</kbd>
              <span>para navegar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderIndice = () => (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circulitos y elementos pequeños */}
        <div className="absolute top-20 right-20 w-3 h-3 bg-[#2c4687] rounded-full opacity-30"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-[#8a94bb] rounded-full opacity-50"></div>
        <div className="absolute top-40 right-16 w-1 h-12 bg-[#d4d4e1] rounded-full"></div>
        
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#8a94bb] rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-[#2c4687] rounded-full opacity-60"></div>
        <div className="absolute bottom-16 left-16 w-1 h-8 bg-[#d4d4e1] rounded-full"></div>
        
        {/* Líneas sutiles decorativas */}
        <div className="absolute top-60 left-10 w-16 h-0.5 bg-[#d4d4e1] opacity-40"></div>
        <div className="absolute top-80 right-10 w-12 h-0.5 bg-[#8a94bb] opacity-30"></div>
        <div className="absolute bottom-60 left-1/2 w-8 h-0.5 bg-[#2c4687] opacity-20"></div>
        
        {/* Círculos más grandes muy sutiles */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-[#d4d4e1] rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-[#8a94bb] rounded-full opacity-15"></div>
      </div>

      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        {/* Header minimalista */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-light text-[#2c4687] mb-4 tracking-wide">
            Junta Directiva
          </h1>
          <div className="w-20 h-1 bg-[#2c4687] mx-auto mb-6"></div>
          <p className="text-xl text-[#8a94bb] font-light">2025-2026</p>
          <p className="text-base text-[#8a94bb] mt-2 opacity-80">Colegio Nacional de Curadores Urbanos</p>
        </div>

        {/* Grid de secciones - Índice simple */}
        <div className="space-y-16">
          
          {/* Junta Directiva */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#2c4687] mb-2">Junta Directiva</h2>
              <div className="w-16 h-1 bg-[#2c4687]"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#d4d4e1]">
              {juntaDirectiva.map((miembro, index) => (
                <div 
                  key={miembro.id}
                  className="group flex items-center justify-between p-6 border-b border-[#f6f6f6] last:border-b-0 cursor-pointer hover:bg-[#f6f6f6] transition-all duration-300"
                  onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-4 h-4 bg-[#2c4687] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <p className="text-sm font-medium text-[#8a94bb] uppercase tracking-wider mb-1">
                        {miembro.cargo}
                      </p>
                      <p className="text-lg font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors">
                        {miembro.nombre}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#d4d4e1] group-hover:text-[#8a94bb] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Dignatarios */}
          <div className="animate-fade-in delay-200">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#2c4687] mb-2">Dignatarios</h2>
              <div className="w-16 h-1 bg-[#8a94bb]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dignatarios.map((miembro, index) => (
                <div 
                  key={miembro.id}
                  className="group bg-white rounded-xl p-6 shadow-md border border-[#d4d4e1] cursor-pointer hover:shadow-lg hover:border-[#8a94bb] transition-all duration-300"
                  onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  style={{ animationDelay: `${index * 50 + 400}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#8a94bb] rounded-full group-hover:bg-[#2c4687] transition-colors duration-300"></div>
                      <div>
                        <p className="text-xs font-medium text-[#8a94bb] uppercase tracking-wider mb-1">
                          Dignatario
                        </p>
                        <p className="text-base font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors">
                          {miembro.nombre}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#d4d4e1] group-hover:text-[#8a94bb] transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Procuradores */}
          <div className="animate-fade-in delay-400">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#2c4687] mb-2">Procuradores</h2>
              <div className="w-16 h-1 bg-[#2c4687]"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#d4d4e1]">
              {procuradores.map((miembro, index) => (
                <div 
                  key={miembro.id}
                  className="group flex items-center justify-between p-6 border-b border-[#f6f6f6] last:border-b-0 cursor-pointer hover:bg-[#f6f6f6] transition-all duration-300"
                  onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-4 h-4 bg-[#2c4687] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <p className="text-sm font-medium text-[#8a94bb] uppercase tracking-wider mb-1">
                        {miembro.cargo}
                      </p>
                      <p className="text-lg font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors">
                        {miembro.nombre}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#d4d4e1] group-hover:text-[#8a94bb] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Colaboradores */}
          <div className="animate-fade-in delay-600">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#2c4687] mb-2">Colaboradores</h2>
              <div className="w-16 h-1 bg-[#8a94bb]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {colaboradores.map((miembro, index) => (
                <div 
                  key={miembro.id}
                  className="group bg-white rounded-xl p-6 shadow-md border border-[#d4d4e1] cursor-pointer hover:shadow-lg hover:border-[#8a94bb] transition-all duration-300"
                  onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  style={{ animationDelay: `${index * 100 + 800}ms` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#f6f6f6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8a94bb] transition-colors duration-300">
                      <div className="w-6 h-6 bg-[#8a94bb] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                    <p className="text-xs font-medium text-[#8a94bb] uppercase tracking-wider mb-2">
                      {miembro.cargo}
                    </p>
                    <p className="text-base font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors">
                      {miembro.nombre}
                    </p>
                    <ChevronRight className="w-4 h-4 text-[#d4d4e1] mx-auto mt-3 group-hover:text-[#8a94bb] transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer de navegación */}
        <div className="text-center mt-20 animate-fade-in delay-1000">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-md border border-[#d4d4e1]">
            <div className="flex items-center space-x-2 text-[#8a94bb]">
              <div className="w-2 h-2 bg-[#2c4687] rounded-full"></div>
              <span className="text-sm font-medium">Haz clic para ver detalles</span>
            </div>
            <div className="w-px h-4 bg-[#d4d4e1]"></div>
            <div className="flex items-center space-x-3 text-[#8a94bb]">
              <kbd className="bg-[#f6f6f6] px-2 py-1 rounded text-xs font-mono border border-[#d4d4e1]">←</kbd>
              <kbd className="bg-[#f6f6f6] px-2 py-1 rounded text-xs font-mono border border-[#d4d4e1]">→</kbd>
              <span className="text-sm font-medium">Navegar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMiembro = (miembro: (typeof todosMiembros)[0]) => (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Header minimalista y elegante */}
      <div className="bg-gradient-to-r from-[#2c4687] to-[#3b5398] py-8 px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            
            {/* Logo pequeño y título */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/logo-cncu.png"
                  alt="CNCU"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="text-white">
                <h2 className="text-lg font-semibold">Colegio Nacional de Curadores Urbanos</h2>
                <p className="text-white/80 text-sm">Junta Directiva 2025-2026</p>
              </div>
            </div>
            
            {/* Información del miembro */}
            <div className="text-right text-white">
              <h1 className="text-2xl font-bold">{miembro.nombre}</h1>
              <p className="text-white/90 text-lg">{miembro.cargo}</p>
              {(miembro as any).detalles?.titulo && (
                <p className="text-white/70 text-sm">{(miembro as any).detalles.titulo}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Línea decorativa */}
      <div className="h-1 bg-gradient-to-r from-[#2c4687] via-[#8a94bb] to-[#2c4687]"></div>

      {/* Contenido principal estilo CV */}
      <div className="bg-gray-50 min-h-screen relative">
        
        {/* Elementos decorativos en los espacios laterales FUERA del container */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          
          {/* Lado IZQUIERDO - Solo 2 elementos */}
          <div className="absolute left-0 top-0 w-32 h-full">
            <div className="absolute top-1/3 left-6 w-12 h-12 bg-[#2c4687]/8 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/3 left-4 w-8 h-8 bg-[#8a94bb]/10 rotate-45 animate-spin" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
          </div>
          
          {/* Lado DERECHO - Solo 2 elementos */}
          <div className="absolute right-0 top-0 w-32 h-full">
            <div className="absolute top-1/3 right-6 w-10 h-10 bg-[#8a94bb]/8 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
            <div className="absolute bottom-1/3 right-4 w-6 h-6 bg-[#2c4687]/10 rotate-45 animate-spin" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
          </div>
          
        </div>
        
        <div className="w-[90%] mx-auto px-4 py-16 relative z-10">
          
          {/* Sección "Sobre Mí" - Estilo más fiel al CV de Angela */}
          <div className="py-0 relative overflow-hidden">
            
            {/* Elementos decorativos animados de fondo */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Elementos en el área exterior del contenido principal */}
              
              {/* Esquina superior izquierda */}
              <div className="absolute top-16 left-16 w-12 h-12 bg-[#2c4687]/10 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
              <div className="absolute top-32 left-8 w-8 h-8 bg-[#8a94bb]/12 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
              
              {/* Esquina superior derecha */}
              <div className="absolute top-20 right-16 w-10 h-10 bg-[#8a94bb]/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-[#2c4687]/12 rounded-full animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
              
              {/* Esquina inferior izquierda */}
              <div className="absolute bottom-20 left-12 w-14 h-14 bg-[#2c4687]/8 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
              <div className="absolute bottom-8 left-20 w-8 h-8 bg-[#8a94bb]/10 rounded-full animate-pulse" style={{ animationDelay: '4s', animationDuration: '4s' }}></div>
              
              {/* Esquina inferior derecha */}
              <div className="absolute bottom-16 right-12 w-12 h-12 bg-[#8a94bb]/8 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
              <div className="absolute bottom-32 right-20 w-6 h-6 bg-[#2c4687]/12 rounded-full animate-bounce" style={{ animationDelay: '3.5s', animationDuration: '4s' }}></div>
              
              {/* Elementos en los márgenes laterales del contenido */}
              <div className="absolute top-1/3 left-24 w-6 h-6 bg-[#2c4687]/10 rotate-45 animate-spin" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
              <div className="absolute top-2/3 right-24 w-8 h-8 bg-[#8a94bb]/10 rotate-45 animate-spin" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
              
              {/* Líneas decorativas sutiles en los márgenes */}
              <div className="absolute top-1/4 left-12 w-16 h-1 bg-gradient-to-r from-[#2c4687]/15 to-transparent animate-pulse" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
              <div className="absolute bottom-1/4 right-12 w-20 h-1 bg-gradient-to-l from-[#8a94bb]/15 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
              
              {/* Triángulos pequeños en los espacios libres */}
              <div className="absolute top-1/2 left-16 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#2c4687]/10 animate-bounce" style={{ animationDelay: '5s', animationDuration: '4s' }}></div>
              <div className="absolute top-1/2 right-16 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-[#8a94bb]/10 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '6s' }}></div>
            </div>
            {/* Título con efecto superpuesto igual al CV de Angela */}
            <div className="relative flex items-center justify-center mb-8 z-10">
              <h1 
                className="text-8xl font-bold text-gray-100 uppercase tracking-widest"
                style={{ WebkitTextStroke: '1px #dee2e6' }}
              >
                SOBRE
              </h1>
              <h1 className="absolute text-4xl font-bold text-[#2c4687] uppercase tracking-wide">
                {miembro.nombre}
              </h1>
            </div>
            
            {/* Layout igual al CV: imagen izquierda, contenido derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
              
              {/* Logo del Colegio lado izquierdo (4 columnas - reducido) */}
              <div className="lg:col-span-4">
                <div className="relative">
                  <div className="w-full h-[350px] bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-200">
                    <Image
                      src="/logo-cncu.png"
                      alt="Logo Colegio Nacional de Curadores Urbanos"
                      width={450}
                      height={450}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Contenido lado derecho (8 columnas - ampliado) */}
              <div className="lg:col-span-8">
                
                {/* Título del cargo con diseño especial */}
                <div className="mb-6">
                  <div className="inline-block relative">
                    <div className="bg-gradient-to-r from-[#2c4687] to-[#3b5398] px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-3xl font-bold text-white tracking-wide text-center">
                        {miembro.cargo}
                      </h3>
                    </div>
                    {/* Efecto de sombra decorativa */}
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#2c4687]/20 rounded-2xl -z-10"></div>
                  </div>
                </div>
                
                {/* Descripción/experiencia como párrafo principal */}
                {(miembro as any).detalles?.experiencia && typeof (miembro as any).detalles.experiencia === 'string' && (
                  <div className="text-gray-600 leading-relaxed text-lg mb-8 whitespace-pre-line text-justify">
                    {(miembro as any).detalles.experiencia}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCierre = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#2c4687] via-[#3b5398] to-[#8a94bb] flex items-center justify-center relative overflow-hidden">
      {/* Elementos decorativos similares a la portada */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos flotantes con gradientes */}
        <div className="absolute top-20 left-32 w-72 h-72 bg-gradient-to-br from-white/20 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-48 h-48 bg-gradient-to-br from-[#d4d4e1]/30 to-transparent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-tr from-white/10 to-transparent rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-80 w-64 h-64 bg-gradient-to-tr from-[#f6f6f6]/20 to-transparent rounded-full animate-pulse delay-1000"></div>
        
        {/* Elementos geométricos modernos */}
        <div className="absolute top-40 right-20 w-32 h-32 border-2 border-white/20 rotate-45 animate-pulse delay-200"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 border-2 border-[#d4d4e1]/30 rotate-12 animate-pulse delay-700"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto px-8">
        {/* Logo con diseño premium */}
        <div className="mb-16 animate-fade-in">
          <div className="relative">
            {/* Logo principal */}
            <div className="w-48 h-48 mx-auto flex items-center justify-center">
              <Image
                src="/logo-cncu.png"
                alt="Logo Colegio Nacional de Curadores Urbanos"
                width={160}
                height={160}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            {/* Efectos de brillo alrededor del logo */}
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse"></div>
          </div>
        </div>

        {/* Mensaje de agradecimiento */}
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl leading-tight">
            Gracias por su
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4d4e1] via-white to-[#f6f6f6] animate-pulse">
              Atención
            </span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Colegio Nacional de Curadores Urbanos
            </p>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Junta Directiva 2025-2026
            </p>
          </div>

          {/* Elementos decorativos adicionales */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/50"></div>
            <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative">
      {/* Contenido principal */}
      <div
        className={`transition-opacity duration-200 ${isAnimating ? "opacity-50" : "opacity-100"}`}
      >
        {currentSlide === 0 && renderPortada()}
        {currentSlide === 1 && renderIndice()}
        {currentSlide >= 2 && currentSlide <= todosMiembros.length + 1 && renderMiembro(todosMiembros[currentSlide - 2])}
        {currentSlide === todosMiembros.length + 2 && renderCierre()}
      </div>

      {/* Controles de navegación */}
      {currentSlide > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#d4d4e1] z-[100]">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={isAnimating}
            className="text-[#2c4687] hover:bg-[#f6f6f6]"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <span className="text-sm font-medium text-[#2c4687] px-3">
            {currentSlide} / {totalSlides - 1}
          </span>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={isAnimating}
            className="text-[#2c4687] hover:bg-[#f6f6f6]"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
