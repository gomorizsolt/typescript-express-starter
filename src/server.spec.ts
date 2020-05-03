import { expect } from "chai";
import request from "supertest";
import server from "./server";

describe("server", () => {
  it("should response with 200", () => {
    request(server).get("/").expect(200);
  });

  it("should response with a string", () => {
    request(server)
      .get("/")
      .end((_, res) => {
        expect(res.text).to.equal("Hello from node");
      });
  });
});
