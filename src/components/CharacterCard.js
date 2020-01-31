import React from "react";
import { Card, CardText, CardImg,  CardBody, CardTitle } from 'reactstrap';


export default function CharacterCard(props) {
 
  return (
    <div>
        <Card>
          <CardImg top width="100%" src={props.image} alt="Card image"/>
          <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>Status: {props.status}</CardText>
          <CardText>Species: {props.species}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          </CardBody>
        </Card>
    </div>
  
    );
}
