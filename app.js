const yargs = require("yargs");
const operations = require("./operations");

yargs.command({
    command:"add",
    describe :"adding data of person",
    builder : {
        id : {
            describe:"Adding Id",
            demandOption:true,
            type:"string"
        },
        fname: {
         describe :"Adding First Name",
        demandOption:true,
        type:"string"
        },
        lname : {
            describe:"Adding Last Name",
            demandOption:true,
            type:"string"
        },
        city : {
            describe:"Adding City",
            demandOption:true,
            type:"string"
        },
        age : {
            describe:"Adding age",
            demandOption:true,
            type:"string"
        },

    },
    handler : (person) => {
         operations.addPerson(person.id,person.fname,person.lname,person.city,person.age);        
    }
});


yargs.command({
    command :"delete",
    builder : {
        id : {
            describe:"Adding Id",
            demandOption:true,
            type:"string"
        },
    },
    describe:"deleted data",
    handler : (person) => {
        operations.deletePerson(person.id);
    }
});

yargs.command({
    command :"read",
    builder : {
        id : {
            describe:"Adding Id",
            demandOption:true,
            type:"string"
        },
    },
    describe:"read data of person",
    handler : (person) => {
        operations.readDataPerson(person.id);
    }
});

yargs.command({
    command :"list",
    describe:"list data of persons",
    handler : () => {
        operations.listDataPerson();
    }
});

yargs.command({
    command:"edit",
    describe:"edit data of person",
    builder : {
        id : {
            describe:"Id",
            demandOption:true,
            type:"string"
        },
        fname: {
            describe :"Edit First Name",
           demandOption:true,
           type:"string"
           },
        lname : {
               describe:"Edit Last Name",
               demandOption:true,
               type:"string"
           },
        city : {
               describe:"Edit City",
               demandOption:true,
               type:"string"
           },
        age : {
               describe:"Edit age",
               demandOption:true,
               type:"string"
           },
    },
    handler : (person) => {
       operations.editDataPerson(person.id,person.fname,person.lname,person.city,person.age);
    }
})


yargs.parse();