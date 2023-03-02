const fs = require("fs");

const addPerson = (id,fname,lname,city,age)=>{
    const allPersons = persons();

    const filterPersons = allPersons.filter((person)=>{
        return person.id === id;
    })

    if(filterPersons.length === 0){
    allPersons.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age,
    });

    convertPersons(allPersons);
}
else {
    console.log("There is the same id");
}
}

const deletePerson = (id) => {
     const allPersons = persons();

     const theRestPersons = allPersons.filter((person)=>{
        return person.id !== id
     })
     console.log(theRestPersons);
     convertPersons(theRestPersons);
}

const readDataPerson = (id) => {
    const allPersons = persons();
    const Person = allPersons.find((person)=>{
        return person.id === id
    })
    console.log(Person);
}

const listDataPerson = () => {
    const allPersons = persons();

    allPersons.forEach((persons)=>{
        console.log(persons.fname , persons.lname,"=>",persons.city)
    })
}


const editDataPerson = (id,fname,lname,city,age) => {
    const allPersons = persons();

    const PersonToEdit = allPersons.find((person)=>{
        return person.id === id
    })
    console.log(PersonToEdit);
    PersonToEdit.fname = fname;
    PersonToEdit.lname = lname;
    PersonToEdit.city = city;
    PersonToEdit.age = age;

    convertPersons(allPersons)
}




const persons = () => {
    try {
       const dataJson = fs.readFileSync("persons.json").toString();
       return JSON.parse(dataJson);
    }catch{
        return []
    }
}

const convertPersons = (allPersons) => {
     const allPersonsJson = JSON.stringify(allPersons);
     fs.writeFileSync("persons.json",allPersonsJson);
}


module.exports = {
    addPerson,
    deletePerson,
    readDataPerson,
    listDataPerson,
    editDataPerson
}

