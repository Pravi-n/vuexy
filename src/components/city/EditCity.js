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
            <Col className='d-flex' md={{ size: 11, offset: 1 }}>
            <FormGroup row  md={{ size: 9, offset: 3 }}>
              <Label sm='4' size='lg' for='name'>
                City
              </Label>
              <Col sm='8'>
                <Input type='text' name='name' id='name' value={props.data.name} placeholder='City Name' />
              </Col>
            </FormGroup>
  
            <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='state'>
                State
              </Label>
              <Col sm='8'>
                <Input type='text' name='State' id='State' value={props.data.state} placeholder='State' />
              </Col>
            </FormGroup>
            <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='country'>
                Country
              </Label>
              <Col sm='8'>
                <Input type='email' name='Country' id='Country' value={props.data.country} placeholder='Country' />
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
  