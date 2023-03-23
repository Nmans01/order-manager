export function flattenJson(obj) {
    const flattened = {};
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        const flatObject = flattenJson(obj[key]);
        for (const flatKey in flatObject) {
          //flattened[key + '.' + flatKey] = flatObject[flatKey];
          flattened[flatKey] = flatObject[flatKey];
        }
      } else {
        flattened[key] = obj[key];
      }
    }
    return flattened;
  }