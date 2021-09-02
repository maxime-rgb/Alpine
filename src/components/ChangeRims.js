import React from 'react';
import pure from './OptionsPure'
import legend from './OptionsLegend'
import {connect} from 'react-redux'
import CardOption from './CardOption';
import NavbarHome from "./NavbarHome";

const mapStateToProps = (state, ) => {
    return { OptionSelected: state.OptionSelected
    };
};


const ChangeRimConnect = ({OptionSelected}) => {
    let data
        if (OptionSelected.name === 'A110 Pure') {
            data =  pure
        } else {
            data =  legend
        }

        console.log(data);

        function displayImgRims(key){
            switch (OptionSelected.color.name) {
                case "Alpine Blue Special Tint":
                    return data.rims[key].color.blue.img
                case "Deep Black Metallic Tint":
                    return data.rims[key].color.black.img
                case "Opaque Glacier White paint":
                    return data.rims[key].color.white.img
                default:
                    return data.rims[key].color.white.img
            }
        }
    return (

        <div>
            <NavbarHome />
                <div className="d-flex justify-content-around">
                    {Object.keys(data.rims).map((key)=>{
                    return (<CardOption type="rims" link='saddlery' element={data.rims[key]} name={data.rims[key].name} description='' price={data.rims[key].price} 
                    
                    img= {displayImgRims(key)} /> )
                    })}
                </div>
        </div>
  )
}
  const ChangeRim =  connect(mapStateToProps)(ChangeRimConnect)
  
  export default ChangeRim;