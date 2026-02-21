>\>\>

## Dependency injection

First, read <http://jamesshore.com/Blog/Dependency-Injection-Demystified.html>

The code below can be found as a poetry project in the course\'s \[task repository\]\[{{site.python_exercise_repo_url}}\] directory code/week1/dependency-injection-1

Here is a simple calculator:

    class Calculator:
        def execute(self):
            while True:
                number1 = int(input("Number 1:"))

                if number1 == -9999:
                    return

                number2 = int(input("Number 2:"))

                if number2 == -9999:
                    return

                answer = self._calculate_sum(number1, number2)

                print(f"Sum: {answer}")

        def _calculate_sum(self, number1, number2):
            return number1 + number2

    def main():
        calculator = Calculator()

        calculator.execute()

    if __name__ == "__main__":
        main()

The downside of the program is that the Calculator class has *a concrete dependency* on the functions print and input, which handle output and input.

Concrete dependencies make testing difficult and make it hard to extend the program.

### Eliminating direct dependencies

Let\'s isolate printing and input reading into their own `KonsoliIO `class:

    class ConsoleIO:
        def read(self, text):
            return input(text)

        def write(self, text):
            print(text)

Modify the Calculator class so that it receives an object as a constructor parameter, through which it handles communication with the user:

    class Calculator:
        def __init__(self, io):
            self._io = io

        def execute(self):
            while True:
                number1 = int(self._io.read("Number 1:"))

                if number1 == -9999:
                    return

                number2 = int(self._io.read("Number 2:"))

                if number2 == -9999:
                    return

                answer = self._calculate_sum(number1, number2)

                self._io.write(f"Sum: {answer}")

        def _calculate_sum(self, number1, number2):
            return number1 + number2

The application is now started by *injecting* the communication object as a constructor parameter:

    def main():
        io = ConsoleIO()
        calculator = Calculator(io)

        calculator.execute()

    main()

### Test

It is now easy to perform unit tests for the program. For testing purposes, a mock class, or \"stub,\" is implemented that behaves externally in the same way as the objects of the `ConsoleIO `class:

    class StubIO:
        def __init__(self, inputs):
            self.inputs = inputs
            self.outputs = []

        def read(self, text):
            return self.inputs.pop(0)

        def write(self, text):
            self.outputs.append(text)

The stub can therefore be given \"user input\" as a constructor parameter. The program\'s output is obtained from the stub after execution.

Test as follows:

    class TestCalculator(unittest.TestCase):
        def test_one_sum_correct(self):
            io = StubIO(["1", "3", "-9999"])
            calculator = Calculator(io)
            calculator.execute()

            self.assertEqual(io.outputs[0], "Sum: 4")

### Summary

Dependency injection is actually an extremely simple technique, and many people have probably already used it in basic programming courses.

Take computer games, for example, whose operation often depends on random numbers. If the game is coded as follows, automated testing is very difficult:

    class Game: 
        def moving_player(self):
          direction = random.randint(0, 8)

However, if the random number generator *is injected* into the game as follows

    class Game: 
        def __init__(self, lottery):
            self._lottery = lottery

      def move_player(self):
        direction = self._arpa.randint(0, 8)

During testing, a version of a random number generator can be injected into the game, whose random numbers can be controlled manually from the tests. For example, the following is a version of a random number generator that always returns the number 1 when the *randint* method is called:

    class Lottery:
        def randint(self, a, b):
            return 1

\<\<\