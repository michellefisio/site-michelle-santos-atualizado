import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const { renderRoute } = await import(pathToFileURL(path.join(root, ".prerender/ssr-entry.js")).href);
const siteUrl = "https://www.fisiomichellesantos.com.br";

const pages = [
  ["/", "Fisioterapia para Pessoas Idosas em Recife", "Fisioterapia domiciliar especializada para idosos em Recife. Atendimento personalizado para reabilitação física, prevenção de quedas, gerontologia e melhora da mobilidade no conforto do lar."],
  ["/sobre/", "Sobre a Fisioterapeuta | Fisioterapia para Pessoas Idosas em Recife", "Conheça Michelle Santos, fisioterapeuta especialista em gerontologia, com atendimento domiciliar humanizado para pessoas idosas em Recife."],
  ["/tratamentos/", "Tratamentos Especializados | Fisioterapia para Pessoas Idosas em Recife", "Conheça os tratamentos de fisioterapia domiciliar para pessoas idosas em Recife: gerontologia, prevenção de quedas, reabilitação ortopédica, neurofuncional, Pilates e respiratória."],
  ["/fisioterapia-em-gerontologia-recife/", "Fisioterapia em Gerontologia em Recife | Michelle Santos", "Fisioterapia em gerontologia domiciliar em Recife para preservar autonomia, mobilidade e qualidade de vida de pessoas idosas."],
  ["/prevencao-de-quedas-em-idosos-recife/", "Prevenção de Quedas em Idosos em Recife | Michelle Santos", "Avaliação e fisioterapia domiciliar para prevenção de quedas e reabilitação após quedas em pessoas idosas em Recife."],
  ["/reabilitacao-ortopedica-e-pos-operatoria-recife/", "Reabilitação Ortopédica e Pós-Operatória em Recife | Michelle Santos", "Reabilitação ortopédica e pós-operatória domiciliar em Recife para uma recuperação segura após cirurgias, fraturas e próteses."],
  ["/fisioterapia-neurofuncional-recife/", "Fisioterapia Neurofuncional em Recife | Michelle Santos", "Fisioterapia neurofuncional domiciliar em Recife para pessoas idosas com sequelas de AVC, Parkinson e quadros demenciais."],
  ["/pilates-adaptado-para-idosos-recife/", "Pilates Adaptado para Pessoas Idosas em Recife | Michelle Santos", "Pilates adaptado e supervisionado para pessoas idosas em Recife, com foco em força, equilíbrio, mobilidade e segurança."],
  ["/fisioterapia-respiratoria-recife/", "Fisioterapia Respiratória em Recife | Michelle Santos", "Fisioterapia respiratória domiciliar para pessoas idosas em Recife, com foco em higiene brônquica, expansão pulmonar e condicionamento."],
  ["/blog/", "Blog | Fisioterapia para Pessoas Idosas em Recife", "Artigos e guias sobre fisioterapia para pessoas idosas: prevenção de quedas, cuidados pós-AVC, Pilates, respiração e mais."],
  ["/blog/como-prevenir-quedas-em-idosos/", "Como Prevenir Quedas em Idosos | Fisioterapia Michelle Santos", "Orientações práticas para reduzir o risco de quedas em pessoas idosas e melhorar segurança, equilíbrio e autonomia."],
  ["/blog/fisioterapia-pos-avc-em-casa/", "Fisioterapia Pós-AVC em Casa | Fisioterapia Michelle Santos", "Entenda como a fisioterapia domiciliar pode apoiar a recuperação funcional de pessoas idosas após um AVC."],
  ["/blog/quando-procurar-fisioterapia-geriatrica/", "Quando Procurar Fisioterapia Geriátrica? | Michelle Santos", "Veja sinais de que uma pessoa idosa pode se beneficiar de avaliação e fisioterapia geriátrica domiciliar."],
  ["/blog/beneficios-do-pilates-para-idosos/", "Benefícios do Pilates para Pessoas Idosas | Michelle Santos", "Conheça possíveis benefícios do Pilates adaptado para força, mobilidade, equilíbrio e autonomia na velhice."],
  ["/blog/cuidados-com-idosos-acamados/", "Cuidados com Pessoas Idosas Acamadas | Michelle Santos", "Orientações gerais sobre mobilidade, conforto e prevenção de complicações para pessoas idosas acamadas."],
  ["/blog/fisioterapia-respiratoria-em-idosos/", "Fisioterapia Respiratória em Pessoas Idosas | Michelle Santos", "Entenda quando a fisioterapia respiratória pode apoiar pessoas idosas com limitações respiratórias."],
  ["/blog/perda-de-mobilidade-em-idosos-primeiros-sinais/", "Primeiros Sinais de Perda de Mobilidade em Idosos | Michelle Santos", "Sua mãe demora para levantar? Seu pai encurtou os passos? Veja os sinais de perda de mobilidade em idosos e quando buscar fisioterapia domiciliar em Recife."],
  ["/blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos/", "Reabilitação em Casa Após a Alta Hospitalar | Michelle Santos", "Seu familiar recebeu alta após cirurgia, fratura ou AVC? Entenda por que a reabilitação dentro de casa pode ser mais segura e como funciona em Recife."],
  ["/blog/familia-na-reabilitacao-domiciliar-do-idoso/", "Família na Reabilitação Domiciliar do Idoso | Michelle Santos", "O fisioterapeuta passa cerca de 3 horas por semana com o idoso. Veja como a família pode apoiar a reabilitação nas outras 165 horas, com segurança."],
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function withSeo(html, title, description, pathname) {
  const canonical = `${siteUrl}${pathname}`;
  return html
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/i, `$1${escapeHtml(description)}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/>)/i, `$1${canonical}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/>)/i, `$1${canonical}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/>)/i, `$1${escapeHtml(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/>)/i, `$1${escapeHtml(description)}$2`)
    .replace(/(<meta\s+property="twitter:url"\s+content=")[^"]*("\s*\/>)/i, `$1${canonical}$2`)
    .replace(/(<meta\s+property="twitter:title"\s+content=")[^"]*("\s*\/>)/i, `$1${escapeHtml(title)}$2`)
    .replace(/(<meta\s+property="twitter:description"\s+content=")[^"]*("\s*\/>)/i, `$1${escapeHtml(description)}$2`);
}

for (const [pathname, title, description] of pages) {
  const content = renderRoute(pathname);
  const html = withSeo(template.replace('<div id="root"></div>', `<div id="root">${content}</div>`), title, description, pathname);
  const outputDir = path.join(dist, pathname === "/" ? "" : pathname);
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, "index.html"), html);
}

await fs.rm(path.join(root, ".prerender"), { recursive: true, force: true });
console.log(`Prerendered ${pages.length} routes.`);
