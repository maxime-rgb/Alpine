import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";




function MyVerticallyCenteredModal(props) {
  
  
  
  // let totalAccessoire = 0
  let totalEquipement = 0
  
    // function totalAcc(price) {
    //     totalAccessoire += price
    // }
    function totalEquip(price) {
        totalEquipement += price
    }
  
  function displayEquipment(){
      
    return Object.keys(props.OptionSelected.equipments).map((index)=>{ 
   
      
      
      return(   
          <div className="d-flex flex-column justify-content-evenly">
            <span className="line"></span>
            <h1>{props.OptionSelected.equipments[index].category} </h1>  
            
            <ul>
              {Object.keys(props.OptionSelected.equipments[index].perso).map((list)=>{
                totalEquip(props.OptionSelected.equipments[index].perso[list].price)
                  return(
                    <>
                   
                    <div className="optionBuy">
                      <li className="optionName">{props.OptionSelected.equipments[index].perso[list].name}</li>     
                      <li className="optionPrice">{props.OptionSelected.equipments[index].perso[list].price}$ </li>
                    </div> 
                    
                    </>
                    
                  )   
              })}
              
            </ul>

          </div>       
      ) 
    })

  }

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          SELECTED OPTIONS 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {displayEquipment()}
          <span className="line"></span>   
          <div className="totalAmount">
            <h1 className="total">Total:</h1>
            <h1 className="totalPrice">{totalEquipement} $</h1>
          </div>
          <span className="line"></span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Return</Button>
          <Link to="/accessories">
            <Button variant="primary" >Go to Accessories</Button>
          </Link >
        </Modal.Footer>
      </Modal>
    );
  }

  function mapStateToProps(state){
    return {
      OptionSelected: state.OptionSelected
    }
  }
  
  function ModalRecapConnect({OptionSelected}) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
          <Button size="lg" variant="primary" className="btnRecap" onClick={() => setModalShow(true)}>
              List of selected options
          </Button>

          <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              OptionSelected = {OptionSelected}
          />
      </>
    );
  }
  const RecapModal = connect(mapStateToProps)(ModalRecapConnect)

  export default RecapModal;