import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useHistory} from "react-router-dom";
import logo from "../assests/images/shopLogo.png";
import cart from "../assests/images/image.png";
import {} from "../assests/styles/NavBar.css";

const NavBar = () => {
  const [categories, setcategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => {
        setcategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(`category/${selectedPath}`);
    }
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/">
          <img
            src={logo}
            alt="ShoPY Logo"
            height={40}
            style={{ marginRight: "10px" }}
          />
          <p>ShoPY</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <Link to="/">Home</Link>
        <select defaultValue="" onChange={handleChange}>
        <option >Category</option>

         {categories.map((item)=>(
            <option key={item.id} value={item.id}>{item.name}</option>
         ))}
         
        </select>
      </ul>
      <div className="nav-login-cart">
        {/* <Link to='/login'><button className='log_btn'>Login</button></Link> */}
        <Link to="/cart">
          <img src={cart} alt="" className="cart" />
        </Link>
        
        
      </div>
    </div>
  );
};

export default NavBar;
