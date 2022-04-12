
import './App.css';
import ResponsiveAppBar from './component/Header'
import SimpleBottomNavigation from './component/Bottom'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <h6 style={{marginTop:75}}></h6>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>}/>
      </Routes>
    </BrowserRouter>
    <h6 style={{marginTop:100}}></h6>
    <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
}

export default App;
