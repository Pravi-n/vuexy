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
  
  const EditForm = (props) => {
      console.log(props.data)
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
                <Input type='text' name='name' id='name' value={props.data.name} placeholder='First Name' />
              </Col>
            </FormGroup>
  
            <FormGroup className='ml-2' row>
              <Label sm='4' size='lg' for='Email'>
                Symbol
              </Label>
              <Col sm='8'>
                <Input type='email' name='Email' value={props.data.symbol} id='Email' placeholder='Email' />
              </Col>
            </FormGroup>
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 5 }}>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset' onClick={props.handleCancel}>
                  Cancel
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default EditForm
  