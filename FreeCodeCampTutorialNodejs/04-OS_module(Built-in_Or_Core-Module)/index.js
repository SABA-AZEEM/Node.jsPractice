const os=require('os');
//info about current user
const user=os.userInfo();
console.log(user);
//info in the form of obj
const osInfo={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(osInfo);