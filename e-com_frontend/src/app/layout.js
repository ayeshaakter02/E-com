import {
  Roboto,
  Cormorant_Garamond,
  Rochester,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/redux/ReduxProvider";
import VerifyUser from "@/components/verifyuser/VerifyUser";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
});

const paragraph = Cormorant_Garamond({
  variable: "--font-paragraph",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const heading = Rochester({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

const logo = Great_Vibes({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Get Ready with me Shop",
  description: "Get Ready with me Shop Created with Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${paragraph.variable} ${heading.variable} ${logo.variable} antialiased`}
      >
        <ReduxProvider>
          <VerifyUser>{children}</VerifyUser>
        </ReduxProvider>
      </body>
    </html>
  );
}
