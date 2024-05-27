import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { AppProvider } from "./AppContext";

const queryClient = new QueryClient();

function App() {
  // const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
