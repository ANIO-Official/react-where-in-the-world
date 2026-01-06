
  //utility functions
  export function getLastKey(object: {}) {
    if (object !== null && object !== undefined) {
      const keysArray = Object.keys(object);
      return keysArray[keysArray.length - 1];
    }
  }

  //Return all properties of the passed object
  export function getAllValues(object: {}) {
    if (object !== null && object !== undefined) {
      const allValues: any[] = Object.values(object);
      return allValues;
    }
  }