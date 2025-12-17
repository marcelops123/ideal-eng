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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Jura:wght@300;400;500;600;700&display=swap');

  :root{
    --ideal-orange: #ff3b1f;
    --ideal-orange-2: #ff5a2a;
    --ideal-bg: #050505;
    --ideal-muted: rgba(255,255,255,.72);
    --ideal-soft: rgba(255,255,255,.55);

    /* TÍTULOS AGORA EM ROBOTO */
    --font-title: "Roboto", system-ui, -apple-system, Segoe UI, Arial, sans-serif;

    /* TEXTOS CONTINUAM EM JURA */
    --font-body: "Jura", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  }

  html, body {
    background: var(--ideal-bg);
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
