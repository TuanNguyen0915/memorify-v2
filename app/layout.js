import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Providers } from "@/lib/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memorify",
  description: "Social Media App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body
          className={`${inter.className} w-full bg-primary-200 text-textColor-100`}
          suppressHydrationWarning={true}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
