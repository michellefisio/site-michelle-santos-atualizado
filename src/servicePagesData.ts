export type ServicePageSlug = 
  | "fisioterapia-em-gerontologia-recife"
  | "prevencao-de-quedas-em-idosos-recife"
  | "reabilitacao-ortopedica-e-pos-operatoria-recife"
  | "fisioterapia-neurofuncional-recife"
  | "pilates-adaptado-para-idosos-recife"
  | "fisioterapia-respiratoria-recife";

export interface ServicePageData {
  slug: ServicePageSlug;
  url: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  schema: Record<string, any>;
  h1: string;
  answerBox: string;
  introText: string;
  heroCtaText: string;
  heroCtaUrl: string;
  sections: {
    h2: string;
    paragraphs?: string[];
    list?: string[];
    afterText?: string;
  }[];
  otherTreatments: {
    title: string;
    url: string;
    slug: ServicePageSlug;
  }[];
  booking: {
    h2: string;
    paragraph: string;
    ctaText: string;
    ctaUrl: string;
  };
}

export const servicePagesData: Record<ServicePageSlug, ServicePageData> = {
  "fisioterapia-em-gerontologia-recife": {
    slug: "fisioterapia-em-gerontologia-recife",
    url: "/fisioterapia-em-gerontologia-recife/",
    metaTitle: "Fisioterapia em Gerontologia em Recife | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Fisioterapia em gerontologia domiciliar em Recife: devolva a autonomia e a qualidade de vida de quem você ama, no conforto do lar em Boa Viagem e região. WhatsApp: (81) 98814-1144.",
    canonical: "https://www.fisiomichellesantos.com.br/fisioterapia-em-gerontologia-recife/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fisioterapia em Gerontologia em Recife",
      "provider": {
        "@type": "Physiotherapist",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "url": "https://www.fisiomichellesantos.com.br/",
        "telephone": "+5581988141144",
        "areaServed": ["Boa Viagem", "Pina", "Setúbal", "Imbiribeira", "Ibura", "Piedade", "Candeias", "Derby", "Espinheiro", "Madalena", "Graças"]
      },
      "areaServed": {
        "@type": "City",
        "name": "Recife"
      }
    },
    h1: "Fisioterapia em Gerontologia em Recife: independência para quem você ama",
    answerBox: "A fisioterapia em gerontologia em Recife ajuda pessoas idosas a recuperar e manter a autonomia, prevenindo o declínio funcional. O atendimento domiciliar em Boa Viagem e região fortalece o corpo e a segurança, devolvendo qualidade de vida no conforto do lar, com plano individualizado e participação da família.",
    introText: "Envelhecer não precisa ser sinônimo de perder a independência, parar de fazer o que gosta ou viver com limitações. Se o seu pai, a sua mãe ou o seu avô está com dificuldade para realizar atividades simples do dia a dia, a fisioterapia em gerontologia é o caminho mais seguro para resgatar a qualidade de vida.",
    heroCtaText: "Agendar avaliação no WhatsApp",
    heroCtaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20gerontologia%20para%20meu%20familiar.",
    sections: [
      {
        h2: "Por que a pessoa idosa perde a independência?",
        paragraphs: [
          "O declínio funcional não acontece de uma hora para outra. Ele começa com pequenos sinais: dificuldade para levantar da cadeira, cansaço ao caminhar, medo de escadas, insegurança ao tomar banho. Quando a família percebe, a pessoa já deixou de fazer atividades que amava.",
          "O foco da fisioterapia em gerontologia é devolver a autonomia, manter o corpo forte e a mente segura, prevenindo o declínio funcional antes que ele aconteça. Quanto antes o acompanhamento começa, mais qualidade de vida."
        ]
      },
      {
        h2: "Como funciona a fisioterapia gerontológica domiciliar?",
        paragraphs: [
          "O cuidado humanizado chega diretamente no conforto da casa, sem o estresse e os riscos do deslocamento. Cada plano de tratamento é construído junto com o paciente e a família, respeitando o ritmo e as limitações de cada pessoa.",
          "Os exercícios são adaptados à realidade de quem está sendo tratado, com foco em força, equilíbrio, mobilidade e segurança, sempre baseados em evidências científicas e aplicados com muito carinho."
        ]
      },
      {
        h2: "Quais sinais indicam que é hora de buscar ajuda?",
        list: [
          "Dificuldade para levantar da cama ou da cadeira",
          "Cansaço excessivo em atividades simples",
          "Medo de cair ou insegurança ao andar",
          "Dependência crescente para banho, alimentação e vestir-se",
          "Quedas recentes ou quase quedas frequentes"
        ],
        afterText: "Se algum desses sinais aparece na rotina do seu familiar, uma avaliação especializada é o primeiro passo para preservar a autonomia."
      },
      {
        h2: "Em quais bairros de Recife o atendimento acontece?",
        list: [
          "Boa Viagem",
          "Pina",
          "Setúbal",
          "Imbiribeira",
          "Ibura",
          "Piedade",
          "Candeias",
          "Derby",
          "Espinheiro",
          "Madalena",
          "Graças"
        ]
      }
    ],
    otherTreatments: [
      { title: "Prevenção de Quedas e Reabilitação Pós-quedas", url: "/prevencao-de-quedas-em-idosos-recife/", slug: "prevencao-de-quedas-em-idosos-recife" },
      { title: "Reabilitação Ortopédica e Pós-Operatória", url: "/reabilitacao-ortopedica-e-pos-operatoria-recife/", slug: "reabilitacao-ortopedica-e-pos-operatoria-recife" },
      { title: "Fisioterapia Neurofuncional", url: "/fisioterapia-neurofuncional-recife/", slug: "fisioterapia-neurofuncional-recife" },
      { title: "Pilates Adaptado para Pessoas Idosas", url: "/pilates-adaptado-para-idosos-recife/", slug: "pilates-adaptado-para-idosos-recife" },
      { title: "Fisioterapia Respiratória", url: "/fisioterapia-respiratoria-recife/", slug: "fisioterapia-respiratoria-recife" }
    ],
    booking: {
      h2: "Como agendar uma avaliação?",
      paragraph: "Envie uma mensagem pelo WhatsApp (81) 98814-1144. A Fisio Michelle Santos, Especialista em Gerontologia pela ABRAFIGE e SBGG, responde pessoalmente e agenda a avaliação domiciliar no melhor horário para a família.",
      ctaText: "Falar no WhatsApp",
      ctaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20gerontologia%20para%20meu%20familiar."
    }
  },

  "prevencao-de-quedas-em-idosos-recife": {
    slug: "prevencao-de-quedas-em-idosos-recife",
    url: "/prevencao-de-quedas-em-idosos-recife/",
    metaTitle: "Prevenção de Quedas em Idosos em Recife | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Programa de prevenção de quedas e reabilitação pós-queda em idosos em Recife, no conforto do lar. Fortaleça o equilíbrio e devolva a segurança de quem você ama. WhatsApp: (81) 98814-1144.",
    canonical: "https://www.fisiomichellesantos.com.br/prevencao-de-quedas-em-idosos-recife/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Prevenção de Quedas em Idosos em Recife",
      "url": "https://www.fisiomichellesantos.com.br/prevencao-de-quedas-em-idosos-recife/",
      "description": "Programa de prevenção de quedas e reabilitação pós-queda em idosos em Recife, no conforto do lar. Fortaleça o equilíbrio e devolva a segurança de quem você ama.",
      "provider": {
        "@type": "Physiotherapist",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "url": "https://www.fisiomichellesantos.com.br/",
        "telephone": "+5581988141144",
        "areaServed": ["Boa Viagem", "Pina", "Setúbal", "Imbiribeira", "Ibura", "Piedade", "Candeias", "Derby", "Espinheiro", "Madalena", "Graças"]
      },
      "areaServed": {
        "@type": "City",
        "name": "Recife"
      }
    },
    h1: "Prevenção de Quedas em Idosos em Recife: proteja a independência de quem você ama",
    answerBox: "O programa de prevenção de quedas em idosos em Recife fortalece o equilíbrio, melhora a marcha e adapta o ambiente doméstico para evitar acidentes. Se a queda já aconteceu, a reabilitação devolve a força e a confiança para caminhar com segurança, sempre no conforto do lar.",
    introText: "O medo de cair não pode paralisar a vida de quem você ama. Uma queda pode mudar tudo, mas a prevenção muda o jogo. Trabalho com um programa específico e comprovado para fortalecer o equilíbrio, melhorar a marcha e adaptar o ambiente doméstico, evitando acidentes graves.",
    heroCtaText: "Agendar avaliação no WhatsApp",
    heroCtaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20preven%C3%A7%C3%A3o%20de%20quedas%20para%20meu%20familiar.",
    sections: [
      {
        h2: "Por que as quedas são perigosas para pessoas idosas?",
        paragraphs: [
          "Uma queda não é apenas um susto. Ela pode quebrar um osso, causar uma internação e, principalmente, instalar o medo: a pessoa idosa passa a evitar sair da cama, deixa de caminhar e abandona atividades que amava. Esse ciclo de imobilidade enfraquece os músculos e aumenta ainda mais o risco de novas quedas.",
          "Os sinais de alerta mais comuns: medo de andar, apoio constante em móveis, passos curtos e arrastados, queda recente, fraqueza nas pernas e uso de medicamentos que afetam o equilíbrio."
        ]
      },
      {
        h2: "Como funciona o programa de prevenção de quedas?",
        paragraphs: [
          "O programa começa com uma avaliação completa do equilíbrio, da força muscular, da marcha e do histórico de quedas. Em seguida, o ambiente doméstico é inspecionado: tapetes soltos, iluminação fraca, escadas sem corrimão e fios expostos são os vilões silenciosos de uma casa.",
          "Depois, são criados exercícios específicos de fortalecimento e equilíbrio no ritmo da pessoa idosa, com orientação clara para a família em cada etapa. O progresso é gradual e sempre supervisionado, para que a confiança volte junto com a força."
        ]
      },
      {
        h2: "E se a queda já aconteceu?",
        paragraphs: [
          "Depois de uma queda, o maior inimigo não é apenas a lesão: é o medo de cair de novo. A reabilitação pós-queda trabalha exatamente para quebrar esse ciclo, devolvendo a força muscular, a confiança na marcha e a capacidade de retomar a rotina com segurança.",
          "Quanto mais cedo a reabilitação começa, melhores são os resultados. Não espere uma segunda queda para agir."
        ]
      },
      {
        h2: "Em quais bairros de Recife o atendimento acontece?",
        list: [
          "Boa Viagem",
          "Pina",
          "Setúbal",
          "Imbiribeira",
          "Ibura",
          "Piedade",
          "Candeias",
          "Derby",
          "Espinheiro",
          "Madalena",
          "Graças"
        ]
      }
    ],
    otherTreatments: [
      { title: "Fisioterapia em Gerontologia", url: "/fisioterapia-em-gerontologia-recife/", slug: "fisioterapia-em-gerontologia-recife" },
      { title: "Reabilitação Ortopédica e Pós-Operatória", url: "/reabilitacao-ortopedica-e-pos-operatoria-recife/", slug: "reabilitacao-ortopedica-e-pos-operatoria-recife" },
      { title: "Fisioterapia Neurofuncional", url: "/fisioterapia-neurofuncional-recife/", slug: "fisioterapia-neurofuncional-recife" },
      { title: "Pilates Adaptado para Pessoas Idosas", url: "/pilates-adaptado-para-idosos-recife/", slug: "pilates-adaptado-para-idosos-recife" },
      { title: "Fisioterapia Respiratória", url: "/fisioterapia-respiratoria-recife/", slug: "fisioterapia-respiratoria-recife" }
    ],
    booking: {
      h2: "Como agendar uma avaliação?",
      paragraph: "Envie uma mensagem pelo WhatsApp (81) 98814-1144. A Fisio Michelle Santos, Especialista em Gerontologia pela ABRAFIGE e SBGG e membro do PrevQuedas Brasil, responde pessoalmente e agenda a avaliação domiciliar no melhor horário para a família.",
      ctaText: "Falar no WhatsApp",
      ctaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20preven%C3%A7%C3%A3o%20de%20quedas%20para%20meu%20familiar."
    }
  },

  "reabilitacao-ortopedica-e-pos-operatoria-recife": {
    slug: "reabilitacao-ortopedica-e-pos-operatoria-recife",
    url: "/reabilitacao-ortopedica-e-pos-operatoria-recife/",
    metaTitle: "Reabilitação Ortopédica e Pós-Operatória em Recife | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Reabilitação ortopédica e pós-operatória domiciliar em Recife: recuperação rápida e segura após cirurgias, sem o estresse do deslocamento. WhatsApp: (81) 98814-1144.",
    canonical: "https://www.fisiomichellesantos.com.br/reabilitacao-ortopedica-e-pos-operatoria-recife/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Reabilitação Ortopédica e Pós-Operatória em Recife",
      "url": "https://www.fisiomichellesantos.com.br/reabilitacao-ortopedica-e-pos-operatoria-recife/",
      "description": "Reabilitação ortopédica e pós-operatória domiciliar em Recife: recuperação rápida e segura após cirurgias, sem o estresse do deslocamento.",
      "provider": {
        "@type": "Physiotherapist",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "url": "https://www.fisiomichellesantos.com.br/",
        "telephone": "+5581988141144",
        "areaServed": ["Boa Viagem", "Pina", "Setúbal", "Imbiribeira", "Ibura", "Piedade", "Candeias", "Derby", "Espinheiro", "Madalena", "Graças"]
      },
      "areaServed": {
        "@type": "City",
        "name": "Recife"
      }
    },
    h1: "Reabilitação Ortopédica e Pós-Operatória em Recife: recuperação segura no conforto do lar",
    answerBox: "A reabilitação ortopédica domiciliar em Recife acelera a recuperação após cirurgias como prótese de joelho e quadril, aliviando a dor, recuperando os movimentos e fortalecendo a musculatura, sem o estresse do deslocamento. O tratamento é adaptado às necessidades da pessoa idosa.",
    introText: "O seu familiar passou por uma cirurgia complexa ou convive com dores articulares que limitam a rotina e tiram a liberdade? A reabilitação ortopédica domiciliar é a solução para uma recuperação rápida, segura e sem o estresse de se deslocar até uma clínica.",
    heroCtaText: "Agendar avaliação no WhatsApp",
    heroCtaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20ortop%C3%A9dica%20para%20meu%20familiar.",
    sections: [
      {
        h2: "Por que a reabilitação ortopédica domiciliar acelera a recuperação?",
        paragraphs: [
          "Após uma cirurgia, o corpo precisa de movimento na medida certa, no momento certo. Quando a reabilitação acontece em casa, a pessoa idosa evita o estresse, o cansaço e os riscos do deslocamento, e se recupera no ambiente onde se sente mais segura.",
          "Os melhores recursos terapêuticos são levados até o lar: alívio da dor, recuperação dos movimentos, fortalecimento muscular e treino de marcha, tudo no ritmo do paciente."
        ]
      },
      {
        h2: "Como funciona o programa de reabilitação pós-cirúrgica?",
        paragraphs: [
          "Cada programa é totalmente adaptado às necessidades da pessoa idosa e ao tipo de cirurgia realizada. O acompanhamento começa com uma avaliação detalhada e evolui em etapas:"
        ],
        list: [
          "Controle da dor e do inchaço",
          "Recuperação da amplitude de movimento",
          "Fortalecimento muscular progressivo",
          "Treino de equilíbrio e marcha",
          "Orientacão para a família em cada etapa"
        ]
      },
      {
        h2: "Quais cirurgias e dores podem ser tratadas em casa?",
        list: [
          "Prótese de joelho e quadril",
          "Cirurgias de coluna",
          "Fraturas e luxações",
          "Dores articulares crônicas (joelhos, ombros, quadris)",
          "Artrose e artrite",
          "Dores lombares e ciáticas"
        ]
      },
      {
        h2: "Em quais bairros de Recife o atendimento acontece?",
        list: [
          "Boa Viagem",
          "Pina",
          "Setúbal",
          "Imbiribeira",
          "Ibura",
          "Piedade",
          "Candeias",
          "Derby",
          "Espinheiro",
          "Madalena",
          "Graças"
        ]
      }
    ],
    otherTreatments: [
      { title: "Fisioterapia em Gerontologia", url: "/fisioterapia-em-gerontologia-recife/", slug: "fisioterapia-em-gerontologia-recife" },
      { title: "Prevenção de Quedas e Reabilitação Pós-quedas", url: "/prevencao-de-quedas-em-idosos-recife/", slug: "prevencao-de-quedas-em-idosos-recife" },
      { title: "Fisioterapia Neurofuncional", url: "/fisioterapia-neurofuncional-recife/", slug: "fisioterapia-neurofuncional-recife" },
      { title: "Pilates Adaptado para Pessoas Idosas", url: "/pilates-adaptado-para-idosos-recife/", slug: "pilates-adaptado-para-idosos-recife" },
      { title: "Fisioterapia Respiratória", url: "/fisioterapia-respiratoria-recife/", slug: "fisioterapia-respiratoria-recife" }
    ],
    booking: {
      h2: "Como agendar uma avaliação?",
      paragraph: "Envie uma mensagem pelo WhatsApp (81) 98814-1144. A Fisio Michelle Santos, Especialista em Gerontologia pela ABRAFIGE e SBGG, adapta todo o tratamento ortopédico às necessidades da pessoa idosa e agenda a avaliação no melhor horário para a família.",
      ctaText: "Falar no WhatsApp",
      ctaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20ortop%C3%A9dica%20para%20meu%20familiar."
    }
  },

  "fisioterapia-neurofuncional-recife": {
    slug: "fisioterapia-neurofuncional-recife",
    url: "/fisioterapia-neurofuncional-recife/",
    metaTitle: "Fisioterapia Neurofuncional em Recife | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Fisioterapia neurofuncional domiciliar em Recife para AVC, Parkinson e demências: estimule a neuroplasticidade e preserve a qualidade de vida de quem você ama. WhatsApp: (81) 98814-1144.",
    canonical: "https://www.fisiomichellesantos.com.br/fisioterapia-neurofuncional-recife/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fisioterapia Neurofuncional em Recife",
      "url": "https://www.fisiomichellesantos.com.br/fisioterapia-neurofuncional-recife/",
      "description": "Fisioterapia neurofuncional domiciliar em Recife para AVC, Parkinson e demências: estimule a neuroplasticidade e preserve a qualidade de vida de quem você ama.",
      "provider": {
        "@type": "Physiotherapist",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "url": "https://www.fisiomichellesantos.com.br/",
        "telephone": "+5581988141144",
        "areaServed": ["Boa Viagem", "Pina", "Setúbal", "Imbiribeira", "Ibura", "Piedade", "Candeias", "Derby", "Espinheiro", "Madalena", "Graças"]
      },
      "areaServed": {
        "@type": "City",
        "name": "Recife"
      }
    },
    h1: "Fisioterapia Neurofuncional em Recife: mais qualidade de vida após AVC, Parkinson e demências",
    answerBox: "A fisioterapia neurofuncional em Recife estimula a neuroplasticidade e preserva as funções motoras e cognitivas após AVC, Parkinson e demências. Cada sessão é adaptada para trazer conforto, segurança e dignidade, com suporte completo ao paciente e à família, no conforto do lar.",
    introText: "Condições neurológicas exigem um olhar atento, técnico e de muito carinho. Se alguém da sua família enfrenta esse desafio, saiba que existe um caminho para preservar o que ainda pode ser preservado e melhorar o que parece estagnado.",
    heroCtaText: "Agendar avaliação no WhatsApp",
    heroCtaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20neurofuncional%20para%20meu%20familiar.",
    sections: [
      {
        h2: "Como a fisioterapia neurofuncional ajuda após um AVC?",
        paragraphs: [
          "Após um derrame, o cérebro tem uma capacidade incrível de se reorganizar — a neuroplasticidade. A fisioterapia neurofuncional usa exercícios específicos para estimular essa reorganização, recuperando movimentos, equilíbrio e independência.",
          "O trabalho é focado em devolver a funcionalidade para o dia a dia: caminhar, sentar e levantar, cuidar da própria higiene e retomar atividades significativas, sempre respeitando o ritmo de cada pessoa."
        ]
      },
      {
        h2: "Como funciona o atendimento para Parkinson e demências?",
        paragraphs: [
          "No Parkinson, o foco está no controle do equilíbrio, na marcha e na prevenção de quedas, além de exercícios que melhoram a rigidez e a lentidão dos movimentos. Nas demências, o trabalho preserva as funções motoras e cognitivas pelo maior tempo possível, com atividades que trazem prazer e dignidade.",
          "Cada sessão é adaptada para trazer mais conforto, segurança e dignidade, respeitando o tempo de cada um."
        ]
      },
      {
        h2: "Como a família participa do tratamento?",
        paragraphs: [
          "A família recebe suporte completo: orientações claras sobre como auxiliar nas atividades diárias, como identificar sinais de alerta e como estimular o paciente entre as sessões. Você nunca estará sozinho nessa jornada."
        ]
      },
      {
        h2: "Em quais bairros de Recife o atendimento acontece?",
        list: [
          "Boa Viagem",
          "Pina",
          "Setúbal",
          "Imbiribeira",
          "Ibura",
          "Piedade",
          "Candeias",
          "Derby",
          "Espinheiro",
          "Madalena",
          "Graças"
        ]
      }
    ],
    otherTreatments: [
      { title: "Fisioterapia em Gerontologia", url: "/fisioterapia-em-gerontologia-recife/", slug: "fisioterapia-em-gerontologia-recife" },
      { title: "Prevenção de Quedas e Reabilitação Pós-quedas", url: "/prevencao-de-quedas-em-idosos-recife/", slug: "prevencao-de-quedas-em-idosos-recife" },
      { title: "Reabilitação Ortopédica e Pós-Operatória", url: "/reabilitacao-ortopedica-e-pos-operatoria-recife/", slug: "reabilitacao-ortopedica-e-pos-operatoria-recife" },
      { title: "Pilates Adaptado para Pessoas Idosas", url: "/pilates-adaptado-para-idosos-recife/", slug: "pilates-adaptado-para-idosos-recife" },
      { title: "Fisioterapia Respiratória", url: "/fisioterapia-respiratoria-recife/", slug: "fisioterapia-respiratoria-recife" }
    ],
    booking: {
      h2: "Como agendar uma avaliação?",
      paragraph: "Envie uma mensagem pelo WhatsApp (81) 98814-1144. A Fisio Michelle Santos, Especialista em Gerontologia pela ABRAFIGE e SBGG, está pronta para ajudar quem você ama a ter a melhor qualidade de vida possível.",
      ctaText: "Falar no WhatsApp",
      ctaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20neurofuncional%20para%20meu%20familiar."
    }
  },

  "pilates-adaptado-para-idosos-recife": {
    slug: "pilates-adaptado-para-idosos-recife",
    url: "/pilates-adaptado-para-idosos-recife/",
    metaTitle: "Pilates Adaptado para Pessoas Idosas em Recife | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Pilates adaptado para pessoas idosas em Recife, no conforto do lar: fortaleça músculos, melhore o equilíbrio e a postura sem impacto. WhatsApp: (81) 98814-1144.",
    canonical: "https://www.fisiomichellesantos.com.br/pilates-adaptado-para-idosos-recife/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Pilates Adaptado para Pessoas Idosas em Recife",
      "url": "https://www.fisiomichellesantos.com.br/pilates-adaptado-para-idosos-recife/",
      "description": "Pilates adaptado para pessoas idosas em Recife, no conforto do lar: fortaleça músculos, melhore o equilíbrio e a postura sem impacto.",
      "provider": {
        "@type": "Physiotherapist",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "url": "https://www.fisiomichellesantos.com.br/",
        "telephone": "+5581988141144",
        "areaServed": ["Boa Viagem", "Pina", "Setúbal", "Imbiribeira", "Ibura", "Piedade", "Candeias", "Derby", "Espinheiro", "Madalena", "Graças"]
      },
      "areaServed": {
        "@type": "City",
        "name": "Recife"
      }
    },
    h1: "Pilates Adaptado para Pessoas Idosas em Recife: fortalecimento seguro sem impacto",
    answerBox: "O Pilates adaptado para pessoas idosas em Recife fortalece músculos, melhora o equilíbrio, a coordenação motora e a postura, tudo sem impacto e no ritmo do corpo. O resultado é mais confiança no dia a dia: levantar da cadeira com facilidade e caminhar sem medo.",
    introText: "Quem disse que Pilates não é para todas as idades? O método totalmente adaptado às necessidades da pessoa idosa é ideal para fortalecer os músculos, melhorar o equilíbrio, a coordenação motora e a postura, tudo sem impacto e no ritmo que o corpo precisa.",
    heroCtaText: "Agendar aula no WhatsApp",
    heroCtaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20aula%20de%20Pilates%20adaptado%20para%20meu%20familiar.",
    sections: [
      {
        h2: "O Pilates é seguro para pessoas idosas?",
        paragraphs: [
          "Sim. Quando aplicado por um fisioterapeuta especialista em gerontologia, o Pilates é totalmente seguro e altamente eficaz para pessoas idosas. Cada exercício é guiado respeitando os limites do corpo, sem impacto e sem sobrecarga nas articulações."
        ]
      },
      {
        h2: "Quais benefícios o Pilates adaptado traz?",
        list: [
          "Fortalecimento muscular global",
          "Melhora do equilíbrio e prevenção de quedas",
          "Melhora da postura e da coordenação motora",
          "Alívio de dores crônicas",
          "Mais disposição, energia e vitalidade",
          "Confiança para as tarefas do dia a dia"
        ],
        afterText: "O resultado é mais confiança para o dia a dia: levantar da cadeira com facilidade, caminhar sem medo e realizar as tarefas de casa com segurança."
      },
      {
        h2: "Como funciona uma aula de Pilates adaptado em casa?",
        paragraphs: [
          "As aulas acontecem no conforto do lar, com atendimento exclusivo e individualizado. Os exercícios são adaptados ao ritmo e às condições de cada pessoa, com equipamentos simples e seguros, sempre sob supervisão do fisioterapeuta.",
          "É saúde, movimento e prevenção aliados em um atendimento exclusivo, sem sair de casa."
        ]
      },
      {
        h2: "Em quais bairros de Recife o atendimento acontece?",
        list: [
          "Boa Viagem",
          "Pina",
          "Setúbal",
          "Imbiribeira",
          "Ibura",
          "Piedade",
          "Candeias",
          "Derby",
          "Espinheiro",
          "Madalena",
          "Graças"
        ]
      }
    ],
    otherTreatments: [
      { title: "Fisioterapia em Gerontologia", url: "/fisioterapia-em-gerontologia-recife/", slug: "fisioterapia-em-gerontologia-recife" },
      { title: "Prevenção de Quedas e Reabilitação Pós-quedas", url: "/prevencao-de-quedas-em-idosos-recife/", slug: "prevencao-de-quedas-em-idosos-recife" },
      { title: "Reabilitação Ortopédica e Pós-Operatória", url: "/reabilitacao-ortopedica-e-pos-operatoria-recife/", slug: "reabilitacao-ortopedica-e-pos-operatoria-recife" },
      { title: "Fisioterapia Neurofuncional", url: "/fisioterapia-neurofuncional-recife/", slug: "fisioterapia-neurofuncional-recife" },
      { title: "Fisioterapia Respiratória", url: "/fisioterapia-respiratoria-recife/", slug: "fisioterapia-respiratoria-recife" }
    ],
    booking: {
      h2: "Como agendar uma aula?",
      paragraph: "Envie uma mensagem pelo WhatsApp (81) 98814-1144. A Fisio Michelle Santos, Especialista em Gerontologia pela ABRAFIGE e SBGG, garante um cuidado que devolve a confiança para o dia a dia.",
      ctaText: "Falar no WhatsApp",
      ctaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20aula%20de%20Pilates%20adaptado%20para%20meu%20familiar."
    }
  },

  "fisioterapia-respiratoria-recife": {
    slug: "fisioterapia-respiratoria-recife",
    url: "/fisioterapia-respiratoria-recife/",
    metaTitle: "Fisioterapia Respiratória em Recife | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Fisioterapia respiratória domiciliar em Recife: limpe os pulmões, fortaleça a respiração e previna pneumonias em pessoas idosas. Cuidado vital no conforto do lar. WhatsApp: (81) 98814-1144.",
    canonical: "https://www.fisiomichellesantos.com.br/fisioterapia-respiratoria-recife/",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Fisioterapia Respiratória em Recife",
      "url": "https://www.fisiomichellesantos.com.br/fisioterapia-respiratoria-recife/",
      "description": "Fisioterapia respiratória domiciliar em Recife: limpe os pulmões, fortaleça a respiração e previna pneumonias em pessoas idosas. Cuidado vital no conforto do lar.",
      "provider": {
        "@type": "Physiotherapist",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "url": "https://www.fisiomichellesantos.com.br/",
        "telephone": "+5581988141144",
        "areaServed": ["Boa Viagem", "Pina", "Setúbal", "Imbiribeira", "Ibura", "Piedade", "Candeias", "Derby", "Espinheiro", "Madalena", "Graças"]
      },
      "areaServed": {
        "@type": "City",
        "name": "Recife"
      }
    },
    h1: "Fisioterapia Respiratória em Recife: respire melhor, durma melhor, viva melhor",
    answerBox: "A fisioterapia respiratória em Recife limpa os pulmões, fortalece a musculatura da respiração e previne complicações graves como pneumonias em pessoas idosas. O cuidado é feito com total segurança no conforto do lar, tratando o paciente no ambiente onde se sente mais protegido.",
    introText: "Respirar bem é a base de tudo. Se o cansaço excessivo, a falta de ar ou o acúmulo de secreção estão atrapalhando a rotina e o sono do seu familiar idoso, a fisioterapia respiratória atua de forma precisa para limpar os pulmões, fortalecer a musculatura da respiração e prevenir complicações graves, como pneumonias.",
    heroCtaText: "Agendar avaliação no WhatsApp",
    heroCtaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20respirat%C3%B3ria%20para%20meu%20familiar.",
    sections: [
      {
        h2: "Quando a pessoa idosa precisa de fisioterapia respiratória?",
        list: [
          "Falta de ar ou cansaço excessivo em atividades simples",
          "Acúmulo frequente de secreção e tosse persistente",
          "Doenças respiratórias crônicas (DPOC, bronquite, asma)",
          "Recuperação de pneumonia ou internação respiratória",
          "Pessoa acamada ou com mobilidade reduzida",
          "Apneia do sono ou sono prejudicado pela respiração"
        ]
      },
      {
        h2: "Como funciona o atendimento respiratório domiciliar?",
        paragraphs: [
          "O tratamento é feito com total segurança no conforto do lar, sem a necessidade de deslocamentos que podem ser arriscados e cansativos. A pessoa idosa é tratada no ambiente onde se sente mais protegida.",
          "As técnicas incluem limpeza das vias aéreas, fortalecimento da musculatura respiratória, exercícios de expansão pulmonar e orientações para a família, sempre com supervisão profissional especializada."
        ]
      },
      {
        h2: "A fisioterapia respiratória previne internações?",
        paragraphs: [
          "Sim. Manter os pulmões limpos e a musculatura respiratória fortalecida reduz significativamente o risco de complicações graves, como pneumonias, que são uma das principais causas de internação em pessoas idosas.",
          "Não deixe que um problema simples vire uma internação. O cuidado preventivo é o melhor investimento em saúde e qualidade de vida."
        ]
      },
      {
        h2: "Em quais bairros de Recife o atendimento acontece?",
        list: [
          "Boa Viagem",
          "Pina",
          "Setúbal",
          "Imbiribeira",
          "Ibura",
          "Piedade",
          "Candeias",
          "Derby",
          "Espinheiro",
          "Madalena",
          "Graças"
        ]
      }
    ],
    otherTreatments: [
      { title: "Fisioterapia em Gerontologia", url: "/fisioterapia-em-gerontologia-recife/", slug: "fisioterapia-em-gerontologia-recife" },
      { title: "Prevenção de Quedas e Reabilitação Pós-quedas", url: "/prevencao-de-quedas-em-idosos-recife/", slug: "prevencao-de-quedas-em-idosos-recife" },
      { title: "Reabilitação Ortopédica e Pós-Operatória", url: "/reabilitacao-ortopedica-e-pos-operatoria-recife/", slug: "reabilitacao-ortopedica-e-pos-operatoria-recife" },
      { title: "Fisioterapia Neurofuncional", url: "/fisioterapia-neurofuncional-recife/", slug: "fisioterapia-neurofuncional-recife" },
      { title: "Pilates Adaptado para Pessoas Idosas", url: "/pilates-adaptado-para-idosos-recife/", slug: "pilates-adaptado-para-idosos-recife" }
    ],
    booking: {
      h2: "Como agendar uma avaliação?",
      paragraph: "Envie uma mensagem pelo WhatsApp (81) 98814-1144. A Fisio Michelle Santos, Especialista em Gerontologia pela ABRAFIGE e SBGG, com experiência em Terapia Intensiva, oferece um atendimento respiratório de excelência em Boa Viagem e região.",
      ctaText: "Falar no WhatsApp",
      ctaUrl: "https://wa.me/5581988141144?text=Ol%C3%A1%20Fisio%20Michelle!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20respirat%C3%B3ria%20para%20meu%20familiar."
    }
  }
};
