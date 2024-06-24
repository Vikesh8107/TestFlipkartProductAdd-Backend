const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.in/D-Link-DAP-1325-Wi-Fi-Range-Extender/dp/B078NM8S6W/ref=sr_1_3?adgrpid=56417149142&dib=eyJ2IjoiMSJ9.iPdn4O1R-jTSzZ578FPuKmr3Zs49voiQqpyAQ8ExrOW3O407V-1OOW-JAoPezK9cTFIm4Jl7aTKh9DvUtwVv80BeHRTyQlkqhA8RCrNLqjjCQKMHDTqFUUrqqaz101cgAzi5ejR3R5xo6GfRrGCv5AXb3K-lFcu82kep_HqHqpEoQgwKiltlY1sKpb5vkhKrYL5cYbNFeS4y-H0DsG1fHXjXrCOFpJblmqkSeAru-3M.qhp2Kus1IxsUK0NK8QFTuZxW_dE0KxRi_z_DKiWcZyI&dib_tag=se&ext_vrnc=hi&hvadid=294114096213&hvdev=c&hvlocphy=9300836&hvnetw=g&hvqmt=e&hvrand=1417814258024806312&hvtargid=kwd-301172115060&hydadcr=27582_1814406&keywords=wifi+extender+d+link&qid=1719058895&sr=8-3', {
    waitUntil: 'networkidle2'
  });

  const content = await page.content();
  console.log(content);

  await browser.close();
})();
