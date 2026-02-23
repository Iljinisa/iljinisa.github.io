This week\'s assignments will first focus on practicing the use of a few important software development tools (*command line, version control, dependency management, automated testing, continuous integration*).

### Are there any typos or ambiguities in the tasks?

Suggest [corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

### Submitting assignments

Assignments are submitted to GitHub and by marking the completed assignments \[in Timi\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/konfigurointitehtavat-osa-1\]. The week\'s assignments are submitted at once, so only mark them in the submission application when you are done with the week\'s assignments.

In practice, this week we will create a GitHub repository called ohtuvarasto for submission. If you don\'t know what GitHub and a repository are yet, you will learn soon.

Task 1 is not actually submitted anywhere, nor is it graded.

### 1. Command line

**This assignment is not submitted anywhere**

Despite the existence of graphical user interfaces, it is still very important in the software industry to know how to use the command line, or terminal. In fact, the importance of the command line is even increasing.

Make sure you know how to use the command line \"sufficiently\" (see the list below).

If you have gaps in your knowledge (see the list below), review the resources you want:

- [https://www.codecademy.com/learn/learn-the-command-line,](https://www.codecademy.com/learn/learn-the-command-line) the first two parts of the online course, *Navigating the File System* and *Viewing and Changing the File System*
- <https://ryanstutorials.net/linuxtutorial/>\'s guide consists of four parts: *1. The Command Line*, *2. Basic Navigation*, *3. More About Files,* and *5. File Manipulation.*

*NOTE: Codecademy requires you to log in with your Facebook, Google, or GitHub account. GitHub is used in the course anyway, so everyone should have an account to be able to log in.*

After completing this task, you should have mastered the following:

- Concepts
  - Root directory
  - Home directory
  - Parent directory
  - Child directory
  - Working directory
  - `.. `and `\*`
- And know how to use commands
  - `pwd`
  - `cd`
  - `ls`, `ls -a`, `ls -l`, `ls -t`
  - `mkdir`
  - `touch`
  - `cp`
  - `rm`, `rm -r`
  - `mv`

You will need command line skills in this course and in your studies in general.

The assignment will not be graded in any way. You can mark the assignment as complete once you have mastered the skills listed above.

### 2. GitHub \[version control\]

If for some reason you do not yet have an account on \[GitHub\]\[https://github.com\], create one now.

Create a repository in GitHub with the name *ohtuvarasto*

**In addition to this assignment, assignments 3-13 will now be done in the ohtuvarasto repository you just created.**

- Click the \"Create a new repo\" icon on the right side of the top bar.
- **Check the box** next to \"Add a README file.\"

\![\]\[images/lh1-1-22.png\]

**If you have not yet created** *an ssh key* on your computer, do so now. Add the public key to GitHub. Instructions for creating and adding a key can be found here:

- Instructions [here](avain.md)

After this, you will be able to use GitHub without entering a password from the computer where the secret pair of the newly created key is located

If you haven\'t already done so, configure your name and email address in Git on your local machine by entering the following commands:

    git config --global user.name "Your Name"
    git config --global user.email my.address@gmail.com

This information will appear in your profile and in connection with your commits, so provide as much information as you want.

On Linux and macOS, it is recommended to configure *nano* as the default editor (everyone has their preferences):

    git config --global core.editor nano

and *notepad* on Windows:

    git config --global core.editor notepad

However, if you are a vim user, you can skip the previous step.

Now clone the repository created on GitHub **to your local machine**. This is done by entering the following command in the command line:

    git clone git@github.com:omatunnustahan/ohtuvarasto.git

where the `git clone `command parameter is the string displayed on your repository page (note that the format must be SSH):

\![\]\[images/lh1-2-22.png\]

Now, a directory called *ohtuvarasto* (the name of the directory is the same as your repository) has been created on your local machine, which is a clone of the repository on GitHub.

### 3. Git basics \[version control\]

You have probably already used Git in previous courses. In this exercise, we will practice the following commands:

- `git add`

- `git commit`

- `git status`

- `git checkout -- file`

- `git reset HEAD`

- If you are not yet familiar with these commands, I will repeat the course \[Programming 2 Git material\]\[https://tim.jyu.fi/view/kurssit/tie/ohj2/tyokalut/git/ohj2git\].

There are plenty of Git tutorials available online, for example:

- \[Pro Git guide\]\[http://git-scm.com/book\], it is worth reading chapter 2 to start with
- \[GitHub help\]\[https://help.github.com/articles/\]
- <https://www.atlassian.com/git/tutorials>
- <https://we.riseup.net/debian/git-development-howto>
- <http://www.ralfebert.de/tutorials/git/>

**Now do the following:**

- Go to the repository clone created in the previous task (i.e., the directory created by the `git clone `command).
- Add and commit two files and two directories containing files to the repository
  - Remember the useful command `git status`
- Change the contents of at least two files and commit the changes to the repository
- Create a *.*gitignore file in which you specify that files ending in *tmp* and directories named \_\_pycache\_\_ and .pytest_cache in the root directory of the repository should be ignored
  - The other directory to be ignored is .pytest_cache, whose name begins with a dot
  - Directories and files beginning with a dot are not visible by default in `ls` listings; you can make them visible with the command `ls -a`
- Add more files with the tmp extension to the directory and make sure that Git ignores them.
  - You can check this with the `git status `command.
- Also add a directory named \_\_pycache\_\_ and a file inside the directory. Make sure that the directory and its contents are not included in version control
- Add and commit a *.*gitignore file to your repository.
- The following sections discuss Git\'s staging area. If you don\'t know what this is, find out. You can learn more from the instructions linked above.
- Make a change to a file. Do not add the file to the staging area
  - Undo the change (the` git status `command will give you a hint on how to do this).
- Make a change and add the file to the staging area, making sure that the change is no longer visible in the file
  - Undo the change (the` git `status command will give you a hint on how to do this), making sure that the change is no longer visible in the file.

**git add -p**

- Unfortunately, the tutorials do not use the useful form of the` git `add command, `git add -p `(see <https://gist.github.com/mattlewissf/9958704>).
- Make changes to a few files and add the changes to the staging area using the git add -p command
- If you add new files to the project, `git add -p `will not notice them, so they must be added to the staging area separately
- *From now on, use the command* `git add -p `*whenever possible!*

Use the command `man git add `to get more information about the option and explanations of the response options, among other things.

### 4. Adding files to GitHub \[version control\]

In Task 2, we created a repository called \"ohtuvarasto\" in GitHub, which was linked to a repository created on the local machine as a \"remote repository.\" Synchronize the local repository and GitHub:

- \"Push\" these to the remote repository on GitHub by entering the command `git push`
- Use your browser to verify that the added files are transferred to GitHub

GitHub should look something like this

\![\]\[images/lh1-3-22.png\]

### 5. Multiple clones from the same repository \[version control\]

It is common practice to keep the repository on GitHub as a \"centralized\" location for files and to link the repository on your local machine to the remote repository on GitHub, as we did in task 1.

If you are working from multiple computers, there will be multiple clones of the GitHub repository, and the status of the clones must be kept up to date.

For the sake of this exercise, let\'s create another clone of the repository on your local machine:

- Go to the command line and, for example, your home directory (or somewhere that is not a Git repository)
- Enter the command `git clone git@github.com:githubtunnus/repositorionNimi.git nameForClone`
  - *The GitHub username* and *repository name* can be found on GitHub in the location shown in the second image of task 2 for your repository.
  - *nameForClone* will be the name of the cloned repository; make sure you give it a name that does not already exist in the folder
- Go to the cloned repository and add some files to it. Finally, commit
- Push the changes to GitHub.
- Use your browser to verify that the added files are transferred to GitHub.

**Now go to the GitHub repository clone created in task 2.**

- The original local clone is no longer up to date, so pull the changes there with the `git pull `command.
- Make sure that the contents of both local repositories are now the same
- Add some files to the original clone and push them to GitHub
- Go back to the clone created in this task and pull

### 6. Cleaning up the repository \[version control\]

Let\'s prepare for the next task by cleaning up our repository of extra files

- Go to the original clone of your repository that you created in task 2
  - You can delete the practice clone you made for task 5
- Remove all directories and other files from your repository except *.git*, *.gitignore,* and *README.md*
- Commit the changes
  - Use the *git status* command to make sure that all changes are in version control, i.e., that Git does not report any files as *Changes not staged for commit*
  - You may need to review the linking tutorial in task 3 to learn how to remove files from Git
- Push the changes to GitHub. Check in your browser that everything is up to date in GitHub, i.e., that the repository contains nothing but the *.gitignore* and *README.md* files

Then let\'s get the code to be used in the following tasks:

- Download the zipped package from <https://github.com/ohjelmistotuotanto-jyu/tehtavat/raw/main/viikko1/varasto.zip>
- Extract the package to a suitable location
- Move the files in the package to the cloned repository so that **the files and directories in the package are at the root of the repository**
- The directory containing your repository should now look like this

\![\]\[images/py-lh1-4-22.png\]

- Add and commit the extracted files to your repository and push them to GitHub
- Check once more in your browser that everything is up to date on GitHub

**Note that your repository should look something like this after completing the task:**

\![\]\[images/py-lh1-5.png\]

**If the *src* directory and files such as *pyproject.toml* are not at the root of the repository, move them there before continuing.**

### 7. Poetry

Python is used in the programming tasks in this course. You can check if Python is installed on your computer with the command:

    python3 --version

If Python is installed, running the command will display the version of Python that is installed. Make sure that the version you are using is *at least 3.10.0*. If the python3 command is not found, try the `python `command. However, make sure that the python command runs a sufficiently new version. If the installation cannot be found, or if you are using an older version, you can follow the instructions for installing Python provided by the University of Helsinki\'s \[programming courses\]\[https://www.mooc.fi/fi/installation/vscode\].

The installation instructions also include instructions for installing the Visual Studio Code editor. However, course assignments are not submitted using the TMC plugin, so the VS Code plugin is not necessary for completing the course. You can therefore use any other editor for the course if you wish.

In the basic programming courses, you have executed code in TMI or locally using various IDEs. In professional software development, code execution and testing must be repeatable and able to be performed on any machine, *scripted* from the command line, i.e., independent of development environments such as VS Code.

Running code from the command line with the python3 command is not very difficult in itself. Problems only start to arise when the project requires external *dependencies* in the form of various installable libraries. Various tools are needed to install and manage libraries. For Python, the most popular command line tool for this purpose is \[pip\]\[https://pypi.org/project/pip/\].

In order to avoid conflicts between dependencies of projects on the same computer, so-called project-specific *virtual environments* are often used. These virtual environments are created and used through the \[venv\]\[https://docs.python.org/3/library/venv.html\] module.

To easily take advantage of pip and the virtual environment, we can use the \[Poetry\]\[https://python-poetry.org/\] command line tool. Poetry\'s documentation describes it as follows:

> Poetry is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

- In the previous task, a repository project in Poetry format was added to the repository. The project contains very simple code suitable for repository management. The `Varasto `class defined in the *src/varasto.*py file is responsible for repository management. The class is used by the `main `function defined in the *src/index.*py file*.*
- Explore the directory structure of a Poetry-formatted project, for example, by entering the command `tree `at the root of the directory containing the project (`tree `is not a Poetry-related command but a normal shell command).
  - In Windows, the most useful form of the command is `tree /F. `If you are using *git bash* in Windows, the command is `cmd //c tree.`
  - **NOTE:** macOS does not have the tree command by default
  - If you have \[Homebrew\]\[https://brew.sh/\] installed on your computer, you can install the tree command with the command `brew install tree`
  - The `tree `command is also not installed by default on all Linux distributions. On Debian-based Linux distributions (e.g., Ubuntu), you can install the tree command with the command `sudo apt-get install tree`
- Review the contents of the project definition file *pyproject.toml*
  - The file defines, among other things, the dependencies used by the project
- Check the contents of the *poetry.lock* file in the root directory
  - The contents of the file are not intended to be human-readable, *and should not be edited under any circumstances*. The file is maintained entirely by Poetry. Poetry stores the versions of the dependencies installed in the project in the file so that the correct versions of the dependencies can be installed with each installation

It is recommended to edit the program code with a sensible editor, such as Visual Studio Code, but Poetry commands are easiest to execute from the command line. Warning: pip

Warning: pip

You may have installed the dependencies required by Python using the pip command. Do not use pip in this course, because if you do, there is a 99.9% chance that you will do something wrong.

In this course, dependencies are installed with Poetry.

Before moving on to the exercises, if you have not used Poetry before, please familiarize yourself with the Poetry installation and usage instructions by reading \[this document\]\[https://ohjelmistotuotanto-jyu.github.io/poetry\]. The course uses Poetry version 1.6.1. If you have an older version on your computer, you should update it.

It is recommended that you make [this](poetry.md#asetusten-hienosäätö) change to the Poetry settings! Make sure that the setting is correct on your computer.

**Now perform the following steps**.

- Install the dependencies for the storage project by running the command `poetry install `in its root directory.
- Start the application with the command `poetry run python3 src/index.py`
  - The \[Run\]\[https://python-poetry.org/docs/cli/#run\] command executes the given command (in this case, `python3 src/index.py`) in a virtual environment
- Switch to the virtual environment with the command `poetry shell`. Note that this command is not automatically loaded after poetry version 2.0.0. The new version is `poetry env activate`, which prints the command to activate the environment (i.e., shows where your virtual environment\'s activate script is located). However, Poetry shell still exists \[as a plugin\]\[https://github.com/python-poetry/poetry-plugin-shell\], which can be loaded with the command `poetry self add poetry-plugin-shell, `for example.
- Run the command `python3 src/index.py`
  - In a virtual environment, commands can be executed \"normally,\" i.e., without the run command
  - When developing and executing new code in frequent cycles, it is most convenient to execute commands within the virtual environment
- Exit the virtual environment with the command `exit`
- Run the tests with the command `poetry run pytest`
  - The \[pytest\]\[https://docs.pytest.org/en/stable/\] application framework is used to run the tests

**NOTE:** If you encounter the following error message

    Python 2.7 will no longer be supported in the next feature release of Poetry (1.2).
    You should consider updating your Python version to a supported one.

    Note that you will still be able to manage Python 2.7 projects by using the env command.
    See https://python-poetry.org/docs/managing-environments/ for more information.

    The currently activated Python version 2.7.16 is not supported by the project (^3.10).
    Trying to find and use a compatible version.

One way to fix this on Mac and possibly also on Linux is to edit the file `~/.poetry.bin/poetry `and change the Python path mentioned on the first line. The default path is probably the following

    #!/usr/bin/python

On older Macs, the path should (probably) be changed to

    #!/usr/local/bin/python3

It is advisable to verify the correct path with the command `which python3`.

### 8. Unit testing

Perhaps the most important stage in software development is quality assurance, and the most important means of quality assurance is testing, which should be automated as much as possible, since software has to be tested extensively. Especially in iterative/agile software development, the same tests must be performed again every time the program changes.

In the Python world, the leading tool for automated testing is \[unittest\]\[https://docs.python.org/3/library/unittest.html\]. If you are unfamiliar with unittest, review the basics [in this unittest guide](unittest.md).

The example application from the previous task already has some unit tests, so **let\'s expand the tests now**.

Remember that you can run the tests in the project\'s root directory with the command `poetry run pytest `or by switching to the virtual environment with the command `poetry shell `and then running the command `pytest`.

- Complete the tests for the warehouse project so that the branch coverage of the `Varasto `class tests is 100%.
  - You will need to take into account at least the cases where too much is attempted to be put into the warehouse and more than is available is attempted to be taken out of the warehouse.
  - The above is not enough
- You can find out the line coverage of the tests using the \[coverage\]\[https://coverage.readthedocs.io/en/coverage-5.3/\] tool. Familiarize yourself with the tool by reading [the Coverage instructions.](unittest.md#onko-jo-testattu-tarpeeksi-testauskattavuus)
- Enable the tool in your project by installing it *as a dependency during* project *development* with the command:

<!-- -->

    poetry add coverage --group dev

The command format depends on which version of Poetry you are using.

- Add a configuration file *.coveragerc* to the project\'s root directory, specifying which project files to collect test coverage from. The file should contain the following:

<!-- -->

    [run]
    source = src

- Go to the virtual environment with the command `poetry shell`
  - Run the command `coverage run --branch -m pytest`. The command runs the tests and collects the branch coverage of the tests
  - Then run the command `coverage html`. The command generates a report based on the collected data
- A directory *named htmlcov* should appear in the project\'s root directory. You can view the HTML-formatted test coverage report by opening the *index.html* file in the *htmlcov* directory in your browser
  - By clicking on the name of an individual file in the report, you can see which branches of the code have not yet been tested
- Add the file *.coverage* and the directory *htmlcov* to the project\'s *.gitignore* file
- When the branch coverage of the `Varasto `class (file *src/varasto.py*) is 100%, push your changes to GitHub.
  - The report will probably include other files as well, but only the branch coverage of the *src/varasto.*py file needs to be 100%. We will learn later how to exclude extra files from the report
  - When you edit the tests, remember to run the commands `coverage run --branch -m pytest `and `coverage html `again to update the report.
  - You can run both commands \"with a single click\" by placing them on the same line, separated by a semicolon `coverage run --branch -m pytest; coverage html`

### 9. GitHub Actions, part 1

With Poetry, running tests can be scripted, meaning they can be easily executed from the command line with a single command. The next step is to run the \[build process\]\[https://en.wikipedia.org/wiki/Software_build\], i.e., the steps required to run the program and the associated tests, on a separate build server.

The idea is that the software developer follows the following cycle:

- The latest version of the code is retrieved from the centralized version control repository to the software developer\'s computer.
- Additions and the tests that test them are made to a local copy
- The tests are performed on a local copy on the software developer\'s computer
- If everything is OK, the local changes are sent to a central repository
- The build server monitors the central repository and, when changes are detected, retrieves and compiles the changed code and runs tests on it
- The build server reports any errors it finds

A separate build server ensures that the software works elsewhere than on the computer of the software developer who made the changes. This practice is called *continuous integration*. We will return to this in more detail [in the third part](osa3.md#jatkuva-integraatio) of the course.

Nowadays, it is becoming common to use online \"build software\" instead of a separate build server, which means that software developers do not have to worry about installing the server and software used for building.

In this course, we will use the \[Actions\]\[https://github.com/features/actions\] feature, which was released on GitHub on November 15, 2019, and has since quickly gained popularity, to handle automated building.

Next, let\'s configure GitHub Actions to take care of our project.

Select the *Actions* tab in your GitHub repository and click the *set up a workflow yourself* link:

\![\]\[images/py-lh1-20.png\]

This will open the actions configuration file. Change it to the following format:

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
          - uses: actions/checkout@v4
          - name: Set up Python 3.10
            uses: actions/setup-python@v5
            with:
              python-version: '3.10'
          - name: Install Poetry
            run: pip install poetry
          - name: Install dependencies
            run: poetry install --no-root
          - name: Run tests
            run: poetry run coverage run --branch -m pytest

Press the green *Commit changes* button and enter an appropriate commit message.

The configuration file (named *main.yml* by default) is stored in your repository under the *.github/workflows* directory:

\![\]\[images/py-lh1-21-22.png\]

GitHub automatically commits the new file to your repository.

When you pull the repository code to your own machine, the configuration file will also be visible there. For example, in the Visual Studio Code editor, it looks like this:

\![\]\[images/py-lh1-22-23-acual.png\]

When I open the *Actions* tab in the repository, you will see that some items have appeared there:

\![\]\[images/py-lh1-23-23.png\]

### 10. GitHub Actions, part 2

Let\'s take a closer look at what\'s going on under the hood of GitHub Actions.

GitHub Actions are a series of different \"actions\" that GitHub can perform on the code in a repository. The actions are defined in files with the *.*yml extension located in the *.github/workflows* directory.

Let\'s take a look at the file we just defined:

    name: CI

    on:
      push:
        branches: [main]
      pull_request:
        branches: [main]

    jobs:
      build:
        runs-on: ubuntu-latest

        steps:
          - uses: actions/checkout@v4
          - name: Set up Python 3.10
            uses: actions/setup-python@v5
            with:
              python-version: '3.10'
          - name: Install Poetry
            run: pip install poetry
          - name: Install dependencies
            run: poetry install
          - name: Run tests
            run: poetry run coverage run --branch -m pytest

The \[on\]\[https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags\] section defines the situations in which actions are performed. Our configuration specifies that actions are always executed when code is pushed to the main branch of the repository (and also when a pull request is made to the main branch).

In the \[jobs\]\[https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobs\] section, you can define one or more \"jobs,\" i.e., a series of tasks consisting of several steps. This time, we only defined one job, which we named *build*. If there were multiple jobs, GitHub Actions would execute them in parallel.

A single job consists of several steps, which are defined under the job in the \[steps\]\[https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps\] section.

GitHub reserves a virtual machine for executing the steps of the job. The \[runs-on\]\[https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on\] section specifies the operating system on which the job steps are executed. In our example, the execution environment is Ubuntu Linux.

In our example, the task consists of five steps. The first step

    - uses: actions/checkout@v4

performs a predefined action \[checkout\]\[https://github.com/marketplace/actions/checkout\], which, according to its documentation, does the following

> This action checks out your repository under \$GITHUB_WORKSPACE, so your workflow can access it.

In other words, the *checkout* action fetches the repository code to the virtual machine executing the steps.

The second step is the action \[setup-python\]\[https://github.com/marketplace/actions/setup-python\], which installs the Python version we want on the virtual machine that executes the work. For some reason, the version number must be given in hexadecimal, i.e., in the form \'3.10\'. If there are no hyphens, GitHub Actions will try to install Python version 3.1.

Both of these actions were ready-made actions found on GitHub\'s \[marketplace\]\[https://github.com/marketplace?type=actions\]. For example, installing Python on the virtual machine that will perform the work is quite a complex task in itself, but a predefined action makes it easy.

The third step is a little different:

    - name: Install Poetry
      run: pip install poetry

It executes a command on the command line that installs Poetry.

The fourth step installs the project dependencies with the `poetry install `command.

The fifth step is the most important one; it runs the project\'s tests using Poetry and collects test coverage:

    - name: Run tests
      run: poetry run coverage run --branch -m pytest

Now make a change to the code that breaks the tests, commit it, and push the change to GitHub.

After a moment, the actions tab should show that there are two commits, and that the latest one is \"red\":

\![\]\[images/py-lh1-24-22.png\]

By clicking on the broken commit, you can take a closer look at the progress of the action:

\![\]\[images/py-lh1-25-22.png\]

As expected, the test failed. Depending on your GitHub settings, you may also have received an email notification about the failed build.

Fix the test and push the changes back to GitHub. Monitor the Actions view again and make sure everything is working correctly.

### 11. GitHub Actions, part 3

Add *a Status Badge* to the *README.md* file in the repository to show the status of the code.

According to \[this\]\[https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge\] guide, the badge address is in the format

    https://github.com/OWNER/REPOSITORY/actions/workflows/WORKFLOW-FILE/badge.svg

*WORKFLOW-FILE* can be found in the directory `.github/workflows`

With the default settings, the file name is *main.yml*

For example:

    https://github.com/mluukkai/ohtuvarasto/actions/workflows/main.yml/badge.svg

Add a badge by editing the *README.md* file directly in GitHub:

A properly functioning badge looks like this:

\![\]\[images/py-lh1-28-22.png\]

The badge acts as an indicator of whether the code in your repository is in good shape based on tests!

Now make a change on your computer to a file other than README.md in the repository and try to push the code to GitHub. This will result in an error:

    To github.com:mluukkai/ohtuvarasto.git
     ! [rejected]        main -> main (fetch first)
    error: failed to push some refs to 'git@github.com:mluukkai/ohtuvarasto.git'
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

You will probably encounter a similar error often. The reason for the error is that you are trying to push changes to GitHub even though GitHub is \"ahead\" of your local repository (i.e., the *README.md* file was added there).

The problem can be solved as follows. First, run the `git pull `command. Git will display a long error message:

    remote: Enumerating objects: 5, done.
    remote: Counting objects: 100% (5/5), done.
    remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
    Unpacking objects: 100% (3/3), 645 bytes | 215.00 KiB/s, done.
    From github.com:mluukkai/ohtuvarasto2
       6f1cd65..aa6c099  main       -> origin/main
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

In practice, Git wants to know what strategy should be used to merge the code in your local and remote repositories. It is best to choose the middle option, i.e., enter the command

    git config pull.rebase true

In practice, the selected option means that Git will perform new local commits after the commits in the remote repository.

You can now pull the code again with the command `git pull`. The command `git push `now works. In the future, you can handle similar situations with the commands `git pull `and `git push`.

If you modified the README.md file locally, you may have caused a merge conflict, which requires a little effort to resolve. We will return to this issue in the coming weeks\...

Finally, **create** a link from your badge to the Actions tab. This means that when the badge is clicked, the browser will be redirected to the Actions tab of the repository, e.g., in my case to <https://github.com/mluukkai/ohtuvarasto/actions>

### 12. Codecov

In Task 8, we defined the test coverage of the project using coverage. The <https://codecov.io> service allows you to publish the code coverage of projects online.

- Log in to \[Codecov\]\[https://codecov.io\] (GitHub login)
- Add the repository to Codecov:

\![\]\[images/lh1-12-22.png\]

You may have to wait a moment before Codecov finds your repository. You may also need to allow the repository to be visible via GitHub\'s \[settings\]\[https://github.com/apps/codecov\]. You can grant permission to all public repositories or to selected repositories:

\![\]\[images/lh1-codecov.png\]

After adding the project, *Step 2* in the view that opens contains an essential piece of information, namely *the repository token*:

\![\]\[images/codecov2.png\]

In practice, the Codecov repository token is *a key* that allows the service to identify you. Typically, such keys are not meant to be available to everyone in a public repository.

Now add the key for use with GitHub Actions by following the Codecov documentation. More information on including secrets in GitHub is available in \[GitHub\'s documentation\]\[https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions\].

We can generate a test coverage report that Codecov understands by using the `coverage xml `command instead of the` coverage html `command. This command generates an XML-formatted test coverage report. Let\'s add two new steps to the end of our GitHub Action configuration:

Add two new steps to the end of our GitHub Action configuration:

    {% raw %}
    - name: Coverage report
      run: poetry run coverage xml
    - name: Coverage report to Codecov
      uses: codecov/codecov-action@v4
      env:
        CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
    {% endraw %}

**NOTE:** lines must be indented to the same level as other steps.

Previously, Codecov did not require the use of an upload token for public repositories, but now it is necessary. In practice, the Codecov upload token is a key that allows the service to identify you. It is typical for such keys not to be made available to everyone in a public repository. Creating and adding a key for use with Github Actions is explained in \[Codecov\'s documentation\]\[https://docs.codecov.com/docs/adding-the-codecov-token\]. More information about including secrets in GitHub is described in \[GitHub\'s documentation\]\[https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions\].

To recap:

1.  Create a key according to Codecov\'s instructions
2.  Transfer the key to GitHub as a secret (in the GitHub repository, go to settings -\> secrets and variables / actions -\> New repository secret -\> name it CODECOV_TOKEN and enter the key as the value)
3.  Add the above steps to the GitHub Action configuration section

The next time the code is pushed to GitHub, a code coverage report will appear in Codecov:

\![\]\[images/codecov3.png\]

By clicking on the file names, you can view the lines covered by the testing of individual classes:

\![\]\[images/py-lh1-15-22.png\]

In practice, we now ask GitHub Actions to first run the tests and collect test coverage (with the command `poetry run coverage run --branch -m pytest`), after which an XML-formatted test coverage report is generated (with the command `poetry run coverage xml`). This test coverage report is sent to Codecov.

The GitHub Actions log shows how the steps are progressing:

\![\]\[images/py-lh1-29-22.png\]

Also add a Codecov badge to your repository\'s README.md file. You can find the badge in the Configuration menu on your repository\'s Codecov page.

Your project\'s GitHub page should end up looking something like this:

\![\]\[images/py-lh1-30-22.png\]

Please note that the GitHub Action and Codecov badges do not update in real time. This means that even if your project\'s test coverage increases, it will take a moment for the badge to reflect the new situation.

### 13. Better test coverage

The test coverage of the project is currently affected by the fact that the tests in the src/tests directory and the *src/index.*py file are also included in the test coverage calculation. We can specify that certain files or entire directories should be ignored when generating the coverage report.

Add an omit configuration to the *.coveragerc* file in the root directory and specify the files to be ignored:

    [run]
    source = src
    omit = src/tests/**,src/index.py

In the configuration, specify the paths separated by commas as \[glob\]\[\<https://en.wikipedia.org/wiki/Glob\_(programming\]\>). For example, we can ignore the path of a single file (*src/index.py*) or all paths under a specific directory (*src/tests/\*\**).

Push the code to GitHub and make sure that Codecov generates a report that ignores the *src/index.*py file and the files in the src/tests directory.

### Submitting assignments

Push all the tasks you have completed (except those that mention that the task will not be submitted anywhere) to your GitHub repository and mark the tasks you have completed \[in Timi\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/konfigurointitehtavat-osa-1\].
