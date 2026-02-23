

## Dependency injection in the Spring application framework

Let\'s continue reviewing the \[calculator\]\[dependency_injection/\] we discussed last week. If necessary, review the text behind the link above.

The code below can be found as Gradle projects in the course\'s \[assignment repository\]\[{{site.java_exercise_repo_url}}\] directory under code/week2/DependencyInjectionSpring

We ended up in a situation where a concrete dependency on reading and printing input has been separated from the Calculator class. The calculator only knows *the* IO *interface* through which it handles input processing and printing.

Before starting, the refactored calculator must *be configured* by injecting the appropriate dependencies:

    // configuration phase
    Calculator calculator = new Calculator( new ConsoleIO() );

    // and calculator ready for use
    calculator.run();

In our example, configuration is easy. In larger programs, the configurable object may have a large number of dependencies, and configuration can be complex.

The Spring application framework, familiar to those who have taken the \[Web Server Programming\]\[https://courses.helsinki.fi/fi/tkt21007\] course, provides a mechanism that allows dependency injection to be transferred to Spring.

> Spring is a comprehensive and versatile application framework that is commonly used in Java web application development, among other things. In this course, we will only cover dependency injection in Spring. Spring can be used by adding it as a dependency to the build.gradle file of a Gradle project.

Spring can be enabled by adding it as a dependency to the *build.*gradle file of the Gradle project. For more details, see \[here\]\[{{site.java_exercise_repo_url}}/tree/main/code/week2/DependencyInjectionSpring\].

The idea behind Spring is to transfer some of the application\'s objects to an \[Inversion of Control container\]\[https://docs.spring.io/spring/docs/5.2.0.RELEASE/spring-framework-reference/core.html#beans-basics\], which is a kind of object container that acts as an application context.

In Spring, there are two ways to define objects controlled by the application context. We currently use the more popular definition method based on \[annotations\]\[https://docs.spring.io/spring/docs/5.2.0.RELEASE/spring-framework-reference/core.html#beans-annotation-config\].

The classes of objects to be managed by the application context are marked with the \@Component annotation. The *KonsoliIO* class is annotated as follows:

    @Component
    public class ConsoleIO implements IO {
      // ...
    }

The *Calculator* class is also marked with *the Component* annotation. In addition, Spring is told with the \@Autowired annotation that it must inject an object implementing the *IO* interface into the calculator as a constructor parameter:

    @Component
    public class Calculator {
        private IO io;

        @Autowired
        public Calculator(IO io) {
            this.io = io;
        }

      //...

    }

In fact, the same result could be achieved even more easily by marking the calculator\'s instance variable *io* with the \@Autowired annotation, in which case the constructor would not be needed:

    @Component
    public class Calculator {
        @Autowired
        private IO io;
        
        // ...      
       
    }

The application still needs to be configured so that Spring knows that annotation-based configuration is being used. Configuration can be done either as an XML file or as a Java class \[https://docs.spring.io/spring/docs/5.2.0.RELEASE/spring-framework-reference/core.html#beans-java\].

We will use the class-based method. The class that handles the configuration is simple:

    @Configuration
    @ComponentScan(basePackages = "ohtu.laskin")
    public class AppConfig  {}

In practice, the class configures the use of annotation-based definitions and searches for annotated classes under the *ohtu.laskin* package.

The main program is now as follows:

    public class Main {
        public static void main(String[] args) {
            ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);

            Calculator calculator = ctx.getBean(Calculator.class)
            calculator.run();
        }
    }

The first line creates the application context. After this, the context is asked for the Calculator object and the method that starts the calculator is called.

Spring automatically creates the calculator based on the configurations and injects the KonsoliIO object into it.

By default, Spring creates only *one* object of each class, which means that if the method call *ctx.getBean(Laskin.class)* is executed repeatedly, it always returns the same object.

If this is not the desired behavior, Spring can be \[configured\]\[https://docs.spring.io/spring/docs/5.2.0.RELEASE/spring-framework-reference/core.html#beans-scanning-scope-resolver\] to return a new object with each call.

More information about how Spring containers work can be found in the \[documentation\]\[https://docs.spring.io/spring/docs/5.2.0.RELEASE/spring-framework-reference/core.html#beans\].

