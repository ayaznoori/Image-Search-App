
async function display(){
    let data=document.getElementById("input_search").value;
    let url=`https://api.unsplash.com/search/photos/?query=${data}&per_page=20&client_id=Z5JUGGQbeT_Zq65vB3VnA9XJZH6Syavg78TCTAA-yIY`;
   fetchdata(url);
}
async function directfun(data){
    let url=`https://api.unsplash.com/search/photos/?query=${data}&per_page=20&client_id=Z5JUGGQbeT_Zq65vB3VnA9XJZH6Syavg78TCTAA-yIY`;
   fetchdata(url);
}


async function fetchdata(url){
    try{
        document.getElementById("images").innerText="";
        let ans=await fetch(url);
        let fans=(await ans.json()).results;
        document.getElementById("results").style.display="block";
        fans.forEach(({urls:{thumb},alt_description}) => {
        let bag=document.createElement("div"); 
        let img=document.createElement("img");
        img.style.width="100%";
        img.style.height="200px"
        img.src=thumb;
        let tit=document.createElement("h4");
        tit.innerText=alt_description;
        tit.style.textAlign="center";
        bag.append(img,tit);
        document.getElementById("images").append(bag);
        });
    }
    catch(err){
        console.log(err)
    }
    
}