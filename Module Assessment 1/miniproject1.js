class Students {
    constructor(name, age, nationality) {
        this.name = name;           // string
        this.age = age;             // number
        this.gender = Female;       // string
        this.nationality = nationality; // string
    }
    getNationality() {
        console.log(this.nationality);
    }
}

class UnderGraduates extends Students{

    constructor(name,age,nationality,batch){
        super(name,age,nationality);
            this.batch = batch;
    }

}

const student1 = new Students("Kim", 26, "Canadian");
console.log(student1);

student1.getNationality();