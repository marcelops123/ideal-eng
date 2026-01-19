import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        {/* Fonts + Tokens globais (cores/gradientes) */}
        <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  :root{
    /* Cores da marca - Laranja sofisticado */
    --ideal-orange: #FF6B35;
    --ideal-orange-2: #FF8142;
    --ideal-orange-muted: #CC5629;
    --ideal-bg: #0A0A0A;
    --ideal-muted: rgba(255,255,255,.72);
    --ideal-soft: rgba(255,255,255,.55);

    /* Tipografia Inter */
    --font-title: "Inter", system-ui, -apple-system, Segoe UI, Arial, sans-serif;
    --font-body: "Inter", system-ui, -apple-system, Segoe UI, Arial, sans-serif;
  }

  html, body {
    background: var(--ideal-bg);
    font-family: var(--font-body);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
    font-weight: 700;
    letter-spacing: -0.02em;
  }
`}</style>

        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
