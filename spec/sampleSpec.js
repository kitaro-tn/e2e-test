const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const By = webdriver.By;
const until = webdriver.until;

describe('Sample spec', function() {

  beforeAll(function() {
    let userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36";

    // this.driver = new webdriver.Builder()
    //   .forBrowser('phantomjs')
    //   .usingServer('http://localhost:8910')
    //   .build();
    this.driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.phantomjs()
          .set("phantomjs.page.settings.userAgent", userAgent))
        .build();

  });

  afterAll(function() {
    this.driver.quit();
  });

  it('test google', async function(){
    this.driver.get("http://www.google.com");
    let title = await this.driver.getTitle();
    console.log(title);
    expect(await this.driver.getTitle()).toEqual('Google');
  });

});
