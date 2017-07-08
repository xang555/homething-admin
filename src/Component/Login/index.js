import React, { Component } from 'react'
import { Col,Row,
     Grid, Panel,Image,
    Button,FormGroup,
    FormControl,Form,Well,
    ControlLabel,Checkbox,Label} from 'react-bootstrap';

 class Login extends Component {

    constructor(props){
        super(props);
    }

    render(){

    return (
        
    <div style={{ marginTop:"10%", width:"55%",marginLeft:"30%" }}>

    <Panel>
    <div style={{ marginTop:"4%",marginLeft:"40%",marginBottom:"5%" }}><h2>Login Now</h2></div>    
    <div >
   <Form horizontal>
    <FormGroup controlId="formUserName" bsSize="large">
      <Col componentClass={ControlLabel} sm={2}>
        UserName
      </Col>
      <Col sm={9}>
        <FormControl type="text" placeholder="UserName" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formPassword" bsSize="large">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={9}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={5}>
        <Button  bsStyle="primary" type="submit" bsSize="large" block>
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>     

    </div>
    </Panel> 

        </div>

    );    

    }

 }   

 export default Login;