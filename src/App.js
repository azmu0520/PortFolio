import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
const App = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#f9ab00",
              },
              polygon: {
                nb_sides: 10,
              },
            },

            size: {
              value: 6,
              random: false,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0,
                sync: false,
              },
            },
          },
        }}
      />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
