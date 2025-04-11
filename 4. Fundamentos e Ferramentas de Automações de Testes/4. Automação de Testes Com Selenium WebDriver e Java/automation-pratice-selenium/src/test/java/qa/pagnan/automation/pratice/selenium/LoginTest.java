package qa.pagnan.automation.pratice.selenium;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class LoginTest {
	private WebDriver driver;

	@BeforeEach
	void setUp() throws Exception {
    	System.getProperty("webdriver.chrome.driver", "drivers/chromedriver");
    	driver = new ChromeDriver();
    	driver.manage().window().maximize();
    	driver.get("https://www.linkedin.com/login/");
		
	}

	@AfterEach
	void tearDown() throws Exception {
		//driver.quit();
	}

	@Test
	void test() {
		//Pesquisa por Id
		WebElement fieldEmail = driver.findElement(By.id("username"));
		fieldEmail.sendKeys("AQUIVAIOEMAIL");
		
		//Pesquisa por Name
		WebElement fieldPassword = driver.findElement(By.name("session_password"));
		fieldPassword.sendKeys("AQUIVAIASENHA");
		
		//Pesquisa por XPath
		WebElement fieldLogin = driver.findElement(By.xpath("//*[@id=\"organic-div\"]/form/div[4]/button"));
		fieldLogin.click();
		
		WebElement tagLogin = driver.findElement(By.tagName("h1"));
		String textTagH1 = tagLogin.getText();
		
		Assertions.assertTrue(textTagH1.equals("atualizações do feed"));
		
	}

}
