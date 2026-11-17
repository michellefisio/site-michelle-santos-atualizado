/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Heart, 
  Shield, 
  Award, 
  ChevronLeft,
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  ThumbsUp, 
  Check, 
  Activity, 
  Sparkles, 
  Smile, 
  FileText, 
  AlertTriangle, 
  Search, 
  Instagram, 
  Star,
  BookOpen,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ServiceDetailPage } from "./ServiceDetailPage";
import { ServicePageSlug, servicePagesData } from "./servicePagesData";
import { BlogIndexPage } from "./BlogIndexPage";
import { BlogPostPage } from "./BlogPostPage";
import { BlogPostSlug, blogPostsList } from "./blogData";

export type PageType = 
  | "home" 
  | "sobre-mim" 
  | "tratamentos" 
  | "blog"
  | `blog/${BlogPostSlug}`
  | ServicePageSlug;

// Import custom generated high-quality images
const heroImage = "https://i.postimg.cc/1tCRCkKr/Fisio-Michelle-Santos-Atendimento-domiciliar-para-pessoas-idosas.webp";
const profileImage = "/fisioterapeuta-michelle-santos-gerontologia-recife.webp";

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  frequency: string;
}

const partners = [
  {
    name: "Instituto Israelita Albert Einstein",
    image: "https://i.postimg.cc/FKnmQHTD/logo-Instituto-Israelita-Albert-Einstein.webp",
    detail: "Especialização em Gerontologia pelo renomado Instituto Israelita Albert Einstein"
  },
  {
    name: "SBGG Geriatria",
    image: "https://i.postimg.cc/R0b9zZgg/logo-sociedade-brasileira-de-geriatria-e-gerentologia.webp",
    detail: "Especialista em Gerontologia pela SBGG (Sociedade Brasileira de Geriatria e Gerontologia)"
  },
  {
    name: "ABRAFIGE",
    image: "https://i.postimg.cc/pddx7FJ7/logo-abrafige.webp",
    detail: "Especialista em Fisioterapia em Gerontologia pela ABRAFIGE"
  },
  {
    name: "PrevQuedas Brasil",
    image: "https://i.postimg.cc/7LQDyZK9/logo-prevquedas-brasil.avif",
    detail: "Membro do PrevQuedas Brasil.\nO maior grupo nacional de pesquisa multidisciplinar em prevenção e manejo de quedas em pessoas idosas."
  }
];

const testimonials = [
  {
    quote: "Você é um anjo que apareceu em nossas vidas, você mudou a vida de minha mãe e consequentemente você mudou as nossas vidas. Você é muito mais que fisioterapeuta, já é da família.",
    author: "Filha de paciente",
    treatment: "Atendimento Fisioterapêutico Domiciliar"
  },
  {
    quote: "A Dra. Michelle restabeleceu a confiança e a mobilidade do meu pai após a cirurgia de fêmur. O atendimento humanizado, com paciência extrema e competência científica impecável, fez toda a diferença em sua recuperação.",
    author: "Familiar de paciente pós-operatório",
    treatment: "Fisioterapia Pós-Operatória Ortopédica"
  },
  {
    quote: "O trabalho de prevenção de quedas e fortalecimento muscular devolveu a autonomia que meu avô pensava ter perdido. Um trabalho profissional raríssimo, focado em gerontologia com carinho e ciência.",
    author: "Neto de paciente geriátrico",
    treatment: "Fisioterapia Gerontológica"
  }
];

interface SobreMimPageProps {
  setCurrentPage: (page: PageType) => void;
  handleScrollToSection: (id: string) => void;
  setIsBookingOpen: (open: boolean) => void;
  profileImage: string;
}

interface TratamentosPageProps {
  setCurrentPage: (page: PageType) => void;
  handleScrollToSection: (id: string) => void;
  setIsBookingOpen: (open: boolean) => void;
}

