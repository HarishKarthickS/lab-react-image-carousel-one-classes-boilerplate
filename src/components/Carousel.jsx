import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super();
        this.state={
            imageIndex:0
        }
    }
  render(){
    let indexZero=()=>{
        this.setState({
            imageIndex:0
        })
    }
    let indexIncrement=()=>{
        this.setState({
            imageIndex:this.state.imageIndex+1
        })
    }
    let indexDecrement=()=>{
        this.setState({
            imageIndex:this.state.imageIndex-1
        })
    }
    let indexLast=()=>{
        this.setState({
            imageIndex:2
        })
    }
    let prevImage=()=>{
        this.state.imageIndex-1<0?indexLast():indexDecrement();
    }
    let nextImage=()=>{
            this.state.imageIndex+1>images.length-1?indexZero():indexIncrement();
    }
    const myStyle ={
        backgroundImage:`url(${images[this.state.imageIndex].img})`,
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:"100% 100%",
        height: "80vh",
        width: "42vw",
    }
    return(
        <div className="main-container" style={myStyle}>
            <div className="arrow">
                <ArrowBackIosIcon onClick={prevImage}/>
            </div>
            <div className="Sub-container">
                <div className="Content">
                    <h1>
                        {images[this.state.imageIndex].title}
                    </h1>
                </div>
                <div className="Content">
                    <h2>
                        {images[this.state.imageIndex].subtitle}
                    </h2>
                </div>
            </div>
            <div className="arrow">
                <ArrowForwardIosIcon onClick={nextImage}/>
            </div>
        </div>
    )
  }
}

export default Carousel;