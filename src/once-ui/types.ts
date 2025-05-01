
// ========================================
// DESIGN TOKEN TYPES – Typisierte Design-Grundlagen
// Diese Typdefinitionen bilden das Fundament für ein konsistentes, tokenbasiertes Design-System in TypeScript. 
// Sie definieren feste Werte für Abstände, Farben, Rundungen, Textstile und Layoutoptionen, die in allen UI-Komponenten wiederverwendet werden. 
// Durch diese Struktur wird sichergestellt, dass nur gültige, zentral definierte Werte verwendet werden können. 
// Das verhindert typische Designfehler, erleichtert die Wartung und ermöglicht Autovervollständigung im Editor. 
// So bleibt das visuelle Erscheinungsbild der Anwendung einheitlich und skalierbar.
// ========================================


// Feste spacing-Werte in px/rem – entsprechen z. B. --static-space-4, --static-space-40 etc.
export type StaticSpacingToken =
  | "0" // Kein Abstand
  | "1" // Sehr klein
  | "2"
  | "4"
  | "8"
  | "12"
  | "16"
  | "20"
  | "24"
  | "32"
  | "40"
  | "48"
  | "56"
  | "64"
  | "80"
  | "104"
  | "128"
  | "160";

  // Größen-Schema für responsive Token (z. B. margin="m")
export type TShirtSizes = "xs" | "s" | "m" | "l" | "xl";

// Responsive spacing über "T-Shirt"-Größen (z. B. paddingY="m" auf Mobile)
export type ResponsiveSpacingToken = TShirtSizes;

// Schatten-Stärken nach "T-Shirt"-Größen (z. B. shadow="s")
export type ShadowSize = TShirtSizes;

// Alle gültigen Spacing-Werte – statisch + responsive
export type SpacingToken = StaticSpacingToken | ResponsiveSpacingToken;

// Farb-Schemen für Hintergrund, Rahmen, Text etc.
export type ColorScheme =
  | "neutral"  // z. B. Grau für neutrale Flächen
  | "brand"    // Hauptmarkenfarbe
  | "accent"    // zusätzliche Akzentfarbe
  | "info"
  | "danger"
  | "warning"
  | "success";

// Wo die Farbe verwendet wird – z. B. "on-background" = Textfarbe auf Hintergrund
export type ColorCategory = "on-solid" | "on-background";

// Stärke der Farbe – meist drei Stufen pro Schema
export type ColorWeight = "weak" | "medium" | "strong";

// Rundungsgröße z. B. radius="m"
export type RadiusSize = TShirtSizes | "full";

// Erweiterung für geschachtelte Rundungen (z. B. radius="m-8")
export type RadiusNest = "4" | "8";

// Textkategorie – z. B. body, heading, display (für TextVariant)
export type TextType = "body" | "heading" | "display" | "label" | "code";

// Gewichtung des Texts – normal oder stark
export type TextWeight = "default" | "strong";

// Größe des Texts im T-Shirt-System
export type TextSize = TShirtSizes;

// Kombinierter Textstil → z. B. "heading-strong-l"
export type TextVariant = `${TextType}-${TextWeight}-${TextSize}`;

// 🧱 Grid-Spaltenanzahl – 1 bis 12, als String oder Zahl
export type gridColumns =
| "1" | "2" | "3" | "4" | "5" | "6"
| "7" | "8" | "9" | "10" | "11" | "12"
| 1 | 2 | 3 | 4 | 5 | 6
| 7 | 8 | 9 | 10 | 11 | 12;

// Flex-Faktor in einem Layout (z. B. flex="3" für Verteilung im Grid)
export type flex =
  | "0" | "1" | "2" | "3" | "4" | "5"
  | "6" | "7" | "8" | "9" | "10" | "11" | "12"
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
