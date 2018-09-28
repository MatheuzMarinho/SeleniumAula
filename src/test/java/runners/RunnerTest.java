package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/testarFacebook.feature",
		glue = "steps",
		tags = {"~@ignore"},
		plugin = {"pretty", "html:target/report-html"},
		monochrome = false,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {

}
