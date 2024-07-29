import { Link, useNavigate } from 'react-router-dom';
import { Search } from './Search';
import { Header } from './Header';


export const Navbar = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const logout=()=>{
        setIsLoggedIn(false);
        navigate("/login");
    }
    return (
        <div className="navbar">
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
                        <li><button onClick={logout} to="/login">LogOut</button></li>
                    </ul>
                    <Search />
                </div>
            </div>
    )
}
