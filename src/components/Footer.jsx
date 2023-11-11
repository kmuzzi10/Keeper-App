import React from "react";
//import ends

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Muzammil ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
