import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {selectVersion} from '../actions';
import OptionsPure from './OptionsPure'
import OptionsLegend from './OptionsLegend'
import { Link } from "react-router-dom";


const ModelCardConnect = ({selectCarVersion}) => {

    function handleClick(option){
        selectCarVersion(option)
    }
    return (

        
        <div className="card-container">
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={OptionsPure.default.img} />
                <Card.Body>
                    <Card.Title>{OptionsPure.default.name}</Card.Title>
                    <Card.Text>{OptionsPure.default.description} </Card.Text>
                    <Card.Text>From {OptionsPure.default.price} $ </Card.Text>
                    <Link to="/colors">
                        <Button variant="outline-primary" onClick={()=>handleClick(OptionsPure)}>Go somewhere</Button>
                    </Link>

                </Card.Body>
            </Card>
          
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={OptionsLegend.default.img} />
                <Card.Body>
                    <Card.Title>{OptionsLegend.default.name}</Card.Title>
                    <Card.Text>{OptionsLegend.default.description} </Card.Text>
                    <Card.Text>From {OptionsLegend.default.price} $</Card.Text>
                    <Link to="/colors">
                        <Button variant="outline-primary" onClick={()=>handleClick(OptionsLegend)}>Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
        
    )};


const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return { 
        selectCarVersion : (payload) => dispatch(selectVersion(payload))
    };
};


    const ModelCard = connect(mapStateToProps,mapDispatchToProps)(ModelCardConnect);

export default ModelCard;