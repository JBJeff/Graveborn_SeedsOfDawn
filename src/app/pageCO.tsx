import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column,Card,SmartImage } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content/de.js";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = "Graveborn"
  const description = "Landingpage showcasing my work as Gamedev and Artist.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    // Haupt-Container der Seite: mittlere Maximalbreite, große Lücken, zentriert
    <Column maxWidth="xl" gap="xl" horizontal="center">
      <script
      //Structured Data (Schema.org) für bessere SEO & Google Rich Results
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column maxWidth="xl" gap="xl" horizontal="center" position="relative" style={{ marginTop: "20px" }}>
  
  {/* Logo als eigene Komponente - leicht über dem Bild */}
  <Flex horizontal="center" style={{ marginBottom: "-80px", zIndex: 10 }}>
    <img
      src="/Graveborn_SeedsOfDawnTrans.png"
      alt="Graveborn Logo"
      style={{
        maxWidth: "50%",
        height: "auto",
        pointerEvents: "none",
      }}
    />
  </Flex>

  {/* Titelbild darunter */}
  <Flex horizontal="center" padding="l">
    <Column
      fillWidth
      maxWidth={1200}
      background="surface"
      radius="xl"
      padding="32"
      gap="l"
      horizontal="center"
      style={{
        marginTop: "0px",
      }}
    >
      <Card style={{ width: "100%", maxWidth: "800px", overflow: "hidden" }}>
        <Flex aspectRatio="16/9" position="relative" width="l">
          <SmartImage
            src="/LandschaftMiHeld.png"
            alt="Graveborn Titelbild"
            objectFit="cover"
            fill
          />
        </Flex>
      </Card>
    </Column>
  </Flex>
</Column>

      {/* Jetzt kommt eine Row, Zwei kombonetenn 1. Kurze Beschreibung über das Spiel 2. Ein Bild mit ein Play Button welches ein Video Abspielt */}
      {/* Beschreibung : 
                      Verlassene Städte, vergessene Felder, gebrochene Träume.

                      Errichte dein eigenes Zuhause, belebe ein vergessenes Dorf –
                      entdecke, was einst verloren war, und schmiede dein eigenes Schicksal

                      Dies ist der Anfang deiner neuen Reise. */}



      {/* Jetzt kommt eine Sektion wo die Jeweils ein Gameplay element aufzählt(Titel,Beschreibung) + daneben ein Bild davon und das als Row eingebet in Column */}

      
      {/* Quests & Storytelling 
          Enthülle die Geheimnisse der zerstörten Welt durch Erkundung und Entdeckungen.
      */}

      {/* Dorfwachstum
          Baue das Dorf auf und betreibe Handel.*/}

      {/*  Charaktere & Beziehungen
        Finde überlebende, baue Freundschaften auf und finde die Liebe.*/}

        {/* Farm- und Aufbausystem
      Baue deine eigene Farm auf, erweitere dein Zuhause und gestalte dein Leben  */}

      {/* Handwerk und Sammeln
          "Sammle Ressourcen, finde neue Gegenstände und erweitere deine Möglichkeiten." */}
      
      {/* Kämpfe und Herausforderungen
        Stelle dich den Herausforderungen der Welt und kämpfe gegen die Kreaturen. */}
      
      {/*  Entscheide selbst:
           Suche Abenteuer oder genieße einfach dein Dorf- und Farmlife.
      */}






      {/* Hintergrund geschichte, ZeitStrahl, verdeutlichen das es der Anfang der Gschichte Ist! Vorbild wie auf the Witcher Seite */}

      {/* Dann komt eine Community Einladung + Links zu Kickstarter und Discord (X und Facebook/Insta) */}

      {/* Footer als Card */}
      {/* Eventuell Zwei Footer mit verschiedenen Hintergründen! */}
      {/*  */}
      {/* Oberer Bereich: Headline, Subline, Button */}
      
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
        {/* Header animiert wenn man drauf ist */}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading> 
          </RevealFx> 
           {/* text animiert erscheinen lassen mit Verzögerung, delay */}
           <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx> 
        </Column>
      </Column>

      {/* ab Hier Blog */}

      {/* <RevealFx translateY="16" delay={0.6}> */}
        {/* <Projects range={[1, 1]} /> */}
      {/* </RevealFx> */}
       {/* Optional: Wenn Blog existiert, dann neuesten Blog-Post Bereich anzeigen */}
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Random Text Loerm Ipsum
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            {/* <Posts range={[1, 2]} columns="2" /> */}
          </Flex>
        </Flex>
      )}

      {/* Optional: Wenn Newsletter existiert, dann Mailchimp-Formular anzeigen */}
      {/* <Projects range={[2]} /> */}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
 
{/* <img 
src="/Graveborn_SeedsOfDawnTrans.png" 
alt="Graveborn Logo"
style={{
  position: "absolute",
  top: "-70%",
  left: "50%",
  transform: "translateX(-50%)",
  maxWidth: "60%", // oder wie groß du willst
  height: "auto",
  pointerEvents: "none", // wichtig: klickt NICHT das Bild, sondern nur das Card-Element
}}
/> */}