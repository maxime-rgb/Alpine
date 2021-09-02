import React from 'react';
import NavbarHome from './NavbarHome';
import pure from './OptionsPure';
import legend from './OptionsLegend';
import {connect} from 'react-redux';
import CardEquipOption from './CardEquipOption';
import {Tabs, Tab, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";





const mapStateToProps = (state ) => {
    return { OptionSelected: state.OptionSelected};
};


const ChangeAccessoriesConnect = ({OptionSelected}) => {


    let data

    if (OptionSelected.name === 'A110 Pure') {
        data =  pure
    } else {
        data =  legend
    }

    const displayAccessories = () =>{

        return Object.keys(data.accessories).map((index)=>{
            return(   
                <Tab  eventKey={index} title={index}>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        {Object.keys(data.accessories[index]).map((list)=>{
                            return(
                              
                                <CardEquipOption 
                                    type="accessories" 
                                    link='/ recap'    
                                    element={data.accessories[index][list]} 
                                    id={data.accessories[index][list].id}
                                    name={data.accessories[index][list].name} 
                                    description='' 
                                    price={data.accessories[index][list].price} 
                                    img={data.accessories[index][list].img} 
                                    group={index}
                                />
                            )   
                        })}
                    </div>
                </Tab>
            
            )   
        })
    }

    return (
        <div>
            <Tabs defaultActiveKey="transport_protection" id="uncontrolled-tab-example" className="justify-content-center">
                {displayAccessories()}
            </Tabs>
            <Link to="/recap">
            <div className="d-grid gap-2">
                <Button size="lg" className="btnRecap" variant="primary" >Go to your recap</Button>
            </div>
            </Link >
        </div>
    )
}


const ChangeAccessories =  connect(mapStateToProps)(ChangeAccessoriesConnect)

export default ChangeAccessories;