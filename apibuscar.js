const url="https://covid-api.mmediagroup.fr/v1/cases?country=Mexico"
fetch(url)
.then(res=> res.json())
.then(data=>{
    console.log(data);
let element= document.getElementById('inf1');
element.innerHTML=`<p> Aguascalientes Confirmados: ${ data.Aguascalientes.confirmed} </p>
<p>  Decesos: ${ data.Aguascalientes.deaths} </p>
<p> Mexico Confirmados: ${ data.Mexico.confirmed} </p>
<p>  Decesos: ${ data.Mexico.deaths} </p>
<p> Campeche Confirmados: ${ data.Campeche.confirmed} </p>
<p>  Decesos: ${ data.Campeche.deaths} </p>
<p> Chihuahua Confirmados: ${ data.Chihuahua.confirmed} </p>
<p>  Decesos: ${ data.Chihuahua.deaths} </p>
<p> Coahuila Confirmados: ${ data.Coahuila.confirmed} </p>
<p>  Decesos: ${ data.Coahuila.deaths} </p>
<p> Colima Confirmados: ${ data.Colima.confirmed} </p>
<p>  Decesos: ${ data.Colima.deaths} </p>
<p> Hidalgo Confirmados: ${ data.Hidalgo.confirmed} </p>
<p>  Decesos: ${ data.Hidalgo.deaths} </p>
<p> Michoacan Confirmados: ${ data.Michoacan.confirmed} </p>
<p>  Decesos: ${ data.Michoacan.deaths} </p>
<p> Queretaro Confirmados: ${ data.Queretaro.confirmed} </p>
<p>  Decesos: ${ data.Queretaro.deaths} </p>
<p> Sinaloa Confirmados: ${ data.Sinaloa.confirmed} </p>
<p>  Decesos: ${ data.Sinaloa.deaths} </p>
<p> Veracruz Confirmados: ${ data.Veracruz.confirmed} </p>
<p>  Decesos: ${ data.Veracruz.deaths} </p>
<p> Morelos Confirmados: ${ data.Morelos.confirmed} </p>
<p>  Decesos: ${ data.Mexico.deaths} </p>` ;

})
.catch(err=>console.log(err))
