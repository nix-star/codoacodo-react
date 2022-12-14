import React from "react";
import Footer from "../indiceComp/Footer";
import "../../style/inicio/members.css";

const Members = () => {
  return (
    <>
      <div className="members-container">
        <div className="member">
          <h3>Natalia Bartolomé</h3>
          <p>Home - Members</p>
        </div>
        <div className="member">
          <h3>Omar Ignacio Barboza</h3>
          <p>Featured - Routeo</p>
        </div>
        <div className="member">
          <h3>Ana María Zuluaga Vazquez</h3>
          <p>Categories</p>
        </div>
        <div className="member">
          <h3>Nancy Barea</h3>
          <p>About Us</p>
        </div>
      </div>
      <Footer creator="©2022 -  Created by GROUP 8 with  ❤️" />
    </>
  );
};

export default Members;
