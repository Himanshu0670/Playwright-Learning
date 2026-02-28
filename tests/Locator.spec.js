import{ test, expect} from '@playwright/test'

test('Locator', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    await page.locator('id=login2').click();
    await page.locator('id=loginusername').fill('pavanol');
    await page.locator('id=loginpassword').fill('test@123');
    await page.locator("//button[normalize-space()='Log in']").click();
    let logout = await page.locator('id=logout2')
    await expect(logout).toBeVisible();
    await page.close();
})

test('Multiple Locator', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

   // page.waitForSelector("//div[@id='tbodyid']//div//h4/a"); //it waits till the selector are not displayed.
    const products= await page.$$("//div[@id='tbodyid']//div//h4/a");
    
    for(const product of products){

       const name = await product.text.Content();
        console.log(name);
    }
})
