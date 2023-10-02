import helloWorld from "./helloWorld.js";
import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsync from "./ambilDataUserAsync.js";

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
};

messages();

ambilDataUser()
  .then((user) => {
    console.log(users);
  });

ambilDataUserAsync()
  .then((user) => {
    console.log(users);
  })