import React, { useEffect}  from "react";

const Division = React.forwardRef((props,ref)=> 
<div className="notetitle" ref={ref} {...props}>
<h1>{props.title}</h1>
<time>{props.expirehour}</time>
</div>
);

// get hour of the day
function getHour() {
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
   return horas+":"+minutos;
  }


function TitleNote(props) {

    const ref = React.useRef();


    useEffect(()=>{
        const interval = setInterval(()=>{
          console.log(ref.current);
          ref.current.style.background='red';
          ref.current.style.background='yellow';
        },10000)
        return () => clearInterval(interval);
      })



    
    return (
    <Division ref={ref} {...props} {...props} />
    )
}


export default TitleNote