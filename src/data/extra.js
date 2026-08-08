// Helper: pick a localized value. Accepts a string (same for all langs) or {it,en,es,fr,zh}
export const pick = (v, lang) =>
  v && typeof v === "object" && !Array.isArray(v) ? v[lang] || v.it : v;

export const formazione = [
  { periodo: "2015 — oggi", titolo: { it: "Insieme per l'Arte", en: "Insieme per l'Arte", es: "Insieme per l'Arte", fr: "Insieme per l'Arte", zh: "Insieme per l'Arte 艺术协会" }, luogo: "Associazione culturale, Roma", nota: { it: "Inizio del percorso artistico ed espositivo", en: "Beginning of her artistic and exhibition path", es: "Inicio de su trayectoria artística y expositiva", fr: "Début de son parcours artistique et d'expositions", zh: "艺术与展览生涯的起点" } },
  { periodo: "2010 — oggi", titolo: { it: "Licenza di Tatuatore", en: "Tattoo Artist License", es: "Licencia de tatuadora", fr: "Licence de tatoueuse", zh: "纹身师执照" }, luogo: "Fashion Look Academy" },
  { periodo: "2009 — 2010", titolo: { it: "Make-up Artist", en: "Make-up Artist", es: "Maquilladora", fr: "Maquilleuse", zh: "化妆师" }, luogo: "Studio 13, Roma" },
  { periodo: "2008", titolo: { it: "Corso di 'Cool Hunter'", en: "'Cool Hunter' Course", es: "Curso de 'Cool Hunter'", fr: "Cours de « Cool Hunter »", zh: "'潮流猎手'课程" }, luogo: "Central Saint Martins, Londra" },
  { periodo: "2002 — 2007", titolo: { it: "Designer e Illustratrice", en: "Designer and Illustrator", es: "Diseñadora e ilustradora", fr: "Designer et illustratrice", zh: "设计师与插画师" }, luogo: "Atelier Marco Coretti" },
  { periodo: "1998 — 2003", titolo: { it: "Diploma Liceo d'Artigianato e Moda", en: "Diploma in Craft and Fashion", es: "Diploma de Artesanía y Moda", fr: "Diplôme d'Artisanat et Mode", zh: "工艺与时尚高中文凭" }, luogo: "'Armando Diaz', Roma" },
];

export const lingue = [
  { l: { it: "Italiano", en: "Italian", es: "Italiano", fr: "Italien", zh: "意大利语" }, v: { it: "Madrelingua", en: "Native", es: "Nativo", fr: "Langue maternelle", zh: "母语" } },
  { l: { it: "Inglese", en: "English", es: "Inglés", fr: "Anglais", zh: "英语" }, v: { it: "Intermedio", en: "Intermediate", es: "Intermedio", fr: "Intermédiaire", zh: "中级" } },
];

export const mostre = [
  { data: "Set 2022", titolo: "CRYPTICA", luogo: "Tempio di Roma, Roma", cura: "Arte e Città a Colori — A. Dei & F. Galvano" },
  { data: "Mag 2022", titolo: "SUGGESTIONI", luogo: "Wire Coworking, Roma", cura: "Arte e Città a Colori — A. Dei & F. Galvano" },
  { data: "Ott 2019", titolo: "L'INFINITO", luogo: "Rome Art Week · Residenze Monticello, Roma", cura: "Roberta Melasecca" },
  { data: "Ott 2019", titolo: "S.P.Q.R. — Street Artist", luogo: "Tevere Art Gallery (T.A.G.), Roma", cura: "er Pinto" },
  { data: "Mar 2019", titolo: "MESE DELLA FOTOGRAFIA", luogo: "Camera79 Art Gallery, Roma", cura: "Anya Cacciapuoti & Alessandro" },
  { data: "Dic 2018", titolo: "(S)CONFINI", luogo: "Camera79 Art Gallery, Roma", cura: "Anya Cacciapuoti" },
];

export const premi = [
  { data: "Dic 2023", titolo: { it: "Premio Maestri a Miami", en: "Maestri Award in Miami", es: "Premio Maestri en Miami", fr: "Prix Maestri à Miami", zh: "迈阿密大师奖" }, luogo: "Spectrum, Miami" },
  { data: "Gen 2022", titolo: { it: "Premio Maestri a Milano", en: "Maestri Award in Milan", es: "Premio Maestri en Milán", fr: "Prix Maestri à Milan", zh: "米兰大师奖" }, luogo: "Teatro Manzoni, Milano" },
  { data: "Ott 2021", titolo: { it: "Premio Vittorio Sgarbi", en: "Vittorio Sgarbi Award", es: "Premio Vittorio Sgarbi", fr: "Prix Vittorio Sgarbi", zh: "维托里奥·斯加尔比奖" }, luogo: "Centro Congressuale e Fieristico, Ferrara" },
];

