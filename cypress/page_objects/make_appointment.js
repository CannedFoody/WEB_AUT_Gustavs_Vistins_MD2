import { BasePage } from "./base_page";

export class MakeAppointment extends BasePage{
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com/#appointment";
    }

    static get facility_dropdown(){
        return cy.get("#combo_facility");
    }

    static get apply_checkmark(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get program_radio_medicaid(){
        return cy.get("#radio_program_medicaid");
    }

    static get date_input(){
        return cy.get("#txt_visit_date");
    }

    static get date_input_days(){
        return cy.get(".day");
    }

    static get comment_field(){
        return cy.get("#txt_comment");
    }

    static get book_appointment_btn(){
        return cy.get("#btn-book-appointment");
    }

    static get menu_toggle(){
        return cy.get("#menu-toggle");
    }

    static get navigation_menu(){
        return cy.get(".sidebar-nav a");
    }

    static get navigation_menu_check(){
        return cy.get("#sidebar-wrapper");
    }

    static get history_div(){
        return cy.get(".col-sm-12 p");
    }
}
