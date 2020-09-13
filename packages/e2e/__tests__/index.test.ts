describe("the universe", () => {
  it("can do math", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("the front-end", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8787/");
  });

  test("should load", async () => {
    await expect(page).toHaveText("Learn React");
  });
});

describe("the back-end", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8787/hello");
  });

  test("should load", async () => {
    await expect(page).toEqualText("Hello, world!");
  });
});
