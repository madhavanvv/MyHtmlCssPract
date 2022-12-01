async function myTot() {
  console.log("before--1");
  const user = await getUser(1);
  console.log(user);
  console.log("after---3");
}

function getUser(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("middle--2");
      //return { id: id, gitUsername: "venu" };
    }, 2000);
  });
}

myTot();
