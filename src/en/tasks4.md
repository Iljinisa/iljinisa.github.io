The exercises introduce you to dependency mocking in unit tests.

### Are there any typos or ambiguities in the exercises?

Suggest [corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

### Problems with Poetry?

[Here are](ongelmia.md) some instructions

**All of this week\'s assignments should be submitted to the** same **repository** you used in previous weeks, in the *part4* directory.

### VS Code configuration

Do you know how to configure VS Code correctly? If not, read \[this\]\[tasks2/#bonus-vs-code-configuration\]!

### 1. Unit testing and dependencies: mock library, part 1

Most classes have dependencies on other classes. For example, in the NHL statistics task in [week 2](tehtavat2.md#5-riippuvuuksien-injektointi-osa-2-nhl-tilastot), the `StatisticsService `class depends on `the PlayerReader `class. With dependency injection, we were able to conveniently break down the dependencies between classes.

Even if classes do not have dependencies on other classes, the situation is still that the objects of a class use the services of objects of some other classes. This sometimes makes unit testing difficult. How, for example, should the `StatisticsService `class be tested? Should the tests include working versions of all its dependencies?

One solution is to program a dependency replacement \"stub component\" `PlayerReaderStub `and inject it in place of the PlayerReader class used in production:

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

Python, like all other languages, also offers ready-made libraries for creating stub components, also known as *mock objects*.

As we will soon see, mock objects are not just \"stub objects\"; mocks can also be used to ensure that the method or function being tested calls the object\'s methods in the appropriate manner.

Let\'s now take a look at the \[mock\]\[https://docs.python.org/3/library/unittest.mock.html\] library in the unittest module. The \[Mock\]\[https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock\] class can be imported from the library. Let\'s see what the class can do by starting an interactive Python terminal with the command `python3 `(there is no need for a virtual environment because we are not using external dependencies):

    >>> from unittest.mock import Mock
    >>> mock = Mock()
    >>> mock
    <Mock id='4568521696'>

Enter the inputs into the terminal one at a time. Pressing the Enter key executes the given input. The variable `mock `therefore contains an object of the Mock class. Objects of the Mock class have the interesting feature that all their possible attributes and methods have been implemented. What does this mean? Let\'s try it out:

    >>> mock.foo
    <Mock name='mock.foo' id='4568521648'>
    >>> mock.foo.bar()
    <Mock name='mock.foo.bar()' id='4570560112'>

All given operations return a new Mock object. We can give the object\'s methods the desired return values using the \[return_value\]\[https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.return_value\] attribute:

    >>> mock.foo.bar.return_value = "Foobar"
    >>> mock.foo.bar()
    'Foobar'

We can also give the methods the desired implementations using the \[side_effect\]\[https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.side_effect\] attribute:

    >>> mock.foo.bar.side_effect = lambda name: f"{name}: Foobar"
    >>> mock.foo.bar("Kalle")
    'Kalle: Foobar'

The value of the `side_effect `attribute must be callable, such as a function, method, or lambda. Note that a Mock object can also be used like a function:

    >>> get_name_mock = Mock(return_value = "Matti")
    >>> get_name_mock()
    'Matti'

In addition to implementations, assumptions can be defined for mocks. For example, we can assume that the mock object has been called:

    >>> mock.foo.bar.assert_called()
    >>> mock.foo.doo.assert_called()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
      File "/Users/kalleilv/.pyenv/versions/3.9.0/lib/python3.9/unittest/mock.py", line 876, in assert_called
        raise AssertionError(msg)
    AssertionError: Expected 'doo' to have been called.

So we can call the method under consideration the \[assert_called\]\[https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called\] method. Note that the` mock.foo.`bar method has been called, but the` mock.foo.`doo method has not. We can also verify that the method has been called with the correct arguments using the \[assert_called_with\]\[https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called_with\] method.

Once you are familiar with Mock objects, you can close the terminal with `the exit() `command.

**Next, retrieve the project located in the \[course repository\]\[{{site.python_exercise_repo_url}}\] directory, *section 4/mock-demo*.** - This exercise does not involve writing any code, so there is no need to commit the project. - If you wish, you can copy the project to your commit repository, inside the osa4 directory.

The project is a simple online store whose application logic is implemented by the `Kauppa `class. The class has dependencies on the Pankki and Viitegeneraattori objects.

The operating principle of Kauppa is simple:

    my_net_bank = Bank()
    references = ReferenceGenerator()
    shop = Shop(my_net_bank, references)

    shop.start_shopping()
    transaction.add_purchase(5)
    transaction.add_item(7)
    trade.pay("1111")

Shopping is started by calling the method `start_shopping`. After this, products are added to the \"shopping cart\" and their prices are multiplied by the parameter of the method `add_shopping`. Shopping is ended by calling the method `pay, `which receives the account number from which the amount will be debited as a parameter.

The store makes the charge using the `Bank `object of the class it knows. The reference number used is the number generated by `the ReferenceGenerator `class.

Six tests utilizing the Mock class have been written for the project. The tests verify that the store debits the purchase correctly, i.e., that it calls the Bank class\'s `pay `method with the correct parameters and that a `new `reference number has been requested from the ReferenceGenerator class method for each invoice. The tests do not focus on the state of the store object, but on the correctness of its interactions with other objects. In the tests, the dependencies of the store (`Bank `and `ReferenceGenerator`) are defined as mock objects.

The following test checks that the transaction calls the bank method with the correct account number and amount:

    def call_bank_with_correct_account_number_and_amount(self):
        bank_mock = Mock()
        reference_generator_mock = Mock(wraps=ReferenceGenerator())

        transaction = Transaction(bank_mock, reference_generator_mock)

        transaction.start_shopping()
        transaction.add_purchase(5)
        store.add_item(5)
        store.pay("1111")

        # let's check that the values of the first and second parameters are correct
        bank_mock.pay.assert_called_with("1111", 10, ANY)

The test starts by creating mock objects for the dependencies of the transaction:

    bank_mock = Mock()
    reference_generator_mock = Mock(wraps=ReferenceGenerator())

    trade = Trade(bank_mock, reference_generator_mock)

Using the` wraps `parameter of the `mock `class \[constructor\]\[https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock\], we can define which object the` mock `object implements. This means that we don\'t need to define an implementation for the new method, for example, but can use its actual implementation instead.

So now the reference generator is an object whose `new `method returns the values 1, 2, 3\...

The test checks that the method calls made to the store cause the bank\'s Mock object\'s `maksa `method to be called with the correct parameters. The third parameter, i.e., the reference number, is ignored:

    bank_mock.pay.assert_called_with("1111", 10, ANY)

As shown in the previous examples, it is possible to define the return values of method calls made to mock objects. The following defines that the reference generator returns the value` 55 `when its method `new `is called:

    def test_use_refunded_reference_in_payment(self):
        bank_mock = Mock()
        reference_generator_mock = Mock()

        # always return the value 55
        reference_generator_mock.new.return_value = 55

        transaction = Transaction(bank_mock, reference_generator_mock)

        trade.start_shopping()
        store.add_item(5)
        store.add_item(5)
        store.pay("1111")

        # let's check that the value of the third parameter is correct
        bank_mock.pay.assert_called_with(ANY, ANY, 55)

At the end of the test, we verify that the bank\'s Mock object has been called with the correct parameter values, i.e., the third parameter must be the value returned by the reference generator.

Check out the project and all its tests. Install the project dependencies with the command `poetry install `and then run the tests in a virtual environment with the command `pytest`. Break one of the tests, for example one of the ones mentioned above, by changing its expectation as follows:

    pankki_mock.maksa.assert_called_with(ANY, ANY, 1000)

And make sure that the tests do not pass. See what the error message looks like.

You can learn more about this topic by reading the mock library \[documentation\]\[https://docs.python.org/3/library/unittest.mock.html\].

### 2. Unit testing and dependencies: mock library, part 2

Find the project in the \[course repository\]\[{{site.python_exercise_repo_url}}\] directory in *part4/payment-card-mock*. Copy the project to your local repository, inside the part4 directory.

The purpose of this exercise is to test and complete the `Kassapaate `class.

**Do not touch the payment card code at all in this task! The tests are not intended to create concrete instances of payment cards; the cards needed for the tests should be created using the mock library.**

There are two tests ready in the project:

    import unittest
    from unittest.mock import Mock, ANY
    from cash register import Cash register, PRICE
    from payment_card import PaymentCard

    class TestCashRegister(unittest.TestCase):
        def setUp(self):
            self.cash = Kassapaate()

        def test_card_is_charged_if_there_is_money(self):
            payment_card_mock = Mock()
            payment_card_mock.balance = 10

            self.cashier.buy_lunch(payment_card_mock)

            payment_card_mock.buy.assert_called_with(PRICE)

        def test_card_is_not_charged_if_there_is_not_enough_money(self):
            payment_card_mock = Mock()
            payment_card_mock.balance = 4

            self.cashier.buy_lunch(payment_card_mock)

            payment_card_mock.buy.assert_not_called()

The first test verifies that if there is enough money on the card, calling the cash register\'s `buy_lunch `method will charge the amount to the card.

The test therefore only assesses how the cash register calls the payment card methods. **The payment card balance is not checked separately**, as it is assumed that the payment card\'s own tests ensure the card\'s functionality.

The second test ensures that if there is not enough money on the card, calling the cash register method `osta_lounas `*does not* charge the card.

**The tests fail. Fix the cash register terminal method** `osta_lounas`**.**

**Reminder:** The payment card code must not be touched at all in the task! The status of the payment card is also not to be examined directly, because the payment card is a mock and it is not even possible/meaningful to look at the values of the attributes.

**After this, perform the following tests following the same principle:**

- The cash register method `load `call adds the amount to be loaded to the payment card using the card method `load `if the amount to be loaded is positive.
- The cash register method `load `call does nothing to the payment card if the amount to be loaded is negative

**Note:** - The tests are not intended to create concrete instances of payment cards; the cards required for the tests should be created using a mock library. - The tests also do not directly test the status of the payment card, only whether the payment card methods have been called correctly.

Fix the cash register so that the tests pass.

### Use of mock objects

Mock objects may have seemed a little complicated in previous exercises. However, mocks do have their place. If the object that is dependent on the object being tested is complex, such as the `Bank `class in the online store example, it is definitely worth testing the object being tested without using the actual dependency in the test. Of course, you can also create a mock object \"by hand,\" but in certain situations, mocks created with mock libraries are more convenient than hand-made mock objects, especially if you need to examine the method calls made by the dependencies of the object being tested.

### 3. Retrospective techniques

According to Wikipedia, *a* retrospective is *\"a meeting held by a project team at the end of a project or process (often after an iteration) to discuss what was successful about the project or time period covered by that retrospective, what could be improved, and how to incorporate the successes and improvements in future iterations or projects.\"*

Check out the retrospective techniques presented \[here\]\[http://retrospectivewiki.org/index.php?title=Retrospective_Plans\] \[Start, Stop, Continue, More of, Less of Wheel\]\[http://retrospectivewiki.org/index.php?title=Start,\_Stop,\_Continue,\_More_of,\_Less_of_Wheel\] and \[Glad, Sad, Mad\]\[http://retrospectivewiki.org/index.php?title=Glad,\_Sad,\_Mad\].

Write a summary of about 0.25 pages (i.e., about 125 words) on the topic in the *retro.md* file to be placed in the *week4* directory of the feedback repository.

Make sure that your mini-project team holds a retrospective using one of these techniques at the end of the second sprint!

### Submitting assignments

Push all your tasks to your GitHub repository and mark your completed tasks \[in Timi\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/konfigurointitehtavat-osa-4\]. The retrospective assignment is submitted directly to the form in Timi.