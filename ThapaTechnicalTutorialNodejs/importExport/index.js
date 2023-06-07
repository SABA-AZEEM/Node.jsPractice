    // const oper=require("./oper");//ye hm ne import kr lia is module ko ta k iska istimal kr pae
    // console.log(oper);
    // console.log(oper.addition(5,5));
    // console.log(oper.subtraction(10,5));
    // console.log(oper.myname);

//same thing do with "object destructuring",ab my call kerte wqt direct name likhne bs,pr name whi hone chahye jo hme obj mai receive hue
    // const {addition,subtraction,myname}=require("./oper");
    // console.log(addition(5,5));
    // console.log(subtraction(10,5));
    // console.log(myname);
//single line wale ko access krne k liye same whi name istimal kre ge jo define krte wqt kiye the , lekin trteeb bdeel kr skte
    const {add,name,sub}=require("./oper");
    console.log(add(5,5));
    console.log(sub(10,5));
    console.log(name);