"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Award, BrainCircuit, Code, ChartNoAxesCombined, Rocket, User, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ExperienceTimeline from "./experience-timeline"

interface Strength {
  icon: React.ElementType
  title: string
  description: string
}

const strengths: Strength[] = [
  {
    icon: Code,
    title: "Desenvolvimento Full Stack",
    description: "Trabalhando em desenvolvimento front-end e back-end com tecnologias modernas.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Análises de Dados",
    description: "Abordagem analítica usando as principais ferramentas de mercado para uma melhor análise.",
  },
  {
    icon: Rocket,
    title: "Capacidade de aprendizagem",
    description: "Capacidade de aprender novas tecnologias e frameworks se for necessário sua aplicação.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description: "Usabilidade de inteligència artificial para criar e/ou integrar projetos.",
  },
]

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-2 lg:py-4 mt-32"
    >
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Sobre mim</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div
              className={`col-span-1 flex justify-center transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="relative w-64 h-64 md:w-full md:h-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-6 scale-95"></div>
                <Card className="relative overflow-hidden rounded-2xl border-2 border-primary/10 shadow-lg">
                  <Image
                    src="/mateusimage.jpg"
                    alt="Mateus Moraes"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </Card>
              </div>
            </div>

            <div
              className={`col-span-1 md:col-span-2 space-y-4 transition-all duration-700 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <p className="text-lg leading-relaxed">
                Desenvolvedor Full Stack em formação, cursando Análise e Desenvolvimento de Sistemas. Possuo experiência com desenvolvimento de projetos web completos e análise de dados. Busco constantemente aprimoramento através de participação ativa em eventos, bootcamps e comunidades tech, mantendo-me atualizado com as tecnologias do mercado.

              </p>

              <p className="text-lg leading-relaxed">
                Minha abordagem alia habilidades técnicas com visão em UX/UI. Compromisso em desenvolver soluções que não apenas atendam requisitos funcionais, mas também proporcionem experiências intuitivas e agradáveis aos usuários.
              </p>
            </div>
          </div>

          <div
            className={`mt-16 w-full max-w-5xl transition-all duration-700 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Funções</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <Card
                  key={strength.title}
                  className={`p-6 border border-primary/10 hover:border-primary/30 hover:shadow-md transform hover:-translate-y-1 transition-all duration-700 delay-${300 + index * 100} ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <strength.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">{strength.title}</h4>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline de Experiência */}
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  )
}
