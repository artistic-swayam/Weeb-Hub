const student = {
    name:"swayam",
    marks: 94,
    printMarks: function(){
        console.log("marks =",this.marks);
    },
};
const school = {
    education: "10th",
};

school.__proto__ = student;//Prototype