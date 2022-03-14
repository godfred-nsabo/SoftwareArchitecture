/** 
 * S represents the Single Responsibility principle
 * O represents the Open Closed principle
 * L represents the Liskov Substitution principle
 * I represents the Interface Segregation principle
 * D represents the Dependency Inversion principle
 * 
 * 
 * The SOLID principles are useful when constructing both individual modules or larger architectures. So, we’re going to explore each 
 * principle alongside examples in JavaScript.

    ==========The Single Responsibility Principle===========
 */

const Employees = (name, pos, hours) => {
  this.name = name;
  this.pos = pos;
  this.hours = hours;

  this.calculatePay = () => {
    // code here
  };
  this.reportHours = () => {
    // code here
  };
  this.save = () => {
    // code here
  };
};

/**
 * Unfortunately, the above script is violating the SRP because those three
 * functions are responsible for three different actors
 *
 * So, the way to avoid this problem is to separate code that supports different actors.
 */

const EmployeeData = (name, pos, hours) => {
  //  The EmployData object to save a shared simple data structure, it used by all three actors.
  this.name = name;
  this.pos = pos;
  this.hours = hours;
};

//  The PayCalculator object has the calculatePay() method.

const PayCalculator = (employeeData) => {
  this.employeeData = employeeData;
  this.calculatorPay = () => {
    // code here
  };
};

// The HourReporter object has the reportHours() method.

const HourReporter = (employeeData) => {
  this.employeeData = employeeData;
  this.reportHours = () => {
    // code here
  };
};

// The EmployeeServer object has the save() method.

const EmployeeServer = (employeeData) => {
  this.employeeData = employeeData;
  this.save = () => {
    // code here
  };
};
