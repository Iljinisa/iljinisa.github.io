*This guide is a copy of the Software Engineering \[Poetry Guide\]\[https://ohjelmistotekniikka-hy.github.io/python/viikko2#poetry-ja-riippuvuuksien-hallinta\] guide with a few additions.*

In large and complex software projects, it is no longer practical to produce all the code yourself. For example, it does not make sense to implement a separate programming interface for database operations or an application framework for testing code in every software project. To avoid having to reinvent the wheel every time, software developers have created a huge number of open source *libraries* that anyone can use in their projects.

The source code for libraries can often be found on version control platforms such as GitHub. Libraries are often updated continuously, and these updates give rise to new *versions* of the libraries. Library versions are published in various registries, from which they can be easily installed. The Python Package Index (https://pypi.org/) (PyPI) is one such registry for Python libraries.

The library versions used in a project are *the* project\'s *dependencies*. In Python projects, dependencies are typically installed *in* project-specific *virtual environments* to avoid conflicts between the dependencies of projects on the same computer. To make dependency management in virtual environments easier, we use the \[Poetry\]\[https://python-poetry.org/\] command line tool in this course.

### Notes on commands

On many computers, Python version 3 commands are executed with the` python3 `command instead of the `python `command. Check the version you are using with the command:

    python3 --version

If the `python3 `command cannot be found for some reason, check the version used by the `python `command with the command:

    python --version

If in both cases the version is lower than 3.10, install the \[latest Python version\]\[https://www.python.org/downloads/\] on your computer. After installation, make sure that the correct version is in use. Otherwise, use a command that uses at least version 3.10.

*The course uses Poetry version 1.6.1. If you have an older version on your computer, you should update it!*

### Installation

Before we can learn more about how to use Poetry, we must first install it. Follow the installation instructions below for your computer\'s operating system, and be sure to check out Poetry\'s \[official\]\[https://python-poetry.org/docs/\] installation instructions.

**NOTE:** All installation methods may require closing and reopening the terminal window for Poetry\'s commands to start working. In some cases, you may even need to restart your computer.

#### Linux and macOS installation

Install Poetry by running the following command in the terminal:

    curl -sSL https://install.python-poetry.org | POETRY_HOME=$HOME/.local python3 -

**NOTE:** If the python3 command is not found, use the python command at the end of the command instead. However, make sure that the Python version is correct according to the previous instructions.

**NOTE:** If you encounter the `SSL: CERTIFICATE_VERIFY_FAILED `error on a macOS computer, open the Python installation directory with the command `open /Applications/Python\ 3.9 `(replace \"3.9\" with the Python version you are using) and click on the *Install Certificates.command* file in the directory. Wait for the operation to complete and then run the above installation command again.

After installation, the path to the Poetry binary must be set in the PATH variable. This can be done by adding the following line to the end of the *.*bashrc file in your home directory:

    export PATH="$HOME/.local/bin:$PATH"

You can do this by editing the file with the nano editor, for example, or by running the following command:

    echo "export PATH=\"\$HOME/.local/bin:\$PATH\"" >> $HOME/.bashrc

**NOTE:** If you are using the zsh command line, the correct configuration file is *.*zshrc instead of *.*bashrc. You can check which command line you are using with the command `echo $SHELL`. In this case, use the path `$HOME/.zshrc `instead of the `$HOME`/.bashrc path used in the previous command.

**NOTE:** If you are using macOS and the bash command line, use the path `$HOME/.bash_profile `instead of the path \$`HOME`/.bashrc used in the previous command.

**NOTE:** If you are using a melkki server, use the path `$HOME/.profile `instead of the` $HOME`/.bashrc path used in the previous command.

Restart the terminal and verify that the installation was successful by running the command `poetry --version`. The command should print the installed version.

#### Windows installation

Install Poetry by running the following command in the terminal:

    (Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -

After installation, the path to the Poetry binary must be set in the PATH variable. Add the path `%APPDATA%\Python\Scripts `to the PATH variable as described in \[this\]\[https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/\] guide.

Restart the terminal and verify that the installation was successful by running the command `poetry --version`. The command should print the installed version.

#### Poetry and Docker

Perhaps the best way to develop applications with Poetry is to use \[Docker\]\[https://www.docker.com/\]. In this case, you don\'t need anything else on your machine except Docker; no actual installation is required because you can use the Docker image configured for the course \[mluukkai/poetry\]\[https://hub.docker.com/repository/docker/mluukkai/poetry/general\], see also \[GitHub repository\]\[https://github.com/mluukkai/docker-poetry\].

Poetry is used as follows. Go to the directory where you want to execute Poetry commands. You will (probably) need to give Docker read and write permissions to the directory contents with the command:

    chmod  o=rw .

Enter the command

    docker run -it --volume="$PWD:/mydir" mluukkai/poetry:intel

If your machine is an M1 Mac, the command format is as follows:

    docker run -it --volume="$PWD:/mydir" mluukkai/poetry:m1

The command opens the command interpreter in the Docker container, where all Poetry commands, such as `poetry init`, `poetry add`, `poetry shell`, etc., are available. The container sees all files in the startup directory. You can edit files as usual with a text editor outside the container. The command interpreter in the Docker container is closed with `the exit `command.

Learn more about Docker in the course \[Devops with Docker\]\[https://devopswithdocker.com/\].

#### Docker and Robot tests

When testing web applications, use the image \[mluukkai/poetry-robot\]\[https://hub.docker.com/repository/docker/mluukkai/poetry-robot/\] instead of \[mluukkai/poetry\]\[https://hub.docker.com/repository/docker/mluukkai/poetry\]. The image only works on machines with Intel processor architecture, so M1 users will have to find another solution\...

In order for the web application running in the container to be visible to the host machine, when starting the container, the container\'s port 5001 (where the application runs) must be published to the host machine\'s port. This is done as follows:

    docker run -it -p 5001:5001 --volume="$PWD:/mydir" mluukkai/poetry-robot

Robot tests are performed by using the `docker exec `command to go to the same container where the application is already running:

    docker exec -it containerID bash

The container ID can be found with the `docker ps `command.

Unfortunately, the tests only work in headless mode, which you can enable as described at the beginning of \[task 7\]\[tasks3/#7-web-application-testing-part-3\].

It is also possible to run the tests with the browser displaying the tests. However, this requires some additional configuration. If you are interested, you can search for information using keywords such as \[linux docker gui apps\]\[https://www.google.com/search?q=linux+docker+gui+apps\].

### Problems installing Poetry?

[At the end](poetry.md#ratkaisuja-yleisiin-ongelmiin) of this page, you will find instructions for a few problem situations.

### Fine-tuning the settings

Before we start using Poetry, let\'s make a small change to the configuration.

We can see the configurations in use with the command `poetry config --list`, which will display the following

    cache-dir = "/Users/mluukkai/Library/Caches/pypoetry"
    experimental.system-git-client = false
    installer.max-workers = null
    installer.modern-installation = true
    installer.no-binary = null
    installer.parallel = true
    virtualenvs.create = true
    virtualenvs.in-project = false
    virtualenvs.options.always-copy = false
    virtualenvs.options.no-pip = false
    virtualenvs.options.no-setuptools = false
    virtualenvs.options.system-site-packages = false
    virtualenvs.path = "{cache-dir}/virtualenvs"   # /Users/mluukkai/Library/Caches/pypoetry/virtualenvs
    virtualenvs.prefer-active-python = false
    virtualenvs.prompt = "{project_name}-py{python_version}"

There are a couple of points in the configuration that are of interest to us. *cache-dir* and *virtualenvs.path* together indicate that the virtual environment for each project is stored by default in the folder */Users/mluukkai/Library/Caches/pypoetry*. This may be an acceptable solution, but I personally prefer to store each project\'s virtual environment in the project directory. This is common practice in the JavaScript ecosystem, for example. The configuration is done as follows

    poetry config virtualenvs.in-project true

The output of the command `poetry config --list `should now include the following line:

    virtualenvs.in-project = true

### Initializing the project

Let\'s practice using Poetry by creating a small sample project. Create a directory *called poetry-test* in the directory of your choice. The directory does not need to be in the repository you registered in Labtool. Open the directory in the terminal and run the following command:

    poetry init --python "^3.10"

The `--python "^3.10" `setting in the command sets the Python version requirement for the project to at least version 3.10. Executing the command will prompt you with a series of questions. You can answer the questions as you wish, and all answers can also be edited later. Therefore, skipping the questions by pressing the Enter key is a perfectly good option.

Once you have answered the last question, check the contents of the directory. A *pyproject.*toml file should appear in the directory with the following content:

    [tool.poetry]
    name = "poetry-test"
    version = "0.1.0"
    description = ""
    authors = ["Matti Luukkainen <matti.luukkainen@helsinki.fi>"]
    readme = "README.md"

    [tool.poetry.dependencies]
    python = "^3.10"

    [build-system]
    requires = ["poetry-core"]
    build-backend = "poetry.core.masonry.api"

The `[tool.poetry] `section of the file contains general information about the project, such as its name, description, and maintainers. Below this section are sections that list the project\'s dependencies. In the `[tool.poetry.dependencies] `section, we can see the Python version requirement we set when running the` poetry `init command, which is `python = "^3.10"`. The` ^3.`10 notation means that the project requires at least Python version 3.10 to run.

Once you are familiar with the *pyproject.toml* file, finalize the project setup by running the command:

    poetry install

Running this command performs the necessary initialization steps for the project, such as setting up the virtual environment and installing dependencies. For this reason, the command must always be run before starting to use a new project.

Running the command may result in the following message:

    Installing the current project: poetry-test (0.1.0)
    The current project could not be installed: [Errno 2] No such file or directory: '~/poetry-testi/README.md'
    If you do not want to install the current project, use --no-root

This is because Poetry is also trying to install the current project, and the project does not have a module called poetry-testi. Despite the appearance of the text, this is not an error, but rather a warning. The project has been initialized, but if you do not want the warning, you can use the command format:

    poetry install --no-root

In addition to initializing the virtual environment, this command only installs the project dependencies, not the project itself.

After executing the `poetry install `command, a file *named poetry.lock* should appear in the directory. This file contains the version information for all installed dependencies. With this information, Poetry can always install the exact right versions of dependencies with the` poetry install `command. For this reason, the file should be added to version control.

Due to [the changes](poetry.md#asetusten-hienosäätö) we have made [to the settings,](poetry.md#asetusten-hienosäätö) a file *called .venv* will also be added to the directory, in which Poetry stores the project\'s virtual environment and its dependencies. This file *should not be stored* in version control, so it should be added to the *.gitignore* file immediately.

It is worth noting that the *.venv* directory is not visible by default with *the ls command*, as in Unix-type operating systems, files beginning with a dot are \[hidden files\]\[https://help.ubuntu.com/stable/ubuntu-help/files-hidden.html.en\]. The *ls -a* command also displays hidden files/directories. An even better option is *ls -la*, which prints the information in a slightly more detailed format:

\![\]\[images/lh1-venv.png\]{:height="350px" }

### Installing dependencies

Warning: pip

You may have installed the dependencies required by Python using the pip command. Do not use pip in this course, because if you do, there is a 99.9% chance that you will do something wrong.

In this course, dependencies are installed with poetry.

Next, let\'s install the first dependency for our project. The easiest way to find dependencies is to Google them and search the results for suitable GitHub repositories or PyPI pages. As an example, let\'s install the \[cowsay\]\[https://pypi.org/project/cowsay/\] library in our project. This can be done in the project\'s root directory (the same directory where the *pyproject.*toml file is located) with the command:

    poetry add cowsay

The installation command is therefore in the form `poetry add <library>`. After executing the command, we notice that there is new content under the `[tool.poetry.dependencies] `section of the *pyproject.toml* file:

    [tool.poetry.dependencies]
    python = "^3.10"
    cowsay = "^2.0.3"

The` poetry add `command installs the latest version of the library by default, which was` 2.0.3 `at the time of execution. Often, this is exactly what we want to do. However, if we want to install version` 1.0 `of the cowsay library, for example, we can do so with the command:

    poetry add cowsay==1.0

If we wanted to remove the library from our project\'s dependencies, we could do so with the command:

    poetry remove cowsay

However, let\'s keep the cowsay library installed for now.

### Executing commands in a virtual environment

Next, let\'s add the *src* directory and the *index.py* file to the poetry-test directory. Add the following lines of code to the file:

    import cowsay

    cowsay.tux("Poetry is awesome!")

In the code, we use the import statement to make the cowsay library available to us. If we execute the file in the terminal with the command:

    python3 src/index.py

The result is the following error message:

    ModuleNotFoundError: No module named 'cowsay'

This is because we are not inside the project\'s virtual environment, which is why Python cannot find our project\'s dependencies. This can be fixed by using the \[run\]\[https://python-poetry.org/docs/cli/#run\] command:

    poetry run python3 src/index.py

The` poetry run `command executes the given command in a virtual environment where Python can find our dependencies.

When actively developing a project and constantly executing commands in the terminal, it is most convenient to be inside the virtual environment at all times. We can enter the virtual environment with the \[shell\]\[https://python-poetry.org/docs/cli/#shell\] command:

    poetry shell

When we are in the virtual environment, the name of the virtual environment is displayed in parentheses in front of the command line prompt:

    $ (poetry-test-IhtScY6W-py3.9)

Inside the virtual environment, we can execute the command \"normally\", i.e. without the run command:

    python3 src/index.py

We can exit the virtual environment with `the exit `command.

The dependencies imported by Poetry are only available in the virtual environment, and VS Code\'s built-in \"debugging mode\" (F5 by default) may not work. First try `the poetry shell `and only then start VS Code with the command `code /path/to/project`.

### Dependencies during development

With Poetry, dependencies can be grouped according to their purpose. A fairly common way to group dependencies is to group them into *development* and runtime dependencies. Development dependencies are needed during software development, but they are not necessary for program execution.

Running the `poetry add `command installs dependencies under the `[tool.poetry.dependencies] `section by default. In addition to these dependencies, we can install dependencies in our project that we only need during development. These dependencies are all those that are not required to run the application itself (for example, executing the` python3 src/index.py `command).

You can install dependencies during development by adding the` --group `dev flag to the` poetry add `command. For example, you can install the \[pytest\]\[https://pytest.org/\] library, which you will soon become familiar with, as a development dependency with the following command:

    poetry add pytest --group dev

Executing this command adds the pytest library as a dependency under the `[tool.poetry.group.dev.dependencies] `section:

    [tool.poetry.group.dev.dependencies]
    pytest = "^7.4.2"

Defining development dependencies is convenient because it reduces the number of dependencies to be installed in cases where we only want to run the application. In this situation, dependencies can be installed with the command `poetry install --without dev`.

Warning: pip

You may have installed dependencies required by Python using the pip command. Do not use pip in this course, because if you do, there is a 99.9% chance that you will do something wrong.

In this course, dependencies are installed with poetry.

### Solutions to common problems

Remember that before you can execute a command, e.g.

    pytest src/tests

, you must activate the virtual environment by entering the command

    poetry shell

If you still get a complaint that the library used by the program cannot be found (and you are sure that the library is installed), reinstall the dependencies and the virtual environment by entering the commands:

    rm -rf .venv
    rm poetry.lock
    poetry install

Then try again!

#### Other problems

Poetry problems can often be solved by doing the following:

1.  Ensure that the latest version of Poetry is installed by running the command `poetry self update`

2.  Ensure that the *pyproject.toml* file has the correct Python version requirement:

- [tool.poetry.dependencies]
      python = "^3.10"

  **If the version is incorrect**, change it to the correct one and run the command `poetry update`

3.  Clear the cache by running the commands `poetry cache clear pypi --all `and `poetry cache clear PyPi --all`

4.  List the virtual environments used in the project with the command `poetry env list `and remove them one by one with the command `poetry env remove <name>`. For example:

- $ poetry env list
      unicafe-jLeQYxxf-py3.9 (Activated)
      $ poetry env remove unicafe-jLeQYxxf-py3.9
      Deleted virtualenv: /Users/kalleilv/Library/Caches/pypoetry/virtualenvs/unicafe-jLeQYxxf-py3.9

  Once the virtual environments have been removed, run the command `poetry install`

Once all steps have been completed, try running the failed Poetry command again.

#### Keyring problem

If running the `poetry install `command prompts you for a keyring password, the problem should be solved by running `export PYTHON_KEYRING_BACKEND=keyring.backends.fail.Keyring `in the terminal and then running the `poetry install `command again. You can put this line in your *.bashrc* (or similar) file so that you don't have to run it at the beginning of every terminal session.