import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  Phone, 
  CheckCircle2, 
  HelpCircle, 
  UserCheck, 
  Sparkles,
  Share2,
  BookOpen
} from "lucide-react";
import { BlogPostData, BlogPostSlug, blogPostsData, blogPostsList } from "./blogData";

interface BlogPostPageProps {
  slug: BlogPostSlug;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export function BlogPostPage({ slug, onNavigate, onOpenBooking }: BlogPostPageProps) {
  const post: BlogPostData = blogPostsData[slug];

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.metaDescription);
      }

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", post.canonical);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute("content", post.metaTitle);
      }

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute("content", post.canonical);
      }

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute("content", post.metaDescription);
      }

      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) {
        twTitle.setAttribute("content", post.metaTitle);
      }

      const twUrl = document.querySelector('meta[property="twitter:url"]');
      if (twUrl) {
        twUrl.setAttribute("content", post.canonical);
      }

      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) {
        twDesc.setAttribute("content", post.metaDescription);
      }

      // Schema script injection for BlogPosting
      const scriptId = `json-ld-blog-${slug}`;
      let existingScript = document.getElementById(scriptId);
      if (!existingScript) {
        existingScript = document.createElement("script");
        existingScript.setAttribute("type", "application/ld+json");
        existingScript.setAttribute("id", scriptId);
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(post.schema);

      return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Artigo não encontrado</h1>
        <button 
          onClick={() => onNavigate("blog")}
          className="bg-[#1A3C5A] text-white px-6 py-2.5 rounded-lg"
        >
          Voltar para o Blog
        </button>
      </div>
    );
  }

  // Filter other articles for recommendations
  const otherPosts = blogPostsList.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="pt-24 sm:pt-28 pb-20 bg-[#F5F7FA] min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button 
            onClick={() => onNavigate("home")} 
            className="hover:text-[#1A3C5A] transition-colors"
          >
            Início
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button 
            onClick={() => onNavigate("blog")} 
            className="hover:text-[#1A3C5A] transition-colors"
          >
            Blog
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#1A3C5A] font-semibold truncate max-w-xs sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* MAIN ARTICLE CARD */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-100 shadow-sm mb-12">
          
          {/* Post Header */}
          <header className="mb-8 pb-8 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4A9B9B] uppercase tracking-wider mb-3">
              <span className="bg-[#4A9B9B]/10 px-2.5 py-1 rounded-md">
                Guia Especializado
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-500 normal-case">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A3C5A] tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1A3C5A]/10 flex items-center justify-center text-[#1A3C5A] font-bold text-xs">
                  MS
                </div>
                <div>
                  <span className="font-semibold text-slate-700 block">Por Fisio Michelle Santos</span>
                  <span className="text-[11px] text-slate-400">Especialista em Gerontologia ({post.author.crefito})</span>
                </div>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="text-slate-500">
                {post.updatedDate}
              </span>
            </div>
          </header>

          {/* Post Intro / Lead Box */}
          <section className="bg-slate-50 border-l-4 border-[#4A9B9B] p-5 sm:p-6 rounded-r-2xl mb-10 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>{post.introText}</p>
          </section>

          {/* Post Body Sections */}
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.h2 && (
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1A3C5A] tracking-tight pt-2">
                    {section.h2}
                  </h2>
                )}

                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="space-y-2.5 my-4 pl-0 list-none">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-3 text-base sm:text-lg text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-[#4A9B9B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.afterText && (
                  <p className="text-base sm:text-lg leading-relaxed text-slate-600 pt-1">
                    {section.afterText}
                  </p>
                )}

                {/* Subsections with H3 (e.g. for FAQ) */}
                {section.subsections && (
                  <div className="space-y-6 pt-3">
                    {section.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="bg-slate-50/70 p-5 rounded-xl border border-slate-100">
                        <h3 className="text-base sm:text-lg font-bold text-[#1A3C5A] mb-2 flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#4A9B9B] shrink-0" />
                          {sub.h3}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-6">
                          {sub.paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Referências bibliográficas */}
          {post.references && post.references.length > 0 && (
            <section aria-label="Referências bibliográficas" className="mt-12 pt-6 border-t border-slate-200">
              <h2 className="text-base sm:text-lg font-bold text-[#1A3C5A] mb-3">Referências bibliográficas</h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-500 leading-relaxed">
                {post.references.map((ref, rIdx) => (
                  <li key={rIdx}>{ref}</li>
                ))}
              </ol>
            </section>
          )}

          {/* Related Service Link Box */}
          {post.relatedService && (
            <div className="mt-12 p-6 sm:p-8 bg-[#1A3C5A]/5 border border-[#1A3C5A]/15 rounded-2xl">
              <p className="text-sm sm:text-base font-semibold text-[#1A3C5A] mb-3">
                {post.relatedService.text}
              </p>
              <a
                href={post.relatedService.url}
                onClick={(e) => {
                  e.preventDefault();
                  // Extract slug from url
                  const cleanSlug = post.relatedService!.url.replace(/^\/|\/$/g, "");
                  onNavigate(cleanSlug);
                }}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#4A9B9B] hover:text-[#1A3C5A] transition-colors underline underline-offset-4"
              >
                <span>{post.relatedService.linkText}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Author Box */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#1A3C5A] text-white flex items-center justify-center font-bold text-lg shrink-0">
              MS
            </div>
            <div>
              <h3 className="font-bold text-[#1A3C5A] text-base sm:text-lg">
                Fisio Michelle Santos
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                Fisioterapeuta Especialista em Gerontologia pelo Instituto Israelita Albert Einstein e SBGG. Atendimento domiciliar humanizado e individualizado para pessoas idosas em Recife.
              </p>
            </div>
          </div>
        </article>

        {/* IN-POST WHATSAPP CTA BOX */}
        <section className="bg-gradient-to-br from-[#1A3C5A] to-[#132c42] rounded-3xl p-8 sm:p-10 text-white shadow-md text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-3">
            Atendimento Domiciliar em Recife
          </span>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Gostaria de agendar uma avaliação para seu familiar?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Atendimento em Boa Viagem, Pina, Piedade, Setúbal e principais bairros de Recife, com todo o suporte e plano terapêutico individualizado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Li%20o%20artigo%20sobre%20${encodeURIComponent(post.title)}%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              Falar com a Dra. Michelle no WhatsApp
            </a>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl border border-white/20 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Solicitar Avaliação
            </button>
          </div>
        </section>

        {/* OTHER ARTICLES GRID */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#1A3C5A]">
              Outros Artigos Recomendados
            </h2>
            <button
              onClick={() => onNavigate("blog")}
              className="text-xs font-bold text-[#4A9B9B] hover:text-[#1A3C5A] flex items-center gap-1 transition-colors"
            >
              Ver todos os artigos
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherPosts.map((other) => (
              <a
                key={other.slug}
                href={other.url}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`blog/${other.slug}`);
                }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1 block no-underline"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#4A9B9B] block mb-1">
                    {other.readTime}
                  </span>
                  <h3 className="font-bold text-[#1A3C5A] group-hover:text-[#4A9B9B] transition-colors text-sm line-clamp-2 leading-snug">
                    {other.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-[#4A9B9B]">
                  <span>Ler artigo</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}
