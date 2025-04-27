import { NextApiRequest, NextApiResponse } from "next";
import * as cookie from "cookie";
 
/*Diese API-Route erlaubt nur POST-Anfragen. 
Wenn das eingegebene Passwort mit einem geheimen Passwort übereinstimmt, wird ein sicheres Login-Cookie gesetzt. 
Wenn nicht, gibt es eine Fehlermeldung zurück.
*/
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { password } = req.body;
    const correctPassword = process.env.PAGE_ACCESS_PASSWORD;

    if (!correctPassword) {
      console.error('PAGE_ACCESS_PASSWORD environment variable is not set');
      return res.status(500).json({ message: "Internal server error" });
    }

    if (password === correctPassword) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("authToken", "authenticated", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        }),
      );

      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}