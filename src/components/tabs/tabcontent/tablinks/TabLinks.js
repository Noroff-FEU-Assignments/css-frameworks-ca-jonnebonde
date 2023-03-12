import React from "react";

function TabLinks() {
  return (
    <div className="tablinks__container d-flex">
      <span>SHARE</span>
      <a href="/">
        <i class="fa-brands fa-facebook-f"></i>
      </a>
      <a href="/">
        <i class="fa-brands fa-twitter"></i>
      </a>
    </div>
  );
}

export default TabLinks;
