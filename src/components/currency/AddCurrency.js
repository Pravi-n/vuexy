import { useState } from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    CustomInput,
    Label
  } from 'reactstrap'
  
  const HorizontalForm = (props) => {
    
    const [values, setValues] = useState('')
    const handleInputeChange = (event) => {
        const {name, value} = event.target
        setValues(
        {
          ...values,
          [name] : value
        }
        )
      }
    
      const handleSubmit = () => {
          e.preventDeafault()
        console.log(values)
        props.handleSubmitofAdd(values)
        //prop.editAction(values)
        //setValues(initialvalues)
      }

      
      const [name, setName] = useState('')
      const [symbol, setSymbol] = useState('')
    //   const handleSubmit = () => {
    //       console.log(name)
    //       console.log(symbol)
    //   }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
            <FormGroup row  md={{ size: 9, offset: 3 }}>
              <Label sm='4' size='lg' for='name'>
                Code
              </Label>
              <Col sm='8'>
                <Input type='text' name='name' id='name' placeholder='First Name' onChange={handleInputeChange} />
              </Col>
            </FormGroup>
  
            <FormGroup className='ml-2' row>
              <Label sm='4' size='lg' for='Email'>
                Symbol
              </Label>
              <Col sm='8'>
                <Input type='email' name='Email' id='Email' placeholder='Email' onChange={handleInputeChange} />
              </Col>
            </FormGroup>
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 5 }}>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={handleSubmit}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset' onClick={props.handleCancel} >
                  Cancel
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default HorizontalForm
  