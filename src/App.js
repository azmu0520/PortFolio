import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
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
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
