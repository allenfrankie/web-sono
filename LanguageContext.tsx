import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'EN' | 'CN' | 'ES' | 'FR' | 'DE' | 'JP';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'EN', label: 'English' },
  { code: 'CN', label: '中文' },
  { code: 'ES', label: 'Español' },
  { code: 'FR', label: 'Français' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'JP', label: '日本語' },
];

const translations = {
  EN: {
    nav: {
      work: 'Work',
      expertise: 'Expertise',
      insights: 'Insights',
      careers: 'Careers',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      startProject: "Start a Project"
    },
    hero: {
      weAre: 'We are SONO-AMP',
      titleLine1: 'AMPLIFY',
      titleLine2: 'YOUR VISION',
      description: 'Global production partners for brands that refuse to whisper. We blend creative intelligence with cutting-edge technology to make you louder.',
      ctaWork: 'See Our Work',
      ctaExpertise: 'Our Expertise'
    },
    marquee: ["CREATIVE", "PRODUCTION", "STRATEGY", "TECHNOLOGY", "SOURCING", "MEDIA", "GLOBAL", "LOCAL"],
    services: {
      capabilities: 'Capabilities',
      title: 'What We Do Best',
      description: 'We offer end-to-end marketing production services that scale with your needs. From concept to delivery, we are your amplifiers.',
      items: [
        { title: "Content Production", desc: "High-impact visual storytelling tailored for global audiences across every screen." },
        { title: "Digital Experience", desc: "Immersive web and app ecosystems designed to convert and engage." },
        { title: "Strategic Amplification", desc: "Data-driven media planning to ensure your voice is heard above the noise." },
        { title: "Creative Tech", desc: "Leveraging AI and next-gen frameworks to build scalable brand infrastructures." }
      ],
      learnMore: "Learn More"
    },
    work: {
      title: 'Recent Work',
      description: "We partner with the world's leading brands to deliver work that matters.",
      viewAll: 'View All Projects'
    },
    insights: {
      eyebrow: 'Thinking',
      title: 'Latest Insights',
      viewAll: 'View all articles',
      readArticle: 'Read Article',
      posts: [
        { title: "The Future of AI in Creative Production", excerpt: "How generative models are reshaping the workflow of global design agencies without losing the human touch." },
        { title: "Sustainable Branding: More Than Just Green", excerpt: "Why modern consumers demand authenticity in eco-conscious messaging and how to deliver it." },
        { title: "Navigating the Metaverse Marketing Crash", excerpt: "What went wrong, what survived, and where the real opportunities for immersive brand experiences lie today." }
      ]
    },
    careers: {
      eyebrow: 'Join the Noise',
      title: 'Build the Future with Us',
      description: "We are a team of amplifiers, creators, and tech-heads. We don't just follow trends; we set the volume. If you're ready to make an impact, we want to hear from you.",
      viewCulture: 'View Culture',
      apply: 'Apply Now',
      archived: 'See Archived Roles'
    },
    contact: {
      title: 'Ready to turn up the volume?',
      description: "Let's discuss how SONO-AMP can transform your brand's presence in the global market.",
      startProject: 'Start a Project',
      scheduleCall: 'Schedule a Call'
    },
    footer: {
      tagline: 'Amplifying creative intelligence for a noisy world.',
      explore: 'Explore',
      office: 'Office',
      social: 'Social',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  CN: {
    nav: {
      work: '作品',
      expertise: '专长',
      insights: '洞察',
      careers: '招聘',
      contact: '联系',
      letsTalk: "开始洽谈",
      startProject: "启动项目"
    },
    hero: {
      weAre: '我们是 SONO-AMP',
      titleLine1: '放大',
      titleLine2: '您的愿景',
      description: '为拒绝低调的品牌提供全球制作合作伙伴。我们将创意智慧与尖端技术融合，让您的声音更响亮。',
      ctaWork: '查看作品',
      ctaExpertise: '我们的专长'
    },
    marquee: ["创意", "制作", "策略", "技术", "采购", "媒体", "全球", "本土"],
    services: {
      capabilities: '核心能力',
      title: '我们的专长',
      description: '我们提供可随需扩展的端到端营销制作服务。从概念到交付，我们是您的扩音器。',
      items: [
        { title: "内容制作", desc: "为全球受众量身定制的高影响力视觉叙事，覆盖每一个屏幕。" },
        { title: "数字体验", desc: "旨在转化和互动的沉浸式网络与应用生态系统。" },
        { title: "策略放大", desc: "数据驱动的媒体规划，确保您的声音在喧嚣中被听到。" },
        { title: "创意科技", desc: "利用人工智能和下一代框架构建可扩展的品牌基础设施。" }
      ],
      learnMore: "了解更多"
    },
    work: {
      title: '近期作品',
      description: "我们与全球领先品牌合作，交付至关重要的作品。",
      viewAll: '查看所有项目'
    },
    insights: {
      eyebrow: '思考',
      title: '最新洞察',
      viewAll: '查看所有文章',
      readArticle: '阅读文章',
      posts: [
        { title: "创意制作中人工智能的未来", excerpt: "生成模型如何在不失去人性触感的情况下重塑全球设计机构的工作流程。" },
        { title: "可持续品牌：不仅是绿色", excerpt: "为什么现代消费者要求生态意识信息的真实性，以及如何实现它。" },
        { title: "驾驭元宇宙营销崩盘", excerpt: "出了什么问题，什么幸存下来，以及今天沉浸式品牌体验的真正机会在哪里。" }
      ]
    },
    careers: {
      eyebrow: '加入喧嚣',
      title: '与我们共建未来',
      description: "我们是一支由放大器、创作者和技术狂热者组成的团队。我们不追随潮流；我们设定音量。如果您准备好产生影响，我们想听听您的声音。",
      viewCulture: '查看文化',
      apply: '立即申请',
      archived: '查看归档职位'
    },
    contact: {
      title: '准备好调大音量了吗？',
      description: "让我们讨论 SONO-AMP 如何改变您的品牌在全球市场中的存在感。",
      startProject: '启动项目',
      scheduleCall: '预约通话'
    },
    footer: {
      tagline: '为喧嚣的世界放大创意智慧。',
      explore: '探索',
      office: '办公室',
      social: '社交',
      rights: '保留所有权利。',
      privacy: '隐私政策',
      terms: '服务条款'
    }
  },
  ES: {
    nav: {
      work: 'Trabajos',
      expertise: 'Experiencia',
      insights: 'Perspectivas',
      careers: 'Carreras',
      contact: 'Contacto',
      letsTalk: "Hablemos",
      startProject: "Iniciar Proyecto"
    },
    hero: {
      weAre: 'Somos SONO-AMP',
      titleLine1: 'AMPLIFICA',
      titleLine2: 'TU VISIÓN',
      description: 'Socios de producción global para marcas que se niegan a susurrar. Mezclamos inteligencia creativa con tecnología de punta para hacerte más ruidoso.',
      ctaWork: 'Ver Trabajos',
      ctaExpertise: 'Nuestra Experiencia'
    },
    marquee: ["CREATIVO", "PRODUCCIÓN", "ESTRATEGIA", "TECNOLOGÍA", "SOURCING", "MEDIOS", "GLOBAL", "LOCAL"],
    services: {
      capabilities: 'Capacidades',
      title: 'Lo Que Hacemos Mejor',
      description: 'Ofrecemos servicios de producción de marketing de extremo a extremo que escalan con tus necesidades. Desde el concepto hasta la entrega.',
      items: [
        { title: "Producción de Contenido", desc: "Narración visual de alto impacto adaptada para audiencias globales en cada pantalla." },
        { title: "Experiencia Digital", desc: "Ecosistemas web y de aplicaciones inmersivos diseñados para convertir y comprometer." },
        { title: "Amplificación Estratégica", desc: "Planificación de medios basada en datos para asegurar que tu voz se escuche sobre el ruido." },
        { title: "Tecnología Creativa", desc: "Aprovechando la IA y marcos de próxima generación para construir infraestructuras de marca escalables." }
      ],
      learnMore: "Aprender Más"
    },
    work: {
      title: 'Trabajo Reciente',
      description: "Nos asociamos con las marcas líderes del mundo para entregar trabajos que importan.",
      viewAll: 'Ver Todos los Proyectos'
    },
    insights: {
      eyebrow: 'Pensamiento',
      title: 'Últimas Perspectivas',
      viewAll: 'Ver todos los artículos',
      readArticle: 'Leer Artículo',
      posts: [
        { title: "El Futuro de la IA en la Producción Creativa", excerpt: "Cómo los modelos generativos están remodelando el flujo de trabajo sin perder el toque humano." },
        { title: "Branding Sostenible: Más que Verde", excerpt: "Por qué los consumidores modernos exigen autenticidad en los mensajes ecológicos." },
        { title: "Navegando el Colapso del Metaverso", excerpt: "Qué salió mal, qué sobrevivió y dónde yacen las verdaderas oportunidades hoy." }
      ]
    },
    careers: {
      eyebrow: 'Únete al Ruido',
      title: 'Construye el Futuro con Nosotros',
      description: "Somos un equipo de amplificadores, creadores y tecnólogos. No solo seguimos tendencias; establecemos el volumen.",
      viewCulture: 'Ver Cultura',
      apply: 'Aplica Ahora',
      archived: 'Ver Roles Archivados'
    },
    contact: {
      title: '¿Listo para subir el volumen?',
      description: "Hablemos de cómo SONO-AMP puede transformar la presencia de tu marca en el mercado global.",
      startProject: 'Iniciar Proyecto',
      scheduleCall: 'Agendar Llamada'
    },
    footer: {
      tagline: 'Amplificando la inteligencia creativa para un mundo ruidoso.',
      explore: 'Explorar',
      office: 'Oficina',
      social: 'Social',
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio'
    }
  },
  FR: {
    nav: {
      work: 'Travaux',
      expertise: 'Expertise',
      insights: 'Idées',
      careers: 'Carrières',
      contact: 'Contact',
      letsTalk: "Parlons",
      startProject: "Lancer un Projet"
    },
    hero: {
      weAre: 'Nous sommes SONO-AMP',
      titleLine1: 'AMPLIFIEZ',
      titleLine2: 'VOTRE VISION',
      description: 'Partenaires de production mondiaux pour les marques qui refusent de chuchoter. Nous mélangeons intelligence créative et technologie de pointe.',
      ctaWork: 'Voir nos travaux',
      ctaExpertise: 'Notre Expertise'
    },
    marquee: ["CRÉATIF", "PRODUCTION", "STRATÉGIE", "TECHNOLOGIE", "SOURCING", "MÉDIAS", "GLOBAL", "LOCAL"],
    services: {
      capabilities: 'Capacités',
      title: 'Ce Que Nous Faisons',
      description: 'Services de production marketing de bout en bout qui évoluent avec vos besoins. Du concept à la livraison.',
      items: [
        { title: "Production de Contenu", desc: "Narration visuelle à fort impact adaptée aux audiences mondiales." },
        { title: "Expérience Numérique", desc: "Écosystèmes web et applications immersifs conçus pour convertir et engager." },
        { title: "Amplification Stratégique", desc: "Planification média axée sur les données pour faire entendre votre voix." },
        { title: "Technologie Créative", desc: "Tirer parti de l'IA pour construire des infrastructures de marque évolutives." }
      ],
      learnMore: "En Savoir Plus"
    },
    work: {
      title: 'Travaux Récents',
      description: "Nous travaillons avec les plus grandes marques mondiales pour livrer des projets importants.",
      viewAll: 'Voir Tous les Projets'
    },
    insights: {
      eyebrow: 'Réflexion',
      title: 'Dernières Idées',
      viewAll: 'Voir tous les articles',
      readArticle: 'Lire l\'Article',
      posts: [
        { title: "L'Avenir de l'IA dans la Production Créative", excerpt: "Comment les modèles génératifs remodèlent le flux de travail des agences de design." },
        { title: "Marque Durable : Plus que Vert", excerpt: "Pourquoi les consommateurs modernes exigent l'authenticité dans les messages écologiques." },
        { title: "Naviguer dans le Krach du Métavers", excerpt: "Ce qui n'a pas fonctionné et où se trouvent les vraies opportunités aujourd'hui." }
      ]
    },
    careers: {
      eyebrow: 'Rejoignez le Bruit',
      title: 'Construisez l\'Avenir avec Nous',
      description: "Nous sommes une équipe d'amplificateurs. Nous ne suivons pas seulement les tendances ; nous réglons le volume.",
      viewCulture: 'Voir la Culture',
      apply: 'Postuler',
      archived: 'Voir les Rôles Archivés'
    },
    contact: {
      title: 'Prêt à monter le son ?',
      description: "Discutons de la façon dont SONO-AMP peut transformer la présence de votre marque.",
      startProject: 'Lancer un Projet',
      scheduleCall: 'Planifier un Appel'
    },
    footer: {
      tagline: 'Amplifier l\'intelligence créative pour un monde bruyant.',
      explore: 'Explorer',
      office: 'Bureau',
      social: 'Social',
      rights: 'Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation'
    }
  },
  DE: {
    nav: {
      work: 'Arbeit',
      expertise: 'Expertise',
      insights: 'Einblicke',
      careers: 'Karriere',
      contact: 'Kontakt',
      letsTalk: "Lass uns reden",
      startProject: "Projekt Starten"
    },
    hero: {
      weAre: 'Wir sind SONO-AMP',
      titleLine1: 'VERSTÄRKEN',
      titleLine2: 'IHRE VISION',
      description: 'Globale Produktionspartner für Marken, die sich weigern zu flüstern. Wir verbinden kreative Intelligenz mit Spitzentechnologie.',
      ctaWork: 'Unsere Arbeit',
      ctaExpertise: 'Unsere Expertise'
    },
    marquee: ["KREATIV", "PRODUKTION", "STRATEGIE", "TECHNOLOGIE", "SOURCING", "MEDIEN", "GLOBAL", "LOKAL"],
    services: {
      capabilities: 'Fähigkeiten',
      title: 'Was Wir Am Besten Können',
      description: 'End-to-End-Marketing-Produktionsdienste, die mit Ihren Anforderungen skalieren. Vom Konzept bis zur Lieferung.',
      items: [
        { title: "Content-Produktion", desc: "Visuelles Storytelling mit hoher Wirkung für globale Zielgruppen." },
        { title: "Digitale Erfahrung", desc: "Immersive Web- und App-Ökosysteme, entwickelt für Conversion und Engagement." },
        { title: "Strategische Verstärkung", desc: "Datengesteuerte Medienplanung, damit Ihre Stimme gehört wird." },
        { title: "Kreative Technologie", desc: "Nutzung von KI und Next-Gen-Frameworks für skalierbare Infrastrukturen." }
      ],
      learnMore: "Mehr Erfahren"
    },
    work: {
      title: 'Aktuelle Arbeiten',
      description: "Wir arbeiten mit den weltweit führenden Marken zusammen, um bedeutende Arbeiten zu liefern.",
      viewAll: 'Alle Projekte Anzeigen'
    },
    insights: {
      eyebrow: 'Denken',
      title: 'Neueste Einblicke',
      viewAll: 'Alle Artikel',
      readArticle: 'Artikel Lesen',
      posts: [
        { title: "Die Zukunft der KI in der Kreativproduktion", excerpt: "Wie generative Modelle den Workflow globaler Designagenturen neu gestalten." },
        { title: "Nachhaltiges Branding", excerpt: "Warum moderne Verbraucher Authentizität in umweltbewussten Botschaften fordern." },
        { title: "Navigation durch den Metaverse-Crash", excerpt: "Was schief lief und wo heute die echten Chancen liegen." }
      ]
    },
    careers: {
      eyebrow: 'Mach Lärm',
      title: 'Bau die Zukunft mit Uns',
      description: "Wir sind ein Team von Verstärkern. Wir folgen keinen Trends; wir bestimmen die Lautstärke.",
      viewCulture: 'Kultur Ansehen',
      apply: 'Jetzt Bewerben',
      archived: 'Archivierte Rollen'
    },
    contact: {
      title: 'Bereit, die Lautstärke aufzudrehen?',
      description: "Lassen Sie uns besprechen, wie SONO-AMP die Präsenz Ihrer Marke transformieren kann.",
      startProject: 'Projekt Starten',
      scheduleCall: 'Anruf Vereinbaren'
    },
    footer: {
      tagline: 'Verstärkung kreativer Intelligenz für eine laute Welt.',
      explore: 'Erkunden',
      office: 'Büro',
      social: 'Sozial',
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen'
    }
  },
  JP: {
    nav: {
      work: '作品',
      expertise: '専門知識',
      insights: 'インサイト',
      careers: '採用情報',
      contact: 'お問い合わせ',
      letsTalk: "話しましょう",
      startProject: "プロジェクト開始"
    },
    hero: {
      weAre: '私たちは SONO-AMP です',
      titleLine1: 'ビジョンを',
      titleLine2: '増幅する',
      description: 'ささやくことを拒むブランドのためのグローバル制作パートナー。クリエイティブな知性と最先端技術を融合させ、あなたの声を大きくします。',
      ctaWork: '作品を見る',
      ctaExpertise: '専門知識'
    },
    marquee: ["クリエイティブ", "制作", "戦略", "技術", "ソーシング", "メディア", "グローバル", "ローカル"],
    services: {
      capabilities: '能力',
      title: '私たちの得意分野',
      description: 'ニーズに合わせて拡張可能なエンドツーエンドのマーケティング制作サービス。コンセプトから納品まで、私たちが増幅器となります。',
      items: [
        { title: "コンテンツ制作", desc: "あらゆるスクリーンでグローバルな視聴者に合わせたインパクトのあるビジュアルストーリーテリング。" },
        { title: "デジタル体験", desc: "コンバージョンとエンゲージメントのために設計された没入型Webおよびアプリエコシステム。" },
        { title: "戦略的増幅", desc: "ノイズの中でもあなたの声が確実に届くようにするデータ主導のメディアプランニング。" },
        { title: "クリエイティブテック", desc: "AIと次世代フレームワークを活用してスケーラブルなブランドインフラを構築。" }
      ],
      learnMore: "詳細を見る"
    },
    work: {
      title: '最近の作品',
      description: "世界の主要ブランドと提携し、重要な作品を提供しています。",
      viewAll: 'すべてのプロジェクトを見る'
    },
    insights: {
      eyebrow: '思考',
      title: '最新のインサイト',
      viewAll: 'すべての記事を見る',
      readArticle: '記事を読む',
      posts: [
        { title: "クリエイティブ制作におけるAIの未来", excerpt: "生成モデルが人間味を失うことなくグローバルデザインエージェンシーのワークフローをどのように再形成しているか。" },
        { title: "サステナブルブランディング", excerpt: "なぜ現代の消費者は環境に配慮したメッセージに真実性を求めるのか。" },
        { title: "メタバースマーケティングの崩壊をナビゲート", excerpt: "何が間違っていたのか、何が生き残ったのか、そして今日の真の機会はどこにあるのか。" }
      ]
    },
    careers: {
      eyebrow: 'ノイズに参加する',
      title: '私たちと未来を築く',
      description: "私たちは増幅器、クリエイター、技術者のチームです。トレンドを追うだけでなく、ボリュームを設定します。",
      viewCulture: '文化を見る',
      apply: '今すぐ応募',
      archived: '過去の役割を見る'
    },
    contact: {
      title: 'ボリュームを上げる準備はできましたか？',
      description: "SONO-AMPがグローバル市場でのブランドプレゼンスをどのように変革できるかについて話し合いましょう。",
      startProject: 'プロジェクト開始',
      scheduleCall: '通話を予約'
    },
    footer: {
      tagline: '騒々しい世界のためにクリエイティブインテリジェンスを増幅する。',
      explore: '探検',
      office: 'オフィス',
      social: 'ソーシャル',
      rights: '無断転載を禁じます。',
      privacy: 'プライバシーポリシー',
      terms: '利用規約'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['EN'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};