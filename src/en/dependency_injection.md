
First, read <http://jamesshore.com/Blog/Dependency-Injection-Demystified.html>

The code below can be found as Gradle projects in the course\'s \[assignment repository\]\[{{site.java_exercise_repo_url}}\] directory code/week1/DependencyInjection1

Here is a simple calculator:

    public class Main {
        public static void main(String[] args) {
            Calculator calculator = new Calculator();
            calculator.execute();
        }
    }

    public class Calculator {

        private Scanner reader;

        public Calculator() {
            reader = new Scanner(System.in);
        }

        public void execute() {
            while( true ) {
                System.out.println("number 1: ");
                int number1 = reader.nextInt();
                if (number1==-9999   ) return;

                System.out.println("number 2: ");
                int number2 = reader.nextInt();
                if (number2==-9999   ) return;

                int answer = calculateSum(number1, number2);
                System.out.println("sum: " + answer);
            }
        }

        private int calculateSum(int number1, int number2) {
            return number1+number2;
        }

    }

The downside of the program is that the Laskin class has *a concrete dependency* on the Scanner object and the System.out object that handles screen output.

Concrete dependencies make testing difficult and make it hard to extend the program.

### Dependency on the interface

Let\'s define an interface behind which concrete dependencies can be hidden:

    public interface IO {
        int nextInt();
        void print(String m);
    }

Let\'s create an implementation for the interface:

    public class ConsoleIO implements IO {
        private Scanner reader;

        public ConsoleIO() {
            reader = new Scanner(System.in);
        }

        public int nextInt() {
            return reader.nextInt();
        }

        public void print(String m) {
            System.out.println(m);
        }

    }

In the modified version of the Calculator class, an instance variable implementing the IO interface is defined, which is passed to the calculator object as a constructor parameter:

    public class Calculator {
        private IO io;

        public Calculator(IO io) {
            this.io = io;
        }

        public void execute(){
            while( true ) {
                io.print("number 1: ");
                int number1 = io.nextInt();
                if (number1==-9999   ) return;

                io.print("number 2: ");
                int number2 = io.nextInt();
                if (number2==-9999) return;

                int answer = calculateSum(number1, number2);
                io.print("sum: "+answer+"\n");
            }
        }

        private int calculateSum(int number1, int number2) {
            return number1+number2;
        }

    }

And the calculator can be given a suitable implementation from the IO class *by injecting* it, i.e., by passing it as a parameter to the constructor:

    public class Main {
        public static void main(String[] args) {
            Calculator calculator = new Calculator( new ConsoleIO() );
            calculator.execute();
        }
    }

### Test

It is now easy to perform unit tests for the program. A \"stub\" implementing the IO interface is implemented for testing purposes:

    class IOStub implements IO {

        int[] inputs;
        int mones;
        ArrayList<String> outputs;

        public IOStub(int... inputs) {
            this.inputs = inputs;
            this.outputs = new ArrayList<String>();
        }

        public int nextInt() {
            return inputs[mones++];
        }

        public void print(String m) {
            outputs.add(m);
        }
    }

The stub can therefore be given \"user input\" as a constructor parameter. The program\'s output is obtained from the stub after execution.

Test as follows:

    public class CalculatorTest {

        @Test
        public void oneSumCorrect() {
            IOStub io = new IOStub(1, 3, -9999);
            new Calculator(io).execute();

            assertEquals("sum: 4\n", io.outputs.get(2));
        }
    }

### Summary

Dependency injection is actually an extremely simple technique, and many people have probably already used it in basic programming courses.

Take computer games, for example, whose operation often depends on random numbers. If the game is coded as follows, automated testing is very difficult:

    public class Game {
      private Random randomNumber;

      public Game() {
        arpa = new Random();
      }

      // ...
    }

If, on the other hand, the random number generator *is injected* into the game as follows

    public class Game {
      private Random lottery;

      public Game(Random arpa) {
        this.lottery = lottery;
      }

      // ...
    }

During testing, a version of the random generator can be injected into the game, allowing the numbers generated to be controlled manually from the tests. For example, the following is a version of a random number generator that always returns the number 1 when the *nextInt* method is called:

    public class FakeRandom extends Random {
        @Override
        public int nextInt() {
            return 1;
        }
    }

