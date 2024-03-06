document.querySelector("#get-activity").addEventListener("click",function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response=>response.json())
    .then(data=>{
       document.querySelector("#activity").textContent=data.activity
       document.getElementById("title").textContent = "HappyBot🤣"
       document.querySelector("main").classList.add("fun")
    })
})
