export const languages = {
  es: 'Español',
  ca: 'Català',
  en: 'English'
} as const;

export type Lang = keyof typeof languages;

export const defaultLang = 'es';

export const ui = {
  es: {
    meta: {
      title: 'onedaydesign™ | Estudio de diseño',
      description:
        'Hacemos diseño gráfico, desarrollo web, redes sociales, fotografía y edición de video.'
    },
    presentation: {
      line1: 'Bienvenido a',
      line2: 'one day design',
      line3: 'tu estudio de diseño web.'
    },
    services: {
      line1: 'Hacemos',
      line2: 'webs profesionales para negocios locales que quieren aparecer en internet, transmitir confianza y recibir más clientes. Sin complicaciones.'
    },
    projects: {
      line1: '¿Quieres ver ejemplos de',
      line2: 'nuestro trabajo',
      line3: '? Échale un ojo a lo que hemos hecho.'
    },
    social: {
      line1: '¿Tu web ya la tienes pero tus',
      line2: 'redes sociales',
      line3: 'están abandonadas?',
      line4: 'Tenemos lo que necesitas.'
    },
    contact: {
      line1: 'Escríbenos por',
      line2: 'WhatsApp',
      line3: 'o por',
      line4: 'email',
      line5: 'y te preparamos un ejemplo de tu web sin compromiso.',
      phone: '661 100 652',
      email: 'onedaydesign.estudio@gmail.com'
    },
    buttons: {
      next: '→ SIGUIENTE',
      prev: '← ANTERIOR',
      skip: 'Saltar al contenido',
      sectionNav: 'Navegación entre secciones',
      viewProjects: 'Ver proyectos',
      contact: 'Contacto',
      cosmo: 'Cosmo Studio'
    },
    notFound: {
      title: 'Página no encontrada',
      back: 'Volver al inicio'
    }
  },
  ca: {
    meta: {
      title: 'onedaydesign™ | Estudi de disseny',
      description:
        'Fem disseny gràfic, desenvolupament web, xarxes socials, fotografia i edició de vídeo.'
    },
    presentation: {
      line1: 'Benvingut a',
      line2: 'one day design',
      line3: 'el teu estudi de disseny web.'
    },
    services: {
      line1: 'Fem',
      line2: 'webs professionals per a negocis locals que volen aparèixer a internet, transmetre confiança i rebre més clients. Sense complicacions.'
    },
    projects: {
      line1: 'Vols veure exemples de',
      line2: 'la nostra feina',
      line3: '? Fes una ullada al que hem fet.'
    },
    social: {
      line1: 'Ja tens la web però les teves',
      line2: 'xarxes socials',
      line3: 'estan abandonades?',
      line4: 'Tenim el que necessites.'
    },
    contact: {
      line1: 'Escriu-nos per',
      line2: 'WhatsApp',
      line3: 'o per',
      line4: 'email',
      line5: "i et preparem un exemple de la teva web sense compromís.",
      phone: '661 100 652',
      email: 'onedaydesign.estudio@gmail.com'
    },
    buttons: {
      next: '→ SEGÜENT',
      prev: '← ANTERIOR',
      skip: 'Saltar al contingut',
      sectionNav: 'Navegació entre seccions',
      viewProjects: 'Veure projectes',
      contact: 'Contacte',
      cosmo: 'Cosmo Studio'
    },
    notFound: {
      title: 'Pàgina no trobada',
      back: 'Tornar a inici'
    }
  },
  en: {
    meta: {
      title: 'onedaydesign™ | Design studio',
      description:
        'We do graphic design, web development, social networks, photography and video editing.'
    },
    presentation: {
      line1: 'Welcome to',
      line2: 'one day design',
      line3: 'your web design studio.'
    },
    services: {
      line1: 'We',
      line2: "build professional websites for local businesses that want to show up online, build trust and get more clients. No hassle."
    },
    projects: {
      line1: 'Want to see examples of',
      line2: 'our work',
      line3: "? Take a look at what we've done."
    },
    social: {
      line1: 'Already have a website but your',
      line2: 'social media',
      line3: 'is abandoned?',
      line4: "We've got what you need."
    },
    contact: {
      line1: 'Write to us on',
      line2: 'WhatsApp',
      line3: 'or by',
      line4: 'email',
      line5: "and we'll prepare a sample of your website with no strings attached.",
      phone: '661 100 652',
      email: 'onedaydesign.estudio@gmail.com'
    },
    buttons: {
      next: '→ NEXT',
      prev: '← PREVIOUS',
      skip: 'Skip to content',
      sectionNav: 'Section navigation',
      viewProjects: 'View projects',
      contact: 'Contact',
      cosmo: 'Cosmo Studio'
    },
    notFound: {
      title: 'Page not found',
      back: 'Back to home'
    }
  }
} as const;

export type UI = (typeof ui)[Lang];
