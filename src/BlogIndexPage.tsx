import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  ChevronRight, 
  Clock, 
  ArrowRight, 
  Phone, 
  Calendar,
  Sparkles,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { blogPostsList, BlogPostData } from "./blogData";

interface BlogIndexPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export function BlogIndexPage({ onNavigate, onOpenBooking }: BlogIndexPageProps) {
  useEffect(() => {
    const title = "Blog | Fisioterapia para Pessoas Idosas em Recife";
    const description = "Artigos e guias sobre fisioterapia para pessoas idosas: prevenção de quedas, cuidados pós-AVC, Pilates, respiração e mais. Conteúdo confiável para cuidar de quem você ama em Recife.";
    const canonical = "https://www.fisiomichellesantos.com.br/blog/";

    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
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
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="pt-24 sm:pt-28 pb-20 bg-[#F5F7FA] min-h-screen"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button 
            onClick={() => onNavigate("home")} 
            className="hover:text-[#1A3C5A] transition-colors"
          >
            Início
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#1A3C5A] font-semibold">Blog & Artigos</span>
        </nav>

        {/* HERO SECTION */}
        <header className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -z-0 w-96 h-96 bg-[#4A9B9B]/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A3C5A]/10 text-[#1A3C5A] text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#4A9B9B]" />
              Conhecimento & Orientações Práticas
            </span>
            
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#1A3C5A] tracking-tight leading-tight mb-4">
              Blog de Fisioterapia para Pessoas Idosas
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Guias práticos e confiáveis para ajudar você a cuidar de quem você ama: prevenção de quedas, reabilitação, Pilates, respiração e muito mais. Conteúdo escrito pela Fisio Michelle Santos, Especialista em Gerontologia.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-500 flex-wrap">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#4A9B9B]" />
                Evidências científicas
              </span>
              <span className="flex items-center gap-1">
                <UserCheck className="w-4 h-4 text-[#4A9B9B]" />
                Linguagem clara para famílias
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#F2A900]" />
                Atualizado em novembro de 2026
              </span>
            </div>
          </div>
        </header>

        {/* BLOG GRID SECTION */}
        <section aria-label="Lista de Artigos" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C5A]">
              Artigos Recentes e Guias para a Família
            </h2>
            <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              {blogPostsList.length} artigos publicados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPostsList.map((post: BlogPostData, index: number) => {
              const articlePageKey = `blog/${post.slug}`;

              return (
                <article 
                  key={post.slug}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  id={`article-card-${post.slug}`}
                >
                  <div>
                    {/* Badge & Read time */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#4A9B9B]/10 text-[#4A9B9B] font-bold">
                        {index === 0 ? "Artigo Destaque" : "Guia Prático"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-[#1A3C5A] group-hover:text-[#4A9B9B] transition-colors leading-snug mb-3">
                      <a 
                        href={post.url}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(articlePageKey);
                        }}
                        className="hover:underline focus:outline-none"
                      >
                        {post.title}
                      </a>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={post.url}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(articlePageKey);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4A9B9B] group-hover:text-[#1A3C5A] transition-colors"
                    >
                      <span>Ler artigo completo</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <span className="text-[11px] text-slate-400">
                      {post.updatedDate}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* BLOG CTA SECTION */}
        <section className="bg-gradient-to-br from-[#1A3C5A] to-[#132c42] rounded-3xl p-8 sm:p-12 text-white shadow-lg text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#4A9B9B]/20 rounded-full filter blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider">
              Atendimento Domiciliar em Recife
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Precisa de ajuda individualizada?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              A Fisio Michelle Santos atende em domicílio em Recife, com planos sob medida para a realidade da sua família.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Vim%20pelo%20blog%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20meu%20familiar."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm focus:ring-4 focus:ring-[#25D366]/30"
              >
                <Phone className="w-4 h-4 fill-current" />
                Falar no WhatsApp
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/20 transition-all text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Solicitar Avaliação
              </button>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
