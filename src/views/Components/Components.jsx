import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionDetect from "./Sections/SectionDetect.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import Particles from "react-particles-js";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "f72bf8aa3baa4a4b8135edffdfc85a93"
});

const ParticleOPS = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      bubble: {
        distance: 80,
        duration: 2,
        size: 0,
        opacity: 0
      },
      repulse: {
        distance: 300,
        duration: 1
      }
    }
  }
};

class Components extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    };
  }

  FaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    this.setState({ box: box });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.FaceLocation(response)))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Particles params={ParticleOPS} className={classes.particles} />
        <SectionNavbars />
        <SectionDetect
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <SectionJavascript
          box={this.state.box}
          imageUrl={this.state.imageUrl}
        />
      </div>
    );
  }
}

Components.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(Components);
