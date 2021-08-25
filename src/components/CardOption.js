import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectColor } from '../actions';
import { selectRim } from '../actions';
import { selectSaddlery } from '../actions';
import { Link } from "react-router-dom";

const CardOptionConnect = ({props, selectCarColor, selectCarRim, selectCarSaddlery}) => {

    function handleClick() {
        switch (props.type) {
            case 'colors':
               return selectCarColor(props.element)
            case 'rims':
               return selectCarRim(props.element)
            case 'saddlery':
               return selectCarSaddlery(props.element)
            // default:
            //    return
        }

    }

    return (
        <div className="card-container">
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description} </Card.Text>
                    <Card.Text>{props.price} $</Card.Text>
                    <Link to={props.link}>
                        <Button variant="primary" onClick={()=>handleClick()}>Select</Button>
                    </Link >
                </Card.Body>
            </Card>
        </div>

    )};


const mapStateToProps = (state, ownProps) => {
    return { props: ownProps 
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        selectCarColor: (payload) => dispatch(selectColor(payload)),
        selectCarRim: (payload) => dispatch(selectRim(payload)),
        selectCarSaddlery: (payload) => dispatch(selectSaddlery(payload)),
    };
};

const CardOption = connect(mapStateToProps,mapDispatchToProps)(CardOptionConnect);

export default CardOption;