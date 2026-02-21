>\>\>

This course material is still being updated.

### Are there any typos or ambiguities in the assignments?

Suggest [corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Problems with Poetry?

Some instructions [here](ongelmia.md)

### Submitting assignments

Assignments are submitted to GitHub and by marking completed assignments in the submission application <https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat> under the \"my submission\" tab.

**This week\'s assignments 3-5** should **be submitted to the submission repository** you used in previous weeks, in the week7 directory. Assignments 1 and 2 do not need to be included in the submission; it is sufficient to complete the assignments.

See [here](tehtavat1.md#teht%C3%A4vien-palautusrepositoriot) for more detailed instructions on submission repositories.

### 1. Git: stash \[version control\]

*Assignments 1 and 2 do not need to appear in the submission; it is sufficient to complete the assignments.*

Read <https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning> up to the section titled *Creative stashing*.

Let\'s assume that you are in a repository with at least two branches: main and another one (let\'s call it **second**).

- While in the main branch, make changes to the files in the branch, add them to the staging area, and make some changes that you do not yet want to commit. The result of the *git status* command should look something like this

<!-- -->

    $ git status
    On branch main
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
        modified:   src/index.py

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
        READEME.md

    no changes added to commit (use "git add" and/or "git commit -a")

- Your boss tells you to immediately make a couple of changes to branch **two**. However, you don\'t want to commit the changes in main yet.
- If you switch to branch **two** without committing, you will end up with a terrible mess, as the changes will remain as changes in branch two as well.
- **git stash** saves you from this situation by stashing the changes in main
  - Try git status before and after the stash command
- Switch to branch two, make a change there, and commit it.
- Return to main
- Restore the stashed changes with the git stash apply command.
  - Make sure that the changes were restored
  - As you can see, changes already added to the staging area will not be restored to the staging area; you will need to add them again
  - If the previous command had been given in the form git stash apply --index, the situation would have been completely restored

### 2. Git: "moving" a branch \[version control\]

*Tasks 1 and 2 do not need to appear in the restore; it is sufficient to complete the tasks*

- Create a branch called branch in your repo and make commits to main and branch so that you end up with the following situation:

<!-- -->

        main
    __/
      \_____branch

- In other words, both main and branch have progressed by a few commits since the branching took place.
  - Note: with the command gitk --all you can see all branches, try it!
- Suddenly you realize that the things you\'ve done in main aren\'t very good and there\'s much better stuff in the branch, so you want the branch to become the new main.
- You can do this by going to the main branch and entering the command git reset --hard branch
  - Make sure that the command works correctly.
  - The items in the old main branch will not disappear if you want to return to them for some reason.
  - You can return to an old commit if you know the commit ID. If not, there are \[a few ways\]\[http://stackoverflow.com/questions/4786972/list-of-all-git-commits\] to find it.

### 3. and 4. (two-check task) KPS single and two-player game

In the \[course repository\]\[{{site.python_exercise_repo_url}}\], in the directory *week7/rock-paper-scissors*, you will find a computer version of the familiar game. Copy the project to your repository, inside the directory week7.

- The program has three game modes: human vs. human, human vs. simple AI, and human vs. complex AI
- The code contains a lot of copy-paste, and the original programmer did not yet have a good grasp of object-oriented programming principles.
- Remove all repetitions from the code and make it structurally correct in the spirit of [section 4](osa4.md) of the material.
  - The play method should be implemented [as a template method.](osa4.md#suunnittelumalli-template-method-viikko-5)
  - The creation of a suitable game object (two-player game, easy single-player game, difficult single-player game) must be implemented using a static factory method or function
  - The main program must not have dependencies on concrete classes that implement the game

If you think you have completed the task according to all style rules, mark 2 check marks; if the solution is not entirely stylish, mark one check mark.

**Tip:** one way to get started is to create a superclass `KiviPaperiSakset`, which contains code common to all three game types:

    class RockPaperScissors:
        def play(self):
            judge = Judge()

            first_move = self._first_move()
            second_move = self._second_move(first_move)

            while self._is_ok_move(first_move) and self._is_ok_move(second_move):
                # ...

            print("Thank you!")
            print(judge)

        def _first_move(self):
            return input("First player's move: ")

        # the implementation of this method varies between different game types
        def _second_move(self, first_move):
            # default implementation of the method
            return "k"

        def _is_ok_move(self, move):
            return move == "k" or move == "p" or move == "s"

Separate games then inherit the class and specialize it according to their needs:

    # class inherits class RockPaperScissors
    class KPSPlayerVsPlayer(RockPaperScissors):
        # implement method according to game type
        def _other_move(self, first_move):
            second_move = input("Second player's move: ")

            return second_move

**NOTE** Depending on how you do the task, you may encounter the following error:

    ImportError: cannot import name 'RockPaperScissors' from partially initialized module 'rock_paper_scissors' (most likely due to a circular import) (/Users/mluukkai/opetus/ohtu2022/ohtu-s22-palautukset/viikko7/kivi-paperi-sakset/src/rock_paper

The reason for this in my case was that I imported as follows

In the file *kivi_paperi_sakset.py*:

    from kps_player_vs_player import KPSPlayerVsPlayer

    # ...

    class RockPaperScissors:
        # ...

    # factory function, requires imports
    def create_game(type):
        if type == 'a':
            return KPSPlayerVsPlayer()
        if type == 'b':
            return KPSAction()
        if type == 'c':
            return KPSBetterAction()

        return None

and in the file *kps_player_vs_player.py*:

    from rock_paper_scissors import RockPaperScissors


    class KPSPlayerVsPlayer(RockPaperScissors):
        # ...

The two files ended up importing each other, creating a circular import that Python cannot handle. I solved the problem by defining the factory function *create_game* in its own file.

### 5. Merging a pull request (this task is not counted as a version control task)

Merge a pull request made for your mini-project (merging a pull request made by another member of your mini-project is also acceptable). You can complete the task together with other members of your mini-project group. If you have already merged a pull request into your mini-project during the course, that is sufficient to complete this task.

Place a file named *MERGE.md* in the week7 directory of your submission repository and include a link to the merged pull request in its contents.

**Alternative assignment:**

Read one of the articles below and write a 0.25-page summary of it.

- <http://www.leanprimer.com/downloads/lean_primer.pdf>
  - Quite long, but included in the exam reading list, so very useful
- Tero Huomo\'s bachelor\'s thesis \[Incorporating software architecture into agile software production methods\]\[https://www.cs.helsinki.fi/u/mluukkai/ohtu/huomo-kandi.pdf\]
- Kasper Hirvikoski\'s bachelor\'s thesis \[Metrics as a support for practices in software quality assessment\]\[https://www.cs.helsinki.fi/u/mluukkai/ohtu/hirvikoski-kandi.pdf\]
- Kenny Heinonen\'s bachelor\'s thesis \[The software industry and teamwork\]\[https://www.cs.helsinki.fi/u/mluukkai/ohtu/heinononen-kandi.pdf\]
- Eero Laine\'s bachelor\'s thesis \[Management in traditional and agile software production projects\]\[https://www.cs.helsinki.fi/u/mluukkai/ohtu/laine-kandi.pdf\]
- Esa Kortelainen\'s bachelor\'s thesis \[Continuous experimentation as a support for software development\]\[https://www.cs.helsinki.fi/u/mluukkai/ohtu/kortelainen-kandi.pdf\]
- Kalle Ilves\'s bachelor\'s thesis \[Using the Scrumban method in agile software development\]\[https://www.cs.helsinki.fi/u/mluukkai/ohtu/ilves-kandi.pdf\]

The summary should be written in the week7 directory of the submission repository in the file *referaatti.md*.

### 6. Course feedback

Please provide course feedback at <https://norppa.jyu.fi/targets/7131/feedback>. You can also provide feedback after the exam. Checking this box is a promise that you will provide feedback at some point. **Feedback can be provided between December 13 and 27, 2023**.

**PLEASE NOTE:** if you go to the feedback address before the start date for final feedback, you will see the \"continuous feedback\" form for the course. However, this task refers to the normal final feedback that opens on December 13.

### Submitting assignments

Push all your assignments (except those that specify that they should not be submitted anywhere) to your GitHub submission repository and mark your assignments as complete in Timi <https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat>

\<\<\