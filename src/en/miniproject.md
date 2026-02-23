
### Introduction

- During weeks 4-8 of the course, you will complete a mini-project

- **Passing the course requires approved participation in the mini-project** or its [approval](osa0.md#miniprojektin-hyv%C3%A4ksilukeminen)

- The project will be carried out in groups of approximately 5 people

- The project involves some programming, but **the main focus is not on programming** but on following a systematic process (more on this later).

- **Each group member is expected to work approximately 6 hours on the project during each sprint**

  - Time spent in customer meetings is not counted as part of the weekly working hours!

- In each sprint, the group does what it can do in the time allocated for the sprint, no more and no less

  - Exceeding the six-hour working time **is** therefore **not** reasonable; it is strictly prohibited.

### Forming groups

Fill out the form for forming groups by Friday, November 7, at the latest. The form can be found \[here\]\[{{site.tim_url}}/ajanvaraus\]. The groups and their meeting times will be published as soon as possible. The first meetings will be held the following week. The first meeting may take longer than usual. Careful preparation (familiarizing yourself with the assignment, setting up version control and backlog, etc.) will help keep the meeting short and successful.

- When coming to the first meeting, you should be familiar with at least the following topics from parts 1 and 2 of the material:

  - Scrum
  - sprint
  - user story
  - product backlog
  - sprint backlog
  - acceptance criteria
  - definition of done
- This document and the evaluation criteria to be published by the first customer meeting of the mini-project should be read carefully.

### Preliminary description of the project

\[description\]\[spec/\]

### Work progress

The customer meeting for the following weeks (sprint review and planning of a new sprint) will take place within the same two hours as the kick-off meeting. The meeting will last 30 minutes.

The aim is to form groups as soon as possible. \#### Week 3 (week beginning 10 November)

- "Sprint 0"
- Before the first meeting, all groups will have the common task of setting up version control and creating a preliminary backlog. Make sure you have the above list of terms.

#### Week 4 (week beginning November 17)

- First meeting
- More detailed mapping of requirements and planning of the first sprint

#### Week 5 (week beginning November 24)

- Review of sprint 1, retrospective, and planning of sprint 2

#### Week 6 (week beginning December 1)

- Sprint 2 review, retrospective, and planning for Sprint 3

#### Week 7 (week beginning December 8)

- The teams complete Sprint 3 independently (no customer meetings) and prepare for the next week\'s final demo.

#### Week 8

- Final demos on December 17. Retrospective of the final sprint in connection with the final presentation.

### Software to be implemented

Preliminary presentation on Tuesday, November 11, and more detailed presentation at the first customer meeting.

### Technical and process-related requirements

- The group will prepare *a product backlog* together with the customer.
  - Requirements are recorded in the backlog as user stories
- When planning the sprint, the group commits to implementing an appropriate number of user stories at the top of the backlog
  - Each team member\'s \"working time\" is 6 hours per week
    - Heroic coding beyond working hours is not recommended and is even prohibited
  - The team commits only to those stories that it believes it can implement in the sprint at the quality level defined by **the definition of done**. The definition of done is defined below
  - It is worth noting that committing to stories does not mean that they must be completed. When developing software, unforeseen events occur, and plans do not always come to fruition.
  - It is not advisable to promise the customer too much, and especially during the first sprints, estimates should be made cautiously, as configuration, testing, and team organization will take a lot of time.
- The team maintains *the sprint backlog*
  - User stories are divided into technical *tasks* during sprint planning, which are placed in the sprint backlog.
  - The team assesses the remaining work time on a daily basis and documents this as a sprint burndown chart.
  - The sprint backlog must show the following for each task
    - the estimated remaining work time
    - task status (e.g., started, programmed, testing, completed)
    - task author(s)
- The team implements continuous integration
  - By default, it is recommended to use GitHub Actions, which is familiar to developers.
- The code is stored in GitHub (or other version control system accessible to the customer)
- The project\'s GitHub repository has a sensible README.md

#### Product and sprint backlog

- Requirements are expressed in the backlog in a sensible format as user stories
  - **In a mini-project**, **there is no need to estimate user stories**; only the workload of the tasks in the sprint is estimated.
- As stated above, the sprint backlog should indicate the remaining work time for each task
  - the estimated remaining work time
  - the status of the task (e.g., started, programmed, in testing, completed)
  - task author(s)
- Backlogs can be implemented, for example, as a Google Docs spreadsheet. You can use the following as a template:
  - a certain project\'s \[backlogs\]\[https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK8AZNuHS571Wlxo/edit#gid=1\]
  - <http://www.mountaingoatsoftware.com/scrum/sprint-backlog> (this is not ideal, as it does not show the task creator)
- Instead of Google Docs, backlogs can also be created using a tool designed for maintaining backlogs
  - However, it is worth ensuring that the tool supports the requirements listed above

#### Definition of done

The following is a starting point for definition of done. The group must define its own DoD in the GitHub repository that suits its own starting points

- Acceptance criteria must be defined for user stories, which are documented starting from sprint 2 using the \[Robot framework\]\[robot_framework/\] syntax.
  - It is good practice to include a link in the README to the files defining the acceptance criteria
- The test coverage of the implemented code must be reasonable
- The customer can view the status of the code and tests at any time from the CI service
- The maintainability of the code must be as good as possible
  - sensible naming
  - Sensible/clear and justified architecture
  - Consistent coding style (follows rules defined using pylint)

#### Repository and README

The README should contain at least the following:

- Links to backlogs (readable versions of backlogs must be available on the public internet)
- Link to CI service
- Link to a working version of the application (if the application is online)
- If it is a desktop application, the program must have installation and user instructions
- A license must be defined for the work <https://help.github.com/articles/licensing-a-repository/>

### Tips for teamwork

Poor communication is a sure recipe for failure. So do as much as possible together, preferably on site or, if that is not possible, for example, on Discord voice chat. In general, it is good to communicate to the group what you are going to do and when you will have it done, as this will avoid overlap. Especially in the early stages of the project, for example, when configuring GitHub actions, it is worth investing in working together. Especially in the early stages of the project, for example when configuring GitHub actions, it is worth focusing on working together. During the project, even independent work becomes easier if and when the group has agreed on working principles and rules.

Pair programming/configuration has been found to be extremely useful. It may be a good idea to always have two people working on each user story.

For each item, such as the README.md file, project backlog, and sprint backlog, it is a good idea to appoint a person responsible for ensuring that the group takes care of the item. The person responsible for item X does not necessarily do the item themselves, but ensures that it gets done.

Keep the program operational at all times. It is a very bad idea to try to integrate the outputs coded by different people during the week an hour before a customer meeting\...

### Technological tips

- Learning completely new technologies always takes more time than expected.
- **Implementing potential external libraries, running tests, and configuring CI will take a lot of time, at least in the beginning.**
- A command line application is the least risky option in terms of technology
  - **NOTE:** Command line applications should be designed so that their IO operations, i.e., printing and reading input, are separated into their own injectable class, as discussed in the week 2 exercises \[injecting dependencies\]\[injecting_dependencies_python/\] example. If this is not done, testing through the user interface starting from sprint 2 will be very challenging.
- A web-based application is not recommended unless all group members have experience with it.
- However, if you do decide to create a web application, please familiarize yourself with this \[Selenium guide\].
- If you want to use a database, *SQLite* is a good option. Instructions for using SQLite with Python can be found in the \[Web Server Programming Course\]\[https://appro.mit.jyu.fi/ties4080/luennot/sqlite/\] materials, among other places.
  - Instructions for using SQLite with Python can be found in the \[Web Server Programming course\]\[https://appro.mit.jyu.fi/ties4080/luennot/sqlite/\] materials.
- For third-party calculators, it is worth following the example of story testing with Robot Framework (required from sprint 2 onwards).
- Automated testing of user interfaces created with Python\'s Tkinter library is difficult, so it is advisable to avoid using the library

### Work assessment

The assessment criteria can be found \[here\]\[miniprojektin_arvosteluperusteet/\]

