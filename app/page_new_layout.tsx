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
      experiencia: "Amplia experiencia en el sector de curadorías urbanas y desarrollo territorial",
      formacion: [
        "Profesional en áreas relacionadas con el desarrollo urbano",
        "Especialización en gestión y administración pública", 
        "Formación continua en derecho urbano y territorial",
        "Liderazgo ejecutivo en instituciones del sector público",
        "Diplomados en modernización institucional"
      ],
      experienciaProfesional: [
        "Presidente del Colegio Nacional de Curadores Urbanos (2025-2026)",
        "Liderazgo en proyectos de desarrollo urbano y territorial a nivel nacional",
        "Coordinación de políticas públicas en el sector de curadorías urbanas",
        "Gestión administrativa y estratégica del Colegio Nacional",
        "Representación gremial ante entidades gubernamentales",
        "Modernización de procesos institucionales del sector"
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
  { id: 7, nombre: "Mauricio Vargas Cuellar", cargo: "Dignatario", foto: "/professional-architect.png" },
  { id: 8, nombre: "Janeth Arango Castaño", cargo: "Dignatario", foto: "/professional-woman-engineer.png" },
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
  },
  {
    id: 11,
    nombre: "Lilia Margarita Amaya Nuñez",
    cargo: "Procurador Suplente",
    foto: "/professional-woman-executive.png",
  },
]

const colaboradores = [
  {
    id: 12,
    nombre: "Fanny Adriana Leon Acero",
    cargo: "Coordinadora Jurídica Nacional",
    foto: "/professional-architect.png",
  },
  { id: 13, nombre: "Jesus Esteban Jaramillo Buitrago", cargo: "Contador", foto: "/professional-woman-engineer.png" },
  { id: 14, nombre: "Sandra Yaneth Urete Guzman", cargo: "Secretaria", foto: "/professional-man-doctor.png" },
]

const todosMiembros = [...juntaDirectiva, ...dignatarios, ...procuradores, ...colaboradores]

