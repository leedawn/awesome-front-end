const axios = require("axios");

class Users {
  static all() {
    return axios.get("/users.json").then((resp) => resp.data);
  }
}
module.exports = Users;


// 本来是 user.spec.ts 的内容

// const axios = require("axios");
// const Users = require("./user");

// jest.mock("axios");
// test("fetch", () => {
//   const users = [{ name: "Bob" }];
//   const resp = { data: users };
//   axios.get.mockResolvedValue(resp);
//   return Users.all().then((data) => expect(data).toEqual(users));
// });

