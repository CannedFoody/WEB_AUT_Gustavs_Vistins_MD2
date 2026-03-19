import { AppointmentPage } from "../page_objects/appointment_page";
import { AppointmentLogin } from "../page_objects/appointment_login";
import { MakeAppointment } from "../page_objects/make_appointment";

//  Im not sure if this way of validating is optimal, but for the current moment I will keep it as is.

describe('Homework 2', () => {
  context("1st task", () => {
    beforeEach(() => {
      AppointmentPage.visit();
      AppointmentPage.make_appointment_btn.click();
    })
    it.only("Input the demo account data into the relevant fields", () => {
      AppointmentLogin.username_field.type("John Doe");
      AppointmentLogin.username_field.should("have.value", "John Doe");

      AppointmentLogin.password_field.type("ThisIsNotAPassword");
      AppointmentLogin.password_field.should("have.value", "ThisIsNotAPassword");

      AppointmentLogin.login_btn.click();
    })

    it.only("Make the appointment with the given task data", () =>{

      AppointmentLogin.username_field.type("John Doe");
      AppointmentLogin.username_field.should("have.value", "John Doe");

      AppointmentLogin.password_field.type("ThisIsNotAPassword");
      AppointmentLogin.password_field.should("have.value", "ThisIsNotAPassword");

      AppointmentLogin.login_btn.click();

      MakeAppointment.facility_dropdown.select("Seoul CURA Healthcare Center");
      MakeAppointment.facility_dropdown.should("have.value", "Seoul CURA Healthcare Center");

      MakeAppointment.apply_checkmark.check();
      MakeAppointment.apply_checkmark.should("be.enabled");

      MakeAppointment.program_radio_medicaid.click();
      MakeAppointment.program_radio_medicaid.should("be.enabled");

      MakeAppointment.date_input.click()

      // This has to have a better way to validate data, but I can't seem to figure it out.
      MakeAppointment.date_input_days.each(($el) => {
        if($el.text() == "30"){
          cy.wrap($el).click();
        }
      })
//    cy.get("[class="day"]").contains(/^28&/)
      MakeAppointment.date_input_days.each(($el) => {
        if($el.text() == "30"){
          cy.wrap($el).should("have.class", "active day");
        }
      })

      MakeAppointment.comment_field.type("CURA Healthcare Service");
      MakeAppointment.comment_field.should("have.value", "CURA Healthcare Service");

      MakeAppointment.book_appointment_btn.click()
    })
    
  })

  context("2nd task", () => {
    beforeEach(() => {
      AppointmentPage.visit();
      AppointmentPage.make_appointment_btn.click();
    })
    it.only("Login and check appointment history and make sure it's empty", () => {
      AppointmentLogin.username_field.type("John Doe");
      AppointmentLogin.username_field.should("have.value", "John Doe");

      AppointmentLogin.password_field.type("ThisIsNotAPassword");
      AppointmentLogin.password_field.should("have.value", "ThisIsNotAPassword");

      AppointmentLogin.login_btn.click();

      MakeAppointment.menu_toggle.click();
      MakeAppointment.navigation_menu_check.should("have.class", "active");

      MakeAppointment.navigation_menu.each(($el) => {
        if($el.text() == "History"){
          cy.wrap($el).click();
        }
      })

      MakeAppointment.history_div.should("contain", "No appointment.");
    }) 
  })


})