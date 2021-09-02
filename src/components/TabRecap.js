import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {connect} from "react-redux";


function mapStateToProps(state){
	return {
		OptionSelected: state.OptionSelected
	}
}

function RecapCard ({OptionSelected}) {

    console.log(OptionSelected);

    // TOTAL CALCULES EQUIP
    let totalEquipement = 0;

    function totalEquip(price) {
        return totalEquipement += price
    }

    // TOTAL EQUIPMENTS
    function totalEquipAll () {  

        return Object.keys(OptionSelected.equipments).map((index)=>{
        
            return(   
                <div className="d-flex flex-column justify-content-evenly text-black">

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{OptionSelected.equipments[index].category}</Accordion.Header> 
                                {Object.keys(OptionSelected.equipments[index].perso).map((list)=>{

                                totalEquip(OptionSelected.equipments[index].perso[list].price)

                                return(
                                    <Accordion.Body>
                                            <h3>{OptionSelected.equipments[index].perso[list].name}</h3>
                                            <h3>{OptionSelected.equipments[index].perso[list].price}$ </h3>
                                    </Accordion.Body>
                                )   
                            })}
                        </Accordion.Item>
                    </Accordion>

                </div>          
            ) 
        })
    }

    // TOTAL CALCULES ACCESS
    let totalAccessoire = 0;
  
    function totalAcc(price) {
        return totalAccessoire += price
    }

    // TOTAL ACESSORIES
    function totalAccessAll () {  

        return Object.keys(OptionSelected.accessories).map((index)=>{
            console.log(index);
            console.log(OptionSelected.accessories[index]);
            return(   
                <div className="d-flex flex-column justify-content-evenly text-black">

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>{index}</Accordion.Header> 
                                {Object.keys(OptionSelected.accessories[index]).map((key)=>{

                                totalAcc(OptionSelected.accessories[index][key].price)

                                return(
                                    <Accordion.Body>
                                            <h3>{OptionSelected.accessories[index][key].name}</h3>
                                            <h3>{OptionSelected.accessories[index][key].price}$ </h3>
                                    </Accordion.Body>
                                )   
                            })}
                        </Accordion.Item>
                    </Accordion>

                </div>          
            ) 
        })
    }

    //TOTAL ALL
    let totalAll = 0;

    function totalAllCalc (OptionSelected, totalAccessoire, totalEquipement) {

        return OptionSelected.price + OptionSelected.color.price + OptionSelected.rims.price + OptionSelected.saddlery.price + totalAccessoire + totalEquipement
    }

    return (
        <div class="text-center">
            
            {/******** MODELE ********/}
            <h2>{OptionSelected.name}</h2>
            <h2>{OptionSelected.price} $</h2>


            {/******** COLOR ********/}
            <div className="text-black">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Color</Accordion.Header>
                        <Accordion.Body>
                            <h3>{OptionSelected.color.name}</h3> 
                            <h3>{OptionSelected.color.price} $</h3> 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/******** RIMS ********/}
            <div className="text-black">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Rims</Accordion.Header>
                        <Accordion.Body>
                            <h3>{OptionSelected.rims.name}</h3> 
                            <h3>{OptionSelected.rims.price} $</h3> 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/******** SADDLERY ********/}
            <div className="text-black">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Saddlery</Accordion.Header>
                        <Accordion.Body>
                            <h3>{OptionSelected.saddlery.name}</h3> 
                            <h3>{OptionSelected.saddlery.price} $</h3> 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/******** EQUIPMENTS ********/}
            <h1 className="text-white">EQUIPMENT :</h1>
            {totalEquipAll()}
            <h1 className="text-white">TOTAL :</h1>
            <h1 className="text-white">{totalEquipement} $</h1>

            {/******** ACCESSORIES ********/}
            <h1 className="text-white">ACCESSORIES :</h1>
            {totalAccessAll()}
            <h1 className="text-white">TOTAL :</h1>
            <h1 className="text-white">{totalAccessoire} $</h1>

            <h1 className="text-white">TOTAL</h1>
            <h2 className="text-white">{totalAllCalc (OptionSelected, totalAccessoire, totalEquipement)} $</h2>

        </div>
    )

}

const RecapAll = connect(mapStateToProps)(RecapCard);

export default RecapAll;