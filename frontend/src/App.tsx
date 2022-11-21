import "./App.css";
import Fade from "@mui/material/Fade"
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <Fade in={true}>
      <div className="App">
          <Home />
      </div>
    </Fade>
  )
}

export default App;
