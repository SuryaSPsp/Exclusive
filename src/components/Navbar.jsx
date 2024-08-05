import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from './Search';
import { Header } from './Header';
import styled from 'styled-components';

const NavbarContainer = styled.div`

.nav-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #000000;
    padding: 0px 150px;
    margin-top: 30px;
    padding-bottom: 10px;
    width: 100%;
    flex-direction:row;
    

    @media (max-width: 1440px) {
      padding: 0px 130px;
    }
    @media (max-width: 1280px) {
      padding: 0px 110px;
    }
    @media (max-width: 1080px) {
      padding: 0px 90px;
    }
    @media (max-width: 980px) {
      padding: 0px 70px;
    }
    @media (max-width: 768px) {
      padding: 0px 50px;
    }
    @media (max-width: 640px) {
      padding: 0px 30px;
    }
    @media (max-width: 540px) {
      padding: 0px 20px;
    }
    @media (max-width: 480px) {
      padding: 0px 10px;
      gap:5px;
    }
    @media (max-width: 360px) {
      padding: 0px 5px;
    }
  }

  .logo a {
    color: #000;
    text-decoration: none;
  }

  .logo h1 {
    font-size: 2.3rem;
    font-weight: bold;

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
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 900px) {
      flex-direction: column;
      text-align:left;
      justify-content: center;
      align-items: flex-end;
      gap: 10px;
      position:fixed;
      left:0;
      top:0;
      width:200px;
      height:100vh;
      z-index:1000;
      background-color:#fff;
      display: ${(props) => (props.isMenuOpen ? 'flex' : 'none')};
    }
  }

  ul li {
    margin: 0 30px;

    @media (max-width: 1440px) {
      margin: 0 25px;
    }
    @media (max-width: 1280px) {
      margin: 0 20px;
    }
    @media (max-width: 1080px) {
      margin: 0 15px;
    }
    @media (max-width: 980px) {
      margin: 0 10px;
      padding-right:20px;
      margin:20px;
    }
    @media (max-width: 768px) {
      margin: 0px;
      
    }
    
  }

  ul li a {
    color: #000;
    text-decoration: none;
    font-size: 1.3rem;

    @media (max-width: 1440px) {
      font-size: 1.2rem;
    }
    @media (max-width: 1280px) {
      font-size: 1.1rem;
    }
    @media (max-width: 1080px) {
      font-size: 1rem;
    }
    @media (max-width: 980px) {
      font-size: 1.4rem;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
  }

  ul li a:hover,
  ul li button:hover {
    text-decoration: underline;
  }

  ul li button {
    border: none;
    outline: none;
    font-size: 1.3rem;
    color: #000;
    margin: 0;
    background: transparent;

    @media (max-width: 1440px) {
      font-size: 1.2rem;
    }
    @media (max-width: 1280px) {
      font-size: 1.1rem;
    }
    @media (max-width: 1080px) {
      font-size: 1rem;
    }
    @media (max-width: 980px) {
      font-size: 1.4rem;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
  }

  
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: 20px;

  div {
    width: 25px;
    height: 3px;
    background-color: #000;
    margin: 4px 0;
  }

  @media (max-width: 900px) {
    display: flex;
  }

  @media (max-width: 640px) {
   div{
    width:15px;
    margin:2px 0;
    height:2px;
   }
    
  }
`;

export const Navbar = ({ setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <NavbarContainer isMenuOpen={isMenuOpen}>
      <Header />
      <div className="nav-2">
        <div className="logo">
          <Link to="/">
            <h1>Exclusive</h1>
          </Link>
        </div> 
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/gaming">Gaming</Link></li>
          <li><button onClick={logout}>LogOut</button></li>
        </ul>
        <Search />
        <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div />
          <div />
          <div />
        </HamburgerIcon>
      </div>
    </NavbarContainer>
  );
};
