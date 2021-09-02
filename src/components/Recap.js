import React from 'react';
import {connect} from "react-redux";
import imgPure from './CarouPure';
import imgLegend from './CarouLegend';
import { Carousel } from 'react-bootstrap';
import RecapAll from './TabRecap';



const mapStateToProps = (state, ) => {
    return { OptionSelected: state.OptionSelected
    };
};


const ImageChoiceConnect = ({OptionSelected}) => {

let data
    if (OptionSelected.name === 'A110 Pure') {
        data =  imgPure
    } else {
        data =  imgLegend
    }

    if (OptionSelected.color.name === "Deep Black Metallic Tint" && OptionSelected.rims.name === "serac"){
        data = data.color.black.rims.serac
    }else if (OptionSelected.color.name === "Deep Black Metallic Tint" && OptionSelected.rims.name=== "standard"){
        data = data.color.black.rims.standard
    } 

    else if (OptionSelected.color.name === "Alpine Blue Special Tint" && OptionSelected.rims.name === "serac"){
        data = data.color.blue.rims.serac
    }else if (OptionSelected.color.name === "Alpine Blue Special Tint" && OptionSelected.rims.name === "standard"){
        data = data.color.blue.rims.standard

    }else if (OptionSelected.color.name === "Opaque Glacier White paint" && OptionSelected.rims.name === "serac"){
        data = data.color.white.rims.serac
    } else if (OptionSelected.color.name === "Opaque Glacier White paint" && OptionSelected.rims.name === "standard"){
        data = data.color.white.rims.standard
    }
    else if (OptionSelected.color.name === "Alpine Blue Special Tint" && OptionSelected.rims.name === "Legende"){
        data = data.color.blue
    }else if (OptionSelected.color.name === "Deep Black Metallic Tint" && OptionSelected.rims.name === "Legende"){
        data = data.color.black
    } else  {
        data = data.color.white
    }




    return (
        <section>
            <Carousel>
                {Object.keys(data).map((index)=>{
                return(
                        <Carousel.Item className="firstImg">
                            <img
                                className="d-block w-100"
                                src={data[index]}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        )
                })}
            </Carousel>
            <RecapAll />
        </section>
    )
}


const Recap = connect( mapStateToProps)(ImageChoiceConnect);

export default Recap