export default function PresentacionJunta() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Slide 0: Portada
  // Slide 1: Índice
  // Slides 2+: Miembros individuales

  const totalSlides = todosMiembros.length + 2

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (slideIndex: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(slideIndex)
    setTimeout(() => setIsAnimating(false), 500)
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

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        {/* Header minimalista */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[#2c4687] mb-4 tracking-wide">
            Junta Directiva
          </h1>
          <div className="w-20 h-1 bg-[#2c4687] mx-auto mb-4"></div>
          <p className="text-lg text-[#8a94bb] font-light">2025-2026</p>
          <p className="text-sm text-[#8a94bb] mt-1 opacity-80">Colegio Nacional de Curadores Urbanos</p>
        </div>

        {/* Layout principal de 2 columnas */}
        <div className="grid grid-cols-12 gap-8 h-[calc(100vh-280px)]">
          
          {/* Columna Izquierda: Presidente destacado */}
          <div className="col-span-4">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-[#2c4687] to-[#8a94bb] rounded-3xl p-8 text-white shadow-2xl animate-fade-in">
                {/* Avatar del presidente */}
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-xl font-bold">WE</span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white/80 mb-1">Presidente</p>
                    <h2 className="text-xl font-bold leading-tight">William Enrique Taboada Díaz</h2>
                  </div>
                </div>
                
                {/* Línea decorativa */}
                <div className="w-full h-px bg-white/30 mb-6"></div>
                
                {/* Experiencia */}
                <div className="mb-8">
                  <p className="text-white/90 leading-relaxed text-base font-light">
                    Amplia experiencia en el sector de curadorías urbanas y desarrollo territorial
                  </p>
                </div>
                
                {/* Botón para ver más */}
                <button 
                  className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 py-3 px-6 rounded-2xl text-white font-medium flex items-center justify-center group"
                  onClick={() => goToSlide(2)}
                >
                  Ver perfil completo
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Resto del contenido */}
          <div className="col-span-8 space-y-8 overflow-y-auto pr-4">
            
            {/* Vicepresidente y Secretaria Ejecutiva */}
            <div className="animate-fade-in">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[#2c4687] mb-2">Junta Directiva</h2>
                <div className="w-12 h-0.5 bg-[#2c4687]"></div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#d4d4e1]">
                {juntaDirectiva.slice(1).map((miembro, index) => (
                  <div 
                    key={miembro.id}
                    className="group flex items-center justify-between p-4 border-b border-[#f6f6f6] last:border-b-0 cursor-pointer hover:bg-[#f6f6f6] transition-all duration-300"
                    onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#2c4687] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <div>
                        <p className="text-xs font-medium text-[#8a94bb] uppercase tracking-wider mb-0.5">
                          {miembro.cargo}
                        </p>
                        <p className="text-sm font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors">
                          {miembro.nombre}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#d4d4e1] group-hover:text-[#8a94bb] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Dignatarios en grid compacto */}
            <div className="animate-fade-in delay-100">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[#2c4687] mb-2">Dignatarios</h2>
                <div className="w-12 h-0.5 bg-[#8a94bb]"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {dignatarios.map((miembro, index) => (
                  <div 
                    key={miembro.id}
                    className="group bg-white rounded-lg p-4 shadow-sm border border-[#d4d4e1] cursor-pointer hover:shadow-md hover:border-[#8a94bb] transition-all duration-300"
                    onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#8a94bb] rounded-full group-hover:bg-[#2c4687] transition-colors duration-300"></div>
                        <div>
                          <p className="text-xs font-medium text-[#8a94bb] uppercase tracking-wider mb-0.5">
                            Dignatario
                          </p>
                          <p className="text-sm font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors leading-tight">
                            {miembro.nombre}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-3 h-3 text-[#d4d4e1] group-hover:text-[#8a94bb] transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Procuradores */}
            <div className="animate-fade-in delay-200">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[#2c4687] mb-2">Procuradores</h2>
                <div className="w-12 h-0.5 bg-[#2c4687]"></div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#d4d4e1]">
                {procuradores.map((miembro, index) => (
                  <div 
                    key={miembro.id}
                    className="group flex items-center justify-between p-4 border-b border-[#f6f6f6] last:border-b-0 cursor-pointer hover:bg-[#f6f6f6] transition-all duration-300"
                    onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-[#2c4687] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <div>
                        <p className="text-xs font-medium text-[#8a94bb] uppercase tracking-wider mb-0.5">
                          {miembro.cargo}
                        </p>
                        <p className="text-sm font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors">
                          {miembro.nombre}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#d4d4e1] group-hover:text-[#8a94bb] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Colaboradores */}
            <div className="animate-fade-in delay-300">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[#2c4687] mb-2">Colaboradores</h2>
                <div className="w-12 h-0.5 bg-[#8a94bb]"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {colaboradores.map((miembro, index) => (
                  <div 
                    key={miembro.id}
                    className="group bg-white rounded-lg p-4 shadow-sm border border-[#d4d4e1] cursor-pointer hover:shadow-md hover:border-[#8a94bb] transition-all duration-300"
                    onClick={() => goToSlide(todosMiembros.findIndex((m) => m.id === miembro.id) + 2)}
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 bg-[#f6f6f6] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#8a94bb] transition-colors duration-300">
                        <div className="w-4 h-4 bg-[#8a94bb] rounded-full group-hover:bg-white transition-colors duration-300"></div>
                      </div>
                      <p className="text-xs font-medium text-[#8a94bb] uppercase tracking-wider mb-1">
                        {miembro.cargo}
                      </p>
                      <p className="text-sm font-medium text-[#2c4687] group-hover:text-[#8a94bb] transition-colors leading-tight">
                        {miembro.nombre}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer de navegación más compacto */}
        <div className="text-center mt-8 animate-fade-in delay-500">
          <div className="inline-flex items-center space-x-6 bg-white rounded-full px-6 py-3 shadow-md border border-[#d4d4e1]">
            <div className="flex items-center space-x-2 text-[#8a94bb]">
              <div className="w-2 h-2 bg-[#2c4687] rounded-full"></div>
              <span className="text-xs font-medium">Haz clic para ver detalles</span>
            </div>
            <div className="w-px h-3 bg-[#d4d4e1]"></div>
            <div className="flex items-center space-x-2 text-[#8a94bb]">
              <kbd className="bg-[#f6f6f6] px-2 py-1 rounded text-xs font-mono border border-[#d4d4e1]">←</kbd>
              <kbd className="bg-[#f6f6f6] px-2 py-1 rounded text-xs font-mono border border-[#d4d4e1]">→</kbd>
              <span className="text-xs font-medium">Navegar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMiembro = (miembro: (typeof todosMiembros)[0]) => (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full p-8 flex flex-col">
        
        {/* Header elegante y moderno */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-8">
              
              {/* Avatar con glassmorphism */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2c4687] to-[#8a94bb] rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#2c4687] to-[#8a94bb] rounded-3xl flex items-center justify-center shadow-xl backdrop-blur-lg">
                  <span className="text-2xl font-bold text-white">
                    {miembro.nombre.split(' ').map((name: string) => name[0]).join('').slice(0, 2)}
                  </span>
                </div>
              </div>
              
              {/* Información principal */}
              <div className="space-y-2">
                <h1 className="text-4xl font-extralight text-slate-800 tracking-tight">
                  {miembro.nombre}
                </h1>
                <div className="flex items-center space-x-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#2c4687] to-[#8a94bb] rounded-full"></div>
                  <p className="text-xl text-[#8a94bb] font-medium">{miembro.cargo}</p>
                </div>
                
                {/* Experiencia destacada */}
                {(miembro as any).detalles?.experiencia && (
                  <div className="max-w-2xl mt-4">
                    <p className="text-slate-600 leading-relaxed text-lg font-light">
                      {(miembro as any).detalles.experiencia}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Stats rápidas */}
            <div className="flex space-x-6">
              {(miembro as any).detalles?.formacion && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2c4687]">{(miembro as any).detalles.formacion.length}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Formaciones</div>
                </div>
              )}
              {(miembro as any).detalles?.experienciaProfesional && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#8a94bb]">{(miembro as any).detalles.experienciaProfesional.length}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Experiencias</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contenido en bento grid moderno */}
        <div className="flex-1 grid grid-cols-12 gap-6">
          
          {/* Formación Académica - Diseño magazine */}
          {(miembro as any).detalles?.formacion && (
            <div className="col-span-5 animate-slide-up delay-100">
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                <div className="bg-gradient-to-r from-[#2c4687] to-[#4a5d99] p-6">
                  <h3 className="text-white font-semibold text-lg flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm">🎓</span>
                    </div>
                    Formación Académica
                  </h3>
                </div>
                <div className="p-6 h-full overflow-y-auto" style={{maxHeight: 'calc(100% - 88px)'}}>
                  <div className="space-y-4">
                    {(miembro as any).detalles.formacion.slice(0, 6).map((item: string, index: number) => (
                      <div key={index} className="group cursor-pointer">
                        <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                          <div className="w-6 h-6 bg-gradient-to-br from-[#2c4687] to-[#8a94bb] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed font-light">{item}</p>
                        </div>
                      </div>
                    ))}
                    {(miembro as any).detalles.formacion.length > 6 && (
                      <div className="text-center py-3">
                        <span className="text-[#8a94bb] text-sm font-medium bg-slate-50 px-4 py-2 rounded-full">
                          +{(miembro as any).detalles.formacion.length - 6} especializaciones más
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Columna derecha - Layout apilado */}
          <div className="col-span-7 space-y-6">
            
            {/* Experiencia Profesional */}
            {(miembro as any).detalles?.experienciaProfesional && (
              <div className="animate-slide-up delay-200">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#8a94bb] to-[#a8b3d1] p-6">
                    <h3 className="text-white font-semibold text-lg flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm">💼</span>
                      </div>
                      Trayectoria Profesional
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                      {(miembro as any).detalles.experienciaProfesional.slice(0, 8).map((item: string, index: number) => (
                        <div key={index} className="group">
                          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-1 bg-gradient-to-r from-[#8a94bb] to-[#2c4687] rounded-full mr-3"></div>
                              <span className="text-xs text-slate-500 font-medium">#{index + 1}</span>
                            </div>
                            <p className="text-slate-700 text-sm leading-relaxed font-light">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Logros Destacados - Ocupando todo el ancho sin sectores */}
            {(miembro as any).detalles?.logros && (
              <div className="animate-slide-up delay-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6">
                    <h3 className="text-white font-semibold text-lg flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm">🏆</span>
                      </div>
                      Logros Destacados
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {(miembro as any).detalles.logros.map((item: string, index: number) => (
                        <div key={index} className="group">
                          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                              </div>
                              <div className="flex-1 h-1 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full"></div>
                            </div>
                            <p className="text-slate-700 leading-relaxed font-medium">{item}</p>
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

        {/* Footer minimalista */}
        <div className="mt-6 flex justify-between items-center animate-fade-in delay-500">
          <div className="flex space-x-4">
            {(miembro as any).detalles?.universidad && (
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                <span className="text-slate-600 text-sm font-light">{(miembro as any).detalles.universidad.split(' ').slice(0, 3).join(' ')}</span>
              </div>
            )}
            {(miembro as any).detalles?.posesion && (
              <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
                <span className="text-slate-600 text-sm font-light">Desde {(miembro as any).detalles.posesion}</span>
              </div>
            )}
          </div>
          
          <div className="text-slate-400 text-sm font-light">
            Colegio Nacional de Curadores Urbanos • 2025-2026
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative">
      {/* Contenido principal */}
      <div
        className={`transition-all duration-500 ${isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"}`}
      >
        {currentSlide === 0 && renderPortada()}
        {currentSlide === 1 && renderIndice()}
        {currentSlide >= 2 && renderMiembro(todosMiembros[currentSlide - 2])}
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

      {/* Indicador de progreso */}
      {currentSlide > 0 && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalSlides - 1 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i + 1 === currentSlide ? "bg-[#2c4687] w-8" : "bg-[#d4d4e1] hover:bg-[#8a94bb]"
              }`}
              onClick={() => goToSlide(i + 1)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
