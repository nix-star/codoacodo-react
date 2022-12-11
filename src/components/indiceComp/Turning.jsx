import React from "react";

import "../../style/inicio/turning.css";

const Pages = () => {
  return (
    <>
      

      <div className="turning-container">
        {/*
  <div className="credit">
    * Images loaded randomly from Picsum.photos
  </div>
    */}
    <div className="imgLoader"></div>
        <div className="book-container">
          <div className="book">
            <div className="gap"></div>
            <div className="pages">
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
              <div className="page"></div>
            </div>
            <div className="flips">
              <div className="flip flip1">
                <div className="flip flip2">
                  <div className="flip flip3">
                    <div className="flip flip4">
                      <div className="flip flip5">
                        <div className="flip flip6">
                          <div className="flip flip7"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>We invite you to explore an incredible world through reading...</p>

      </div>
    </>
  );
};

export default Pages;
