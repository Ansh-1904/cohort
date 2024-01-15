// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);  //There is a inbuild class called Object in javascript which has a static method i.e. keys 
  console.log("After Object.keys():", keys);//gives an Array as an output which contains the keys

  let values = Object.values(obj);
  console.log("After Object.values():", values);//gives an array which contains the value

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("user");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}


// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  user: "Ansh Solanki"
};

objectMethods(sampleObject);
