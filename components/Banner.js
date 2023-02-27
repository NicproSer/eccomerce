import React from "react";

export const Banner = () => {
  return (
    <section style={{ backgroundColor: "white" }}>
      <div className="slider" align="center">
        <ul>
          <li>
            <img
              src="https://i.ibb.co/2SVR7Wc/slider2.jpg"
              alt="slider2"
              border="0"
            />
          </li>

          <li>
            <img
              src="https://i.ibb.co/B2Z4yFQ/Slider1.jpg"
              alt="Slider1"
              border="0"
            />
          </li>

          <li>
            <img
              src="https://i.ibb.co/wwPYBwJ/slider3.jpg"
              alt="slider3"
              border="0"
            />
          </li>

          <li>
            <img
              src="https://i.ibb.co/wLj9L4Z/slider4.jpg"
              alt="slider4"
              border="0"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
