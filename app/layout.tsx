import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";



export const metadata = {
  title: "Amanuel Zerfu Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
