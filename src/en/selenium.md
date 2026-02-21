>\>\>

The tasks below are a continuation of the task related to the third round of the robot library. No points are awarded for these tasks, but the material may be useful for the mini-project.

### Debugging Robot Framework tests

It is likely that problems will arise during testing that are not trivial to solve. In the event of a failed test case, it is worth considering the possible reasons:

- Is there a fault in the test, i.e., is the application working as it should? You can, for example, test the functionality of the application manually. If this is the case, focus on fixing the test.
- Is the fault in the application, i.e., does the manually tested application work as it should? If so, focus on examining the program\'s performance in the failed test case

Next, let\'s look at techniques that make it easier and faster to hunt down bugs.

#### Limiting the number of tests to be performed

When you encounter a failed test case, it is a good idea to speed up test execution by running only the failed test case. If the test case `is Login With Correct Credentials`, we can run only that test case with the following command:

    robot -t "Login With Correct Credentials" src/tests/login.robot

The `robot `command is given the name of the test case to be executed via the -t option and the file where the test case is located.

#### Monitoring program execution

If manual testing alone does not yield results, it is worth investigating how the program is running. First, we need to narrow down where the problem might be. For example, if the` Login With Correct `Credentials test case fails, the problem is probably in the `check_credentials `method of the UserService class. We can stop the program execution at the desired line using the \[pdb\]\[https://docs.python.org/3/library/pdb.html\] module:

    # ...
    # The necessary modules must be imported into the file to be debugged
    import sys, pdb

    class UserService:
        def __init__(self, user_repository):
            self._user_repository = user_repository

        def check_credentials(self, username, password):
            # stop program execution at this line
            pdb.Pdb(stdout=sys.__stdout__).set_trace()

            if not username or not password:
                raise UserInputError("Username and password are required")

            user = self._user_repository.find_by_username(username)

            if not user or user.password != password:
                raise AuthenticationError("Invalid username or password")

            return user

        # ...

The program can be stopped by calling the `set_trace `method of the Pdb class. In order for the output to be visible during the execution of the tests, the value of the `stdout `argument of the class constructor must be set to `sys.__stdout__`. For this purpose, in addition to the pdb module, the sys module must be imported into the file to be debugged, which is done in the example with the line` import sys, pdb`.

Now restart the program so that the changes to the code take effect. Then run only the` Login With Correct Credentials `test case as described above. When the test case execution reaches the check_credentials method call, the code execution stops and the following command line appears on the command line running the server:

    -> if not username or not password:
    (Pdb)

This is an interactive command line where we can execute code. The arrow (`->`) points to the next line of code to be executed. Let\'s use the command line to see what the values of the `username `and `password `variables are:

    (Pdb) username
    'kalle'
    (Pdb) password
    'kalle123'
    (Pdb)

So, we enter the input into the command line and press Enter. We continue executing the code by entering `next()`. The code has skipped the if statement (because the variables had values) and is now executing the line `user = self._user_repository.find_by_username(username)`:

    -> user = self._user_repository.find_by_username(username)
    (Pdb)

Execute the line by entering `next() `again and print the value of the user variable:

    -> if not user or user.password != password:
    (Pdb) user
    <entities.user.User object at 0x10f7a55e0>

When you have finished debugging, enter `exit() `and remove the call to the set_trace method from the code.

### WebLogin

Let\'s examine an example project that provides the functionality familiar from the previous task, which can be found in the \[course repository\]\[{{site.python_exercise_repo_url}}\] directory in the *week3/web-login* project. The application is implemented using a minimalist web application framework called \[Flask\]\[https://flask.palletsprojects.com/\].

Download the project and copy it to your repository, inside the *week3* directory.

Install the project dependencies with the command `poetry install `and start it in the virtual environment with the command `python3 src/index.py`. Once the application has started, you can use it by opening the address <http://localhost:5001> in your browser:

\![\]\[images/lh3-web1.png\]{:height="200px" }

The application runs *on localhost*, i.e., on your local machine *on port* 5001.

The structure of the application is roughly the same as in tasks 2 and 3. The exception is the main program, which contains code that handles HTTP requests made by the browser. At this stage, it is not necessary to know the code that handles HTTP requests in great detail. However, let\'s take a quick look at what it is.

Requests to the path \"/\", i.e., the root of the application, at the address <http://localhost:5001> are handled by the following code snippet:

    @app.route("/")
    def render_home():
        return render_template("index.html")

The code uses the \[Jinja\]\[https://jinja.palletsprojects.com/\] library to generate an HTML page from the page template found in the *src/templates/index.*html file and returns it to the user\'s browser.

The page template looks like this:

    {% raw %}{% extends "layout.html" %} {% block title %} Ohtu Application {%
    endblock %} {% block body %}
    <h1>Ohtu Application</h1>

    <ul>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register new user</a></li>
    </ul>
    {% endblock %}{% endraw %}

All GET-based definitions are similar; they only generate an HTML page (whose content is defined by page templates located in the *src/templates* directory) and return the page to the browser.

Definitions beginning with POST are more complex; they process information sent via forms. For example, the following code processes a user\'s login attempt:

    @app.route("/login", methods=["POST"])
    def handle_login():
        username = request.form.get("username")
        password = request.form.get("password")

        try:
            user_service.check_credentials(username, password)
            return redirect_to_ohtu()
        except Exception as error:
            flash(str(error))
            return redirect_to_login()

The code accesses the data submitted by the user via *the form* through the request object:

    username = request.form.get("username")
    password = request.form.get("password")

The code checks the validity of the username and password by calling the `check_credentials `method of the UserService class. If the login is successful, the user is redirected to the \"/ohtu\" path page. If the login fails, the check_credentials method raises an error, which we handle in the `except `block by redirecting the user to the \"/login\" path and displaying the error message there.

**Now familiarize yourself with the structure and functionality of the application.** You can shut down the application by pressing `ctrl+c `or `ctrl+d `on the command line.

#### Note for Docker users

If you have used [containerized Poetry,](poetry.md#poetry-ja-docker) you will need to do a few extra steps in this section.

Instead of the image \[mluukkai/poetry\]\[https://hub.docker.com/repository/docker/mluukkai/poetry\], use the image \[mluukkai/poetry-robot\]\[https://hub.docker.com/repository/docker/mluukkai/poetry-robot/\]. The image only works on machines with Intel processor architecture, so M1 users will have to find another solution\...

In order for the web application running in the container to be visible to the host machine, when starting the container, the container\'s port 5001 (where the application runs) must be published to the host machine\'s port. This is done as follows:

    docker run -it -p 5001:5001 --volume="$PWD:/mydir" mluukkai/poetry-robot

Robot tests are performed by using the `docker exec `command to go to the same container where the application is already running:

    docker exec -it containerID bash

The container ID can be found with the `docker ps `command.

Unfortunately, the tests only work in headless mode, which you can enable as described at the beginning of \[task 7\]\[tasks3/#7-web-application-testing-part-3\].

It is also possible to run the tests with the browser displaying the tests. However, this requires some additional configuration. If you are interested, you can search for information using keywords such as \[linux docker gui apps\]\[https://www.google.com/search?q=linux+docker+gui+apps\].

### Testing a web application, part 1

Let\'s continue with the same application.

**Start the web application from the command line as in the previous task.** Use your browser to verify that the application is running.

The \[Selenium WebDriver\]\[http://docs.seleniumhq.org/projects/webdriver/\] library allows you to simulate browser usage from code. Selenium can be used in Robot Framework tests with the help of the ready-made \[SeleniumLibrary\]\[https://robotframework.org/SeleniumLibrary/\] library.

In order to run tests that use a browser, you must also install the driver for the desired browser. The project tests use the Chrome or Chromium browser, which can be run using the \[ChromeDriver\]\[https://chromedriver.chromium.org/\] driver, or Firefox, which can be run using \[Geckodriver\]\[https://github.com/mozilla/geckodriver\].

**Before you start testing, install ChromeDriver** or **Geckodriver** by following [these](../chromedriver_asennusohjeet.md) instructions. ChromeDriver may already be installed on your laptop. You can check this with the command `chromedriver --version`

Once ChromeDriver or GeckoDriver has been successfully installed, **open a new terminal window** and run the project tests in a virtual environment with the command `robot src/tests`. Note that the web application must be running in another terminal window. The command should successfully run two test cases, `Login With Correct Credentials `and `Login With Incorrect Password`. You can follow the execution of the test cases in the browser window that opens.

#### Problems?

The following error message indicates that you are running tests without the application being open:

    [ ERROR ] Error in file '/.../week3/web-login-robot/src/tests/resource.robot'
    on line 3: Initializing library 'AppLibrary' with no arguments failed:
    ConnectionError: HTTPConnectionPool(host='localhost', port=5001):
    Max retries exceeded with url: /tests/reset (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f459e7c4280>:
    Failed to establish a new connection: [Errno 111] Connection refused'))

The tests assume that the application is running. So, start the application in one terminal, open a new one, and run the tests there.

**As a Windows 10 / WSL2 user**, you may encounter the following error message:

    Suite setup failed:
    WebDriverException: Message: unknown error: Chrome failed to start: crashed.
      (unknown error: DevToolsActivePort file doesn't exist)
      (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)

\[These instructions\]\[chromedriver_installation_instructions/#possible-problems\] may help.

#### Getting to know the tests

Let\'s start by looking at the common settings and keywords for test cases, which can be found in the *src/tests/resource.robot* file. The file contains the following:

    *** Settings ***
    Library  SeleniumLibrary
    Library  ../AppLibrary.py

    *** Variables ***
    ${SERVER}  localhost:5001
    ${DELAY}  0.5 seconds
    ${HOME_URL}  http://${SERVER}
    ${LOGIN_URL}  http://${SERVER}/login
    ${REGISTER_URL}  http://${SERVER}/register

    *** Keywords ***
    Open And Configure Browser
        # if you are using Firefox and Geckodriver, use the following line instead of the one below
        # ${options}  Evaluate  sys.modules['selenium.webdriver'].FirefoxOptions()  sys
        ${options}  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys
        Call Method    ${options}    add_argument    --no-sandbox
        # The following line is commented out at this stage
        # Call Method  ${options}  add_argument  --headless
        Open Browser  browser=chrome  options=${options}
        Set Selenium Speed  ${DELAY}

    Login Page Should Be Open
        Title Should Be  Login

    Main Page Should Be Open
        Title Should Be  Ohtu Application main page

    Go To Login Page
        Go To  ${LOGIN_URL}

`*** Settings *** `section uses the project\'s own `AppLibrary.py `library and the aforementioned SeleniumLibrary library. The SeleniumLibrary library introduces numerous new keywords, all of which are documented \[here\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html\].

The file also contains a previously unknown section `called *** Variables ***`, where you can define variables that can be used by all keywords in the section. Note that defined variables are written in capital letters, unlike arguments. Variables should always be preferred over hard-coded values.

**NOTE** Firefox/Geckodrivers need to make a small change to the file, see comments!

The` *** Keywords *** `section defines general keywords:

- The` Open And Configure Browser `keyword launches the browser using the SeleniumLibrary library \[Open Browser\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Open%20Browser\] keyword, giving the browser argument the value of the browser used, i.e. *Chrome*, which is also given an *options* parameter that defines its behavior, but which does not actually do anything at first.

In addition, the keyword sets a delay between Selenium commands using the value of the DELAY variable with the \[Set Selenium Speed\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Set%20Selenium%20Speed\] keyword. A longer delay makes it easier to follow the execution of the tests. If necessary, the size of the browser window can be set using the keyword \[Set Window Size\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Set%20Window%20Size\]; the default browser size is currently in use.

The purpose of the keywords `Login Page Should Be Open `and `Main Page Should Be Open `is to verify that the user is on the correct page. They use the keyword \[Title Should Be\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Title%20Should%20Be\], which checks the value of the \[title\]\[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title\] element of the HTML page. Instead of the value of the title element, we could, for example, check that the page contains certain text using the \[Page Should Contain\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Page%20Should%20Contain\] keyword.

- The `Go To Login Page `keyword uses the \[Go To\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Go%20To\] keyword to open the login page in the browser, whose URL is stored in the` LOGIN_URL `variable

Next, let\'s take a look at the test cases themselves by opening the file *src/tests/login.robot*. The` *** Settings *** `section of the file is as follows:

    *** Settings ***
    Resource  resource.robot
    Suite Setup  Open And Configure Browser
    Suite Teardown  Close Browser
    Test Setup  Create User And Go To Login Page

This section contains previously unknown `Suite `Setup, `Suite `Teardown, and `Test `Setup settings. Their meanings are as follows:

- The `Suite Setup `setting allows us to execute a keyword before the first test case of a file. `Test Setup`, on the other hand, is executed before *each* test case.
- The `Suite Teardown `setting allows us to execute a keyword after the last test case in the file. There is also a `Test Teardown `setting that is executed after *each* test case.

The `*** Keywords *** `section of the file contains keywords used by test cases:

- `The Login Should Succeed `keyword checks that the user has been redirected to the correct page after a successful login.
- `The Login Should Fail With Message `keyword checks that the user is on the login page and that a specific error message is displayed on the page. The check uses the \[Page Should Contain\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Page%20Should%20Contain\] keyword, which checks that the desired text is found on the page
- The `Submit Credentials `keyword presses the \"Login\" button using the \[Click Button\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Click%20Button\] keyword
- The` Set `Username and `Set Password `keywords enter the given values into specific fields using the \[Input Text\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Input%20Text\] and \[Input Password\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Input%20Password\] keywords (note that the password field is not a regular text field, but a password field)
- The `Create User And Go To Login Page `keyword creates a user in the application and opens the login page

In test cases, we interact with various HTML elements, such as text fields and buttons. Selenium attempts to find the element based on the given arguments using a \[specific strategy\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Locating%20elements\]. For example, Click Button foo finds the following \[button\]\[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button\] elements:

    <button id="foo">Button</button>
    <button name="foo">Button</button>
    <button>foo</button>

Selenium searches for a button element whose id attribute value, name attribute value, or content matches the given argument. The Click Button Login call finds the following button defined in the *src/templates/login.html* file:

    <button>Login</button>

Similarly, the call Input Text username kalle finds the following input element using the id attribute:

    <input type="text" name="username" id="username" />

**Now create a new file *called home.robot* and add the following test cases to it:**

    *** Settings ***
    Resource  resource.robot
    Suite Setup  Open And Configure Browser
    Suite Teardown  Close Browser
    Test Setup  Go To Starting Page

    *** Test Cases ***
    Click Login Link
        Click Link  Login
        Login Page Should Be Open

    Click Register Link
        Click Link  Register new user
        Register Page Should Be Open

The test cases should therefore test that clicking the \"Login\" and \"Register new user\" links opens the correct page. The links are clicked using the predefined keyword \[Click Link\]\[https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Click%20Link\].

**Implement the keywords used in the test** in the `resource.robot `file. When you run the tests, an error message will tell you which keywords are not defined:

    Click Register Link                                                   | FAIL |
    Setup failed:
    No keyword with name 'Go To Starting Page' found.

**NOTE**: The idea is that the keyword `Go To Starting Page `takes the application to the path /, i.e., the start page.

### Testing a web application, part 2

Let\'s continue with the acceptance tests related to logging in. Before that, let\'s quickly take a look at how the AppLibrary implementation looks. The class that defines the library, `AppLibrary`, can be found in the file *src/AppLibrary.py*, which contains the following:

    import requests


    class AppLibrary:
        def __init__(self):
            self._base_url = "http://localhost:5001"

            self.reset_application()

        def reset_application(self):
            requests.post(f"{self._base_url}/tests/reset")

        def create_user(self, username, password):
            data = {
                "username": username,
                "password": password,
                "password_confirmation": password
            }

            requests.post(f"{self._base_url}/register", data=data)

The implementation of the library differs somewhat from the implementation of the library in the previous project, which utilizes the command line. The difference is that in this project, the tests and the application itself are run in different processes, so the tests cannot directly change the state of the application. However, we can change the state of the application using HTTP calls with the familiar requests library.

`The reset_application `method sends a POST request to the application path \"/tests/reset\". The request is handled by the following function:

    @app.route("/tests/reset", methods=["POST"])
    def reset_tests():
        user_repository.delete_all()
        return "Reset"

The function deletes all users from the application, thereby resetting the application state.

Similarly, the `create_user `method sends a POST request to the application path \"/register\". The function that processes the request creates a new user if it is valid:

    @app.route("/register", methods=["POST"])
    def handle_register():
        username = request.form.get("username")
        password = request.form.get("password")
        password_confirmation = request.form.get("password_confirmation")

        try:
            user_service.create_user(username, password, password_confirmation)
            return redirect_to_welcome()
        except Exception as error:
            flash(str(error))
            return redirect_to_register()

**Add** the following test case to the *login.robot* file for the User story *User can log in with valid username/password combination*:

    Login With Nonexistent Username
    # ...

### Testing a web application, part 3

Next, let\'s make a couple of changes to speed up the execution of the tests. First, set the DELAY variable in the *resource.robot* file to` 0`. Then, enable the \[Headless Chrome\]\[https://developers.google.com/web/updates/2017/04/headless-chrome\] variant of the Chrome browser. Headless browsers are useful, for example, in automated tests where the browser user interface is not necessary.

Headless Chrome can be enabled by removing the comment mark at the beginning of the *Call Method* line from the *Open And Configure Browser* definition, i.e., by changing the definition to the following format:

    *** Keywords ***
    Open And Configure Browser
        ${options}  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys
        Call Method    ${options}    add_argument    --no-sandbox
        Call Method  ${options}  add_argument  --headless
        Open Browser  browser=chrome  options=${options}
        Set Selenium Speed  ${DELAY}

**Make changes and run tests.**

**NOTE:** Headless Chrome makes debugging tests difficult because the browser interface is not visible. If the test case fails, a file named *selenium-screenshot-\*.png* will appear in the project root directory, showing the contents of the browser window at the time of the error. If this information is not sufficient, you can return to \"normal\" Chrome for debugging (by commenting out the Call Method line) and changing the value of the DELAY variable.

For the user story *A new user account can be created if a proper unused username and a proper password are given*, create the following test cases in the *register.*robot file:

    Register with a valid username and password
    # ...

    Register with too short username and valid password
    #

    Register with valid username and invalid password
    # password does not contain the desired characters
    # ...

    Register With Nonmatching Password And Password Confirmation
    # ...

**NOTE**: Perform one test case at a time. When coding a test case, it is recommended to only perform the test case you are working on \[here\]\[tasks3/#robot-framework--debugging-tests\] according to the instructions, and it is recommended to use normal Chrome instead of headless at first so that you can see how the test case progresses.

The username and password follow the same rules as *in task 5*, i.e.:

- The username must be a string of at least 3 characters consisting of letters a-z that is not already in use.
- The password must be at least 8 characters long and cannot consist solely of letters.

**Extend your code so that the tests pass.** The correct place for code changes is the `validate `method of the UserService class in the src/services/user_service.py file.

**Remember to restart the web server when you make changes to the code!** Shut down the server by pressing `Ctrl+C `in the terminal window where the web server is running. Then restart the server with the command `python3 src/index.py`.

### Testing the web application, part 4

For the user story *A new user account can be created if a proper unused username and a proper password are given*, add the following test cases to *the register.robot* file:

    Login After Successful Registration
    # ...

    Login After Failed Registration
    #

The first test case should test that the user *can log in* after successful registration. Since the user logs in automatically when created, the test should log out and then verify that the new login is successful.

In the second test case, you should test that the user *cannot log in* after unsuccessful registration.

Tip: If you wish, you can implement a login_resource.robot file that defines the keywords used for logging in. You can use the keywords in this file in both the login.robot and register.robot files by adding a new resource to the` *** Settings *** `section:

    *** Settings ***
    Resource  resource.robot
    Resource  login_resource.robot

**Heads up:** remember that the same username can only be created once. In this task, you may encounter a situation where the creation of a username fails if you try to create a username with the same name as one that has already been created in a previous test. The best solution to this problem would be to reset the database before each test. Of course, creating a username with a different name is also a valid solution in this task.

### Running web application tests on a CI server

**NOTE:** The following section is not part of the tasks, so you do not need to do anything with the examples presented there. However, the instructions may be useful, for example, [in the](miniprojekti.md) course [mini-project](miniprojekti.md).

In the previous tasks, you probably first started the Flask server in one terminal window and then ran the tests in another terminal window. Finally, when the tests were complete, you could shut down the server.

In order to run the application tests on a CI server, these steps must be expressed as command line commands. For this purpose, we can use the following bash script, for example:

    #!/bin/bash

    # start the Flask server in the background
    poetry run python3 src/index.py &

    # wait for the server to be ready to accept requests
    while [[ "$(curl -s -o /dev/null -w ''%{http_code}'' localhost:5001/ping)" != "200" ]];
      do sleep 1;
    done

    # run tests
    poetry run robot src/tests

    status=$?

    # stop Flask server on port 5001
    kill $(lsof -t -i:5001)

    exit $status

The script can be added, for example, to the run_robot_tests.sh file in the project\'s root directory. After that, it can be executed in the project\'s root directory with the command `bash run_robot_tests.sh`. Note that the command uses Unix commands, so it cannot be executed on a Windows computer without the appropriate command line. However, this is not a problem on a CI server if we choose Ubuntu as the operating system for the virtual machine.

The script can be used on a CI server with GitHub Actions by defining its execution as a separate step in the configuration:

    name: CI

    is:
      push:
        branches: [main]
      pull_request:
        branches: [main]

    jobs:
      build:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v2
          - name: Set up Python 3.8
            uses: actions/setup-python@v2
            with:
              python-version: 3.8
          - name: Install Poetry
            run: pip install poetry
          - name: Setup chromedriver
            uses: nanasess/setup-chromedriver@master
          - run: |
              export DISPLAY=:99
              chromedriver --url-base=/wd/hub &
              sudo Xvfb -ac :99 -screen 0 1280x1024x24 > /dev/null 2>&1 &
          - name: Install dependencies
            run: poetry install
          - name: Run robot tests
            run: bash run_robot_tests.sh

**Please note** that Selenium must be configured to run **in headless mode** when tests are run in GitHub Actions!

### Task submission

Push all the tasks you have completed (except those that mention that the task will not be submitted anywhere) to your GitHub submission repository and mark the tasks you have completed in Timi <https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat>

\<\<\