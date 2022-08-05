class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName; 
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }

    work(office) {
        for(let i = 0 ; i < 10 ; i++){
            let document = new Document(this.name);
            office.documents.push(document)
        }
    }
}

class Manager {
    constructor(name) {
        this.employees = [];
        this.name = name; 
    }

    hireEmployee(name) {
        let employee = new Employee(name);
        this.employees.push(employee);
    }

    askEmployeesToWork(office) {
        for(let employee of this.employees){
            employee.work(office);
        }
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }

    clean () {
        console.log("Clean");
    }
}

class Office {
    constructor( ) {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireCleaner(name) {
        let cleaner = new Cleaner(name)
        this.cleaners.push(cleaner);
    }

    hireManager(name) {
        let manager = new Manager(name);
        this.managers.push(manager);
    }

    startWorkDay() {
        for(let manager of this.managers){
            manager.askEmployeesToWork(this);
        }

        for(let clean of this.cleaners){
            clean.clean();
        }
    }
}






