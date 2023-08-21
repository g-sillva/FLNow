import React, { useState, useRef } from "react";
import ServiceCard from "../../components/service_card/ServiceCard";

function Services() {
  const [sort, setSort] = useState("sales");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  return (
    <div>
      <div className="services">
        <div className="container">
          <span className="breadcrumbs">Art > Graphics & Design ></span>
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Liverr's AI
            artists
          </p>
          <div className="menu">
            <div className="left">
              <span>Budget</span>
              <input ref={minRef} type="number" placeholder="min" />
              <input ref={maxRef} type="number" placeholder="max" />
              <button>Apply</button>
            </div>
            <div className="right">
              <span className="sortBy">Sort by</span>
              <span className="sortType">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
              {open && (
                <div className="rightMenu">
                  {sort === "sales" ? (
                    <span onClick={() => {}}>Newest</span>
                  ) : (
                    <span onClick={() => {}}>Best Selling</span>
                  )}
                  <span onClick={() => {}}>Popular</span>
                </div>
              )}
            </div>
          </div>
          <div className="cards">
            {data.map((service) => <ServiceCard key={service._id} item={service} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
