This course material is still being updated

{% assign part = include.part %}

*The deadline for the assignments below is {{site.lask-dl\[part\]}}*

{% include workshop.md %}

Don\'t forget this week\'s \[multiple-choice assignments\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/quiz/{{part}}\], which are due on {{site.moniv-dl\[part\]}}.

Assignment 1 continues the Git exercises; the assignment will not appear in any way in the submissions.

Assignments 2-5 are related to the chapters marked with [week 5](#viikko-5) or [week 6](#viikko-6) in \[part 4\]\[part4/\] of the material on software design.

In assignment 6, you will learn about GitHub\'s pull request mechanism and use it to make a pull request to a mini-project. The assignment is done directly on GitHub.

This week\'s \[multiple-choice assignments\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/quiz/6\].

### Are there any typos or ambiguities in the assignments?

Suggest [corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

### Problems with Poetry?

[Here are](ongelmia.md) some instructions

### Submitting assignments

Assignments are submitted to GitHub and by marking the completed assignments in the submission application <https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat> under the tab \"my submission.\"

**This week\'s assignments 2-5 are submitted to the submission repository** you used in previous weeks, in the week6 folder.

See [here](tehtavat1.md#teht%C3%A4vien-palautusrepositoriot) for more detailed instructions on submission repositories.

### 1. Git: rebase \[version control\]

*This assignment is not submitted anywhere!*

We have already encountered this in a couple of previous assignments (\[week 1, assignment 11\]\[http://localhost:4000/tehtavat1#11-github-actions-osa-3\] and \[and week 2 task 9\]\[http://localhost:4000/tehtavat2/#9-git-ep%C3%A4ajantasaisen-kloonin-pushaaminen-versionhallinta\]) with the Git concept of *rebase*. Let\'s take a closer look at what this is all about.

Read <https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase> and/or <http://git-scm.com/book/en/Git-Branching-Rebasing>.

This creates the following situation:

    ------- main
    \
     \--- branch

"Rebeissaa" branches to main, creating the following situation:

    ------- main
           \
            \--- branch

Use the gitk --all command to verify that the situation is as desired.

"Merge" main into the branch:

           \     main
            \--- branch

The end result should be a linear history with main and branch in the same place. Use the gitk --all command again to make sure everything is OK.

Delete the branch. Google the command to delete the branch.

What is the purpose of the rebase command? Atlassian\'s \[git guide\]\[https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase\] explains it as follows

> The primary reason for rebasing is to maintain a linear project history. For example, consider a situation where the main branch has progressed since you started working on a feature branch. You want to get the latest updates to the main branch in your feature branch, but you want to keep your branch's history clean so it appears as if you've been working off the latest main branch. This gives the later benefit of a clean merge of your feature branch back into the main branch. Why do we want to maintain a "clean history"? The benefits of having a clean history become tangible when performing Git operations to investigate the introduction of a regression.

### 2. Query language for NHL statistics, part 1

In the \[course repository\]\[{{site.python_exercise_repo_url}}\] directory *week6/query-language*, you will find another version of the familiar program for viewing NHL statistics. - Copy the project to your course repository, inside the week6 directory. - When doing this assignment, the lecture material \[Gutenberg reader\]\[https://ohjelmistotuotanto-hy.github.io/osa4/#ep%C3%A4triviaalin-copypasten-poistaminen-strategy-patternin-avulla-viikko-5\] may be a source of inspiration.

This time, we are interested in making slightly more complex \"queries\" to the player data, e.g.*, list all PHI players on the team who have at least 5 goals and at least 20 assists*.

The code has been created with some ready-made tools to get you started. The above query can be performed as follows:

    def main():
        url = "https://studies.cs.helsinki.fi/nhlstats/2022-23/players.txt"
        reader = PlayerReader(url)
        stats = Statistics(reader)

        matcher = And(
            HasAtLeast(5, "goals"),
            HasAtLeast(20, "assists"),
            PlaysIn("PHI")
        )

        for player in stats.matches(matcher):
            print(player)

A method `called matches `has been created for `the Statistics class`, which returns a list of players for whom the `test `method of the object given as a parameter returns `True`.

Take a look at the structure of the program.

- Note how `the test `method of the HasAtLeast class uses the \[getattr\]\[https://docs.python.org/3/library/functions.html#getattr\] function to obtain the value of the attribute given as a parameter.
- Another noteworthy feature is the variable-length parameter list used in the And class constructor, which can be identified by the \* prefix. Using this syntax, `*matchers `contains a list of arguments given to the constructor.

**Implement classes that implement the test method, which allow you to perform the following operations:**

- All (true for all players)
- Not (negation of the parameter condition)
- HasFewerThan (negation of the HasAtLeast command, i.e., less than 10 goals)

The condition *All, which* is true for all players, is not very interesting for this task, but it can be used in the fourth task.

You can check the functionality of your implementation by making a query:

    matcher = And(
        Not(HasAtLeast(2, "goals")),
        PlaysIn("NYR")
    )

The answer should be the *NYR* players who have not scored at least two goals, i.e., those *who have scored 0 or 1 goal*:

- All example results use statistics from the 2022-23 season. The year used in the statistics can be selected from the statistics URL, which is <https://studies.cs.helsinki.fi/nhlstats/2022-23/players.txt> in the code base.

Query

    matcher = And(
        HasFewerThan(2, "goals"),
        PlaysIn("NYR")
    )

should return exactly the same list.

The condition All should return all players. The following code

    filtered_with_all = stats.matches(All())
    print(len(filtered_with_all))

should print 1058

### 3. Query language for NHL statistics, part 2

**Implement** the test method implementing the `Or `class, which is true if at least one of the conditions it receives as a parameter is true.

Query

    matcher = Or(
        HasAtLeast(45, "goals"),
        HasAtLeast(70, "assists")
    )

should return those with at least 45 goals or 70 assists, i.e. the following list

    David Pastrnak       BOS          61 + 52 = 113
    Tage Thompson        BUF          47 + 47 = 94
    Nikita Kucherov      TBL          30 + 83 = 113
    Brayden Point        TBL          51 + 44 = 95
    Mikko Rantanen       COL          55 + 50 = 105
    Leon Draisaitl       EDM          52 + 76 = 128
    Connor McDavid       EDM          64 + 89 = 153
    Jason Robertson      DAL          46 + 63 = 109
    Erik Karlsson        SJS          25 + 76 = 101

Survey

    matcher = And(
        HasAtLeast(70, "points"),
        Or(
            PlaysIn("NYR"),
            PlaysIn("FLA"),
            PlaysIn("BOS")
        )
    )

All players who have scored at least 70 points and play for one of the following teams: *NYR*, *FLA,* or *BOS* must be returned. The list is as follows:

    Mika Zibanejad       NYR          39 + 52 = 91
    Artemi Panarin       NYR          29 + 63 = 92
    Adam Fox             NYR          12 + 60 = 72
    David Pastrnak       BOS          61 + 52 = 113
    Carter Verhaeghe     FLA          42 + 31 = 73
    Aleksander Barkov    FLA          23 + 55 = 78
    Brandon Montour      FLA          16 + 57 = 73
    Matthew Tkachuk      FLA          40 + 69 = 109

The queries are based on the decorator design pattern, similar to the example in section 4 of the material \[decorated stack\]\[section4/#example-decorated-stack-week-6\]. And and OR queries are also formed in the spirit of a certain design pattern, \[composite\]\[https://sourcemaking.com/design_patterns/composite\]; they are objects that implement the Matcher interface and contain many Matcher objects themselves. However, their users know nothing about their internal structure.

### 4. Improved query language, part 1

The query language created with Matcher objects suffers from the fact that constructing queries is tedious, as a new object must be created for each part of the query. Another drawback is that the code using the queries is directly dependent on the Matcher objects it uses.

In the spirit of [the stack builder](osa4.md#pinorakentaja-viikko-6) presented in section 4 of the material, create *a query builder* that allows you to create Matcher objects.

The builder can work as follows, for example.

First, a query that returns each player:

    def main():
        url = "https://studies.cs.helsinki.fi//nhlstats/2022-23/players.txt"
        reader = PlayerReader(url)
        stats = Statistics(reader)

        query = QueryBuilder()
        matcher = query.build()

        for player in stats.matches(matcher):
            print(player)

In this query, you can and should utilize the All-matcher from the previous task.

Next, a query that prints players whose team is *NYR*:

    def main():
        url = "https://studies.cs.helsinki.fi//nhlstats/2022-23/players.txt"
        reader = PlayerReader(url)
        stats = Statistics(reader)

        query = QueryBuilder()

        matcher = query.playsIn("NYR").build()

        for player in stats.matches(matcher):
            print(player)

Next, a query that prints players whose team is *NYR* and who have scored at least 10 but less than 20 goals:

    def main():
        url = "https://studies.cs.helsinki.fi//nhlstats/2022-23/players.txt"
        reader = PlayerReader(url)
        stats = Statistics(reader)

        query = QueryBuilder()

        matcher = query.playsIn("NYR").hasAtLeast(10, "goals").hasFewerThan(20, "goals").build()

        for player in stats.matches(matcher):
            print(player)

The list of players is as follows:

    Barclay Goodrow      NYR          11 + 20 = 31
    Jimmy Vesey          NYR          11 + 14 = 25
    Adam Fox             NYR          12 + 60 = 72
    Kaapo Kakko          NYR          18 + 22 = 40
    Alexis Lafrenière    NYR          16 + 23 = 39

Consecutively chained conditions therefore operate on an \"and\" basis.

In this task, it is sufficient for the query builder to be able to form conditions connected by the \"and\" principle.

Long method call chains, e.g.

    matcher = query.playsIn("NYR").hasAtLeast(10, "goals").hasFewerThan(20, "goals") .build()

are somewhat difficult to read if they are written on multiple lines. It is common practice to divide them according to the \"call per line\" principle:

       matcher = (
          query
          .playsIn("NYR")
          .hasAtLeast(10, "goals")
          .hasFewerThan(20, "goals")
          .build()
        )

Unfortunately, Python requires the use of \"extra\" parentheses here.

### 5. Improved query language, part 2

Let\'s extend the query builder so that it can also be used to form queries with an OR condition. A query containing an OR condition can be formed as follows, for example:

    m1 = (
      query
        .playsIn("PHI")
        .hasAtLeast(10, "assists")
        .hasFewerThan(5, "goals")
        .build()
    )

    m2 = (
      query
        .playsIn("EDM")
        .hasAtLeast(50, "points")
        .build()
    )

    matcher = query.oneOf(m1, m2).build()

The player list should be:

    Nick Seeler          PHI          4  + 10 = 14
    Rasmus Ristolainen   PHI          3  + 17 = 20
    Cam York             PHI          2  + 18 = 20
    Tyson Barrie         EDM          13 + 42 = 55
    Zach Hyman           EDM          36 + 47 = 83
    Ryan Nugent-Hopkins  EDM          37 + 67 = 104
    Leon Draisaitl       EDM          52 + 76 = 128
    Connor McDavid       EDM          64 + 89 = 153

Or the same without auxiliary variables:

    matcher = (
      query
        .oneOf(
          query.playsIn("PHI")
              .hasAtLeast(10, "assists")
              .hasFewerThan(5, "goals")
              .build(),
          query.playsIn("EDM")
              .hasAtLeast(50, "points")
              .build()
        )
        .build()
    )

### 6. Pull request and refactoring (this task is not counted as a version control task)

**NOTE: Complete this task no earlier than Friday, December 1.**

It is difficult to maintain a large project on your own, and it is even more difficult to find the right solutions to every problem as the software grows. It is difficult to manage everything yourself, and some areas may not even appeal to you, making it difficult to focus on them. You may find yourself thinking, for example, \"If only someone who is an expert in data structures could read through this part and check that HashSet is definitely the most efficient solution now\...\"

Maybe you didn\'t even think about it, but someone still points out that a binary search tree is a more efficient solution in this situation, codes the fixes into the source code for you, and makes *a pull request* for the changes. Luckily, you published your project as open source!

GitHub is full of open source projects that need your input. What could be more fun than spending a few hours working on the source code of your favorite repository and replacing any inelegant solutions you find with better ones? Many repositories have ready-made instructions for making change proposals in a file called Contributing.md, which can be found at the root of the repository. Here, for example, is bluebird.js\'s \[CONTRIBUTING.md\]\[https://github.com/petkaantonov/bluebird/blob/master/CONTRIBUTING.md\].

Your task is to practice making change proposals to an \"open source project\" as well as reading and refactoring someone else\'s code.

- Choose one repository from the \[mini projects\]\[https://study.cs.helsinki.fi/stats/api/courses/ohtu2023/projects/repositories\].
  - Preferably a group repository that does not already have five pull requests.
  - And, of course, one whose code you want to make some changes to
- \[Fork\]\[https://help.github.com/en/github/getting-started-with-github/fork-a-repo\] the repository
- Create a new branch in the forked repository called \"changes\"
- Make an \"empty\" \[pull request\]\[https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request\] to the branch you created: for example, add one empty line to the README.md file, push the new branch to GitHub, and make a pull request from the branch.
  - The purpose of the empty pull request is to reserve a place for you among the contributors to that repository. We want all groups to receive pull requests fairly evenly, so if there are already a lot of them in the repository, please look for another repository.
- Find something to refactor in the group\'s source code
  - It doesn\'t have to be a big change; even renaming a variable or method is enough
- Refactor and commit
- Go check out the empty pull request you made. What happened?
- Rebase (see this week\'s first task) the branch you created on top of the local main branch. Push. Did any changes occur in the pull request?
- Title your pull request so that it describes the changes you made. Specify under the title what you did and why.
- If the group asks you to make changes to your pull request, make the necessary changes and commit. Was the pull request updated?
- Once the group has approved your changes, you can delete the branch you created.

Place the file *PULL.md* in your repository and include a link to the pull request in its contents.

### Submitting assignments

Push all the tasks you have completed (except those that mention that the task is not to be submitted anywhere) to your GitHub submission repository and mark the tasks you have completed in [Timi https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat](https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat)

 