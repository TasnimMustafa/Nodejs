const fs = require("fs");

const addPerson = (id,fname,lname,city,age,sub1,sub2,sub3,sub4,sub5,sub6)=>{
    const allPersons = persons();

     const arr = [sub1,sub2,sub3,sub4,sub5,sub6];
     let total = 0;
     let avg = 0;

    arr.forEach(sub=>{
        total += (+sub);
        avg = Math.ceil(total/(arr.length));
    })

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
        total:total,
        avg:avg,
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
    console.log(Person ?? "This person does not exist");

}

const listDataPerson = () => {
    const allPersons = persons();

    allPersons.forEach((persons)=>{
        console.log(persons.fname , persons.lname,"=>",persons.total)
    })
}


const editDataPerson = (id,fname,lname,city,age) => {
    const allPersons = persons();

    const PersonToEdit = allPersons.find((person)=>{
        return person.id === id
    })
    console.log(PersonToEdit ?? "This Person doesn't Exist");
    if(PersonToEdit === undefined){
      console.log("This Person doesn't Exist");
    }else {
        PersonToEdit.fname = fname;
        PersonToEdit.lname = lname;
        PersonToEdit.city = city;
        PersonToEdit.age = age;
    }

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

