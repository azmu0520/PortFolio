import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
const App = () => {
  return (
    <div className="app">
      <Particles
        params={{
          particles: {
            number: {
              value: 25,
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
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0,
                sync: false,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },

            modes: {
              push: {
                particles_nb: 3,
              },
              bubble: {
                size: 10,
                distance: 100,
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
          <Route path="/projects">
            <About />
          </Route>
          <Route path="/contact">
            <About />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
