function displayProperty(object,str)  {
    if (object.hasOwnProperty(str)){
  console.log(object[str])
    }else{
        console.log(`Property  ${str} does not exist in the object.`);
    }
}

const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer"
  };
  
  displayProperty(person, "name");
  displayProperty(person, "age");
  displayProperty(person, "occupation");
  displayProperty(person, "address");