function TratamentosPage({ setCurrentPage, handleScrollToSection, setIsBookingOpen }: TratamentosPageProps) {
  const serviceIdToSlugMap: Record<string, ServicePageSlug> = {
    "gerontologia": "fisioterapia-em-gerontologia-recife",
    "quedas": "prevencao-de-quedas-em-idosos-recife",
    "ortopedia": "reabilitacao-ortopedica-e-pos-operatoria-recife",
    "neurofuncional": "fisioterapia-neurofuncional-recife",
    "pilates": "pilates-adaptado-para-idosos-recife",
    "respiratoria": "fisioterapia-respiratoria-recife",
  };
  const servicesList: Service[] = [
    {
      id: "gerontologia",
      title: "Fisioterapia em Gerontologia",
      shortDesc: "Foco na manutenção da funcionalidade e independência das pessoas idosas.",
      fullDesc: "A fisioterapia gerontológica promove um envelhecimento ativo, estimulando capacidades cognitivas, motoras e sensoriais. O objetivo principal é manter a pessoa idosa independente para as atividades do dia a dia, preservando a sua dignidade e qualidade de vida.",
      benefits: [
        "Estímulo à marcha funcional autónoma",
        "Aumento da força muscular de membros inferiores e superiores",
        "Treino de dupla tarefa (Função motora e cognitiva)",
        "Orientações para adaptação ambiental e promoção de segurança domiciliar"
      ],
      duration: "50-60 minutos",
      frequency: "1 a 3 vezes por semana (Definido após avaliação personalizada)"
    },
    {
      id: "quedas",
      title: "Prevenção de Quedas e ou Reabilitação Pós quedas",
      shortDesc: "Treino de marcha e equilíbrio fundamentado em evidências para a prevenção de quedas.",
      fullDesc: "As quedas representam uma das principais causas de hospitalização entre as pessoas idosas. Através de avaliações de risco multifatorial no domicílio e da reabilitação focada no equilíbrio estático e dinâmico, devolvemos a confiança e removemos o medo de caminhar.",
      benefits: [
        "Treino de Equilíbrio e Prevenção de quedas (Preventivo)",
        "Reabilitação Motora e Funcional pós quedas (Pós-Queda)",
        "Treino funcional para melhora do equilíbrio e reações protetoras",
        "Fortalecimento da musculatura de estabilização postural: foco em Core, quadril e complexo tornozelo-pé",
        "Orientações personalizadas para a promoção de segurança domiciliar",
        "Protocolos científicos específicos para classificação dos riscos de quedas"
      ],
      duration: "50-60 minutos",
      frequency: "2 a 3 vezes por semana"
    },
    {
      id: "ortopedia",
      title: "Reabilitação Ortopédica e Pós-Operatória",
      shortDesc: "Recuperação segura e humanizada, focada no retorno funcional após fraturas ou cirurgias de prótese de joelho e quadril.",
      fullDesc: "Atendimento especializado para o manejo de dores articulares, desgaste ósseo e reabilitação segura após intervenções cirúrgicas de colocação de prótese (artroplastias) ou fraturas de fêmur e punho.",
      benefits: [
        "Alívio efetivo da dor residual e inflamação pós-operatória",
        "Ganho gradativo de amplitude de movimento articular segura",
        "Adaptação da marcha com ou sem dispositivo auxiliar (Bengalas, andadores e ou muletas).",
        "Recuperação da independência nas transferências posturais e atividades do cotidiano"
      ],
      duration: "50-60 minutos",
      frequency: "2 a 4 vezes por semana"
    },
    {
      id: "neurofuncional",
      title: "Fisioterapia Neurofuncional",
      shortDesc: "Suporte especializado para quadros demenciais, AVC e Parkinson.",
      fullDesc: "O acompanhamento de condições neurológicas exige uma abordagem especializada e acolhedora. O tratamento reabilita as vias motoras remanescentes e cria novos caminhos neurológicos (neuroplasticidade), permitindo expressiva evolução na mobilidade cotidiana.",
      benefits: [
        "Suporte especializado para o manejo e controle dos sintomas motores do Parkinson",
        "Reabilitação muscular de sequelas motoras pós-AVC",
        "Integração sensório-motora em quadros demenciais (Alzheimer)",
        "Técnicas para o alívio da rigidez muscular e aprimoramento da reeducação postural"
      ],
      duration: "50-60 minutos",
      frequency: "2 a 5 vezes por semana"
    },
    {
      id: "pilates",
      title: "Pilates Adaptado para Pessoas Idosas",
      shortDesc: "Fortalecimento seguro, controlado, focado em flexibilidade e sem impactos.",
      fullDesc: "Prática personalizada e supervisionada, que adapta os princípios do Pilates clássico à fisiologia do envelhecimento, respeitando com segurança as particularidades da osteoporose e artroses.",
      benefits: [
        "Fortalecimento do 'Powerhouse' (musculatura estabilizadora profunda)",
        "Alinhamento postural e descompressão articular leve",
        "Melhora acentuada da coordenação e expansão da caixa torácica",
        "Exercícios totalmente seguros e supervisionados individualmente",
        "Opções presencial e online disponíveis."
      ],
      duration: "50 minutos",
      frequency: "1 a 2 vezes por semana"
    },
    {
      id: "respiratoria",
      title: "Fisioterapia Respiratória",
      shortDesc: "Melhora expressiva da capacidade pulmonar e prevenção activa de pneumonia.",
      fullDesc: "Focada na higiene brônquica, expansão pulmonar e condicionamento cardiopulmonar. Essencial para pessoas idosas acamadas, com DPOC ou em repouso prolongado para mitigar infecções obstrutivas.",
      benefits: [
        "Técnicas especializadas para higiene e desobstrução das vias aéreas.",
        "Exercícios com aparelhos de pressão expiratória positiva",
        "Prevenção eficaz contra o acúmulo de secreções pulmonares.",
        "Auxílio no manejo da fadiga respiratória, promovendo maior conforto e fôlego para as atividades diárias da pessoa idosa."
      ],
      duration: "45-50 minutos",
      frequency: "1 a 3 vezes por semana"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F5F7FA] min-h-screen text-slate-800 font-sans leading-relaxed"
    >
      {/* Breadcrumb Navigation - Symmetrical on max-width container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <button 
            onClick={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-[#1A3C5A] transition-colors flex items-center gap-1 focus:ring-2 focus:ring-[#4A9B9B]/20 rounded px-1 text-slate-500 text-left"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#1A3C5A] font-semibold">Tratamentos Especializados</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Background Accents from Design System */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4A9B9B]/10 to-transparent rounded-full filter blur-3xl opacity-60 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#F2A900]/5 to-transparent rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A3C5A]/10 text-[#1A3C5A] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#4A9B9B]" />
              Fisioterapia Avançada & Humanizada
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3C5A] tracking-tight leading-tight select-none">
              Nossos <span className="text-[#4A9B9B]">Tratamentos Especializados</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Programas clínicos personalizados de alto padrão desenvolvidos para devolver a mobilidade, reabilitar sequelas e garantir a autonomia de quem você mais ama, no conforto de casa em Recife.
            </p>
            <div className="w-16 h-1.5 bg-[#F2A900] mx-auto rounded-full mt-4" />
          </div>
        </div>
      </section>

      {/* O Padrão Einstein de Cuidar section - Highlighted for treatments */}
      <section className="pb-12 pt-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-slate-100 flex flex-col md:flex-row gap-6 items-center text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 md:top-0 md:left-0 md:h-full w-full h-1.5 md:w-1.5 bg-[#1A3C5A]" />
            <div className="md:pl-4 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A9B9B] px-2.5 py-1 rounded bg-[#4A9B9B]/10 w-fit block">
                Padrão Albert Einstein
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-[#1A3C5A] tracking-tight">
                Planos de Reabilitação Orientados pela Ciência
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Cada conduta terapêutica e plano clínico desenhado nestas coberturas obedece às mais estritas diretrizes internacionais e padrões científicos assimilados no <strong>Instituto Israelita Albert Einstein</strong>. Não se trata apenas de caminhar ou exercitar; é uma abordagem completa baseada em avaliações de escala geriátrica validadas internacionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating detailed cards for Tratamentos */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Filter / Direct Jump Pills to dedicated pages */}
          <div className="mb-14 p-4 sm:p-6 bg-[#F5F7FA] rounded-2xl border border-slate-200/70">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1A3C5A] mb-3 text-center sm:text-left">
              Clique no tratamento para acessar a página completa:
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
              {servicesList.map((srv) => {
                const targetSlug = serviceIdToSlugMap[srv.id];
                return (
                  <button
                    key={srv.id}
                    onClick={() => {
                      if (targetSlug) {
                        setCurrentPage(targetSlug);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-[#1A3C5A] text-slate-700 hover:text-white border border-slate-200 hover:border-[#1A3C5A] font-semibold text-xs transition-all shadow-2xs hover:shadow-xs group cursor-pointer"
                  >
                    <span>{srv.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#4A9B9B] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 0;
              const targetSlug = serviceIdToSlugMap[service.id];

              return (
                <div
                  key={service.id}
                  id={`dedicated-treatment-${service.id}`}
                  className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16 scroll-mt-24 text-left"
                >
                  {/* Content block */}
                  <div className={`flex flex-col justify-between lg:w-1/2 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="space-y-5">
                      {/* Badge / icon row - Fully clickable */}
                      <button
                        onClick={() => {
                          if (targetSlug) {
                            setCurrentPage(targetSlug);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }
                        }}
                        className="flex items-center gap-3.5 text-left group cursor-pointer w-full focus:outline-none"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#1A3C5A]/5 text-[#1A3C5A] group-hover:bg-[#1A3C5A] flex items-center justify-center shrink-0 transition-all duration-200 group-hover:shadow-xs">
                          {service.id === "gerontologia" && (
                            <img 
                              src="https://i.postimg.cc/7LCprb0j/pessoa-caminhando-com-bengala.png" 
                              alt="Fisioterapia em Gerontologia" 
                              className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:[filter:brightness(0)_invert(1)] transition-all" 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          )}
                          {service.id === "quedas" && (
                            <img 
                              src="https://i.postimg.cc/fW678yR3/pessoa-atraves-da-janela-(1).png" 
                              alt="Prevenção de Quedas" 
                              className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:[filter:brightness(0)_invert(1)] transition-all" 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          )}
                          {service.id === "ortopedia" && (
                            <img 
                              src="https://i.postimg.cc/0ySYgsr6/esteira.png" 
                              alt="Reabilitação Ortopédica" 
                              className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:[filter:brightness(0)_invert(1)] transition-all" 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          )}
                          {service.id === "neurofuncional" && (
                            <img 
                              src="https://i.postimg.cc/QMgvdc9N/cerebro.png" 
                              alt="Fisioterapia Neurofuncional" 
                              className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:[filter:brightness(0)_invert(1)] transition-all" 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          )}
                          {service.id === "pilates" && (
                            <img 
                              src="https://i.postimg.cc/rmgqPBqD/FISIO-MICHELLE-SANTOS-PILATES-PARA-PESSOAS-IDOSAS.png" 
                              alt="Pilates Adaptado" 
                              className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:[filter:brightness(0)_invert(1)] transition-all" 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          )}
                          {service.id === "respiratoria" && (
                            <img 
                              src="https://i.postimg.cc/SQ5YmvBc/pulmoes.png" 
                              alt="Fisioterapia Respiratória" 
                              className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:[filter:brightness(0)_invert(1)] transition-all" 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          )}
                        </div>
                        <div className="flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A9B9B] block group-hover:text-[#1A3C5A] transition-colors">
                            Tratamento {String(index + 1).padStart(2, '0')} · Ver página dedicada
                          </span>
                          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1A3C5A] group-hover:text-[#4A9B9B] transition-colors tracking-tight flex items-center gap-2">
                            <span>{service.title}</span>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-[#4A9B9B] group-hover:translate-x-1 transition-all" />
                          </h2>
                        </div>
                      </button>

                      <p className="text-sm text-slate-600 leading-relaxed font-light">
                        {service.fullDesc}
                      </p>

                      {/* Benefits list */}
                      <div className="space-y-3 pt-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A3C5A]">Benefícios Esperados</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                          {service.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Meta details & Buttons */}
                    <div className="space-y-5 pt-5 border-t border-slate-100">
                      <div className="flex flex-wrap gap-5 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#4A9B9B]" />
                          <span><strong>Duração típica:</strong> {service.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#4A9B9B]" />
                          <span><strong>Frequência recomendada:</strong> {service.frequency}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-2">
                        {targetSlug && (
                          <button
                            onClick={() => {
                              setCurrentPage(targetSlug);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="flex-1 min-h-[40px] bg-[#1A3C5A] hover:bg-[#1A3C5A]/90 active:bg-slate-900 text-white font-semibold text-xs py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-[#1A3C5A]/20 shadow-xs hover:shadow-sm cursor-pointer whitespace-nowrap"
                          >
                            <span>Página de Tratamento</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#4A9B9B] shrink-0" />
                          </button>
                        )}
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="flex-1 min-h-[40px] bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-[#1A3C5A] font-semibold text-xs py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 border border-slate-200 cursor-pointer whitespace-nowrap"
                        >
                          <Calendar className="w-3.5 h-3.5 text-[#4A9B9B] shrink-0" />
                          <span>Agendar Avaliação</span>
                        </button>
                        <a
                          href={`https://wa.me/5581988141144?text=Olá%20Dra.%20Michelle!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20tratamento%20de%20${encodeURIComponent(service.title)}%20para%20o%20meu%20familiar.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-h-[40px] bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm whitespace-nowrap"
                        >
                          <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
                          <span>Falar no WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Illustrative card */}
                  <div className={`lg:w-1/2 flex items-center justify-center relative ${!isEven ? 'lg:order-1' : ''}`}>
                    <div 
                      onClick={() => {
                        if (targetSlug) {
                          setCurrentPage(targetSlug);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="relative w-full max-w-md bg-gradient-to-br from-slate-50 to-[#4A9B9B]/5 p-8 rounded-3xl border border-slate-100 shadow-xs text-left overflow-hidden select-none hover:-translate-y-1 hover:border-[#4A9B9B]/30 hover:shadow-md transition-all duration-300 cursor-pointer group/card"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A9B9B]/10 rounded-full filter blur-xl opacity-70 pointer-events-none" />
                      
                      <div className="space-y-5 relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="text-[#1A3C5A] font-bold text-lg block font-display">Diferenciais do Cuidado Domiciliar</span>
                          <span className="text-[10px] font-bold text-[#4A9B9B] uppercase tracking-wider group-hover/card:underline flex items-center gap-1">
                            Ver mais <ChevronRight className="w-3 h-3 group-hover/card:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                        <div className="space-y-3.5 text-xs text-slate-500 font-light leading-relaxed">
                          <p>
                            Reabilitar no aconchego do próprio lar estimula a memória afetiva e traz maior segurança emocional para a pessoa idosa de Recife, fatores que facilitam diretamente a evolução clínica.
                          </p>
                          <div className="bg-white p-5 rounded-2xl border border-slate-100 space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A3C5A] block">Protocolo Clínico</span>
                            <p className="text-[11px] text-[#4A9B9B] font-semibold leading-relaxed">
                              ✓ Abordagem interdisciplinar avaliando risco de sarcopenia, riscos ambientais de quedas domésticas e controle ativo da dor crônica.
                            </p>
                          </div>
                          <div className="pt-1">
                            <span className="text-xs font-semibold text-[#1A3C5A] group-hover/card:text-[#4A9B9B] transition-colors flex items-center gap-1.5">
                              <span>Acessar conteúdo completo sobre este tratamento</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Symmetrical CTA section for the treatments page to secure conversions */}
      <section className="bg-slate-50 border-t border-slate-100 py-16 md:py-20 relative overflow-hidden">
        {/* Subtle decorative circles for high-end look */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 rounded-full border border-slate-200/50 -z-5 pointer-events-none" />
        <div className="absolute bottom-4 right-8 w-64 h-64 rounded-full border border-[#1A3C5A]/5 -z-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#4A9B9B]/10 flex items-center justify-center text-[#4A9B9B] mx-auto">
            <Heart className="w-7 h-7 fill-current" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] tracking-tight leading-relaxed max-w-2xl mx-auto font-display">
            Restabeleça a mobilidade e proporcione a melhor qualidade de vida para quem você mais ama.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto bg-[#1A3C5A] hover:bg-[#1A3C5A]/90 active:bg-slate-900 text-white font-bold py-3.5 px-8 rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-3 text-sm tracking-wide hover:shadow-sm focus:ring-4 focus:ring-[#1A3C5A]/15"
            >
              <Calendar className="w-4 h-4" />
              Agendar Avaliação Domiciliar
            </button>
            <a 
              href="https://wa.me/5581988141144"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 px-8 rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-3 text-sm tracking-wide hover:shadow-sm focus:ring-4 focus:ring-emerald-200"
            >
              <Phone className="w-4 h-4 fill-current animate-bounce" />
              Falar com a Michelle no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function SobreMimPage({ setCurrentPage, handleScrollToSection, setIsBookingOpen, profileImage }: SobreMimPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F5F7FA] min-h-screen text-slate-800 font-sans leading-relaxed"
    >
      {/* Breadcrumb Navigation - Symmetrical on max-width container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <button 
            onClick={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-[#1A3C5A] transition-colors flex items-center gap-1 focus:ring-2 focus:ring-[#4A9B9B]/20 rounded px-1 text-slate-500"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#1A3C5A] font-semibold">Sobre Mim</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Fine background accents from Design System */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4A9B9B]/10 to-transparent rounded-full filter blur-3xl opacity-60 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#F2A900]/5 to-transparent rounded-full filter blur-3xl opacity-40 -z-10 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Presentation and Big Quote */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C5A]/10 text-[#1A3C5A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#4A9B9B]" />
                Sobre a Fisio Michelle Santos
              </span>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3C5A] tracking-tight leading-tight select-none">
                Cuidado, Ciência e Propósito na <span className="text-[#4A9B9B] relative inline-block">Fisioterapia Gerontológica</span>
              </h1>

              {/* Direct quote with elite visual frame */}
              <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100/80 mt-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4A9B9B]" />
                <span className="absolute -top-3 left-4 text-6xl text-[#4A9B9B]/10 font-serif leading-none select-none">“</span>
                <p className="text-lg md:text-xl text-[#1A3C5A] font-bold italic leading-relaxed relative z-10 font-display">
                  "Todo paciente é o amor da vida de alguém."
                </p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base mt-4 font-light">
                  É com essa premissa que guio cada atendimento, cada avaliação e cada plano de reabilitação. Sou Michelle Santos, fisioterapeuta especialista em Gerontologia, dedicada a devolver a independência, a segurança e a qualidade de vida para pessoas idosas em Recife.
                </p>
              </div>
            </div>

            {/* Right Side: Professional Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
                {/* Asymmetric background blob */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3C5A] to-[#4A9B9B] rounded-[48px_24px_48px_32px] transform rotate-3 scale-102 opacity-10 pointer-events-none" />
                
                {/* Main image container */}
                <div className="overflow-hidden rounded-[48px_24px_48px_32px] shadow-lg border-4 border-white bg-white relative z-10">
                  <img 
                    src={profileImage} 
                    alt="Dra. Michelle Santos - Fisioterapeuta especialista em Gerontologia em Recife." 
                    className="w-full h-auto block object-cover aspect-[4/5] hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C5A]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating credentials badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#1A3C5A] text-white py-3.5 px-5 rounded-2xl shadow-md border border-white/10 z-20 text-left">
                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Registro Profissional</p>
                  <p className="text-sm font-bold font-mono text-[#F2A900]">CREFITO: 3/276580 - F</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Decorative Wave Separator */}
      <div className="w-full h-8 overflow-hidden bg-white select-none pointer-events-none">
        <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 32 C 240 0, 480 0, 720 16 C 960 32, 1200 32, 1440 0 L 1440 32 Z" fill="#F5F7FA" />
        </svg>
      </div>

      {/* Two-Column Midsection: The Career Path & Life Purpose */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Story Card #1: A Mudança de Rota */}
            <div className="bg-[#F5F7FA] p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-[#4A9B9B]/20 transition-all text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#4A9B9B]/10 flex items-center justify-center text-[#4A9B9B] shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1A3C5A] font-display tracking-tight leading-snug">
                    A Mudança de Rota: Da Estética ao Alívio da Dor
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-light">
                  <p>
                    Minha jornada no cuidado com o outro começou de forma curiosa. Após atuar por 10 anos como secretária executiva, decidi empreender na área da estética em 2013. Durante os atendimentos com massagens, percebi que muitas pessoas me procuravam não apenas por estética, mas buscando alívio para dores físicas.
                  </p>
                  <p>
                    Foi o desejo de resolver essas dores de forma definitiva e científica que me levou à faculdade de Fisioterapia. O plano inicial era me especializar em Dermatofuncional, mas a graduação me apresentou um universo muito mais profundo.
                  </p>
                </div>
              </div>
              <div className="w-full h-1 bg-[#4A9B9B]/20 rounded-full mt-6" />
            </div>

            {/* Story Card #2: O Encontro com a Gerontologia */}
            <div className="bg-[#F5F7FA] p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-[#F2A900]/25 transition-all text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F2A900]/10 flex items-center justify-center text-[#F2A900] shrink-0">
                    <Heart className="w-6 h-6 fill-current" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1A3C5A] font-display tracking-tight leading-snug">
                    O Encontro com a Gerontologia e a Inspiração Familiar
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-light">
                  <p>
                    Quando conheci a complexidade e a beleza da Fisioterapia em Gerontologia, foi amor à primeira vista. Naquele momento, tive uma certeza: <span className="text-[#1A3C5A] font-medium italic">"É isso que eu quero fazer, atender pessoas idosas"</span>.
                  </p>
                  <p>
                    Essa decisão tem uma raiz profundamente pessoal. Meus avós maternos sempre foram presenças fundamentais na minha vida. Escolhi estudar e me dedicar ao cuidado da pessoa idosa com um objetivo claro em mente: <strong className="text-[#1A3C5A] font-semibold">atender os meus pacientes com o mesmo amor, respeito e excelência técnica com que cuidei dos meus próprios avós até a partida deles.</strong>
                  </p>
                </div>
              </div>
              <div className="w-full h-1 bg-[#F2A900]/25 rounded-full mt-6" />
            </div>

          </div>

        </div>
      </section>

      {/* Symmetrical Bento Grid: Authority, Scientific Rigor and Associations (E-E-A-T Block) */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A9B9B]/10 text-[#4A9B9B] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Rigor Acadêmico & Especialidades
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1A3C5A] tracking-tight">
              A Busca pela Excelência e Rigor Científico
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
              Entender a complexidade do envelhecimento exige muito mais do que boa vontade; exige estudo contínuo e ciência baseada em evidências. Desde a minha formação, venho construindo uma base sólida de especializações para oferecer o que há de mais moderno e seguro aos meus pacientes:
            </p>
          </div>

          {/* O Padrão Einstein de Cuidar Block - Custom High-End Feature Card */}
          <div className="max-w-4xl mx-auto mb-16 bg-white text-left p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1A3C5A]" />
            <div className="pl-2 md:pl-4 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4A9B9B] block">
                  Padrão Albert Einstein
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#1A3C5A] tracking-tight">
                  O Padrão Einstein de Cuidar: Excelência em Gerontologia
                </h3>
                <p className="text-[#1A3C5A] font-medium text-sm md:text-base italic leading-relaxed">
                  Quando se trata da saúde de quem você mais ama, a boa vontade não basta; é preciso ciência, rigor e excelência clínica.
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-light">
                <p>
                  Foi com esse pensamento que decidi elevar o padrão do meu atendimento domiciliar. Em 2019, concluí minha Especialização em Gerontologia no Instituto Israelita Albert Einstein, um dos maiores e mais respeitados centros de excelência em saúde de toda a América Latina.
                </p>
                
                <div className="bg-[#F5F7FA] p-5 rounded-xl border border-slate-100/80 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A3C5A]">
                    O que isso significa para o seu familiar?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Significa que o tratamento que ele receberá no conforto de casa em Recife segue diretrizes de padrão internacional. Estudar no Albert Einstein transformou minha visão sobre o envelhecimento, me preparando para lidar com casos de altíssima complexidade desde a reabilitação de cirurgias delicadas até o manejo de quadros neurológicos avançados.
                  </p>
                </div>

                <p>
                  Meu compromisso é simples: levar a ciência dos maiores centros de saúde do país para dentro da sua casa, garantindo que o seu familiar tenha uma reabilitação segura, moderna e profundamente humana.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials 6-Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left items-stretch mb-12">
            {[
              { 
                num: "01",
                icon: "🎓", 
                title: "Especialista em Gerontologia",
                desc: "pela Sociedade Brasileira de Geriatria e Gerontologia (SBGG/ABRAFIGE)." 
              },
              { 
                num: "02",
                icon: "🏥", 
                title: "Especialista em Fisioterapia",
                desc: "em Gerontologia pela Associação Brasileira de Fisioterapia em Gerontologia (ABRAFIGE)." 
              },
              { 
                num: "03",
                icon: "🏢", 
                title: "Especialização em Gerontologia",
                desc: "pelo renomado Instituto Israelita Albert Einstein." 
              },
              { 
                num: "04",
                icon: "🫁", 
                title: "Fisioterapia em Terapia Intensiva",
                desc: "Especialização focada no manejo de disfunções e ventilação pulmonar." 
              },
              { 
                num: "05",
                icon: "📊", 
                title: "MBA em Doenças Crônicas",
                desc: "MBA em Prescrição do Treinamento para Grupos Especiais e Doenças Crônicas." 
              },
              { 
                num: "06",
                icon: "🧘", 
                title: "Pilates para Pessoas Idosas",
                desc: "Formação completa em Pilates clássico e adaptado clinicamente para pessoas idosas." 
              }
            ].map((cert, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#4A9B9B]/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <span className="text-xs font-mono font-bold text-[#4A9B9B]/55">{cert.num}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#1A3C5A] uppercase tracking-wider mb-2 font-display">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Symmetrical Logo Spotlight Block */}
          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100/80 text-center space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Sociedades Científicas Cobertas</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-2">
              <div className="bg-[#F5F7FA] p-5 rounded-2xl inline-flex items-center justify-center w-48 h-20 shadow-inner border border-slate-100/50">
                <img 
                  src="https://i.postimg.cc/pddx7FJ7/logo-abrafige.webp" 
                  alt="Logo ABRAFIGE" 
                  className="max-h-12 max-w-full object-contain transition-all duration-300 transform hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="bg-[#F5F7FA] p-5 rounded-2xl inline-flex items-center justify-center w-48 h-20 shadow-inner border border-slate-100/50">
                <img 
                  src="https://i.postimg.cc/7LQDyZK9/logo-prevquedas-brasil.avif" 
                  alt="Logo PrevQuedas Brasil" 
                  className="max-h-12 max-w-full object-contain transition-all duration-300 transform hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto font-light">
              Além disso, sou membro ativo do grupo de comunicação da ABRAFIGE e integro o <strong className="text-[#1A3C5A] font-semibold">PrevQuedas Brasil</strong>, um dos grupos mais respeitados do país na área, liderado por grandes referências nacionais na prevenção de quedas.
            </p>
          </div>

        </div>
      </section>

      {/* Symmetrical Visual Split Section: "O Atendimento Hoje" */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-150/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box: Symmetrical detailed copy block */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1A3C5A]/5 text-[#1A3C5A] text-xs font-bold uppercase tracking-wider">
                <Smile className="w-3.5 h-3.5 text-[#4A9B9B]" />
                Atuação Prática
              </span>
              
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1A3C5A] tracking-tight">
                O Atendimento Hoje
              </h2>
              
              <div className="w-16 h-1 bg-[#4A9B9B] rounded-full" />

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Atualmente, realizo atendimentos domiciliares e em Instituições de Longa Permanência (ILPIs) em Boa Viagem e região (Recife-PE). Meu grande diferencial é unir um olhar genuinamente humanizado à alta capacitação técnica.
                </p>
                <p>
                  Acredito que a fisioterapia não deve ser um processo entediante. Gosto de conversar, entender o contexto familiar e construir a sessão junto com o paciente, para que o tratamento faça sentido para a vida dele. Seja na reabilitação de uma cirurgia, na prevenção de uma queda ou no manejo de um quadro demencial, meu foco é proteger a autonomia de quem você mais ama.
                </p>
              </div>
            </div>

            {/* Right Box: Key Pillars of Attention */}
            <div className="lg:col-span-5 bg-[#F5F7FA] p-8 rounded-3xl border border-slate-100 text-left space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A3C5A] font-display">Conforto, Segurança e Respeito</h3>
              
              <div className="space-y-5">
                {[
                  {
                    title: "Recuperação no Conforto do Lar",
                    desc: "Atendimento domiciliar humanizado e adaptado à rotina da pessoa idosa.",
                    color: "bg-[#4A9B9B]/10 text-[#4A9B9B]"
                  },
                  {
                    title: "Rigor Clínico Individualizado",
                    desc: "Avaliações baseadas em escalas científicas e planos customizados para as suas capacidades.",
                    color: "bg-[#1A3C5A]/10 text-[#1A3C5A]"
                  },
                  {
                    title: "Prevenção Eficaz de Acidentes",
                    desc: "Aconselhamento ambiental estratégico para evitar escorregões, tropeços e quedas.",
                    color: "bg-[#F2A900]/10 text-[#F2A900]"
                  }
                ].map((item, id) => (
                  <div key={id} className="flex gap-4 items-start">
                    <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${item.color}`}>
                      <Check className="w-5 h-5 font-bold" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#1A3C5A] uppercase tracking-wider">{item.title}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Symmetrical CTA Container */}
      <section className="bg-slate-50 border-t border-slate-150 py-16 md:py-20 relative overflow-hidden">
        {/* Subtle decorative circles for high-end look */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 rounded-full border border-slate-200/50 -z-5 pointer-events-none" />
        <div className="absolute bottom-4 right-8 w-64 h-64 rounded-full border border-[#1A3C5A]/5 -z-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#4A9B9B]/10 flex items-center justify-center text-[#4A9B9B] mx-auto">
            <Heart className="w-7 h-7 fill-current" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] tracking-tight leading-relaxed max-w-2xl mx-auto font-display">
            Se você busca uma profissional que alia ciência de ponta a um cuidado que acolhe como família, estou aqui para ajudar.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="https://wa.me/5581988141144"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1a4444] hover:bg-[#1a3c5a] active:bg-[#132c42] text-white font-bold py-3.5 px-8 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-3 text-sm tracking-wide hover:shadow-md focus:ring-4 focus:ring-[#4A9B9B]/20"
            >
              <Phone className="w-4 h-4 fill-current animate-bounce" />
              Falar com a Fisio Michelle Santos no WhatsApp
            </a>
            
            <button 
              onClick={() => {
                setCurrentPage("tratamentos");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-700 font-bold py-3.5 px-8 rounded-xl shadow-sm transition-all duration-200 text-sm tracking-wide focus:ring-4 focus:ring-slate-100"
            >
              Conhecer Tratamentos
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default function App({ initialPath }: { initialPath?: string } = {}) {
  // Path to Page Mapping for SEO and exact URL compliance
  const pathToPageMap: Record<string, PageType> = {
    "/": "home",
    "/sobre": "sobre-mim",
    "/sobre/": "sobre-mim",
    "/sobre-mim": "sobre-mim",
    "/sobre-mim/": "sobre-mim",
    "/servicos": "tratamentos",
    "/servicos/": "tratamentos",
    "/tratamentos": "tratamentos",
    "/tratamentos/": "tratamentos",
    "/blog": "blog",
    "/blog/": "blog",
    "/contato": "home",
    "/contato/": "home",
    "/blog/como-prevenir-quedas-em-idosos": "blog/como-prevenir-quedas-em-idosos",
    "/blog/como-prevenir-quedas-em-idosos/": "blog/como-prevenir-quedas-em-idosos",
    "/blog/fisioterapia-pos-avc-em-casa": "blog/fisioterapia-pos-avc-em-casa",
    "/blog/fisioterapia-pos-avc-em-casa/": "blog/fisioterapia-pos-avc-em-casa",
    "/blog/quando-procurar-fisioterapia-geriatrica": "blog/quando-procurar-fisioterapia-geriatrica",
    "/blog/quando-procurar-fisioterapia-geriatrica/": "blog/quando-procurar-fisioterapia-geriatrica",
    "/blog/beneficios-do-pilates-para-idosos": "blog/beneficios-do-pilates-para-idosos",
    "/blog/beneficios-do-pilates-para-idosos/": "blog/beneficios-do-pilates-para-idosos",
    "/blog/cuidados-com-idosos-acamados": "blog/cuidados-com-idosos-acamados",
    "/blog/cuidados-com-idosos-acamados/": "blog/cuidados-com-idosos-acamados",
    "/blog/fisioterapia-respiratoria-em-idosos": "blog/fisioterapia-respiratoria-em-idosos",
    "/blog/fisioterapia-respiratoria-em-idosos/": "blog/fisioterapia-respiratoria-em-idosos",
    "/blog/perda-de-mobilidade-em-idosos-primeiros-sinais": "blog/perda-de-mobilidade-em-idosos-primeiros-sinais",
    "/blog/perda-de-mobilidade-em-idosos-primeiros-sinais/": "blog/perda-de-mobilidade-em-idosos-primeiros-sinais",
    "/blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos": "blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos",
    "/blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos/": "blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos",
    "/blog/familia-na-reabilitacao-domiciliar-do-idoso": "blog/familia-na-reabilitacao-domiciliar-do-idoso",
    "/blog/familia-na-reabilitacao-domiciliar-do-idoso/": "blog/familia-na-reabilitacao-domiciliar-do-idoso",
    "/fisioterapia-em-gerontologia-recife": "fisioterapia-em-gerontologia-recife",
    "/fisioterapia-em-gerontologia-recife/": "fisioterapia-em-gerontologia-recife",
    "/prevencao-de-quedas-em-idosos-recife": "prevencao-de-quedas-em-idosos-recife",
    "/prevencao-de-quedas-em-idosos-recife/": "prevencao-de-quedas-em-idosos-recife",
    "/reabilitacao-ortopedica-e-pos-operatoria-recife": "reabilitacao-ortopedica-e-pos-operatoria-recife",
    "/reabilitacao-ortopedica-e-pos-operatoria-recife/": "reabilitacao-ortopedica-e-pos-operatoria-recife",
    "/fisioterapia-neurofuncional-recife": "fisioterapia-neurofuncional-recife",
    "/fisioterapia-neurofuncional-recife/": "fisioterapia-neurofuncional-recife",
    "/pilates-adaptado-para-idosos-recife": "pilates-adaptado-para-idosos-recife",
    "/pilates-adaptado-para-idosos-recife/": "pilates-adaptado-para-idosos-recife",
    "/fisioterapia-respiratoria-recife": "fisioterapia-respiratoria-recife",
    "/fisioterapia-respiratoria-recife/": "fisioterapia-respiratoria-recife",
  };

  const pageToPathMap: Record<PageType, string> = {
    "home": "/",
    "sobre-mim": "/sobre/",
    "tratamentos": "/tratamentos/",
    "blog": "/blog/",
    "blog/como-prevenir-quedas-em-idosos": "/blog/como-prevenir-quedas-em-idosos/",
    "blog/fisioterapia-pos-avc-em-casa": "/blog/fisioterapia-pos-avc-em-casa/",
    "blog/quando-procurar-fisioterapia-geriatrica": "/blog/quando-procurar-fisioterapia-geriatrica/",
    "blog/beneficios-do-pilates-para-idosos": "/blog/beneficios-do-pilates-para-idosos/",
    "blog/cuidados-com-idosos-acamados": "/blog/cuidados-com-idosos-acamados/",
    "blog/fisioterapia-respiratoria-em-idosos": "/blog/fisioterapia-respiratoria-em-idosos/",
    "blog/perda-de-mobilidade-em-idosos-primeiros-sinais": "/blog/perda-de-mobilidade-em-idosos-primeiros-sinais/",
    "blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos": "/blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos/",
    "blog/familia-na-reabilitacao-domiciliar-do-idoso": "/blog/familia-na-reabilitacao-domiciliar-do-idoso/",
    "fisioterapia-em-gerontologia-recife": "/fisioterapia-em-gerontologia-recife/",
    "prevencao-de-quedas-em-idosos-recife": "/prevencao-de-quedas-em-idosos-recife/",
    "reabilitacao-ortopedica-e-pos-operatoria-recife": "/reabilitacao-ortopedica-e-pos-operatoria-recife/",
    "fisioterapia-neurofuncional-recife": "/fisioterapia-neurofuncional-recife/",
    "pilates-adaptado-para-idosos-recife": "/pilates-adaptado-para-idosos-recife/",
    "fisioterapia-respiratoria-recife": "/fisioterapia-respiratoria-recife/",
  };

  // Navigation states with initial URL detection
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    if (initialPath) {
      return pathToPageMap[initialPath] || "home";
    }
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      return pathToPageMap[path] || "home";
    }
    return "home";
  });

  // Client-side automatic redirect from /servicos to /tratamentos/
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path === "/servicos" || path === "/servicos/") {
        window.history.replaceState({ page: "tratamentos" }, "", "/tratamentos/");
        setCurrentPage("tratamentos");
      }
    }
  }, []);

  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTreatmentsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnterTreatments = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setTreatmentsDropdownOpen(true);
  };

  const handleMouseLeaveTreatments = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    // Grace period of 400ms so user has plenty of time moving mouse
    dropdownTimeoutRef.current = setTimeout(() => {
      setTreatmentsDropdownOpen(false);
    }, 400);
  };

  const toggleTreatmentsDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setTreatmentsDropdownOpen((prev) => !prev);
  };

  const navigateTo = (page: PageType, push = true) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setTreatmentsDropdownOpen(false);
    if (push && typeof window !== "undefined") {
      const newPath = pageToPathMap[page] || "/";
      if (window.location.pathname !== newPath) {
        window.history.pushState({ page }, "", newPath);
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = pathToPageMap[path] || "home";
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Update page document.title, canonical, meta description, OG tags and Twitter tags according to active view
  useEffect(() => {
    let title = "Fisioterapia para Pessoas Idosas em Recife";
    let description = "Fisioterapia domiciliar especializada para idosos em Recife. Atendimento personalizado para reabilitação física, prevenção de quedas, gerontologia e melhora da mobilidade no conforto do lar.";
    let canonical = "https://www.fisiomichellesantos.com.br/";

    if (currentPage === "home") {
      title = "Fisioterapia para Pessoas Idosas em Recife";
      description = "Fisioterapia domiciliar especializada para idosos em Recife. Atendimento personalizado para reabilitação física, prevenção de quedas, gerontologia e melhora da mobilidade no conforto do lar.";
      canonical = "https://www.fisiomichellesantos.com.br/";
    } else if (currentPage === "sobre-mim") {
      title = "Sobre a Fisioterapeuta | Fisioterapia para Pessoas Idosas em Recife";
      description = "Conheça Michelle Santos, Fisioterapeuta especialista em Gerontologia (Hospital Albert Einstein) com atendimento domiciliar humanizado em Recife. CREFITO: 3/276580-F.";
      canonical = "https://www.fisiomichellesantos.com.br/sobre/";
    } else if (currentPage === "tratamentos") {
      title = "Tratamentos Especializados | Fisioterapia para Pessoas Idosas em Recife";
      description = "Conheça os tratamentos de fisioterapia domiciliar para pessoas idosas em Recife: Gerontologia, Prevenção de Quedas, Reabilitação Ortopédica, Neurofuncional, Pilates e Respiratória.";
      canonical = "https://www.fisiomichellesantos.com.br/tratamentos/";
    } else if (currentPage === "blog") {
      title = "Blog | Fisioterapia para Pessoas Idosas em Recife";
      description = "Artigos e guias sobre fisioterapia para pessoas idosas: prevenção de quedas, cuidados pós-AVC, Pilates, respiração e mais. Conteúdo confiável para cuidar de quem você ama em Recife.";
      canonical = "https://www.fisiomichellesantos.com.br/blog/";
    }

    if (currentPage === "home" || currentPage === "sobre-mim" || currentPage === "tratamentos") {
      document.title = title;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonical);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", title);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", canonical);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", description);
      }

      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) {
        twTitle.setAttribute("content", title);
      }

      const twUrl = document.querySelector('meta[property="twitter:url"]');
      if (twUrl) {
        twUrl.setAttribute("content", canonical);
      }

      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) {
        twDesc.setAttribute("content", description);
      }
    }
  }, [currentPage]);

  // Dedicated services link array
  const dedicatedServiceLinks: { title: string; slug: ServicePageSlug; url: string }[] = [
    {
      title: "Fisioterapia em Gerontologia",
      slug: "fisioterapia-em-gerontologia-recife",
      url: "/fisioterapia-em-gerontologia-recife/"
    },
    {
      title: "Prevenção de Quedas em Idosos",
      slug: "prevencao-de-quedas-em-idosos-recife",
      url: "/prevencao-de-quedas-em-idosos-recife/"
    },
    {
      title: "Reabilitação Ortopédica e Pós-Operatória",
      slug: "reabilitacao-ortopedica-e-pos-operatoria-recife",
      url: "/reabilitacao-ortopedica-e-pos-operatoria-recife/"
    },
    {
      title: "Fisioterapia Neurofuncional",
      slug: "fisioterapia-neurofuncional-recife",
      url: "/fisioterapia-neurofuncional-recife/"
    },
    {
      title: "Pilates Adaptado para Pessoas Idosas",
      slug: "pilates-adaptado-para-idosos-recife",
      url: "/pilates-adaptado-para-idosos-recife/"
    },
    {
      title: "Fisioterapia Respiratória",
      slug: "fisioterapia-respiratoria-recife",
      url: "/fisioterapia-respiratoria-recife/"
    }
  ];

  // Schema JSON-LD exclusivo para a Home (Physiotherapist)
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "Physiotherapist",
    "@id": "https://www.fisiomichellesantos.com.br/#empresa",
    "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
    "alternateName": "Fisio Michelle Santos",
    "description": "Fisioterapia gerontológica especializada em Recife: reabilitação neurofuncional, pós-operatórios ortopédicos e prevenção de quedas, com protocolos humanizados e científicos no conforto do lar.",
    "url": "https://www.fisiomichellesantos.com.br/",
    "telephone": "+5581988141144",
    "image": "https://www.fisiomichellesantos.com.br/imagens/logo.png",
    "logo": "https://www.fisiomichellesantos.com.br/imagens/logo.png",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Edifício Studio Portal dos Corais, R. França Pereira, 115, Apt 2102",
      "addressLocality": "Recife",
      "addressRegion": "PE",
      "postalCode": "51111-150",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -8.106381,
      "longitude": -34.88721
    },
    "areaServed": [
      {"@type": "City", "name": "Recife"},
      {"@type": "Place", "name": "Boa Viagem"},
      {"@type": "Place", "name": "Pina"},
      {"@type": "Place", "name": "Setúbal"},
      {"@type": "Place", "name": "Imbiribeira"},
      {"@type": "Place", "name": "Ibura"},
      {"@type": "Place", "name": "Piedade"},
      {"@type": "Place", "name": "Candeias"},
      {"@type": "Place", "name": "Derby"},
      {"@type": "Place", "name": "Espinheiro"},
      {"@type": "Place", "name": "Madalena"},
      {"@type": "Place", "name": "Graças"}
    ],
    "sameAs": [
      "https://maps.app.goo.gl/Nfu4h66ff46oZyz9A",
      "https://www.instagram.com/fisiomichellesantos"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "medicalSpecialty": "Geriatric",
    "founder": {
      "@type": "Person",
      "name": "Michelle Vieira dos Santos",
      "jobTitle": "Fisioterapeuta Especialista em Gerontologia",
      "worksFor": {"@id": "https://www.fisiomichellesantos.com.br/#empresa"}
    },
    "identifier": [
      {"@type": "PropertyValue", "propertyID": "CREFITO", "value": "3/276580-F"},
      {"@type": "PropertyValue", "propertyID": "RQE", "value": "1150240325"}
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tratamentos",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fisioterapia em Gerontologia", "url": "https://www.fisiomichellesantos.com.br/fisioterapia-em-gerontologia-recife/"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Prevenção de Quedas e Reabilitação Pós-quedas", "url": "https://www.fisiomichellesantos.com.br/prevencao-de-quedas-em-idosos-recife/"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Reabilitação Ortopédica e Pós-Operatória", "url": "https://www.fisiomichellesantos.com.br/reabilitacao-ortopedica-e-pos-operatoria-recife/"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fisioterapia Neurofuncional", "url": "https://www.fisiomichellesantos.com.br/fisioterapia-neurofuncional-recife/"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pilates Adaptado para Pessoas Idosas", "url": "https://www.fisiomichellesantos.com.br/pilates-adaptado-para-idosos-recife/"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fisioterapia Respiratória", "url": "https://www.fisiomichellesantos.com.br/fisioterapia-respiratoria-recife/"}}
      ]
    }
  };

  // Schema FAQPage corrigido para a Home
  const homeFaqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como a fisioterapia pode ajudar pessoas que estão acamadas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O atendimento especializado para pessoas acamadas é um dos pilares do meu trabalho. O foco é proporcionar conforto, prevenir complicações como úlceras por pressão e atrofias musculares e manter o máximo possível de funcionalidade e dignidade. Trabalho com um plano de cuidados que envolve não apenas exercícios adaptados, mas também o treinamento da família e dos cuidadores, garantindo que o cuidado seja contínuo, seguro e humanizado todos os dias."
        }
      },
      {
        "@type": "Question",
        "name": "A fisioterapia é realizada apenas na casa do paciente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meu atendimento é focado em levar reabilitação humanizada onde a pessoa idosa se sente mais confortável. Atendo em domicílio e em Instituições de Longa Permanência para Pessoas Idosas (ILPIs), levando todos os recursos e equipamentos necessários para a sessão. Além disso, ofereço a modalidade de teleatendimento (online) para garantir a continuidade do cuidado quando necessário."
        }
      },
      {
        "@type": "Question",
        "name": "Quais bairros de Recife você atende?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atendo em um raio de até 10km, cobrindo bairros como Boa Viagem, Pina, Setúbal, Imbiribeira, Ibura, Piedade, Candeias, Derby, Espinheiro, Madalena e Graças."
        }
      },
      {
        "@type": "Question",
        "name": "Você aceita plano de saúde/convênio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Opto por realizar atendimentos 100% particulares. Essa escolha é fundamental para que eu possa dedicar o tempo necessário a cada sessão, garantindo avaliações minuciosas e um plano de tratamento personalizado, totalmente focado nas necessidades e na dignidade de cada pessoa idosa, com a atenção que elas merecem."
        }
      },
      {
        "@type": "Question",
        "name": "Você realiza atendimento para pessoas idosas vivendo com Alzheimer, Doença de Parkinson e outras demências?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, possuo ampla experiência no acompanhamento de pessoas idosas vivendo com quadros demenciais, como Alzheimer e a Doença de Parkinson. Meu atendimento é conduzido de forma serena e personalizada, integrando a pessoa idosa como protagonista da sessão para garantir seu engajamento e bem-estar, mantendo sempre um diálogo aberto e próximo com os familiares em todo o processo."
        }
      },
      {
        "@type": "Question",
        "name": "Como a fisioterapia pode ajudar na qualidade de vida de pessoas acima dos 80 anos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com certeza. A fisioterapia é fundamental nessa fase da vida, sendo uma das ferramentas mais eficazes para manter a autonomia e o bem-estar. O foco do meu trabalho com pessoas longevas é prevenir quedas, fortalecer a musculatura de forma segura e garantir que elas consigam realizar suas atividades do dia a dia com dignidade e confiança. Adaptamos cada exercício às necessidades individuais, respeitando sempre o ritmo e a história de vida de cada um."
        }
      }
    ]
  };

  // Injeção dos Schemas JSON-LD apenas na Home
  useEffect(() => {
    const scriptId = "json-ld-home";
    const faqScriptId = "json-ld-home-faq";

    if (currentPage === "home") {
      // LocalBusiness / Physiotherapist schema
      let existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        existingScript = document.createElement("script");
        existingScript.setAttribute("type", "application/ld+json");
        existingScript.setAttribute("id", scriptId);
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(homeSchemaData);

      // FAQPage schema
      let existingFaqScript = document.getElementById(faqScriptId);
      if (!existingFaqScript) {
        existingFaqScript = document.createElement("script");
        existingFaqScript.setAttribute("type", "application/ld+json");
        existingFaqScript.setAttribute("id", faqScriptId);
        document.head.appendChild(existingFaqScript);
      }
      existingFaqScript.textContent = JSON.stringify(homeFaqSchemaData);
    } else {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      const existingFaqScript = document.getElementById(faqScriptId);
      if (existingFaqScript) {
        existingFaqScript.remove();
      }
    }

    return () => {
      if (currentPage !== "home") {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
          existingScript.remove();
        }
        const existingFaqScript = document.getElementById(faqScriptId);
        if (existingFaqScript) {
          existingFaqScript.remove();
        }
      }
    };
  }, [currentPage]);
  
  // Interactive tool states
  const [searchBairro, setSearchBairro] = useState("");
  const [searchResult, setSearchResult] = useState<{ covered: boolean; message: string } | null>(null);
  
  // Custom Cartilha Preview state
  const [selectedCartilhaItem, setSelectedCartilhaItem] = useState<number | null>(null);
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Service details modal state
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Form Lead State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [responsibleName, setResponsibleName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientCondition, setPatientCondition] = useState("");
  const [patientBairro, setPatientBairro] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [formSubmittedMsg, setFormSubmittedMsg] = useState(false);

  // Testimonials carousel index state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Partners carousel auto-scroll index state and effect
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
    }, 6000); // Very slow auto-rotation (6 seconds) as requested
    return () => clearInterval(timer);
  }, []);

  // Scroll active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== "home") return;
      const sections = ["home", "sinais", "sobre", "depoimentos", "servicos", "faq"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  // Recife neighborhoods coverage list
  const coveredBairros = [
    "Boa Viagem", "Pina", "Setúbal", "Imbiribeira", "Ibura", 
    "Piedade", "Candeias", "Derby", "Espinheiro", "Madalena", "Graças"
  ];

  const handleBairroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchBairro.trim()) {
      setSearchResult(null);
      return;
    }

    const query = searchBairro.trim().toLowerCase();
    
    // Check if fuzzy matched
    const found = coveredBairros.find(
      b => b.toLowerCase().includes(query) || query.includes(b.toLowerCase())
    );

    if (found) {
      setSearchResult({
        covered: true,
        message: `Sim! O bairro ${found} está dentro do meu raio de cobertura padrão de até 10km. Fico feliz em poder lhe atender!`
      });
    } else {
      setSearchResult({
        covered: false,
        message: `O bairro buscado não consta na listagem padrão, mas dependendo da proximidade ou de reagrupamento de horários na zona de Recife, divido roteiros. Fale comigo pelo WhatsApp para avaliarmos!`
      });
    }
  };

  // Mock services metadata from copy details
  const servicesList: Service[] = [
    {
      id: "gerontologia",
      title: "Fisioterapia em Gerontologia",
      shortDesc: "Foco na manutenção da funcionalidade e independência das pessoas idosas.",
      fullDesc: "A fisioterapia gerontológica promove um envelhecimento ativo, estimulando capacidades cognitivas, motoras e sensoriais. O objetivo principal é manter a pessoa idosa independente para as atividades do dia a dia, preservando a sua dignidade e qualidade de vida.",
      benefits: [
        "Estímulo à marcha funcional autónoma",
        "Aumento da força muscular de membros inferiores e superiores",
        "Treino de dupla tarefa (Função motora e cognitiva)",
        "Orientações para adaptação ambiental e promoção de segurança domiciliar"
      ],
      duration: "50-60 minutos",
      frequency: "1 a 3 vezes por semana (Definido após avaliação personalizada)"
    },
    {
      id: "quedas",
      title: "Prevenção de Quedas e ou Reabilitação Pós quedas",
      shortDesc: "Treino de marcha e equilíbrio fundamentado em evidências para a prevenção de quedas.",
      fullDesc: "As quedas representam uma das principais causas de hospitalização entre as pessoas idosas. Através de avaliações de risco multifatorial no domicílio e da reabilitação focada no equilíbrio estático e dinâmico, devolvemos a confiança e removemos o medo de caminhar.",
      benefits: [
        "Treino de Equilíbrio e Prevenção de quedas (Preventivo)",
        "Reabilitação Motora e Funcional pós quedas (Pós-Queda)",
        "Treino funcional para melhora do equilíbrio e reações protetoras",
        "Fortalecimento da musculatura de estabilização postural: foco em Core, quadril e complexo tornozelo-pé",
        "Orientações personalizadas para a promoção de segurança domiciliar",
        "Protocolos científicos específicos para classificação dos riscos de quedas"
      ],
      duration: "50-60 minutos",
      frequency: "2 a 3 vezes por semana"
    },
    {
      id: "ortopedia",
      title: "Reabilitação Ortopédica e Pós-Operatória",
      shortDesc: "Recuperação segura e humanizada, focada no retorno funcional após fraturas ou cirurgias de prótese de joelho e quadril.",
      fullDesc: "Atendimento especializado para o manejo de dores articulares, desgaste ósseo e reabilitação segura após intervenções cirúrgicas de colocação de prótese (artroplastias) ou fraturas de fêmur e punho.",
      benefits: [
        "Alívio efetivo da dor residual e inflamação pós-operatória",
        "Ganho gradativo de amplitude de movimento articular segura",
        "Adaptação da marcha com ou sem dispositivo auxiliar (Bengalas, andadores e ou muletas).",
        "Recuperação da independência nas transferências posturais e atividades do cotidiano"
      ],
      duration: "50-60 minutos",
      frequency: "2 a 4 vezes por semana"
    },
    {
      id: "neurofuncional",
      title: "Fisioterapia Neurofuncional",
      shortDesc: "Suporte especializado para quadros demenciais, AVC e Parkinson.",
      fullDesc: "O acompanhamento de condições neurológicas exige uma abordagem especializada e acolhedora. O tratamento reabilita as vias motoras remanescentes e cria novos caminhos neurológicos (neuroplasticidade), permitindo expressiva evolução na mobilidade cotidiana.",
      benefits: [
        "Suporte especializado para o manejo e controle dos sintomas motores do Parkinson",
        "Reabilitação muscular de sequelas motoras pós-AVC",
        "Integração sensório-motora em quadros demenciais (Alzheimer)",
        "Técnicas para o alívio da rigidez muscular e aprimoramento da reeducação postural"
      ],
      duration: "50-60 minutos",
      frequency: "2 a 5 vezes por semana"
    },
    {
      id: "pilates",
      title: "Pilates Adaptado para Pessoas Idosas",
      shortDesc: "Fortalecimento seguro, controlado, focado em flexibilidade e sem impactos.",
      fullDesc: "Prática personalizada e supervisionada, que adapta os princípios do Pilates clássico à fisiologia do envelhecimento, respeitando com segurança as particularidades da osteoporose e artroses.",
      benefits: [
        "Fortalecimento do 'Powerhouse' (musculatura estabilizadora profunda)",
        "Alinhamento postural e descompressão articular leve",
        "Melhora acentuada da coordenação e expansão da caixa torácica",
        "Exercícios totalmente seguros e supervisionados individualmente",
        "Opções presencial e online disponíveis."
      ],
      duration: "50 minutos",
      frequency: "1 a 2 vezes por semana"
    },
    {
      id: "respiratoria",
      title: "Fisioterapia Respiratória",
      shortDesc: "Melhora expressiva da capacidade pulmonar e prevenção ativa de pneumonia.",
      fullDesc: "Focada na higiene brônquica, expansão pulmonar e condicionamento cardiopulmonar. Essencial para pessoas idosas acamadas, com DPOC ou em repouso prolongado para mitigar infecções obstrutivas.",
      benefits: [
        "Técnicas especializadas para higiene e desobstrução das vias aéreas.",
        "Exercícios com aparelhos de pressão expiratória positiva",
        "Prevenção eficaz contra o acúmulo de secreções pulmonares.",
        "Auxílio no manejo da fadiga respiratória, promovendo maior conforto e fôlego para as atividades diárias da pessoa idosa."
      ],
      duration: "45-50 minutos",
      frequency: "1 a 3 vezes por semana"
    }
  ];

  // Cartilha exercises list showing interactive previews of her differentiation
  const cartilhaPreviews = [
    {
      title: "Exercício 1: Fortalecer Pernas (Sentar e Levantar)",
      desc: "Idoso inicia sentado na cadeira firme com braços cruzados no peito. Levanta mantendo joelhos alinhados com os pés e senta devagar contando até 4.",
      repetitions: "10 repetições",
      tip: "Não deixe os joelhos fecharem para dentro ao levantar!"
    },
    {
      title: "Exercício 2: Equilíbrio (Apoio Unipodal Seguro)",
      desc: "Apoiando levemente as mãos no encosto rígido de uma cadeira, o idoso eleva um dos pés a 10cm do chão e sustenta o equilíbrio sobre uma única perna.",
      repetitions: "Manter por 15 segundos cada perna",
      tip: "Os cuidadores devem ficar sempre ao lado para dar segurança total."
    },
    {
      title: "Exercício 3: Mobilidade de Tornozelo (Bailarina)",
      desc: "Sentado confortavelmente, mover as pontas dos pés para cima (calcanhar no chão) e depois para baixo, ativando a panturrilha, a nossa segunda bomba cardíaca.",
      repetitions: "15 e 20 repetições lentas",
      tip: "Ótimo para ativar o retorno venoso e diminuir inchaços."
    }
  ];

  // Custom action submission triggered in modal
  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) return;

    // Send to web hook asynchronously
    fetch("https://hook.us2.make.com/0iqhtta97e48useywitr7g8q8hiaub9h", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        paciente: patientName,
        responsavel: responsibleName || "Não informado",
        idade: patientAge,
        bairro: patientBairro || "Não informado",
        condicaoClinica: patientCondition,
        whatsapp: patientPhone,
        dataEnvio: new Date().toISOString()
      })
    }).catch(err => {
      console.error("Erro ao enviar webhook:", err);
    });

    // Generate WhatsApp text preset
    const textPreset = `Olá Fisio Michelle! Gostaria de agendar uma avaliação domiciliar profissional. %0D%0A*Paciente:* ${encodeURIComponent(patientName)}${responsibleName ? ` %0D%0A*Responsável:* ${encodeURIComponent(responsibleName)}` : ""} %0D%0A*Idade:* ${encodeURIComponent(patientAge)} anos %0D%0A*Bairro:* ${encodeURIComponent(patientBairro || "Não informado")} %0D%0A*WhatsApp:* ${encodeURIComponent(patientPhone)} %0D%0A*Condição Clínica:* ${encodeURIComponent(patientCondition)} %0D%0A%0D%0AVim através do seu Website de consulta!`;
    const whatsappUrl = `https://wa.me/5581988141144?text=${textPreset}`;
    
    setFormSubmittedMsg(true);
    
    // Smooth delay before redirection to mimic real sub-system
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsBookingOpen(false);
      setFormSubmittedMsg(false);
      // Clean inputs
      setPatientName("");
      setResponsibleName("");
      setPatientAge("");
      setPatientBairro("");
      setPatientPhone("");
      setPatientCondition("");
    }, 1500);
  };

  const handleScrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const cleanId = id.replace("#", "");
    
    // Limpa a URL removendo o hashtag instantaneamente
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }

    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(cleanId) || (cleanId === "duvidas-frequentes" ? document.getElementById("faq") : null);
        if (element) {
          const topOffset = element.offsetTop - 85; // accounts for sticky header
          window.scrollTo({
            top: topOffset,
            behavior: "smooth"
          });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 180);
    } else {
      const element = document.getElementById(cleanId) || (cleanId === "duvidas-frequentes" ? document.getElementById("faq") : null);
      if (element) {
        const topOffset = element.offsetTop - 85; // accounts for sticky header
        window.scrollTo({
          top: topOffset,
          behavior: "smooth"
        });
      } else if (cleanId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleAnchorNavigate = (anchor: string) => {
    handleScrollToSection(anchor);
  };

  // Listen to hash changes for smooth anchor navigation from any page
  useEffect(() => {
    const handleHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const targetId = window.location.hash.replace("#", "");
        if (targetId) {
          setTimeout(() => {
            const element = document.getElementById(targetId) || (targetId === "duvidas-frequentes" ? document.getElementById("faq") : null);
            if (element) {
              const topOffset = element.offsetTop - 85;
              window.scrollTo({ top: topOffset, behavior: "smooth" });
              // Limpa a URL se o site for carregado com um link contendo hash
              window.history.replaceState(null, "", window.location.pathname);
            }
          }, 150);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [currentPage]);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-800 font-sans selection:bg-[#4A9B9B]/20 selection:text-[#1A3C5A]">
      
      {/* Schema Markup Dynamic SEO Injection */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "PhysiotherapyClinic",
          "name": "Fisio Michelle Santos - Fisioterapia Domiciliar para Pessoas Idosas",
          "image": "https://www.fisiomichellesantos.com.br/fisioterapeuta-michelle-santos-gerontologia-recife.webp",
          "@id": "https://ais-dev-kxqvbfmonbhfdhjxunl76q-614932361469.us-west2.run.app/#clinic",
          "url": "https://ais-dev-kxqvbfmonbhfdhjxunl76q-614932361469.us-west2.run.app",
          "telephone": "+5581988141144",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua França Pereira, 115",
            "addressLocality": "Recife",
            "addressRegion": "PE",
            "postalCode": "51111-150",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-8.1257125",
            "longitude": "-34.9015125"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Friday"],
              "opens": "08:00",
              "closes": "13:00"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/fisiomichellesantos"
          ]
        })}
      </script>

      {/* HEADER SECTION (Top-Right actions, Top-Left Headline matching Z-Pattern starting point) */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand / Top-Left (Clicável → Leva à Home) */}
          <a 
            href="/"
            className="flex flex-col cursor-pointer no-underline focus:outline-none" 
            onClick={(e) => {
              e.preventDefault();
              navigateTo("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }} 
            id="header-brand"
            aria-label="Fisio Michelle Santos - Página Inicial"
          >
            <span className="font-display text-lg sm:text-xl font-bold text-[#1A3C5A] tracking-tight flex items-center gap-2.5">
              <img 
                src="https://i.postimg.cc/KYjgm4DW/Si-mbolo-Michelle-Santos-Fisioterapia-para-idosos-em-Recife.webp" 
                alt="Logo Fisio Michelle Santos" 
                className="h-9 sm:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span>Fisio Michelle Santos</span>
            </span>
          </a>

          {/* Navigation Items (Desktop) / Top-Right area */}
          <nav className="hidden lg:flex items-center gap-6 font-medium" aria-label="Menu Principal">
            {/* 1. Sobre Mim */}
            <a 
              href="/sobre"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("sobre-mim");
              }}
              className={`text-sm tracking-wide transition-all ${currentPage === "sobre-mim" ? "text-[#1A3C5A] font-bold border-b-2 border-[#1A3C5A] pb-0.5" : "text-slate-600 hover:text-[#1A3C5A]"}`}
              id="menu-sobre"
            >
              Sobre Mim
            </a>
            
            {/* 2. Tratamentos Especializados ▾ (submenu) */}
            <div 
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnterTreatments}
              onMouseLeave={handleMouseLeaveTreatments}
            >
              <div className="flex items-center">
                <button 
                  onClick={() => {
                    navigateTo("tratamentos");
                  }}
                  className={`text-sm tracking-wide transition-all flex items-center gap-1 py-1 px-1 rounded-lg cursor-pointer ${
                    currentPage === "tratamentos" 
                      ? "text-[#1A3C5A] font-bold border-b-2 border-[#1A3C5A] pb-0.5" 
                      : typeof currentPage === "string" && currentPage.includes("recife")
                        ? "text-[#1A3C5A] font-bold"
                        : "text-slate-600 hover:text-[#1A3C5A]"
                  }`}
                  id="menu-servicos"
                  aria-haspopup="true"
                  aria-expanded={treatmentsDropdownOpen}
                >
                  <span>Tratamentos Especializados</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${treatmentsDropdownOpen ? "rotate-180 text-[#1A3C5A]" : "text-slate-500"}`} />
                </button>
              </div>
              
              {/* Dropdown Menu Item Cards */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-1.5 w-80 transition-all duration-200 z-50 ${
                  treatmentsDropdownOpen 
                    ? "opacity-100 scale-100 pointer-events-auto" 
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                  <div className="px-4 py-1.5 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Páginas de Atendimento</span>
                    <span className="text-[9px] font-normal text-slate-400 lowercase">clique para abrir</span>
                  </div>
                  {dedicatedServiceLinks.map((srv) => (
                    <a
                      key={srv.slug}
                      href={srv.url}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(srv.slug);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-slate-50 text-xs transition-colors font-medium flex items-center justify-between group/item ${currentPage === srv.slug ? "text-[#1A3C5A] font-bold bg-slate-50" : "text-slate-700 hover:text-[#1A3C5A]"}`}
                    >
                      <span>{srv.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#1A3C5A] group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1" />
                    </a>
                  ))}
                  <div className="mt-1 pt-1 border-t border-slate-100 bg-slate-50/50">
                    <a
                      href="/tratamentos/"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("tratamentos");
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-slate-100 text-[#4A9B9B] hover:text-[#1A3C5A] text-xs transition-colors font-bold flex items-center justify-between"
                    >
                      <span>Ver Todos os Tratamentos (Geral)</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Blog */}
            <a 
              href="/blog/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("blog");
              }}
              className={`text-sm tracking-wide transition-all ${currentPage === "blog" || (typeof currentPage === "string" && currentPage.startsWith("blog/")) ? "text-[#1A3C5A] font-bold border-b-2 border-[#1A3C5A] pb-0.5" : "text-slate-600 hover:text-[#1A3C5A]"}`}
              id="menu-blog"
            >
              Blog
            </a>

            {/* 4. Contato */}
            <a 
              href="https://www.fisiomichellesantos.com.br/#contato"
              onClick={(e) => {
                e.preventDefault();
                handleAnchorNavigate("contato");
              }}
              className="text-sm tracking-wide transition-all text-slate-600 hover:text-[#1A3C5A]"
              id="menu-contato"
            >
              Contato
            </a>
          </nav>

          {/* Action CTA Button (Desktop) — ÚNICO item com destaque visual */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20domiciliar."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A3C5A] hover:bg-[#1A3C5A]/90 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm flex items-center gap-1.5 border border-transparent focus:ring-4 focus:outline-none focus:ring-[#1A3C5A]/30"
              id="cta-agendar-header"
            >
              <Calendar className="w-3.5 h-3.5" />
              Solicitar Avaliação
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
            id="mobile-hamburger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden w-full bg-white border-t border-slate-100 px-4 py-6 shadow-inner flex flex-col gap-3 max-h-[80vh] overflow-y-auto"
              id="mobile-drawer"
            >
              {/* 1. Sobre Mim */}
              <a 
                href="/sobre"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("sobre-mim");
                }}
                className={`w-full text-left py-2 font-medium transition-colors ${currentPage === "sobre-mim" ? "text-[#1A3C5A] font-bold" : "text-slate-700 hover:text-[#1A3C5A]"}`}
              >
                Sobre Mim
              </a>

              {/* 2. Tratamentos Especializados ▾ */}
              <div className="py-2">
                <button 
                  onClick={() => {
                    navigateTo("tratamentos");
                  }}
                  className="w-full text-left font-bold text-[#1A3C5A] mb-1 flex items-center justify-between"
                >
                  <span>Tratamentos Especializados</span>
                  <ChevronRight className="w-4 h-4 text-[#4A9B9B]" />
                </button>
                <div className="pl-3 py-1 space-y-2 border-l-2 border-[#4A9B9B]/30 ml-2 my-1">
                  {dedicatedServiceLinks.map((srv) => (
                    <a
                      key={srv.slug}
                      href={srv.url}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(srv.slug);
                      }}
                      className={`block py-1 text-xs transition-colors ${currentPage === srv.slug ? "font-bold text-[#1A3C5A]" : "text-slate-600 hover:text-[#1A3C5A]"}`}
                    >
                      {srv.title}
                    </a>
                  ))}
                  <a
                    href="/tratamentos/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("tratamentos");
                    }}
                    className="block py-1 text-xs text-[#4A9B9B] font-bold hover:underline"
                  >
                    Ver Todos os Tratamentos
                  </a>
                </div>
              </div>

              {/* 3. Blog */}
              <a 
                href="/blog/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("blog");
                }}
                className={`w-full text-left py-2 font-medium transition-colors ${currentPage === "blog" || (typeof currentPage === "string" && currentPage.startsWith("blog/")) ? "text-[#1A3C5A] font-bold" : "text-slate-700 hover:text-[#1A3C5A]"}`}
              >
                Blog
              </a>

              {/* 4. Contato */}
              <a 
                href="https://www.fisiomichellesantos.com.br/#contato"
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorNavigate("contato");
                }}
                className="w-full text-left py-2 font-medium text-slate-700 hover:text-[#1A3C5A] transition-colors"
              >
                Contato
              </a>
              
              {/* [CTA] Solicitar Avaliação (WhatsApp) */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href="https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20domiciliar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1A3C5A] active:bg-[#1A3C5A]/90 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Solicitar Avaliação
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="conteudo-principal">
        {currentPage === "home" ? (
        <>
          {/* 1. DOBRA PRINCIPAL (Hero Section with strict Z-Pattern visual flow layout) */}
          <section id="home" className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        
        {/* Organic visual element (Background soft blobs and vector waves from design system) */}
        <div className="absolute top-1/4 right-[5%] -z-10 w-80 h-80 bg-[#4A9B9B]/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-12 left-[2%] -z-10 w-96 h-96 bg-[#F2A900]/5 rounded-full filter blur-3xl" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 12-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Top-Left Headline & copywriting (Grid Span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left" id="hero-content-column">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A3C5A]/10 text-[#1A3C5A] text-xs font-bold uppercase tracking-wider w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#F2A900]" />
                Atendimento Personalizado em Recife
              </span>

              {/* H1 Headline strictly from copy */}
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A3C5A] tracking-tight leading-tight select-none">
                Fisioterapia Domiciliar para Pessoas Idosas em Recife: <span className="text-[#4A9B9B]">Mobilidade, Segurança, Autonomia e Independência.</span>
              </h1>
              
              {/* H2 Subheadline strictly from copy */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
                Ajude quem você ama a continuar ativo e seguro no conforto de casa. Cuidado especializado em gerontologia, pós-operatório e prevenção de quedas.
              </p>

              {/* BOTTOM-LEFT CTA Text & Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
                <a
                  href="https://wa.me/5581988141144?text=Olá%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20meu%20familiar.%20Visto%20no%20site."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all tracking-wide flex items-center justify-center gap-2 group text-xs sm:text-sm focus:ring-4 focus:ring-emerald-200"
                  id="hero-whatsapp-btn"
                >
                  <Phone className="w-4 h-4 fill-current animate-bounce" />
                  Falar com a Fisio Michelle no WhatsApp
                </a>
                
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-5 rounded-lg transition-all flex items-center justify-center gap-2 group text-xs sm:text-sm border border-slate-200"
                  id="hero-secondary-btn"
                >
                  Planejar Consulta
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom trust factors embedded */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 text-slate-500 text-xs">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4A9B9B] shrink-0" />
                  <span>CREFITO Ativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4A9B9B] shrink-0" />
                  <span>100% Personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4A9B9B] shrink-0" />
                  <span>Avaliação Completa</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Center Visual Content matching Z-pattern & Suggested Image (Grid Span 5) */}
            <div className="lg:col-span-5 relative" id="hero-image-column">
              
              {/* Asymmetric stylized frame decoration of the design system */}
              <div className="absolute inset-0 bg-[#4A9B9B] rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl transform rotate-2 scale-102 opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#F2A900]/10 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#1A3C5A]/5 rounded-xl -z-10" />

              {/* Suggested Image: photo of you smiling with patient inside a happy home environment */}
              <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl shadow-xl border border-slate-100 bg-white">
                <img
                  src={heroImage}
                  alt="Michelle Santos, Fisioterapeuta especialista auxiliando paciente idosa com afeto e segurança a caminhar no domicílio."
                  className="w-full h-auto object-cover max-h-[500px] hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  id="img-hero"
                />
              </div>

              {/* Mini overlap card highlighting localized focus */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-4 sm:w-64 bg-white/95 backdrop-blur-sm py-2 px-3 rounded-lg shadow-md border border-slate-50/50 flex items-center gap-2.5">
                <div className="bg-[#1A3C5A]/10 p-1.5 rounded-md text-[#1A3C5A]">
                  <MapPin className="w-4 h-4 shrink-0" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-[#4A9B9B] uppercase tracking-wider leading-none">Atendimento Em</p>
                  <p className="text-xs font-bold text-slate-800 mt-1 leading-none">Recife - PE • Direto no seu Lar</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Organic separator edge (wave SVG) */}
        <div className="absolute bottom-0 left-0 right-0 h-10 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-10 text-[#F5F7FA]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,94.1,25.4,185.11,42.85,251.76,69.4,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* 2. SEÇÃO DE CONSCIENTIZAÇÃO (Focada nas Dores) */}
      <section id="sinais" className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#4A9B9B] inline-block mb-3 bg-white px-3 py-1 rounded-full shadow-xs">
              Sinais e Perigos do Sedentarismo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A3C5A] tracking-tight">
              Sinais de que seu familiar precisa de Fisioterapia Domiciliar
            </h2>
            <div className="w-16 h-1 bg-[#F2A900] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Column Left: Paragraph & explanation */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Muitas famílias cometem o erro de buscar ajuda apenas quando algo grave acontece, como uma queda ou uma cirurgia. Mas a perda de mobilidade dá sinais muito antes.
                </p>
                <div className="p-4 bg-[#F2A900]/10 border-l-4 border-[#F2A900] rounded-r-lg text-slate-700 text-sm">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#F2A900] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A3C5A] font-semibold block mb-1">Atenção Crítica:</strong>
                      Intervir precocemente evita o declínio funcional irreversível e a perda de independência, garantindo que a pessoa idosa continue fazendo o que gosta.
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  O tratamento antecipado impede a perda severa de tecido osteomuscular, estimula as reservas cardiopulmonares e garante mais segurança neurológica.
                </p>
              </div>

              {/* Emotional finish */}
              <div className="pt-6 border-t border-slate-100">
                <span className="text-xs text-[#4A9B9B] uppercase tracking-wider font-bold block mb-1">A Meta Principal</span>
                <p className="text-sm md:text-base text-[#1A3C5A] font-bold leading-relaxed italic">
                  "Sem o acompanhamento adequado, o processo de declínio acelera. O objetivo da fisioterapia não é apenas tratar a dor, mas preservar a autonomia para que o idoso continue fazendo o que gosta, como caminhar pela própria casa sem medo, participar dos momentos em família e ter a dignidade de não depender de ajuda para tudo."
                </p>
              </div>
            </div>

            {/* Column Right: Interactive Alerts cards */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              <div className="bg-white hover:bg-slate-50 cursor-pointer p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:scale-101 hover:shadow-md">
                <div className="bg-rose-50 p-3 rounded-lg shrink-0">
                  <img 
                    src="https://i.postimg.cc/dVRYShRj/andando.png" 
                    alt="Passos Encurtados" 
                    className="w-6 h-6 object-contain [filter:invert(37%)_sepia(81%)_saturate(2530%)_hue-rotate(330deg)_brightness(97%)_contrast(96%)]" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-[#1A3C5A] mb-1">Passos Encurtados</h3>
                  <p className="text-sm text-slate-600">Está andando menos ou com passos mais curtos.</p>
                </div>
              </div>

              <div className="bg-white hover:bg-slate-50 cursor-pointer p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:scale-101 hover:shadow-md">
                <div className="bg-rose-50 p-3 rounded-lg text-rose-500 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-[#1A3C5A] mb-1">Dificuldade Sentar / Levantar</h3>
                  <p className="text-sm text-slate-600">Sente dificuldade ou insegurança para levantar da cadeira.</p>
                </div>
              </div>

              <div className="bg-white hover:bg-slate-50 cursor-pointer p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:scale-101 hover:shadow-md">
                <div className="bg-rose-50 p-3 rounded-lg shrink-0">
                  <img 
                    src="https://i.postimg.cc/fW678yR3/pessoa-atraves-da-janela-(1).png" 
                    alt="Medo de Quedas" 
                    className="w-6 h-6 object-contain [filter:invert(37%)_sepia(81%)_saturate(2530%)_hue-rotate(330deg)_brightness(97%)_contrast(96%)]" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-[#1A3C5A] mb-1">Medo de Quedas</h3>
                  <p className="text-sm text-slate-600">Apresenta medo de cair e, por isso, parou de se movimentar.</p>
                </div>
              </div>

              <div className="bg-white hover:bg-slate-50 cursor-pointer p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:scale-101 hover:shadow-md">
                <div className="bg-rose-50 p-3 rounded-lg shrink-0">
                  <img 
                    src="https://i.postimg.cc/C5jRPFcV/duvida-cerebral.png" 
                    alt="Limitações pós AVC" 
                    className="w-6 h-6 object-contain [filter:invert(37%)_sepia(81%)_saturate(2530%)_hue-rotate(330deg)_brightness(97%)_contrast(96%)]" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-[#1A3C5A] mb-1">Limitações pós AVC</h3>
                  <p className="text-sm text-slate-600">Ficou mais dependente após um diagnóstico de demência ou AVC.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. AUTORIDADE E CONFIANÇA (E-E-A-T para o Google com Foto + Credenciais) */}
      <section id="sobre" className="py-16 md:py-24 bg-white relative">
        
        {/* Background geometry */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/60 -z-10" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Profile Image with trust background (Grid span 5) */}
            <div className="lg:col-span-5 relative" id="about-image-column">
              <div className="absolute inset-0 bg-[#4A9B9B] rounded-2xl transform rotate-3 scale-102 opacity-5" />
              
              <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-[#F5F7FA]">
                <img
                  src={profileImage}
                  alt="Fisio Michelle Santos, fisioterapeuta especialista em Gerontologia, de jaleco branco com o bordado do Instituto Israelita Albert Einstein."
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                  id="img-profile"
                  loading="lazy"
                />
              </div>

              {/* Overlapping badge */}
              <div className="absolute -bottom-3 -right-3 bg-[#1A3C5A] text-white p-3 rounded-lg shadow-md border border-[#1A3C5A]/50 text-left max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-white text-xs font-bold font-mono ml-1.5">5.0 Estrelas</span>
                </div>
                <p className="text-[11px] text-slate-200 leading-snug">Reconhecimento de excelência em reabilitação geriátrica em Recife.</p>
              </div>
            </div>

            {/* Credential Data (Grid span 7) */}
            <div className="lg:col-span-7 flex flex-col text-left gap-6" id="about-details-column">
              <span className="text-[#4A9B9B] font-bold text-xs uppercase tracking-widest bg-[#4A9B9B]/10 px-3.5 py-1.5 rounded-full w-fit">
                Sua Fisioterapeuta Domiciliar
              </span>

              {/* H2 Title strictly from copy */}
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A3C5A] tracking-tight">
                Quem cuidará de quem você ama?
              </h2>

              <p className="text-lg text-slate-700 leading-relaxed font-light">
                Sou a <strong className="font-semibold text-[#1A3C5A]">Fisio Michelle Santos (CREFITO: 3/276580-F e RQE: 1150240325)</strong>. Minha missão é guiada pela certeza de que <span className="font-bold text-[#4A9B9B] italic">"Todo paciente é o amor da vida de alguém"</span>. Com essa convicção, levo reabilitação personalizada e humanizada até a sua casa.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                Com 7 anos de experiência clínica, consolidei minha prática na cidade de São Paulo, onde desenvolvi um olhar técnico e cuidadoso para a longevidade. Agora, trago essa bagagem de excelência para Recife, unindo o rigor científico à atenção dedicada que cada pessoa idosa merece.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                Minha atuação é pautada em uma formação sólida e na constante atualização:
              </p>

              {/* List of certifications strictly from copy with green checkbox styling */}
              <ul className="space-y-3.5 bg-[#F5F7FA] p-6 rounded-xl border border-slate-100 text-slate-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✅</span>
                  <span>Especialista em Gerontologia pela SBGG (Sociedade Brasileira de Geriatria e Gerontologia).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✅</span>
                  <span>Especialista em Fisioterapia em Gerontologia pela ABRAFIGE (Associação Brasileira de Fisioterapia em Gerontologia).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✅</span>
                  <span>Especialização em Gerontologia pelo renomado Instituto Israelita Albert Einstein.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✅</span>
                  <span>Especialista em Pilates para pessoas idosas, com foco em reabilitação, equilíbrio e condicionamento físico funcional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✅</span>
                  <span>MBA em Prescrição de Treinamento para Grupos Especiais e Doenças Crônicas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✅</span>
                  <span>Membro do PrevQuedas Brasil, o maior grupo nacional de pesquisa multidisciplinar em prevenção e manejo de quedas em pessoas idosas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✅</span>
                  <span>Especialista em Fisioterapia em Terapia Intensiva, garantindo segurança técnica em diferentes níveis de complexidade.</span>
                </li>
              </ul>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => {
                    setCurrentPage("sobre-mim");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-[#abd6c4] hover:bg-[#9bc5b3] active:bg-[#8bb4a2] text-xs font-bold uppercase tracking-wider text-[#1A3C5A] px-6 py-3 rounded-lg shadow-xs hover:shadow-sm transition-all flex items-center gap-2 group focus:ring-4 focus:ring-[#abd6c4]/40"
                >
                  <span>Saiba mais</span>
                  <span className="text-[#1A3C5A] group-hover:translate-x-1 transition-transform duration-200 font-mono">→</span>
                </button>
              </div>

            </div>

          </div>

          {/* Centralized text title and slowly-rotating active carousel at the center of the page */}
          <div className="mt-16 pt-12 border-t border-slate-100 text-center">
            <p className="text-[12px] sm:text-xs uppercase tracking-widest text-[#4A9B9B] font-bold mb-6 select-none">
              Parcerias e Qualificações Científicas
            </p>
            
            {/* Carousel Card Box */}
            <div className="relative bg-slate-50/60 border border-slate-100 rounded-2xl p-6 shadow-sm max-w-md mx-auto group">
              {/* Prev Button */}
              <button 
                onClick={() => setCurrentPartnerIndex((prev) => (prev - 1 + partners.length) % partners.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-100 text-slate-600 p-2 rounded-full border border-slate-200/60 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4A9B9B]/40 z-10"
                title="Slide anterior"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Active Slide Content */}
              <div className="min-h-[140px] flex flex-col justify-center items-center px-8">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img 
                    src={partners[currentPartnerIndex].image} 
                    alt={partners[currentPartnerIndex].name}
                    className="max-h-16 sm:max-h-20 w-auto object-contain transition-all duration-500 transform hover:scale-102"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light whitespace-pre-line">
                    {partners[currentPartnerIndex].detail}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <button 
                onClick={() => setCurrentPartnerIndex((prev) => (prev + 1) % partners.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-100 text-slate-600 p-2 rounded-full border border-slate-200/60 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4A9B9B]/40 z-10"
                title="Próximo slide"
                aria-label="Próximo slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Index Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {partners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPartnerIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentPartnerIndex ? "w-5 bg-[#4A9B9B]" : "w-2 bg-slate-300/80 hover:bg-slate-400"}`}
                  title={`Slide ${idx + 1}`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROVA SOCIAL (O Gatilho da Emoção) */}
      <section id="depoimentos" className="py-16 md:py-20 bg-[#9FCCC9] text-[#1A3C5A] relative overflow-hidden">
        
        {/* Background geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#1A3C5A]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#1A3C5A]/10 rounded-full" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#1A3C5A] bg-[#1A3C5A]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Depoimentos de Gratidão
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A3C5A] tracking-tight">
              Histórias de cuidado e confiança: o que dizem as famílias que eu acompanho
            </h2>
            <div className="w-16 h-1 bg-[#1A3C5A]/30 mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Detailed styled card with exact quote */}
            <div className="relative group">
              <div className="bg-white text-slate-800 p-8 sm:p-12 rounded-2xl shadow-xl space-y-6 relative border border-slate-100 text-left min-h-[300px] flex flex-col justify-between transition-all duration-300">
                
                {/* Quote marks floating */}
                <span className="absolute -top-7 left-8 text-[120px] font-serif font-extrabold text-[#4A9B9B]/20 leading-none pointer-events-none select-none">“</span>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-amber-500 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>

                  {/* Exact user copywriting */}
                  <blockquote className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed italic">
                    "{testimonials[currentTestimonialIndex].quote}"
                  </blockquote>
                </div>

                {/* Author signature info */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-[#1A3C5A] text-base">— {testimonials[currentTestimonialIndex].author}</p>
                    <p className="text-xs text-[#4A9B9B] uppercase tracking-wider font-semibold">{testimonials[currentTestimonialIndex].treatment}</p>
                  </div>
                </div>

              </div>

              {/* Prev Button */}
              <button 
                onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 text-[#1A3C5A] p-2.5 rounded-full border border-slate-200 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#1A3C5A]/40 z-10"
                title="Depoimento anterior"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button 
                onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 text-[#1A3C5A] p-2.5 rounded-full border border-slate-200 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#1A3C5A]/40 z-10"
                title="Próximo depoimento"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Index Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentTestimonialIndex ? "w-5 bg-[#1A3C5A]" : "w-1.5 bg-slate-400 hover:bg-slate-500"}`}
                  title={`Slide ${idx + 1}`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            {/* Call to action below testimony */}
            <div className="mt-8 text-center">
              <p className="text-slate-800 font-medium text-sm mb-4">Cuidado focado na total reabilitação, acolhendo pacientes e auxiliando familiares.</p>
              <button
                onClick={() => {
                  setCurrentPage("tratamentos");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-[#F2A900] hover:bg-[#F2A900]/95 hover:scale-101 hover:shadow-lg text-white text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-lg outline-none cursor-pointer transition-all active:scale-99"
              >
                Conhecer Métodos de Tratamento
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 5. RESUMO DOS SERVIÇOS (Com links / modal para páginas internas) */}
      <section id="servicos" className="py-16 md:py-24 bg-[#F5F7FA] relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#4A9B9B] bg-[#4A9B9B]/10 px-4.5 py-1.5 rounded-full inline-block mb-3">
              Tratamentos Especializados
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A3C5A] tracking-tight">
              Reabilitação Completa e Humanizada no Conforto do Lar
            </h2>
            <p className="text-sm text-slate-500 mt-2">Clique em qualquer um dos cards abaixo para visualizar detalhes do plano e frequência recomendada.</p>
            <div className="w-16 h-1 bg-[#F2A900] mx-auto mt-4 rounded-full" />
          </div>

          {/* Service Cards Grid (12-column grid or adaptive flex layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            
            {servicesList.map((service) => {
              const serviceIdToSlugMap: Record<string, ServicePageSlug> = {
                "gerontologia": "fisioterapia-em-gerontologia-recife",
                "quedas": "prevencao-de-quedas-em-idosos-recife",
                "ortopedia": "reabilitacao-ortopedica-e-pos-operatoria-recife",
                "neurofuncional": "fisioterapia-neurofuncional-recife",
                "pilates": "pilates-adaptado-para-idosos-recife",
                "respiratoria": "fisioterapia-respiratoria-recife",
              };
              const targetSlug = serviceIdToSlugMap[service.id];
              const targetUrl = targetSlug ? `/${targetSlug}/` : "/tratamentos/";

              return (
                <a
                  key={service.id}
                  href={targetUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    if (targetSlug) {
                      navigateTo(targetSlug);
                    } else {
                      navigateTo("tratamentos");
                    }
                  }}
                  className="bg-white hover:bg-slate-50 hover:shadow-md border border-slate-100 p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between text-left no-underline block"
                  id={`card-service-${service.id}`}
                >
                <div>
                  {/* Decorative badge icon based on service index */}
                  <div className="w-12 h-12 rounded-xl bg-[#1A3C5A]/5 text-[#1A3C5A] group-hover:bg-[#1A3C5A] flex items-center justify-center transition-all mb-6">
                    {service.id === "gerontologia" && (
                      <img 
                        src="https://i.postimg.cc/7LCprb0j/pessoa-caminhando-com-bengala.png" 
                        alt="Fisioterapia em Gerontologia" 
                        className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:brightness-0 group-hover:invert transition-all" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    )}
                    {service.id === "quedas" && (
                      <img 
                        src="https://i.postimg.cc/fW678yR3/pessoa-atraves-da-janela-(1).png" 
                        alt="Prevenção de Quedas" 
                        className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:brightness-0 group-hover:invert transition-all" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    )}
                    {service.id === "ortopedia" && (
                      <img 
                        src="https://i.postimg.cc/0ySYgsr6/esteira.png" 
                        alt="Reabilitação Ortopédica" 
                        className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:brightness-0 group-hover:invert transition-all" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    )}
                    {service.id === "neurofuncional" && (
                      <img 
                        src="https://i.postimg.cc/QMgvdc9N/cerebro.png" 
                        alt="Fisioterapia Neurofuncional" 
                        className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:brightness-0 group-hover:invert transition-all" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    )}
                    {service.id === "pilates" && (
                      <img 
                        src="https://i.postimg.cc/rmgqPBqD/FISIO-MICHELLE-SANTOS-PILATES-PARA-PESSOAS-IDOSAS.png" 
                        alt="Pilates Adaptado" 
                        className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:brightness-0 group-hover:invert transition-all" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    )}
                    {service.id === "respiratoria" && (
                      <img 
                        src="https://i.postimg.cc/SQ5YmvBc/pulmoes.png" 
                        alt="Fisioterapia Respiratória" 
                        className="w-6 h-6 object-contain [filter:invert(16%)_sepia(39%)_saturate(1914%)_hue-rotate(174deg)_brightness(91%)_contrast(93%)] group-hover:brightness-0 group-hover:invert transition-all" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    )}
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#1A3C5A] mb-3 group-hover:text-[#4A9B9B] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-[#1A3C5A] group-hover:translate-x-1.5 transition-transform mt-auto text-left gap-1.5">
                  Visualizar plano e detalhes
                  <ChevronRight className="w-4 h-4 text-[#F2A900]" />
                </div>
              </a>
              );
            })}

          </div>

          {/* Interactive Bairros Search (Recife coverage look-up tool) */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-100 shadow-sm mb-16 text-left">
            <h3 className="font-display text-lg font-bold text-[#1A3C5A] mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#4A9B9B]" />
              Verificar Cobertura em seu Bairro (Recife)
            </h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Realizo atendimentos no domicílio com raio padrão de até 10km. Digite seu bairro abaixo para verificar a cobertura instantaneamente.
            </p>
            
            <form onSubmit={handleBairroSearch} className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Ex: Boa Viagem, Madalena, Graças, Madalena..."
                  value={searchBairro}
                  onChange={(e) => setSearchBairro(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B]"
                  id="input-bairro"
                />
                <Search className="absolute left-3.5 top-3.5 text-slate-400 w-4.5 h-4.5" />
              </div>
              <button
                type="submit"
                className="bg-[#1A3C5A] hover:bg-[#1A3C5A]/90 text-white font-semibold text-xs px-5 py-3 rounded-lg shadow-sm transition-colors uppercase tracking-wider whitespace-nowrap"
              >
                Buscar
              </button>
            </form>

            <AnimatePresence mode="wait">
              {searchResult && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-4 rounded-xl text-xs leading-relaxed flex items-start gap-3 ${
                    searchResult.covered ? "bg-emerald-50 text-emerald-800 border border-emerald-100" : "bg-amber-50 text-amber-800 border border-amber-100"
                  }`}
                  id="search-bairro-result"
                >
                  <div className={`p-1 rounded-full ${searchResult.covered ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"} shrink-0`}>
                    {searchResult.covered ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="font-bold mb-0.5">{searchResult.covered ? "Bairro Atendido!" : "Verificar Disponibilidade"}</p>
                    <p>{searchResult.message}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Nosso Diferencial Sub-section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden text-left" id="diferencial-cartilha">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Highlight texts */}
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-center gap-5">
                <span className="text-[#F2A900] font-bold text-xs uppercase tracking-widest block">O Diferencial Que Muda Vidas</span>
                
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1A3C5A] leading-tight">
                  O cuidado não acaba quando a sessão termina
                </h3>
                
                {/* Exact text of copy */}
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Para os dias em que não estou presente, preparo orientações personalizadas (com fotos ou desenhos do próprio paciente) para que a família e os cuidadores possam dar continuidade aos exercícios com segurança.
                </p>

                <div className="bg-[#4A9B9B]/10 p-4 rounded-xl border border-[#4A9B9B]/20 text-[#1A3C5A] text-xs space-y-1">
                  <p className="font-bold">Por que isso é fundamental?</p>
                  <p className="text-slate-600">A continuidade dos exercícios entre as visitas é essencial para manter a força e o controle postural de pessoas idosas, ajudando a preservar sua autonomia e independência no dia a dia.</p>
                </div>
              </div>

              {/* Interactive Cartilha Simulator preview panel */}
              <div className="bg-slate-50 p-8 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-200/60 flex flex-col justify-center">
                <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 text-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#4A9B9B]" />
                      <span className="text-xs font-bold text-[#1A3C5A] uppercase tracking-wider">CARTILHA DE ORIENTAÇÕES</span>
                    </div>
                    <span className="bg-[#4A9B9B] text-white text-[10px] px-2 py-0.5 rounded-full font-mono">ID: Paciente</span>
                  </div>

                  <p className="text-[11px] text-slate-500">Escolha uma instrução clínica para ver um exemplo de orientação domiciliar:</p>
                  
                  {/* Selectors */}
                  <div className="flex flex-col gap-2">
                    {cartilhaPreviews.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedCartilhaItem(selectedCartilhaItem === idx ? null : idx)}
                        className={`w-full text-left p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors flex items-center justify-between ${
                          selectedCartilhaItem === idx ? "bg-[#1A3C5A]/5 border-[#1A3C5A] text-[#1A3C5A]" : "bg-white hover:bg-slate-50 border-slate-100 text-slate-600"
                        }`}
                        type="button"
                      >
                        <span className="truncate">{item.title}</span>
                        <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform ${selectedCartilhaItem === idx ? "rotate-180 text-[#1A3C5A]" : "text-slate-400"}`} />
                      </button>
                    ))}
                  </div>

                  {/* Accordion detail pane */}
                  <AnimatePresence mode="wait">
                    {selectedCartilhaItem !== null && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11px] text-slate-700 leading-relaxed text-left space-y-2"
                      >
                        <p className="font-semibold text-[#1A3C5A]">{cartilhaPreviews[selectedCartilhaItem].title}</p>
                        <p>{cartilhaPreviews[selectedCartilhaItem].desc}</p>
                        <div className="flex items-center gap-1 text-[#4A9B9B] font-bold">
                          <Check className="w-3 h-3" />
                          <span>Instrução: {cartilhaPreviews[selectedCartilhaItem].repetitions}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 italic">Dica Fisio: {cartilhaPreviews[selectedCartilhaItem].tip}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>

            </div>
          </div>

          {/* Action CTA Button strictly from copy */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-700 hover:scale-101 hover:shadow-lg text-white font-semibold text-sm py-4 px-8 rounded-lg outline-none cursor-pointer transition-all active:scale-99 uppercase tracking-wider inline-flex items-center gap-2"
              id="btn-action-solicitar-avaliacao"
            >
              <Calendar className="w-4 h-4" />
              Solicitar Avaliação Domiciliar
            </button>
          </div>

        </div>
      </section>

      {/* 6. PERGUNTAS FREQUENTES (FAQ com Schema Markup para SEO) */}
      <section id="duvidas-frequentes" data-section="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6">
          
          {/* FAQ Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#4A9B9B] bg-[#4A9B9B]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Perguntas e Respostas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A3C5A] tracking-tight">
              Dúvidas Frequentes
            </h2>
            <div className="w-16 h-1 bg-[#F2A900] mx-auto mt-4 rounded-full" />
          </div>

          {/* Accordion List containing exact copy */}
          <div className="space-y-4 text-left">
            
            {/* FAQ 1 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 font-bold text-[#1A3C5A]"
                aria-expanded={openFaq === 1}
                id="btn-faq-1"
                type="button"
              >
                <span>Como a fisioterapia pode ajudar pessoas que estão acamadas?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === 1 ? "rotate-180 text-[#4A9B9B]" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50 border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>
                        O atendimento especializado para pessoas acamadas é um dos pilares do meu trabalho. O foco é proporcionar conforto, prevenir complicações como úlceras por pressão e atrofias musculares e manter o máximo possível de funcionalidade e dignidade. Trabalho com um plano de cuidados que envolve não apenas exercícios adaptados, mas também o treinamento da família e dos cuidadores, garantindo que o cuidado seja contínuo, seguro e humanizado todos os dias.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 2 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 font-bold text-[#1A3C5A]"
                aria-expanded={openFaq === 2}
                id="btn-faq-2"
                type="button"
              >
                <span>A fisioterapia é realizada apenas na casa do paciente?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === 2 ? "rotate-180 text-[#4A9B9B]" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50 border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>
                        Meu atendimento é focado em levar reabilitação humanizada onde a pessoa idosa se sente mais confortável. Atendo em domicílio e em Instituições de Longa Permanência para Pessoas Idosas (ILPIs), levando todos os recursos e equipamentos necessários para a sessão. Além disso, ofereço a modalidade de teleatendimento (online) para garantir a continuidade do cuidado quando necessário.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 3 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 font-bold text-[#1A3C5A]"
                aria-expanded={openFaq === 3}
                id="btn-faq-3"
                type="button"
              >
                <span>Quais bairros de Recife você atende?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === 3 ? "rotate-180 text-[#4A9B9B]" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === 3 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50 border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>
                        Atendo em um raio de até 10km, cobrindo bairros como Boa Viagem, Pina, Setúbal, Imbiribeira, Ibura, Piedade, Candeias, Derby, Espinheiro, Madalena e Graças.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 4 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 font-bold text-[#1A3C5A]"
                aria-expanded={openFaq === 4}
                id="btn-faq-4"
                type="button"
              >
                <span>Você aceita plano de saúde/convênio?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === 4 ? "rotate-180 text-[#4A9B9B]" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === 4 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50 border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>
                        Opto por realizar atendimentos 100% particulares. Essa escolha é fundamental para que eu possa dedicar o tempo necessário a cada sessão, garantindo avaliações minuciosas e um plano de tratamento personalizado, totalmente focado nas necessidades e na dignidade de cada pessoa idosa, com a atenção que elas merecem.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 5 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 font-bold text-[#1A3C5A]"
                aria-expanded={openFaq === 5}
                id="btn-faq-5"
                type="button"
              >
                <span>Você realiza atendimento para pessoas idosas vivendo com Alzheimer, Doença de Parkinson e outras demências?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === 5 ? "rotate-180 text-[#4A9B9B]" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === 5 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50 border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>
                        Sim, possuo ampla experiência no acompanhamento de pessoas idosas vivendo com quadros demenciais, como Alzheimer e a Doença de Parkinson. Meu atendimento é conduzido de forma serena e personalizada, integrando a pessoa idosa como protagonista da sessão para garantir seu engajamento e bem-estar, mantendo sempre um diálogo aberto e próximo com os familiares em todo o processo.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 6 */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
              <button
                onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                className="w-full text-left px-6 py-5 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between gap-4 font-bold text-[#1A3C5A]"
                aria-expanded={openFaq === 6}
                id="btn-faq-6"
                type="button"
              >
                <span>Como a fisioterapia pode ajudar na qualidade de vida de pessoas acima dos 80 anos?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === 6 ? "rotate-180 text-[#4A9B9B]" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === 6 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50 border-t border-slate-100"
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>
                        Com certeza. A fisioterapia é fundamental nessa fase da vida, sendo uma das ferramentas mais eficazes para manter a autonomia e o bem-estar. O foco do meu trabalho com pessoas longevas é prevenir quedas, fortalecer a musculatura de forma segura e garantir que elas consigam realizar suas atividades do dia a dia com dignidade e confiança. Adaptamos cada exercício às necessidades individuais, respeitando sempre o ritmo e a história de vida de cada um.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Static helpful contact lead frame */}
          <div className="mt-12 p-8 bg-[#1A3C5A]/5 border border-[#1A3C5A]/10 rounded-2xl text-center space-y-4">
            <p className="font-bold text-[#1A3C5A]">Ainda ficou com alguma dúvida sobre o plano clínico?</p>
            <p className="text-xs text-slate-500">Mande uma mensagem direta para a Fisioterapeuta Michelle Santos sem compromisso algum.</p>
            <a
              href="https://wa.me/5581988141144?text=Olá%20Michelle!%20Tenho%20uma%20dúvida%20sobre%20as%20sessões%20domiciliares."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#4A9B9B] hover:text-[#1A3C5A] border-b border-[#4A9B9B] pb-0.5 hover:border-[#1A3C5A] transition-all"
            >
              Entre em contato diretamente comigo
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
        </>
      ) : currentPage === "sobre-mim" ? (
        <SobreMimPage 
          setCurrentPage={navigateTo}
          handleScrollToSection={handleScrollToSection}
          setIsBookingOpen={setIsBookingOpen}
          profileImage={profileImage}
        />
      ) : currentPage === "tratamentos" ? (
        <TratamentosPage 
          setCurrentPage={navigateTo}
          handleScrollToSection={handleScrollToSection}
          setIsBookingOpen={setIsBookingOpen}
        />
      ) : currentPage === "blog" ? (
        <BlogIndexPage
          onNavigate={navigateTo}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      ) : typeof currentPage === "string" && currentPage.startsWith("blog/") ? (
        <BlogPostPage
          slug={currentPage.replace("blog/", "") as BlogPostSlug}
          onNavigate={navigateTo}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      ) : (
        <ServiceDetailPage
          slug={currentPage as ServicePageSlug}
          onNavigate={navigateTo}
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      )}
      </main>

      {/* 7. RODAPÉ (Footer - Crucial para SEO Local) */}
      <footer id="contato" className="site-footer bg-[#9FCCC9] text-[#1A3C5A] pt-12 pb-0 relative overflow-hidden" itemScope itemType="https://schema.org/Physiotherapist">
        {/* Organic wave separator at the top of the footer - matches ARA8 style */}
        <div className="absolute top-0 left-0 right-0 h-[48px] sm:h-[80px] overflow-hidden -translate-y-[99%] pointer-events-none select-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
            <path d="M0,60 C320,130 640,-10 960,30 C1120,50 1280,100 1440,80 L1440,120 L0,120 Z" fill="#9FCCC9" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 pt-4">
            
            {/* Coluna 1: Marca e descrição */}
            <div className="text-left space-y-4">
              <div 
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => {
                  navigateTo("home");
                }}
              >
                <img 
                  src="https://i.postimg.cc/KYjgm4DW/Si-mbolo-Michelle-Santos-Fisioterapia-para-idosos-em-Recife.webp" 
                  alt="Logo Fisio Michelle Santos" 
                  className="h-10 w-auto object-contain transition-transform hover:scale-105 duration-300 mt-0.5 shrink-0"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <h3 className="font-display text-base sm:text-lg font-bold tracking-tight text-[#1A3C5A] leading-snug" itemProp="name">
                  Michelle Santos Fisioterapia para Pessoas Idosas em Recife
                </h3>
              </div>

              <p className="text-xs text-[#1A3C5A] leading-relaxed font-normal opacity-95" itemProp="description">
                Fisioterapia gerontológica especializada em Recife: reabilitação neurofuncional, pós-operatórios ortopédicos e prevenção de quedas, com protocolos humanizados e científicos para garantir segurança e autonomia no dia a dia da pessoa idosa.
              </p>

              <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 text-[11px] font-bold text-[#1A3C5A] pt-1">
                <span className="whitespace-nowrap bg-[#1A3C5A]/10 px-3 py-1.5 rounded-lg border border-[#1A3C5A]/15 shadow-2xs inline-flex items-center justify-center">
                  CREFITO: 3/276580-F
                </span>
                <span aria-hidden="true" className="opacity-40">|</span>
                <span className="whitespace-nowrap bg-[#1A3C5A]/10 px-3 py-1.5 rounded-lg border border-[#1A3C5A]/15 shadow-2xs inline-flex items-center justify-center">
                  RQE: 1150240325
                </span>
              </div>
            </div>

            {/* Coluna 2: Tratamentos Especializados */}
            <div className="text-left space-y-3">
              <h3 className="font-display text-[#1A3C5A] font-bold text-xs uppercase tracking-widest opacity-85">
                Tratamentos
              </h3>
              <ul className="space-y-2 text-xs">
                {dedicatedServiceLinks.map((srv) => (
                  <li key={srv.slug}>
                    <a
                      href={srv.url}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(srv.slug);
                      }}
                      className="text-[#1A3C5A] hover:underline font-medium block leading-snug opacity-90 hover:opacity-100 transition-opacity"
                    >
                      {srv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Links Rápidos & Área de Atendimento */}
            <div className="text-left space-y-4">
              <div>
                <h3 className="font-display text-[#1A3C5A] font-bold text-xs uppercase tracking-widest opacity-85 mb-2">
                  Links Rápidos
                </h3>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <a
                      href="https://www.fisiomichellesantos.com.br/#depoimentos"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnchorNavigate("depoimentos");
                      }}
                      className="text-[#1A3C5A] hover:underline font-medium block leading-snug opacity-90 hover:opacity-100 transition-opacity"
                    >
                      Depoimentos
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.fisiomichellesantos.com.br/#duvidas-frequentes"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnchorNavigate("duvidas-frequentes");
                      }}
                      className="text-[#1A3C5A] hover:underline font-medium block leading-snug opacity-90 hover:opacity-100 transition-opacity"
                    >
                      Dúvidas Frequentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.fisiomichellesantos.com.br/#contato"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnchorNavigate("contato");
                      }}
                      className="text-[#1A3C5A] hover:underline font-medium block leading-snug opacity-90 hover:opacity-100 transition-opacity"
                    >
                      Contato
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sobre"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("sobre-mim");
                      }}
                      className="text-[#1A3C5A] hover:underline font-medium block leading-snug opacity-90 hover:opacity-100 transition-opacity"
                    >
                      Sobre Mim
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("blog");
                      }}
                      className="text-[#1A3C5A] hover:underline font-bold block leading-snug opacity-90 hover:opacity-100 transition-opacity flex items-center gap-1"
                    >
                      <span>Blog & Artigos</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-2 border-t border-[#1A3C5A]/15 space-y-1">
                <h3 className="font-display text-[#1A3C5A] font-bold text-xs uppercase tracking-widest opacity-85">
                  Área de Atendimento
                </h3>
                <p className="text-xs text-[#1A3C5A] leading-relaxed font-normal opacity-95">
                  Boa Viagem, Pina, Setúbal, Imbiribeira, Ibura, Piedade, Candeias, Derby, Espinheiro, Madalena e Graças (Recife - PE)
                </p>
              </div>
            </div>

            {/* Coluna 4: Horários e contato */}
            <div className="text-left space-y-4">
              <h3 className="font-display text-[#1A3C5A] font-bold text-xs uppercase tracking-widest opacity-85">
                Localização &amp; Contato
              </h3>
              
              <address className="not-italic text-xs text-[#1A3C5A] leading-relaxed" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <a 
                  href="https://maps.app.goo.gl/Nfu4h66ff46oZyz9A"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[#1A3C5A] hover:underline transition-all group"
                  title="Abrir localização no Google Maps"
                >
                  <MapPin className="w-5 h-5 text-[#1A3C5A] shrink-0 mt-0.5 opacity-90 group-hover:opacity-100" />
                  <div>
                    <span itemProp="streetAddress">Edifício Studio Portal dos Corais, R. França Pereira, 115, Apt 2102</span><br />
                    <span itemProp="addressLocality">Boa Viagem, Recife</span> - <span itemProp="addressRegion">PE</span>,{" "}
                    <span itemProp="postalCode">CEP 51111-150</span>
                  </div>
                </a>
              </address>

              <div className="flex items-start gap-2.5 text-xs text-[#1A3C5A]">
                <Clock className="w-5 h-5 text-[#1A3C5A] shrink-0 mt-0.5 opacity-90" />
                <div>
                  <strong className="block text-xs font-bold">Horário de Atendimento:</strong>
                  <p className="text-xs text-[#1A3C5A] mt-0.5 leading-relaxed" itemProp="openingHours" content="Mo-Th 08:00-18:00 Fr 08:00-13:00">
                    Segunda a Quinta (08h às 18h)<br />
                    Sexta (08h às 13h)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#1A3C5A]">
                <Phone className="w-5 h-5 text-[#1A3C5A] shrink-0 mt-0.5 opacity-90" />
                <div>
                  <strong className="block text-xs font-bold">WhatsApp:</strong>
                  <a 
                    href="https://wa.me/5581988141144" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline font-mono text-[#1A3C5A] font-bold text-xs block mt-0.5"
                  >
                    (81) 98814-1144
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#1A3C5A] pt-1">
                <a
                  href="https://www.instagram.com/fisiomichellesantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 inline-flex shrink-0 mt-0.5"
                  title="Instagram Michelle Santos"
                >
                  <img 
                    src="https://i.postimg.cc/G2fbCmmJ/logo-insta.webp"
                    alt="Instagram Logo"
                    className="w-6 h-6 object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </a>
                <div>
                  <strong className="block text-xs font-bold">Instagram:</strong>
                  <a 
                    href="https://www.instagram.com/fisiomichellesantos" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline text-[#1A3C5A] font-medium text-xs block mt-0.5"
                  >
                    @fisiomichellesantos
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Barra inferior */}
        <div className="bg-white/30 border-t border-[#1A3C5A]/10 py-5">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left text-[#1A3C5A] text-xs font-semibold">
            <p>
              © {currentYear} Michelle Santos Fisioterapia para Pessoas Idosas em Recife. Todos os direitos reservados.
            </p>
          </div>
        </div>

      </footer>

      {/* SERVICE MODAL POPUP (Overlay matching #1A3C5A at 72% opacity with blur) */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C5A]/72 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            id="service-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 text-slate-800 text-left"
            >
              {/* Header colored banner */}
              <div className="bg-[#1A3C5A] text-white p-6 relative">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Fechar janela"
                  type="button"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3.5 mb-1">
                  <div className="bg-[#F2A900]/20 text-[#F2A900] p-1.5 rounded-lg">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4A9B9B]">Tratamento Domiciliar</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mt-1">
                  {selectedService.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Visão Geral</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">{selectedService.fullDesc}</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Principais Benefícios do Tratamento</h4>
                  <ul className="space-y-2 text-xs">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration Metadata */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-100 py-4 text-xs font-medium bg-slate-50 p-4 rounded-xl">
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px] tracking-wider mb-0.5">Duração Média</span>
                    <span className="text-[#1A3C5A] font-bold flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#4A9B9B]" />
                      {selectedService.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px] tracking-wider mb-0.5">Frequência Recomendada</span>
                    <span className="text-[#1A3C5A] font-bold flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#4A9B9B]" />
                      {selectedService.frequency}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA footer buttons */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={`https://wa.me/5581988141144?text=Olá%20Michelle!%20Gostaria%20de%20conversar%20sobre%20as%20sessões%20de%20*${encodeURIComponent(selectedService.title)}*`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-center text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all focus:ring-2 focus:ring-emerald-200"
                >
                  <Phone className="w-4 h-4" />
                  Agendar via WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setIsBookingOpen(true);
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm py-3 px-4 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-slate-200 border border-slate-200"
                >
                  Solicitar Avaliação
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DYNAMIC APPOINTMENT CALCULATOR & BOOKING MODAL */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3C5A]/72 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            id="booking-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 text-slate-800 text-left"
            >
              {/* Header */}
              <div className="bg-[#1A3C5A] text-white p-6 relative">
                <button
                  onClick={() => setIsBookingOpen(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Fechar formulário"
                  type="button"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3.5 mb-1">
                  <div className="bg-[#F2A900]/20 text-[#F2A900] p-1.5 rounded-lg">
                    <Calendar className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9FCCC9]">Recife • Consulta domiciliar</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight mt-1">
                  Agendar Avaliação Domiciliar
                </h3>
              </div>

              {/* Form Content */}
              <form onSubmit={handleAppointmentSubmit} className="p-6 space-y-4">
                
                {formSubmittedMsg ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border border-emerald-100">
                      <Check className="w-8 h-8" />
                    </div>
                    <p className="font-bold text-[#1A3C5A] text-lg">Informações Preparadas!</p>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Estamos abrindo o WhatsApp da Fisio Michelle com as informações do idoso pré-preenchidas para dar agilidade total ao processo.
                    </p>
                    <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mt-4" />
                  </div>
                ) : (
                  <>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      Preencha abaixo os dados básicos da pessoa idosa que receberá o (necessita) de atendimento para gerar um encaminhamento clínico rápido diretamente à Fisioterapeuta Michelle Santos.
                    </p>
                    
                    <div>
                      <label className="block text-xs font-bold text-[#1A3C5A] uppercase tracking-wider mb-1.5">
                        Nome Completo da Pessoa Idosa
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Maria José da Silva"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1A3C5A] uppercase tracking-wider mb-1.5">
                        Nome do Responsável
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Seu nome (filho, neto, cuidador...)"
                        value={responsibleName}
                        onChange={(e) => setResponsibleName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1A3C5A] uppercase tracking-wider mb-1.5">
                        WhatsApp de Contato
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (81) 98814-1144"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#1A3C5A] uppercase tracking-wider mb-1.5">
                          Idade aproximada
                        </label>
                        <input
                          type="number"
                          required
                          placeholder="Ex: 78"
                          value={patientAge}
                          onChange={(e) => setPatientAge(e.target.value)}
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#1A3C5A] uppercase tracking-wider mb-1.5">
                          Bairro em Recife
                        </label>
                        <select
                          value={patientBairro}
                          onChange={(e) => setPatientBairro(e.target.value)}
                          required
                          className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B]"
                        >
                          <option value="">Selecione um...</option>
                          {coveredBairros.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                          <option value="Outro">Outro bairro longe</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1A3C5A] uppercase tracking-wider mb-1.5">
                        Queixa principal ou Condição Clínica
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Ex: Teve uma queda recente e apresenta insegurança ao caminhar / Cirurgia de prótese de joelho há 15 dias..."
                        value={patientCondition}
                        onChange={(e) => setPatientCondition(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4A9B9B] focus:ring-1 focus:ring-[#4A9B9B]"
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setIsBookingOpen(false)}
                        className="px-4 py-2 text-xs text-slate-500 hover:text-slate-800 transition-colors font-semibold"
                      >
                        Cancelar
                      </button>
                      
                      <button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wide px-5 py-3 rounded-lg shadow-sm font-mono flex items-center gap-2 uppercase active:scale-98 transition-all"
                      >
                        <Phone className="w-4 h-4" />
                        Avançar no WhatsApp
                      </button>
                    </div>
                  </>
                )}

              </form>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
