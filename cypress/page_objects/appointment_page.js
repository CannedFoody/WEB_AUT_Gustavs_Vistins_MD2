import { BasePage } from "./base_page";

export class AppointmentPage extends BasePage{
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/";
    }

    static get make_appointment_btn(){
        return cy.get("#btn-make-appointment")
    }

}