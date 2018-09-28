package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class LogarFacebookStep {
	
	private WebDriver driver;
	
	@Dado("^que estou acessando a aplicacao$")
	public void queEstouAcessandoAAplicacao() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\mathe\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com.br");
	}

	@Quando("^informo o usuario \"([^\"]*)\"$")
	public void informoOUsuario(String arg1) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);
	}

	@Quando("^a senha \"([^\"]*)\"$")
	public void aSenha(String arg1) throws Throwable {
		driver.findElement(By.id("pass")).sendKeys(arg1);
	}

	@Quando("^seleciono entrar$")
	public void selecionoEntrar() throws Throwable {
		driver.findElement(By.id("u_0_2")).click();;
	}

	@Entao("^visualizo a pagina inicial$")
	public void visualizoAPaginaInicial() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}



}
