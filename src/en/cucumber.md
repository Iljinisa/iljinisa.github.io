

\[Cucumber\]\[https://cucumber.io\] is a library/tool for automating user story acceptance testing.

The idea is to write story tests in a format that the customer can understand, using natural language, but still make them automatically executable.

Cucumber is a library developed by the \[behavior-driven development (BDD)\] school of thought \[https://en.wikipedia.org/wiki/Behavior-driven_development\]. BDD aims to avoid the use of the term *\"test\"* and instead talks about example functionalities or *scenarios*.

Although Cucumber is actually intended for end-to-end testing of entire software, we will first examine Cucumber\'s operating principles by testing a single class.

Search for the project located in the \[course repository\]\[https://github.com/ohjelmistotuotanto-hy/syksy2020\] directory *week3/HelloCucumber*.

The test subject is a simple counter:

    public class Counter {
       int val = 0;

       public void increase() {
            val++;
       } 
       
       public void reset() {
            val = 0;
       }    
       
        public void increment(int a) {
            val += a;
       } 
       
       public int value() {
           return val;
       }
    }

### Expressing requirements

The desired functionality of the counter is described by the following user stories \* As a user, I want to be able to increase the counter value \* As a user, I want to be able to set the counter to zero

In Cucumber (and a few other BDD tools), requirements are expressed in the \[Gherkin\]\[https://docs.cucumber.io/gherkin/\] format. User stories, i.e., the functionalities desired by the user, are referred to as *features*. The calculator story can be expressed as follows:

Each feature is stored in its own file *with the .feature extension*. In Gradle projects, features are placed in the *src/test/resources/* directory. In the example project, the features are in the files *src/test/resources/ohtu/increasingCounter.feature* and *src/test/resources/ohtu/resetingCounter.feature*

A feature is associated with a set *of scenarios* that correspond to the acceptance tests for the story in practice:

The scenarios are written in the *Given*, *When*, *Then* format. Each line of the scenario is called *a step*. - *Given* describes the starting point of the scenario (i.e., the test) - *When* describes the operation being tested in the scenario - *Then* indicates what should happen in the scenario

Using the keyword *And*, multiple steps can be linked to each step in the scenario. This is done in the third scenario in the example.

### Making tests executable

In order to make the tests executable, code corresponding to the steps in the scenario must be written into the project. Each step is defined as a separate method in the *Stepdefs* class. The steps in the example are defined as follows:

    public class Stepdefs {
      Counter counter;

      @Given("Counter is initialized")
      public void counterIsInitialized() {
        counter = new Counter();
      }

      @When("it is incremented")
      public void itIsIncremented() {
        counter.increase();
      }

      @Then("the value should be {int}")
      public void theValueShouldBe(Integer val) {
        assertEquals(val.intValue(), counter.value());
      }

      @When("it is incremented by {int}")
      public void itIsIncrementedBy(Integer val) {
        counter.increment(val);
      }
    }

Each method is preceded by an annotation that defines what step of the corresponding method it is. The Given step is the same for all scenarios; it defines that the scenarios begin with the creation of a counter.

    @Given("Counter is initialized")
    public void counterIsInitialized() {
      counter = new Counter();
    }

Steps can have \"parameters\", i.e. numbers defined in the scenario

defined numbers are passed to the corresponding methods as parameters:

    @When("it is incremented by {int}")
    public void itIsIncrementedBy(Integer val) {
      counter.increment(val);
    }  

     @Then("the value should be {int}")
    public void theValueShouldBe(Integer val) {
      assertEquals(val.intValue(), counter.value());
    } 

The Then step, which ensures success, performs a check using the assertEquals method of JUnit.

Cucumber requires a small amount of configuration, which is done in the *src/.../RunCucumberTest.java* file. The configuration is simple; it specifies the directory where the feature files are located and that the test results are reported on the command line using the \[pretty formatter\]\[https://cucumber.io/docs/cucumber/reporting/\]:

    @RunWith(Cucumber.class)
    @CucumberOptions(
      plugin = "pretty", 
      features = "src/test/resources/ohtu", 
      snippets = SnippetType.CAMELCASE 
    )
    public class RunCucumberTest {}

The definition is confusing in that the class to be defined, *RunCucumberTest*, does not contain any code, and all essential definitions are made as parameters of the annotation \_@CucumberOptions\_ attached to the class.

**The tests are run** with the command *gradle test*.

Note that running the tests will probably not work with the NetBeans test button.

### Reset scenarios

The story related to resetting the counter is in the file *src/test/resources/ohtu/resetingCounter.feature*

**Add the following scenarios to the story**:

When you now run the tests with the command *gradle test*, the result will look like this:

\![\]\[images/lh3-5.png\]{:height="350px" }

Cucumber highlights the step *And it is reset* in yellow and reports the error

    io.cucumber.junit.UndefinedStepException

Cucumber thus reports that part of the step is undefined. By opening a more detailed report of the error message in a browser, Cucumber displays a ready-made method framework that can be used to implement the step:

\![\]\[images/lh3-6.png\]{:height="350px" }

Copy the step code framework

    @When("it is reset")
    public void itIsReset() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

to the *Stepdefs* class and complete it in a sensible way.

Make sure the tests work.

