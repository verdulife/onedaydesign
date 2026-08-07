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
      line3: ', tu estudio de diseño.'
    },
    services: {
      line1: 'Hacemos',
      line2: 'diseño gráfico, desarrollo web, redes sociales, fotografía y edición de video.'
    },
    projects: {
      line1: 'Si quieres ver ejemplos de',
      line2: 'nuestro trabajo',
      line3: ', pásate por nuestro',
      line4: 'Instagram'
    },
    contact: {
      line1: 'Contacta con nosotros a través de',
      line2: 'WhatsApp',
      line3: 'o',
      line4: 'email'
    },
    buttons: {
      next: '-> SIGUIENTE',
      prev: '<- ANTERIOR',
      skip: 'Saltar al contenido',
      sectionNav: 'Navegación entre secciones'
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
      line3: ', el teu estudi de disseny.'
    },
    services: {
      line1: 'Fem',
      line2: 'disseny gràfic, desenvolupament web, xarxes socials, fotografia i edició de vídeo.'
    },
    projects: {
      line1: 'Si vols veure exemples de',
      line2: 'la nostre feina',
      line3: ", passa't pel nostre",
      line4: 'Instagram'
    },
    contact: {
      line1: 'Contacta amb nosaltres a través de',
      line2: 'WhatsApp',
      line3: 'o',
      line4: 'email'
    },
    buttons: {
      next: '-> SEGÜENT',
      prev: '<- ANTERIOR',
      skip: 'Saltar al contingut',
      sectionNav: 'Navegació entre seccions'
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
      line3: ', your design studio.'
    },
    services: {
      line1: 'We do',
      line2: 'graphic design, web development, social networks, photography and video editing.'
    },
    projects: {
      line1: 'If you want to see examples of',
      line2: 'our work',
      line3: ', check out our',
      line4: 'Instagram'
    },
    contact: {
      line1: 'Contact us via',
      line2: 'WhatsApp',
      line3: 'or',
      line4: 'email'
    },
    buttons: {
      next: '-> NEXT',
      prev: '<- PREVIOUS',
      skip: 'Skip to content',
      sectionNav: 'Section navigation'
    },
    notFound: {
      title: 'Page not found',
      back: 'Back to home'
    }
  }
} as const;

export type UI = (typeof ui)[Lang];
