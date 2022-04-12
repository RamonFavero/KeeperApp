import React from "react";

let dt = new Date;
const data = dt.getFullYear();


function Footer() {
    return(
        <footer><p>Copyright {data}</p></footer>
    )
}

export default Footer;