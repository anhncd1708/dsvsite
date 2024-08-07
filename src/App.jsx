import "./App.css";
import Router from "./routes/Router";
import ThemeProvider from "./theme"

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
