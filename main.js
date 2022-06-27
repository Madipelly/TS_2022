//primitives-number,string, boolean
var empName;
var isAval;
//complex types like arrays, Objects
var courseList;
var employee;
//inference type(dynamically added)
var empId = 1234;
//Union Types
var userid;
var emp2 = {
    name: "shravan",
    age: 30,
    courses: ['Angular', 'Java']
};
//class- prop's and fun's& constructors-default it's public
var Student = /** @class */ (function () {
    // sname: string;
    // age: number;
    // rollId: number| string;
    function Student(sname, age, rollId) {
        this.sname = sname;
        this.age = age;
        this.rollId = rollId;
    }
    Student.prototype.getDeatails = function () {
        console.log("hello");
    };
    return Student;
}());
var stud1 = new Student("shravan", 12, 34);
