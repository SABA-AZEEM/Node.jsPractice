//define functions and properties
    const add=(num1,num2)=>{
        return num1+num2;
    }
    const sub=(num1,num2)=>{
        return num1-num2;
    }
    const name="saba AZEEM";
//export function and properties single by single
    // module.exports.addition=add;
    // module.exports.subtraction=sub;
    // module.exports.myName=name;
//export functions & properties in single line,lekin is mai whi nam use krne jis se uper define kia pr trteeb change kr skte
    module.exports={add,name,sub};