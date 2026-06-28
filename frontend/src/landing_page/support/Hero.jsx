import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className=" p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>
      <div className="row p-3 m-2 ">
        <div className="col-md-4 p-3 m-3 ">
          <h1 className="fs-3">
            Search for an answer or browser help topics to create a ticket
          </h1>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O , why is my order getting rejected"
            className=""
          />
          <br />
          <a href="">Track account opening</a>&nbsp; &nbsp;
          <a href="">Track segment activation </a>&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>
        </div>
        <div className="col-md-4 offset-md-1 p-3 m-3" >
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              {" "}
              <a href="">Current Takeovers and Delisting - january 2026</a>
            </li>
            <li>
              {" "}
              <a href="">Lastest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