export const pubblicazioni = [
  { titolo: "Atlante d'Arte Contemporanea", anno: "2024", nota: { it: "Presentazione delle opere — in uscita al Met di New York", en: "Presentation of the works — launch at the Met, New York", es: "Presentación de las obras — lanzamiento en el Met de Nueva York", fr: "Présentation des œuvres — lancement au Met de New York", zh: "作品展示 — 于纽约大都会艺术博物馆发布" } },
  { titolo: "Porto Franco", anno: "2023", nota: { it: "INNOCENCE Serie II con critica di Vittorio Sgarbi — Artnow / Serradifalco Edizioni", en: "INNOCENCE Series II with a critique by Vittorio Sgarbi — Artnow / Serradifalco Editions", es: "INNOCENCE Serie II con crítica de Vittorio Sgarbi — Artnow / Serradifalco Ediciones", fr: "INNOCENCE Série II avec une critique de Vittorio Sgarbi — Artnow / Serradifalco Éditions", zh: "《INNOCENCE 第二系列》附维托里奥·斯加尔比评论 — Artnow / Serradifalco 出版" } },
  { titolo: "Artisti 2023", anno: "2023", nota: { it: "INNOCENCE Serie II con quotazione — Artnow Editoriale", en: "INNOCENCE Series II with market valuation — Artnow Editoriale", es: "INNOCENCE Serie II con cotización — Artnow Editoriale", fr: "INNOCENCE Série II avec cotation — Artnow Editoriale", zh: "《INNOCENCE 第二系列》附市场估价 — Artnow Editoriale" } },
  { titolo: "Citazioni Visive — Art Now", anno: "2023", nota: { it: "Focus editoriale a cura di Sandro Serradifalco", en: "Editorial focus curated by Sandro Serradifalco", es: "Enfoque editorial a cargo de Sandro Serradifalco", fr: "Focus éditorial dirigé par Sandro Serradifalco", zh: "由 Sandro Serradifalco 策划的专题" } },
  { titolo: "CAM n°58 — Catalogo dell'Arte Moderna", anno: "2022/23", nota: { it: "INNOCENCE Serie II e III — Editoriale Giorgio Mondadori", en: "INNOCENCE Series II and III — Giorgio Mondadori Publishing", es: "INNOCENCE Serie II y III — Editorial Giorgio Mondadori", fr: "INNOCENCE Séries II et III — Éditions Giorgio Mondadori", zh: "《INNOCENCE 第二、三系列》— Giorgio Mondadori 出版" } },
  { titolo: "Art Now", anno: "2021", nota: { it: "Pubblicazione dell'opera INNOCENCE Serie II", en: "Publication of the work INNOCENCE Series II", es: "Publicación de la obra INNOCENCE Serie II", fr: "Publication de l'œuvre INNOCENCE Série II", zh: "作品《INNOCENCE 第二系列》发表" } },
];

export const critiche = [
  { testo: { it: "L'Arte di Cortona si contraddistingue nell'uso dei pigmenti luminescenti, uno strumento che genera la Luce al buio.", en: "Cortona's art stands out for its use of luminescent pigments, a means that generates Light in the dark.", es: "El arte de Cortona destaca por el uso de pigmentos luminiscentes, un medio que genera Luz en la oscuridad.", fr: "L'art de Cortona se distingue par l'usage de pigments luminescents, un moyen qui génère la Lumière dans l'obscurité.", zh: "Cortona的艺术以运用发光颜料而独树一帜——一种在黑暗中生成光的媒介。" }, autore: { it: "Critica d'Arte", en: "Art Critique", es: "Crítica de Arte", fr: "Critique d'art", zh: "艺术评论" } },
  { testo: { it: "Una complessa rete di simboli, materia cromatica ed energia evocativa attraversa le opere pittoriche di Francesca Cortona.", en: "A complex web of symbols, chromatic matter and evocative energy runs through Francesca Cortona's paintings.", es: "Una compleja red de símbolos, materia cromática y energía evocadora atraviesa las pinturas de Francesca Cortona.", fr: "Un réseau complexe de symboles, de matière chromatique et d'énergie évocatrice traverse les peintures de Francesca Cortona.", zh: "符号、色彩物质与唤起性能量交织成的复杂网络贯穿于Francesca Cortona的绘画之中。" }, autore: { it: "Citazioni Visive — Art Now", en: "Citazioni Visive — Art Now", es: "Citazioni Visive — Art Now", fr: "Citazioni Visive — Art Now", zh: "Citazioni Visive — Art Now" } },
  { testo: { it: "Tributo dell'artista a McCurry: il dettaglio del volto di un bambino viene ingrandito per accentuarne l'espressività e trattato con fluorescenze per renderlo luminoso al buio, mantenendo un'ininterrotta presenza evocativa.", en: "The artist's tribute to McCurry: the detail of a child's face is enlarged to heighten its expressiveness and treated with fluorescence to make it glow in the dark, keeping an uninterrupted evocative presence.", es: "Homenaje de la artista a McCurry: el detalle del rostro de un niño se amplía para acentuar su expresividad y se trata con fluorescencias para hacerlo luminoso en la oscuridad, manteniendo una presencia evocadora ininterrumpida.", fr: "Hommage de l'artiste à McCurry : le détail du visage d'un enfant est agrandi pour en accentuer l'expressivité et traité avec des fluorescences pour le rendre lumineux dans l'obscurité, gardant une présence évocatrice ininterrompue.", zh: "艺术家向麦柯里致敬：将一个孩子面部的细节放大以增强表现力，并用荧光处理使其在黑暗中发光，保持一种不间断的唤起性存在。" }, autore: { it: "Vittorio Sgarbi", en: "Vittorio Sgarbi", es: "Vittorio Sgarbi", fr: "Vittorio Sgarbi", zh: "维托里奥·斯加尔比" }, link: "https://cortonafrancesca.wixsite.com/my-site-3/critics" },
];

