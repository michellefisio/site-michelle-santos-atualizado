export type BlogPostSlug = 
  | "como-prevenir-quedas-em-idosos"
  | "fisioterapia-pos-avc-em-casa"
  | "quando-procurar-fisioterapia-geriatrica"
  | "beneficios-do-pilates-para-idosos"
  | "cuidados-com-idosos-acamados"
  | "fisioterapia-respiratoria-em-idosos"
  | "perda-de-mobilidade-em-idosos-primeiros-sinais"
  | "reabilitacao-em-casa-apos-alta-hospitalar-idosos"
  | "familia-na-reabilitacao-domiciliar-do-idoso";

export interface BlogSection {
  h2?: string;
  paragraphs?: string[];
  list?: string[];
  afterText?: string;
  subsections?: {
    h3: string;
    paragraph: string;
  }[];
}

export interface BlogPostData {
  slug: BlogPostSlug;
  url: string;
  canonical: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  excerpt: string;
  date: string;
  updatedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    crefito: string;
  };
  image: string;
  schema: Record<string, any>;
  introText: string;
  sections: BlogSection[];
  references?: string[];
  relatedService?: {
    text: string;
    linkText: string;
    url: string;
  };
}

export const blogPostsData: Record<BlogPostSlug, BlogPostData> = {
  // ARTIGO 1
  "como-prevenir-quedas-em-idosos": {
    slug: "como-prevenir-quedas-em-idosos",
    url: "/blog/como-prevenir-quedas-em-idosos/",
    canonical: "https://www.fisiomichellesantos.com.br/blog/como-prevenir-quedas-em-idosos/",
    metaTitle: "Como Prevenir Quedas em Idosos | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Guia prático para prevenir quedas em idosos: sinais de risco, adaptações da casa, exercícios de equilíbrio e quando procurar um especialista em Recife.",
    title: "Como prevenir quedas em idosos: guia completo para famílias",
    excerpt: "As quedas são a principal causa de lesões em pessoas idosas — mas a maioria pode ser evitada. Aprenda a identificar os riscos dentro de casa e as medidas que realmente funcionam.",
    date: "2026-08-25",
    updatedDate: "Atualizado em agosto de 2026",
    readTime: "6 min de leitura",
    author: {
      name: "Michelle Vieira dos Santos",
      role: "Fisioterapeuta Especialista em Gerontologia",
      crefito: "CREFITO: 3/276580-F"
    },
    image: "https://www.fisiomichellesantos.com.br/imagens/blog-prevencao-quedas.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Como Prevenir Quedas em Idosos: Guia Completo para Famílias",
      "description": "Guia prático para prevenir quedas em idosos: sinais de risco, adaptações da casa, exercícios de equilíbrio e quando procurar um especialista em Recife.",
      "image": "https://www.fisiomichellesantos.com.br/imagens/blog-prevencao-quedas.jpg",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fisiomichellesantos.com.br/imagens/logo.png"
        }
      },
      "datePublished": "2026-08-25",
      "dateModified": "2026-08-25",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/como-prevenir-quedas-em-idosos/"
      },
      "inLanguage": "pt-BR"
    },
    introText: "Quedas são a principal causa de lesões e internações em pessoas idosas no Brasil — mas a maioria pode ser prevenida. Este guia mostra os sinais de risco, as adaptações que fazem diferença dentro de casa e quando procurar ajuda especializada, para que quem você ama continue ativo, seguro e independente.",
    sections: [
      {
        h2: "Por que as quedas são tão perigosas para pessoas idosas?",
        paragraphs: [
          "Uma queda raramente é um evento isolado. Além das fraturas — especialmente de quadril, punho e coluna —, ela instala o medo: a pessoa idosa passa a evitar caminhar, sai menos da cama e abandona atividades que amava. Esse ciclo de imobilidade enfraquece a musculatura, reduz o equilíbrio e aumenta ainda mais o risco de uma nova queda.",
          "O impacto emocional também é real: a perda de independência abala a autoestima e sobrecarrega a família, que assume o papel de cuidadora sem preparo. Por isso, prevenir não é apenas evitar um acidente — é proteger a dignidade e a autonomia."
        ]
      },
      {
        h2: "Quais são os principais fatores de risco dentro de casa?",
        paragraphs: [
          "Grande parte das quedas acontece no próprio lar, em atividades simples do dia a dia. Os vilões mais comuns:"
        ],
        list: [
          "Tapetes soltos ou com dobras (especialmente na sala e no banheiro)",
          "Iluminação fraca em corredores, escadas e quarto",
          "Fios elétricos expostos no caminho",
          "Móveis baixos ou objetos no chão",
          "Escadas sem corrimão e degraus irregulares",
          "Banheiro sem barras de apoio e com piso escorregadio",
          "Calçados inadequados (chinelos largos, meias no piso liso)"
        ],
        afterText: "Muitas dessas adaptações são simples e de baixo custo — e fazem toda a diferença."
      },
      {
        h2: "Quais sinais indicam que meu familiar está em risco?",
        list: [
          "Medo de andar ou insegurança ao se levantar",
          "Apoio constante em móveis, paredes ou pessoas",
          "Passos curtos, arrastados ou instáveis",
          "Queda recente ou quase quedas frequentes",
          "Fraqueza nas pernas, tontura ou visão alterada",
          "Uso de medicamentos que afetam o equilíbrio (soníferos, ansiolíticos, pressão)"
        ],
        afterText: "Se um ou mais desses sinais aparecem na rotina, uma avaliação fisioterapêutica é o primeiro passo para agir antes do acidente."
      },
      {
        h2: "Quais exercícios ajudam a prevenir quedas?",
        paragraphs: [
          "O fortalecimento das pernas e o treino de equilíbrio são as intervenções mais eficazes. Exercícios como sentar e levantar da cadeira sem apoio, ficar na ponta dos pés segurando em um suporte e caminhar em linha reta com supervisão fortalecem os músculos usados no dia a dia.",
          "Importante: cada exercício deve ser adaptado ao condicionamento e às condições clínicas da pessoa idosa. O ideal é que o programa seja criado e supervisionado por um fisioterapeuta especialista, para evitar sobrecarga e garantir progressão segura."
        ]
      },
      {
        h2: "Quando procurar um fisioterapeuta especialista?",
        paragraphs: [
          "O momento certo é antes da queda, não depois. Se a pessoa idosa apresenta qualquer sinal de risco, uma avaliação domiciliar identifica as fragilidades e monta um plano individualizado — incluindo a revisão do ambiente da casa e a orientação da família.",
          "Em Recife, a Fisio Michelle Santos atende no conforto do lar, em Boa Viagem e região, com programa específico de prevenção de quedas."
        ]
      },
      {
        h2: "Perguntas frequentes sobre prevenção de quedas",
        subsections: [
          {
            h3: "Andador ou bengala: como escolher?",
            paragraph: "Depende do nível de necessidade de apoio e do equilíbrio da pessoa. A escolha deve ser feita com orientação profissional — um dispositivo inadequado pode aumentar o risco de queda em vez de reduzi-lo."
          },
          {
            h3: "Queda já aconteceu. O que fazer agora?",
            paragraph: "Após liberação médica, a reabilitação deve começar o quanto antes para recuperar força, confiança e marcha, quebrando o ciclo do medo que paralisa. Quanto mais cedo, melhores os resultados."
          },
          {
            h3: "Prevenção de quedas é coisa de idoso \"muito velho\"?",
            paragraph: "Não. Pode ser recomendada a partir dos 60 anos ou antes, em casos de fraqueza, doenças crônicas ou histórico de quedas. Prevenir é sempre mais simples — e mais barato — do que reabilitar."
          }
        ]
      }
    ],
    relatedService: {
      text: "Conheça o programa de prevenção de quedas e reabilitação pós-quedas em Recife:",
      linkText: "Conheça o programa de prevenção de quedas em Recife",
      url: "/prevencao-de-quedas-em-idosos-recife/"
    }
  },

  // ARTIGO 2
  "fisioterapia-pos-avc-em-casa": {
    slug: "fisioterapia-pos-avc-em-casa",
    url: "/blog/fisioterapia-pos-avc-em-casa/",
    canonical: "https://www.fisiomichellesantos.com.br/blog/fisioterapia-pos-avc-em-casa/",
    metaTitle: "Fisioterapia Pós-AVC em Casa | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Guia para famílias sobre fisioterapia pós-AVC em domicílio: quando começar, o que esperar, como estimular a recuperação e preservar a independência.",
    title: "Fisioterapia pós-AVC em casa: o que a família precisa saber",
    excerpt: "Depois de um derrame, cada semana conta. Entenda como a fisioterapia domiciliar estimula a recuperação e devolve independência no ritmo certo.",
    date: "2026-09-01",
    updatedDate: "Atualizado em setembro de 2026",
    readTime: "7 min de leitura",
    author: {
      name: "Michelle Vieira dos Santos",
      role: "Fisioterapeuta Especialista em Gerontologia",
      crefito: "CREFITO: 3/276580-F"
    },
    image: "https://www.fisiomichellesantos.com.br/imagens/blog-pos-avc.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Fisioterapia Pós-AVC em Casa: O Que a Família Precisa Saber",
      "description": "Guia para famílias sobre fisioterapia pós-AVC em domicílio: quando começar, o que esperar, como estimular a recuperação e preservar a independência.",
      "image": "https://www.fisiomichellesantos.com.br/imagens/blog-pos-avc.jpg",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fisiomichellesantos.com.br/imagens/logo.png"
        }
      },
      "datePublished": "2026-09-01",
      "dateModified": "2026-09-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/fisioterapia-pos-avc-em-casa/"
      },
      "inLanguage": "pt-BR"
    },
    introText: "Depois de um AVC, cada semana conta para a recuperação. A fisioterapia domiciliar estimula a neuroplasticidade — a capacidade do cérebro de se reorganizar — e devolve, aos poucos, movimentos, equilíbrio e independência. Este guia ajuda a família a entender o processo e a apoiar quem você ama da melhor forma.",
    sections: [
      {
        h2: "Quando começar a fisioterapia após o AVC?",
        paragraphs: [
          "O ideal é começar o quanto antes, assim que houver liberação médica — muitas vezes ainda na primeira semana. Quanto mais cedo o estímulo começa, maiores são as chances de recuperar funções. A fisioterapia domiciliar permite iniciar o tratamento no ambiente mais seguro e confortável: a própria casa.",
          "Importante: cada caso é único. O plano é montado a partir da avaliação da sequela, do estado geral e dos objetivos da família, sempre em conjunto com a equipe médica."
        ]
      },
      {
        h2: "O que a fisioterapia neurofuncional faz na prática?",
        paragraphs: [
          "O trabalho é focado em devolver funcionalidade para o dia a dia. As sessões incluem:"
        ],
        list: [
          "Estimulação da neuroplasticidade com exercícios repetitivos e orientados",
          "Recuperação de movimentos do lado afetado (braço, perna, mão)",
          "Treino de equilíbrio e de marcha (caminhar com segurança)",
          "Trabalho de sentar e levantar, transferências e postura",
          "Prevenção de complicações: rigidez, encurtamentos e quedas"
        ],
        afterText: "Cada sessão é adaptada ao ritmo do paciente, respeitando o cansaço e celebrando cada pequena conquista."
      },
      {
        h2: "Como a família pode ajudar na recuperação em casa?",
        paragraphs: [
          "A família é parte essencial do processo. Algumas orientações práticas:"
        ],
        list: [
          "Incentivar a participação nas atividades, sem fazer tudo por ele",
          "Manter a casa organizada e segura, com corredores livres de obstáculos",
          "Respeitar o ritmo e o cansaço — o descanso também faz parte do tratamento",
          "Estimular a comunicação e a paciência, mesmo quando há dificuldade de fala",
          "Repetir os exercícios orientados pela fisioterapeuta entre as sessões"
        ],
        afterText: "Você não precisa dar conta de tudo sozinho: o acompanhamento profissional orienta a família em cada etapa."
      },
      {
        h2: "Quanto tempo dura a recuperação?",
        paragraphs: [
          "Não existe um prazo fixo. A recuperação varia conforme a extensão da lesão, a idade, a saúde geral e a regularidade do tratamento. Os maiores ganhos costumam acontecer nos primeiros 6 a 12 meses, mas a melhora pode continuar por muito mais tempo.",
          "O mais importante é a constância: pequenos progressos diários se acumulam em grandes resultados. Cada pessoa tem seu tempo, e o papel da fisioterapia é garantir que esse tempo seja bem aproveitado."
        ]
      },
      {
        h2: "Perguntas frequentes sobre fisioterapia pós-AVC",
        subsections: [
          {
            h3: "Meu familiar ficou acamado. Ainda há esperança de recuperação?",
            paragraph: "Sim. Mesmo em casos mais graves, a fisioterapia previne complicações (úlceras, rigidez, dores) e trabalha a maior independência possível. O objetivo é sempre a melhor qualidade de vida dentro de cada realidade."
          },
          {
            h3: "O atendimento domiciliar é tão eficaz quanto o da clínica?",
            paragraph: "Sim, e em muitos casos é até mais vantajoso: evita o desgaste do deslocamento, permite tratar no ambiente familiar e adapta os exercícios à rotina real da casa."
          },
          {
            h3: "Preciso de encaminhamento médico?",
            paragraph: "Recomenda-se que o tratamento seja alinhado com a equipe médica que acompanha o paciente, especialmente para liberação e orientações específicas do caso."
          }
        ]
      }
    ],
    relatedService: {
      text: "Conheça o atendimento especializado de reabilitação neurológica domiciliar em Recife:",
      linkText: "Conheça a fisioterapia neurofuncional em Recife",
      url: "/fisioterapia-neurofuncional-recife/"
    }
  },

  // ARTIGO 3
  "quando-procurar-fisioterapia-geriatrica": {
    slug: "quando-procurar-fisioterapia-geriatrica",
    url: "/blog/quando-procurar-fisioterapia-geriatrica/",
    canonical: "https://www.fisiomichellesantos.com.br/blog/quando-procurar-fisioterapia-geriatrica/",
    metaTitle: "Quando Procurar Fisioterapia Geriátrica | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Dificuldade para levantar, medo de andar, quedas recentes... Conheça os 7 sinais de que seu familiar idoso precisa de fisioterapia geriátrica.",
    title: "Quando procurar fisioterapia geriátrica? 7 sinais de alerta",
    excerpt: "Dificuldade para levantar, medo de andar, quedas recentes... Conheça os sinais de que seu familiar precisa de acompanhamento especializado.",
    date: "2026-09-08",
    updatedDate: "Atualizado em setembro de 2026",
    readTime: "5 min de leitura",
    author: {
      name: "Michelle Vieira dos Santos",
      role: "Fisioterapeuta Especialista em Gerontologia",
      crefito: "CREFITO: 3/276580-F"
    },
    image: "https://www.fisiomichellesantos.com.br/imagens/blog-fisio-geriatrica.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Quando Procurar Fisioterapia Geriátrica? 7 Sinais de Alerta",
      "description": "Dificuldade para levantar, medo de andar, quedas recentes... Conheça os 7 sinais de que seu familiar idoso precisa de fisioterapia geriátrica.",
      "image": "https://www.fisiomichellesantos.com.br/imagens/blog-fisio-geriatrica.jpg",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fisiomichellesantos.com.br/imagens/logo.png"
        }
      },
      "datePublished": "2026-09-08",
      "dateModified": "2026-09-08",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/quando-procurar-fisioterapia-geriatrica/"
      },
      "inLanguage": "pt-BR"
    },
    introText: "Muitas famílias só procuram ajuda quando algo grave já aconteceu — uma queda, uma cirurgia, uma internação. Mas a perda de mobilidade dá sinais muito antes. Conheça os 7 sinais de alerta que indicam que seu familiar idoso pode se beneficiar da fisioterapia geriátrica, antes que o problema se agrave.",
    sections: [
      {
        h2: "1. Dificuldade para levantar da cadeira ou da cama",
        paragraphs: [
          "Se a pessoa precisa se apoiar com os braços, balançar o corpo várias vezes ou pedir ajuda para se levantar, há perda de força muscular. Esse é um dos primeiros sinais de declínio funcional — e um dos mais tratáveis."
        ]
      },
      {
        h2: "2. Medo de andar ou insegurança ao caminhar",
        paragraphs: [
          "O medo de cair é um sinal tão importante quanto a queda em si. Quando a pessoa evita sair, segura em móveis e paredes ou anda com passos curtos e arrastados, o equilíbrio já está comprometido."
        ]
      },
      {
        h2: "3. Queda recente ou quase quedas frequentes",
        paragraphs: [
          "Uma queda é um alerta vermelho. Quem caiu uma vez tem risco muito maior de cair de novo. E \"quase cair\" várias vezes também conta — é o corpo avisando que o controle está falhando."
        ]
      },
      {
        h2: "4. Fraqueza nas pernas e cansaço excessivo",
        paragraphs: [
          "Cansaço para subir escadas, para caminhar até a cozinha ou para atividades que antes eram fáceis indica perda de condicionamento. A fraqueza muscular é o principal fator de risco modificável para quedas."
        ]
      },
      {
        h2: "5. Dependência crescente para atividades do dia a dia",
        paragraphs: [
          "Se a pessoa passou a precisar de ajuda para banho, vestir-se, alimentar-se ou ir ao banheiro, a fisioterapia pode retardar ou reverter parte dessa dependência, devolvendo autonomia e dignidade."
        ]
      },
      {
        h2: "6. Dores que limitam o movimento",
        paragraphs: [
          "Dores no joelho, quadril, coluna ou ombro que impedem a pessoa de se movimentar não devem ser encaradas como \"normais da idade\". A fisioterapia alivia a dor e devolve a mobilidade."
        ]
      },
      {
        h2: "7. Recuperação de cirurgia, AVC ou internação",
        paragraphs: [
          "Após qualquer evento que tenha deixado a pessoa de repouso, a reabilitação é essencial para recuperar força, movimento e confiança. Quanto antes começa, mais rápida e completa é a recuperação."
        ]
      },
      {
        h2: "O que fazer se identificar algum desses sinais?",
        paragraphs: [
          "O primeiro passo é uma avaliação fisioterapêutica especializada, que identifica as fragilidades e monta um plano individualizado — incluindo a revisão do ambiente da casa e a orientação da família. Em Recife, a Fisio Michelle Santos atende no conforto do lar, com foco em gerontologia."
        ]
      },
      {
        h2: "Perguntas frequentes",
        subsections: [
          {
            h3: "Fisioterapia geriátrica é só para idosos \"muito velhos\"?",
            paragraph: "Não. Pode ser recomendada a partir dos 60 anos ou antes, em casos de fraqueza, doenças crônicas, histórico de quedas ou pós-operatório. Prevenir é sempre mais simples do que reabilitar."
          },
          {
            h3: "Meu familiar é independente. Ainda assim precisa?",
            paragraph: "Mesmo pessoas independentes podem se beneficiar de um programa preventivo de força e equilíbrio, especialmente se apresentam qualquer sinal de risco. Manter a independência é o objetivo."
          }
        ]
      }
    ],
    relatedService: {
      text: "Entenda como a fisioterapia geriátrica domiciliar pode ajudar quem você ama:",
      linkText: "Conheça a fisioterapia em gerontologia em Recife",
      url: "/fisioterapia-em-gerontologia-recife/"
    }
  },

  // ARTIGO 4
  "beneficios-do-pilates-para-idosos": {
    slug: "beneficios-do-pilates-para-idosos",
    url: "/blog/beneficios-do-pilates-para-idosos/",
    canonical: "https://www.fisiomichellesantos.com.br/blog/beneficios-do-pilates-para-idosos/",
    metaTitle: "Benefícios do Pilates para Idosos | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Pilates adaptado para idosos: fortaleça músculos, melhore o equilíbrio e a postura sem impacto. Veja benefícios, segurança e como começar em casa.",
    title: "Pilates para idosos: benefícios, segurança e como começar",
    excerpt: "Fortalecimento sem impacto, mais equilíbrio e confiança no dia a dia. Descubra por que o Pilates adaptado é tão recomendado para a terceira idade.",
    date: "2026-09-15",
    updatedDate: "Atualizado em setembro de 2026",
    readTime: "5 min de leitura",
    author: {
      name: "Michelle Vieira dos Santos",
      role: "Fisioterapeuta Especialista em Gerontologia",
      crefito: "CREFITO: 3/276580-F"
    },
    image: "https://www.fisiomichellesantos.com.br/imagens/blog-pilates.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Pilates para Idosos: Benefícios, Segurança e Como Começar",
      "description": "Pilates adaptado para idosos: fortaleça músculos, melhore o equilíbrio e a postura sem impacto. Veja benefícios, segurança e como começar em casa.",
      "image": "https://www.fisiomichellesantos.com.br/imagens/blog-pilates.jpg",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fisiomichellesantos.com.br/imagens/logo.png"
        }
      },
      "datePublished": "2026-09-15",
      "dateModified": "2026-09-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/beneficios-do-pilates-para-idosos/"
      },
      "inLanguage": "pt-BR"
    },
    introText: "Quem disse que Pilates não é para todas as idades? Quando adaptado por um fisioterapeuta especialista, o Pilates é um dos métodos mais seguros e eficazes para pessoas idosas: fortalece a musculatura, melhora o equilíbrio e a postura, tudo sem impacto nas articulações. Veja como começar.",
    sections: [
      {
        h2: "O Pilates é seguro para pessoas idosas?",
        paragraphs: [
          "Sim. Quando aplicado por um profissional qualificado e adaptado às condições de cada pessoa, o Pilates é totalmente seguro. A grande vantagem é o baixo impacto: os exercícios protegem as articulações enquanto fortalecem os músculos profundos, essenciais para a estabilidade e o equilíbrio.",
          "O segredo está na adaptação: cada exercício é ajustado ao ritmo, à mobilidade e às limitações de quem pratica. Nada de comparação ou pressa."
        ]
      },
      {
        h2: "Quais são os principais benefícios para a terceira idade?",
        list: [
          "Fortalecimento muscular global, especialmente das pernas e do core",
          "Melhora do equilíbrio e da coordenação, prevenindo quedas",
          "Melhora da postura e do alinhamento corporal",
          "Alívio de dores crônicas (coluna, joelhos, ombros)",
          "Mais flexibilidade e amplitude de movimento",
          "Mais disposição, energia e vitalidade no dia a dia"
        ],
        afterText: "O resultado prático é mais confiança: levantar da cadeira com facilidade, caminhar sem medo e realizar as tarefas de casa com segurança."
      },
      {
        h2: "Como funciona uma aula de Pilates adaptado?",
        paragraphs: [
          "As aulas são individualizadas, no ritmo de cada pessoa. Começam com uma avaliação para entender as necessidades e limitações, e evoluem com exercícios progressivos. Podem acontecer no conforto do lar, com equipamentos simples e seguros, sempre sob supervisão do fisioterapeuta.",
          "É saúde, movimento e prevenção aliados em um atendimento exclusivo, sem sair de casa."
        ]
      },
      {
        h2: "Quem pode praticar Pilates adaptado?",
        paragraphs: [
          "Quase todas as pessoas idosas podem se beneficiar, desde que haja avaliação e adaptação adequadas. É especialmente recomendado para quem tem fraqueza muscular, dores articulares, histórico de quedas, osteoporose ou está em recuperação de cirurgias — sempre com liberação e orientação profissional."
        ]
      },
      {
        h2: "Como começar?",
        paragraphs: [
          "O primeiro passo é uma avaliação com um fisioterapeuta especialista em gerontologia, que identifica as necessidades e monta um plano seguro. Em Recife, a Fisio Michelle Santos oferece Pilates adaptado no conforto do lar."
        ]
      },
      {
        h2: "Perguntas frequentes",
        subsections: [
          {
            h3: "Pilates substitui a fisioterapia?",
            paragraph: "Não. São complementares. A fisioterapia trata condições específicas e reabilita; o Pilates adaptado fortalece e previne. Em muitos casos, o Pilates faz parte do próprio plano de fisioterapia."
          },
          {
            h3: "Preciso de equipamentos caros?",
            paragraph: "Não. No atendimento domiciliar, o fisioterapeuta leva os recursos necessários e adapta os exercícios ao ambiente da casa, com equipamentos simples e seguros."
          }
        ]
      }
    ],
    relatedService: {
      text: "Conheça o atendimento individualizado de Pilates adaptado no seu lar:",
      linkText: "Conheça o Pilates adaptado para idosos em Recife",
      url: "/pilates-adaptado-para-idosos-recife/"
    }
  },

  // ARTIGO 5
  "cuidados-com-idosos-acamados": {
    slug: "cuidados-com-idosos-acamados",
    url: "/blog/cuidados-com-idosos-acamados/",
    canonical: "https://www.fisiomichellesantos.com.br/blog/cuidados-com-idosos-acamados/",
    metaTitle: "Cuidados com Idosos Acamados | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Guia prático para cuidar de idosos acamados: prevenção de úlceras, posicionamento correto, fisioterapia respiratória e apoio à família.",
    title: "Cuidados com idosos acamados: guia prático para a família",
    excerpt: "Prevenção de úlceras, posicionamento correto, fisioterapia respiratória e o apoio que a família precisa para cuidar com segurança e dignidade.",
    date: "2026-09-22",
    updatedDate: "Atualizado em setembro de 2026",
    readTime: "6 min de leitura",
    author: {
      name: "Michelle Vieira dos Santos",
      role: "Fisioterapeuta Especialista em Gerontologia",
      crefito: "CREFITO: 3/276580-F"
    },
    image: "https://www.fisiomichellesantos.com.br/imagens/blog-acamados.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Cuidados com Idosos Acamados: Guia Prático para a Família",
      "description": "Guia prático para cuidar de idosos acamados: prevenção de úlceras, posicionamento correto, fisioterapia respiratória e apoio à família.",
      "image": "https://www.fisiomichellesantos.com.br/imagens/blog-acamados.jpg",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fisiomichellesantos.com.br/imagens/logo.png"
        }
      },
      "datePublished": "2026-09-22",
      "dateModified": "2026-09-22",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/cuidados-com-idosos-acamados/"
      },
      "inLanguage": "pt-BR"
    },
    introText: "Cuidar de um idoso acamado é uma tarefa que exige técnica, paciência e muito amor. Este guia reúne os cuidados essenciais — prevenção de úlceras, posicionamento correto, fisioterapia respiratória e o apoio que a família precisa — para garantir segurança, conforto e dignidade a quem você ama.",
    sections: [
      {
        h2: "Por que a prevenção de úlceras de pressão é tão importante?",
        paragraphs: [
          "As úlceras de pressão (escaras) surgem quando a pressão constante sobre uma região do corpo impede a circulação sanguínea. São dolorosas, difíceis de tratar e uma das principais causas de complicações em pessoas acamadas.",
          "A boa notícia: são amplamente preveníveis com mudanças de posição regulares, cuidados com a pele e uso de superfícies adequadas."
        ]
      },
      {
        h2: "Como prevenir as úlceras de pressão?",
        list: [
          "Mudar a posição do corpo a cada 2 horas (deitado de lado, de costas, sentado)",
          "Manter a pele limpa, seca e hidratada",
          "Usar travesseiros e almofadas para aliviar pontos de pressão",
          "Verificar diariamente a pele em busca de vermelhidão",
          "Manter a roupa de cama limpa e sem dobras",
          "Garantir boa alimentação e hidratação (a pele precisa de nutrientes)"
        ]
      },
      {
        h2: "Qual é o posicionamento correto na cama?",
        paragraphs: [
          "O posicionamento adequado previne úlceras, contraturas e dores. A cabeceira não deve ficar muito elevada (evita deslizamento e pressão no cóccix), os joelhos podem ficar levemente flexionados com apoio, e os pés apoiados para evitar queda do pé. A posição deve ser alternada ao longo do dia.",
          "O fisioterapeuta orienta o posicionamento ideal para cada caso, considerando a condição clínica e o conforto do paciente."
        ]
      },
      {
        h2: "Por que a fisioterapia respiratória é essencial para acamados?",
        paragraphs: [
          "Quem fica muito tempo deitado tem maior risco de acúmulo de secreção nos pulmões e de pneumonia — uma das principais causas de internação e complicações em idosos acamados. A fisioterapia respiratória limpa as vias aéreas, fortalece a musculatura da respiração e previne essas complicações.",
          "O atendimento é feito com total segurança no conforto do lar, sem o estresse do deslocamento."
        ]
      },
      {
        h2: "Como a fisioterapia ajuda mesmo quem está acamado?",
        paragraphs: [
          "Mesmo sem sair da cama, a fisioterapia trabalha: movimentação passiva e ativa para manter a mobilidade das articulações, prevenção de contraturas e atrofia muscular, treino de transferências (sentar, levantar), equilíbrio e, quando possível, os primeiros passos. O objetivo é a maior independência possível dentro de cada realidade."
        ]
      },
      {
        h2: "O cuidador também precisa de cuidado",
        paragraphs: [
          "Cuidar de um idoso acamado é exaustivo física e emocionalmente. É fundamental que o cuidador peça ajuda, divida tarefas, descanse e cuide da própria saúde. O apoio profissional — fisioterapia, enfermagem, médico — divide a responsabilidade e garante um cuidado de melhor qualidade."
        ]
      },
      {
        h2: "Perguntas frequentes",
        subsections: [
          {
            h3: "Com que frequência devo mudar a posição do paciente?",
            paragraph: "O recomendado é a cada 2 horas durante o dia. À noite, conforme orientação e condição clínica. A regularidade é essencial para prevenir úlceras."
          },
          {
            h3: "Meu familiar acamado pode melhorar?",
            paragraph: "Sim, sempre é possível melhorar a qualidade de vida. A fisioterapia trabalha a maior funcionalidade possível, previne complicações e traz conforto, dignidade e, em muitos casos, a volta gradual de movimentos e até de caminhadas."
          }
        ]
      }
    ],
    relatedService: {
      text: "Conheça o atendimento respiratório e motor domiciliar para idosos acamados em Recife:",
      linkText: "Conheça a fisioterapia respiratória em Recife",
      url: "/fisioterapia-respiratoria-recife/"
    }
  },

  // ARTIGO 6
  "fisioterapia-respiratoria-em-idosos": {
    slug: "fisioterapia-respiratoria-em-idosos",
    url: "/blog/fisioterapia-respiratoria-em-idosos/",
    canonical: "https://www.fisiomichellesantos.com.br/blog/fisioterapia-respiratoria-em-idosos/",
    metaTitle: "Fisioterapia Respiratória em Idosos | Fisioterapia para Pessoas Idosas em Recife",
    metaDescription: "Falta de ar, secreção acumulada, histórico de pneumonia: saiba quando a fisioterapia respiratória é necessária e como ela protege quem você ama.",
    title: "Fisioterapia respiratória em idosos: quando é necessária?",
    excerpt: "Falta de ar, secreção acumulada, histórico de pneumonia: saiba como a fisioterapia respiratória protege quem você ama de internações evitáveis.",
    date: "2026-09-29",
    updatedDate: "Atualizado em setembro de 2026",
    readTime: "5 min de leitura",
    author: {
      name: "Michelle Vieira dos Santos",
      role: "Fisioterapeuta Especialista em Gerontologia",
      crefito: "CREFITO: 3/276580-F"
    },
    image: "https://www.fisiomichellesantos.com.br/imagens/blog-respiratoria.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Fisioterapia Respiratória em Idosos: Quando é Necessária?",
      "description": "Falta de ar, secreção acumulada, histórico de pneumonia: saiba quando a fisioterapia respiratória é necessária e como ela protege quem você ama.",
      "image": "https://www.fisiomichellesantos.com.br/imagens/blog-respiratoria.jpg",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fisiomichellesantos.com.br/imagens/logo.png"
        }
      },
      "datePublished": "2026-09-29",
      "dateModified": "2026-09-29",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/fisioterapia-respiratoria-em-idosos/"
      },
      "inLanguage": "pt-BR"
    },
    introText: "Respirar bem é a base de tudo. Quando o cansaço excessivo, a falta de ar ou o acúmulo de secreção atrapalham a rotina e o sono de um idoso, a fisioterapia respiratória atua de forma precisa para limpar os pulmões, fortalecer a musculatura da respiração e prevenir complicações graves, como pneumonias.",
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
        ],
        afterText: "Se um ou mais desses sinais estão presentes, uma avaliação especializada pode fazer toda a diferença."
      },
      {
        h2: "O que a fisioterapia respiratória faz na prática?",
        paragraphs: [
          "O tratamento inclui técnicas para limpar as vias aéreas (removendo secreções), fortalecer a musculatura respiratória, expandir os pulmões e melhorar a troca de oxigênio. Tudo é feito com exercícios guiados e supervisionados, adaptados ao ritmo do paciente.",
          "O objetivo é simples e poderoso: respirar melhor, dormir melhor e viver melhor."
        ]
      },
      {
        h2: "A fisioterapia respiratória previne internações?",
        paragraphs: [
          "Sim. Manter os pulmões limpos e a musculatura respiratória fortalecida reduz significativamente o risco de complicações graves, como pneumonias — uma das principais causas de internação em pessoas idosas.",
          "Não deixe que um problema simples vire uma internação. O cuidado preventivo é o melhor investimento em saúde e qualidade de vida."
        ]
      },
      {
        h2: "O atendimento domiciliar é seguro?",
        paragraphs: [
          "Sim. O tratamento é feito com total segurança no conforto do lar, sem a necessidade de deslocamentos que podem ser arriscados e cansativos para a pessoa idosa. O paciente é tratado no ambiente onde se sente mais protegido, com todos os recursos terapêuticos levados até a casa."
        ]
      },
      {
        h2: "Como a família pode ajudar?",
        paragraphs: [
          "A família recebe orientações claras sobre como incentivar a respiração adequada, manter o ambiente arejado, evitar fumaça e poeira, e identificar sinais de alerta (falta de ar súbita, lábios arroxeados, febre). O acompanhamento profissional orienta cada etapa do cuidado."
        ]
      },
      {
        h2: "Como agendar uma avaliação?",
        paragraphs: [
          "Em Recife, a Fisio Michelle Santos oferece fisioterapia respiratória no conforto do lar, em Boa Viagem e região. Agende uma avaliação pelo WhatsApp (81) 98814-1144."
        ]
      },
      {
        h2: "Perguntas frequentes",
        subsections: [
          {
            h3: "Fisioterapia respiratória é só para quem tem doença grave?",
            paragraph: "Não. Também é preventiva e muito útil para idosos com mobilidade reduzida, acamados, em recuperação de cirurgias ou que simplesmente querem respirar melhor e evitar complicações."
          },
          {
            h3: "Quanto tempo dura o tratamento?",
            paragraph: "Depende do objetivo. Pode ser um programa curto de reabilitação após uma pneumonia ou internação, ou um acompanhamento contínuo para doenças crônicas. O plano é definido após a avaliação."
          }
        ]
      }
    ],
    relatedService: {
      text: "Conheça o atendimento especializado em fisioterapia respiratória domiciliar em Recife:",
      linkText: "Conheça a fisioterapia respiratória em Recife",
      url: "/fisioterapia-respiratoria-recife/"
    }
  },

  // ARTIGO 7
  "perda-de-mobilidade-em-idosos-primeiros-sinais": {
    "slug": "perda-de-mobilidade-em-idosos-primeiros-sinais",
    "url": "/blog/perda-de-mobilidade-em-idosos-primeiros-sinais/",
    "canonical": "https://www.fisiomichellesantos.com.br/blog/perda-de-mobilidade-em-idosos-primeiros-sinais/",
    "metaTitle": "Primeiros Sinais de Perda de Mobilidade em Idosos | Michelle Santos",
    "metaDescription": "Sua mãe demora para levantar? Seu pai encurtou os passos? Veja os sinais de perda de mobilidade em idosos e quando buscar fisioterapia domiciliar em Recife.",
    "title": "Quando foi o dia exato em que você percebeu que seus pais envelheceram?",
    "excerpt": "Quando a gente faz tudo pelos pais, o corpo deles deixa de ser exigido. Veja os primeiros sinais de perda de mobilidade e o que fazer a tempo.",
    "date": "2026-11-17",
    "updatedDate": "Atualizado em novembro de 2026",
    "readTime": "3 min de leitura",
    "author": {
      "name": "Michelle Vieira dos Santos",
      "role": "Fisioterapeuta Especialista em Gerontologia",
      "crefito": "CREFITO: 3/276580-F"
    },
    "image": "https://i.postimg.cc/1tCRCkKr/Fisio-Michelle-Santos-Atendimento-domiciliar-para-pessoas-idosas.webp",
    "schema": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Quando foi o dia exato em que você percebeu que seus pais envelheceram?",
      "description": "Sua mãe demora para levantar? Seu pai encurtou os passos? Veja os sinais de perda de mobilidade em idosos e quando buscar fisioterapia domiciliar em Recife.",
      "image": "https://i.postimg.cc/1tCRCkKr/Fisio-Michelle-Santos-Atendimento-domiciliar-para-pessoas-idosas.webp",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.postimg.cc/KYjgm4DW/Si-mbolo-Michelle-Santos-Fisioterapia-para-idosos-em-Recife.webp"
        }
      },
      "datePublished": "2026-11-17",
      "dateModified": "2026-11-17",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/perda-de-mobilidade-em-idosos-primeiros-sinais/"
      },
      "inLanguage": "pt-BR"
    },
    "introText": "Quase todo filho e toda filha tem um dia em que percebe que os papéis se inverteram: quem sempre cuidou agora precisa de cuidado.",
    "sections": [
      {
        "paragraphs": [
          "Raramente isso acontece de uma vez. Você repara que sua mãe demora mais para levantar do sofá e apoia as duas mãos nos braços da poltrona, algo que ela não fazia no ano passado. Ou que seu pai encurtou os passos e anda pela casa devagar, como quem confere o chão antes de pisar.",
          "A reação de quase todo mundo, movida por amor e preocupação, é poupar. \"Deixa que eu pego para você.\" \"Senta aí, mãe, não precisa ir até a cozinha.\" \"Deixa que eu fecho o portão.\" Parece proteção, mas o corpo funciona na base do uso. Quando a pessoa idosa para de fazer esforço porque a família faz tudo por ela, músculos, articulações e ossos recebem a mensagem de que não são mais necessários, e a massa e a força vão diminuindo. O equilíbrio piora, a autonomia vai embora aos poucos, e um cansaço que parecia comum pode terminar na primeira queda dentro de casa."
        ]
      },
      {
        "h2": "A diferença entre esperar o susto e prevenir a perda",
        "paragraphs": [
          "Muitas famílias em Recife só procuram ajuda profissional depois que o pior acontece: a fratura de fêmur, o tombo no banheiro, a internação de urgência. Só que a perda de mobilidade costuma dar sinais meses antes. Dá para ver no corredor e na sala, no jeito de desviar do tapete ou de se segurar nas paredes para chegar ao quarto.",
          "A fisioterapia em gerontologia vai além dos aparelhos de academia e dos protocolos frios. A Dra. Michelle Santos, especialista titulada pela SBGG e pela ABRAFIGE e com especialização pelo Instituto Israelita Albert Einstein, trabalha para que a pessoa idosa continue mandando no próprio corpo.",
          "No atendimento em casa, cada exercício é pensado para a rotina real do paciente. Em vez de treinar numa maca de clínica, o idoso pratica levantar da própria cama, contornar a mesinha de centro e caminhar com firmeza até a varanda."
        ]
      },
      {
        "h2": "Como cuidar sem tirar a liberdade",
        "paragraphs": [
          "Proteger quem a gente ama inclui deixar a pessoa se mover, com o apoio certo para fazer isso sem medo.",
          "Se você tem notado esses sinais nos seus pais ou avós em Boa Viagem, Pina, Setúbal, Imbiribeira, Derby, Graças, Piedade ou Candeias, vale agendar uma avaliação sem esperar a primeira queda. Quanto mais cedo o movimento volta para a rotina, mais autonomia a pessoa preserva.",
          "Para marcar, clique no botão de contato e fale direto com a Dra. Michelle Santos, que faz avaliações domiciliares em Recife. Ela olha a rotina do seu familiar e mostra o que dá para fazer para preservar a independência e a dignidade de quem construiu a história da sua família."
        ]
      }
    ],
    "references": [
      "Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO). Resolução nº 476, de 20 de dezembro de 2016. Reconhece e disciplina a Especialidade Profissional de Fisioterapia em Gerontologia. Diário Oficial da União, Brasília, 2017.",
      "Conselho Federal de Medicina (CFM) / Associação Médica Brasileira (AMB) / Sociedade Brasileira de Geriatria e Gerontologia (SBGG). Projeto Diretrizes: Quedas em Idosos: Prevenção. São Paulo: AMB/CFM, 2008.",
      "Organização Mundial da Saúde (OMS). Relatório Mundial de Envelhecimento e Saúde. Genebra: OMS, 2015."
    ],
    "relatedService": {
      "text": "Conheça o atendimento de fisioterapia em gerontologia, em casa, em Recife:",
      "linkText": "Conheça a fisioterapia em gerontologia em Recife",
      "url": "/fisioterapia-em-gerontologia-recife/"
    }
  },

  // ARTIGO 8
  "reabilitacao-em-casa-apos-alta-hospitalar-idosos": {
    "slug": "reabilitacao-em-casa-apos-alta-hospitalar-idosos",
    "url": "/blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos/",
    "canonical": "https://www.fisiomichellesantos.com.br/blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos/",
    "metaTitle": "Reabilitação em Casa Após a Alta Hospitalar | Michelle Santos",
    "metaDescription": "Seu familiar recebeu alta após cirurgia, fratura ou AVC? Entenda por que a reabilitação dentro de casa pode ser mais segura e como funciona em Recife.",
    "title": "O hospital deu alta, mas a realidade bateu à porta: quem vai reabilitar o seu familiar de verdade?",
    "excerpt": "A alta chegou e o alívio durou poucas horas. Veja como a reabilitação dentro de casa ajuda na recuperação depois de cirurgia, fratura ou AVC.",
    "date": "2026-11-17",
    "updatedDate": "Atualizado em novembro de 2026",
    "readTime": "3 min de leitura",
    "author": {
      "name": "Michelle Vieira dos Santos",
      "role": "Fisioterapeuta Especialista em Gerontologia",
      "crefito": "CREFITO: 3/276580-F"
    },
    "image": "https://i.postimg.cc/1tCRCkKr/Fisio-Michelle-Santos-Atendimento-domiciliar-para-pessoas-idosas.webp",
    "schema": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "O hospital deu alta, mas a realidade bateu à porta: quem vai reabilitar o seu familiar de verdade?",
      "description": "Seu familiar recebeu alta após cirurgia, fratura ou AVC? Entenda por que a reabilitação dentro de casa pode ser mais segura e como funciona em Recife.",
      "image": "https://i.postimg.cc/1tCRCkKr/Fisio-Michelle-Santos-Atendimento-domiciliar-para-pessoas-idosas.webp",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.postimg.cc/KYjgm4DW/Si-mbolo-Michelle-Santos-Fisioterapia-para-idosos-em-Recife.webp"
        }
      },
      "datePublished": "2026-11-17",
      "dateModified": "2026-11-17",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/reabilitacao-em-casa-apos-alta-hospitalar-idosos/"
      },
      "inLanguage": "pt-BR"
    },
    "introText": "O médico assina a alta, diz que a cirurgia ortopédica deu certo ou que o quadro neurológico está estável, e libera o paciente para ir para casa. Por um momento, a família respira aliviada.",
    "sections": [
      {
        "paragraphs": [
          "Algumas horas depois, a porta de casa se fecha e a realidade aparece. Seu pai ou sua mãe voltou de uma prótese de quadril, de joelho, de uma fratura complicada ou de um AVC. Tem receita comprida em cima da mesa, remédio com horário rigoroso e uma dúvida que não sai da cabeça: como levantar essa pessoa sem machucá-la? Como evitar que ela sinta dor?",
          "O primeiro impulso de muitos filhos é colocar o idoso no carro, enfrentar o trânsito de Recife, procurar vaga e levá-lo toda semana a uma clínica. É um caminho que cansa todo mundo. O deslocamento, o ambiente frio e o esforço físico gastam justamente a energia que a pessoa idosa precisaria para cicatrizar, ganhar força e recuperar a confiança."
        ]
      },
      {
        "h2": "A reabilitação funciona melhor onde a vida acontece",
        "paragraphs": [
          "A recuperação não acontece numa maca isolada do mundo. Ela é testada no piso da sala, no banheiro, no corredor por onde o paciente anda há anos.",
          "A Dra. Michelle Santos, fisioterapeuta especialista em Gerontologia que construiu sua prática clínica em São Paulo, atende em domicílio em Recife e adapta cada etapa do pós-operatório ortopédico ou do suporte neurológico à casa de verdade do paciente. O idoso dobra o joelho, mas o objetivo é vencer o degrau exato da entrada de casa. Os exercícios servem para ele voltar a comer à mesa da cozinha com a família, em vez de ficar no quarto.",
          "Para quadros mais delicados, como pessoas acima dos 80 anos ou acamadas, a exigência técnica é maior. Juntar a especialização em Gerontologia com a experiência em Fisioterapia em Terapia Intensiva permite acompanhar sinais vitais com rigor dentro de casa, prevenir contraturas severas e reduzir o risco de infecções pulmonares."
        ]
      },
      {
        "h2": "Quem entra na sua casa faz diferença",
        "paragraphs": [
          "Cuidar de quem passou a vida cuidando de você pede um bom profissional e também alguém que olhe nos olhos do paciente. A missão da Dra. Michelle é guiada por uma ideia: \"todo paciente é o amor da vida de alguém\".",
          "Você não precisa carregar essa fase sozinho. Ter ao lado uma especialista com formação no Instituto Israelita Albert Einstein e título pela SBGG e pela ABRAFIGE, num atendimento humanizado, deixa o dia a dia bem mais leve.",
          "Se o seu familiar recebeu alta ou precisa de reabilitação em Boa Viagem, Pina, Setúbal ou bairros vizinhos, vale considerar uma recuperação estruturada dentro de casa.",
          "Chame a Dra. Michelle Santos pelo WhatsApp, tire suas dúvidas sem compromisso e peça um plano de reabilitação domiciliar para o seu familiar."
        ]
      }
    ],
    "references": [
      "Conselho Federal de Medicina (CFM). Resolução CFM nº 1.668, de 7 de maio de 2003 (atualizada pela Resolução CFM nº 2.156/2016). Dispõe sobre normas técnicas necessárias à assistência domiciliar de paciente, definindo as responsabilidades e a atuação multiprofissional. Diário Oficial da União, Brasília, 2003.",
      "Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO). Resolução nº 402, de 3 de agosto de 2011. Disciplina a Especialidade Profissional Fisioterapia em Terapia Intensiva. Diário Oficial da União, Brasília, 2011.",
      "Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO). Resolução nº 476, de 20 de dezembro de 2016. Reconhece e disciplina a Especialidade Profissional de Fisioterapia em Gerontologia. Diário Oficial da União, Brasília, 2017."
    ],
    "relatedService": {
      "text": "Conheça a reabilitação ortopédica e pós-operatória domiciliar em Recife:",
      "linkText": "Conheça a reabilitação ortopédica e pós-operatória em Recife",
      "url": "/reabilitacao-ortopedica-e-pos-operatoria-recife/"
    }
  },

  // ARTIGO 9
  "familia-na-reabilitacao-domiciliar-do-idoso": {
    "slug": "familia-na-reabilitacao-domiciliar-do-idoso",
    "url": "/blog/familia-na-reabilitacao-domiciliar-do-idoso/",
    "canonical": "https://www.fisiomichellesantos.com.br/blog/familia-na-reabilitacao-domiciliar-do-idoso/",
    "metaTitle": "Família na Reabilitação Domiciliar do Idoso | Michelle Santos",
    "metaDescription": "O fisioterapeuta passa cerca de 3 horas por semana com o idoso. Veja como a família pode apoiar a reabilitação nas outras 165 horas, com segurança.",
    "title": "As outras 165 horas da semana: o que decide se o seu pai vai voltar a caminhar sozinho",
    "excerpt": "Uma semana tem 168 horas e a sessão dura cerca de 3. Entenda como a família pode manter a evolução do idoso no dia a dia, sem medo.",
    "date": "2026-11-17",
    "updatedDate": "Atualizado em novembro de 2026",
    "readTime": "3 min de leitura",
    "author": {
      "name": "Michelle Vieira dos Santos",
      "role": "Fisioterapeuta Especialista em Gerontologia",
      "crefito": "CREFITO: 3/276580-F"
    },
    "image": "https://i.postimg.cc/1tCRCkKr/Fisio-Michelle-Santos-Atendimento-domiciliar-para-pessoas-idosas.webp",
    "schema": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "As outras 165 horas da semana: o que decide se o seu pai vai voltar a caminhar sozinho",
      "description": "O fisioterapeuta passa cerca de 3 horas por semana com o idoso. Veja como a família pode apoiar a reabilitação nas outras 165 horas, com segurança.",
      "image": "https://i.postimg.cc/1tCRCkKr/Fisio-Michelle-Santos-Atendimento-domiciliar-para-pessoas-idosas.webp",
      "author": {
        "@type": "Person",
        "name": "Michelle Vieira dos Santos",
        "jobTitle": "Fisioterapeuta Especialista em Gerontologia"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Michelle Santos Fisioterapia para Pessoas Idosas em Recife",
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.postimg.cc/KYjgm4DW/Si-mbolo-Michelle-Santos-Fisioterapia-para-idosos-em-Recife.webp"
        }
      },
      "datePublished": "2026-11-17",
      "dateModified": "2026-11-17",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.fisiomichellesantos.com.br/blog/familia-na-reabilitacao-domiciliar-do-idoso/"
      },
      "inLanguage": "pt-BR"
    },
    "introText": "Uma semana tem 168 horas. Mesmo contratando um ótimo profissional para ir até a sua casa, o fisioterapeuta passa em média umas três horas por semana com a pessoa idosa. Então o que acontece nas outras 165?",
    "sections": [
      {
        "paragraphs": [
          "Muita família acha que a fisioterapia domiciliar funciona sozinha: contrata, assiste à sessão, respira aliviada e cruza os braços até a próxima visita. Só que força muscular não se acumula em consultas isoladas. A neuroplasticidade, que é a capacidade do cérebro de se reorganizar, e o ganho de estabilidade também dependem de repetição e de estímulo todos os dias.",
          "Quando o idoso não evolui, quase nunca falta vontade a ele. O que trava é o medo da família. Quando o fisioterapeuta vai embora, parentes e cuidadores têm receio de aplicar um exercício, de forçar no ângulo errado, de causar dor ou uma queda. Na dúvida, deixam a pessoa parada até a visita seguinte."
        ]
      },
      {
        "h2": "Como a família pode fazer parte do tratamento",
        "paragraphs": [
          "O cuidado não termina quando a fisioterapeuta fecha a porta da sua casa. Para o que foi ganho na sessão não se perder até a visita seguinte, a família precisa de orientações práticas e seguras que consiga acompanhar sem medo.",
          "Por isso, no atendimento da Dra. Michelle Santos em Recife, cada plano vem acompanhado de cartilhas de orientação personalizadas. Ela une sua formação especializada ao MBA em Prescrição de Treinamento para Grupos Especiais e Doenças Crônicas para montar guias visuais claros, feitos muitas vezes com fotos e referências do próprio paciente. As cartilhas ensinam a conduzir movimentos importantes do dia a dia:"
        ],
        "list": [
          "O treino funcional de sentar e levantar, que devolve a potência das pernas para ir ao banheiro ou à mesa sem precisar ser puxado pelos braços",
          "O apoio em uma perna só (apoio unipodal) com segurança, que treina a estabilidade necessária para vestir uma calça ou dar um passo no corredor",
          "A ativação da mobilidade do tornozelo, para a pisada continuar firme e o retorno circulatório funcionar bem"
        ]
      },
      {
        "h2": "O próximo passo para a autonomia de quem você ama",
        "paragraphs": [
          "Quando a família recebe orientação detalhada, o medo dá lugar à parceria. O idoso vê que todo mundo está empurrando para o mesmo lado e passa a comemorar cada pequena conquista junto com os parentes. A reabilitação vira parte da rotina da casa e deixa de parecer só uma obrigação médica.",
          "Você não precisa adivinhar como cuidar da mobilidade de quem passou a vida cuidando de você. Se quer uma parceira técnica ao lado da sua família em Recife para proteger a autonomia do seu familiar contra o sedentarismo, fale com a Dra. Michelle Santos. Clique no botão de contato, mande uma mensagem e dê o primeiro passo para um envelhecimento ativo e seguro dentro de casa."
        ]
      }
    ],
    "references": [
      "Conselho Federal de Fisioterapia e Terapia Ocupacional (COFFITO). Resolução nº 424, de 8 de julho de 2013. Estabelece o Código de Ética e Deontologia da Fisioterapia, detalhando os deveres do profissional quanto à orientação clara ao paciente, familiares e cuidadores. Diário Oficial da União, Brasília, 2013.",
      "Conselho Regional de Fisioterapia e Terapia Ocupacional (CREFITO). Diretrizes de Boas Práticas e Segurança na Assistência Fisioterapêutica Domiciliar. Brasil, 2021.",
      "Associação Brasileira de Fisioterapia em Gerontologia (ABRAFIGE). Guia de Recomendações para Prescrição de Exercícios Domiciliares e Prevenção do Declínio Funcional na Pessoa Idosa. Brasil, 2023."
    ],
    "relatedService": {
      "text": "Conheça o atendimento de fisioterapia em gerontologia, em casa, em Recife:",
      "linkText": "Conheça a fisioterapia em gerontologia em Recife",
      "url": "/fisioterapia-em-gerontologia-recife/"
    }
  }
};

export const blogPostsList: BlogPostData[] = [
  blogPostsData["como-prevenir-quedas-em-idosos"],
  blogPostsData["fisioterapia-pos-avc-em-casa"],
  blogPostsData["quando-procurar-fisioterapia-geriatrica"],
  blogPostsData["beneficios-do-pilates-para-idosos"],
  blogPostsData["cuidados-com-idosos-acamados"],
  blogPostsData["fisioterapia-respiratoria-em-idosos"],
  blogPostsData["perda-de-mobilidade-em-idosos-primeiros-sinais"],
  blogPostsData["reabilitacao-em-casa-apos-alta-hospitalar-idosos"],
  blogPostsData["familia-na-reabilitacao-domiciliar-do-idoso"],
];
