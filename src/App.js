
import './App.css';
import ResponsiveAppBar from './component/Header'
import SimpleBottomNavigation from './component/Bottom'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>}/>
      </Routes>
    </BrowserRouter>
    <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
 
  );
}

export default App;
