import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "./hooks/use-theme";
function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="w-full flex flex-col items-center min-h-screen transition-colors duration-300 ease-in-out">
        <Navbar />
        <Hero />
        <p className="text-xl">portfolio</p>
      </main>
    </ThemeProvider>
  );
}

export default App;
