//Constructor function 
function Student(name,age) {
    this.name =name
    this.age=age
}

const s1 =new Student()
console.log(typeof(s1))
console.log(s1)

const s2 =new Student("Anil",35)
console.log(s2)

const s3 =new Student ("mukush",30)
s3.mobile =" 8875623214"
s3["email.id"] ="mukesh@gmail.com"
console.log(s3)