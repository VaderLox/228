function DeepCopy(obj) {
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      let value = obj[key];
      clone[key] = (value instanceof Object) ? DeepCopy(value) : value;
    }
    return clone;
  }

let object = {1: "I", 2: "II", 3: {VIVA: "XX"}, go: "home"};

console.log(object["go"])

console.log(DeepCopy(object))