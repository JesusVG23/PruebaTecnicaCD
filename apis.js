const url="https://covid-api.mmediagroup.fr/v1/cases?country=Mexico"
fetch(url)
.then(res=> res.json())
.then(data=>{
    console.log(data);
let element= document.getElementById('inf1');
element.innerHTML=`<p> ${ data.All.confirmed } </p>` ;


})
.catch(err=>console.log(err))

