import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate=useNavigate();
  const loginUser=(event)=>{
    // console.log('loginuser')
    // form 이 새로고침하기때문에 아주잠깐콘솔에 나왓다사라짐
    event.preventDefault();// 새로고침을 막아주는함수를준다 preventDefault
    // console.log('loginuser')
    setAuthenticate(true);
    navigate('/');
  }
  return (
    <Container>
  <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        로그인
      </Button>
    </Form>
    </Container>
  )
}

export default Login