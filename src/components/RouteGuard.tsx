"use client";

import { useEffect, useState } from "react";
// Next.js Hook, um die aktuelle URL (Route) zu erfahren
import { usePathname } from "next/navigation";
// Seiten-Definitionen und geschützte Routen aus dem Projekt
import { routes, protectedRoutes } from "@/app/resources";
// UI-Komponenten aus Once-UI
import { Flex, Spinner, Input, Button, Heading, Column, PasswordInput } from "@/once-ui/components";
// Eigene NotFound-Komponente (404 Fehlerseite)
import NotFound from "@/app/not-found";

// Typisierung für Props: children = die eigentliche Seite (z.B. /about, /gallery)
interface RouteGuardProps {
	children: React.ReactNode;
}

// Haupt-Komponente RouteGuard
const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
   // Aktuelle URL-Pfad (z.B. /about, /blog/xyz)
  const pathname = usePathname();
  // Verschiedene Zustände verwalten
  const [isRouteEnabled, setIsRouteEnabled] = useState(false); // Gibt es diese Route überhaupt?
  const [isPasswordRequired, setIsPasswordRequired] = useState(false); // Muss man Passwort eingeben?
  const [password, setPassword] = useState(""); // Eingegebenes Passwort
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Ist User authentifiziert?
  const [error, setError] = useState<string | undefined>(undefined); // Fehlertext bei falschem Passwort
  const [loading, setLoading] = useState(true); // Lädt die Prüfung gerade?

  // Jedes Mal wenn der Pfad sich ändert -> neu prüfen
  useEffect(() => {
     // Ladezustand starten
    const performChecks = async () => {
      setLoading(true);
       // Alles auf Anfang setzen
      setIsRouteEnabled(false);
      setIsPasswordRequired(false);
      setIsAuthenticated(false);
      // Funktion: Prüfen ob Route existiert (auch dynamische Seiten wie /blog/[slug])
      const checkRouteEnabled = () => {
        if (!pathname) return false;
        // Ist Route explizit in routes definiert?
        if (pathname in routes) {
          return routes[pathname as keyof typeof routes];
        }
        // Dynamische Routen extra prüfen
        const dynamicRoutes = ["/blog", "/work"] as const;
        for (const route of dynamicRoutes) {
          if (pathname?.startsWith(route) && routes[route]) {
            return true;
          }
        }
        // Ansonsten: Route unbekannt
        return false;
      };
      // Route-Check ausführen
      const routeEnabled = checkRouteEnabled();
      setIsRouteEnabled(routeEnabled);
      // Falls Route geschützt ist, prüfen ob User schon eingeloggt ist
      if (protectedRoutes[pathname as keyof typeof protectedRoutes]) {
        setIsPasswordRequired(true);

        const response = await fetch("/api/check-auth");
        if (response.ok) {
          // User hat gültigen authToken
          setIsAuthenticated(true);
        }
      }
      // Ladezustand beenden
      setLoading(false);
    };

    performChecks();
  }, [pathname]); // Wird ausgeführt, wenn sich der Pfad ändert
  
  // Funktion: Passwort absenden und Authentifizierung prüfen
  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      // Login erfolgreich
      setIsAuthenticated(true);
      setError(undefined); // Fehlermeldung entfernen
    } else {
      // Passwort falsch
      setError("Incorrect password");
    }
  };

  // 1. Fall: Wenn noch geladen wird, Spinner anzeigen
  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }
  // 2. Fall: Route existiert nicht -> 404 Seite anzeigen
  if (!isRouteEnabled) {
		return <NotFound />;
	}

   // 3. Fall: Passwortschutz aktiv, aber User noch nicht authentifiziert -> Passwortformular anzeigen
  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }
  // 4. Fall: Alles ok -> Eingebetteten Seiteninhalt (children) anzeigen
  return <>{children}</>;
};

export { RouteGuard };
