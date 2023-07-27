import React, { useEffect, useState, useContext } from "react";
import { GlobalInfo } from "../App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Slider = () => {
  const { url } = useContext(GlobalInfo);
  const [Isloading, setIsLoaded] = useState(false);
  const [banner, setBanner] = useState([]);

  useEffect(()=>{
    const loader = document.getElementById('preloader');

      if(Isloading){
          loader.style.display = "block";
      }
      else{
          loader.style.display = "none";
      };
  },[Isloading])

  useEffect(() => {
    setIsLoaded(true);
    fetch(url + "slider-list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoaded(false);
        setBanner(data.result);
      });
  }, []);

  return (
    <>
      <div class="row dlab-blog blog-half m-b30 mx-0" id="preloader">
        <div class="col-12 dlab-media">
          <Skeleton height={380} />
        </div>
      </div>

      <div className="container-dluid p-0 slider-main">
        <div
          id="demo"
          className="carousel slide pointer-event"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
              className=""
              ariaCurrent="true"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            {banner.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index == 0 ? "active" : ""}`}
              >
                <img
                  src={item.image_path}
                  className="d-block w-100"
                  alt="slider"
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="fa-solid fa-angle-left"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="fa-solid fa-angle-right"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
