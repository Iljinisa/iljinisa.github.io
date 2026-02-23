*This guide is a copy of the software engineering course \[Unittest guide\]\[https://ohjelmistotekniikka-hy.github.io/python/viikko2#unittest-ja-testaaminen\] with a few additions.*

Let\'s learn how to perform unit tests using the \[unittest\]\[https://docs.python.org/3/library/unittest.html\] application framework. In unit tests, the smallest structural components of the program, i.e., individual functions and class objects and their methods, are tested.

As an example, we will use the `PaymentCard `class, which contains methods for loading value and purchasing meals of different values:

    # meal prices are in cents
    AFFORDABLE = 250
    TASTY = 400

    class Payment card:
        def __init__(self, balance):
            # balance is in cents
            self.balance = balance

        def eat_cheaply(self):
            if self.balance >= AFFORDABLE:
                self.balance -= AFFORDABLE

        def eat_tasty(self):
            if self.balance >= TASTY:
                self.balance -= TASTY

        def load_money(self, amount):
            if amount < 0:
                return

            self.balance += amount

            if self.balance > 15000:
                self.balance = 15000

        def __str__(self):
            balance_in_euros = round(self.balance / 100, 2)

            return "The card has {:0.2f} euros".format(balance_in_euros)

**NOTE:** All monetary values, such as payment card balances and meal prices, are in cents.

### Task 1: Initial steps

Create *a* directory *called laskarit/viikko2* in the repository you registered in Labtool. In the terminal, run the command required to start the project:

    poetry init --python "^3.10"

The project information requested by Poetry is not important, so you can use the information suggested by Poetry.

Install the \[pytest\]\[https://docs.pytest.org/en/stable/\] application framework as a dependency for development, which makes it easier to run tests. You can install the dependency in the same directory with the command:

    poetry add pytest --group dev

Next, create the following structure in the payment card directory:

    payment card/
      src/
        paymentcard.py
        tests/
          __init__.py
          payment_card_test.py
      ...

Add the code for the PaymentCard class presented above to the *src/paymentcard.py* file.

Next, let\'s try to run the tests. Switch to the virtual environment with the command `poetry shell`, then run the command `pytest src`. Running the command shows that no tests have been run. The reason is simply that we haven\'t implemented any tests yet.

Let\'s implement the first test for our project in the src/tests/payment_card_test.py file. The file should contain the following:

    import unittest
    from maksukortti import Maksukortti

    class TestMaksukortti(unittest.TestCase):
        def setUp(self):
            print("Set up goes here")

        def test_hello_world(self):
            self.assertEqual("Hello world", "Hello world")

Run the command `pytest src `again in the virtual environment and we see that one test has been successfully executed. Note that *src* after the pytest command limits the search for tests to be executed to the src directory located in the project\'s root directory. If no value is given, pytest would start searching for tests to be executed directly from the project\'s root directory.

The command `pytest src `searches for tests to be executed in the src directory of the project\'s root directory, as well as recursively in all its subdirectories. In order for pytest to know which tests to execute, **you must follow the correct naming conventions.** These conventions are:

- The names of test files must end with the suffix \_test, e.g. payment_card_test.py
- The name of the class being tested must begin with the prefix Test, e.g. `TestPaymentCard`
- The name of the method being tested must begin with the prefix test\_, e.g. `test_hello_world`

Note that the test directory must contain an empty \_\_init\_\_.py file so that Python can find the modules correctly. Without this file, the test would crash with the following error:

    ModuleNotFoundError: No module named 'payment card'

If there are subdirectories in the test directory, they must also contain an empty \_\_init\_\_.py file.

Next, let\'s create the first meaningful test, which tests that the constructor of the PaymentCard class sets the balance correctly:

    import unittest
    from payment_card import PaymentCard

    class TestPaymentCard(unittest.TestCase):
        def setUp(self):
            print("Set up goes here")

        def test_constructor_sets_balance_correctly(self):
            # initialize payment card with 10 euros (1000 cents)
            card = PaymentCard(1000)
            response = str(card)

            self.assertEqual(response, "The card has 10.00 euros")

The first line creates a card with a balance of 10 euros. The purpose of the test is to ensure that the number specified as a parameter in the constructor becomes the initial balance of the card. This is verified by checking the balance of the card. The balance of the card can be determined from the string representation formed by the card\'s \_\_str\_\_ method. The second line of the test forms a string representation of the `card `variable and stores it in the variable `response`. The last line checks whether the response is the same as the expected result, i.e., \"The card has €10.00.\"

The check is performed using the assert command, which is widely used in unit testing. The command tests whether the expected result given as the first parameter is the same as the result obtained in the test given as the second parameter. There are many different assert methods (https://docs.python.org/3/library/unittest.html#assert-methods).

Next, run the test with the command `pytest src `and hope that the test passes.

An alternative way to define the same test would be as follows:

    def test_constructor_sets_balance_correctly(self):
        card = PaymentCard(1000)

        self.assertEqual(str(card), "The card has €10.00")

In other words, the value returned by the method call is not stored separately in a variable, but is called directly within the assertEqual comparison. Before the actual comparison is performed, a function call is made and the value returned by it is compared.

It is worth ensuring that the test actually finds errors, i.e., modify the previous test so that it does not pass (the assertEqual method claims that the balance should be 9 euros):

    def test_constructor_sets_balance_correctly(self):
        card = PaymentCard(1000)

        self.assertEqual(str(card), "The card has €9.00")

Running the tests shows that the test was not successful. Each failed test has a detailed explanation of the reason for the problem. In addition, the failed files and methods are listed in a more compact form at the end:

    FAILED src/tests/payment_card_test.py::TestPaymentCard::test_constructor_sets_balance_correctly -
    AssertionError: 'The card has €9.00' != 'The card has €10.00'

Next, let\'s do a test to make sure that the card balance decreases when the `syo_edullisesti `method is called:

    def test_syo_edullisesti_reduces_balance_correctly(self):
        card = PaymentCard(1000)
        card.syo_edullisesti()

        self.assertEqual(str(card), "There is €7.50 on the card")

Once again, the test begins with the creation of the card. Next, the card\'s method to be tested is called, and finally there is a line that ensures that the result is as desired, i.e., that the card\'s balance has been reduced by the price of an inexpensive lunch.

### A few notes

Both tests are simple and test only one thing, which is recommended practice even though it is possible to put several assertEqual method calls in one test. The tests are named so that the name clearly indicates what the test is testing. In addition, always remember to use the test\_ prefix in the method name. All tests are independent of each other, e.g., paying with a card does not affect the card balance except in the test where the card payment takes place. The order of the tests in the test code is irrelevant. It is a good idea to run the tests as often as possible, i.e., whenever you run a test (or change the normal code), run the tests!

Our tests are a bit awkward in that they test the change in the payment card status through the payment card string representation. We could also formulate the test so that it directly checks `the balance `of the payment card variable to ensure that its value is correct after the meal has been paid for:

    def test_syo_edullisesti_vahentaa_saldoa_oikein_2(self):
        card = PaymentCard(1000)
        card.eat_cheaply()

        # ensure that the remaining balance is 7.5 euros, i.e., 750 cents
        self.assertEqual(card.balance, 750)

This is a bit unfortunate, as one might think that the card\'s method of storing the balance in cents is an internal matter that the coder who implemented the card might even change later.

Let\'s create a new method for the card, `saldo_euroina`, which can be used to query the card\'s balance in euros:

    class PaymentCard:
        # ...

        def balance_in_euros(self):
            return self.saldo / 100

Let\'s modify the test to use the new method:

    def test_syo_reduce_balance_correctly_2(self):
        card = PaymentCard(1000)
        card.spend_economically()

        self.assertEqual(card.balance_in_euros(), 7.5)

### More tests

Let\'s do two more tests:

    def test_spend_deliciously_decreases_balance_correctly(self):
        card = PaymentCard(1000)
        card.spend_nicely()

        self.assertEqual(card.balance_in_euros(), 6.0)

    def test_syo_inexpensively_does_not_make_the_balance_negative(self):
        card = PaymentCard(200)
        card.spend_inexpensively()

        self.assertEqual(card.balance_in_euros(), 2.0)

The first test checks that eating cheaply reduces the balance correctly. The second test ensures that a cheap lunch cannot be purchased if the card balance is too low.

### Test setup

We notice that there is repetition in our test code: the first three tests all create a card with the same balance of 10 euros.

We will move the method creation to the initialization method defined in the test class, `setUp`:

    class TestPaymentCard(unittest.TestCase):
        def setUp(self):
            self.card = PaymentCard(1000)

        def test_constructor_sets_balance_correctly(self):
            self.assertEqual(str(self.card), "The card has €10.00")


        def test_spend_cheaply_decreases_balance_correctly(self):
            self.card.spend_inexpensively()

            self.assertEqual(self.card.balance_in_euros(), 7.5)

        def test_spend_tastyly_decrease_balance_correctly(self):
            self.card.spend_deliciously()

            self.assertEqual(self.card.balance_in_euros(), 6.0)

        def test_spend_economically_does_not_make_balance_negative(self):
            self.card.spend_inexpensively()

            self.assertEqual(self.card.balance_in_euros(), 2.0)

The setUp method is executed **before each test case** (i.e., test method). Each test case thus has access to a PaymentCard object with a balance of 10 euros. Note that the payment card being tested is stored in the test class\'s instance variable `self.card = PaymentCard(1000)`. This allows the test methods to see the payment card created by the `setUp `method.

Test methods can also initialize objects suitable for different purposes, as has been done in the test method `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi`. Note that in this case, `self.card `refers to the object variable initialized in the setUp method, while `card `refers to the internal variable of the method.

### More tests

Let\'s do another test for `the lataa_rahaa method`. The first test ensures that the loading is successful, and the second test ensures that the card balance does not exceed 150 euros.

    def test_card_can_be_loaded_with_money(self):
        self.card.load_money(2500)

        self.assertEqual(str(self.card), "The card has 35.00 euros")

    def test_card_balance_does_not_exceed_maximum_value(self):
        self.card.load_money(20000)

        self.assertEqual(str(self.card), "The card has €150.00")

### Optional task: add more tests

Finally, add the following tests to the payment card:

- Eating a tasty lunch does not bring the balance into negative territory. Use the test `test_eat_cheaply_does_not_bring_balance_into_negative_territory `as a model for this.
- Loading a negative amount does not change the card balance
- The card can be used to buy an inexpensive lunch when there is only enough money on the card for an inexpensive lunch (i.e., 2.5 euros)
- You can buy a tasty lunch with the card when there is only enough money on the card for a tasty lunch (i.e., €4).

**NOTE:** It is recommended that each test only tests \"one thing\" at a time. Therefore, create a separate test for each of the above.

**NOTE 2:** Always write assertEqual commands so that the first parameter is the result obtained and the second parameter is the expected result. For example:

    self.assertEqual(self.card.balance_in_euros(), 150.0)

### The tests are independent of each other

As mentioned above, the tests are independent of each other, meaning that both tests function as small, independent functions. What does this mean?

The payment card is tested using several small test methods, each of which begins with the prefix test\_. Each separate test tests one small thing, e.g., that the card balance is reduced by the price of lunch. The intention is that each test starts with a \"clean slate,\" i.e., before each test, a new card is created in the setUp method that performs the initialization.

Each test therefore starts from a situation where the card has just been created. After this, the test either calls the method to be tested directly or first creates a suitable initial situation and then calls the method to be tested. This was done in the test method `test_syo_edullisesti_ei_vie_saldoa_negatiiviseksi`, which initialized a separate payment card with insufficient balance to purchase an inexpensive lunch. This was used to test that eating an inexpensive lunch does not cause the balance to become negative.

### The test class as a whole

    import unittest
    from payment card import Payment card

    class TestPaymentCard(unittest.TestCase):
        def setUp(self):
            self.card = PaymentCard(1000)

        def test_constructor_sets_balance_correctly(self):
            self.assertEqual(str(self.card), "The card has €10.00")


        def test_spend_cheaply_decreases_balance_correctly(self):
            self.card.spend_inexpensively()

            self.assertEqual(self.card.balance_in_euros(), 7.5)

        def test_spend_tastyly_decrease_balance_correctly(self):
            self.card.spend_deliciously()

            self.assertEqual(self.card.balance_in_euros(), 6.0)

        def test_spend_inexpensively_does_not_make_balance_negative(self):
            card = PaymentCard(200)
            card.spend_inexpensively()

            self.assertEqual(card.balance_in_euros(), 2.0)

        def test_card_can_be_loaded_with_money(self):
            self.card.load_money(2500)

            self.assertEqual(self.card.balance_in_euros(), 35.0)

        def test_card_balance_does_not_exceed_maximum_value(self):
            self.card.load_money(20000)

            self.assertEqual(self.card.balance_in_euros(), 150.0)

### Has it been tested enough: test coverage

We are satisfied and believe that there are now enough test cases. Is this really the case? Fortunately, there are tools available to check the line and branch coverage of tests. *Line coverage* measures which lines of code have been examined by the tests. Of course, even complete line coverage does not guarantee that the program works correctly, but it is better than nothing. *Branch coverage,* on the other hand, measures which different execution branches of the code have been executed. Execution branches refer to, for example, selection situations in if statements.

Since branch coverage typically provides a more realistic picture of test coverage, we use it as a measure of test coverage in the course.

### Test coverage report

Test coverage data can be collected from test runs using the \[coverage\]\[https://coverage.readthedocs.io/en/latest/\] tool. It can be installed as a dependency during project development using the familiar command:

    poetry add coverage --group dev

Test coverage for tests run with` the pytest src `command can be collected in a virtual environment with the command:

    coverage run --branch -m pytest src

With the `--branch `flag, we can collect the \[branch coverage\]\[https://coverage.readthedocs.io/en/latest/branch.html\] of the tests. Note that the` pytest `src command limits the test search to the src directory located in the project\'s root directory. After executing the command, we can print a report on the collected test coverage to the command line with the command:

    coverage report -m

The result looks like this:

    Name                            Stmts   Miss Branch BrPart  Cover   Missing
    ---------------------------------------------------------------------------
    src/payment_card.py                 22      1      8      2    90%   15->exit, 20
    src/tests/__init__.py               0      0      0      0   100%
    src/tests/payment_card_test.py      23      0      0      0   100%
    ---------------------------------------------------------------------------
    TOTAL                              45      1      8      2    94%

### Excluding files from the report

From the output, we can see that the report contains a large number of files that are unnecessary for the project. We can configure which files to collect test coverage from in the project\'s root directory *.*coveragerc file. If we want to include only the project\'s src directory in the test coverage, the configuration is as follows:

    [run]
    source = src

We can exclude files and directories from test coverage. For example, it might be sensible to exclude the test directory, the user interface code directory, and the *src/index.*py file from test coverage. This can be done by making the following change to the *.coveragerc* file:

    [run]
    source = src
    omit = src/**/__init__.py,src/tests/**,src/ui/**,src/index.py

Now, running the commands `coverage run --branch -m pytest src `and `coverage report -m `will only include the files in the src directory that we want:

    Name                 Stmts   Miss Branch BrPart  Cover   Missing
    ----------------------------------------------------------------
    src/payment_card.py      22      1      8      2    90%   15->exit, 20
    ------------------------------------------------
    TOTAL                   22      1      8      2    90%

### More visual test coverage report

A clearer presentation of the report readable from the command line can be generated with the command:

    coverage html

Executing this command creates a directory *called htmlcov* in the project\'s root directory. The report can be viewed in a browser by opening the *index.html* file in the directory. The report that opens in the browser looks something like this:

\![\]\[images/unittest0.png\]

The report shows that the branch coverage of the entire code is 90%. The branch coverage of an individual file can be seen in the \"coverage\" column of the table. Clicking on the name of an individual file in the table opens the file\'s code and the branches covered by the tests. Covered branches are shown as green bars next to the line number. Branches that are not covered at all are highlighted in red. If a branch is partially covered, it is highlighted in yellow. By hovering the mouse over the row, we can see a more detailed explanation of why the branch is not fully covered:

\![\]\[images/unittest.png\]

\![\]\[assets/images/python/coverage-file.png\]

In the situation shown in the image, the two if conditions never received a value `of True`, so those branches were not covered in the tests.

After making changes to the code, you need to run two commands to check the new test coverage. You can run both commands \"with a single click\" by placing them on the same line, separated by a semicolon

    coverage run --branch -m pytest src; coverage html

### Note on testing larger projects

It is worth noting that **the subdirectories** of the src directory (not the src directory itself) must contain empty \_\_init\_\_.py files in order for all desired files to be included in the test coverage. For example, in the Software Engineering course \[reference application\]\[{{site.python_reference_app_url}}\], \_\_init\_\_.py files have been added as follows:

    src/
      entities/
        __init__.py
        todo.py
        ...
      repositories/
        __init__.py
        todo_repository.py
        ...
      services/
        __init__.py
        todo_service.py
      ...
