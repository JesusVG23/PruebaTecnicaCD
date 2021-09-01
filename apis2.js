
fetch(url)
.then(res=> res.json())
.then(data=>{
    console.log(data);
let element= document.getElementById('inf2');
element.innerHTML=`<p> ${ data.All.deaths } </p>` ;


})
.catch(err=>console.log(err))

