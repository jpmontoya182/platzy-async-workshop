const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Async"), 3000)
      : reject(new Error("Test Error"));
  });
};

const doAsync = async () => {
  const Something = await doSomethingAsync();
  console.log(Something);
};

const anotherFunction = async () => {
  try {
    const Something = await doSomethingAsync();
    console.log(Something);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction();
