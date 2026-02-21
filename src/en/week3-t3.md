>\>\>

In the `AppLibrary.py `file, all methods are implementations of Robot keywords. Since this is a command line application, AppLibrary also has to create an object App in its constructor that corresponds to the application being tested. For example, when testing a web application, this is not (necessarily) necessary, and the role of AppLibrary can be solely to implement keywords.

The constructor creates the application to be tested and injects it with a StubIO object, through which the test can communicate with the application, as well as UserService:

    class AppLibrary:
        def __init__(self):
            self._io = StubIO()
            self._user_repository = UserRepository()
            self._user_service = UserService(self._user_repository)

            self._app = App(
                self._user_service,
                self._io
            )

In practice, the constructor does the same thing as when the application is started normally:

    def main():
        user_repository = UserRepository()
        user_service = UserService(user_repository)
        console_io = ConsoleIO()
        app = App(user_service, console_io)

        app.run()

However, the AppLibrary constructor does not yet start the program with its `run `method.

*The keywords* used in the tests are

    Run Application
    Input
    Output Should Contain
    Create User

The first of these is implemented in AppLibrary by the following method:

    class AppLibrary:
        #...

        def run_application(self):
            self._app.run()

In other words, this is the application launch.

Before launching the application, it is given simulated user input using the parametric keyword `Input`. The keyword is implemented as follows in the AppLibrary class:

    class AppLibrary:
        def __init__(self):
            self._io = StubIO()

            # ...

        def input(self, value):
            self._io.add_input(value)

The method adds the input to the application object App injected into the StubIO object.

The purpose of the keyword `Output Should Contain `is to use the StubIO object to test whether the application has responded as desired to the simulated input given to it. The implementation of the keyword is as follows:

    class AppLibrary:
        def __init__(self):
            self._io = StubIO()

            # ...

        def output_should_contain(self, value):
            outputs = self._io.outputs

            if not value in outputs:
                raise AssertionError(
                    f"Output \"{value}\" is not in {str(outputs)}"
                )

There is a third keyword used in testing, `Create User`, which is used in test initialization. This keyword is used to create a \"default user\" for the application.

In robot tests, it is common to perform initialization steps \"bypassing the user interface,\" i.e., directly at the application logic level. In AppLibrary, this is done by directly calling the UserService object method, which happens to have the same name:

    class AppLibrary:
        def __init__(self):
            self._user_repository = UserRepository()
            self._user_service = UserService(self._user_repository)

            # ...

        def create_user(self, username, password):
            self._user_service.create_user(username, password)

The test setup could be simplified so that the default user would be created directly in the AppLibrary constructor when the application is initialized:

    class AppLibrary:
        def __init__(self):
            self._io = StubIO()
            user_service = UserService(UserRepository())
            # create default user
            user_service.create_user("kalle", "kalle123")

            self._app = App(
                user_service,
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

This way, the keyword `Create User `and its implementation could be removed.

\<\<\