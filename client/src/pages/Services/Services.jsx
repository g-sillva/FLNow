import React, { useState, useRef, useEffect } from "react";
import ServiceCard from "../../components/service_card/ServiceCard";
import "./Services.scss";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

function Services() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      newRequest
        .get(
          `/services${search === "" ? "?" : search + "&"}min=${
            minRef.current.value
          }&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => res.data),
  });

  const applySortFilter = (type) => {
    setSort(type);
    setOpen(false);
  };

  const applyMinMaxFilter = () => {
    refetch();
  };

  const sortMapper = (type) => {
    switch (type) {
      case "createdAt":
        return "Newest";
      case "sales":
        return "Best Selling";
      case "totalStars":
        return "Popular";
      default:
        return "Newest";
    }
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  return (
    <div>
      <div className="services">
        <div className="container">
          <span className="breadcrumbs">Art {">"} Graphics & Design {">"}</span>
          <h1>Services</h1>
          <p>Search for the service you want. When you want.</p>
          <div className="menu">
            <div className="left">
              <span>Price</span>
              <input ref={minRef} type="number" placeholder="min" />
              <input ref={maxRef} type="number" placeholder="max" />
              <button onClick={() => applyMinMaxFilter()}>Apply</button>
            </div>
            <div className="right">
              <span className="sortBy">Sort by</span>
              <span className="sortType">{sortMapper(sort)}</span>
              <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
              {open && (
                <div className="rightMenu">
                  <span onClick={() => applySortFilter("createdAt")}>
                    Newest
                  </span>
                  <span onClick={() => applySortFilter("sales")}>
                    Best Selling
                  </span>
                  <span onClick={() => applySortFilter("totalStars")}>
                    Popular
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="cards">
            {isLoading
              ? "loading"
              : error
              ? "Something went wrong..."
              : services.map((service) => (
                  <ServiceCard key={service._id} item={service} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
