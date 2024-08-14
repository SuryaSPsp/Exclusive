import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  background-color: #f5f5f5;

  @media (max-width: 1440px) {
    padding: 20px;
  }
  @media (max-width: 1280px) {
    padding: 15px;
  }
  @media (max-width: 1080px) {
    padding: 10px;
  }
  @media (max-width: 980px) {
    padding: 8px;
  }
  @media (max-width: 768px) {
    padding: 5px;
  }
  @media (max-width: 640px) {
    padding: 3px;
  }
  @media (max-width: 540px) {
    padding: 2px;
  }
  @media (max-width: 480px) {
    padding: 1px;
  }
  @media (max-width: 360px) {
    padding: 0;
  }
`;

const LoginForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(201, 62, 62, 0.1);
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items:center;
  height: auto;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 1.8rem;
  }
  @media (max-width: 1280px) {
    padding: 1.6rem;
  }
  @media (max-width: 1080px) {
    padding: 1.4rem;
  }
  @media (max-width: 980px) {
    padding: 1.2rem;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (max-width: 640px) {
    padding: 0.8rem;
  }
  @media (max-width: 540px) {
    padding: 0.6rem;
  }
  @media (max-width: 480px) {
    padding: 0.4rem;
  }
  @media (max-width: 360px) {
    padding: 0.2rem;
  }
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.3rem;
  text-align: center;
  padding: 10px;
  color: #333;

  @media (max-width: 1440px) {
    font-size: 2.1rem;
  }
  @media (max-width: 1280px) {
    font-size: 1.9rem;
  }
  @media (max-width: 1080px) {
    font-size: 1.7rem;
  }
  @media (max-width: 980px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
  @media (max-width: 540px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 1440px) {
    margin-bottom: 1.3rem;
  }
  @media (max-width: 1280px) {
    margin-bottom: 1.1rem;
  }
  @media (max-width: 1080px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 980px) {
    margin-bottom: 0.9rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
  @media (max-width: 640px) {
    margin-bottom: 0.7rem;
  }
  @media (max-width: 540px) {
    margin-bottom: 0.6rem;
  }
  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 360px) {
    margin-bottom: 0.4rem;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
  font-size: 1.5rem;

  @media (max-width: 1440px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1280px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1080px) {
    font-size: 1.2rem;
  }
  @media (max-width: 980px) {
    font-size: 1.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  @media (max-width: 360px) {
    font-size: 0.6rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.3rem;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 1440px) {
    padding: 0.7rem;
  }
  @media (max-width: 1280px) {
    padding: 0.65rem;
  }
  @media (max-width: 1080px) {
    padding: 0.6rem;
  }
  @media (max-width: 980px) {
    padding: 0.55rem;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
  @media (max-width: 640px) {
    padding: 0.45rem;
  }
  @media (max-width: 540px) {
    padding: 0.4rem;
  }
  @media (max-width: 480px) {
    padding: 0.35rem;
  }
  @media (max-width: 360px) {
    padding: 0.3rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #0056b3;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #007bff;
  }

  @media (max-width: 1440px) {
    padding: 0.7rem;
    font-size: 1.4rem;
  }
  @media (max-width: 1280px) {
    padding: 0.65rem;
    font-size: 1.3rem;
  }
  @media (max-width: 1080px) {
    padding: 0.6rem;
    font-size: 1.2rem;
  }
  @media (max-width: 980px) {
    padding: 0.55rem;
    font-size: 1.1rem;
    width:100px;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
  @media (max-width: 640px) {
    padding: 0.45rem;
    font-size: 0.9rem;
  }
  @media (max-width: 540px) {
    padding: 0.4rem;
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    padding: 0.35rem;
    font-size: 0.7rem;
  }
  @media (max-width: 360px) {
    padding: 0.3rem;
    font-size: 0.6rem;
  }
`;
export const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/home');
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Heading>Login</Heading>
        <FormGroup>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};


