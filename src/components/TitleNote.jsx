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
   if (horas<="9") {
    horas= "0"+horas;
   }if (minutos<="9") {
    minutos= "0"+minutos;
   }
   return horas+":"+minutos;
  }


function TitleNote(props) {

    const ref = React.useRef();


    useEffect(()=>{
        const interval = setInterval(()=>{
        
          let cardTime = ref.current.children[1].innerHTML;
          let hourOfDay = getHour();
  
          if (cardTime.slice(0,2)<hourOfDay.slice(0,2)+1) {
            ref.current.style.background='#DF2E38';
          } if (cardTime.slice(0,2)>=hourOfDay.slice(0,2)+1) {
            ref.current.style.background='#5D9C59';
          }
          
          
         
        },5000)
        return () => clearInterval(interval);
      })



    
    return (
    <Division ref={ref} {...props} {...props} />
    )
}


export default TitleNote