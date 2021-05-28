alert("welcome to the portal");
let data= new Array;

let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
    let name=document.getElementById('name').value;
    let from1=document.getElementById('from').value;
    let to=document.getElementById('to').value;
    let data1=new Array;
    data1.push(document.getElementById('modes').value);
    let elem= new Object;
    elem.name=name;
    elem.from1=from1;
    elem.to= to;
    elem.data1= data1;
    data.push(elem);
    console.log(data);
})
let search=document.getElementById('search');
search.addEventListener('click',()=>{
    let search=document.getElementById('sea').value;
    for(let i=0;i<data.length;i++)
    {
        if(data[i].name==search)
        {
            console.log(data[i]);
        }
    }})
