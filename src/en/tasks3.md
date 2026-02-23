This task introduces you to using Docker, making pull requests, and writing acceptance tests using the robot library.

### Are there any typos or ambiguities in the tasks?

Suggest [corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

### Problems with Poetry?

[Here are](ongelmia.md) some instructions

### Submitting assignments

The container assignment is submitted as a pull request to the repository mentioned in the assignment.

**Robot testing tasks will be returned to the repository** you used in previous weeks, where you created the directory *osa2*. Create a directory *osa3* in the repository and return the task there.

### VS Code configuration

Do you know how to configure VS Code correctly? If not, read \[this\]\[tasks2/#bonus-vs-code-configuration\]!

# Containerization (Docker)

**Containerization** means packing software and its dependencies into a lightweight environment, i.e., a container.\
A container operates in isolation and contains everything an application needs to run.

Containers differ from virtual machines in that they share the host system\'s kernel and are therefore lighter, faster, and easier to manage.

**Key benefits:** - Environment independence\
- Fast deployment and scalability\
- Easy development, testing, and sharing\
- Repeatable and standardized runtime environments

### Docker download instructions

To use Docker, you need to install **Docker Desktop**. **Installation instructions:**\
\[https://www.docker.com/products/docker-desktop/\]\[https://www.docker.com/products/docker-desktop/\]

After installation, make sure that Docker Desktop is running so that Docker commands work.

Check the installation:

    docker --version

# Using Docker

> Learn the basics of Docker with the official documentation: \[Docker Documentation\]\[https://docs.docker.com/get-started/docker-overview/\]. The documentation provides information on commands, Dockerfiles, images, and containers.

**In simple terms** 1. Define the application environment in Dockerfile, what the image contains and how the application is run. 2. Build a Docker image from Dockerfile, a ready-made package of the application. 3. Run the container from the image; the application runs in an isolated, independent environment. 4. Containers can be stopped, deleted, and restarted as needed. The same image works the same way on all platforms, which makes development and testing reliable and repeatable.

\![\]\[images/docker-instructions.png\]

The Operating Systems course covers the functioning of operating systems, and its exercises also include instructions on using Docker. Optional additional material can be found here: \[here\]\[https://itka203.it.jyu.fi/demovedokset/p/\].

## 1. Application run in a container, part 1

Let\'s create a simple Python application and run it in a Docker container.

**Step 1: Creating the application**

Create a folder called hello-docker/ and add the file hello.py:

    from datetime import datetime

    def greeting():
        print("Hello from Docker! The current time is:", datetime.now())

    if __name__ == "__main__":
        greeting()

**Step 2: Create a Dockerfile**

In the same folder, create Dockerfile:

    # Use Python 3.10 base image
    FROM python:3.10

    # Working directory in the container
    WORKDIR /app

    # Copy the program to the container
    COPY hello.py .

    # Define the startup command
    CMD ["python", "hello.py"]

**Step 3: Build and run the container** Open a terminal in the project folder and run:

    docker build -t hello-docker .
    docker run hello-docker

The output should look like this:

    Hello from Docker! The current time is: 2025-10-19 12:34:56.789123

This task will not be graded, but it was good practice :)

## 2. Containerized application part 2

**Objective:** You will receive a small web application (Python + Flask) and instructions on how to run it in a Docker container. In this task, you will practice creating a Dockerfile, building an image, and starting the container locally via a port. In addition, you will learn about the real open source workflow, where changes are made by forking the project, developing a new feature, and proposing it back to the original repository via a pull request.

### Assignment

1.  Create a directory `oma-kontti`/.
2.  Fork \[the task template\]\[https://github.com/ohjelmistotuotanto-jyu/Palautusrepositorio\].
3.  Clone the forked task template
4.  Complete `the Dockerfile`.
5.  Build a Docker image and run the container.
6.  Use your browser to verify that the application responds as expected.
7.  Submit the application as a pull request to the pull request repository.

## Additional information

> **Flask** is a lightweight Python web framework. A Flask application starts a small HTTP server that responds to browser requests. When the application is running (e.g., `python app.py `or in a Docker container), open` http://localhost:PORT` in your browser to see the application page.
>
> The Python dependencies for the project are usually listed in `the requirements.txt `file. In Dockerfile, dependencies are installed during the build phase, for example:

    COPY requirements.txt .
    RUN pip install --no-cache-dir -r requirements.txt

### Build the image

When the Dockerfile is ready, open a terminal in the `oma-kontti/ `directory and run

    docker build -t oma-kontti .

Explanation: - -t : sets a \"tag\" or name for the image (makes it easier to find and refer to the image). - . (dot): build context, i.e., the folder that Docker copies during the build (usually the current folder).

If the build was successful, you will see Successfully built \... and Successfully tagged oma-kontti.

### Run the container

Start the container and redirect host port 80 to container port 80:

    docker run --rm -p 80:80 --name oma-kontti-demo oma-kontti

Explanation: - --rm - Automatically removes the container when it stops. Good for development, as it prevents old stopped containers from remaining. - -p 80:80 - Port mapping: the left part is the host port, the right part is the container port. Here, host port 80 is mapped to container port 80. - The format is HOST_PORT:CONTAINER_PORT. - --name oma-kontti-demo - Sets a human-readable name for the container. Enables commands such as docker stop oma-kontti-demo or docker logs oma-kontti-demo. - oma-kontti - Image name or tag (in this case, the image created earlier).

Open in a browser: http://localhost:80 The header and server time should be visible.

### Run in the background (optional)

If you want to run the container in the background (detached):

    docker run -d -p 80:80 --name my-container-demo my-container

Stop and remove as follows:

    docker stop my-container-demo
    docker rm my-container-demo

### Troubleshooting

If docker build fails: read the error message --- usually a missing file, incorrect requirements entry, or pip error. Try the build command again and check the last few lines.

- The container does not start or crashes immediately:
  - docker ps -a --- check the exit code.
  - docker logs --- check for application errors.
- Port reservation on the host:
  - sudo lsof -iTCP:80 -sTCP:LISTEN -n -P ; if reserved, use another host port (e.g., -p 8080:80).
- General quick fix:
  - stop/remove old container: docker stop && docker rm {name}
  - run with a new port: docker run -p 8080:80 --rm --name temp {image}

View container logs:

    docker logs <container_id_or_name>

### Task recovery

Push to fork and create PR in GitHub:

    git push -u origin my-task
    # then GitHub: Compare & pull request -> select base = original repo

### 3. Introduction to Robot Framework

Read the Robot Framework introduction here and complete the related assignments.

### 4. Login tests

Get the project located in the \[course repository\]\[{{site.python_exercise_repo_url}}\] directory, *section 3/login-robot*.

- Copy the project to your local repository, inside the directory *osa3*.

Familiarize yourself with the structure of the program. The application follows a so-called layered architecture. The application\'s user interface is implemented in `the App class`, and the application logic in the `UserService `class. One noteworthy point is that the UserService object does not store the User object directly, but indirectly through an object of the UserRepository class. What does this mean?

There are several *design patterns* for abstracting operations targeting the data used by the application from the application logic, such as \[Data Access Object\]\[https://en.wikipedia.org/wiki/Data_access_object\], \[Active Record\]\[https://en.wikipedia.org/wiki/Active_record_pattern\], and \[Repository\]\[https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design\]. The fundamental idea behind all of these design patterns is that the application logic should hide the details of operations targeting data.

For example, in the repository design pattern, this means that operations are performed on data objects through various functions or methods, such as `find_all`, `create`, and `delete`. With this abstraction, the application logic is not aware of the details of the operations, making it easy to change the storage method, for example.

The application has a class `called UserRepository`, which is defined according to the repository design pattern. This class stores the application\'s users in memory. If we decided to store users in an SQLite database, for example, this would not require any changes outside the class.

**Install the project dependencies and try running the**` index.`**py file.** The commands known to the program are *login* and *new*.

**Also run the Robot Framework tests related to the project** in a virtual environment using the command `robot src/tests`.

Examine how the Robot Framework tests have been implemented in *the src/tests* directory. Also examine how the keywords have been defined in the AppLibrary class of the *AppLibrary.*py file in the *src* directory. Pay particular attention to how the tests use the StubIO object, which enables testing, to handle user input and program output. The principle is exactly the same as in the example related to dependency injection in the Week 1 assignments.

You may find features in the *.*robot files that you are not familiar with. The *resource.*robot file defines the keyword `Input Credentials`, which has the arguments `username `and `password`:

    Input Credentials
        [Arguments]  ${username}  ${password}
        Input  ${username}
        Input  ${password}
        Run Application

This keyword is used in the *login.robot* file as follows:

    Input Credentials  kalle  kalle123

In addition, there is a new setting, `Test Setup`, in the` *** Settings *** `section of the *login.*robot file. This setting allows us to define a keyword that is executed *before each test case*. In this case, we want to execute the keyword `Create User And Input Login Command `before each test, which creates a new user and gives the application a login command.

\[Here\]\[week3-t2\] provides a little more information about how the tests work.

**Implement** the following test cases for the user story *User can log in with valid username/password combination* in the *login.robot* file:

    *** Test Cases ***
    Login With Incorrect Password
    # ...

    Login With Nonexistent Username
    #

Run the appropriate keywords in the test cases to test the desired case.

### 5. New user registration tests

Add a new test file, *register.robot*, to the test directory. Implement the following test cases for the user story *A new user account can be created if a proper unused username and a proper password are given*:

    *** Test Cases ***
    Register With Valid Username And Password
    # ...

    Register With Already Taken Username And Valid Password
    #

    Register With Too Short Username And Valid Password
    #

    Register with a sufficiently long but invalid username and valid password
    #

    Register with a valid username and too short password
    #

    Register with a valid username and a password that is long enough and contains only letters
    #

- The username must be a string of at least 3 characters consisting of letters a-z that is not already in use. Tip: \[regular expressions\]\[https://www.tutorialspoint.com/python/python_reg_expressions.htm\] and[^1] +\$.
- The password must be at least 8 characters long and *cannot* consist solely of letters.
- Regular expressions can be tried and tested successfully, for example, in the following service: <https://rubular.com/>

You can use Python\'s re module in regular expressions as follows:

    import re

    if re.match("^[a-z]+$", "kalle"):
      print("Ok")
    else:
      print("Invalid")

**Make the test cases executable and complete the program so that the tests pass**. The correct place for changes to the code is the `validate `method of the UserService class in the src/services/user_service.py file.

**Tip 2**: You don\'t necessarily need regular expressions for anything\...

**NOTE 1:** It is best to implement test cases one at a time, fixing the corresponding feature in the program as you go. In other words, **DO NOT** copy and paste the above into the file all at once, but proceed in small steps. If one test case fails, do not start a new one until all problems have been resolved. The next chapter provides a few tips for debugging tests.

**NOTE 2:** It may be useful to implement the keyword `Input New Command `in the *resource.robot* file and the keyword `Input New Command And Create User `in the *register.robot* file, which gives the application a new command and creates a user for testing. It is recommended to execute the keyword before each test case using the` Test Setup `setting.

### Debugging Robot Framework tests

It is likely that problems will arise during testing that are not trivial to resolve. In the event of a failed test case, it is worth considering the possible reasons:

- Is there a fault in the test, i.e., is the application working as it should? You can, for example, test the functionality of the application manually. If this is the case, focus on fixing the test.
- Is the fault in the application, i.e., does the manually tested application work as it should? If so, focus on examining the program\'s performance in the failed test case

Next, let\'s look at other techniques that make it easier and faster to hunt down bugs.

#### Limiting the number of tests to be performed

When you encounter a failed test case, it is a good idea to speed up test execution by running only the failed test case. If the test case `is Login With Correct Credentials`, we can run it with the following command:

    robot -t "Login With Correct Credentials" src/tests/login.robot

The `robot `command is given the name of the test case to be executed via the -t option and the file where the test case is located.

#### Monitoring program execution

If manual testing alone does not yield results, it is worth investigating how the program is running. First, you need to narrow down where the problem might be. For example, if the` Login With Correct `Credentials test case fails, the problem is probably in the `check_credentials `method of the UserService class. We can stop the program execution at the desired line using the \[pdb\]\[https://docs.python.org/3/library/pdb.html\] module:

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

So, we enter the input into the command line and press the Enter key. We continue executing the code by entering `next()`. The code has skipped the if statement (because the variables had values) and is now executing the line `user = self._user_repository.find_by_username(username)`:

    -> user = self._user_repository.find_by_username(username)
    (Pdb)

Execute the line by entering `next() `again and print the value of the user variable:

    -> if not user or user.password != password:
    (Pdb) user
    <entities.user.User object at 0x10f7a55e0>

When you have finished debugging, enter `exit() `and remove the call to the set_trace method from the code.

### Submitting assignments

Push the **Robot framework** tasks you have created to your GitHub repository and mark the tasks you have completed \[in Timi\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/konfigurointitehtavat-osa-3\]