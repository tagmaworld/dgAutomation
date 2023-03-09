
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
        await (await this.loginLink).isDisplayed();
        await this.loginLink.click();
       
    }
    async LoginToDG(username, password){
        await (await this.username).isDisplayed()
        await this.username.setValue(username);
        await this.password.setValue(password);

        await this.login.click();
    }


}
export default new LoginPage();