import { NextApiRequest, NextApiResponse } from "next";
import * as cookie from "cookie";

//Diese API prüft, ob der User ein bestimmtes Cookie (authToken=authenticated) hat, und gibt dann entweder "eingeloggt" oder "nicht eingeloggt" zurück.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = cookie.parse(req.headers.cookie || "");

  if (cookies.authToken === "authenticated") {
    return res.status(200).json({ authenticated: true });
  } else {
    return res.status(401).json({ authenticated: false });
  }
}
