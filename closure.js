let id=null;
document.getElementById("input").addEventListener("input",function(){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(() => {
        let input_value = document.getElementById("input").value;
        fetchData(input_value);
    }, 1000);

})

async function fetchData(input){
   try {
      let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
      let data = await res.json();
      console.log(data.meals);
      displayData(data.meals);
   } catch (error) {
    console.log(error);
   }
}

function displayData(data){
   let container = document.getElementById("container");
   container.innerHTML="";
   if(data){
        data.forEach(element =>{
        container.innerHTML+=`        
      <img src=${element.strMealThumb}>       
    `
   })
 }
}

//slide
let arr=["https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mushroom-brunch_2-37a8a5e.jpg?quality=90&resize=500,454",
"https://www.cookwithmanali.com/wp-content/uploads/2017/03/Best-Kadai-Paneer.jpg"]
let count=0;
function myFunction(){
    let image=document.getElementById("image");
    console.log("nk");

    setInterval(()=>{
    if(count===3){count=0}
     image.src=arr[count++];
    },2000)
}