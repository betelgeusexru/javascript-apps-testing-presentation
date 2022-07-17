import { ChainablePromiseElement } from "webdriverio";

import Page2 from "./page2";

class ForTestPage extends Page2 {
  public get toggleBtn() {
    return $("#toggle-btn");
  }

  public get input() {
    return $("#search");
  }

  public get title() {
    return $("title");
  }

  public async toggleTitleWithInput(text) {
    await this.input.setValue(text);
    await this.toggleBtn.click();
  }

  public open() {
    return super.open("/for_test_page");
  }
}

export default new ForTestPage();
