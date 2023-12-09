import React, { Component } from "react";
// import "./Carousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default class Button extends Component {
  render() {
    return (
      <div
        id={this.props.side + "Button"}
        onClick={() =>
          this.props.side == "left"
            ? this.props.handleClick("left")
            : this.props.handleClick("right")
        }
      >
        {this.props.side == "left" ? (
          <ArrowBackIosIcon style={{ color: "white", fontSize: "30px" }} />
        ) : (
          <ArrowForwardIosIcon style={{ color: "white", fontSize: "30px" }} />
        )}
      </div>
    );
  }
}
