import "./styles/globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#181d1f] text-[#e6e94f] min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}