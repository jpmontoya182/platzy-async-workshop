const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Result");
    } else {
      reject("Opss");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log("response : " + response))
  .catch((err) => console.error("error : " + err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("WTF");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
