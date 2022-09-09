import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
        <Route component={Portfolio} path="/Portfolio" />
        <Route component={AboutUs} path="/AboutUs" />
        <Route component={Home} path="/Home" />
        <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
