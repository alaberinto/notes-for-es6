const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

const {firstName, lastName} = personalInformation;

//same as personalInformation.firstName and personalInformation.lastName
console.log(`${firstName} ${lastName}`);

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);
