

- [Preparing for the first meeting](miniprojektin_arvosteluperusteet.md#valmistautuminen)
- [Assessment criteria for the first sprint](miniprojektin_arvosteluperusteet.md#ensimmäisen-sprintin-arvosteluperusteet)
- [Evaluation criteria for the second sprint](miniprojektin_arvosteluperusteet.md#toisen-sprintin-arvosteluperusteet)
- [Third sprint evaluation criteria](miniprojektin_arvosteluperusteet.md#kolmannen-sprintin-arvosteluperusteet)

<!-- -->

- Each sprint is worth 2.5 course credits **for the group**
  - The primary assessment criteria are process adherence, steady progress, and the quality of the features implemented in the program
  - The number of features implemented has a relatively small impact on the assessment, but it is not zero, meaning that some coding must be done
  - More detailed sprint-specific assessment criteria are provided below
- Individual performance is graded on a scale of -1 to 1, with -2 or 2 possible in exceptional cases
  - Personal performance points are based on a peer review at the end of the sprint and the \"digital footprint\" visible in the group\'s repository and backlogs
  - The following aspects are evaluated when assessing personal performance:
    - Physical and mental presence
    - Active participation
    - Reliability
    - Smooth teamwork
    - Consistency of work
    - Contribution to the group\'s output (code, tests, deployment pipeline, backlogs)
      - [Ensure that your commits are displayed correctly on GitHub](miniprojektin_arvosteluperusteet.md#varmista-että-commitisi-näkyvät-githubissa-oikein)
  - **Heroic coding cannot compensate for otherwise inadequate teamwork**
  - It is also worth taking the approximately 6-hour sprint working time seriously. Exceeding the working time by a large margin does not earn you \"extra points,\" but rather the opposite.

Unjustified non-participation in a sprint will result in the rejection of the mini-project.

The sprint evaluation criteria below are indicative, and the evaluation aims to take the whole picture into account.

### Preparation

Before the first sprint, make sure you have taken care of the following

- The group has a shared repository that everyone has access to. The repository contains at least a README file where the information needed for the sprints can also be stored (e.g., time tracking).
- The group has a shared communication channel and has agreed on its working methods.
- The group has a preliminary backlog
  - Backlogs can be implemented, for example, as a Google Docs spreadsheet. You can use the following as a template:
    - a certain project\'s \[backlogs\]\[https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK8AZNuHS571Wlxo/edit#gid=1\]
    - <http://www.mountaingoatsoftware.com/scrum/sprint-backlog> (this is not ideal, as it does not show the task creators)
  - Instead of Google Docs, backlogs can also be created using a tool designed for maintaining backlogs
    - However, it is worth ensuring that the tool supports the requirements listed above

### Evaluation criteria for the first sprint

Each team member must be registered for the project by the end of the first sprint at the latest, when the customer meeting is held.

Links to the project backlogs and other documents, as well as GitHub Actions (or other CI services in use), must be included in the README of the project\'s GitHub repository!

Points are awarded for the following:

- (0.25p) product backlog
  - The backlog is DEEP (stories do not need to be estimated)
- (0.5p) sprint 1 backlog
  - User stories selected for the sprint divided into technical tasks
  - Daily remaining workload estimated by task
  - Sprint burndown chart exists
  - Each task has been marked with its creator(s)
  - Task status is visible (e.g., todo, doing, done)
- (0.25p) Acceptance criteria for user stories selected for sprint 1 are documented
- (0.25p) Testing
  - The implemented code has been unit tested to a reasonable level
- (0.25p) Continuous integration
  - Code on GitHub
  - GitHub Actions (or some other CI service) performs unit tests and they pass
- (0.25p) implementation
  - At least *one* of the stories agreed upon for the sprint goal has been implemented at the level specified in *the definition of done*
- (0.25p) Work done at a steady pace
  - Not all work may be done on a single day
- (0.25p) GitHub README:
  - The README contains a link to the backlogs (and *everyone* has read access to them)
  - Definition of done explicitly written down
  - Link to the application if it is a web application
  - If it is a desktop application: program installation and user instructions
- (0.25p) Proper preparation for the sprint review
  - The reviewer has been agreed upon and the necessary preparations have been made in advance
  - During the review, the customer is shown the user stories selected for the sprint that have been implemented according to the acceptance criteria

The maximum score for the sprint is 2.5 points.

### Evaluation criteria for the second sprint

Points are awarded for the following:

- (0.25p) product backlog
  - The backlog is DEEP (stories do not need to be estimated)
- (0.25p) sprint 2 backlog
  - User stories selected for the sprint divided into technical tasks
  - Daily remaining workload estimated by task
  - Burndown chart exists
  - The author(s) of each task are noted
- (0.25p) Acceptance criteria for stories selected for sprint 2 recorded
- (0.25p) Comprehensive automated testing at the unit level
- (0.25p) At least some of the stories have been tested at the story level (using Robot framework)
- (0.25p) Continuous integration
  - CI service performs tests
  - main branch is not broken
- (0.125p) Link to test coverage report from GitHub README
- (0.25p) Sensible Pylint rules defined for the project, checked by CI
- (0.25p) most of the sprint\'s user stories implemented at the level specified in the definition of done
- (0.125p) A working version to be shown in the demo has been created in GitHub \[release\]\[https://help.github.com/articles/creating-releases/\].
- (0.25p) Proper preparation has been made for the sprint review
  - The review is conducted by a different person than in the previous review
  - The reviewer has been agreed upon and the necessary preparations have been made in advance
  - During the review, the customer will be shown that each user story selected for the sprint has been implemented in accordance with the acceptance criteria
- **Hold a retrospective at the end of the sprint**; points for the retrospective are given in the sprint 3 evaluation, see instructions below

The maximum score for the sprint is 2.5 points.

#### Retrospective

- A retrospective should be held at the end of Sprint 2
- A few instructions for holding a retrospective \[here\]\[tasks4/#5-retrospective techniques\].
- Short notes on the retrospective should be written in a file called `retro.md, `which should be placed at the root of the project repository.
- At least two *development measures* should be identified from the issues identified in the retrospective, i.e., issues that the team will try to improve in the next sprint
  - The development measures should be recorded in the retrospective notes.

### Evaluation criteria for the third sprint

Points are awarded for the following:

- (0.25p) product backlog
  - The backlog is DEEP (stories do not need to be estimated)
  - There is no irrelevant junk left in the backlog, story statuses are recorded correctly, etc.
- (0.25p) Acceptance criteria for the three stories selected for the sprint are recorded in Robot Framework files
  - Acceptance criteria **are not recorded separately in the backlog**; instead, there is a link from the backlog to the acceptance test file
- (0.25p) Sprint 3 backlog
  - Requirements as in previous sprints
- (0.25p) Comprehensive testing at the unit level
- (0.25p) Comprehensive testing at the story level
  - tests work at least when performed locally
- (0.25p) continuous integration
  - CI service performs unit and story tests and PyLint
  - main branch has not diverged by more than approximately 25% of sprint commits
- (0.125p) Link to test coverage report from GitHub README
- (0.25p) \[Retrospective\]\[miniproject_evaluation_criteria/#retrospective\] was held at the end of sprint 2 and appropriate notes were taken
- (0.25p) Most of the sprint\'s user stories have been implemented at the level specified in the definition of done.
- (0.125p) A working version to be shown in the demo has been created on GitHub \[release\]\[https://help.github.com/articles/creating-releases/\], a suitable license has been selected for the program, and it has been added to the repository.
  - Read more about software licenses \[here\]\[licenses/\].
- (0.25p) Proper preparations have been made for the final demo (preparations will be evaluated based on how the demo goes).
  - The computer can be quickly connected to the video projector (in 5 seconds) with the display configured correctly.
  - It has been agreed in advance who will do what
  - What to present has been thought through
    - It is worth presenting the most important functionality; there is little time in the demo, so it is not worth rambling
  - Test data is useful
    - The database must not be empty beforehand
    - The data in the database and the inputs used in the demo should be sensible, i.e., *not 12345*, *asdf*, *name1*, *name2,* etc.
  - **Reread the last bullet point,** for some reason 25% of people overlook it\...

The maximum for the sprint is 2.5 points.

### Final steps

#### Final demo and end of sprint 3

The final demos will be held on December 17 during the lecture. Each group will have a maximum of 15 minutes for their demo. At the end of the demo, the group will briefly share their experiences: what went well and what could be improved.

#### Peer feedback

- The personal scoring mentioned at the beginning of the assessment criteria is based on peer feedback, among other things.
- Each group member must provide **peer feedback by December 20 at 11:59 p.m.**
  - Giving peer feedback is *mandatory*. If peer feedback is missing, the personal score for the mini-project will be -1.5 points.
- Peer feedback is given via Tim.
  - Group members cannot see each other\'s peer feedback.

#### Report

In addition to peer feedback, the group will prepare a short report (approximately 1 page) on the progress of the project.

- Review the problems encountered during each sprint (related to the process, project work, and technical issues).
- What went well in the project, what should be improved for next time
- What did you learn, what would you have liked to learn, what felt unnecessary
- If the report is missing, 2 points will be deducted from the group.
- The report is submitted by adding a link to the project\'s GitHub README
- The report must include the names of everyone who participated in the project
- **The deadline for the report is December 20 at 11:59 p.m.** However, the report can be submitted as early as during the third sprint, in the final week of the course

### Make sure your commits are visible on GitHub

Since the number (and quality) of commits made to GitHub affects your personal score, make sure you have configured your email address in Git (see [Week 1](tehtavat1.md#2-githubiin-versionhallinta), [Task 2](tehtavat1.md#2-githubiin-versionhallinta)) and that your username appears correctly in the repository\'s commit list when you commit to your group\'s repository. It is recommended that everyone make one test commit (from their own computer) at the beginning and check that Git is configured correctly.

### Pair programming and commits

If you are pair programming (which is recommended!), make the commits visible to both of you according to \[these instructions\]\[https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors\].

### Commits missing

If a gray symbol like the one below appears next to your commit (despite configuring your Git email address)

\![\]\[https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit1.png\]

Click on the gray commit name to see the email address associated with the commit, but which GitHub does not recognize as your address.

\![\]\[https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit2.png\]

Add the address from the settings menu:

\![\]\[https://raw.githubusercontent.com/mluukkai/ohtu2017/master/images/commit3.png\]

