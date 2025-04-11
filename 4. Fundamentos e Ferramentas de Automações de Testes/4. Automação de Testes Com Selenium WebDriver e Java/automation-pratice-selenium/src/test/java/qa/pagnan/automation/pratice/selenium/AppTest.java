package qa.pagnan.automation.pratice.selenium;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AppTest {
	private WebDriver driver;
	
    @Test
    public void helloSelenium() {
        //https://www.selenium.dev/documentation/web/driver/getting_started/install_drivers/
    	System.getProperty("webdriver.chrome.driver", "drivers/chromedriver");
    	driver = new ChromeDriver();
    	driver.manage().window().maximize();
    	driver.get("https://www.linkedin.com/in/felipepagnan/");
    	
    	String currentUrl = driver.getCurrentUrl();
    	String expected = "https://www.linkedin.com/in/felipepagnan/";
    	
    	Assertions.assertEquals(expected, currentUrl);
    	
    	driver.quit();
    	
    }
    @Test
    public void shouldAnswerWithTrue() {
        assertTrue(true);
    }

}
