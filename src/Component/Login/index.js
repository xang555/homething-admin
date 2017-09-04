import React, { Component } from 'react'
import { Col,Row,
     Grid, Panel,Image,
    Button,FormGroup,
    FormControl,Form,Well,
    ControlLabel,Checkbox,Label, Alert} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reqlogin } from '../../Actions';
import { SAVE_TOKEN } from '../../appconfig';

 class Login extends Component {

    constructor(props){
        super(props);

      this.state = {
          user : "",
          passwd:"",
          token:"",
          validationStateUser: null,
          validationStatePasswd: null
      }

    }

    
    handleChange = (event) =>{

    let target = event.target;
    let value = target.value;
    let name = target.name;  

     this.setState({
       [name] : value
     });

    }

    handleOnLoginButtonClick = (event) =>{
  
       event.preventDefault();

      let { user, passwd } = this.state;
      if(user.trim().length <=0){
        this.setState({
          validationStateUser:"error"
        });
      }else if(passwd.trim().length <=0 ){
          this.setState({
          validationStatePasswd:"error"
        });
      }else {
        this.props.reqlogin(user,passwd);
      }

    }


    render(){

    let alert = null;
      
    if(!this.props.auth.isLoging && this.props.auth.errmsg === "401"){
      alert =  <Alert bsStyle="danger"><strong>Login Failure, </strong>Please try again!</Alert>;
    }
      
    return (
        
    <div style={{ marginTop:"10%", width:"55%",marginLeft:"25%" }}>
        {
          alert
        }
    <Panel>
    <div style={{ marginTop:"4%",marginLeft:"35%",marginBottom:"5%" }}><h2>Homething Admin</h2></div>    
    <div >
   <Form horizontal>
    <FormGroup controlId="formUserName" bsSize="large" validationState={this.state.validationStateUser}>
      <Col componentClass={ControlLabel} sm={2}>
        UserName
      </Col>
      <Col sm={9}>
        <FormControl type="text" name="user" placeholder="UserName" value={this.state.user} onChange={this.handleChange} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formPassword" bsSize="large" validationState={this.state.validationStatePasswd}>
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={9}>
        <FormControl type="password" name="passwd" placeholder="Password"  value={this.state.passwd} onChange={this.handleChange}/>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={5}>
        <Button  bsStyle="primary" type="submit" bsSize="large" disabled={this.props.auth.isLoging} block onClick={this.handleOnLoginButtonClick}>
          {
           this.props.auth.isLoging ? "Signin...":"signin"
         } 
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


  const mapStateToProps = (state) => {
    return ({ auth : state.auth});
  }

 const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({reqlogin},dispatch);
  }

 export default connect(mapStateToProps,mapDispatchToProps)(Login);