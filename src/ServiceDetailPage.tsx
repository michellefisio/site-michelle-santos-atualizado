import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ArrowLeft
} from "lucide-react";
import { ServicePageData, ServicePageSlug, servicePagesData } from "./servicePagesData";

interface ServiceDetailPageProps {
  slug: ServicePageSlug;
  onNavigate: (slug: ServicePageSlug | "home" | "sobre-mim" | "tratamentos") => void;
  onOpenBooking: () => void;
}

export function ServiceDetailPage({ slug, onNavigate, onOpenBooking }: ServiceDetailPageProps) {
  const data: ServicePageData = servicePagesData[slug];

  useEffect(() => {
    // Dynamic metadata update
    if (data) {
      document.title = data.metaTitle;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", data.metaDescription);
      }

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", data.canonical);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", data.metaTitle);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", data.canonical);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", data.metaDescription);
      }

      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) {
        twTitle.setAttribute("content", data.metaTitle);
      }

      const twUrl = document.querySelector('meta[property="twitter:url"]');
      if (twUrl) {
        twUrl.setAttribute("content", data.canonical);
      }

      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) {
        twDesc.setAttribute("content", data.metaDescription);
      }

      // Schema script injection
      const scriptId = `json-ld-service-${slug}`;
      let existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        existingScript = document.createElement("script");
        existingScript.setAttribute("type", "application/ld+json");
        existingScript.setAttribute("id", scriptId);
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(data.schema);

      return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [slug, data]);

  if (!data) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Página de tratamento não encontrada</h1>
        <button 
          onClick={() => onNavigate("tratamentos")}
          className="bg-[#1A3C5A] text-white px-6 py-2.5 rounded-lg"
        >
          Ver todos os tratamentos
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-24 sm:pt-28 pb-20 bg-[#F5F7FA] min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button 
            onClick={() => onNavigate("home")} 
            className="hover:text-[#1A3C5A] transition-colors flex items-center gap-1"
          >
            Início
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button 
            onClick={() => onNavigate("tratamentos")} 
            className="hover:text-[#1A3C5A] transition-colors"
          >
            Tratamentos Especializados
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#1A3C5A] font-semibold truncate max-w-[200px] sm:max-w-none">
            {data.h1.split(":")[0]}
          </span>
        </nav>

        {/* HERO SECTION */}
        <section className="hero bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm mb-8 relative overflow-hidden">
          {/* Subtle Decorative Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4A9B9B]/10 to-transparent rounded-bl-full pointer-events-none -mr-16 -mt-16" />
          
          <div className="relative z-10">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#4A9B9B]/10 border border-[#4A9B9B]/20 text-[#1A3C5A] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#4A9B9B]" />
              Fisioterapia Domiciliar Especializada em Recife
            </div>

            {/* Single Main H1 Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1A3C5A] tracking-tight leading-tight mb-6 font-display">
              {data.h1}
            </h1>

            {/* Answer Box Callout */}
            <div className="answer-box bg-slate-50 border-l-4 border-[#4A9B9B] p-5 sm:p-6 rounded-r-2xl mb-6 shadow-xs">
              <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                {data.answerBox}
              </p>
            </div>

            {/* Introductory text */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              {data.introText}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={data.heroCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 px-7 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base text-center transform hover:-translate-y-0.5"
                id={`cta-whatsapp-hero-${slug}`}
              >
                <Phone className="w-5 h-5 fill-current shrink-0" />
                <span>{data.heroCtaText}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-[#1A3C5A] font-semibold py-3.5 px-6 rounded-xl border border-slate-200 transition-all duration-200 text-sm sm:text-base text-center"
                id={`cta-booking-hero-${slug}`}
              >
                <Calendar className="w-4 h-4 text-[#4A9B9B] shrink-0" />
                <span>Formulário de Pré-Agendamento</span>
              </button>
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS / H2 QUESTIONS */}
        <div className="space-y-6 mb-8">
          {data.sections.map((section, idx) => (
            <section 
              key={idx} 
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs hover:shadow-sm transition-shadow duration-200"
            >
              {/* Question Heading H2 */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-4 flex items-start gap-3">
                <span className="w-1.5 h-6 bg-[#4A9B9B] rounded-full inline-block mt-0.5 shrink-0" aria-hidden="true"></span>
                <span>{section.h2}</span>
              </h2>

              {/* Paragraphs */}
              {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 text-base leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}

              {/* List of items if available */}
              {section.list && (
                <ul className="space-y-3 my-4">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-slate-700 text-base leading-relaxed">
                      {section.h2.includes("bairros") ? (
                        <MapPin className="w-5 h-5 text-[#4A9B9B] shrink-0 mt-0.5 fill-[#4A9B9B]/10" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-[#4A9B9B] shrink-0 mt-0.5" />
                      )}
                      <span className="font-medium text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* After list paragraph */}
              {section.afterText && (
                <p className="text-slate-700 text-base leading-relaxed mt-4">
                  {section.afterText}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* OUTROS TRATAMENTOS ESPECIALIZADOS EM RECIFE */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] mb-2 flex items-start gap-3">
            <span className="w-1.5 h-6 bg-[#4A9B9B] rounded-full inline-block mt-0.5 shrink-0" aria-hidden="true"></span>
            <span>Outros tratamentos especializados em Recife</span>
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Conheça outros protocolos de fisioterapia domiciliar para idosos com atendimento em Boa Viagem e região:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {data.otherTreatments.map((treatment, oIdx) => (
              <li key={oIdx}>
                <a
                  href={treatment.url}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(treatment.slug);
                  }}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-[#1A3C5A]/5 hover:border-[#4A9B9B]/40 transition-all duration-200 group h-full"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#4A9B9B] group-hover:scale-125 transition-transform" />
                    <span className="font-medium text-slate-800 group-hover:text-[#1A3C5A] text-sm leading-snug">
                      {treatment.title}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1A3C5A] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* COMO AGENDAR UMA AVALIAÇÃO? */}
        <section className="bg-gradient-to-br from-[#1A3C5A] to-[#122b40] rounded-3xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-[#4A9B9B] mb-4">
              <ShieldCheck className="w-4 h-4" />
              Atendimento Domiciliar Personalizado
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
              {data.booking.h2}
            </h2>
            
            <p className="text-slate-200 text-base leading-relaxed mb-8">
              {data.booking.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={data.booking.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all text-center text-sm sm:text-base transform hover:-translate-y-0.5"
                id={`cta-whatsapp-booking-${slug}`}
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>{data.booking.ctaText}</span>
              </a>

              <button
                onClick={() => onNavigate("tratamentos")}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/20 transition-colors text-sm sm:text-base text-center"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Ver Todos os Tratamentos</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
