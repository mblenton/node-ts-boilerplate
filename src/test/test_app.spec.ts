import request from "supertest";
import { expect } from "chai";
import app from "../app";

// interface Iresponse {
//   body: { success: boolean; data: { username: string; password: string; }
// };

describe("test GET and POST", () => {
  it("should return 200 OK", () => {
    return request(app).get("/").expect(200);
  });

  it("should return body in json", async () => {
    const myTestJson = {
      username: "milan.rakos@gmail.com",
      password: "377773",
    };
    const res = await request(app)
      .post("/user")
      .type("json")
      .send(JSON.stringify(myTestJson));
    expect(res.body).have.property("success");
    expect(res.body.success).to.be.true;
    expect(res.body.data).to.be.a("object");
    expect(res.body.data.username).to.equal("milan.rakos@gmail.com");
  });
});
