import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/Main';
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingProvider } from "./contexts/LoadingContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <LoadingProvider>
            <Main />
          </LoadingProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
