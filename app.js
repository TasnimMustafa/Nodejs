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
        sub1 : {
            describe:"Adding sub1",
            demandOption:true,
            type:"string"
        },
        sub2 : {
            describe:"Adding sub2",
            demandOption:true,
            type:"string"
        },
        sub3 : {
            describe:"Adding sub3",
            demandOption:true,
            type:"string"
        },
        sub4 : {
            describe:"Adding sub4",
            demandOption:true,
            type:"string"
        },
        sub5 : {
            describe:"Adding sub5",
            demandOption:true,
            type:"string"
        },
        sub6 : {
            describe:"Adding sub6",
            demandOption:true,
            type:"string"
        }

    },
    handler : (person) => {
         operations.addPerson(person.id,person.fname,person.lname,person.city,person.age,person.sub1,person.sub2,person.sub3,person.sub4,person.sub5,person.sub6);        
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