    //get elements from dom
const quotesEl=document.querySelector(".quotes");
const authorName=document.querySelector(".author-name");
const btnEl=document.querySelector(".btn");
const tweet=document.querySelector(".fa-twitter");
var realData;
var randomNo;
    //function for update quotes
const func=async ()=>{
        //get data from api
    try {
        const api="https://type.fit/api/quotes;";
        const data=await fetch(api);
        realData=await data.json();
            //generate random no
        randomNo=Math.floor(Math.random()*realData.length);
        quotesEl.textContent=realData[randomNo].text;
        realData[randomNo].author===null?(authorName.textContent="unknown"):(authorName.textContent=realData[randomNo].author);
    } catch (error) {
        console.log(error);
    }
}

    //function for reached at tweet page
const tweetFun=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${realData[randomNo].text}`);
}
    //update quotes event listener
btnEl.addEventListener("click",func);
    //tweet event listener
tweet.addEventListener("click",tweetFun);
    //once fun call to show the quote on page first time
func();