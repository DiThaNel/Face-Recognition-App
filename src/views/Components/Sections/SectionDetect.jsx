/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Popover from "@material-ui/core/Popover";
import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";
import ImageSearchRoundedIcon from "@material-ui/icons/ImageSearchRounded";

class SectionDetect extends React.Component {
  constructor() {
    super();
    this.state = {
      openBottom: false
    };
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="info" className={classes.cardHeader}>
                    <h4>
                      This magic brain will detect faces in your pictures. Give
                      it a try.
                      <Button
                        color="primary"
                        buttonRef={node => {
                          this.anchorElBottom = node;
                        }}
                        onClick={() => this.handleClickButton("openBottom")}
                      >
                        <i className="material-icons">info</i>
                      </Button>
                      <Popover
                        classes={{
                          paper: classes.popover
                        }}
                        open={this.state.openBottom}
                        anchorEl={this.anchorElBottom}
                        anchorReference={"anchorEl"}
                        onClose={() => this.handleClosePopover("openBottom")}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                      >
                        <h3 className={classes.popoverHeader}>Gabriel</h3>
                        <div className={classes.popoverBody}>
                          Your current rank is ... #5
                        </div>
                      </Popover>
                    </h4>
                  </CardHeader>
                  <CardBody onChange={this.props.onInputChange}>
                    <CustomInput
                      labelText="Img Link..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <ImageSearchRoundedIcon
                              className={classes.inputIconsColor}
                            />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      // eslint-disable-next-line react/prop-types
                      onClick={this.props.onSubmit}
                      simple
                      color="rose"
                      size="lg"
                    >
                      Detect
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionDetect.propTypes = {
  classes: PropTypes.object
};

export default withStyles(loginStyle)(SectionDetect);
