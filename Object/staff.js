class Staff {
    constructor(fullname, email, mobile, dayswork, salaryPerDay) {
        this.fullname = fullname;
        this.email = email;
        this.mobile = mobile;
        this.dayswork = dayswork;
        this.salaryPerDay = salaryPerDay;
    }
    calculatorSalary() {
        return this.dayswork * this.salaryPerDay
    }
}

let minh = new Staff()