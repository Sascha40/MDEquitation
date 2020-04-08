import React, { Component } from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'

export default class MyCustomForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    input1: 'some value',
    input2: '',
    errors: {
      input1: 'Input 1 error message',
      input2: 'pas cool'
    }
  }
}

    onChange = (e, {name, value}) => {
     const state = this.state
     const { errors } = state
     if(errors[name]){ 
       delete errors[name] 
     }
     this.setState(Object.assign({},...state,{[name]: value, errors }))
     this.validate(name, value)
  };

  validate = (name, value) =>{
    {/*
       THIS SHOULD VALIDATE THE INPUT WITH THE APPROPRIATE NAME ATTRIBUTE
       AND UPDATE THE ERRORS ATTRIBUTE OF THE STATE
     */}
  };

  onSubmit = (e) => {
     e.preventDefault()
     {/* CLEAR THE ERRORS OF THE STATE, SUBMIT FORM TO BACKEND, THENj RESET ERRORS IF ANY */} 
  };

  render() {
      const {errors} = this.state
      return (
            <Form size='small' key='mycustomform'>

            <Form.Group>
                <Form.Field error={errors.input1} required>
                <label>Input1</label>
                <Input name='input1' onChange={this.onChange.bind(this)}/>
                {errors.input1 && <Label pointing color='red'>{errors.input1}</Label>}
                </Form.Field>
            </Form.Group>

            <Form.Group>
                <Form.Field error={errors.input2}>
                <label>Input2</label>
                <Input name='input2' onChange={this.onChange.bind(this)}/>
                {errors.input2 && <Label pointing color='red'>{errors.input2}</Label>}
            </Form.Field>
            </Form.Group>

            <Form.Field control={Button} onSubmit={this.onSubmit}/>
        </Form>
      )
    }
  }
