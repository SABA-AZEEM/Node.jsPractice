//get element from DOM
const dateEl=document.getElementById("date");
//set date with the help of date obj
const dateE=new Date();
//get day
const day=dateE.toLocaleString('en',{
    weekday:'long'
});
//get month
const month=dateE.toLocaleDateString('en',{
    month:'long'
});
//get date
const date=dateE.getDate();
//get time
const hours=dateE.getHours()-12;
const min=dateE.getMinutes();
const ampm=dateE.getHours()<12?'AM':'PM';
//now set date element in browser
dateEl.textContent=`${day} | ${month} ${date} | ${hours}:${min} ${ampm}`