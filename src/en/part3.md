In this section, we will introduce software quality management and, in particular, the testing and quality management methods favored by agile methods.

## Typos in the material

Please [suggest corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

## Basic questions of quality management: verification and validation

*Verification* and *validation* are essential aspects of software quality management.

*Verification* aims to ensure that the software meets the requirements set for it during the requirements specification phase. This is usually done by testing that the program meets the functional and non-functional requirements specified in the requirements specification. Verification therefore aims to answer the question: *are we building the product right*?

Validation, on the other hand, aims to ensure that the software meets the user\'s expectations and needs. The software requirements recorded during the requirements specification phase are not always what the user actually needs. The essential question related to validation is therefore *\"are we building the right product*,\" i.e., are we building the right system for the intended use?

The goal of verification and validation is to ensure that the program is \"good enough\" for its intended purpose. Goodness is relative and depends on the purpose of the program. The program does not usually need to be completely error-free to be good enough for its intended use.

Verification and validation are commonly referred to as quality assurance (QA). If quality assurance is the responsibility of a separate team, it is often referred to as the QA team.

## Quality assurance techniques

Traditionally, two different techniques have been used in quality assurance: reviews/inspections and testing.

Reviews involve going through the documents and program code created during the software production process and looking for various problems.

Inspections, on the other hand, are a more formal version of reviews. An inspection is carried out by organizing a formal meeting with a precisely defined agenda and predefined roles for the meeting participants. Inspections belong to the waterfall model world and are not popular today, except in the development of safety-critical systems.

Review is *a static technique* that does not necessarily require executable program code, and if the subject of the review is program code, the program is not usually executed during the review.

Testing, on the other hand, is *a dynamic technique* that always requires the execution of program code. Testing observes how the program reacts to given test inputs.

## Requirements validation

Validation answers the question of whether the system being developed meets the customer\'s needs.

The requirements specified for the software must be validated, i.e., it must be ensured that the specification document describes software that meets the customer\'s needs.

In the waterfall model, the validation of the requirements recorded in the specification document is carried out specifically by means of a review. The requirements specification ends with the customer reviewing the specification document and thus ensuring that the recorded requirements correspond to the customer\'s idea of the system to be ordered. When applying the waterfall model, the specification document is frozen after review, and changing it usually requires a complex process and may require a new agreement between the customer and the application supplier.

In agile software development, requirements are validated in connection with demonstrations that conclude iterations (sprint reviews in Scrum).

The customer is shown a working version of the software and can compare it to see if the end result matches what they ultimately want. The functionality required by the customer may differ from the functionality defined before the iteration, and/or software developers may misinterpret the requirements described in the user stories.

If the customer finds that the application is not progressing in the desired direction, i.e., the documented requirements did not meet the actual need, the need has changed, or the requirements have been misinterpreted, it is possible to take corrective action in the next iteration.

It is clear that the requirements validation method used in the agile model works better in situations resembling product development, where the product being developed is difficult to define precisely in advance.

## Code review

Code review, i.e., reading code by someone other than the programmer, has been found to be a very effective way to improve code quality. Reviewing can help spot problems in the code that are hard to find through testing, like whether the code follows the agreed style and if it\'s maintainable.

Traditionally, code review has involved going through the code to ensure that it does not contain any of the risk-prone features listed in various \"checklists.\" For example, a checklist for reviewing C language programs can be found \[here\]\[http://www.oualline.com/talks/ins/inspection/c_check.html\]. In some languages, such as Java, the checks performed by the compiler render some of the checks on the list behind the link unnecessary.

Nowadays, there are several tools that automate much of the review process by performing *static analysis*, such as Java\'s \[Checkstyle\]\[http://checkstyle.sourceforge.net/\] and Python\'s \[Pylint\]\[https://pypi.org/project/pylint/\], which we already looked at in Week 2.

### Static analysis in the cloud

Cloud services have made the work of application developers easier in many ways. Thanks to GitHub, for example, it has not been necessary to maintain your own version control server for years.

Services that perform static analysis of code have also recently appeared in the cloud, such as \[Codeclimate\]\[https://codeclimate.com/\], which analyzes the following aspects of code, among others:

- overly complex methods and classes
- copy-paste code
- untested code

Codeclimate provides suggestions for improving the issues it finds and even gives an estimate of how long it would take to fix each problem.

Codeclimate also points out changes in code quality, for example, if the complexity of the code increases as a result of changes.

Any project on GitHub can be configured for Codeclimate review at the click of a button. Codeclimate performs code reviews whenever new code is pushed to GitHub.

The old version of Labtool used in the department\'s practical courses \[Codeclimate report\]\[https://codeclimate.com/github/mluukkai/labtool\] indicates that there are a total of 22 suspicious points in the code. The code quality rating is *C,* and the estimated time needed to clean it up is one week:

\![\]\[images/3-21.png\]{:height="350px" }

Codeclimate breaks down each problem and gives an estimate of how long it would take to fix the error:

\![\]\[images/3-22.png\]{:height="350px" }

There are several similar services available today, including \[Codebeat\]\[https://codebeat.co/\] and \[Codacy\]\[https://www.codacy.com/\].

### Code review: GitHub and pull requests

An increasing number of software development projects store their application source code on GitHub. GitHub *pull requests* provide a good and widely used tool for code reviews.

When using pull requests, the workflow is as follows:

- The application developer forks the repository for themselves, makes changes to their own repository, and submits a pull request to the project administrator.
- The administrator, for example, the team\'s senior developer, the person in charge of the open source project, or another application developer, reviews the pull request.
- If the code is not yet in a condition where the changes can be merged into the repository, the administrator writes a set of improvement suggestions to the author of the pull request.
- Once the changes have been made to a satisfactory standard, the pull request is merged, i.e., combined with the main repository.

The following is an example of a pull request made to the \[TMC project\]\[https://tmc.mooc.fi/\] and the comments related to it:

\![\]\[images/3-1.png\]{:height="350px" }

In the pull request comment, \[application developer\]\[https://github.com/kennyhei/\] states that the commits contained in the pull request implement the functionality described in \[this\]\[https://github.com/testmycode/tmc-server/issues/185\] GitHub issue.

\![\]\[images/3-2.png\]{:height="500px" }

However, TMC\'s then \[lead developer\]\[https://github.com/mpartel/\] does not approve the changes for merging yet, but gives the application developer a few suggestions for improvement.

Nowadays, many software development teams regularly use pull requests and have even included in their definition of done that one of the criteria for code to be considered complete is that it has been reviewed by someone other than the programmer. The reviewer can be either another application developer or, in the case of novice coders, a slightly more senior team member.

## Code review in agile methods

Unlike Scrum, the agile method \[eXtreme Programming \]\[http://www.extremeprogramming.org/\], which was particularly popular in the early 2000s, defines a number of practices that affect the work of software developers.

Most of XP\'s practices have been well-known *best practices* for decades, but they are often taken to an extreme form. Some XP practices aim to maximize software quality, while others serve the same function as code review.

*In* pair programming, two programmers work together using only one computer. The person writing the code acts as the driver and the other as the navigator, with the roles switching at appropriate intervals. The navigator *continuously reviews* the code.

Pair programming improves programmers\' discipline and focus on work and is an excellent learning tool: pairs learn from each other, especially novices from more experienced programmers. If pair programming is applied systematically, there will be no areas of code that only one programmer is familiar with.

Pair programming has been studied quite extensively. \[Studies\]\[https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF\] have found that it reduces the number of bugs to some extent, but overall resource consumption increases slightly. In addition to the benefits visible at the code level, the studies also emphasize the positive impact of pair programming on team dynamics and even job satisfaction.

Although pair programming, or even its multi-person version, mob programming, is quite popular, not many places systematically practice pair programming as defined, at least not on a daily basis. It is very common for developers to work alone most of the time, but to engage in spontaneous pair or mob programming sessions when appropriate, especially when encountering technical challenges.

In addition to pair programming, the principles of XP\'s collective code ownership and programming standards can be considered to have similar goals in terms of improving code quality.

Collective code ownership refers to the principle that no single programmer has sole control over any part of the code, meaning that everyone is allowed to make changes and extensions to any part of the code. Pair programming supports collective ownership.

Collective ownership has its own risks: someone unfamiliar with the code can cause serious damage with careless changes. XP aims to eliminate the risks associated with this through testing practices, i.e., automated regression tests.

Coding standards mean that the team defines a coding style that all programmers commit to. Style refers to naming conventions, code formatting, and certain aspects of program structure. Compliance with coding standards can be controlled partially automatically using static analysis tools, such as Java\'s Checkstyle, Python\'s Pylint, and JavaScript\'s \[eslint\]\[https://eslint.org/\] and \[prettier\]\[https://prettier.io/\] are tools that can be used to ensure that the code complies with the specified programming standard. One example of a popular programming standard is the \[AirBnB\]\[https://airbnb.io/javascript/react/\] style guide.

## Testing

It is practically impossible to prove that software is error-free, as the combination of possible usage scenarios and inputs is simply too large. The purpose of testing is to convince the customer and the system development team that the software is good enough to use.

Testing has two slightly different objectives. First*,* it must *be demonstrated that the software meets the requirements set for it*. In practice, this means demonstrating that the items specified in the requirements specification are implemented in the software. The second objective is *to find errors in the software*, i.e., testing attempts to break the program or cause it to become inconsistent in some way. The aim is to fix any errors found in this way before actual users encounter the same problems.

Both of these objectives are primarily aimed at ensuring *the external* quality of the program, i.e., the quality experienced by the user. \[External quality\]\[http://c2.com/cgi/wiki?InternalAndExternalQuality\] refers to whether the software is suitable for its intended use, i.e., whether the user can do what they want with the software.

## Testing levels

Testing is divided *into* different *levels* depending on the primary focus of the testing. *The V-model of testing*, which depicts the software life cycle as a waterfall, illustrates the different levels of testing.

\![\]\[images/3-3.png\]{:height="300px" }

The lowest level is unit testing, which examines the functioning of individual classes, methods, and modules, usually separately from the rest of the system. Unit testing is performed by application developers.

Integration testing, on the other hand, involves testing the functionality of entities composed of individual components. Integration testing is also carried out by application developers.

System testing ensures that the software as a whole functions as specified in the requirements. The software is tested through the same interface that users use to access it. System testing is usually the responsibility of the people in charge of quality management at the software development organization.

Testing carried out by the software customer or user organization is called user acceptance testing, and its purpose is to ensure that the developed software meets expectations and works correctly in actual use. Acceptance testing is often carried out in normal production use by the organization that ordered the software or by end users, for example, by beta testing the application with a small group of users. Acceptance testing does not focus on whether the software works exactly as specified in the requirements specification, as the requirements specification does not necessarily cover exactly what the user\'s actual needs are.

## System testing

The purpose of system testing is to ensure that the software works as specified in the requirements specification. The application is usually tested through the same interface through which it is used, i.e., testing can take place through a graphical user interface, for example.

System testing is performed without knowledge of the internal structure of the system; this type of testing is called *black box* testing.

System tests typically examine the functionality of the application at all levels, from the user interface to the application logic and database. For this reason, system tests are often referred to *as end-to-end tests*.

System testing is usually based on potential usage scenarios for the application. If the requirements are expressed as user stories, it is fairly easy to formulate tests based on the acceptance criteria for the stories to ensure that the software meets the requirements described in the stories and covers typical error scenarios.

In addition to system testing that maps the functionality of the application (sometimes referred to as \[functional testing\]\[https://en.wikipedia.org/wiki/Functional_testing\]), there are many \[other\]\[https://en.wikipedia.org/wiki/System_testing\] forms of system testing, such as

- usability testing
- performance testing
- security testing

System testing is mainly carried out by the developer organization. In some cases, testing of security or performance, for example, may be assigned to specialized entities.

## Selection of test cases

Completely comprehensive testing is impossible, and testing is laborious in any case, so it is important to find a reasonably sized set of test cases that will nevertheless enable the detection of as many errors as possible.

A single test case tests the functionality of the system with a specific input value, or a combination of values if the functionality requires multiple inputs. Many of the inputs are similar in terms of system functionality. For example, if a system that processes personal data stores a person\'s age, it is likely that the system will function in exactly the same way regardless of whether the age is 20 or 30, but if the age is 17, the system\'s functionality may differ from that for ages 18 and above.

In testing, it is therefore advisable to divide the inputs *into equivalence classes*, i.e., groups of inputs for which the program functions in essentially the same way. In most cases, it is advisable to perform only one or two test cases for each equivalence class or combination of equivalence classes of inputs. It is particularly advisable to select *the boundary values* of equivalence classes as representatives of equivalence classes, as bugs in the code are very often related to the extreme values of repetition and conditional statements.

For example, in a system that processes personal data, the equivalence classes for age might be *minors* aged 0-17, *working-age people* aged 18-65, and *pensioners* aged 66 and over. However, defining reasonable limits for equivalence classes requires knowledge of the system\'s functionality. It would probably not be possible to make a clear distinction based on age between working-age people and pensioners. Assuming that the above equivalence classes are reasonable, suitable age *thresholds* for test cases would be 17, 18, 65, and 66 years, meaning that a separate test case could be created for each of these.

Let us consider the browser version of teletext as a second example.

\![\]\[images/3-4.png\]{:height="450px" }

What test cases should be selected for testing the functionality of the Teletext page selection window?

The teletext page corresponds to the numbers 100-899. However, some of the numbers do not correspond to any page.

The equivalence classes for the input would be at least the following:

- numbers corresponding to existing pages
- valid numbers that do not correspond to any page
- numbers that are too small or too large
- inputs containing prohibited characters (e.g., letters)
- empty input

If you want the tests to be comprehensive, it is a good idea to select at least one input value to test from each equivalence class.

The boundary cases of the equivalence class corresponding to the existing page, i.e., the numbers 100 and 899, should perhaps be selected as test inputs, as should the numbers 99 and 900, which are boundary cases of their own equivalence class.

## Unit testing

Unit testing targets individual methods and classes. Unit testing is performed by programmers. It is often assumed that unit tests are performed on new code at the same time as the code is written. The testing performed by programmers, i.e., unit and integration testing, is often referred to as \[developer testing\]\[https://developertesting.rocks/\].

When creating unit tests, the structure of the code being tested may be taken into account, for example, what kind of conditional statements are used in the code. If the internal structure of the system being tested is taken into account in the tests, *this* is often referred to as white box testing.

Unit testing does not directly test whether the software meets the requirements set by the user; rather, the goal is to control *the internal* quality of the program. \[Internal quality\]\[http://c2.com/cgi/wiki?InternalAndExternalQuality\] refers to the quality of the internal structure of the code: is the code easy to further develop, is it easy to track down and fix errors, and can the correctness of the code\'s functionality be ensured when changes are made?

Internal quality is primarily of interest to software developers: if the internal quality of the code is poor, working with it is tedious and slow. If the internal quality of the code begins to deteriorate, the pace of application development slows down, and bugs are likely to accumulate in the software, which will also be visible to the end user.

Unit testing is not just a mechanism for controlling internal quality. Comprehensive unit testing also improves the external quality of the program, i.e., the quality experienced by the customer. Unit tests can eliminate some errors visible to the customer that are not found by system testing test cases.

It is well known that it is economically advantageous to locate bugs as early as possible, i.e., an error found in unit testing is cheaper and faster to fix than one found in integration or system testing, or one that only becomes apparent in actual use.

Since unit tests have to be run multiple times, their execution and reporting of test results should be automated, and current good tool support makes automation easy. JUnit, familiar from the Java world, is still one of the most popular test libraries, with newer entrants including Rspec (Ruby), Mocha, and Jest (JavaScript). The most popular unit testing library for Python is unittest, familiar from the first calculators.

The tests done in the \[Software Engineering\]\[https://courses.helsinki.fi/fi/tkt20002\] course are mostly unit tests.

### What and how much should be tested?

What aspects of the software should be tested with unit tests? The answer is not easy. The original developer of JUnit, Kent Beck, answers the question as follows:

> \"Do I have to write a test for everything?\" \"No, just test everything that could reasonably break.\"

If comprehensive unit testing is the goal, at least the functionality of all methods (and logical method combinations) should be tested with acceptable parameter values and incorrect parameter values.

The possible values of the parameters should be divided into equivalence classes, and at least one value from each class should be selected as a test input. In particular, the boundary values of the equivalence classes should be included in the values to be tested.

Since the program code is visible when performing unit tests, the equivalence classes and boundary values of the test parameters can usually be deduced from the code.

Let\'s look at the example of the *Ohtuvarasto* method from the first week\'s exercises, *otaVarastosta*. What test cases should be generated to ensure that the tests are comprehensive?

    class Warehouse:
        def __init__(self, volume, initial_balance = 0):
            self.volume = max(volume, 10)
            self.balance = min(volume, max(initial_balance, 0))

        def take_from_warehouse(self, amount):
            if amount < 0:
                return 0.0

            if amount > self.balance:
                all_that_can_be = self.balance
                self.balance = 0.0

                return everything_that_can_be

            self.balance = self.balance - amount

            return amount

When testing the method *otaVarastosta*, in addition to the parameter *amount*, the status of the warehouse must also be taken into account in the test case. The status of the warehouse has three \"equivalence classes\":

- *empty* (e.g., balance 0, volume 10)
- *not empty and not full* (e.g., balance 5, volume 10)
- *full* (balance 10, volume 10).

Each of these has its own equivalence class *with the* method *parameter*. If the warehouse is \"half full,\" i.e., the balance is 5, the values of the variable could be *-1, 0, 5, 6*. If the warehouse is full, the values of *the variable* could be *-1, 0, 10, 11*. If the warehouse is empty, the values *of the variable* could be *-1, 0, 1*.

It is hardly worth testing zero and negative quantities separately for all warehouse situations, although this could be a risk if the internal implementation of the warehouse were to be completely changed.

We can see that even testing a single method in a ridiculously small class requires a large number of test cases. In most cases, however, it is not realistic to assume that tests will be performed with the same coverage, as the time/efficiency ratio is simply too poor. In any case, most of the nasty bugs in software remain beyond the reach of unit testing.

### Test coverage

The quality of unit tests (and, of course, other types of tests) can be measured using the concept of test coverage. There are several different types of test coverage.

Line coverage refers to the percentage of the program\'s code lines that are covered by test cases. Even if line coverage is 100%, this does not mean that all essential functionality has been tested.

Branch coverage refers to the percentage of conditional branches in the method/class being tested that the tests have covered.

Many tools, such as JaCoCo (Java) and coverage (Python), which we use in our calculators, measure test coverage during test execution. There are other types of coverage, such as condition coverage and path coverage, but many tools do not support them.

The following is an example of line and branch coverage measured with JaCoCo:

\![\]\[images/3-5.png\]{:height="350px" }

JaCoCo reports both line (instruction) and branch coverage. An incompletely tested branch point, e.g., if, is indicated in yellow.

Test coverage is therefore a useful tool for assessing whether an application is being tested sufficiently.

### Mutational testing

However, test coverage alone does not really tell us anything about the quality of the tests. Good tests are those that detect errors if a bug occurs in the program. The quality of the tests depends not only on the test inputs but also on the types of checks performed in the tests using assert statements.

The idea behind mutation testing is to test the quality of test cases by systematically generating mutants, or small \"bugs,\" in the code and seeing if the tests detect the bugs that have entered the code.

There are many different types of mutants that are generated in the code during mutation testing, e.g.

- manipulating conditional statements: if ( x\<0 ) is changed to if (x \<= 0) or if ( true )
- changing the operator: x += 1 is changed to x -= 1
- hard-coding the return value: return x; is changed to return true;
- Replacing the constructor call: object = new Object() is changed to object = null;

The problem with mutation testing is the large number of mutations and so-called *equivalent mutants*, which means that the results of mutation testing always require human interpretation.

An equivalent mutant refers to a change made to the code that does not alter the functionality of the program. In other words, no test can detect the addition of such a mutant to the code. It is impossible to algorithmically determine whether a mutant is equivalent.

For more information on mutation testing, see, for example, \[Wikipedia\]\[http://en.wikipedia.org/wiki/\] and the \[pit\]\[http://pitest.org/\] tool page.

## Integration testing

The individual, separately unit-tested classes of the system must be integrated into a functioning whole. During or after integration, integration testing is performed, focusing on examining the functionality of the interfaces between the program components and ensuring the correctness of the functionality produced by the components together.

System integration can proceed either based on the system structure or according to the features implemented by the system.

*Structure-based integration* focuses on integrating individual structural components of the application one at a time. For example, in the implementation of an online store, the architectural components or layers, i.e., the application logic classes, user interface implementation, and database interface, would first be integrated as separate entities. The layers would then be integrated into a complete application.

*Feature-based integration*, on the other hand, involves connecting subcomponents that implement the logical functionality of the system. In an online store, for example, all the code related to the functionality *of adding a product to the shopping cart* could be integrated at once, and the functionality could be advanced at once until the entire application is complete.

In the heyday of the waterfall model in \"old school\" software production, the approach was to program and unit test all individual components of the program separately and then integrate them (usually based on structure) all at once.

This technique, commonly known as *big bang* integration in the waterfall model world, has proven to be very risky (often resulting in so-called integration hell) and is no longer recommended by anyone in their right mind.

Modern software production favors *continuous integration*, which is feature-based integration that occurs at a very rapid pace. We will return to this topic in more detail shortly.

In fact, the whole term *\"integration testing\"* is quite vague as a concept, and it is sometimes difficult to draw a clear line between unit and integration testing. It is usually thought that unit tests target a single method, class, or program module. But what if the class/module being tested contains several other classes behind the interface? Is it still a unit test, or is it already an integration test that maps a larger entity?

Tests that can be classified as integration tests include at least the following, which test clearly larger sub-entities

- ensuring the interoperability of application logic and database
- ensuring the correct functionality of the HTTP interface provided by the application server, i.e., the backend

As with unit testing, code integration and often also integration testing are now considered to be the responsibility of application developers, meaning that integration testing falls under the concept of \[developer testing\]\[https://developertesting.rocks/\].

## Regression testing

In iterative and agile software development, where each iteration adds new features to the software, it is necessary to be constantly vigilant to ensure that the additions do not break the parts of the program that already work.

This means that tests must be performed again whenever changes are made to the software. This practice is called *regression testing*. In order to ensure that the software remains as error-free as possible, the set of regression tests should consist of unit, integration, and system tests.

Often, all tests performed during application development are used as regression tests. There are also situations where this is not feasible, for example, due to the time required to perform the tests, and a suitable subset of all tests can ensure sufficient confidence that the application will remain error-free.

Testing is very laborious, and the need for regression testing makes it even more so. For this reason, it is very important to strive to automate tests as much as possible.

Automated unit testing is a familiar topic from previous courses. We will discuss some methods of automating system testing in the following chapters.

## Testing practices in agile methods

The role of testing in agile methods differs significantly from waterfall-style software production. Features implemented during an iteration/sprint are integrated with the rest of the code and tested at the unit, integration, and system levels. The cycle from feature definition to completion and testing is very short, ranging from a week to a month.

Testing is carried out from the \"first day\" of the sprint and is integrated into the design and implementation phases. According to the agile approach, testing is no longer a separate phase.

The nature of agile development requires that tests can be performed frequently and with as little effort as possible, so automated regression testing plays a key role.

As [mentioned](osa1.md#kehittäjätiimi) in the discussion of Scrum, agile application development teams should be *cross-functional*, i.e., they should include all the expertise required for system development and production readiness. For this reason, in an ideal situation, testers are placed in development teams rather than in a separate QA organization that monitors quality, and programmers also write tests.

The role of the tester changes from error finder to error preventer: the tester helps the team write automated tests that aim to prevent bugs from entering the code. One of the key themes in agile quality management is \"building quality into products,\" a principle familiar from the Lean world \[build quality in\]\[https://www.101ways.com/2010/09/06/lean-principles-2-build-quality-in/\]. This means that quality management is not seen as the responsibility of a separate organization (e.g., a QA team), but rather that application development is based on the premise that bugs should not occur, and if they do, they should preferably be detected during the programming phase.

In this chapter, we will go through a number of testing practices favored by agile methods.

*Test-driven development*, or TDD, is a development method in which tests are performed before the code is written. Despite its name, it is more of a design and implementation technique, which results in a comprehensive set of automatically executed tests.

Automated testing at the user story level, known as *acceptance test-driven development* and *behavior-driven development*.

*Continuous* integration and *continuous delivery* are working methods that replace the traditional integration and integration testing phase, with the aim of integrating and even transferring every change made to the application into the production environment.

All of the above practices result in a large number of automated tests at different levels (i.e., unit, integration, system), which enable regression testing to ensure that existing functionality will not be broken during further development of the software.

A growing trend is to perform quality control on new features even at a stage when some of the actual users have already started using them. No matter how comprehensive the testing is, it is very common for certain problems to only become apparent in actual use. Testing in production is a highly disciplined method that requires advanced automation and sophisticated software monitoring.

Despite the strong trend toward automation, manual testing still has its place. *Exploratory testing* is mainly a manual system testing technique in which testing is performed without a detailed test plan prepared in advance. The tester creates new tests on the fly based on feedback from previous tests. Exploratory testing is often used to test completely new software features.

## Test-driven development

\[Test-driven development\]\[https://martinfowler.com/bliki/TestDrivenDevelopment.html\], or TDD, is one of the practices of \[eXtreme Programming\]\[http://www.extremeprogramming.org/\], in which tests are to be performed before the actual code is written.

According to the definition by industry authorities such as Kent Beck and Uncle Bob Martin \[http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd\], TDD proceeds as follows

1.  Write enough test code so that the test fails. In other words, do not create all the tests for a class or method at once, but proceed one test at a time.
2.  Write enough code to make the test pass. Do not try to write the \"final\" code right away.
3.  If you notice that the code structure has become poor (i.e., you notice repetition or overly long methods in the code), *refactor* the code structure to make it better, while ensuring that the tests continue to pass. Refactoring means changing the internal structure of the code so that its interface and functionality remain unchanged.
4.  Let\'s continue from step 1.

The TDD process is often referred to as *red-green-refactor*, i.e., a test that is red is run, code is written so that the tests turn green again, and if necessary, refactoring is performed. The following image illustrates the cycle:

\![\]\[images/3-6a.png\]{:height="250px" }

When programming with TDD, it is not customary to design the component to be implemented exhaustively in advance. Tests are written primarily with the use of the component in mind, i.e., the focus is on the component\'s interface and ease of use, rather than on the internal implementation of the component. The internal structure of the component is shaped through refactoring.

In TDD, the traditional design-implementation-testing cycle can be thought of as being completely reversed, with the precise design of the component only taking place during refactoring.

### Advantages of TDD

When doing TDD, the emphasis is usually on the simplicity of the end result, with the aim of implementing only as much functionality as is required to pass the tests. In other words, no extra functionality is implemented \"just in case,\" as it is unlikely to be needed. This practice of striving for simple solutions is often referred to as \["You ain't gonna need it," YAGNI\]\[https://martinfowler.com/bliki/Yagni.html\]. The same principle is written in the agile manifesto in the form of *Simplicity -- the art of maximizing the amount of work not done -- is essential*.

It is difficult to make code easily testable if it is not modular and loosely coupled, consisting of components with clear interfaces. When programming with TDD as defined, the code is usually modular from the outset and has few unnecessary dependencies. Such code has been found to be of high quality in terms of maintainability and extensibility. In other words, one argument in favor of TDD has been the high quality of code it produces in terms of extensibility and further development.

Other advantages of TDD include that it encourages taking small steps at a time and thus working in a focused manner, and that well-written tests serve as documentation for the interface of the implemented component.

TDD has been studied quite extensively in academia. No significant evidence of its benefits has been found \[https://researchportal.helsinki.fi/fi/publications/effects-of-test-driven-development-a-comparative-analysis-of-empi\], although the research settings have not been very convincing or realistic. They have not really addressed the potential long-term benefits that high-quality code may bring in terms of maintainability.

### TDD also has its downsides

When using TDD, a lot of test code is generated, often about the same amount as the actual code. If and when the application changes, the tests must also be maintained, as many major structural changes often break some of the tests.

Applying TDD is challenging when writing code that handles user interfaces, database connections, and network communication, but it is not impossible. Extending existing code with TDD can also be very challenging, especially if the code to be extended is old-school spaghetti code.

## Managing dependencies in tests

When testing, it is necessary to decide how to approach the dependencies of the classes being tested, i.e., the classes whose objects are used by the class being tested.

The dependency injection design pattern, familiar from calculators, improves the testability of classes, as it allows dependencies to be set for classes from the test.

One option is to create stub components, or *stubs*, to replace dependencies for testing purposes, as was done [in week 1, task 16](tehtavat1.md#16-nhlstatistics-ohjelman-yksikk%C3%B6testaus), for example. The results of method calls can be hard-coded into stubs, for example. Tests can also query the stub to find out what values the method being tested called it with, thus ensuring that the code being tested has communicated with its dependencies as expected.

Stub components are called either stubs or mock objects, depending on their properties. Martin Fowler\'s \[article\]\[http://martinfowler.com/articles/mocksArentStubs.html\] clarifies the issue and terminology. Stubs are usually stub components that only return hard-coded return values for method calls. Mock objects, on the other hand, are more \"intelligent\" and can, for example, monitor whether the methods they define have been called with the correct parameters and the desired number of times.

There are several libraries available to facilitate the creation of mock objects. We will explore the Java version in the Java version of the calculators \[Mockito\]\[https://site.mockito.org/\] library and in the Python version, the \[unittest-mock\]\[https://docs.python.org/3/library/unittest.mock.html\] library.

Let\'s take a closer look at the logic behind unittest-mock using the online store task from week 4 \[calculators\]\[tasks4/\] as an example.

When a purchase is made, the online store should charge the customer\'s account for the price of the purchase *by calling the bank method pay*.

    my_net_bank = Bank()
    references = ReferenceGenerator()
    transaction = Transaction(my_net_bank, references)

    transaction.start_purchases()
    transaction.add_purchase(5)
    transaction.add_item(7)

    # pay for purchases, at the same time pay should happen
    transaction.pay("1111")

This code should therefore be tested to ensure that the method call `shop.pay("1111") `makes a bank transfer corresponding to the purchase amount from bank account *\"1111\"* to the shop\'s account.

How do we ensure that the method of the *Bank* class that performs the bank transfer has been called with the correct parameters?

Using the unittest-mock library, this can be done as follows. Create mock objects for the dependencies of the transaction in the test:

    def test_call_bank_with_correct_account_number_and_amount(self):
        # create mock objects
        bank_mock = Mock()
        reference_generator_mock = Mock(wraps=ReferenceGenerator())

        # inject mocks into the transaction
        store = Store(bank_mock, reference_generator_mock)

        store.start_shopping()
        store.add_item(5)
        store.add_item(5)
        store.pay("1111")

        # let's check that the values of the first and second parameters are correct
        bank_mock.pay.assert_called_with("1111", 10, ANY)

A requirement has been set for the mock object representing the bank using `the assert_called_with method call`, which ensures that the *pay* method has been called with the appropriate parameters during the test. If this requirement is not met, the test will fail.

You can practice using mock libraries in week 4 \[calculators\]\[tasks4/\].

## Testing user stories

In [the definition](osa2.md#user-story) of a user story, it was mentioned that the concept of a user story includes *acceptance criteria*, in the words of Mike Cohn:

> *tests that convey and document details and that will be used to determine that the story is complete*

For example, *the customer* of a user story *can add a product to their shopping cart.* Acceptance criteria could be

- when viewing the product list and selecting a product that is in stock, the product is added to the shopping cart and the price of the shopping cart and the number of products in the cart are updated correctly
- when viewing the product list and selecting a product that is not in stock, the shopping cart status remains unchanged

In an optimal situation, most of the acceptance criteria for user stories can be formed from the system-level functional tests that ensure the functionality of the application from the user\'s perspective.

It is advisable to write the acceptance criteria for a story right at the beginning of the sprint implementing the story, preferably in collaboration with the development team and the product owner or another customer representative. It is often common practice to express the acceptance criteria in the customer\'s language, similar to user stories, without using technical jargon. In the best case scenario, the process of writing acceptance criteria increases communication between the customer and the team.

### System testing automation, ATDD, and BDD

Ideally, story acceptance criteria are made automatically executable.

There are many tools for automated acceptance testing, one of the most popular being the Finnish Python-based \[Robot framework\]\[https://robotframework.org/\].

Automated acceptance testing is sometimes referred to as \[Acceptance test driven development\]\[https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_developmen\] (ATDD) or *\[Behavior driven development\]\[https://en.wikipedia.org/wiki/Behavior-driven_development\]* (BDD), especially if the tests are implemented early in the iteration, before the code implementing the story is ready.

ATDD and BDD are almost the same thing, with only minor differences in emphasis. BDD pays closer attention to the terminology used. For example, BDD does not talk about tests at all, but instead describes acceptance criteria using example behaviors.

The concept of ATDD always includes only acceptance level testing. BDD can also be used for tests other than acceptance level tests. Originally developed for Ruby, \[RSpec\]\[https://rspec.info/\] claims to be a BDD library. In addition to acceptance testing, RSpec is also well suited for unit testing. Many BDD-inspired libraries similar to RSpec have been developed for other languages, such as \[Mocha\]\[https://mochajs.org/\] and \[Jest\]\[https://jestjs.io/\] for JavaScript. However, Cucumber, which will be discussed shortly, is specifically a tool for acceptance testing. It should not be used for unit testing.

### Cucumber

As with most acceptance testing tools, tests written using Cucumber are written in the customer\'s language.

Let\'s look at an example of a service that creates a user account and allows the user to log in.

The requirements for the service are defined by user stories

- *a new user account can be created if a proper unused username and a proper password are given*
- *user can log in with a valid username/password combination*

In Cucumber, each user story is written as a separate file ending in *.*feature, which contains the name of the story and a set of acceptance criteria related to the story, which Cucumber calls *scenarios*. The acceptance criteria for the story, i.e., the scenarios, are written in \[Gherkin\]\[https://cucumber.io/docs/gherkin/reference/\] language, in the following format

*Given \[initial context\], when \[event occurs\], then \[ensure some outcomes\]*

The first user story in our example, with its acceptance criteria, would be written as follows:

\![\]\[images/3-9.png\]{:height="450px" }

The scenarios are automatically converted into executable tests by writing them into the program code. Programmers do the mapping at the stage when the necessary amount of production code is ready.

In practice, each *given*, *when*, and then step of the test corresponds to its own method. The methods call program classes, simulating user input and ensuring that the program responds to user actions as desired.

\![\]\[images/3-10a.png\]{:height="500px" }

### Automating web application testing

In the first and second week\'s exercises, we have already seen how dependency injection makes it easy to automatically test programs that run from the command line. It is also possible to automate the testing of applications that use Java Swing, JavaFX, and other user interface libraries, as well as web browsers. In these tutorials, we will introduce the \[Selenium 2.0 WebDriver\]\[http://seleniumhq.org/docs/03_webdriver.html\] library used for automating web application testing.

Selenium provides an interface that allows you to simulate browser behavior from program code or tests, such as clicking links and entering data into forms. The Selenium Webdriver interface is available in almost all programming languages.

Tests using Selenium can be performed in the same way as normal test code using the unit test library with the Robot Framework presented below.

The following is an example of testing the web version of a system that handles user IDs and logins:

\![\]\[images/3-11a.png\]{:height="500px" }

### Robot Framework

Robot is very similar to Cucumber in terms of its operating principles. Robot tests are also written in the customer\'s language.

The acceptance criteria for the user story \"*user can log in with a valid username/password combination\"* would be expressed in Robot as follows (for the command line version of the application):

    Login With Correct Credentials
        Input Login Command
        Input Credentials  kalle  kalle123
        Output Should Contain  Logged in

    Login With Incorrect Password
        Input Login Command
        Input Credentials  kalle  wrong
        Output Should Contain  Invalid username or password

    Login With Nonexistent Username
        Input Login Command
        Input Credentials  ville  wrong
        Output Should Contain  Invalid username or password

The steps in test cases consist of *keywords* and the parameters assigned to them. In the example, *Input Login Command*, *Input Credentials,* and *Output Should Contain* are keywords. The meaning of keywords must be defined, either using \"simpler\" keywords or as code. The following are the definitions of the keywords *Input Login Command* and *Input Credentials*:

    Input Login Command
        Input  login

    Input Credentials
        [Arguments]  ${username}  ${password}
        Input  ${username}
        Input  ${password}
        Run Application

The remaining keywords *Input*, *Run Application*, and *Output Should Contain* must be defined directly at the code level in order for the tests to be executed (the details are not important at this point; you can learn about them in the calculators):

    class AppLibrary:
        def __init__(self):
            self._io = StubIO()
            self._user_repository = UserRepository()
            self._user_service = UserService(self._user_repository)

            self._app = App(
                self._user_service,
                self._io
            )

        def input(self, value):
            self._io.add_input(value)

        def output_should_contain(self, value):
            outputs = self._io.outputs

            if not value in outputs:
                raise AssertionError(
                    f"Output \"{value}\" is not in {str(outputs)}"
                )

        def run_application(self):
            self._app.run()

Testing web applications with Robot is very easy. Robot utilizes Selenium and includes a wealth of \[predefined keywords\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html\], so when testing web applications, there is usually no need to write nearly as much code defining the functionality of keywords as in Cucumber.

The acceptance criteria for the web version in the example above, as defined in Robot, would look like this:

    Login with correct credentials
        Go to Login Page
        Set Username  kalle
        Set Password  kalle123
        Submit Credentials
        Login Should Succeed

    Login With Incorrect Password
        Go to Login Page
        Set Username  kalle
        Set Password  kalle456
        Submit Credentials
        Login Should Fail With Message  Invalid username or password

    Login With Nonexistent Username
        Go To Login Page
        Set Username  palle
        Set Password  kalle456
        Submit Credentials
        Login Should Fail With Message  Invalid username or password

The keywords used in the tests are defined as follows Using the robot\'s predefined keywords:

    Go To Login Page
        Go To  ${LOGIN URL}

    Set Username
        [Arguments]  ${username}
        Input Text  username  ${username}

    Set Password
        [Arguments]  ${password}
        Input Password  password  ${password}

    Submit Credentials
        Click Button  Login

    Login Should Fail With Message
        [Arguments]  ${message}
        Login Page Should Be Open
        Page Should Contain  ${message}

Since the keywords used in the tests are defined using only Robot\'s predefined keywords such as *Input Text*, *Click Button*, and *Page Should Contain*, getting the tests up and running requires nothing more than a few lines of configuration.

You can use Robot Framework [in the Python version of](tehtavat3.md) the Week 3 exercises.

## Software integration

In the waterfall model, i.e., linear software development, the implementation phase of the software is followed by the integration phase, during which the individually tested components are integrated into a functioning whole and integration testing is performed to ensure the interoperability of the components.

Traditionally, it is the integration phase that has brought to light a large number of problems. Despite careful advance planning, components implemented by separate teams have often been incompatible in terms of their interfaces or functionality.

The integration phase of large projects has taken an unexpectedly long time, and problems discovered during integration may have caused major changes to the design or even the requirements specification.

Integration has traditionally been such a tedious and difficult phase that the term \[integration hell\]\[http://wiki.c2.com/?IntegrationHell\] has been coined to describe it.

### Daily build and smoke test

In the 1990s, it began to be recognized that in order to minimize risks, integration should be done more often than just at the end of a project. The best practice began to emerge as *daily builds* of the entire project, accompanied by *smoke tests*. These practices began to gain greater awareness in the mid-1990s, particularly thanks to the success of \[Microsoft\'s\]\[https://stevemcconnell.com/articles/daily-build-and-smoke-test/\] Excel and Windows 95 teams.

A smoke test is a relatively simple system-level test that nevertheless tests all architectural levels of the system (user interface, application logic, database) and detects if something is seriously wrong. A smoke test does not cover much of the application\'s functionality, but it is sufficient to detect if the application breaks down in a fundamental way, for example, if there is an incompatibility between the application logic and the database that completely prevents database connections from being established.

When using daily builds and smoke tests, system integration is performed at least at some level of accuracy every day. Component compatibility issues are quickly detected and easier to fix. Team morale also improves when there is a daily growing version of the software that is at least somewhat functional.

### Continuous integration

A once-a-day integration phase was found to be a good practice. In the late 1990s, the extreme programming community developed the idea further and ended up shortening the integration cycle even more. This led to the creation of *continuous integration,* or \[continuous integration\]\[https://martinfowler.com/articles/continuousIntegration.html\] (CI).

When using continuous integration, the program code, configurations of libraries used by the program, automated tests, and \"build scripts\" (such as *build.*gradle or *pyproject.*toml files) that handle software compilation and testing are kept in a centralized version control repository.

A single server, whose configuration corresponds as closely as possible to the production server configuration, is reserved as a CI server. When changes are made to the code in the centralized repository, the CI server fetches the software code, compiles it, and runs tests on it. If the code does not compile or the tests fail, the CI server reports the problems to the development team, and the problems are to be addressed **immediately**.

When using continuous integration, the application developer\'s work proceeds as follows.

When starting to implement a new feature, the developer retrieves the latest version of the code from version control. The developer implements the feature, performs automated tests on it, and integrates it with the rest of the code. When everything is ready and the tests pass locally, the developer pushes the code to version control.

The CI server detects the changes, fetches the code, and runs the tests. This minimizes the possibility that the added code will only work on the developer\'s own machine due to configuration differences, for example.

The purpose of continuous integration is therefore for *each developer to integrate their work with the rest of the code as often as possible, at least once a day*. CI thus encourages dividing work into small parts that can be tested and \"completed\" within a single working day. The application of continuous integration requires a high degree of discipline.

In stark contrast to the integration hell of the waterfall world, the aim of continuous integration is to make software integration a completely effortless operation, ensuring that an up-to-date, fully integrated, and tested version of the software is available at all times.

For the CI process to work smoothly, tests must be performed relatively quickly. Ten minutes is often considered the magic limit. However, end-to-end tests performed through the user interface can be surprisingly time-consuming. If the execution time of the tests starts to increase too much, the tests can be configured to run *in two stages*. The completion of the first stage of the tests, *the commit build,* gives the developer sufficient confidence to push the new code to version control. The CI server then also performs *a secondary build* containing slower tests.

In more complex situations, testing can be divided into even more stages. For example, tests measuring the application\'s tolerance to high loads may be performed, which can take several hours to complete. It is by no means appropriate to perform such tests every time a code change (i.e., a commit) is made to version control, but rather once a day, for example.

The \[GitHub Actions\]\[https://github.com/features/actions\] used in the first week\'s calculations is currently the hottest SaaS service, i.e., a cloud-based CI solution. Slightly older but still viable alternatives are \[CircleCI\]\[https://circleci.com\] and \[Travis\]\[https://travis-ci.org/\]. One of the major advantages of CI solutions that operate as SaaS services is that there is no need to install and maintain your own CI server.

Jenkins, which is much older than GitHub Actions, CircleCI, and Travis, is probably still the most widely used CI server software in the world. However, there are currently no free Jenkins services available on the internet. This means that Jenkins must be installed on your own server. Although Jenkins is popular and can do almost anything, it is still quite old compared to newer entrants.

### Definition of continuous integration

Let\'s return to what continuous integration actually means according to its \[pioneers\]\[https://martinfowler.com/articles/continuousIntegration.html\]. To implement continuous integration, *it is not enough* for someone to configure a CI server for the team. For a team to be considered to be doing continuous integration, the application developers must actually synchronize their code as often as possible (at least daily) with the code in a shared centralized repository. This means that, for example, at the beginning of each morning, all application developers should have *the same code* as the starting point for their day\'s work. As anyone who has done application development in a team knows, synchronizing everyone\'s code on a daily basis is not necessarily easy and requires systematic and disciplined work.

The current practice in many places is to use \[feature branches\]\[https://martinfowler.com/bliki/FeatureBranch.html\] that are several days or even weeks old, i.e., separate version control branches for each new feature, actually means that the team is not practicing continuous integration. We will return to this topic \[later\]\[part3/#feature-branches-and-merge-hell\] in this section.

## Continuous delivery and delivery readiness

In line with a recent trend, continuous integration has been taken a few steps further, and the integration process has increasingly begun to include automatic deployment, i.e., compiled and tested code is automatically transferred to a staging or test server for execution.

A staging server is an environment that is as close as possible to the actual production environment in terms of its configurations and the data processed in the application (in practice, the contents of the database). Once the new version of the software has been deployed to the staging server, it undergoes acceptance testing. These tests are mainly system-level tests that ensure that the application works as the user wants it to in an environment that is as close to production as possible.

After acceptance testing, the new version can be transferred to the production server, i.e., made available to end users. In the best case scenario, the acceptance tests performed in the staging environment are also automated, and the software goes through *the* entire *deployment pipeline*, i.e., from the application developer\'s machine to the CI server, from there to the staging environment, and finally to production, automatically.

The term *deployment pipeline* refers to the stages of program compilation, testing, and other quality control that must be completed before the program can be transferred to the production environment for end users.

Each commit by an application developer goes through the deployment pipeline, i.e., a conceptual \"conveyor belt.\"

- The CI server performs a series of tests and possibly static analysis on the commit.
- In the next step, the new version of the application created by the commit is transferred to the staging environment.
- In the staging environment, additional tests are performed on the new version of the application.
- Finally, the commit is transferred to the production environment.

\![\]\[images/3-12.png\]{:height="280px" }

The practice of automatically transferring every software commit that passes CI, i.e., every version pushed to version control, to the staging server and, after automated acceptance testing there, to production is called continuous deployment.

There are situations where you do not want every commit to be automatically deployed to production. If the final step, i.e., deployment to production, is only performed by a human being \"pressing a button,\" this is referred to as continuous delivery.

Recently, large-scale web services (e.g., Google, Amazon, Netflix, Facebook) have begun to favor a style in which new versions of software are released into production up to \[dozens or hundreds\]\[https://dzone.com/articles/release-frequency-a-need-for-speed\] of times a day. In Finland, this practice is used by, among others, \[Smartly\]\[https://www.smartly.io/\], which employs many TKT students.

## Exploratory testing

In order to make the system so error-free that it can be put into production, testing must be carried out very thoroughly. The traditional way of performing system testing has been based on a thorough test plan prepared before testing. The test inputs and expected results are recorded for each test. The test results are checked by comparing the system\'s performance with the expected results recorded in the test case.

The nature of automated acceptance tests is exactly the same: the inputs and expected results for each test are precisely defined in advance. If testing is carried out solely with pre-planned tests, no matter how carefully considered they may be, it is impossible to anticipate all unexpected situations.

Good testers have always done informal \"ad hoc\" testing in addition to \"official\" documented testing. In recent years, \"ad hoc\" testing has gained official status, and its structured form has come to be known as *exploratory testing*.

The developer of the concept, Cam Kaner (http://www.satisfice.com/articles/what_is_et.shtml), defines the term as follows

> *exploratory testing is simultaneous learning, test design, and test execution*

The idea is that the tester guides their actions based on the reactions caused by the tests they perform. Test cases are not planned comprehensively in advance; instead, the tester tries to find errors in the system based on their experience and the tests and experiments they have performed.

However, exploratory testing is not entirely random; each test session has a specific goal, i.e., which parts or functionalities of the application are to be explored and what kinds of errors are to be sought.

In agile software development, the goal can be structured around one or more functionalities defined by user stories. For example, in an online store, adding and removing items from the shopping cart could be tested.

The key to exploratory testing is to observe everything that happens in the software being tested. In normal, predefined tests, the only thing that is observed is whether the system reacts in the expected, predefined manner. In exploratory testing, attention is also paid to things outside the actual functionality being tested.

For example, if the URL https://www.verkkokauppa.com/ostoskori?id=10 is noticed in the browser\'s address bar, one could try to manually change the shopping cart ID and attempt to destabilize the system.

It is advisable to eliminate the recurrence of errors found through exploratory testing by adding appropriate automatic regression tests to the program. Exploratory testing should not be used as a regression testing method, but should primarily be used to test new features implemented during a sprint.

Exploratory testing is by no means an alternative to normal, precisely defined and automated tests, but rather a complementary form of testing.

## Testing and quality management in production

Traditionally, it has been thought that testing related to software quality management should be performed before the software or its new functionalities are put into use, i.e., transferred to the production environment. Recently, particularly in web application development, there has been a trend toward performing part of quality management by monitoring software in production.

\![\]\[images/3-13.png\]{:height="330px" }

### Blue-green deployment

One technique for testing in production is \[blue-green deployment\]\[https://martinfowler.com/bliki/BlueGreenDeployment.html\], where the principle is to maintain two production environments (or servers) in parallel, often referred to as blue and green.

Only one of the production environments is actively used by software users. A component between the users and the production servers, such as a web server acting as a reverse proxy (shown as a router in the figure), directs user traffic to the active environment.

When a new feature is implemented in the system, it is first deployed to the passive environment.

\![\]\[images/3-14.png\]{:height="220px" }

Various tests can then be performed on the passive environment containing the new feature, e.g., some of the user traffic can be directed to the passive environment in addition to the active environment to ensure that it works as expected.

Once the passive environment containing the new feature has been verified to be working without problems, the roles of the servers can be switched, and the server containing the new feature becomes the new active production environment. The active production environment is switched by configuring a web server acting as a reverse proxy to direct traffic to the new server.

If any problems are detected in the version containing the new feature after activation, it is possible to perform *a rollback operation* very quickly, i.e., switch the old version back to active.

It is appropriate that all tests related to blue-green deployment, verification of their results, switching of the production environment, and possible rollback are performed automatically.

### Canary release

In a slightly more advanced version of blue-green deployment \[canary release\]\[https://martinfowler.com/bliki/CanaryRelease.html\], a portion of the users, e.g., 5% of the system users, are directed to the environment containing the new feature:

\![\]\[images/3-15.png\]{:height="220px" }

The version containing the new feature is actively monitored, and if no problems arise, all traffic is gradually directed to the new version. As in the case of blue-green deployment, in the event of problems, users are returned to the previous version that has been proven to work.

Ensuring that the new version works is therefore based *on system monitoring*. In the case of a social media service, for example, monitoring could include checking:

- service memory and processor time consumption, and network traffic volume
- response times for different pages of the application, i.e., the time it takes to load
- the number of logged-in users
- the number of messages read and sent per user
- the time spent by logged-in users in the application

In addition to the general functionality of the server, monitoring should therefore also track *user-level metrics* (business level metrics). If differences from previous metrics are noticed, e.g., logged-in users are not sending the same average number of messages as before, it can be assumed that there may be a problem with the new version of the application. In such a situation, a rollback to the old version may be performed and the fault analyzed in more detail.

In connection with canary releases, testing and everything related to production should also be automated.

The name \"canary release\" comes from the practice of miners using canaries to check for toxic gases in mines: if the bird brought into the mine does not die, the air is safe.

### Testing and database in production

In the previous images, separate database servers were marked for the old and new versions of the system.

This is not necessarily the case, and especially in the context of canary releases, both versions of the system usually use the same database:

\![\]\[images/3-16.png\]{:height="200px" }

This, in turn, poses challenges if the new features implemented in the system require changes to the database schema, as canary releases often require both the new and old versions of the database at the same time.

If, for some reason, the new and old versions of the system have to use different databases, the status of the databases must be synchronized in order for the systems to switch seamlessly. Updates made by the application to one database must therefore also be made to the other database, which may already have a changed schema.

### Feature toggle

In the illustration of a canary release, the new and old versions of the system were shown as separate servers. The same can also be achieved using a single server with so-called \[feature toggles\]\[https://martinfowler.com/articles/feature-toggles.html\]. The same thing is also known as a feature flag, conditional feature, and config flag. However, the name feature toggle is becoming established.

The principle of feature toggles is very simple. Conditional statements are added to the code, which are used to redirect some of the traffic to the new implementation under quality control instead of the old one.

For example, in a social media service, a feature toggle could be added to the list of news items displayed to users, which would allow a list of news items generated by a new algorithm to be displayed to users selected on certain criteria:

    def recommended_news_generator(user):
        if is_in_canary_release(user):
            return experimental_recommendation_algorithm(user)
        else:
            return recommendation_algorithm(user)

In Part 2 \[Lean startup\]\[part2/#requirements-specification-in-the-2010s\], A/B testing is usually implemented using feature toggles.

Canary releases and A/B testing are not the only applications for feature toggles; they are also commonly used to eliminate the need *for* long-lived *feature branches*. Instead of implementing new features in a separate version control branch, which is merged into the main development branch when the features are completed, new features are implemented directly in the main development branch but hidden from users with feature toggles.

In practice, feature toggles always restore the old version for normal users. Application developers and testers, on the other hand, can choose which version the feature toggle restores. When a feature is ready to be tested by a wider group, it can be released using a feature toggle, for example, for the developer company\'s own use and eventually to some users as a canary release. Eventually, the feature toggle and the old implementation can be removed from the code.

Large internet services such as Facebook, Netflix, Google, and Flickr widely apply a development model based on canary releases and feature toggles.

### Feature branches and merge hell

The previous chapter mentioned \[feature branches\]\[https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow\]. This is a practice where new features, such as functionality required by a user story, are first implemented in their own version control branch, and once the feature is complete, the branch is merged into the main development branch (e.g., master).

Many consider feature branches to be best practice in version control. Recently, however, many circles have begun to view feature branches as a bad practice, as they can easily lead to serious merge conflicts, especially if the branches are long-lived.

The result is a small-scale integration hell, *merge hell,* and a typical day for the development team, especially at the end of a sprint, begins to resemble the following

\![\]\[images/3-18.png\]{:height="80px" }

A recent trend has emerged called \[trunk-based development\]\[https://trunkbaseddevelopment.com/\], where long-lived feature branches are not used at all.

All changes are made directly to the main development branch, which is called *the trunk*. The main development branch can be master or a separate branch, depending on the practices. If necessary, *a* separate *release branch* may be created for each released version of the software.

Trunk-based development forces application developers to make small changes that can be quickly merged into the main branch. Trunk-based development is often combined with feature toggles. This makes it easy to program semi-finished features directly into the main branch and export them to the production environment without disrupting the existing functionality of the application.

The trunk-based development model requires application developers to be particularly disciplined and systematic. Despite all its problems, working with feature branches is a safer approach for beginners or less disciplined developers. Careless use of feature toggles can lead to feature toggle hell, so planning and systematicity are indeed necessary.

Many of the world\'s largest internet services, such as Google, Facebook, and Netflix, follow a trunk-based development model. Feature toggles are a great way to manage features in a development environment.

## DevOps

The application of continuous delivery, continuous deployment, and testing in production is usually not straightforward.

Traditionally, companies have made a clear distinction between application developers (dev) and system administrators (ops) responsible for server environments. It is very common for application developers to be unable to even log in to production servers, and for the deployment of applications and, for example, schema updates to the production database to be carried out solely by administrators.

In such an environment, it is almost impossible to practice continuous deployment, for example, and the situation easily leads to a situation where new versions can only be deployed to the production server rarely, for example, only four times a year.

More flexible operating models for deploying new features require a completely different culture, one in which developers (dev) and maintenance (ops) work in close collaboration. For example, application developers must be given the necessary access to the production server, or the Scrum team must include people responsible for server maintenance and operation. The operating model in which developers and maintainers, i.e., *dev* and *ops people,* work closely together is called \[DevOps\]\[https://en.wikipedia.org/wiki/DevOps\].

DevOps is a term that is widely used today. For example, job advertisements may value DevOps skills or even seek people for a DevOps team. There are also a wide variety of DevOps tools available for purchase. However, it is somewhat unclear what each person means by the term DevOps.

Most (sensible) definitions of DevOps refer specifically to a collaborative working and communication method between developers and system administrators, which aims to make the deployment of application development achievements as smooth as possible. For this reason, it is appropriate to talk about DevOps culture.

There are a number of conceptual and technical tools that are often associated with DevOps-style working, such as

- automated testing
- continuous deployment
- virtualization of computing and storage capacity
- containerization (docker)
- infrastructure as code
- cloud-based servers and application environments (PaaS, IaaS, SaaS)

Many of the above have only been developed in the last 5-10 years, making DevOps easier to implement.

One of the most important factors enabling DevOps has been the increasing shift from physical servers to virtual and cloud-based servers. Gradually, \"server hardware\" has also begun to be defined using configuration files that are processed by code. This phenomenon is referred to as \[infrastructure as code\]\[https://en.wikipedia.org/wiki/Infrastructure_as_code\].

The automated, software-based management of servers, storage capacity, and network configurations has become increasingly common. Server configurations can be stored in version control and even tested. Application development and maintenance have started to resemble each other more than in the old (bad) days. This trend has led to application developers gradually being required to have skills that were previously clearly the responsibility of system administrators.

However, implementing tools is not enough; DevOps is fundamentally about cultural factors, team structures, and allowing things to happen.

One of the most important principles of Scrum and agile methods is to make development teams *\"cross-functional*,*\"* meaning that they contain all the expertise needed to complete user stories at the quality level defined by the definition of done. DevOps is a way to take agility one step further, enabling agile teams to be truly cross-functional and able to effortlessly bring their new features to the production environment and even test and operate them in production.

One of the best definitions of DevOps is by Daniel Storey:

\![\]\[images/3-19.png\]{:height="750px" }

## Summary -- the four quadrants of agile testing

The field of agile testing can be structured using the \[Agile Testing Quadrants\]\[http://lisacrispin.com/2011/11/08/using-the-agile-testing-quadrants/\] diagram, originally created by Brian Maric.

\![\]\[images/3-20.png\]{:height="400px" }

Agile testing methods can therefore be divided into four categories (Q1\...Q4) based on the following dimensions:

- business facing vs. technology facing, whether testing focuses on the functionality experienced by the user or more on the details of the internal functionality of the software
- supporting team vs. critique to the product, whether the role of testing is to support application developers or to ensure the external quality of the application

Tests can largely be automated, but exploratory testing and user acceptance testing, for example, are manual tasks by nature.

All \"quarters\" have their own role and place in agile software development, and it is largely context-dependent in what proportion the resources available for testing and quality management should be allocated to each quarter.

The diagram is a bit old, originally from 2003, so it does not yet include the concept of testing in production.

## Final conclusions on testing and quality management

The points presented in this chapter are partly my own opinions on testing, based on experience and literature.

In agile methods, the main theme is creating value for the customer, and this should also be used as a guideline when assessing what and how much should be tested in a project. Testing has no intrinsic value, but not testing will soon begin to undermine the quality of the product too much and slow down the pace of development in a radical way. In any case, testing and quality control must be done extensively and repeatedly, which is why test automation is usually profitable in the long run.

Test automation is neither cheap nor easy. Automated tests performed incorrectly, at the wrong time, or at the wrong \"level\" can cause more harm and incur more costs than they bring benefits. Tests performed via the user interface pose a particularly high risk.

If the software contains components that may soon be removed or replaced, it is usually best not to automate their testing. For example, [the MVP (Minimal Viable Product)](osa2.md#vaatimusm%C3%A4%C3%A4rittely-2010-luvulla) presented in Part 2 is a stripped-down implementation that is used to quickly determine whether a feature is valuable to users at all. If the feature implemented by the MVP proves to be unnecessary, it is removed from the system. It is therefore usually wise to implement a feature based on the MVP principle without automating the tests.

However, the problem is that a component intended for single use may remain in the system for a long time, sometimes even permanently, because there is \"no time\" to implement it properly.

When creating completely new software or components, it usually makes sense to let the program structure stabilize first and perform more comprehensive tests later. However, it is important to keep the testability of components in mind at all times, even if they are not tested immediately.

TDD as defined in textbooks is rarely applied. However, TDD can sometimes be a useful tool, for example when developing interfaces for which there are no components yet. The tests are done with the same effort as the \"main program\" that uses the code.

It is not advisable to perform comprehensive unit tests for all classes in a program; often, the alternative is to perform integration-level tests against the interfaces of the program\'s larger components. Such tests are more likely to remain valid when the internal structure of the components changes. Unit testing is most useful when testing classes that contain complex logic.

Although system-level tests performed through the user interface are risky due to possible changes in the user interface, they are often the most useful form of testing because, unlike unit tests, for example, they test the application as a whole (i.e., end to end).

It is advisable to write as many automated tests as possible, especially for the interfaces of system components that are frequently modified. Tests performed through the user interface too early in the project may cause an unreasonable amount of maintenance work, as the tests are easily broken by even minor changes to the user interface. In other words, it is important to be careful about when to start automated testing through the user interface.

Test cases should resemble the actual usage scenarios of the component being tested as closely as possible. There is no point in performing tests that only increase test coverage.

Test cases should use data that is as realistic as possible, especially in system-level tests. This is because something almost always breaks in the code when real data is used, regardless of how well the testing has been performed. It is best if the staging environment uses the same data as the production environment.

My own view on testing is slightly different and even somewhat contrary to the so-called \[testing pyramid\]\[https://martinfowler.com/articles/practical-test-pyramid.html#TheTestPyramid\], i.e., Mike Cohen\'s idea that most tests should be unit tests because they are easy to write and quick to execute. End-to-end tests, which test the system as a whole, are slow, difficult to perform, and prone to breaking due to small changes, so their number should be kept to a minimum:

\![\]\[images/3-23.png\]{:height=\"300px\"}

Cohen\'s pyramid idea is quite old, and not everyone agrees with it. Opinions vary \[widely\]\[https://laredoute.io/blog/the-traditional-test-pyramid-pitfalls-and-anti-patterns/\], and it is certainly true that there is no single truth on the matter. As I mentioned earlier, automated tests performed at the wrong \"level\" at the wrong time are a major risk, and because system-level testing is very labor-intensive, there is always a risk of wasted investment.

The most important thing for application quality management is definitely to deploy to production as often as possible. This requires a well-built deployment pipeline, sufficiently comprehensive test automation, and is made much easier if the trunk-based development principle is used instead of feature branches. I strongly recommend deploying to production as often as possible, even several times a day. This usually ensures that no serious integration problems arise and that any regressions in the application are detected and corrected as quickly as possible.

## Scientific evidence

There is plenty of anecdotal evidence on the effectiveness of the continuous release and quality management practices presented above, and academic research has also been conducted on many aspects. The fact that highly successful organizations such as Google, Netflix, Amazon, and Facebook rely on these practices, and in some cases have even developed them, speaks for themselves.

The most convincing and scientifically sound view to date is provided in the 2018 book \[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations\]\[https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339\], published in 2018, which reports on an extensive survey conducted between 2013 and 2017 based on over 20,000 responses.

The research results have also been published in high-level peer-reviewed forums. The results relevant to this section are discussed, for example, in \[Forsgren, Humble: The Role of Continuous Delivery in IT and Organizational Performance\]\[https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2681909\].

The results of the study are summarized in the following chart:

\![\]\[images/3-24.png\]{:height="400px" }

The core of the study is to determine which factors contribute to the effective operation of a company, referred to as *organizational performance* in the figure. In the survey, the effectiveness of a company was measured using the following questions:

*Select the number that best indicates the degree of conformance to your organization\'s goals over the past year. (1=Performed well below, 7 = Performed well above)*

- Overall organizational performance
- Overall organizational profitability
- Relative market share for primary products
- Overall productivity of the delivery system Increased number of customers
- Time to market
- Quality and performance of applications

On the left side of the image are the practices employed by companies: version management, test automation, continuous integration, and automation of production delivery, i.e., \"DevOps\" practices, which form the core of continuous delivery. The use of these practices in the respondent organizations was also measured in the survey on a scale of 1-7.

The study found a significant correlation between the use of DevOps practices and the efficient operation of the company. An interesting \"by-product\" of the intensive use of these practices is also higher job satisfaction and fewer burned-out employees.

The image above is from an article published in 2016. At this stage, Forsgren and his colleagues\' research focused on how technical DevOps practices affect a company\'s efficiency.

Since then, the focus of the research has been expanded to include corporate management practices, most of which are related to the Lean philosophy, which is our topic \[in part 5\]\[part5/\].

Additional practices related to organizational efficiency have also been identified, including trunk-based development and monitoring of applications in production.

The following image, taken from the book Accelerate, visualizes how different practices contribute to a company\'s efficiency:

\![\]\[images/3-26.png\]{:height="500px" }