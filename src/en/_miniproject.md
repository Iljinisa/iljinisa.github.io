
### Current

- \[Final steps\]\[miniproject_assessment_criteria/#final_steps\]

### Introduction

- A mini-project will be carried out during weeks 4-7 of the course.

- **Passing the course requires approved participation in the mini-project** or its [approval](osa0.md#miniprojektin-hyv%C3%A4ksilukeminen)

- The project will be carried out in groups of approximately 5-6 people

- The project involves some programming, but **the main focus is not on programming** but on following a systematic process (more on this later).

- **Each group member is expected to work on the project for approximately 6 hours during each sprint**

  - Time spent in customer meetings is not counted as part of the weekly working hours!

- In each sprint, the group does what it can do in the time allocated for the sprint, no more and no less

  - Exceeding the six-hour working time **is** therefore **not** reasonable; it is strictly prohibited.

### Forming groups

- Groups will be formed on Sunday, November 20, \"algorithmically,\" mainly according to the suitable working hours indicated in the registration (see links above).
- The time of your group\'s kick-off meeting will be announced in the registration application. All group members are **required to attend** the meeting, which will last approximately two hours.
- When attending the kick-off meeting, you should be familiar with at least the following topics from parts 1 and 2 of the material:
  - Scrum
  - sprint
  - user story
  - product backlog
  - sprint backlog
  - acceptance criteria
  - definition of done
- This document and [the](miniprojektin_arvosteluperusteet.md) mini-project [assessment criteria](miniprojektin_arvosteluperusteet.md) should also be read carefully before the kick-off meeting.
- The group comes up with a name for itself, creates a GitHub repository, and registers itself in the submission application <https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat>
  - **One member of the group** logs into the system, goes to the *miniprojects* tab
    - creates a project using the form that opens when clicking the *create project* button
    - and share the project ID with the other group members
  - **Other group members** log in to the system and join the group using their ID in the form that opens when they click the \"*Join project\"* button.

### Work progress

The customer meeting for the following weeks (sprint review and planning of a new sprint) takes place within the same two hours as the kick-off meeting. The meeting lasts 30 minutes. The time will be announced on the feedback application tab \[miniproject\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/miniproject\] no later than Friday, November 26.

#### Week 4 (November 21-27)

- Groups are formed/will be formed
- Groups meet with the customer at kick-off meetings
- Based on the customer meeting held at the kick-off meeting, the group creates a preliminary product backlog and agrees on the goal of the first sprint with the customer
- The group plans the first sprint and begins work
  - As a result of the sprint planning, the group creates a sprint backlog
  - More about the content of backlogs [here](miniprojekti.md#tekniset-ja-prosessiin-liittyvät-vaatimukset)
- It is advisable to read [the evaluation criteria](miniprojektin_arvosteluperusteet.md#ensimmäisen-sprintin-arvosteluperusteet) for Sprint 1 carefully

#### Week 5 (November 28--December 4)

- Sprint 1 review and sprint 2 planning
  - The customer meeting schedule can be found on the feedback application tab \[miniproject\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/miniproject\]

#### Week 6 (November 5--December 11)

- Sprint 2 review and sprint 3 planning
  - The schedule for the customer meeting can be found on the feedback application tab \[miniproject\]\[https://tim.jyu.fi/view/kurssit/tie/teka3003/ohjelmistotuotanto-s2025/tehtavat/miniproject\].

#### Week 7 (December 12--19)

- Final demos
  - Wed, Dec. 14, 12-2 p.m. B123
  - Thu, Dec. 15, 2-5 p.m. A111
  - Book a time for your group \[here\]\[https://docs.google.com/document/d/1VyWKgiD13JLX17W3qoCNvZbggMsh0FBffBC2EeG9Czc/edit?usp=sharing\]
- The group will not meet with the customer again after the third sprint.

### Software to be implemented

A partial description of the application is available [here](speksi.md); more detailed information will be provided by the customer.

### Technical and process-related requirements

- The team will prepare *the product backlog* together with the customer
  - Requirements are recorded in the backlog as user stories
- When planning the sprint, the team commits to implementing an appropriate number of user stories at the top of the backlog
  - Each team member\'s \"working time\" is 6 hours per week
    - Heroic coding beyond working hours is not recommended and is even prohibited
  - The team commits only to those stories that it believes it can implement in the sprint at the quality level defined by **the definition of done**. The definition of done is defined below
  - It is worth noting that committing to stories does not mean that they must be completed. When developing software, unforeseen events occur, and plans do not always come to fruition.
  - It is not advisable to promise the customer too much, and especially during the first sprints, estimates should be made cautiously, as configuration, testing, and team organization will take a lot of time
- The team maintains *the sprint backlog*
  - User stories are divided into technical *tasks* during sprint planning, which are placed in the sprint backlog.
  - The team assesses the remaining work time on a daily basis and documents this as a burndown chart for the sprint.
  - The sprint backlog must show the following for each task
    - the estimated remaining work time
    - task status (e.g., started, programmed, in testing, completed)
    - task author(s)
- The team implements continuous integration.
  - By default, it is recommended to use GitHub Actions, which is familiar from Calculus 1. Other options include CircleCI
- The code is stored in GitHub
- The project\'s GitHub repository has a sensible README.md

#### Product and sprint backlog

- In the backlog, requirements are expressed in a sensible format as user stories
  - **In a mini-project**, **there is no need to estimate user stories**; only the workload of the tasks in the sprint is estimated.
- As stated above, the sprint backlog should indicate the estimated remaining work time for each task
  - the estimated remaining work time
  - the status of the task (e.g., started, programmed, in testing, completed)
  - task author(s)
- Backlogs can be implemented, for example, as a Google Docs spreadsheet. You can use the following as a template:
  - a certain project\'s \[backlogs\]\[https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK8AZNuHS571Wlxo/edit#gid=1\]
  - <http://www.mountaingoatsoftware.com/scrum/sprint-backlog> (this is not ideal, as it does not show the task creator)
- Instead of Google Docs, backlogs can also be created using a tool designed for maintaining backlogs
  - It is worth ensuring that the tool supports the requirements listed above.
  - <https://trello.com>, for example, does not really support Scrum-style backlogs at all, and **Trello should be avoided in this project.**

#### Definition of done

The following is a starting point for definition of done. The group should define its own DoD in the GitHub repository, based on its own starting points.

- Acceptance criteria must be defined for user stories, which are documented using \[Cucumber\]\[cucumber/\] or \[Robot Framework\]\[robot_framework/\] syntax.
  - It is good practice to include a link in the README to the files defining the acceptance criteria.
- The test coverage of the implemented code should be reasonable (e.g., about 70% for everything except trivial code, such as getters/setters).
- The customer can view the status of the code and tests at any time via the CI service
- The maintainability of the code should be as good as possible
  - sensible naming
  - sensible/clear and justified architecture
  - Consistent coding style (follows rules defined using pylint or checkstyle)

#### Repository and README

The README should contain at least the following:

- Links to backlogs (readable versions of backlogs must be available on the public internet)
- Link to CI service
- Link to a working version of the application (if the application is online)
- If it is a desktop application, the program must have installation and user instructions
- A license must be defined for the work <https://help.github.com/articles/licensing-a-repository/>

### Tips for teamwork

Poor communication is a sure recipe for failure. So do as much as possible together, preferably on site or, if that is not possible, for example, on Discord voice chat. In general, it is good to communicate to the group what you are going to do and when you will have it done, as this will avoid overlap. Especially in the early stages of the project, for example, when configuring GitHub actions, it is worth investing in working together. Especially in the early stages of the project, for example when configuring GitHub actions, it is worth focusing on working together. During the project, even independent work becomes easier if and when the group has agreed on working principles and rules.

Pair programming/configuration has been found to be extremely useful. It may be a good idea to have two people working on each user story.

For each item, such as the README.md file, project backlog, and sprint backlog, it is a good idea to assign a person responsible for ensuring that the group takes care of the item. The person responsible for item X does not necessarily do the item themselves, but ensures that it gets done.

Keep the program operational at all times. It is a very bad idea to try to integrate the outputs coded by different people during the week an hour before a customer meeting\...

### Technological tips

- It does not make sense to learn completely new technologies in connection with a mini-project.
- **Implementing potential external libraries, running tests, and configuring CI will take a lot of time, at least in the beginning.**
- A command line application is the least risky option in terms of technology, at least when using Java
- For a web-based Python application, you can use the \[example application\]\[https://github.com/ohjelmistotuotanto-hy/todo-web\] from the course as a model
  - \*\*Heroku\'s free service was discontinued in the last week of November.
- If you want to use a database, *SQLite*, which is familiar from Tikapesta, is a good option. For this reason, creating a web application can be risky if you don\'t know of an alternative location.
  - Instructions for using SQLite with Python can be found in the \[Software Engineering course\]\[https://ohjelmistotekniikka-hy.github.io/python/toteutus#tietojen-tallennus\] materials, among other places.
  - The Software Engineering course\'s \[todo application\]\[https://github.com/ohjelmistotekniikka-hy/python-todo-app\] is an example application for using the SQLite database in a Python project.
  - Note that if you intend to publish the application in a cloud service, *PostgreSQL* is a better alternative to SQLite. An example of using PostgreSQL in a Python application can be found in the following \[example application\]\[https://github.com/ohjelmistotuotanto-hy/todo-web\] created for this course
  - The \[todo application\]\[https://github.com/ohjelmistotuotanto-hy/tikape-todo\] used in Tikapen\'s calculators is an example application for using an SQLite database in a Gradle-based Java project.
- For Week 3 calculators, it is recommended to use Robot Framework or Cucumber for story testing
- Automated testing of applications built with JavaFX is possible using the \[TestFX\]\[https://github.com/TestFX/TestFX\] library. The library documentation is not the best
  - A simple Gradle+JavaFX+Cucumber+Circle example configuration can be found \[here\]\[https://github.com/ohjelmistotuotanto-hy/fx-testing\].
  - User interface testing of Java Swing applications with Cucumber is a complete mystery
- In previous years, it has been noted that configuring Java Spring (to work with Gradle, Cucumber, and GitHub Actions) within the time allocated for the mini-project has proven challenging. Therefore, use Spring at your own risk
  - A simple Gradle+Spring+Cucumber+Circle example configuration can be found \[here\]\[https://github.com/ohjelmistotuotanto-hy/spring-cucumber\]
- Automated testing of user interfaces created with Python\'s Tkinter library is a complete mystery, so it may be best to avoid using the library

### Work evaluation

The assessment criteria can be found \[here\]\[miniprojektin_arvosteluperusteet/\]

