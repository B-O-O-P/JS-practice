function baseSalary(role, hours, ovtHours) {
    return role.rate * hours + role.overtime * ovtHours;
}

function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

const associate = {roleId: 3, rate: 12.5, overtime: 18.75};
const supervisor = {roleId: 2, rate: 15, overtime: 22.5};
const admin = {roleId: 1, rate: 30, overtime: 0}; // salary no overtime

const associateSalary = partial(baseSalary, associate);
const supervisorSalary = partial(baseSalary, supervisor);
const adminSalary = partial(baseSalary, admin);

console.log(associateSalary(10, 5), supervisorSalary(10, 5), adminSalary(10, 5));
