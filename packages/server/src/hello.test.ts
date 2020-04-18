import { handleHello } from "./hello";

describe("hello", () => {
  it("returns a response", async () => {
    const response = await handleHello(undefined);
    const text = await response.text();
    expect(text).toEqual("Hello, world!");
  });
});
