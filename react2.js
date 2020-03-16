var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Jasper", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge= pet => new Date().getFullYear() - pet.bornOn;

  var petsWithAge = [];
 pets.forEach((x)=>{
    x.age = getAge(x);
     petsWithAge.push(x);
   })
   console.log(petsWithAge);

   const dogs=pets.filter(animal=> animal.type=="dog")
  console.log(dogs)
  
var Jasper;
   pets.find((x)=>{
    x.name ==="jasper" 
    Jasper=x;
    
})
console.log(`jasper is ${Jasper.age} years old`);