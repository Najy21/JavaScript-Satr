class Vehicles {
    constructor (name, company, vehicleID) {
        this.name = name;
        this.company = company
        this.vehicleID = vehicleID
    }

}
class Car extends Vehicles {
 constructor(name, company, vehicleID, carType){
    super(name, company, vehicleID);
    
    this.carType = carType;
 }
}
class Plane extends Vehicles {
    constructor(name, company, vehicleID, planeType){
        super(name, company, vehicleID);
        this.planeType = planeType;
     }
}
class Employee {
    constructor (name, dateOfBirth, employeeID) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.employeeID = employeeID;
    }
}
class Driver extends Employee {
    constructor (name, dateOfBirth, employeeID, licenseID) {
       super(name, dateOfBirth, employeeID);
       
       this.licenseID = licenseID;
    }
}
class Pilot extends Employee {
    constructor (name, dateOfBirth, employeeID, licenseID) {
        super(name, dateOfBirth, employeeID);

        this.licenseID = licenseID;
     }
}
class Reserved {
    constructor (reservationDate, employeeID, vehicleID, reservationID) {
        this.reservationDate = reservationDate;
        Employee.employeeID = employeeID;
        Vehicles.vehicleID = vehicleID;
        this.reservationID = reservationID;
    }

}
const car1 = new Car('Corolla', 'Toyota', 1, 'Gas');
const car2 = new Car('Model S', 'Tesla', 2, 'Electric');
const car3 = new Car('Supra', 'Toyota', 3, 'Gas');
const plane1 = new Plane('Airbus', 'Air', 11, 'Jet');
const plane2 = new Plane('FlyCraft', 'Air', 22, 'AirCraft');

const firstDriver = new Driver('Najy', '21-5-2000', 'CD1', 111);
const secondDriver = new Driver('Abdullah', '1-7-2000', 'CD2', 112);
const thirdDriver = new Driver('Mohammed', '22-3-1990', 'CD3', 113);
const firstPilot = new Pilot('Jana', '22-6-1995', 'PD1', 211);
const secondPilot = new Pilot('Saud', '3-5-1989', 'PD2', 212);

const finalReservation = [];

function resCheck(vehicleID, employeeID, reservationID) {
    const timeNow = new Date();
    if (vehicleID <= 3 && employeeID.includes('CD') || vehicleID == 11 && employeeID.includes('PD') || vehicleID == 22 && employeeID.includes('PD')) {
        const todaysDate = timeNow.getDate() + '/' + (timeNow.getMonth()+1) + '/' + timeNow.getFullYear();
        const resObj = new Reserved(todaysDate, employeeID, vehicleID, `reservation ID: ${reservationID}`);
        finalReservation.push(resObj);

        return `the employee with the ID: ${employeeID} has been assigned succesfully to the vehicle with the ID: ${vehicleID}
        Procces Completed, printing the Reservations..`;

    }
    else {
        return `Something went wrong check the inputs please!`;
    }
}
resCheck(car1.vehicleID, firstDriver.employeeID, 1);
resCheck(plane1.vehicleID, firstPilot.employeeID, 2);
resCheck(plane2.vehicleID, secondDriver.employeeID, 3);
resCheck(car2.vehicleID, secondPilot.employeeID, 4);
resCheck(car3.vehicleID, thirdDriver.employeeID, 4);

const resResult = finalReservation.map(function(element){
    return console.log(element)
})