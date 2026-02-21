>\>\>

\[Robot Framework\]\[https://robotframework.org/\] is an application framework well suited for automating user story acceptance testing. With Robot Framework, user story tests can be written in a format that the customer understands, in natural language, but still be made automatically executable.

Although Robot Framework is traditionally intended for end-to-end testing of entire software applications, we will first examine the operating principles of Robot Framework by testing a single class. Search for the project located in the \[course repository\]\[https://github.com/ohjelmistotuotanto-jyu/tehtavat/tree/main/osa3/hello-robot\] directory *code/week3/hello-robot*.

- Copy the project to your repository, inside the directory *osa3*.

The test is a simple counter:

    class Counter:
        def __init__(self, initial_value=0):
            self.initial_value = initial_value
            self.value = initial_value

        def increase(self):
            self.value = self.value + 1

        def increment(self, amount):
            self.value = self.value + amount

        def decrease(self):
            self.value = self.value - 1

        def reset(self):
            self.value = self.initial_value

A few tests have been implemented for the counter using Robot Framework in the increase_counter.robot file in the src/tests directory. Review the contents of the file and consider whether understanding the test scenarios requires special technical expertise from the reader, for example, compared to unit tests.

Robot Framework can be used with Python using the \[robotframework\]\[https://pypi.org/project/robotframework/\] library, which is defined as a dependency of the project. Deploy the project by installing its dependencies with the `poetry install `command. Then run the tests by switching to the virtual environment with the `poetry shell `command and executing the `robot src/tests `command there.

After the tests have been run, a short report on the test results appears in the command line. In addition to this report, a more detailed HTML report appears in the *report.*html file in the project\'s root directory. Clicking on the report opens a convenient view of the test results:

\![\]\[images/lh3-robot.png\]

### Expressing requirements

The desired functionality of the counter is described by the following user stories

- As a user, I want to be able to increase the counter value
- As a user, I want to be able to set the counter to zero

At the core of Robot Framework testing are keywords. A keyword is a plain language explanation of a specific task. For example, one very important keyword for testing the counter is `Increase Counter`, which can be used to increase the counter value. Keywords can also have arguments, which make them reusable. An example of a keyword with arguments could be `Counter Value Should Be`, which checks that the counter value corresponds to the value of the argument.

Keywords are used in so-called test cases, which are tests themselves. Test cases have names (like keywords) and execute keywords in a specific order. For example, a test case for increasing the counter could be as follows:

    *** Test Cases ***
    Increase Counter Once
        Counter Value Should Be  0
        Increase Counter
        Counter Value Should Be  1

The test case now consists of three keywords. First, check that the counter value is initially zero, then increase the counter, and finally verify that the counter value is one.

Test cases are listed under the` *** Test Cases *** `section. Keywords and test case names are usually written with capital letters and a single space between words. **Leave at least two spaces between arguments** (for example, Counter Value Should Be 0). To easily spot syntax errors, it is a good idea to install a suitable add-on for Visual Studio Code, such as \[Robot Framework Language Server\]\[https://marketplace.visualstudio.com/items?itemName=robocorp.robotframework-lsp\] or \[RobotCode\]\[https://marketplace.visualstudio.com/items?itemName=d-biehl.robotcode\]:

\![\]\[images/lh3-robot2.png\]

### Making tests executable

Behind keywords such as `Increase Counter `is the technical implementation of the keyword. These implementations produce so-called libraries. The src directory of the hello-robot project contains the file *CounterLibrary.py*. The file defines the `CounterLibrary `class:

    from counter import Counter

    class CounterLibrary:
        def __init__(self):
            self._counter = Counter()

        def increase_counter(self):
            self._counter.increase()

        def increment_counter_by(self, amount):
            int_amount = int(amount)
            self._counter.increment(int_amount)

        def counter_value_should_be(self, expected):
            int_expected = int(expected)
            if self._counter.value != int_expected:
                raise AssertionError(f"{self._counter.value} != {int_expected}")

The methods of the class in question are implementations of keywords. For example, the `increase_counter `method implements the keyword `Increase Counter `(note that there is no underscore between the keywords, but it is replaced by a space). The class constructor initializes a new Counter class object, whose methods are called by the class methods.

Robot Framework initializes libraries before each test case, so each test case has its own instance of the library. This allows, for example, a new Counter object to be initialized for each test case in the project via the CounterLibrary class constructor.

The `increment_counter_by `method implements the keyword `Increment Counter By`, which has one argument, `amount`. **The values of the arguments are always strings**, so they must be converted to the correct type if necessary, as the method does using the int function:

    def increment_counter_by(self, amount):
        int_amount = int(amount)
        self._counter.increment(int_amount)

Note that all methods whose names do not have the \_ prefix form the implementation of the keyword. If you want to create a method in the library for which you do not want a keyword, name it with the \_ prefix:

    from counter import Counter

    class CounterLibrary:
        def __init__(self):
            self._counter = Counter()

        def _some_helper_method(self):
            pass

        # ...

In order to use the keywords provided by the library in the test file, they must be enabled separately. This can be done in the Settings section:

    *** Settings ***
    Library  ../CounterLibrary.py

    *** Test Cases ***
    Increase Counter Once
        Counter Value Should Be  0
        Increase Counter
        Counter Value Should Be  1

Note that the library path is relative to the file.

You can also import multiple libraries into the file by adding multiple Library lines:

    *** Settings ***
    Library  ../CounterLibrary.py
    Library  ../SomeUsefulLibrary.py

### Combining keywords

In addition to libraries, keywords can also be defined in *.*robot files. This can be done by defining a new keyword under the` *** Keywords *** `section. For example, we can use the keyword `Increase Counter `and implement the keyword `Increase Counter Three Times`, which increases the counter value three times:

    *** Settings ***
    Library  ../CounterLibrary.py

    *** Keywords ***
    Increase Counter Three Times
        Increase Counter
        Increase Counter
        Increase Counter

### Resources

In the` *** Settings *** `section of the increase_counter.robot file in the test directory, you will find the line `Resource resource.robot`. What is this about?

In many tests, it is a good idea to move reusable keywords and settings to their own files, which are called resources. Resource files can be imported for use in other files via the Resource setting:

    *** Settings ***
    Resource  resource.robot

Note that the path to the resource is relative to the file.

You can import multiple resources into a file by adding multiple Resource lines.

### Reset scenarios

Add the file reset_counter.robot to the src/tests directory, which contains acceptance tests related to resetting the counter.

**Add the following test cases to the file:**

    *** Settings ***
    Resource  resource.robot

    *** Test Cases ***
    Reset Counter After One Increment
        Counter Value Should Be  0
        Increase Counter
        Counter Value Should Be  1
        Reset Counter
        Counter Value Should Be  0

    Reset Counter After Several Increments
        Counter Value Should Be  0
        Increment Counter By  5
        Counter Value Should Be  5
        Reset Counter
        Counter Value Should Be  0

Go to the virtual environment with the command `poetry shell `and run the command `robot src/tests `there. The tests fail and the following error appears in the output:

    No keyword with name 'Reset Counter' found.

Robot Framework thus reports that there is no implementation for the keyword `Reset Counter`.

**Next, implement a suitable method in the CounterLibrary class so that the tests pass.**

## Typos in the material

Make [a correction suggestion](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

\<\<\