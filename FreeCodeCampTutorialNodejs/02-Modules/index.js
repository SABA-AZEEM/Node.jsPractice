//import func and properties that are export in multiple lines
    //const multipleLinesFunAndPro=require('./export');
    //jis nam se export krwae whi nam use krne
    // console.log(multipleLinesFunAndPro);
    // console.log(multipleLinesFunAndPro.addition(2,3));
    // console.log(multipleLinesFunAndPro.subtraction(2,3));
    // console.log(multipleLinesFunAndPro.myName);
//import func and properties that are export in single line
    //name whi istimal krne 
        // const singleLine=require('./export');
        // console.log(singleLine);
        // console.log(singleLine.add(2,3));
        // console.log(singleLine.sub(2,3));
        // console.log(singleLine.name);
    //with the help of object destructuring,pr trteeb change kr skte or aik dfa us obj ko console.log krwa k b check kr skte k kis nam se hai
        const {name,add,sub}=require('./export');
        console.log(name);
        console.log(add(2,3));
        console.log(sub(2,3));