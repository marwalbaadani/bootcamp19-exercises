// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
    let falsy = false
    for (let o in obj) {
        if (!obj[o]){
            falsy = true;
        }
    }
  return falsy;
};

// var myObj1 = {title:true, name:true, email:true};

// console.log(hasFalsyValue(myObj1));