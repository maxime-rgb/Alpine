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


const ChangeColorConnect = ({OptionSelected}) => {
    let data
        if (OptionSelected.name === 'A110 Pure') {
            data =  pure
        } else {
            data =  legend
        }

        console.log(data);
    return (

        <div>
            <NavbarHome />
                <div className="d-flex justify-content-around">
                    {Object.keys(data.color).map((key)=>{
                    return <CardOption type="colors" link='rims' element={data.color[key]} name={data.color[key].name} description='' price={data.color[key].price} img={data.color[key].img} />
                    })}
                </div>
        </div>
  )
}
  const ChangeColor =  connect(mapStateToProps)(ChangeColorConnect)
  
  export default ChangeColor;