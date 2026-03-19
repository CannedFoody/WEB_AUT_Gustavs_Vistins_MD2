import { BasePage } from "./base_page";

export class AppointmentLogin extends BasePage{
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/profile.php#login";
    }

    static get username_field(){
        return cy.get("#txt-username");
    }

    static get password_field(){
        return cy.get("#txt-password");
    }

    static get login_btn(){
        return cy.get("#btn-login");
    }
}