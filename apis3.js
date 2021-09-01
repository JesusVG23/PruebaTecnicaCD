
fetch(url)
.then(res=> res.json())
.then(data=>{
    console.log(data);
let element= document.getElementById('inf3');
element.innerHTML=`<p> Aguascalientes Confirmados: ${ data.Aguascalientes.confirmed} </p>
<p>  Decesos: ${ data.Aguascalientes.deaths} </p>
<p> Mexico Confirmados: ${ data.Mexico.confirmed} </p>
<p>  Decesos: ${ data.Mexico.deaths} </p>
` ;


})
.catch(err=>console.log(err))
