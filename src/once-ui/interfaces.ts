
// ========================================
// UI-PROP-INTERFACES – Typisierte Grundlagen
// Diese Datei definiert die gemeinsamen Prop-Schnittstellen für alle wiederverwendbaren UI-Komponenten. 
// Jedes Interface gruppiert bestimmte Arten von Design-Tokens oder Verhaltensoptionen 
// – etwa Layout (FlexProps, GridProps), Abstände (SpacingProps), Farben & Radius (StyleProps) oder responsives Verhalten (ConditionalProps). 
// Alle Interfaces bauen auf HTML-Standard-Attributen auf, ergänzen diese aber durch typisierte Design-Tokens, die über types.ts definiert sind. 
// Dadurch wird sichergestellt, dass nur erlaubte Werte wie "brand-strong" oder "paddingX='8'" verwendet werden 
// – was zu konsistentem Code und visueller Einheitlichkeit führt. 
// Die Autovervollständigung im Editor hilft zusätzlich dabei, UI-Fehler frühzeitig zu vermeiden und beschleunigt die Entwicklung erheblich.
// ========================================

import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react"; // Imports von Standardtypen aus React 

//Imports von Design-Tokens aus eigener types.ts
import {
  ColorScheme,
  ColorWeight,
  flex,
  gridColumns,
  RadiusNest,
  RadiusSize,
  ShadowSize,
  SpacingToken,
  TextSize,
  TextType,
  TextVariant,
  TextWeight,
} from "./types";

//
// GridProps – Props für Grid-Komponenten (z. B. <Grid />)
// Erlaubt das Setzen von Spalten- und Zeilenanzahl für verschiedene Breakpoints.
//
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: gridColumns;         // Spaltenanzahl (z. B. "12")
  rows?: gridColumns;            // Zeilenanzahl (optional)
  tabletColumns?: gridColumns;  // Spaltenanzahl auf Tablets
  mobileColumns?: gridColumns;  // Spaltenanzahl auf Mobilgeräten
  tabletRows?: gridColumns;     // Zeilenanzahl auf Tablets
  mobileRows?: gridColumns;     // Zeilenanzahl auf Mobilgeräten
}

//
// FlexProps – Props für Flexbox-Komponenten (z. B. <Flex />)
// Steuerung von Richtung, Ausrichtung, Umbruchverhalten, etc.
//
export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse"; // Flex-Richtung
  tabletDirection?: "row" | "column" | "row-reverse" | "column-reverse"; // auf Tablets
  mobileDirection?: "row" | "column" | "row-reverse" | "column-reverse"; // auf Mobile
  horizontal?:    // Horizontale Ausrichtung (justify-content)
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";
  vertical?:       // Vertikale Ausrichtung (align-items)
  | "start"
  | "center"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";
  center?: boolean;  // Zentriert beides: horizontal & vertikal
  wrap?: boolean;    // Zeilenumbruch erlauben (flex-wrap)
  flex?: flex;      // Flex-Verhältnis (z. B. "1", "3")
}

//
// TextProps – Typisierte Props für Textkomponenten (z. B. <Text />)
// Erlaubt semantische Textgestaltung über Tokens.
//
export interface TextProps<T extends ElementType = "span"> extends HTMLAttributes<T> {
  as?: T;                           // HTML-Tag überschreiben (z. B. "p", "h2", "label")
  variant?: TextVariant;           // Kombinierter Stil (z. B. "heading-strong-l")
  wrap?: CSSProperties["textWrap"]; // Textumbruchverhalten
  size?: TextSize;                 // Schriftgröße direkt (optional, wenn `variant` genutzt wird)
  weight?: TextWeight;            // Schriftgewicht (z. B. "strong")
}

//
// SizeProps – Props zur Steuerung von Breite, Höhe und Skalierung
// Unterstützt sowohl numerische Werte als auch Tokens.
//
export interface SizeProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | SpacingToken;
  height?: number | SpacingToken;
  maxWidth?: number | SpacingToken;
  minWidth?: number | SpacingToken;
  minHeight?: number | SpacingToken;
  maxHeight?: number | SpacingToken;
  fit?: boolean;
  fitWidth?: boolean;
  fitHeight?: boolean;
  fill?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  aspectRatio?: CSSProperties["aspectRatio"];
}

//
//  SpacingProps – Einheitliche Steuerung von Abständen (Innen + Außen)
// Nutzt das zentrale SpacingToken-System.
//
export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
  padding?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingX?: SpacingToken;
  paddingY?: SpacingToken;
  margin?: SpacingToken;
  marginLeft?: SpacingToken;
  marginRight?: SpacingToken;
  marginTop?: SpacingToken;
  marginBottom?: SpacingToken;
  marginX?: SpacingToken;
  marginY?: SpacingToken;
  gap?: SpacingToken | "-1";
  top?: SpacingToken;
  right?: SpacingToken;
  bottom?: SpacingToken;
  left?: SpacingToken;
}

