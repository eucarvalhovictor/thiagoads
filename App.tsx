import React, { useState, useEffect } from 'react';
import { 
  Music, 
  TrendingUp, 
  Users, 
  Target, 
  ShieldCheck, 
  Mic2, 
  PlayCircle, 
  AlertCircle,
  CheckCircle2,
  BrainCircuit,
  Palette,
  Bot,
  XCircle,
  SquareTerminal, // Added for module icons
  Search, // Added for Google Ads module
  Megaphone, // Added for Meta Ads module
  Focus, // Added for Audience module
  Zap, // Added for Campaigns module
  LineChart, // Added for Analysis module
  Star, // Added for Extra classes
} from 'lucide-react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { AccordionItem } from './components/Accordion';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    {
      icon: <SquareTerminal className="w-8 h-8 text-purple-400" />,
      title: "Módulo 1 – O Funil do Músico na Prática",
      description: "Entenda como transformar curiosos em fãs engajados e shows lotados, construindo uma base sólida para sua carreira musical.",
      topics: [
        "Transformando curiosos em fãs fiéis",
        "A oferta irresistível do músico para seu público",
        "Estratégias para criar um cronograma de conteúdo vencedor",
        "Desenvolvendo o mindset do músico empreendedor"
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: "Módulo 2 – Google Ads Essencial para Artistas",
      description: "Domine o Google Ads para alcançar seu público onde ele busca por música, shows e artistas como você, otimizando sua visibilidade online.",
      topics: [
        "Configurações essenciais para traqueamento (Pixel, GA4)",
        "Google Tag Manager para músicos: instalação e uso",
        "Eventos e Acionadores no GTM para monitoramento preciso",
        "Configurações da conta Google Ads para Músicos: passo a passo"
      ]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-pink-400" />,
      title: "Módulo 3 – Meta Ads: Presença Forte no Facebook e Instagram",
      description: "Construa sua presença digital no Facebook e Instagram, criando campanhas eficazes para engajar sua audiência e converter interesse em ação.",
      topics: [
        "Configuração prática de Gerenciador de Negócios e Conta de Anúncios",
        "Criando sua página de artista no Facebook para anúncios de sucesso",
        "Primeiros passos no Instagram para tráfego pago eficiente",
        "Estruturando seu portfólio de anúncios visuais e de vídeo"
      ]
    },
    {
      icon: <Focus className="w-8 h-8 text-green-400" />,
      title: "Módulo 4 – Segmentação Inteligente de Público no Meta Ads",
      description: "Aprenda a criar públicos personalizados e lookalikes para falar diretamente com quem realmente se importa com sua arte, maximizando o impacto de suas campanhas.",
      topics: [
        "Criando públicos personalizados (site, engajamento, lista de clientes)",
        "Estratégias de segmentação eficazes para músicos",
        "Construção de lista de contatos para contratantes",
        "Remanejamento e aquisição de novos fãs: táticas avançadas"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Módulo 5 – Campanhas Otimizadas e Estratégias de Sucesso",
      description: "Escolha os objetivos certos e desenvolva estratégias poderosas para cada etapa do funil do seu público, garantindo o máximo retorno sobre seu investimento.",
      topics: [
        "Objetivos de campanhas e utilizações no Meta Ads",
        "Estratégias de campanha para aumentar o engajamento",
        "Campanhas de conversão: do play no Spotify ao ingresso comprado",
        "Planejamento de orçamento e lances para diferentes cenários"
      ]
    },
    {
      icon: <LineChart className="w-8 h-8 text-red-400" />,
      title: "Módulo 6 – Criação, Análise e Otimização Contínua",
      description: "Da criação à otimização, domine o ciclo completo de suas campanhas para garantir resultados consistentes e crescer sua carreira de forma sustentável.",
      topics: [
        "Como subir campanhas do zero e analisar métricas essenciais",
        "Identificando KPIs cruciais para músicos: o que realmente importa",
        "Técnicas de otimização para maximizar o ROI e alcance",
        "Como criar uma campanha de marketing completa para músicos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-purple-500 selection:text-white font-sans">
      
      {/* Navbar/Sticky Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showStickyCTA ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-1.5 rounded-lg shadow-lg shadow-purple-900/20">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span>Réssonancia</span>
          </div>
          <div className={`${showStickyCTA ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'} transition-all duration-300`}>
             <button 
                onClick={scrollToOffer}
                className="bg-green-500 hover:bg-green-400 text-slate-900 text-sm font-bold py-2 px-6 rounded-full shadow-lg transition-colors"
             >
               Quero Minha Réssonancia
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600 rounded-full blur-[128px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-white">
            Você não precisa de gravadora pra <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">viver de música</span>.
            <br/>
            <span className="text-2xl md:text-4xl lg:text-5xl block mt-4 font-bold text-slate-200">
              Você precisa saber usar anúncios.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            Curso online prático que mostra, passo a passo, como usar <strong>Meta Ads, Google Ads, YouTube e Spotify</strong> pra lotar sua agenda, atrair fãs reais e parar de lançar música pro vazio.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-400 mb-10">
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-green-400" /> 100% online
            </div>
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-green-400" /> Feito por músico
            </div>
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-green-400" /> Acesso imediato
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button onClick={scrollToOffer} className="text-xl px-10 py-5 shadow-purple-500/25 shadow-xl">
              Quero aprender a atrair fãs com Réssonancia por R$ 97
            </Button>
            <p className="text-slate-400 text-sm">
              Pague menos do que você gastaria em uma saída de bar.
            </p>
          </div>
        </div>
      </header>

      {/* Pain Points */}
      <Section className="border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Isso aqui é pra você que tá cansado de tocar só pra algoritmo
            </h2>
            <p className="text-slate-400 text-lg">Você se reconhece em algum desses pontos?</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Você lança música atrás de música, mas as visualizações não passam de algumas centenas.",
              "Seus amigos falam que seu som é bom, mas contratante não te conhece.",
              "Você já tentou “impulsionar”, mas tem medo de jogar dinheiro fora.",
              "Sua agenda de shows está cheia de buracos e você nunca sabe como vai ser o próximo mês.",
              "Você sente que faz tudo sozinho: compõe, grava, posta… mas a carreira não anda.",
              "Você vê artistas piores que você crescendo e se pergunta: “o que eu tô fazendo de errado?”"
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-purple-900/20 border border-purple-500/20 p-6 rounded-xl">
            <p className="text-xl font-semibold text-purple-200">
              Se você pensou “sou eu” em pelo menos 2 dessas frases, esse curso foi feito exatamente pra você.
            </p>
          </div>
        </div>
      </Section>

      {/* The Shift */}
      <Section darker>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" /> A Virada de Chave
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              A diferença não é talento. <br/><span className="text-purple-400">É estratégia.</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg">
              <p>
                Hoje, quem cresce na música não é só quem canta melhor.
                É quem sabe aparecer pras pessoas certas, nas cidades certas, na hora certa.
              </p>
              <p>
                E é exatamente isso que você vai aprender aqui:
                Como usar <strong>Meta Ads, Google Ads, YouTube e Spotify</strong> como aliados da sua carreira.
              </p>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">Visibilidade Real</h3>
                <p className="text-slate-400">Ser visto por contratantes da sua região.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-green-500/20 p-3 rounded-lg text-green-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">Fãs Fiéis</h3>
                <p className="text-slate-400">Transformar ouvinte aleatório em fã que engaja.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">Funil de Vendas</h3>
                <p className="text-slate-400">Do play no Spotify até o ingresso comprado pro show.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* New Curriculum Section */}
      <Section>
        <div className="text-center mb-12">
          <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">Aprenda na Prática</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">O que você vai aprender em Réssonancia</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Descubra os segredos do tráfego pago para músicos independentes, com um passo a passo claro e direto, focado nos seus resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-slate-800/50 flex-shrink-0">
                  {module.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{module.title}</h3>
              </div>
              <p className="text-slate-400 mb-5 flex-grow">{module.description}</p>
              <AccordionItem title="Ver tópicos do módulo">
                <ul className="space-y-2 list-disc list-inside text-slate-300">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </AccordionItem>
            </div>
          ))}

          {/* Aulas Extras Card */}
          <div className="md:col-span-2 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/30 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex-shrink-0">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Aulas Extras e Bônus Exclusivos</h3>
            </div>
            <p className="text-purple-200 mb-5 flex-grow">
              Aprofunde seus conhecimentos com conteúdos avançados e ferramentas para impulsionar ainda mais sua carreira, incluindo dicas e hacks para plataformas específicas.
            </p>
            <AccordionItem title="Ver conteúdo extra">
              <ul className="space-y-2 list-disc list-inside text-purple-200">
                <li>Anúncios no Spotify: Chegue aos seus ouvintes</li>
                <li>Google Ads Avançado: Hacks e técnicas secretas</li>
                <li>YouTube Ads para Artistas: Promova seus clipes e shows</li>
                <li>Estratégias de remarketing para músicos</li>
              </ul>
            </AccordionItem>
          </div>
        </div>
      </Section>

      {/* Bonuses */}
      <Section darker>
        <div className="text-center mb-12">
          <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">Presentes Exclusivos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Bônus que valem mais que o curso</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all group">
            <Bot className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">1. Agente de Conteúdo (IA)</h3>
            <p className="text-slate-400">Um agente pronto pra criar roteiros, legendas e ideias de conteúdos. É só alimentar com suas infos.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all group">
            <BrainCircuit className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">2. Assistente de Composição</h3>
            <p className="text-slate-400">Técnicas de neurociência aplicadas à composição para criar músicas mais memoráveis.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all group">
            <Mic2 className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">3. Prompts para Suno AI</h3>
            <p className="text-slate-400">Prompts pensados pra músicos, pra te ajudar em criações, ideias e conceitos.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all group">
            <Palette className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">4. Templates Visuais</h3>
            <p className="text-slate-400">Modelos de artes para shows, lançamentos e divulgação. É só editar e postar.</p>
          </div>
        </div>
      </Section>

      {/* Target Audience */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-green-900/10 border border-green-900/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <CheckCircle2 /> Pra você se...
            </h3>
            <ul className="space-y-4">
              {[
                "É músico independente ou tem banda autoral/cover.",
                "Quer lotar agenda e ganhar dinheiro com música.",
                "Está disposto a aprender o básico de anúncios.",
                "Quer criar audiência própria, sem depender de algoritmo."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-900/10 border border-red-900/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <XCircle /> Não é pra você se...
            </h3>
            <ul className="space-y-4">
              {[
                "Quer “ficar famoso” sem esforço.",
                "Não está disposto a investir o mínimo em anúncios.",
                "Prefere culpar o mercado, o país e o algoritmo ao invés de agir."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Bio */}
      <Section darker>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-800 rounded-full flex-shrink-0 overflow-hidden border-4 border-purple-500/30">
            <img 
              src="https://i.imgur.com/J5eDh8f.jpeg" 
              alt="Foto de perfil de Thiago, criador do curso Réssonancia" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Conheça o Thiago</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Músico desde os 8 anos, aos 32 já vivi quase tudo: dupla sertaneja, grupo de pagode, composições gravadas (César & Paulinho) e dividi palco com grandes nomes como Daniel.
              </p>
              <p>
                Desde 2018 mergulhei no marketing digital. Sou formado em Administração, com MBA em Growth e atuo como analista de dados e IA.
              </p>
              <p className="font-semibold text-purple-300">
                Esse curso é a junção prática do palco + marketing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Offer */}
      <Section id="offer" className="relative overflow-hidden">
        {/* Glow effect behind offer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Quanto vale parar de tocar só pra algoritmo?
          </h2>
          
          <div className="text-slate-400 mb-8 space-y-2">
            <p>Se fosse mentoria individual, com aulas de Ads, Estratégia e Bônus...</p>
            <p className="line-through text-lg">Seria fácil cobrar R$ 597,00</p>
          </div>

          <div className="mb-8">
            <span className="text-slate-300 text-lg">Mas hoje você leva tudo por apenas:</span>
            <div className="text-6xl md:text-7xl font-black text-white mt-2 mb-2 tracking-tight">
              R$ 97
              <span className="text-2xl md:text-3xl text-slate-500 font-normal">,00</span>
            </div>
            <p className="text-green-400 font-medium">À vista ou parcelado no cartão</p>
          </div>

          <Button fullWidth className="text-xl py-6 mb-6 bg-green-600 hover:bg-green-500 border-green-500/30 shadow-green-900/50">
            QUERO MINHA RÉSSONANCIA AGORA!
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-green-400" />
              <div className="text-left">
                <p className="font-bold text-white">Garantia de 7 dias</p>
                <p className="text-xs text-slate-400">Risco zero. Não gostou, devolvemos.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PlayCircle className="w-8 h-8 text-purple-400" />
              <div className="text-left">
                <p className="font-bold text-white">Acesso Imediato</p>
                <p className="text-xs text-slate-400">Receba o login no seu email agora.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section darker>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          
          <AccordionItem title="Nunca fiz anúncio na vida. Vou conseguir acompanhar?">
            Sim. O curso foi pensado pra quem está começando do zero. Eu te mostro onde clicar, como configurar e o que realmente importa.
          </AccordionItem>
          
          <AccordionItem title="Preciso investir muito em anúncios?">
            Não. Você pode começar com valores baixos por dia, testar criativos e ir aumentando conforme for vendo resultado.
          </AccordionItem>
          
          <AccordionItem title="O curso é só pra quem faz música autoral?">
            Não. Serve pra artistas autorais, bandas de cover, projetos de barzinho, DJs e qualquer músico que queira atrair público e contratante.
          </AccordionItem>

          <AccordionItem title="Posso fazer o curso usando só o celular?">
            Você consegue assistir às aulas pelo celular, mas pra configurar anúncios de forma profissional é recomendado usar um notebook ou PC.
          </AccordionItem>
          
          <AccordionItem title="Por quanto tempo vou ter acesso?">
            Você tem acesso por 1 ano para rever as aulas quantas vezes quiser e acompanhar as atualizações.
          </AccordionItem>
        </div>
      </Section>

      {/* Final CTA */}
      <footer className="py-20 text-center px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Sua música já é boa. <br/>Agora ela precisa ser ouvida.
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Por R$ 97, você tem acesso a um passo a passo direto, feito por um músico que entende de tráfego.
          </p>
          <Button onClick={scrollToOffer} className="px-12 py-5 text-lg">
            Quero transformar anúncios em fãs e shows
          </Button>
          <p className="mt-12 text-slate-600 text-sm">
            © {new Date().getFullYear()} Réssonancia. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;