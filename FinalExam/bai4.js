// Câu 4: Xây dựng class Staff với thuộc tính Fullname và email

class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
    }
    setFullname(createNewFullname) {
        this.fullname = createNewFullname;
    }
    getFullname() {
        return this.fullname;
    }
    setEmail(createNewEmail) {
        this.email = createNewEmail;
    }
    getEmail() {
        return this.email;
    }
    toString() {
        return "Staff Fullname is " + this.fullname + " and Email is " + this.email;
    }
}

let David = new Staff('David', 'david@gmail.com');
David.setFullname('David Do');
David.setEmail('david.do@gmail.com');
console.log(David.toString());

let Staffs = [
    new Staff('Leon', 'leon@gmail.com'),
    new Staff('Joshua', 'joshua@gmail.com'),
    David
];

Staffs.forEach (function (value) {
    console.log(value.toString())
}) 

