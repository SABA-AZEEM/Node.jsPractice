const add=(a,b)=>{
    return a+b;
};
const sub=(a,b)=>{
    return a-b;
};
const name="saba azeem";
//export things
    // module.exports.addition=add;//add func ko export kr dia,ab hm isko is file k bahir b use kr skte
    // module.exports.subtraction=sub;
    // module.exports.myname=name;
//export things with single line
    module.exports={add,sub,name};//is mai whi nam istimal krne jo uper hue the ,jb k single single kr k export krna to nam change kr skte