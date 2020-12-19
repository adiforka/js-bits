const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Poopilan',
    city: 'Anchorage',
    state: 'Alaska',
    country: 'USA'
};

const { firstName: fn, lastName: ln } = personalInformation;
console.log(`${fn} ${ln}`);
