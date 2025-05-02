"use client";

import { usePathname } from "next/navigation"; //// Holt die aktuelle URL/Route, um aktive Links z.B. hervorzuheben
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton, Logo } from "@/once-ui/components"; //// Import eigener Komponenten aus deinem Designsystem "once-ui"

import styles from "@/components/Header.module.scss"; // Import der SCSS-Styles speziell für den Header
// Dort wird die Ausrichtung für die Geräte definiert (z.B. sticky, fixed, etc.)

import { routes, display } from "@/app/resources"; //// Importiert Konfigurationsdaten (z.B. welche Routen sichtbar sind, Einstellungen)
import { person, home, about, blog, work, gallery,codex } from "@/app/resources/content/de"; // Importiert Inhalte/Textbausteine für Navigation (Label, Icons, etc.)

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; //Optional: erlaubt, das Locale (Sprach-/Zeitformat) anzugeben, Standard ist "en-GB"
};

// Definiert die Komponente TimeDisplay als React Function Component
// Erwartet die Props: timeZone (Pflichtfeld) und locale (optional, Standard "en-GB")
const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {

  // Lokaler State: Speichert die aktuelle Uhrzeit als String
  const [currentTime, setCurrentTime] = useState("");

  // useEffect wird beim Laden der Komponente und bei Änderung von timeZone oder locale ausgeführt
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatierungsoptionen: Zeigt Stunden, Minuten und Sekunden in 2-stelligem Format
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 24h-Format
      };
      // Wandelt das aktuelle Datum in einen formatierten Zeit-String um
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      // Aktualisiert den State mit der neuen Zeit
      setCurrentTime(timeString);
    };

    updateTime();
    // Alle 1000 Millisekunden (1 Sekunde) wird die Zeit neu berechnet
    const intervalId = setInterval(updateTime, 1000);

    // Räumt beim Verlassen der Komponente das Interval wieder auf
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);   // Abhängigkeiten: Wenn timeZone oder locale sich ändern, wird Effect neu gestartet

  return <>{currentTime}</>; //// Gibt die aktuelle Uhrzeit zurück (wird gerendert)
};

export default TimeDisplay;

export const GravebornHeader = () => {
  // Holt die aktuelle URL (z.B. "/about") für die Navigation; falls undefined, fallback auf leeren String
  const pathname = usePathname() ?? "";

  return (
    <>
      {/* Unsichtbare Fade-Komponente für Header-Hintergrund (oben) */}
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      {/* Unsichtbare Fade-Komponente für Header-Hintergrund (unten, invertiert) */}
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      {/* Haupt-Header-Container */}
      <Flex
        fitHeight
        className={styles.position} //// SCSS: sticky Position oben auf der Seite
        as="header"
        //background="static-white"
        zIndex={9}
        fillWidth
        padding="8"
        
        horizontal="center"
      >
        {/* LOGO */}
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <Logo
            size="xl" // Größe (l = 40px)
            iconSrc="/GravebornLogo.png" // Hier dein Logo-Pfad (achte auf /public/logo.svg)
            wordmark={false} // Nur das Icon, kein Schriftzug
            href="/" // Klick aufs Logo führt auf die Startseite
          />
        </Flex>

        {/* Mitte im Header: Navigation Buttons */}
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            
            horizontal="center"
          >
             

            {/* Navigation innerhalb der Flexbox */}
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {/* Home-Button: Zeigt nur, wenn in routes definiert und ist aktiv, wenn auf der Startseite */}
              {/* 🏠 Home */}
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              {/* Trennlinie */}
              <Line vert maxHeight="24" />
             
             
             {/* BLOG | News + Updates + Devlogs zentral in einer Seite, Tags */}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    //prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    //prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              <Line vert maxHeight="24" />
              {/* TEAM | Credits, Bilder, Rollen , immer ich mit verschiedenen Haaren und OUTFITS*/}
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    //prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}
               <Line vert maxHeight="24" />

            {/* Galerie | Visuals: Screenshots, Artworks, Animationen, evtl. in Tabs */} 
            {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    //prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith("/gallery")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                  />
                </>
              )}
             
              <Line vert maxHeight="24" />
             
             
              {/* FAQ | Häufige Fragen, Systemanforderungen, Installationshinweise*/}

              
              
              

              {/* Kontakt | Mail, Discord, Socials, evtl. Kontaktformular */}
              
              {/* SPÄTER = Demo spielen */}
              {/* About Button (Desktop & Mobile Varianten) */}
             
             
              {/* Welt */}

              {routes["/world"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    //prefixIcon="person"
                    href="/world"
                    label={codex.label}
                    selected={pathname === "/world"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/world"
                    selected={pathname === "/world"}
                  />
                </>
              )}



              {/* Work Button */}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}
              
              {/* Gallery Button */}
              
            </Flex>
          </Flex>
        </Flex>
        {/* Rechte Seite im Header: Uhrzeit-Anzeige */}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            {/* Zeigt aktuelle Zeit nur, wenn in Settings erlaubt (und versteckt auf kleinen Screens) */}
            {/* <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
{/* {routes["/gravebornblog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    //prefixIcon="person"
                    href="/gravebornblog"
                    label={gravebornBlog.label}
                    selected={pathname === "/gravebornblog"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    //prefixIcon="person"
                    href="/gravebornblog"
                    selected={pathname === "/gravebornblog"}
                  />
                </>
              )} */}