

// ===============================================================
// 📦 CONFIG: Zentrale Konfigurationsdatei für globale Seitenrouten,
// Theme-Design, visuelle Effekte, Anzeigeoptionen und Mailchimp.
// Diese Werte steuern das visuelle Verhalten und die Struktur
// der gesamten App (z. B. Layout.tsx via `data-*` Attributen).
// ===============================================================
const baseURL = "https://www.youtube.com/"; //// Basis-URL für Sitemap, OG-Metadaten etc.

//Routen der Websites
const routes = {
  "/": true,
  "/about": true, //old
  "/work": true,  //old
  "/blog": true,  //old
  "/gallery": true, // old
  "/world" : true, // old
  "/gravebornblog": true, //new
  "/gravebornGallery": true, //new
  "/gravebornFAQ": true, //new
  "/gravebornTeam": true,///new
  "/contact": true///new
  
};

//
// Zugriffsschutz (Passwort)
// Aktiviert Passwortschutz für einzelne Routen (optional)
// Passwort muss in `.env` definiert werden (in `.env.example`)
//
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

//
// Visuelles Theme
// Steuert ZENTRAL Farbgebung, Rundungen, Oberflächenverhalten etc., werden 
//
const style = {
  theme: "dark", // dark | light
  neutral: "gray", //sand | gray | slate Neutrale Farbe: z. B. für Hintergrund 
  brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan = Hauptmarkenfarbe
  accent: "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan = Akzentfarbe für Highlights
  solid: "contrast", // color | contrast =  Farbkontrast bei Flächen: "color" = Markenfarbe, "contrast" = Hintergrundabhängig
  solidStyle: "flat", // flat | plastic = Stil von Buttons, Tags etc.:
  border: "playful", // rounded | playful | conservative = Border-Radius-Theme
  surface: "translucent", // filled | translucent = Oberflächenstil
  transition: "all", // all | micro | macro =  Animationstyp: "micro" = UI-Details, "macro" = große Übergänge, "all"
};


//
// Visuelle Effekte (Hintergrund-Animationen, Maskierungen, Deko)
// Gesteuert z. B. im Layout → <Background ... />
//
const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

//
// UI-Anzeigen im Header
//
const display = {
  location: true,
  time: true,
};


//
// Mailchimp Newsletter-Konfiguration
// Steuert Formulareffekte und Action-URL
// TODO: ersetzen dur Hubspot oder Odoo
//
const mailchimp = {
  action: "https://url/subscribe/post?parameters", // URL zum Mailchimp-Formular
  effects: {
    mask: {
      cursor: false,
      x: 100,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      x: 100,
      y: 50,
      width: 100,
      height: 100,
      tilt: -45,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
      opacity: 100,
    },
    dots: {
      display: false,
      size: 24,
      color: "brand-on-background-weak",
      opacity: 100,
    },
    lines: {
      display: false,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
    grid: {
      display: true,
      color: "neutral-alpha-weak",
      opacity: 100,
    },
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
