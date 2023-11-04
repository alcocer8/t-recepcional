/**
 * 
 * @param {JSON} data 
 * @param {Array} keys 
 * @param {String} query 
 * @returns @JSON
 */

export const search = (data, keys, query) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

