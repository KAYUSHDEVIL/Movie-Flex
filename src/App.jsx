import { BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix"
import Signup from "./pages/Signup"
import Player from "./pages/player";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Netflix/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/player" element={<Player />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;
