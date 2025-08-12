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
      experiencia: "Arquitecto de la Universidad La Gran Colombia, con amplia experiencia en el sector de curadorías urbanas y desarrollo territorial",
      formacion: [
        "Arquitecto - Universidad La Gran Colombia",
        "Especialista en Urbanismo",
        "Especialista en Derecho Urbano",
        "Magíster en Derecho y Gestión Urbanística – Universidad del Rosario"
      ],
      experienciaProfesional: [
        "Coordinador de Vivienda de la ciudad de Montería",
        "Director de la Política Departamental de Vivienda de Córdoba",
        "Asesor en temas de desarrollo territorial de varios municipios en Colombia",
        "Curador Urbano 1 de la ciudad de Montería 2015-2020 y 2021-2026",
        "Presidente del Colegio Nacional de Curadores Urbanos 2025-2026"
      ],
      logros: [
        "Modernización integral de los procesos del Colegio Nacional",
        "Fortalecimiento de la representación gremial a nivel nacional",
        "Implementación de nuevas tecnologías en el sector de curadorías",
        "Mejora sustancial de las relaciones interinstitucionales"
      ]
    }
  },
  { 
    id: 2, 
    nombre: "Martha Cecilia Palomino Quiñonez", 
    cargo: "Vicepresidente", 
    foto: "/professional-architect.png",
    detalles: {
      posesion: "2 de enero de 2023",
      experiencia: "más de 30 años de experiencia en el sector público y privado",
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
      formacion: [
        "Ingeniera Civil - Universidad Francisco de Paula Santander",
        "Abogada - Universidad de Santander",
        "Especialista en Administración de la Construcción - Universidad Francisco de Paula Santander",
        "Especialista en Planificación y Administración del Desarrollo Regional - Universidad de los Andes",
        "Especialista en Derecho Inmobiliario Notarial y Urbanístico - Unilibre",
        "Magister en Gestión Urbana - Universidad Piloto de Colombia",
        "Cursando Especialización en Derecho Administrativo - Unilibre"
      ],
      experiencia: [
        "18 años como Curadora Urbana 1 de Cúcuta (15-junio-2007 a la fecha)",
        "12 años en Alcaldía de Cúcuta (13-01-1995 a 14-06-2007)",
        "Docente modalidad cátedra Universidad Libre de Colombia seccionales Cúcuta y Socorro"
      ],
      cargos: [
        "Profesional Universitario área control físico y Ambiental",
        "Directora (e) Planeación Municipal",
        "Jefe (e) Estudios Socioeconómicos y Proyectos de inversión",
        "Jefe Demarcación, nomenclatura y usos del suelo"
      ]
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
      formacion: [
        "Arquitecta - Universidad la Gran Colombia",
        "Especialista en Planeación Territorial - Fundación Universidad de América",
        "Especialista en Derecho Urbano - Colegio Mayor de Nuestra Señora del Rosario"
      ],
      experiencia: "29 años de experiencia profesional",
      docencia: [
        "Universidad Antonio Nariño (2000-2001) - metodología de la investigación, ética profesional",
        "Universidad de Ibagué (2008-2009) - taller VII, construcción VI, urbanismo IV"
      ],
      sectorPublico: [
        "Directora de ordenamiento territorial – Alcaldía de Ibagué (2002-2003)",
        "Asesora de municipios (Guamo, Cajamarca, Ambalema, Ibagué)",
        "Curadora Urbana n° 1 de Ibagué en provisionalidad (2013-2014)",
        "Curadora Urbana n° 2 de Ibagué en propiedad (desde junio 2021)"
      ],
      sectorPrivado: [
        "23 años como profesional independiente",
        "Consultorías y asesorías para proyectos urbanísticos y arquitectónicos",
        "CEO de Crecimiento Urbano SAS (desde 2017)",
        "Director ejecutivo Sociedad Colombiana de Arquitectos Regional Tolima (1999-2000)"
      ]
    }
  },
  { 
    id: 5, 
    nombre: "Jose Yair Caicedo Palacios", 
    cargo: "Dignatario", 
    foto: "/professional-woman-architect.png",
    detalles: {
      titulo: "Curador Urbano 1 de Barrancabermeja",
      matricula: "A252000-16509055",
      nacimiento: "27 de Agosto de 1975 - Buenaventura, Valle del Cauca",
      formacion: [
        "Arquitecto - Universidad La Gran Colombia (25 años de experiencia)",
        "Especialista en Planeamiento Urbano y Regional",
        "Especialista en Espacio Público Construido",
        "Magister en Planeación Urbana y Regional con énfasis en diseño urbano"
      ],
      experiencia: [
        "25 años en proyectos de ordenamiento, planeación, diseño y norma urbana",
        "Proyectos en Bogotá, Barrancabermeja, Cali, Buenaventura, Santa Marta, Medellín, Ipiales, Tunja, Toca, Jagua de Ibirico y Ciudad de Panamá"
      ],
      especialidades: [
        "Revisión de planes de ordenamiento territorial",
        "Formulación de planes de mitigación de impactos",
        "Planes parciales y unidades de planificación rural",
        "Diseño de hospitales, centros universitarios, edificios multifamiliares"
      ],
      cargos: [
        "Secretario de Planeación Municipal",
        "Curador Suplente",
        "Docente de maestría",
        "Actual Curador de Barrancabermeja"
      ],
      contacto: "yair.caicedo@curaduria1barrancabermeja.com.co"
    }
  },
  { id: 6, nombre: "Angela Maria Restrepo Uribe", cargo: "Dignatario", foto: "/professional-woman-executive.png" },
  { 
    id: 7, 
    nombre: "Mauricio Vargas Cuellar", 
    cargo: "Dignatario", 
    foto: "/professional-architect.png",
    detalles: {
      titulo: "Curador Urbano 1 Neiva",
      experiencia: "Arquitecto con más de 40 años de experiencia en planeación urbana, desarrollo regional, estudios urbanísticos, ordenamiento territorial y gestión de proyectos",
      formacion: [
        "Arquitectura - Universidad Piloto de Colombia (1983)",
        "Especialización en Evaluación Social de Proyectos - Universidad de los Andes (1997)",
        "Especialización en Planeación Urbana y Regional - ESAP (1999)",
        "Especialización en Planificación y Administración del Desarrollo Regional - Universidad de los Andes (2003)",
        "Especialización en Derecho Urbano - Universidad Externado de Colombia (2006)",
        "Maestría en Gestión Urbana - Universidad Piloto de Colombia (2012)"
      ],
      experienciaProfesional: [
        "Departamento Administrativo de Planeación distrital – 13 años (1984-1997)",
        "Curador Urbano – 28 años desde 1997 a la fecha"
      ],
      logros: [
        "Formación avanzada en derecho urbano, evaluación social de proyectos",
        "Especialización en planeación, administración y gestión urbana",
        "Más de 40 años de experiencia en el sector urbanístico"
      ]
    }
  },
  { 
    id: 8, 
    nombre: "Janeth Arango Castaño", 
    cargo: "Dignatario", 
    foto: "/professional-woman-engineer.png",
    detalles: {
      titulo: "Curadora Urbana 4 Medellín",
      experiencia: "Abogada Magister en Procesos Urbanos y Ambientales, con experiencia específica para el sector público y privado en derecho administrativo, urbanístico e inmobiliario",
      formacion: [
        "Abogada",
        "Magister en Procesos Urbanos y Ambientales",
        "Especialista en Derecho Administrativo",
        "Especialista en Gestión Pública",
        "Especialista en Derecho Urbano",
        "Especialista en Gestión de la Ciudad y del Territorio",
        "Curso de especialización en Urbanismo y Desarrollo Sostenible (España)",
        "Curso de especialización en Planificación Estratégica Territorial (Argentina)",
        "Diplomados en Ordenamiento Territorial y Derecho Urbano",
        "Cursos de Avalúos y Gestión del Suelo"
      ],
      experienciaProfesional: [
        "Asesora jurídica en instrumentos de planificación, gestión y financiación",
        "Formulación de Planes de Ordenamiento territorial",
        "Macroproyectos urbanos y Planes Parciales",
        "Elaboración y revisión de norma urbanística, planes locales",
        "Estudio de títulos, procesos de negociación y titulación de predios",
        "Procesos administrativos, urbanísticos y de Reglamento de Propiedad Horizontal"
      ],
      logros: [
        "Designada como Curadora Urbana Cuarta de Medellín el 23 de junio de 2023",
        "Especialización internacional en España y Argentina",
        "Amplia experiencia en derecho administrativo e inmobiliario"
      ]
    }
  },
  { 
    id: 9, 
    nombre: "Dennys Esther Valverde Sanchez", 
    cargo: "Dignatario", 
    foto: "/professional-man-doctor.png",
    detalles: {
      titulo: "Curadora Urbana 1 de Puerto Colombia",
      formacion: [
        "Ingeniera Civil especialista en Derecho Urbano - Universidad Externado de Colombia",
        "Especialista en Régimen de Propiedad Horizontal - Universidad de Cataluña"
      ],
      experiencia: "Amplia experiencia en temas relacionados con el ordenamiento del territorio y planificación urbana",
      carreraProfesional: [
        "Jefe de la División de Control Urbano y Espacio Público de Barranquilla",
        "Asistente de los Curadores Urbanos Roque Amín Escaf y Luis Alviar Piedrahita",
        "Curadora (E) en el Distrito de Barranquilla",
        "Subgerente Técnico del Instituto Distrital de Urbanismo y Control IDUC",
        "Curadora Primera del Distrito de Santa Marta",
        "Curadora Primera del municipio de Puerto Colombia"
      ],
      proyectosDestacados: [
        "Coordinación del estudio de Recuperación del Espacio Público del Centro Histórico de Barranquilla",
        "Elaboración del Manual del Espacio Público de Barranquilla",
        "Coordinación Interinstitucional del Plan Parcial del Barrio Siape",
        "Formulación de múltiples Planes Parciales y UPR",
        "Consultorías a empresas constructoras a nivel nacional"
      ]
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
      experiencia: "Arquitecta Universidad del Valle especialista en Ordenamiento y Gestión Integral del Territorio con 22 años como Curadora Urbana",
      formacion: [
        "Arquitecta Universidad del Valle",
        "Especialista en Ordenamiento y Gestión Integral del Territorio"
      ],
      experienciaProfesional: [
        "22 años de experiencia como Curadora Urbana",
        "Liderazgo en coordinación nacional de procuradores",
        "Gestión integral del territorio urbano",
        "Supervisión de procesos de curadurías urbanas a nivel nacional"
      ],
      logros: [
        "22 años de servicio continuo como Curadora Urbana",
        "Designada como Coordinadora Nacional de Procuradores",
        "Reconocida experiencia en ordenamiento territorial"
      ]
    }
  },
  {
    id: 11,
    nombre: "Lilia Margarita Amaya Nuñez",
    cargo: "Procurador Suplente",
    foto: "/professional-woman-executive.png",
    detalles: {
      titulo: "Curadora Urbana 3 Manizales",
      experiencia: "Arquitecta con especialización en Diseño Ambiental de la Universidad Nacional y amplia experiencia en curadurías urbanas y trámites urbanísticos",
      formacion: [
        "Arquitecta Universidad Nacional",
        "Especialista en Diseño Ambiental"
      ],
      experienciaProfesional: [
        "Curadora Urbana Tercera de Manizales",
        "Gestión de trámites urbanísticos y licencias de construcción",
        "Supervisión de proyectos arquitectónicos y urbanos",
        "Evaluación de cumplimiento normativo urbanístico"
      ],
      logros: [
        "Designada como Curadora Urbana Tercera de Manizales",
        "Especialización en diseño ambiental aplicado al urbanismo",
        "Reconocida trayectoria en gestión urbanística"
      ]
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
      experiencia: "Abogada especialista en Derecho Urbano y Derecho Administrativo con cerca de 19 años de experiencia en análisis, aplicación y seguimiento de normativa urbanística",
      formacion: [
        "Abogada",
        "Especialista en Derecho Urbano",
        "Especialista en Derecho Administrativo"
      ],
      experienciaProfesional: [
        "19 años de experiencia en normativa urbanística y administrativa",
        "Análisis y aplicación de instrumentos de planificación urbana",
        "Asesoría y acompañamiento jurídico a Curadores Urbanos",
        "Gestión de instrumentos de planificación urbana",
        "Seguimiento de normativa urbanística"
      ],
      logros: [
        "Cerca de 19 años de experiencia especializada",
        "Reconocida expertise en derecho urbano y administrativo",
        "Liderazgo en coordinación jurídica nacional"
      ]
    }
  },
  { 
    id: 13, 
    nombre: "Jesus Esteban Jaramillo Buitrago", 
    cargo: "Contador", 
    foto: "/professional-woman-engineer.png",
    detalles: {
      titulo: "Revisor Fiscal",
      experiencia: "Contador Público Universidad de Medellín con especialización en Gestión Tributaria y amplia experiencia en revisión fiscal y contabilidad empresarial",
      formacion: [
        "Contador Público Universidad de Medellín",
        "Especialista en Gestión Tributaria",
        "Formación continua en normatividad contable y fiscal"
      ],
      experienciaProfesional: [
        "Experiencia en revisión fiscal empresarial",
        "Gestión contable y financiera",
        "Asesoría en temas tributarios y fiscales",
        "Implementación de controles internos contables"
      ],
      logros: [
        "Designado como Revisor Fiscal",
        "Especialización en gestión tributaria",
        "Reconocida trayectoria en contabilidad empresarial"
      ]
    }
  },
  { 
    id: 14, 
    nombre: "Sandra Yaneth Urete Guzman", 
    cargo: "Secretaria", 
    foto: "/professional-man-doctor.png",
    detalles: {
      titulo: "Secretaria General",
      experiencia: "Profesional con amplia experiencia en gestión administrativa y secretarial, especializada en coordinación de juntas directivas y manejo de documentación oficial",
      formacion: [
        "Formación en gestión administrativa",
        "Especialización en secretariado ejecutivo",
        "Capacitación en manejo de documentación oficial"
      ],
      experienciaProfesional: [
        "Gestión y coordinación de reuniones de junta directiva",
        "Manejo de correspondencia y documentación oficial",
        "Coordinación administrativa y logística",
        "Apoyo en la toma de decisiones ejecutivas"
      ],
      logros: [
        "Designada como Secretaria General",
        "Reconocida eficiencia en gestión administrativa",
        "Experiencia en coordinación de órganos directivos"
      ]
    }
  },
  {
    id: 15,
    nombre: "Ángela María Restrepo Uribe",
    cargo: "Curadora Urbana",
    foto: "/professional-woman-architect.png",
    detalles: {
      titulo: "Curadora Urbana Segunda de Medellín",
      experiencia: "Arquitecta Universidad Nacional con 35 años de experiencia, especialista en Administración Pública, Gestión Urbana y Derecho Urbano. Ex-presidenta de la Junta Directiva del Colegio Nacional de Curadores",
      formacion: [
        "Arquitecta Universidad Nacional de Colombia",
        "Especialista en Administración Pública - ESAP",
        "Especialista en Gestión y Procesos Urbanos - Escuela de Ingeniería de Antioquia",
        "Especialista en Derecho Urbano - Universidad Externado de Colombia"
      ],
      experienciaProfesional: [
        "35 años de experiencia profesional",
        "Curadora Urbana Tercera de Medellín (2007-2018)",
        "Curadora Urbana Segunda y Cuarta de Medellín (2014-2018)",
        "Curadora Urbana Segunda de Medellín (desde junio 2023)",
        "Presidenta Junta Directiva Colegio Nacional de Curadores (2 años)",
        "Secretaria de Planeación y Desarrollo Municipal - La Estrella",
        "Directora de Planeación Metropolitana - Área Metropolitana Valle de Aburrá",
        "Consultora Corantioquia, Concejo Municipal La Estrella, Municipio de Medellín"
      ],
      logros: [
        "35 años de trayectoria profesional",
        "11 años como Curadora Urbana de Medellín",
        "2 años como Presidenta del Colegio Nacional de Curadores",
        "Participación en revisión del POT de Medellín",
        "9 años como Coordinadora de Formulación del POT La Estrella",
        "5 años en cargos directivos Área Metropolitana Valle de Aburrá"
      ]
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
    <div className="min-h-screen bg-gradient-to-br from-[#f6f6f6] via-white to-[#d4d4e1]/30 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#2c4687]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#8a94bb]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#2c4687]/5 to-[#8a94bb]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen p-4">
        <div className="max-w-full mx-auto">
          
          {/* Layout principal: Dinámico según contenido disponible */}
          <div className="flex gap-6 animate-fade-in">
            
            {/* DIV 1: Información + Formación + Trayectoria (ancho dinámico) */}
            <div className={`space-y-6 ${(miembro as any).detalles?.logros ? 'w-3/4' : 'w-full'}`}>
              
              {/* Información personal expandida */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-[#d4d4e1]/50">
                <div className="flex items-center space-x-6">
                  
                  {/* Avatar */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#2c4687] to-[#8a94bb] rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-[#2c4687] to-[#8a94bb] rounded-3xl flex items-center justify-center shadow-xl">
                      <span className="text-xl font-bold text-white tracking-wide">
                        {miembro.nombre.split(' ').map((name: string) => name[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Info detallada */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-[#2c4687] to-[#8a94bb] text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider">
                        {miembro.nombre.split(' ').map((name: string) => name[0]).join('')}
                      </div>
                      <div className="h-6 w-px bg-gradient-to-b from-[#2c4687] to-[#8a94bb]"></div>
                      <span className="text-xl font-bold text-[#2c4687] tracking-wide">{miembro.cargo}</span>
                    </div>
                    
                    <h1 className="text-3xl font-light text-[#2c4687] tracking-tight leading-tight">
                      {miembro.nombre}
                    </h1>
                    
                    {(miembro as any).detalles?.experiencia && (
                      <p className="text-base text-[#8a94bb] leading-relaxed font-light">
                        {(miembro as any).detalles.experiencia}
                      </p>
                    )}
                  </div>
                  
                  {/* Métricas */}
                  <div className="flex space-x-4">
                    {(miembro as any).detalles?.formacion && (
                      <div className="text-center bg-white/80 rounded-xl px-3 py-2 backdrop-blur-lg border border-[#d4d4e1]/50">
                        <div className="text-xl font-bold bg-gradient-to-r from-[#2c4687] to-[#8a94bb] bg-clip-text text-transparent">
                          {(miembro as any).detalles.formacion.length}
                        </div>
                        <div className="text-xs text-[#8a94bb] uppercase tracking-wider">Formaciones</div>
                      </div>
                    )}
                    {(miembro as any).detalles?.experienciaProfesional && (
                      <div className="text-center bg-white/80 rounded-xl px-3 py-2 backdrop-blur-lg border border-[#d4d4e1]/50">
                        <div className="text-xl font-bold bg-gradient-to-r from-[#8a94bb] to-[#2c4687] bg-clip-text text-transparent">
                          {(miembro as any).detalles.experienciaProfesional.length}
                        </div>
                        <div className="text-xs text-[#8a94bb] uppercase tracking-wider">Experiencias</div>
                      </div>
                    )}
                    {(miembro as any).detalles?.logros && (
                      <div className="text-center bg-white/80 rounded-xl px-3 py-2 backdrop-blur-lg border border-[#d4d4e1]/50">
                        <div className="text-xl font-bold bg-gradient-to-r from-[#2c4687] to-[#8a94bb] bg-clip-text text-transparent">
                          {(miembro as any).detalles.logros.length}
                        </div>
                        <div className="text-xs text-[#8a94bb] uppercase tracking-wider">Logros</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Grid para Formación y Trayectoria - Ancho dinámico */}
              <div className={`grid gap-6 ${
                (miembro as any).detalles?.formacion && (miembro as any).detalles?.experienciaProfesional 
                  ? 'grid-cols-2' 
                  : 'grid-cols-1'
              }`}>
                
                {/* Formación Académica */}
                {(miembro as any).detalles?.formacion && (
                  <div className="animate-slide-up delay-100">
                    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-[#d4d4e1]/50 overflow-hidden h-full">
                      
                      {/* Header con gradiente */}
                      <div className="bg-gradient-to-r from-[#2c4687] to-[#8a94bb] p-5">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-base">Formación Académica</h3>
                        </div>
                      </div>
                      
                      {/* Contenido */}
                      <div className="p-5">
                        <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto">
                          {(miembro as any).detalles.formacion.map((item: string, index: number) => (
                            <div key={index} className="group relative">
                              <div className="bg-gradient-to-r from-[#f6f6f6] to-[#d4d4e1]/30 rounded-xl p-3 hover:shadow-lg transition-all duration-300 border border-[#d4d4e1]/50">
                                <div className="flex items-start space-x-2">
                                  <div className="w-5 h-5 bg-gradient-to-r from-[#2c4687] to-[#8a94bb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                  </div>
                                  <p className="text-[#2c4687] leading-relaxed text-sm">{item}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Experiencia Profesional */}
                {(miembro as any).detalles?.experienciaProfesional && (
                  <div className="animate-slide-up delay-200">
                    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-[#d4d4e1]/50 overflow-hidden h-full">
                      
                      {/* Header */}
                      <div className="bg-gradient-to-r from-[#8a94bb] to-[#2c4687] p-5">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-white font-semibold text-base">Trayectoria Profesional</h3>
                        </div>
                      </div>
                      
                      {/* Contenido en grid */}
                      <div className="p-5">
                        <div className="grid grid-cols-1 gap-3 max-h-[calc(100vh-400px)] overflow-y-auto">
                          {(miembro as any).detalles.experienciaProfesional.map((item: string, index: number) => (
                            <div key={index} className="group relative">
                              <div className="bg-gradient-to-br from-[#f6f6f6] to-[#d4d4e1]/30 rounded-xl p-3 hover:shadow-lg transition-all duration-300 border border-[#d4d4e1]/50">
                                
                                {/* Número de posición */}
                                <div className="flex items-center mb-2">
                                  <div className="w-6 h-6 bg-gradient-to-r from-[#8a94bb] to-[#2c4687] rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white text-xs font-bold">#{index + 1}</span>
                                  </div>
                                  <div className="flex-1 h-px bg-gradient-to-r from-[#d4d4e1] to-[#8a94bb] rounded-full"></div>
                                </div>
                                
                                <p className="text-[#2c4687] text-sm leading-relaxed">{item}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* DIV 2: Logros Destacados (25% - solo si existen) */}
            {(miembro as any).detalles?.logros && (
              <div className="w-1/4">
                <div className="animate-slide-up delay-300 h-full">
                  <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-[#d4d4e1]/50 overflow-hidden h-full">
                    
                    {/* Header de logros */}
                    <div className="bg-gradient-to-r from-[#2c4687] to-[#8a94bb] p-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-base">Logros Destacados</h3>
                      </div>
                    </div>
                    
                    {/* Logros en columna vertical */}
                    <div className="p-5">
                      <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
                        {(miembro as any).detalles.logros.map((item: string, index: number) => (
                          <div key={index} className="group">
                            <div className="bg-gradient-to-br from-[#f6f6f6] to-[#d4d4e1]/30 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-[#d4d4e1]/50">
                              
                              {/* Icono de logro */}
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-[#2c4687] to-[#8a94bb] rounded-full flex items-center justify-center mr-3">
                                  <span className="text-white text-xs font-bold">{index + 1}</span>
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#d4d4e1] to-[#8a94bb] rounded-full"></div>
                              </div>
                              
                              <p className="text-[#2c4687] leading-relaxed font-medium text-sm">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer con información adicional */}
          <div className="mt-6 animate-fade-in delay-500">
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-5 border border-[#d4d4e1]/30">
              <div className="flex justify-between items-center">
                
                {/* Información adicional */}
                <div className="flex space-x-6">
                  {(miembro as any).detalles?.universidad && (
                    <div className="flex items-center space-x-3">
                      <Building className="w-4 h-4 text-[#2c4687]" />
                      <span className="text-[#8a94bb] font-medium text-sm">
                        {(miembro as any).detalles.universidad.split(' ').slice(0, 4).join(' ')}
                      </span>
                    </div>
                  )}
                  {(miembro as any).detalles?.posesion && (
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-[#8a94bb]" />
                      <span className="text-[#8a94bb] font-medium text-sm">
                        Desde {(miembro as any).detalles.posesion}
                      </span>
                    </div>
                  )}
                  {(miembro as any).detalles?.contacto && (
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#8a94bb]" />
                      <span className="text-[#8a94bb] font-medium text-sm">
                        Contacto disponible
                      </span>
                    </div>
                  )}
                </div>
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
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#d4d4e1]">
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
