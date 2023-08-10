import React from "react";

const SectionHeading = (props) => {
  return (
    <div
      className="section-heading pt-3 pb-3 text-uppercase d-flex justify-content-center align-items-center mb-4 "
      style={{ height: "140px", backgroundColor: "#233c50", fontSize:"35px", fontWeight:"600", color: "#fff" }}
    >
      {props.title}
    </div>
  );
};

export default SectionHeading;