export const chakras = [
  { n: 1, sanscrito: "Muladhara", nome: { it: "Radice", en: "Root", es: "Raíz", fr: "Racine", zh: "海底轮" }, colore: "#c0392b", g1: "#e74c3c", g2: "#7d1f16", significato: { it: "Radicamento, sicurezza e connessione con la Terra.", en: "Grounding, security and connection with the Earth.", es: "Enraizamiento, seguridad y conexión con la Tierra.", fr: "Ancrage, sécurité et connexion avec la Terre.", zh: "扎根、安全感与和大地的连接。" } },
  { n: 2, sanscrito: "Svadhisthana", nome: { it: "Sacrale", en: "Sacral", es: "Sacro", fr: "Sacré", zh: "生殖轮" }, colore: "#e67e22", g1: "#f39c12", g2: "#9c4a10", significato: { it: "Creatività, emozioni e piacere.", en: "Creativity, emotions and pleasure.", es: "Creatividad, emociones y placer.", fr: "Créativité, émotions et plaisir.", zh: "创造力、情感与愉悦。" } },
  { n: 3, sanscrito: "Manipura", nome: { it: "Plesso Solare", en: "Solar Plexus", es: "Plexo Solar", fr: "Plexus Solaire", zh: "太阳轮" }, colore: "#f1c40f", g1: "#f7dc6f", g2: "#b8930a", significato: { it: "Volontà, potere personale e autostima.", en: "Willpower, personal power and self-esteem.", es: "Voluntad, poder personal y autoestima.", fr: "Volonté, pouvoir personnel et estime de soi.", zh: "意志、个人力量与自尊。" } },
  { n: 4, sanscrito: "Anahata", nome: { it: "Cuore", en: "Heart", es: "Corazón", fr: "Cœur", zh: "心轮" }, colore: "#27ae60", g1: "#2ecc71", g2: "#145a32", significato: { it: "Amore, compassione e guarigione.", en: "Love, compassion and healing.", es: "Amor, compasión y sanación.", fr: "Amour, compassion et guérison.", zh: "爱、慈悲与疗愈。" } },
  { n: 5, sanscrito: "Vishuddha", nome: { it: "Gola", en: "Throat", es: "Garganta", fr: "Gorge", zh: "喉轮" }, colore: "#2980b9", g1: "#3498db", g2: "#14405e", significato: { it: "Comunicazione, verità ed espressione.", en: "Communication, truth and expression.", es: "Comunicación, verdad y expresión.", fr: "Communication, vérité et expression.", zh: "沟通、真理与表达。" } },
  { n: 6, sanscrito: "Ajna", nome: { it: "Terzo Occhio", en: "Third Eye", es: "Tercer Ojo", fr: "Troisième Œil", zh: "眉心轮" }, colore: "#5b3f8e", g1: "#7d5bbe", g2: "#2f2049", significato: { it: "Intuizione, visione e consapevolezza.", en: "Intuition, vision and awareness.", es: "Intuición, visión y consciencia.", fr: "Intuition, vision et conscience.", zh: "直觉、洞见与觉知。" } },
  { n: 7, sanscrito: "Sahasrara", nome: { it: "Corona", en: "Crown", es: "Corona", fr: "Couronne", zh: "顶轮" }, colore: "#8e44ad", g1: "#c39bd3", g2: "#4a235a", significato: { it: "Spiritualità, illuminazione e connessione al Tutto.", en: "Spirituality, enlightenment and connection to the All.", es: "Espiritualidad, iluminación y conexión con el Todo.", fr: "Spiritualité, illumination et connexion au Tout.", zh: "灵性、觉悟与和万有的连接。" } },
];
