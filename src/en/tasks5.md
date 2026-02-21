>\>\>

This course material is still being updated

The assignments are related to the chapters marked with [week 5](#viikko-5) in \[part 4\]\[part4/\] of the material dealing with software design.

### Are there any typos or ambiguities in the assignments?

Make [a correction suggestion](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

### Problems with Poetry?

[Here are](ongelmia.md) some instructions

**Assignments are submitted to the** same **repository** you used in previous weeks, inside the assignment directory *osa5*.

### 1. Refactoring tennis scoring

In the \[course repository\]\[{{site.python_exercise_repo_url}}\] directory *week5/tennis*, you will find a program intended for tennis \[scoring\]\[https://github.com/emilybache/Tennis-Refactoring-Kata#tennis-kata\]. Copy the project to your repository, inside the week5 directory.

The scoring interface is simple. The `get_score `method reports the current situation according to the scoring method used in tennis. As one of the players wins points, the `won_point `method is called, with the player who won the point as a parameter.

For example, when using scoring as follows:

    game = TennisGame("player1", "player2")

    print(game.get_score())

    game.won_point("player1")
    print(game.get_score())

    game.won_point("player1")
    print(game.get_score())

    game.won_point("player2")
    print(game.get_score())

    game.won_point("player1")
    print(game.get_score())

    game.won_point("player1")
    print(game.get_score())

Output

    Love-All
    Fifteen-Love
    Thirty-Love
    Thirty-Fifteen
    Forty-Fifteen
    Win for player1

The printout shows the game situation after each ball when *player1* wins the first 2 balls, *player2* wins the third ball, and *player1* wins the remaining 2 balls.

The score calculation program code works and has very comprehensive tests. However, the internal quality of the code is unacceptable.

The task is to refactor the code to make it as readable as possible. The code should avoid \["magic numbers"\]\[\<https://en.wikipedia.org/wiki/Magic_number\_(programming\]\>) and poorly named variables. The code should be divided into many small methods whose names reveal their own operating logic.

Proceed with refactoring *in very small steps*. Run tests as often as possible. Try to keep the program functional at all times, i.e., do not break the tests. The tests in the program should not be touched.

If you want to use a language other than Python, you can find versions of the code and tests in several different languages at \[https://github.com/emilybache/Tennis-Refactoring-Kata\]\[https://github.com/emilybache/Tennis-Refactoring-Kata\].

The task is perhaps most fun to do with pair programming. I was introduced to the task in the summer of 2013 at the Coding Dojo organized at the Extreme Programming conference, where the task was done with a randomly selected partner using pair programming.

More similar refactoring tasks can be found on Emily Bache\'s \[GitHub\]\[https://github.com/emilybache\].

### Submitting the task

Push the task to your GitHub submission repository and mark the tasks you have completed \[in Timi\]\[https://tim.jyu.fi/view/kurssit/tie/tjta330/ohjelmistotuotanto-k2024/tehtavat/konfigurointitehtavat-osa-5\].

\<\<\