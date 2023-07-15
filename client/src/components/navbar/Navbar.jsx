import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("user", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">FLNow</span>
          </Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/">Explore</Link>
          <Link to="/faq">FAQ</Link>
          <span>English <i className="fa-solid fa-chevron-down"></i></span>
        </div>
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/avatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        My services
                      </Link>
                      <hr />
                      <Link className="link" to="/add">
                        Add New service
                      </Link>
                      <hr />
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <hr />
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <hr />
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="link navbar-join-btn">Join</Link>
          )}
      </div>
    </div>
  );
}

export default Navbar;