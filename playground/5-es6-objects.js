// const name = 'Apple'
// userAge = '3 days'

const user = {
  name: "Apple",
  age: "23", //case sensitive
};

const { name, age, height = 2.5 } = user;
console.log(height);

const userDetails = ({ name, age = 27 } = {}) => {
  console.log(name, age);
};

userDetails(user);