//
// StyleProps – zentrale Styles wie Farben, Radius, Schatten, Cursor
// Gilt für viele UI-Komponenten und greift auf die Design-Tokens zurück.
//
export interface StyleProps extends HTMLAttributes<HTMLDivElement> {
  // Typografie (als Einzelwerte oder kombinierter textVariant)
  textVariant?: TextVariant; // z. B. "heading-strong-l"
  textSize?: TextSize;       // Alternative direkte Größenangabe
  textType?: TextType;       // Typ (z. B. "body", "label")
  textWeight?: TextWeight;   // Gewichtung: "default" | "strong"

   // Hintergrundfarbe – z. B. "brand-weak", "neutral-alpha-medium"
  background?:
  | `${ColorScheme}-${ColorWeight}`
  | `${ColorScheme}-alpha-${ColorWeight}`
  | "surface"
  | "overlay"
  | "page"
  | "transparent";
  // Hintergrundfarbe bei "solid"-Flächen (z. B. Buttons)
  solid?: `${ColorScheme}-${ColorWeight}`;

  // Rahmenfarben pro Seite (oder gesamt)
  borderTop?: //Oben
  | `${ColorScheme}-${ColorWeight}`
  | `${ColorScheme}-alpha-${ColorWeight}`
  | "surface"
  | "transparent";
  borderRight?: // rechts
  | `${ColorScheme}-${ColorWeight}`
  | `${ColorScheme}-alpha-${ColorWeight}`
  | "surface"
  | "transparent";
  borderBottom?: // rechts
  | `${ColorScheme}-${ColorWeight}`
  | `${ColorScheme}-alpha-${ColorWeight}`
  | "surface"
  | "transparent";
  borderLeft?: // links
  | `${ColorScheme}-${ColorWeight}`
  | `${ColorScheme}-alpha-${ColorWeight}`
  | "surface"
  | "transparent";
  border?: // allgemeiner Rahmen
  | `${ColorScheme}-${ColorWeight}`
  | `${ColorScheme}-alpha-${ColorWeight}`
  | "surface"
  | "transparent";

  borderStyle?: "solid" | "dashed"; // Stil des Rahmens
  borderWidth?: 1 | 2;              // Rahmenstärke

   // Radius für einzelne Ecken (oder alle kombiniert über `radius`)
  topRadius?: RadiusSize;
  rightRadius?: RadiusSize;
  bottomRadius?: RadiusSize;
  leftRadius?: RadiusSize;
  topLeftRadius?: RadiusSize;
  topRightRadius?: RadiusSize;
  bottomLeftRadius?: RadiusSize;
  bottomRightRadius?: RadiusSize;
  radius?: RadiusSize | `${RadiusSize}-${RadiusNest}`; // z. B. "m-4"

  shadow?: ShadowSize; // Schatten (xs–xl)
  cursor?: CSSProperties["cursor"] | "interactive"; // z. B. "pointer" oder preset "interactive"
}

//
// ConditionalProps – Steuerung der Sichtbarkeit auf verschiedenen Viewports
//
export interface ConditionalProps extends HTMLAttributes<HTMLDivElement> {
  hide?: "s" | "m" | "l"; // auf kleinen / mittleren / großen Breakpoints verstecken
  show?: "s" | "m" | "l"; // explizit nur auf bestimmten Breakpoints zeigen
}

//
// DisplayProps – Darstellungslogik wie Positionierung, Overflow, Z-Index etc.
//
export interface DisplayProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType; // HTML-Tag überschreiben (z. B. "section", "header")
  inline?: boolean;
  pointerEvents?: "none" | "all" | "auto";

  position?: CSSProperties["position"]; // z. B. "absolute", "relative"
  overflow?: CSSProperties["overflow"]; // z. B. "hidden"
  overflowX?: CSSProperties["overflowX"];
  overflowY?: CSSProperties["overflowY"];
  
  // Übergangslogik – vorgegeben durch Token
  transition?:
  | "micro-short"
  | "micro-medium"
  | "micro-long"
  | "macro-short"
  | "macro-medium"
  | "macro-long";
  opacity?: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  zIndex?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

//
//  CommonProps – generische Props für alle Komponenten
//  CommonProps sind die universelle Toolbox für Standardfunktionalität und Basiskonfiguration – 
//  besonders nützlich für Barrierefreiheit, Textgestaltung, Flexibilität beim Styling und Komponentenverschachtelung.
//
export interface CommonProps extends HTMLAttributes<HTMLDivElement> {
  onBackground?: `${ColorScheme}-${ColorWeight}`; // z. B. Textfarbe über Hintergrundkontrast
  onSolid?: `${ColorScheme}-${ColorWeight}`;      // z. B. Textfarbe auf "solid" Hintergrund
  align?: CSSProperties["textAlign"];             // Textausrichtung
  className?: string;                             // Custom-Klasse
  children?: ReactNode;                           // Nested Content
  style?: React.CSSProperties;                    // Inline-CSS
}
