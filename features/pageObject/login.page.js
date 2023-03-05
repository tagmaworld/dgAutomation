
class LoginPage {
    // UI elements on Login page
    get loginLink(){
        return $('=Login')
    }

    get loginHeader(){
        return $('div > h2');
    }

    get username(){
        return $('[name="email"]')
    }
    get password(){
        return $('[name="password"]')
    }

    get login(){
        return $('[type="submit"]')
    }


    //Functions to interact with those UI elements 

    async clickLoginLink(){
        await this.loginLink.click();
        await browser.pause(5000);
    }
    async LoginToDG(username, password){
    
        await this.username.setValue(username);
        await this.password.setValue(password);

        await this.login.click();
    }


}
export default new LoginPage();