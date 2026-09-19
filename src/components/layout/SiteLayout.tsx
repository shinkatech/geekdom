import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollRestoration } from "./ScrollRestoration";

export const SiteLayout = () => (
  <div className="flex min-h-dvh flex-col">
    <ScrollRestoration />
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);
