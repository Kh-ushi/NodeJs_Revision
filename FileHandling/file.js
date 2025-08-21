const fs=require("fs");

// sync..(synchronous call)
// fs.writeFileSync("./test.txt",'Hello World');


//async
// fs.writeFile("./test.txt","Hello World",(err)=>{});


//sync read
// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);


//async read(it won't return anything)
// fs.readFile("./contacts.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// })


// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

//ADD FILE
// fs.cpSync("./test.txt","./copy.txt");
// fs.unlinkSync("./copy.txt");

//to get statistics
// console.log(fs.statSync("./test.txt"));


// fs.mkdirSync("my-docs")
// fs.mkdirSync("my-docs/a/b",{recursive:true})