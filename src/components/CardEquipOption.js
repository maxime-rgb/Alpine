import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectColor} from '../actions';
import { selectRim } from '../actions';
import { selectSaddlery } from '../actions';
import { selectEquipment } from '../actions';
import { selectAccessories } from '../actions';


const CardEquipOptionConnect = ({props, selectCarColor, selectCarRim, selectCarSaddlery, selectCarEquipment, selectCarAccessories }) => {


    function handleChecked() {
        switch (props.type) {
            case 'colors':
               return selectCarColor(props.element)
            case 'rims':
               return selectCarRim(props.element)
            case 'saddlery':
               return selectCarSaddlery(props.element)
            case 'equipments':
                console.log(props.group)
                return selectCarEquipment({element : props.element, group: props.group})
            case 'accessories':
                console.log(props.group)
                return selectCarAccessories({element : props.element, group: props.group})
            default:
                return

        }
    }
    return (

        <div className="card-container">

            <Card style={{ width: '20vw', height:'27vw' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description} </Card.Text>
                    <Card.Text>{props.price} $</Card.Text>
                    <Button variant="outline-primary" onClick={()=>handleChecked()} size="lg" active> Select</Button>
                </Card.Body>
            </Card>
        </div>
  

    )};


    const mapStateToProps = (state, ownProps) => {
        return { props: ownProps, OptionSelected: state.OptionSelected
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return { 
            selectCarColor: (payload) => dispatch(selectColor(payload)),
            selectCarRim: (payload) => dispatch(selectRim(payload)),
            selectCarSaddlery: (payload) => dispatch(selectSaddlery(payload)),
            selectCarEquipment: (payload) => dispatch(selectEquipment(payload)),
            selectCarAccessories: (payload) => dispatch(selectAccessories(payload)),
        };
};

const CardEquipOption = connect(mapStateToProps,mapDispatchToProps)(CardEquipOptionConnect);

export default CardEquipOption;