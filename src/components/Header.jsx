import React, { useEffect, useState } from "react";



function Header() {
  useEffect(()=>{
  const interval = setInterval(getHour, 1000);
  return () => clearInterval(interval);
  })
    const now = new Date().toLocaleDateString();

    const [time,setTime] = useState();

  function getHour() {
    console.log(now);
  const d = new Date();
  let horas = d.getHours();
  let minutos = d.getMinutes();
  let segundos = d.getSeconds();
  if (horas<="9") {
   horas= "0"+horas;
  }if (minutos<="9") {
   minutos= "0"+minutos;
  }if (segundos<="9") {
   segundos= "0"+segundos;
  }
  return(
  setTime (horas+":"+minutos+":"+segundos))
}

  return (
    <header >
      <time className="timeheader">{time}</time>
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
