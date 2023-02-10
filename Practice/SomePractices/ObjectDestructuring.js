//Basic object destructuring
//Object Destructure garda same name huna parxa

let person={name:"Sam", country:"Nepal",age:23}
    // let {name,country,age}=person;
    // console.log(name);

/*if pahile variable declare garyo vanay chahi ()le wrap garna parxa*/
    // let name2,country1,age1;
    // ({name2,country1,age1}=person);
    // console.log(name2);


/*Using new variable name for the object keys
    Variable name le naya memory linxa
*/
    let{name:a,age:b}=person;
    console.log(a," ",b);

/** Using Default variables */
    let {name='myName',age33=29}=person;
    console.log(name," ",age33);

/** Computed Property */
//pasing the key in variable and using it inside the array []
    let prop='name';
    //{[name]:foo}=person
    //{name:foo}=person
    let{[prop]:foo}=person;
    console.log(foo);//Sam

/** Combining Arrays with Object */
    let per = {name: "Sam", country: "Nepal", friends: ["Sim", "Cat"]};
    let{name:fo,friends:bar}=per;
    //bar matra print garda array ma dinxa tara Template literals le string mai print garxa
    console.log(`${bar}`);
    console.log(bar);

/** Nesting in Object Destructuring */
    let objEg={
        Pername:'Sam',
        place:{
            country:'Nepal',
            city:'Pokhara',
        },
        friends:['Sim','Cat']
    };
    // let {name:food,place:{country:bart,city:x},friends:acdc}=objEg;
    // console.log(`${food} , ${bart}, ${x}, ${acdc}`);

/** Rest Operator in object */
    let{Pername,place,...remainingObj}=objEg;
    console.log(Pername);
    console.log(place);
    console.log(remainingObj);

/** Object Destructuring and Functions 
 * Assigning default values too
*/
    function persona({name:x="Anne Marie",profession="Singer"}={}){
        console.log("Inside function ",x);
        console.log("Inside function ",profession);
    }
    persona({name:"Sammy"});
    persona({profession:"Song Writer"});
    persona();
   