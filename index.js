let api=`https://api.github.com/users`
let find= document.querySelector("#find");

find.addEventListener("click",()=>{
    let search= document.querySelector("#search ").value
    
    user(search);
})

 const user=async(search)=>{
    try{
        
        let searchApi=`${api}/${search}`
        if(search==="")searchApi=api;
        let response= await fetch(searchApi);
         let data= await response.json()
        console.log(data);
        let names= document.getElementById("idname")
         names.innerHTML=`${data.name}`;
        let followers= document.getElementById("followers")
         followers.innerHTML=`Followers: ${data.followers}`;
        let following= document.getElementById("following")
         following.innerHTML=`Following: ${data.following}`;
        let repo= document.getElementById("repo")
         repo.innerHTML=`Public Repos: ${data.public_repos}`;
        let bio= document.getElementById("bio")
         bio.innerHTML=` ${data.bio}`;
        let pic= document.querySelector(".pic")
         pic.innerHTML=`<img src="${data.avatar_url}"></img>`;
        
       
    }
    catch{
        console.log("ERROR");
    }
  
}



