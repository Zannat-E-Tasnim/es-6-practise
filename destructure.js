//object & destructuring
const person = {name: 'Jaackk',
                age: 25,
                job: 'Developer',
                phone: 0172068738};


// destructure
const phoneNo = person.phone;
const { phone } = person;   // phone property
const { name, address, job} = person;    

console.log(person.age);
console.log(phoneNo);
console.log(phone);
console.log(name, address, job);


//array & destructuring 
const friend = ['pol','lam','mou','saj','him'];
const [one,two, ...remain] = friend;
console.log(remain);


//complex object
const complexPerson = {
    name: 'abs',
    info: {
        address: ' safmkmof ',
        leader: ' vdv '
    }
}
const {leader} = complexPerson.info;
console.log(leader);





