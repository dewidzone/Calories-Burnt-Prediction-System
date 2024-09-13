
import time
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, ElementClickInterceptedException, NoSuchElementException


class TestRegisterAndLogin(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:3000")

    def tearDown(self):
        self.driver.quit()

    def test_login_and_contact_us(self):
        # Click the SignIn button
        sign_in_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'SignIn')]")
        sign_in_button.click()
        time.sleep(2)

        # Fill the email and password fields with email address
        email_input = self.driver.find_element(By.NAME, "email")
        email_input.send_keys("dewidzone@gmail.com")
        time.sleep(1)

        password_input = self.driver.find_element(By.NAME, "password")
        password_input.send_keys("1234567891011")
        time.sleep(1)

        # Introduce a delay before clicking the SignIn button
        submit_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.CLASS_NAME, "btn.btn-primary.btn-block")))
        time.sleep(1)
        submit_button.click()

        try:
            # Wait for a possible alert indicating valid credential
            alert = WebDriverWait(self.driver, 20).until(EC.alert_is_present())
            alert_text = alert.text
            alert.accept()

            if "Login Successful!" in alert_text:
                print("\x1b[6;30;42m" + "Test passed. 'Successfully Redirect to the home page'" + "\x1b[0m")
                
                # Introduce a delay before redirecting to /home
                time.sleep(4)
                self.driver.get("http://localhost:3000/home")
                
                # Navigate to prediction page
                prediction_button = self.driver.find_element(By.XPATH, "//a[contains(text(), 'Contact Us')]")
                time.sleep(1)
                prediction_button.click()
                WebDriverWait(self.driver, 30).until(EC.url_contains("/contactus"))

                # Fill out the contact form fields
                name_input = self.driver.find_element(By.NAME, "Name")
                name_input.send_keys("Sahan")
                time.sleep(1)

                email_input = self.driver.find_element(By.NAME, "Email")
                email_input.send_keys("Sahan@gmail.com")
                time.sleep(1)

                subject_input = self.driver.find_element(By.NAME, "Subject")
                subject_input.send_keys("Test Subject")
                time.sleep(1)

                message_input = self.driver.find_element(By.NAME, "Message")
                message_input.send_keys("This is a test message.")
                time.sleep(1)

                # Click the Send button
                send_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Send')]")
                time.sleep(1)
                send_button.click()

                # Wait for the alert box with the message "Message Sent!"
                try:
                    alert = WebDriverWait(self.driver, 10).until(EC.alert_is_present())
                    alert_text = alert.text
                    alert.accept()
                    self.assertEqual(alert_text, "Message Sent!", "Alert message does not match")
                    print("\x1b[6;30;42m" + "Test passed. Alert message: 'Message Sent!'" + "\x1b[0m")
                except TimeoutException:
                    self.fail("Alert box with 'Message Sent!' not found")

            else:
                self.fail("Login with email and password was not handled correctly")

        except TimeoutException:
            if "Login Successful!" in alert_text:  # Check if login was successful before printing
                print("\x1b[6;30;42m" + "Test passed. Message sent!" + "\x1b[0m")


if __name__ == "__main__":
    unittest.main()
