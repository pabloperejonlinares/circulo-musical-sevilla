export type ContentBlock = 
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: number }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string };

export type Clase = {
  title: string;
  description: string;
  href: string;
  image: string;
  content: ContentBlock[];
};

export const CLASES: Clase[] = [
  {
    title: "Clases para niños (+3 años)",
    description:
      "Clases de música para niños en Sevilla a partir de 3 años. Grupos reducidos, metodología lúdica y primera clase de prueba sin compromiso.",
    href: "/clases/clases-musica-niños-sevilla",
    image: "/images/clase-niños.jpg",
    content: [
      { type: "paragraph", text: "En nuestra escuela de música ofrecemos clases de música para niños en Sevilla a partir de los 3 años impartidas por una profesora titulada con muchos años de experiencia en la enseñanza infantil. Su vocación y dedicación hacen que cada sesión sea un espacio lleno de cariño, aprendizaje y descubrimiento, donde los niños pueden iniciarse en el mundo musical de forma natural y divertida." },
      { type: "paragraph", text: "Nuestras clases de música para niños en Sevilla se desarrollan en grupos reducidos, con un máximo de seis alumnos, lo que garantiza una atención cercana y personalizada. A través de actividades lúdicas y juegos musicales cuidadosamente diseñados, los niños van integrando los fundamentos que construirán su base musical." },
      { type: "heading", level: 3, text: "Durante las clases, los alumnos aprenden a:" },
      { type: "list", items: [
        "Conocer la escala musical e identificar sus sonidos.",
        "Reconocer patrones musicales dentro de una canción y sus ritmos.",
        "Trabajar la psicomotricidad fina y gruesa, fundamental para tocar instrumentos.",
        "Conocer e identificar instrumentos musicales y reconocer su sonido.",
        "Iniciarse en la lectura de partituras.",
        "Practicar la entonación y desarrollar el oído musical.",
        "Iniciarse en la teoría musical, incluyendo preparación para dictados.",
        "Familiarizarse y tocar una variedad de instrumentos de pequeña percusión y otros instrumentos musicales adaptados a su nivel."
      ]},
      { type: "paragraph", text: "Cada actividad está pensada para que los niños aprendan jugando, pero con un enfoque pedagógico sólido que les permita asimilar cada concepto de forma ordenada y significativa. El objetivo es que disfruten de la música mientras desarrollan habilidades esenciales como la coordinación, la concentración, la memoria musical y la escucha activa." },
      { type: "heading", level: 3, text: "Aprender música en Sevilla en un entorno profesional y motivador" },
      { type: "paragraph", text: "Nuestra profesora combina técnica, sensibilidad y pasión por la docencia, transmitiendo a cada niño la ilusión por la música y acompañándolo en su crecimiento artístico. En nuestras clases de música para niños en Sevilla, los pequeños no solo adquieren conocimientos musicales, sino que también construyen una base firme que les permitirá avanzar con confianza hacia cualquier instrumento en el futuro." },
      { type: "heading", level: 3, text: "Da el primer paso y pregúntanos sin compromiso" },
      { type: "paragraph", text: "Si sientes que ha llegado el momento de que tu pequeño descubra el mundo de la música, estaremos encantados de acompañaros en este inicio tan especial. Las clases de iniciación musical son una oportunidad maravillosa para que los niños desarrollen oído, coordinación, creatividad y sensibilidad mientras se divierten y aprenden en un entorno seguro y cariñoso. Puedes preguntarnos sin ningún tipo de compromiso por nuestra clase de prueba: es la ocasión perfecta para que tu hijo experimente el ambiente, conozca cómo trabajamos y sienta lo bonito que puede ser empezar a explorar la música desde edades tempranas." },
      { type: "paragraph", text: "A veces, una simple decisión abre puertas que no imaginábamos… y este pequeño comienzo puede convertirse en un precioso viaje lleno de descubrimientos, juegos musicales y crecimiento. Estaremos a vuestro lado desde el primer momento, cuidando de que cada paso sea positivo, motivador y lleno de ilusión. Aquí nos tenéis para cuando queráis empezar." }
    ]
  },
  {
    title: "Clases de Música para bebés",
    description:
      "Clases de música para bebés en Sevilla (12-32 meses). Música y movimiento en grupos reducidos con padres. Primera clase de prueba sin compromiso.",
    href: "/clases/clases-musica-bebes-sevilla",
    image: "/images/bebes.webp",
    content: [
      { type: "paragraph", text: "En nuestra escuela ofrecemos clases de música en Sevilla pensadas para que los más pequeños comiencen a descubrir la música desde sus primeros meses de vida, siempre acompañados por sus padres. Nuestro objetivo es crear un espacio cálido, seguro y lleno de estímulos donde bebés y familias puedan compartir, disfrutar y conectar a través de la música y el movimiento." },
      { type: "paragraph", text: "Nuestras clases de Música y Movimiento en Sevilla están dirigidas a bebés de 12 a 32 meses y se imparten en grupos reducidos. Este formato permite una atención cercana y personalizada, respetando los tiempos de cada niño y favoreciendo un ambiente tranquilo donde puedan explorar con libertad. La presencia de los padres es fundamental, ya que refuerza el vínculo afectivo y convierte cada sesión en una experiencia compartida única." },
      { type: "paragraph", text: "Durante las sesiones, los bebés experimentan con sonidos, ritmos y movimientos a través de juegos musicales, canciones, dinámicas corporales y el uso de pequeños instrumentos adaptados a su edad. Se trabaja de forma natural la psicomotricidad, la coordinación, la escucha activa y la percepción auditiva, estimulando su desarrollo global mientras disfrutan." },
      { type: "paragraph", text: "También se fomenta la interacción social, la imitación y la expresión emocional, aspectos clave en esta etapa. Todo ello se realiza desde un enfoque respetuoso, sin exigencias, permitiendo que cada bebé participe según su momento evolutivo." },
      { type: "image", src: "/images/clases/bebes.webp", alt: "Clases de Música para bebés en Sevilla" },
      { type: "heading", level: 3, text: "Aprender música en Sevilla en un entorno profesional y motivador" },
      { type: "paragraph", text: "Nuestra profesora, especializada en educación musical temprana, acompaña cada sesión con sensibilidad, experiencia y una profunda vocación. Su manera de guiar hace que tanto bebés como padres se sientan cómodos, creando un entorno de confianza donde la música fluye de forma natural." },
      { type: "paragraph", text: "En nuestras clases, la música no solo se aprende: se vive, se siente y se comparte. Es un primer contacto lleno de emoción que sienta las bases para un desarrollo musical y personal saludable, siempre desde el juego, el cariño y la conexión." },
      { type: "heading", level: 3, text: "Da el primer paso y pregúntanos sin compromiso" },
      { type: "paragraph", text: "Si estás buscando clases de música en Sevilla para tu bebé y te gustaría ofrecerle una experiencia enriquecedora desde sus primeros años, te invitamos a dar el primer paso y ponerte en contacto con nosotros. Nuestras clases de Música y Movimiento en Sevilla son una oportunidad maravillosa para compartir tiempo de calidad, estimular su desarrollo y crear recuerdos únicos a través de la música." },
      { type: "paragraph", text: "Puedes preguntarnos sin ningún tipo de compromiso por nuestra clase de prueba: es la mejor manera de conocer el ambiente, ver cómo trabajamos y vivir en primera persona una sesión junto a tu pequeño. Estaremos encantados de acompañaros desde el inicio y ayudaros a descubrir todo lo que la música puede aportar en esta etapa tan especial." },
      { type: "paragraph", text: "A veces, una simple decisión abre un mundo de posibilidades… y este puede ser el comienzo de un precioso camino en la música, vivido en familia. Estamos aquí para vosotros cuando queráis empezar." }
    ]
  },
  {
    title: "Lenguaje musical",
    description:
      "Clases de lenguaje musical en Sevilla para todos los niveles. Ritmo, teoría, dictado y preparación para conservatorio. Clase de prueba gratuita.",
    href: "/clases/clases-lenguaje-musical-sevilla",
    image: "/images/lenguaje.jpg",
    content: [
      { type: "paragraph", text: "En nuestra escuela ofrecemos clases de música en Sevilla pensadas para que aprender ritmo, entonación, teoría y dictado sea un proceso cercano, motivador y eficaz, independientemente de la edad o de la experiencia previa del alumno. Nuestro propósito es que cada persona descubra la música desde dentro, comprendiendo sus bases y disfrutando de un aprendizaje claro, práctico y lleno de emoción. Enseñar música es, para nosotros, una forma de transmitir amor, curiosidad y sensibilidad, acompañando a cada estudiante con atención, respeto y verdadera dedicación." },
      { type: "image", src: "/images/clases/lenguaje-musical.jpg", alt: "Lenguaje musical" },
      { type: "heading", level: 3, text: "Aprender Lenguaje Musical en Sevilla en un entorno profesional y motivador" },
      { type: "paragraph", text: "Nuestras clases de Lenguaje Musical en Sevilla se ofrecen tanto de manera individual como colectiva, permitiendo adaptar el ritmo y la metodología a las necesidades de cada alumno. Combinamos ejercicios prácticos, actividades interactivas y recursos visuales que facilitan la comprensión de conceptos que, en ocasiones, pueden parecer complejos. Desde el primer día, trabajamos ritmo, lectura de partituras, entonación, dictados rítmicos y melódicos, análisis y fundamentos teóricos, siempre con un enfoque dinámico y accesible." },
      { type: "paragraph", text: "Uno de los pilares de nuestra escuela es nuestra profesora de Lenguaje Musical, cuya profesionalidad y claridad pedagógica la han llevado a conseguir un 100% de aprobados en las pruebas oficiales de Lenguaje Musical para el profesional. Su manera de explicar transforma ideas difíciles en contenidos sencillos y comprensibles; utiliza ejemplos cotidianos, herramientas visuales y una metodología tan práctica que los alumnos comprenden de inmediato lo que aprenden… y, lo más importante, no lo olvidan. Su capacidad para hacer de la teoría una experiencia cercana, lógica y motivadora es una de las razones por las que tantos estudiantes confían en nosotros." },
      { type: "paragraph", text: "Trabajamos con perfiles muy distintos: niños y adultos que aprenden por placer, estudiantes que necesitan refuerzo de conservatorio y alumnos que buscan una preparación prueba conservatorio en Sevilla sólida, eficaz y personalizada. Diseñamos cada programa a medida, cuidando tanto el progreso académico como la motivación y el bienestar del alumno." },
      { type: "paragraph", text: "Nunca aprender Lenguaje Musical había sido tan accesible y gratificante. En nuestra escuela encontrarás un espacio acogedor donde avanzar con seguridad, desarrollar tu musicalidad y disfrutar de la música desde sus raíces. Estamos aquí para acompañarte en cada paso de tu camino musical." },
      { type: "heading", level: 3, text: "Da el primer paso y pregúntanos sin compromiso" },
      { type: "paragraph", text: "Si sientes que ha llegado el momento de comprender la música desde dentro, o simplemente notas esa curiosidad por mejorar ritmo, lectura y entonación, da el paso y ponte en contacto con nosotros. Estaremos a tu lado desde el primer momento, escuchándote y ayudándote a descubrir cómo podría ser tu camino en el Lenguaje Musical. Puedes preguntarnos sin ningún tipo de compromiso por nuestra primera clase de prueba: es una oportunidad perfecta para conocer el ambiente, ver cómo trabajamos y experimentar por ti mismo lo fácil y gratificante que puede ser aprender teoría musical cuando te la explican de manera clara y cercana. A veces, una simple decisión abre puertas que no imaginábamos… y esta podría ser el inicio de un precioso viaje musical, hecho a tu ritmo, con acompañamiento real y con toda la ilusión que merece algo tan especial. Estamos aquí para ti cuando quieras comenzar." }
    ]
  },
  {
    title: "Armonía musical",
    description:
      "Clases de armonía musical en Sevilla. Acordes, progresiones y análisis con metodología clara. Preparación para conservatorio. Prueba sin compromiso.",
    href: "/clases/clases-armonia-musical-sevilla",
    image: "/images/armonia.jpg",
    content: [
      { type: "paragraph", text: "En nuestra escuela ofrecemos clases de armonía músical en Sevilla pensadas para que comprender la armonía, los acordes, las progresiones y el análisis musical sea un proceso cercano, motivador y eficaz, independientemente de la edad o de la experiencia previa del alumno. Nuestro propósito es que cada persona descubra cómo funciona la música desde dentro, entendiendo sus relaciones armónicas y disfrutando de un aprendizaje claro, práctico y lleno de sentido. Enseñar armonía es, para nosotros, una forma de transmitir amor por la música, curiosidad y sensibilidad, acompañando a cada estudiante con atención, respeto y verdadera dedicación." },
      { type: "image", src: "/images/clases/armonia-musical.jpg", alt: "Armonía musical" },
      { type: "heading", level: 3, text: "Aprender Armonía Musical en Sevilla en un entorno profesional y motivador" },
      { type: "paragraph", text: "Nuestras clases de Armonía en Sevilla se ofrecen tanto de manera individual como colectiva, lo que nos permite adaptar el ritmo, el nivel y la metodología a las necesidades reales de cada alumno. Trabajamos con ejercicios prácticos, ejemplos musicales reales, análisis de obras y recursos visuales que ayudan a comprender conceptos que a menudo se perciben como complejos o abstractos. Desde el primer día abordamos la construcción de acordes, las funciones tonales, las cadencias, las modulaciones, el cifrado armónico y el análisis, siempre desde un enfoque claro, lógico y accesible." },
      { type: "paragraph", text: "Uno de los pilares de nuestra escuela es nuestro profesor de Armonía, cuya profesionalidad y claridad pedagógica la han llevado a obtener excelentes resultados en la preparación de pruebas oficiales de conservatorio, con un altísimo porcentaje de aprobados. Su forma de explicar consigue que la armonía deje de ser confusa y empiece a tener sentido: utiliza ejemplos musicales cercanos, esquemas visuales y una metodología eminentemente práctica que permite al alumno entender el “por qué” de cada concepto. Gracias a ello, lo aprendido no solo se comprende, sino que se interioriza y se recuerda con facilidad. Su capacidad para transformar la teoría armónica en algo lógico, útil y motivador es una de las razones por las que tantos estudiantes confían en nosotros." },
      { type: "paragraph", text: "Trabajamos con perfiles muy diversos: estudiantes de conservatorio que necesitan refuerzo, músicos que desean comprender mejor lo que tocan o componen, y alumnos que buscan una preparación de armonía para pruebas de conservatorio en Sevilla sólida, eficaz y totalmente personalizada. Cada programa se diseña a medida, cuidando tanto el progreso académico como la motivación, la confianza y el bienestar del alumno." },
      { type: "paragraph", text: "Nunca aprender Armonía había sido tan claro y gratificante. En nuestra escuela encontrarás un espacio cercano y acogedor donde avanzar con seguridad, desarrollar tu comprensión musical y disfrutar de la música desde su estructura más profunda. Estamos aquí para acompañarte en cada paso de tu camino musical." },
      { type: "heading", level: 3, text: "Da el primer paso y pregúntanos sin compromiso" },
      { type: "paragraph", text: "Si sientes que ha llegado el momento de entender cómo funciona la música por dentro, o si necesitas afianzar la armonía para tus estudios o tu desarrollo musical, da el paso y ponte en contacto con nosotros. Estaremos contigo desde el primer momento, escuchándote y ayudándote a descubrir cómo puede ser tu camino en la Armonía. Puedes preguntarnos sin ningún tipo de compromiso por nuestra primera clase de prueba: es una oportunidad perfecta para conocer el ambiente, ver cómo trabajamos y comprobar por ti mismo lo clara y estimulante que puede ser la armonía cuando te la explican de forma cercana y bien estructurada. A veces, una sola decisión abre puertas que no imaginábamos… y esta puede ser el comienzo de un precioso viaje musical, hecho a tu ritmo, con acompañamiento real y con toda la ilusión que merece algo tan especial. Aquí estaremos cuando decidas empezar." }
    ]
  },
  {
    title: "Violín",
    description:
      "Clases de violín en Sevilla para todos los niveles y edades. Profesora titulada, metodología personalizada y repertorio adaptado. Clase de prueba gratis.",
    href: "/clases/clases-violin-sevilla",
    image: "/images/violin.jpg",
    content: [
      { type: "paragraph", text: "Nuestras clases de violín en Sevilla están diseñadas para todos los niveles, desde quienes se acercan por primera vez al instrumento hasta alumnos avanzados que desean perfeccionar su técnica. En cada sesión trabajamos los fundamentos esenciales del violín —postura, colocación de la mano izquierda, digitación, manejo del arco, vibrato, afinación y control del sonido— siempre desde un enfoque personalizado que se adapta a la edad, objetivos y ritmo de aprendizaje de cada estudiante. Creemos que aprender violín debe ser una experiencia motivadora, por eso incorporamos repertorio basado en las canciones favoritas del alumno, logrando que el proceso sea cercano, dinámico y disfrutable desde la primera clase." },
      { type: "image", src: "/images/clases/violin-1.jpg", alt: "Clases de violín en Sevilla" },
      { type: "heading", level: 3, text: "Aprender violín en Sevilla en un entorno profesional y motivador" },
      { type: "paragraph", text: "Nuestra profesora de violín es titulada y cuenta con una amplia trayectoria tanto pedagógica como artística. Su experiencia en conciertos, formaciones de cámara y proyectos orquestales aporta una visión práctica y real del instrumento, enriqueciendo cada clase con herramientas útiles para desenvolverse en contextos musicales diversos." },
      { type: "image", src: "/images/clases/violin-2.jpeg", alt: "Aprender violín" },
      { type: "heading", level: 3, text: "Tu camino para aprender violín: lo que realmente importa" },
      { type: "paragraph", text: "Atendemos a estudiantes con objetivos muy variados: personas que quieren tocar por puro placer, alumnos que necesitan refuerzo para el conservatorio, preparación para pruebas de acceso, exámenes oficiales o perfeccionamiento técnico. Cada programa se diseña de manera individualizada, garantizando un progreso sólido y constante, respetando siempre el bienestar del alumno y fomentando el disfrute del aprendizaje." },
      { type: "paragraph", text: "Para los adultos que se animan a comenzar desde cero, nuestras clases de violín en Sevilla son una experiencia especialmente gratificante. Es muy habitual que lleguen a su primera sesión con la idea de que «es demasiado tarde» o que el violín es un instrumento «imposible» para empezar de mayores, porque así se lo han repetido personas de su entorno. Sin embargo, la realidad es muy distinta: aprender violín en la edad adulta no solo es posible, sino profundamente enriquecedor. Los adultos cuentan con una capacidad de concentración, constancia y motivación que impulsa un progreso sorprendentemente rápido." },
      { type: "paragraph", text: "En nuestras clases, muchos alumnos que jamás habían tocado un instrumento descubren que pueden interpretar sus primeras canciones mucho antes de lo que imaginaban. Ver su alegría, confianza y orgullo al poder tocar sus canciones desde las primeras semanas es uno de los aspectos más emocionantes de nuestro trabajo. Creemos firmemente que nunca es tarde para iniciar un camino musical, y acompañamos a cada adulto con paciencia, claridad y un enfoque adaptado a sus necesidades, para que disfruten plenamente de este proceso tan especial." },
      { type: "paragraph", text: "Trabajamos todos los estilos musicales: clásico, folk, celta, bandas sonoras, pop contemporáneo, etc. Queremos que el alumno descubra aquello que más le inspira y que pueda desarrollar no solo una buena técnica, sino también musicalidad, sensibilidad y una expresión personal auténtica." },
      { type: "heading", level: 3, text: "Da el primer paso y pregúntanos sin compromiso" },
      { type: "paragraph", text: "Si llevas tiempo soñando con aprender violín, o simplemente sientes esa pequeña curiosidad que no termina de irse, da el paso y ponte en contacto con nosotros. Estaremos a tu lado desde el primer momento, escuchándote y ayudándote a descubrir cómo podría ser tu camino musical. Puedes preguntar sin ningún tipo de compromiso por nuestra primera clase de prueba: es una oportunidad perfecta para sentir el ambiente, conocer cómo trabajamos y experimentar por ti mismo lo bonito que puede ser empezar. A veces, una simple decisión abre puertas que no imaginábamos… y este podría ser el inicio de un precioso viaje en la música, hecho a tu ritmo, con acompañamiento real y con toda la ilusión que merece algo tan especial. Estamos aquí para ti cuando quieras comenzar." }
    ]
  },
  {
    title: "Piano",
    description:
      "Clases de piano en Sevilla para niños y adultos. Técnica, lectura y expresión con profesor titulado. Primera clase de prueba sin compromiso.",
    href: "/clases/clases-piano-sevilla",
    image: "/images/piano.jpg",
    content: [
      { type: "paragraph", text: "Nuestras clases de piano en Sevilla están pensadas para estudiantes de todos los niveles, desde quienes se sientan por primera vez frente a un teclado hasta alumnos avanzados que desean perfeccionar técnica, expresión y musicalidad. En cada sesión trabajamos los fundamentos esenciales del piano —postura, independencia de manos, digitación, articulación, dinámica, lectura a primera vista y control del sonido— siempre desde un enfoque cercano y personalizado que se adapta a la edad, al ritmo y a los objetivos de cada alumno. Creemos profundamente que aprender piano debe ser una experiencia motivadora, por eso incorporamos repertorio basado en las canciones favoritas del estudiante, haciendo que cada clase sea inspiradora, dinámica y disfrutable desde el primer día." },
      { type: "image", src: "/images/clases/piano-1.jpg", alt: "Clases de piano" },
      { type: "heading", level: 3, text: "Aprender piano en Sevilla en un entorno profesional y motivador" },
      { type: "paragraph", text: "Nuestro profesor es titulado y cuenta con una amplia trayectoria tanto pedagógica como artística. Su experiencia en acompañamiento pianístico, música de cámara y proyectos creativos como la dirección musical y arreglista en musicales aporta una visión real y completa del instrumento, enriqueciendo cada clase con herramientas prácticas para desenvolverse en distintos contextos musicales." },
      { type: "image", src: "/images/clases/piano-2.jpg", alt: "Aprender a tocar el piano" },
      { type: "heading", level: 3, text: "Tu camino para aprender piano: lo que realmente importa" },
      { type: "paragraph", text: "Acompañamos a estudiantes con objetivos muy diversos: personas que quieren tocar por placer, alumnos que necesitan refuerzo para el conservatorio, preparación para pruebas de acceso, exámenes oficiales o perfeccionamiento técnico. Cada programa se diseña de manera individualizada, garantizando un progreso sólido y respetuoso con el bienestar del alumno, fomentando siempre la motivación y el disfrute del proceso." },
      { type: "paragraph", text: "Para los adultos que comienzan desde cero, nuestras clases de piano en Sevilla son especialmente gratificantes. Muchos llegan con la idea de que «es tarde para empezar», pero la realidad es que aprender en la adultez puede ser profundamente enriquecedor. La concentración, constancia y sensibilidad musical de los adultos impulsan un avance sorprendentemente rápido, permitiéndoles tocar sus primeras piezas mucho antes de lo que imaginaban. Acompañamos cada paso con paciencia, claridad y entusiasmo, celebrando cada logro y cada descubrimiento." },
      { type: "heading", level: 3, text: "Da el primer paso y pregúntanos sin compromiso" },
      { type: "paragraph", text: "Si llevas tiempo soñando con aprender piano, o simplemente sientes esa pequeña curiosidad que no termina de irse, da el paso y ponte en contacto con nosotros. Estaremos a tu lado desde el primer momento, escuchándote y ayudándote a descubrir cómo podría ser tu camino musical. Puedes preguntar sin ningún tipo de compromiso por nuestra primera clase de prueba: es una oportunidad perfecta para sentir el ambiente, conocer cómo trabajamos y experimentar por ti mismo lo bonito que puede ser empezar. A veces, una simple decisión abre puertas que no imaginábamos… y este podría ser el inicio de un precioso viaje en la música, hecho a tu ritmo, con acompañamiento real y con toda la ilusión que merece algo tan especial. Estamos aquí para ti cuando quieras comenzar." }
    ]
  },
  {
    title: "Otros instrumentos",
    description:
      "Clases de otros instrumentos en Sevilla adaptadas a tu nivel y objetivos. Profesores titulados y aprendizaje personalizado. Pregunta sin compromiso.",
    href: "/clases/clases-otros-instrumentos-sevilla",
    image: "/images/otros.jpg",
    content: [
      { type: "paragraph", text: "En nuestra escuela de música, ofrecemos la posibilidad de aprender otros instrumentos que no aparecen en nuestros apartados principales. Si quieres tocar un instrumento concreto, puedes enviar tu solicitud y diseñaremos clases adaptadas a tus necesidades. Enseñamos desde cero y para todos los niveles, combinando técnica profesional, lectura musical, coordinación y expresión con un aprendizaje totalmente personalizado basado en tus canciones favoritas." },
      { type: "paragraph", text: "Nuestros profesores son músicos titulados, con experiencia en enseñanza y activos en conciertos, aportando la visión profesional del instrumento a cada alumno." },
      { type: "paragraph", text: "Atendemos distintos perfiles: quienes quieren aprender por placer, quienes necesitan refuerzo para conservatorio, o quienes se preparan para pruebas de acceso a estudios profesionales. Cada clase se adapta al nivel y objetivo del estudiante, asegurando progreso constante, técnica sólida y disfrute del aprendizaje." },
      { type: "paragraph", text: "Nos adaptamos a todos los estilos musicales y centramos las clases en que puedas tocar las canciones que más te gustan, desarrollando técnica, musicalidad y expresión personal. En nuestra escuela de música, aprender cualquier instrumento significa mejorar técnica, disfrutar la música y vivir cada acorde con ilusión." }
    ]
  }
];
