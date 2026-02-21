>\>\>

In these tasks, we will learn about *static* code *analysis* using the Pylint tool, *dependency injection,* and continue learning about Git.

### Are there any typos or ambiguities in the exercises?

Suggest [corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

### Problems with Poetry?

[Here are](ongelmia.md) some instructions

### 1. Pylint and static code analysis

**This and the next task are done in the ohtuvarasto repository used in last week\'s tasks.**

The theme [of the third part](osa3.md) of the course is ensuring program quality. One factor that most often contributes to program quality is adherence to *a* sensible *coding style*. Code style can be monitored automatically using so-called static analysis tools.

Let\'s now take a look at a static analysis tool called \[Pylint\]\[https://pylint.pycqa.org/en/latest/index.html\]. Before we dive into the topic, familiarize yourself with Pylint by reading [the](pylint.md) following [Pylint instructions](pylint.md).

**Now go to your repository for the tasks related to last week\'s warehouse project.**

Enable Pylint in the storage project by following the instructions you have read. For now, the contents of the *.*pylintrc file used for configuration should be the same as the contents of the \[this\]\[{{site.python_exercise_repo_url}}/blob/main/osa2/varasto/.pylintrc\] file.

The rules checked by Pylint are configured in the *.*pylintrc file under the appropriate sections. The `[main] `section contains general configuration, such as which directories or files should be excluded from checks. The `[MESSAGE CONTROL] `section can be used to define checks that do not need to be reported, for example. The rest of the sections are for configuring different rules, which are documented in Pylint\'s \[documentation\]\[http://pylint.pycqa.org/en/v3.1.1/technical_reference/features.html\]. For example, if we want to set the maximum number of arguments for functions and methods to four, we can add it to the `[DESIGN] `section as follows:

    [DESIGN]

    max-args=4

The easiest way to find rules is to search for them in the documentation using a suitable keyword or by Googling. You can find the right section in the documentation (for example, the max-args rule can be found in the \[Design checker\]\[https://pylint.pycqa.org/en/v3.1.0/user_guide/configuration/all-options.html#design-options\] section of the documentation).

**Now proceed as follows:**

- Go to the virtual environment with the command `poetry shell `and run the command `pylint src `inside it. If errors are found in the checks, fix them.

- Now define the following rules in the *.pylintrc* file (see the list of rules in the pylint \[documentation\]\[https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#\]):

  - The maximum line length is 80 characters
    - Tip: The rule can be found in the \[Format checker\]\[https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#format-checker\] section and should be defined under the `[FORMAT] `section
  - No more than two nested blocks (e.g., if or for blocks) within a function or method
    - Tip: The rule can be found in the \[Refactoring checker\]\[https://pylint.readthedocs.io/en/stable/user_guide/configuration/all-options.html#refactoring-checker\] section and should be defined under the `[REFACTORING] `section
  - A function or method can have a maximum of 15 statements; find the rule in the documentation
  - Also define a rule of your own choosing that sounds interesting/useful

- Change your code so that it breaks each of the defined pylint rules

- Fix your code and make sure it complies with all the rules

It often makes sense to use the configuration recommended by pylint as a starting point rather than writing the *.*pylintrc configuration from scratch. You can print the recommended configuration to the command line with the command `pylint --generate-rcfile`.

### 2. Static code analysis and GitHub Actions

**This task is performed on the ohtuvarasto repository used in last week\'s tasks.**

Extend your ohtuvarasto GitHub Actions definition so that Pylint checks are also performed whenever code is pushed to GitHub.

Ensure that GitHub detects situations where the code violates the project\'s Pylint rules:

\![\]\[images/py-lh2-11.png\]

Also make sure that when you fix the code, everything works flawlessly again:

\![\]\[images/py-lh2-12.png\]

### 3. Creating a restore repository

The following tasks will be restored to a different repository than the staging repository used in previous tasks. So, create **a new repository**.

The structure of the recovery repository you are now creating could be as follows, for example:

    part2
      dependency-injection-1
      nhl-statistics-1
      poetry-web
    part3
      login-robot
    ...

This assignment will not be graded or evaluated.

### 4. Dependency injection part 1

**This task is done in the new repository you just created.**

- However, you will not be writing any code yourself in this assignment\...

During the course, we will look at a few design patterns, i.e., well-known solutions suitable for a variety of situations, the application of which often improves code quality.

The first design pattern in the course, dependency injection, is a simple principle that, when followed, can make automated testing of code significantly easier in many situations.

- Learn more about dependency injection by reading \[this document\]\[riippuvuuksien_injektointi_python/\].
- Get the example project from the course\'s \[task repository\]\[{{site.python_exercise_repo_url}}\] directory, *part2/dependency-injection-1,* and try it out to see if it works.
  - It is probably best to clone the repository to your local machine
  - **After that, you should copy the project into the return repository you created in the previous task**
  - **NOTE:** Read 15 cm above for instructions on how to organize the code inside the restore repository.

Learn about dependency injection with an example. Install the project dependencies in its root directory (i.e., the directory where the *pyproject.toml* file is located) with the command `poetry install`. After this, you can run the code inside the virtual environment with the command `python3 src/index.py`. If you want, you can also run tests inside the virtual environment with the command `pytest`. If you forgot how to access the virtual environment, review last week\'s assignments.

### 5. Dependency injection part 2: NHL statistics

**This task is also done in the repository you just created.**

- In the course\'s \[task repository\]\[{{site.python_exercise_repo_url}}\] directory contains a program that allows you to explore the statistics available at https://nhl.com-sivulla (by changing the URL used by the application, you can view statistics for different seasons).
  - Install the project dependencies by running the command `poetry install `in the root directory.
- The program consists of three classes.
  - `StatisticsService `is a service-providing class that provides methods for displaying information about a single player, displaying the points table, and displaying information about the players on a single team.
  - `Player `is a class whose objects are used by the StatisticsService class to process the data of individual players
  - `PlayerReader `is a class that the program uses to retrieve player data from the Internet
- The program is now poorly structured, and unit testing, for example, is very difficult

**Your task:**

- Modify the structure of the program so that the StatisticsService class receives an instance of the PlayerReader class as a constructor parameter, and so that `PlayerReader `receives the address from which it retrieves player data as a constructor parameter
- Modify the main program so that it injects the PlayerReader class object (which has been given the desired address as a constructor parameter) into the StatisticsService object, and test that the program still works:

<!-- -->

    stats = StatisticsService(
      PlayerReader("https://raw.githubusercontent.com/ohjelmistotuotanto-jyu/tehtavat/refs/heads/main/osa2/stats/players-23-24.txt")
    )

**NOTE:** If you encounter the error `URLError: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed`, a possible solution to the problem can be found \[here\]\[https://stackoverflow.com/a/42334357\].

If you are not familiar with object-oriented programming in Python (and even if you are), it is worth familiarizing yourself with the source code. When reading class descriptions, note that the constructor is always called **init**. The constructor and other methods assume that the first argument of the function refers to the object being processed. It is common practice to give this variable the name self - however, this is not a reserved word, but merely a convention (regardless of the name of the first argument of the method, it refers to the instance of the class being processed = the object).

### 6. Unit testing of the NHL statistics program

**This task is also performed in the recovery repository you just created.**

- Perform unit tests for the `StatisticsService `class
  - Remember to name the test file, test class, and test methods according to [the unit test instructions](unittest.md). Otherwise, Pytest will not find the tests to run
  - The branch coverage of the tests for the StatisticsService class must be 100% (measure the coverage using coverage, see \[task 8\]\[https://ohjelmistotuotanto-hy.github.io/tehtavat1#8-unittest\]).
    - Note that the coverage report is not generated until tests have been added to the application.
  - The tests must not use a network connection
  - You can eliminate the need for a network connection by creating a \"stub\" for the test that resembles the PlayerReader class, inside which you hard-code the player list to be returned.

<!-- -->

    import unittest
    from statistics_service import StatisticsService
    from player import Player

    class PlayerReaderStub:
        def get_players(self):
            return [
                Player("Semenko", "EDM", 4, 12),
                Player("Lemieux", "PIT", 45, 54),
                Player("Kurri",   "EDM", 37, 53),
                Player("Yzerman", "DET", 42, 56),
                Player("Gretzky", "EDM", 35, 89)
            ]

    class TestStatisticsService(unittest.TestCase):
        def setUp(self):
            # assign a "stub" class object to the StatisticsService class object
            self.stats = StatisticsService(
                PlayerReaderStub()
            )

        # ...

When you inject the PlayerReaderStub object into the StatisticsService object in the test, it always returns the same player list.

### 7. Poetry practice

**This task is also done in the return repository you just created, i.e., DO NOT USE last week\'s ohtuvarasto repository.**

- Create a repository inside the *repository part2* for this task

Warning: pip

You may have installed the dependencies required by Python using the pip command. Do not use pip in this course, because if you do, there is a 99.9% chance that you will do something wrong.

In this course, dependencies are installed with poetry.

In practice, this means that dependencies are installed with the command poetry add library instead of the command pip install library.

In this exercise, we will practice using Poetry and learn about semantic versioning. Help with the exercise can be found [in the Poetry manual](poetry.md) and \[Poetry documentation\]\[https://python-poetry.org/docs/\].

Imagine a situation where you are working as a software developer in a development team that is about to start developing a web application. You have decided to develop the application in Python and use Poetry for dependency management.

Perform the following steps:

- First, you need to initialize a Poetry-based project. **Use Poetry to initialize the project in a directory called *poetry-web* inside the repository directory viikko2 that you use for submitting assignments**. Remember to use the command `poetry init --python "^3.10" `during initialization to set the Python version requirement for the project correctly.
- You search Google for suitable libraries for your web application and come across the \[Flask\]\[https://pypi.org/project/Flask/\] framework. **Install Flask as a dependency for your project using Poetry**.
- The first bug appears in the application. The reason was probably that no tests had been implemented for the application yet. You end up using the \[pytest\]\[https://pypi.org/project/pytest/\] framework for testing. **Install pytest *as a dependency for* project *development***
  - Think about why it is useful to define a dependency separately as a dependency for development
- The application handles a lot of JSON-formatted data, so you end up looking for libraries suitable for serialization and deserialization. You come across a suitable library called \[jsonpickle\]\[https://pypi.org/project/jsonpickle/\]. **Install jsonpickle as a dependency for the project**
- You notice a bug in the jsonpickle library, so you start investigating the issues in its GitHub repository \[https://github.com/jsonpickle/jsonpickle/issues\]. One issue states that the bug you found does not occur in version` 2.2.0 `of the library. **Install version**` 2.2.0 `**of the jsonpickle library**.
  - Learn *about semantic versioning* \[here\]\[https://semver.org/\].
  - Think about the benefits of semantic versioning. If the library follows semantic versioning, why might updating from version` 2.2.0 `to `version 3.2.2 `involve risks? Why are the same risks unlikely to exist with version` 3.0.3`?
  - Version requirements often include the prefix \^- or `~`-. Think about what these mean. This is discussed, for example, in \[Poetry\'s documentation\]\[https://python-poetry.org/docs/dependency-specification/\].
- You decide that the jsonpickle library has only caused problems and that you can easily implement its functionality yourself. **Remove jsonpickle from the project dependencies**

The poetry-web directory to be restored should only contain the files *pyproject.toml* and *poetry.lock*.

### Bonus: VS code configuration

**NOTE:** Configuring VS Code is completely optional; you can get by just fine without any configuration. Not everyone\'s configuration will be exactly as described below. So if the configuration doesn\'t work, just move on.

Return to the previous task\'s project and install the `cowsay `library in the project.

Create a directory *src* in the project and inside it a file *index*.*py* with the following content

    import cowsay

    cowsay.cow('Let's get VS Code working properly!')

The code works when executed from the command line, but it does not work when executed from VS Code:

\![\]\[images/lh2-vscode1.png\]

As the error message indicates, the code cannot be executed with the VS Code \"play\" button because the library cannot be found. The red underlining of the *import* command also indicates the issue: VS Code cannot find the *cowsay* library. This can be fixed with a few steps:

- Add the directory containing the project to VS Code\'s \"workspace\" from the *file* menu by selecting *Add Folder to Workspace*.
- Save the workspace from *the Save workspace as* menu. Save it to the root of the project directory (i.e., the same location as the pyproject.toml file).
- Select the correct Python version. Click at the bottom of the editor: \![\]\[./images/lh2-vscode2.png\]
- \... and make your selection \![\]\[./images/lh2-vscode3.png\]

After these steps, you can run the code using the VS Code \"play\" button:

\![\]\[./images/lh2-vscode4.png\]

A properly configured VS Code also allows you to use its built-in debugger. If you are not yet familiar with the debugger, \[here\]\[https://ohjelmointi-23.mooc.fi/osa-4/1-vscode#debuggeri\] are instructions for using it.

Configuring the workspace creates a file called *poetry-web.code-workspace,* which contains the following

    {
        "folders": [
            {
                "path": "."
            }
        ],
        "settings": {}
    }

You can also configure it by creating a file with that content directly under the project. However, you may need to select the correct version of Python yourself. The command *poetry install* must also be executed for everything to work.

### 8. Utilizing dependencies

Software developers often encounter situations where they need to find a library suitable for a specific purpose. We will practice this situation in this exercise.

\[TOML\]\[https://toml.io/en/\] is an easy-to-read data representation format that is often used in configuration files, such as Poetry\'s *pyproject.*toml file. The directory *osa2/project-reader in* the \[course repository\]\[{{site.python_exercise_repo_url}}\] contains the basis for a program designed to read project information from the *pyproject.toml* file found at the given address.

- **First, copy the project to the return repository inside the osa2 directory.**

Your task is to first find a suitable library that can be used to form Python data structures from TOML-formatted strings. You can use the search function on the \[PyPI\]\[https://pypi.org/\] website or Google, for example. A good search term on PyPI could be, for example, \"toml.\" Read the library descriptions and decide whether the library is suitable for your purpose. When you find a suitable library, install it in the project using Poetry.

**NOTE:** PyPI\'s installation instructions often include pip installation instructions `pip install <library>`. However, all libraries can be installed in the same way using Poetry with the command `poetry add <library>`.

Then, use the library in `the get_project `method of the ProjectReader class in the src/project_reader.py file of your project. The content variable of the method stores the contents of the file:

    def get_project(self):
        # string content of the file
        content = request.urlopen(self._url).read().decode("utf-8")
        print(content)

        # deserialize the string in TOML format and create a Project object based on its data
        return Project("Test name", "Test description", [], [])

Print each intermediate step (file content and content deserialized using the library) using the print function so that you know what format the data is in. Of course, you can also use VS Code\'s debugger \[https://ohjelmointi-23.mooc.fi/osa-4/1-vscode#debuggeri\] for the same purpose.

Then, form a Project object from the data by giving it the project name, description, list of dependencies, and list of development dependencies through the constructor. Once the program is working as desired, you can remove the print statements used for debugging.

The program can be started in a virtual environment with the command `python3 src/index.py`. In the case of the *pyproject.*toml file used as an example, the program output should be as follows:

    Name: Ohtutesting app
    Description: Application that serves as test input for the calculators in part 2 of the ohtu section
    Dependencies: python, Flask, editdistance
    Development dependencies: coverage, robotframework, robotframework-seleniumlibrary, requests

*NOTE:* The program must only contain the print command in the index.py file, which prints the string representation of the Project object!

Expand and refine the solution so that the end result for the example project looks something like this

    Name: Ohtutesting app
    Description: An application that serves as test input for the calculators in part 2 of the Ohtu section
    License: MIT

    Authors:
    - Matti Luukkainen
    - Kalle Ilves

    Dependencies:
    - python
    - Flask
    - editdistance

    Development dependencies:
    - coverage
    - robotframework
    - robotframework-seleniumlibrary
    - requests

\*\* The rest of this week\'s tasks are optional and will not be graded. However, it is a good idea to familiarize yourself with them, especially if you are unfamiliar with using branches in Git. \*\*

### 8. Git: branches \[version control\]

**This assignment will not be submitted anywhere.**

Read the sections on branches in the following <https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging>

- If you want a more detailed explanation of the subject, read https://git-scm.com/book/en/v2:n chapter three in its entirety

It is also worth noting the excellent visual material on branches at <https://learngitbranching.js.org/>

<https://www.atlassian.com/git/tutorials/using-branches> also seems quite clear.

**Note:** when moving between branches, it is advisable to keep the working tree and staging area empty!

Do the following in your local Git repository (the task will not be returned, so it **does not** need to be a task return repository)

- Create a repository and commit the file **index.py** to main with the following content

<!-- -->

    x = int(input("number 1: "))
    y = int(input("number 2: "))

- Create a branch **called laskut**, switch to the branch (this can be done with the command `git checkout -b laskut`), and create a file called **summa.py** with the following content

<!-- -->

    def sum(x, y):
        return x+y

- add and commit the file to version control

- Go back to the main branch (`with the command git checkout main`), the file **summa.py** should not be visible now

  - **Note:** Remember that when you switch from one branch to another, **always** use the command `git status `to make sure that all changes have been committed

- Create a file called **logger.py** with the following content

<!-- -->

    from datetime import datetime

    def logger(message):
      print(f"{datetime.now()}: {message}")

- Also, change the **index.py** file as follows:

<!-- -->

    from logger import logger

    logger("let's begin")

    x = int(input("number 1: "))
    y = int(input("number 2: "))

    logger("let's finish")

- Commit these changes to the main branch

- Go to **the bills** branch and check that the file added **to main** is not in the branch and that the change made to the **index.py** file is not visible

- Add and commit the file **difference.py** to the branch with the following content

<!-- -->

    def difference(x, y):
        return x-y

- Go back to the main branch
- Check that the changes added to the calculations branch are not in main
- Use the `gitk --all `command to see what the repository and branches look like (the gitk command works on Windows, at least in GitHub for Windows\' Git Shell).
  - You can install gitk on Mac using \[these instructions\]\[https://www.geekbitzone.com/posts/git/gitk-for-macos/\].
    - If the installation fails, a good replacement for gitk is \[sourcetree\]\[https://www.sourcetreeapp.com\].
- Merge the contents of the branch **into main** (this is done `with the command git merge laskut`).
  - Merging creates a merge commit and opens a text editor where you need to write a commit message.
    - If you have not specified an editor for git according to the instructions [in](tehtavat1.md) last week\'s [assignment 2](tehtavat1.md), git\'s default editor \[vim\]\[http://www.vim.org\] may open
    - Exiting Vim may prove difficult for first-time users, but Google can help if necessary
- Change the file **index.py** as follows and commit the change:

<!-- -->

    from logger import logger
    from sum import sum
    from difference import difference

    logger("let's begin")

    x = int(input("number 1: "))
    y = int(input("number 2: "))
    print(f"{sum(x, y)}")
    print(f"{difference(x, y)}")

    logger("let's finish")

- Check again what it looks like with the `gitk `\--all command

### 9. Git: branches and staging area \[version control\]

**This task is not committed anywhere**

- You are now in the main branch of your repository
- Create a new file *README.md*, but **do not** add or commit the file to version control
- The content of the file is irrelevant; it could be, for example, the following

<!-- -->

    ## git exercises

    Let's practice using branches

- The output of the `git status `command should be as follows

<!-- -->

    On branch main
    Untracked files:
      (use "git add <file>..." to include in what will be committed)

        README.md

    nothing added to commit but untracked files present (use "git add" to track)

- Now switch **to the invoices** branch
- Run the `git status `command again
- You will notice that the output is still the same, the file is still not under version control
- So even though you were in the main branch when you created the file, neither the main branch nor git as a whole knows anything about the file until you add it to version control with `the git add `command
- Now add the file to version control and commit it
- The file will go to your current branch, i.e., *the invoices* branch, and main still knows nothing about the file
- Create a new file *called LICENSE* and add it to version control (with the add command), but do not commit it
- The content of the file is irrelevant; it could be, for example, the following

<!-- -->

    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.

    For more information, please refer to <https://unlicense.org>

- Check that the result of the `git status `command is as follows:

<!-- -->

    On branch invoices
    Changes to be committed:
       (use "git restore --staged <file>..." to unstage)

        new file:   LICENCE

- This means that you are in the *invoices* branch and *LICENSE* has been added to the staging area, but it has not yet been committed.
- Now move to the **main** branch
- The` git `status command still shows the same result: *LICENSE* is still in the staging area but has not been committed
- The staging area **does not belong** to any branch, so if there are uncommitted changes in the staging area and you switch branches, the same things will remain in staging
- Changes are only transferred from staging to the branch with the `git commit `command
- Now commit the changes in the staging area, i.e., *LICENSE,* to main
- The `git status `command now shows that the staging area is empty:

<!-- -->

    On branch main
    nothing to commit, working tree clean

- Go back to **the laskut** branch and you will see that *LICENSE* does not exist
- Merge the main branch into **the laskut** branch
- Now go back to the **main** branch and delete **the laskut** branch
  - Deletion cannot be done directly with the `git branch -d `command if the contents of the branch have not been merged into main in their entirety. If this is the case, first merge into main, or if you still want to delete the branch even though it still has conflicting changes, use `git branch -D `to delete the branch with its conflicting changes
- The idea behind this task was to illustrate that the working tree (changes that Git is not aware of) and staging (uncommitted changes made to files added to Git) **are not related** to any branch; changes are only transferred from the staging area to the branch as a result of executing the `git commit `command.

### 10. Git: conflict! \[version control\]

**This task is not submitted anywhere.**

Do the following in the local Git repository

- Change the main branch file **index.py** as follows:

<!-- -->

    # Let's do the imports at the beginning

    from logger import logger
    from sum import sum
    from difference import difference

    logger("let's begin")

    x = int(input("number 1: "))
    y = int(input("number 2: "))
    print(f"{sum(x, y)}")
    print(f"{difference(x, y)}")

    logger("let's finish")

- A comment and an empty line have been added to the beginning.

- Commit the change

- Create a new branch **for bug fixing**, go to the branch, edit the end of the **index.py** file (e.g., as follows) and commit

<!-- -->

    # Let's do the imports at the beginning

    from logger import logger
    from sum import sum
    from difference import difference

    logger("let's begin")

    x = int(input("number 1: "))
    y = int(input("number 2: "))
    print(f"{sum(x, y)}")
    print(f"{difference(x, y)}")

    logger("ending program")
    print("goodbye!") # addition in the bug fix branch

- Go back to the main branch, edit the beginning of the **index.py** file as follows (the change is in the logger parameter of the function) and commit the changes:

<!-- -->

    # do imports at the beginning

    from logger import logger
    from sum import sum
    from difference import difference

    logger("start program") # change in main

    x = int(input("number 1: "))
    y = int(input("number 2: "))
    print(f"{sum(x, y)}")
    print(f"{difference(x, y)}")

    logger("end program")

- Merge **the bug fix** content of the branch **into main**

  - Check the contents of the **index.py** file; it should now contain the changes made in both branches
  - **Note:** At this point, a conflict may arise if you have accidentally changed characters in the wrong place in the file! In this case, follow the instructions below.

- You are still in the **main** branch. Change the file as follows for the print commands

<!-- -->

    # do imports at the beginning

    from logger import logger
    from sum import sum
    from difference import difference

    logger("start program")

    x = int(input("number 1: "))
    y = int(input("number 2: "))
    print(f"{x} + {y} = {sum(x, y)}") # change in main
    print(f"{x} - {y} = {difference(x, y)}") # change in main

    logger("ending program")
    print("goodbye!")

- Commit changes

- Go to the **bug fix** branch

- Now change the file (again for the print commands) as follows and commit

<!-- -->

    # Let's do the imports at the beginning

    from logger import logger
    from sum import sum
    from difference import difference

    logger("starting the program")

    x = int(input("number 1: "))
    y = int(input("number 2: "))
    print(f"The sum of numbers {x} and {y} is {sum(x, y)}")  # change in bug fix branch
    print(f"The difference between numbers {x} and {y} is {difference(x, y)}")  # change in bug fix branch

    logger("ending program")
    print("goodbye!")

- Merge the contents of the **main** branch into **the bugfix** branch
  - This should cause a conflict; the command causes the following output

<!-- -->

    Auto-merging index.py
    CONFLICT (content): Merge conflict in index.py
    Automatic merge failed; fix conflicts and then commit the result.

- Git was unable to merge the changes made to the file because they affect the same lines, resulting in a conflict.

- Resolve the conflict:

  - Edit the contents of the **index.py** file as desired
  - Follow the instructions in the article mentioned above, i.e., add the conflicting file to the staging area and commit it

Some editors, such as \[Visual Studio Code\]\[https://code.visualstudio.com\], have *a* built-in *merge tool* that can help resolve conflicts to some extent:

\![\]\[images/lh2-merge.png\]{:height="350px" }

### 12. Git: branches and GitHub \[version control\]

**This task is done in the staging repository. However, it is optional and will not be graded.**

**NOTE:** In this task, it is known to be challenging at times to follow each step so that you always end up in the same state that the task expects. Don\'t stress too much about this. The main point of the task is to learn how to make branches work locally and on GitHub so that *git push* and *git pull* work for all branches.

Start by reading the chapter \[Remote Branches\]\[https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches\] in the ProGit book.

Next, add the branch to GitHub:

- Create a local clone of the repository branch **branch1**, add the file **branch1.txt** (to the root of the directory week2) and commit
- Return to the **main** branch
- Create another branch, **branch2**, add a file (in the root directory of week2) **called branch2.txt**, and commit
- Push the new branches to GitHub
- View the GitHub repository in your browser to make sure that the branches are created and contain the desired content:

\![\]\[images/lh2-branch1.png\]{:height="350px" }

Clone **another clone** from the GitHub repository to your computer:

- As you can see, the branches are not included in the clone
- Create a branch in the local clone that \"tracks\" the branch of your project in GitHub, **branch1** (see <https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches>, section Tracking Branches)
- Add a file to the "tracking" branch (to the week2 directory), commit and push the branch to GitHub
- View the GitHub repository in your browser to make sure that the branch is updated

Go to the **original** local clone of the GitHub repository:

- Go to **branch1** and pull the changes from the corresponding branch in GitHub
  - Note: since this is not a \"tracking\" branch, you will need to pull with the command `git pull origin branch1`
    - The output of the `git pull `command alone provides instructions on how to make the command work from within the branch without additional parameters
- Go to **branch2**, add the file, commit, and push the branch to GitHub
  - Since this is not a \"tracking\" branch, the `git push `command is not enough; you will need to specify the branch to which the push is directed, i.e., give the command `git push origin branch2`
    - The output of the `git push `command alone provides instructions on how to make the command work from within the branch without additional parameters

Go **to the other clone** again:

- Run the command `git remote show origin`
- The command shows the relationship between the branches in \"origin,\" i.e., GitHub, and the local branches.

<!-- -->

    * remote origin
      Fetch URL: git@github.com:mluukkai/ohtu-palautukset.git
      Push URL: git@github.com:mluukkai/ohtu-palautukset.git
      HEAD branch: main
      Remote branches:
        branch1 tracked
        branch2 tracked
        main   tracked
      Local branches configured for 'git pull':
        branch1 merges with remote branch1
        main   merges with remote main
      Local refs configured for 'git push':
        branch1 pushes to branch1 (up to date)
        main   pushes to main   (up to date)

- The command output shows that main and branch1 are configured to work directly with the `git pull `and `git push `commands.
- Now create a branch called **branch2** in the clone (where you are now) that tracks branch1
  - **Note:** it is also a good idea to immediately perform `git pull `for the branch, because otherwise the status of the local branch will be the same as the status of the remote repository branch at the time you cloned the repository, i.e., outdated because new content has been pushed to the branch
- Run `git remote show origin `again. What changes do you notice?
- Make changes to **the branch2 branch** and push them to GitHub.
  - Since this is a tracking branch, git push is sufficient.
- View the GitHub repository in your browser to make sure that the branch is updated.

Return to the original local repository:

- Run the command `git remote show origin`
- The output shows that of the local branches, only *main* is configured for the `git pull `command:

<!-- -->

    * remote origin
      Fetch URL: git@github.com:mluukkai/ohtu-s22-palautukset.git
      Push URL: git@github.com:mluukkai/ohtu-s22-palautukset.git
      HEAD branch: main
      Remote branches:
        branch1 tracked
        branch2 tracked
        main tracked
      Local branch configured for 'git pull':
        main merges with remote main
      Local refs configured for 'git push':
        branch1 pushes to branch1 (up to date)
        branch2 pushes to branch2 (up to date)
        main pushes to main (up to date)

- Run `git pull `in branch *branch2*
- The command output provides instructions on how to configure the `git pull `command to work within branch2 without additional parameters
- When you enter the command, the branch will track the branch on GitHub and the `git pull `command can be entered without parameters
  - Note: replace *\<branch\>* in the command with the name of the branch

Working with branches may seem confusing at first, especially if there are several branches in GitHub.

### What are branches used for?

The software development team can apply Git branching in many different ways. The article <https://www.atlassian.com/git/tutorials/comparing-workflows> presents a few options for this. One common way to use branches is with so-called *feature branches*:

> The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the main branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the main branch will never contain broken code, which is a huge advantage for continuous integration environments.

If you are interested, read more in the document above.

### 13. Git: pushing an out-of-date clone \[version control\]

**This task is done in the staging repository. However, it is optional and will not be graded.**

Let\'s demonstrate (as mentioned [in](tehtavat1.md#11-github-actions-osa-3) last week\'s [task 11](tehtavat1.md#11-github-actions-osa-3)) a common situation where pushing an out-of-date repository to a remote repository on GitHub fails.

- Go to the main branch of the local clone of the original repository, make a change, commit it, and push it to GitHub.
- Go to the main branch of the other clone and make a change there
- Commit and push the change to GitHub.
- However, not everything goes well, resulting in the following error message:

<!-- -->

    $ git push
     ! [rejected]        main -> main (fetch first)
    error: failed to push some refs to 'git@github.com:mluukkai/ohtu-palautukset.git'
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

The reason for the error is that the **main** branch on GitHub was ahead of the **main** branch in the local repository.

The problem can be solved as follows. First, run the `git pull `command. You will get a long complaint message from git:

    hint: You have divergent branches and need to specify how to reconcile them.
    hint: You can do so by running one of the following commands sometime before
    hint: your next pull:
    hint:
    hint:   git config pull.rebase false  # merge
    hint:   git config pull.rebase true   # rebase
    hint:   git config pull.ff only       # fast-forward only
    hint:
    hint: You can replace "git config" with "git config --global" to set a default
    hint: preference for all repositories. You can also pass --rebase, --no-rebase,
    hint: or --ff-only on the command line to override the configured default per
    hint: invocation.
    fatal: Need to specify how to reconcile divergent branches.

In practice, Git wants to know what strategy to use to merge the code in your local and remote repositories. It is best to choose the middle option, i.e., enter the command

    git config pull.rebase true 

In practice, the selected option means that Git will perform new local commits after the commits in the remote repository.

You can now pull the code again with the command `git pull`. The command `git push `will now work. In the future, you can handle similar situations with the commands `git pull `and `git push`.

- So, do this and make sure that your changes are sent to GitHub

### Submitting assignments

Push all the assignments you have completed (except those that specify that the assignment should not be submitted anywhere). to your GitHub repository and mark the assignments you have completed as \[Timiin\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/konfigurointitehtavat-osa-2\].

\<\<\