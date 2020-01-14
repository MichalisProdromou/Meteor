import axios from "axios";

export const Get = function(url) {
  return new Promise( (resolve, reject) => {
    axios.get(url)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
  });
}