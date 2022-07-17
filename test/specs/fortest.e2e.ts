import ForTestPage from "../pageobjects/fortest.page";

describe("My page for testing", () => {
  it("testing", async () => {
    await ForTestPage.open();
    await ForTestPage.toggleTitleWithInput("hello");

    await expect(ForTestPage.title).toBeExisting();

    setTimeout(async () => {
      await ForTestPage.toggleBtn.click();
      await expect(ForTestPage.title).not.toBeExisting();
    }, 100);
  });
});
