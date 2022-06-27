//primitives-number,string, boolean, null , undefined
let empName: string;
let isAval: boolean;
//complex types like arrays, Objects
let courseList: string[];
let employee: {
    firstName: string;
    lastName: string;
    age: number;
}
//inference type(dynamically added)
let empId = 1234;
//Union Types
let userid : number| string;
//type- provide common data structure for required Obj's
type user = {
    name: string;
    age: number;
    courses: string[];
}

let emp2: user={
    name : "shravan",
    age :30,
   courses : ['Angular','Java'],
}

//class- prop's and fun's& constructors-default it's public
 class Student implements StudentInfo{
    // sname: string;
    // age: number;
    // rollId: number| string;
    
    constructor(public sname:string, public age:number,public rollId: number){}
    getDeatails(){
        console.log("hello");  
    }
 }
 let stud1 = new Student("shravan",12,34);
 //Interface==>we can implements no of classes same structure it's required.

 interface StudentInfo{
    sname: string;
     age: number;
    rollId: number;
    getDeatails : ()=>void;
 }
 // any==>breaking TS rules we must avoid.
 //generic type<T>