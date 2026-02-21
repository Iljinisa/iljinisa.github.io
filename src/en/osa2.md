>\>\>

This week\'s topic is software requirements specification, particularly from the perspective of agile methods. We will also discuss product management at both the project level and during sprints.

## Typos in the material

Please [suggest corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

## Requirements specification

Perhaps the most important problem in the software production process is defining *the customer\'s requirements* for the software to be built.

Software requirements are thought to fall into two categories. *Functional requirements* refer to everything that the software can do, i.e., the functions provided by the software. The other category is *non-functional requirements*, which are \"quality requirements\" that apply to the entire software (such as usability and security) and the constraints imposed on the software by its operating environment.

*The* process of clarifying, documenting, and managing requirements is called requirements engineering. Regardless of the process model used, requirements engineering must at least begin before the software is designed and implemented.

In linear process models, i.e., the waterfall model, requirements engineering is carried out in its entirety before the software is designed and implemented. In iterative software development, on the other hand, requirements engineering takes place little by little as the functionality of the software grows.

## Stages of requirements specification

The nature of requirements specification varies greatly depending on the software being developed, the development organization, and the process model used for software development. In any case, the end user, customer, or customer representative must be actively involved in the process.

Requirements specification is usually divided into a few work phases:

- requirements elicitation
- requirements analysis
- validation of requirements
- documentation of requirements
- requirements management

In most cases, these work phases overlap and the requirements specification progresses in a spiral manner, becoming more precise as the process continues. First, some of the requirements are elicited, analyzed, and documented. The process continues until the desired number of requirements has been documented with the necessary precision.

### Methods for mapping requirements

At the beginning of requirements specification, it is necessary to identify the stakeholders, i.e., those parties that are directly or indirectly involved with the system. These naturally include the intended end users of the software, the decision-makers of the ordering company, and, if necessary, representatives of the parties responsible for the information systems with which the software to be defined will be integrated.

Once the various stakeholders have been identified, \"all possible means\" are used to uncover their requirements, e.g.:

- interviewing representatives of stakeholders
- holding brainstorming sessions between the customer and the application development team

After preliminary discussions, the development team can work with stakeholder representatives to structure the requirements mapping. Often, the different *user roles* for the application are considered, and typical application usage scenarios for different user roles are devised.

It is also a good idea to make user interface sketches and paper prototypes of the application. By reviewing and going through the scenarios and prototypes, the customer can further refine their view of the requirements.

If the application being developed is intended to replace an existing system, the requirements can also be clarified by observing the end user\'s work. This method is called *ethnography*.

If the new application is intended to replace an existing work process, such as a room reservation system, it is often useful to also examine the work process itself and try to streamline it. It is often not sensible to replicate an old, perhaps even cumbersome, work process as it is in the new application.

### Requirements analysis, documentation, validation, and management

In addition to collecting requirements, they must also *be analyzed*. Are there any conflicts between the requirements, and are they sufficiently comprehensive, i.e., do they take into account all possible usage scenarios? It is also essential to ensure that the requirements are feasible and economically viable.

It is often a good idea to ensure that the requirement is *verifiable*, i.e., that it is possible to determine whether the finished system complies with this requirement. For example, the requirement *that the system be easy to use* is not good in that it is difficult to test ease of use. It is possible to define requirements related to usability \[in a verifiable manner\]\[http://www.pcuf.fi/sytyke/lehti/kirj/st20093/ST093-18A.pdf\].

The identified requirements must also *be documented* in one form or another. Before starting to code, the application developer needs a \"spec,\" i.e., a description of how the application or part of it should work. For testing purposes, a description of how the program to be tested should work is also needed.

Especially when using the waterfall model, the requirements document is an essential part of the agreement between the customer and the software developers. The price of the application is based on the functionality described in the requirements specification, and if the customer changes their mind, this may result in additional costs.

It is also essential *to validate* the requirements, i.e., to ensure that the collected and documented requirements actually correspond to the customer\'s opinion and that they describe the systems that the customer feels they need.

Requirements must also *be managed* in one way or another, especially if they change during the application development process. Management refers, for example, to recording new requirements that come to mind for the customer, modifying already recorded requirements, prioritizing requirements, etc.

The nature of the requirements specification process, i.e., how requirements are collected, analyzed, documented, validated, and managed, varies greatly depending on the nature of the software project. We will return to certain aspects of requirements specification in more detail later on.

### Functional requirements

As mentioned, requirements are divided into two categories: *functional* and *non-functional* requirements.

Functional requirements describe what the system can do, i.e., what functions it has.

For example, the functional requirements of an online store could be as follows:

- customers can register as users of the online store
- registered customers can add products to their shopping cart
- when a credit card payment is successful, the customer is notified of the successful purchase by email
- customers logged into the system can view their purchase history
- the administrator can add new products to the store\'s inventory
- Suppliers can update the price information for products in the system.

Functional requirements can be documented, for example, as \"feature lists,\" as has been done in the Software Engineering course for a couple of years, or as UML use cases, which were used in the Software Engineering course until around 2017. In agile methods, requirements are often documented *as user stories*, which we will discuss in more detail shortly.

Regardless of how functional requirements are documented, it is quite common for requirements to be expressed in a format that describes a single system usage scenario for a specific user role.

For example, *a supplier can update the price information of products in the system,* which describes the functionality of a certain system for users with the role *of supplier*.

### Non-functional requirements

The second category of requirements, non-functional requirements, is divided into two sub-areas: quality requirements and operating environment constraints.

Quality attributes are factors that guide and limit the functionality of the entire system, e.g.

- usability: what is the user experience of the application like
- accessibility: is the application easy to use for everyone, e.g., visually impaired people
- information security: who has access to the system and the data processed in it
- performance: how quickly does the application respond to different user inputs
- scalability: does the application remain responsive, i.e., does it function sufficiently quickly as the user load or the amount of data processed increases
- Stability: does the system recover from various error situations

Not all quality requirements are directly noticeable to the system user, such as

- extensibility: is it easy to increase the functionality of the application in the future
- testability: can the application\'s error-free operation be easily verified in connection with further development

There are a large number of different categories of quality requirements, e.g. \[Wikipedia\]\[http://en.wikipedia.org/wiki/List_of_system_quality_attributes\] lists a large number of them.

Constraints of the operating environment include

- implementation technology: which programming languages and libraries are used to implement the application, which databases are used
- operating environment: whether the application is used in a browser or whether it is a desktop or mobile application
- Integration with other systems: for example, is an external service user ID used for logging in, or is data provided by open interfaces used?
- Compliance with laws and standards: one example of this is the requirements set by the EU\'s General Data Protection Regulation (GDPR).

Unlike functional requirements, which often describe the \"individual features\" of a system (e.g., a product can be added to a shopping cart), non-functional requirements usually apply to the entire system and affect how the basic structure, or architecture, of the system should be designed. For example, if you want to build an online store that scales to millions of users, it must be built from the ground up in a completely different way than an online store that can have a maximum of twenty users at a time. If quality requirements change radically as software development progresses, making changes can sometimes be difficult and require a major overhaul of the entire application\'s design principles.

## Requirements specification in the 20th century, i.e., during the reign of the waterfall model

In line with the spirit of the waterfall model, requirements specification was considered a separate stage of the production process that had to be completed in its entirety before design could begin. The idea was that design should not influence requirements and, conversely, requirements should not unnecessarily restrict design.

Experts emphasized that requirements documentation must be comprehensive and consistent. It was therefore considered essential that all customer requirements be collected and documented at the outset. There were even trends toward expressing requirements in formal language, i.e., mathematically, rather than in natural language, so that, for example, consistency could be demonstrated.

It is well known that if a mistake is made during the specification phase and is only noticed later during application development, for example when testing the application, making changes is very expensive. The logical conclusion was to make requirements specification a very thorough and carefully executed work phase. And because requirements specification and application development were handled by different people, everything had to be documented at a very precise level.

## Requirements specification in the 20th century -- does not work

As already stated [in Part 1](osa1.md#vesiputousmallin-ongelmia), the idea that requirements specification can be separated into a completely distinct, carefully executed phase has proven to be utopian.

There are several reasons why changes in requirements are almost inevitable. The operating environment of organizations using software is changing rapidly, and what is relevant today may not necessarily be relevant in three months\' time. It is impossible for customers to express their needs exhaustively in advance, and even if the customer were able to define everything in advance, their opinion would most likely change when they see the end result.

Another problem is that, despite careful specification of requirements, software developers are unable to interpret the written requirements in the way that the customer or end user who specified them intended. If there is no direct communication between developers and users, misunderstandings are very likely to arise.

It is also not possible or sensible to completely separate requirements specification from design. Design helps to understand the problem area in greater depth, which in turn often generates changes to the requirements.

Software is increasingly being built on ready-made components, such as open source libraries or online SaaS (Software as a Service) services, and this is also essential to take into account in requirements specification.

If design and implementation issues are taken into account in requirements specification, it is easier to formulate and prioritize requirements: this makes it possible to estimate the cost of implementing the requirements in some way.

Without taking design and implementation into account, there is a risk that the customer will want a requirement in a form that multiplies the cost of implementation compared to a requirement that is essentially the same from the customer\'s point of view but formulated slightly differently.

## Requirement specification in the 21st century

The iterative and agile software development approach of the 21st century integrates all stages of software production into one. Software projects still start with requirements specification, but the initial requirements specification is only indicative and has been refined only to the extent necessary for one or a few initial iterations.

In line with the spirit of agile requirements specification, the customer (the product owner when using Scrum) prioritizes the requirements so that the requirements that bring the most business value to the customer are selected for implementation in each iteration. Software developers estimate the amount of work required to implement the requirements and decide how many requirements they can take on for each iteration.

During each iteration, specification, design, programming, and testing are carried out to the extent necessary. The requirements specification is therefore refined during the course of the project. The purpose of each iteration is to produce additional functionalities for the application being developed. The output of each iteration serves as input for defining the requirements for the next iteration.

As the software grows iteratively and incrementally, piece by piece, it becomes possible to put the application into production, i.e., for use by real users, even before the application is completed.

This has many advantages. The application can start generating financial value even before the application development project is completed, and feedback from real users can be used to further refine the requirements specification and the direction of the application\'s further development.

The overarching theme in agile software production and related requirements specification is to generate maximum value for the customer in every possible way.

## Requirements specification in the 2010s

Eric Ries\'s book \[The Lean Startup\]\[http://theleanstartup.com/\], published in 2011, describes/formalizes a systematic way of mapping requirements in particularly uncertain contexts, such as start-up companies.

The model is based on repeating a three-part build-measure-learn cycle:

\![\]\[images/2-3.png\]{:height="300px" }

For example, when building internet services or mobile applications, there is no certainty about user needs, i.e., system requirements; one can only make assumptions about what people would like to use. In the early stages, the system does not even have customers or users whose opinions could be sought.

The principle is to start with an idea of what users want and make *a hypothesis about how customers would behave* if the system/functionality/set of features in question were implemented.

After that, *a* so-called *minimum viable product (MVP)* is quickly built to implement the feature. There is no single definition of a minimum viable product that is accepted by everyone, but for example, \[Wikipedia\]\[https://en.wikipedia.org/wiki/Minimum_viable_product\] says the following

> A minimum viable product (MVP) is a product with just enough features to satisfy early customers and provide feedback for future product development.

An MVP is therefore a kind of minimalist implementation of software or a new feature, the motivation for which is to collect user feedback. An MVP is not yet built in accordance with all best practices in software development and is often limited in its features, containing only the minimum functionality needed to test the hypothesis.

The MVP is implemented as quickly as possible and put into production for real users. After that, *we measure* how users interact with the new functionality implemented by the MVP. For example, in the case of an internet service, we can *measure* how many people find the service\'s front page, register as users, log in to the system, log in again a week after registering, etc.

If the MVP concerns a new feature implemented in the system, *A/B testing* is often used: the new feature is released only to some users, while the rest continue to use the old feature. A new feature to be tested with MVP could be, for example, a new recommendation algorithm for an online store, and the test setup makes it easy *to measure* whether the feature being tested generates a higher number of purchases than the previous version of the system.

The actual behavior of users measured in the system is then compared to the hypothesis set at the beginning, which allows us *to learn* whether the implemented requirements were desirable in terms of system usage, i.e., are the features being used, do they help to acquire more paying customers, do they engage users more in using the application, do they make users spend more money, etc.

If the idea being tested proves to be viable, a more robust implementation of the functionality in question is made for the application instead of an MVP. If, on the other hand, the implemented idea does not prove to be good, it is possible to return to the previous version of the system and continue the build-measure-learn cycle by making a hypothesis about some other idea.

The purpose of the lean startup method is to learn systematically and as quickly as possible what customers want.

Despite its name, the Lean Startup method is used particularly extensively in large companies that produce Internet services, such as Facebook, Google, Netflix, and Amazon. The method is also actively used in the computer game industry in an effort to maximize the addictiveness of games.

## Requirements specification and project planning in an agile process model

Next, let\'s go through a common approach to requirements management and project planning in an agile software production project.

This method is based on the application of certain practices from Scrum and eXtreme Programming (XP). The source material includes many books and blog posts, such as \[Henrik Kniberg: Scrum and XP from the trenches\]\[https://www.infoq.com/minibooks/scrum-xp-from-the-trenches-2/\], \[James Shore: Art of Agile development\]\[https://www.jamesshore.com/Agile-Book/\], \[Jeff Sutherland et al.: A Scrum book\]\[http://scrumbook.org/\], and \[Mike Cohn\'s\]\[https://www.mountaingoatsoftware.com/blog\] excellent books *Agile Estimation and Planning* and *User stories applied*.

## User story

The most important tool in agile requirements specification is *the user story*. The Finnish term *käyttäjätarina* is sometimes used for the same thing. However, the translation is not fully established, so we will continue to use the English term.

According to \[Mike Cohn\]\[https://www.mountaingoatsoftware.com/articles/advantages-of-user-stories-for-requirements\], the leading authority in the field:

> A user story describes functionality that will be valuable to either user or purchaser of software. User stories are composed of three aspects:

1.  A written description of the story, used for planning and as a reminder
2.  Conversations about the story to flesh out the details of the story
3.  Tests that convey and document details and that will be used to determine that the story is complete

User stories describe *functionalities that generate value for the end user*. To ensure this, stories are written in language that is understandable to the customer.

According to points 1 and 2 of the definition, a user story is *a rough textual description* and a promise/reminder that *the exact description* of the functionality *must be clarified with the customer*.

The following could be descriptions (*written descriptions*) of user stories for an online store application:

- the customer can add a product to the shopping cart
- the customer can remove a product from the shopping cart
- the customer can pay for the products in the shopping cart with a credit card

A user story is not a traditional requirement specification that exhaustively describes the requirements for functionality; rather, a user story is a \"placeholder\" for a requirement, i.e., a reminder and a promise that the requirements for functionality will be clarified at a sufficient level before the user story is implemented.

The third sub-item of the definition states that the story includes *tests that convey and document details and that will be used to determine that the story is complete*. The story should therefore also include a set of tests or criteria that can be used to determine that the story has been implemented.

The way in which the acceptance criteria for user stories are expressed varies greatly. In the best case, they are tests that can be performed automatically. They may also be a list of action scenarios that are recorded in some way in connection with the story. However, it is quite common that they are not recorded at all, but instead the product owner, customer representative, or someone responsible for quality management approves the story by manually testing the corresponding functionality in the system.

Ron Jeffries \[https://ronjeffries.com/xprog/articles/expcardconversationconfirmation/\] has provided a definition of user stories that is identical in content to Mike Cohen\'s three-part definition but worded slightly differently. In his words, a user story is *a card, conversation, confirmation* (CCC), i.e.

- card: a memo-like, often even physical cardboard card, not a waterfall-like, extensive requirements specification document to be stored in a folder
- conversation: in order to implement a story, a lot of discussion is needed between application developers and product owners, customers, end users, etc., in order to find out what the story is really about
- confirmation: criteria based on which it can be determined that the story has been completed

### Example of a user story

It is common practice to write a description of a user story on a small, approximately 10-15 cm cardboard card or sticky note. Example borrowed from \[Scott Ambler\]\[http://www.agilemodeling.com/artifacts/userStory.htm\]

\![\]\[images/2-4.jpg\]

The front of the card contains a brief description of the story\'s content, priority, and estimate. *The estimate* refers to the estimated amount of work required to implement the card\'s functionality. We will return to the estimate in more detail shortly.

The back of the card contains a set of story acceptance criteria written in relatively informal language.

The acceptance criteria often describe a set of different conditions for how the functionality described in the story should behave in different situations. For example, if the story is \"*As a student*, *I want to purchase a parking pass*,\" the acceptance criteria specify various conditions related to the purchase:

- the purchaser of the parking pass must be registered as present
- the parking pass is granted for one month at a time
- only one parking pass can be purchased per month

The acceptance criteria are the result of discussions with the product owner or customer about the limitations of the story\'s functionality. They often specifically limit functionality. The criteria for the story in the example still leave many details open, such as payment -- how does it work? The criteria could be supplemented as follows

- the parking permit is paid for in cash or via online banking
- in the case of online payment, a reference number generated personally for the student must be used

### Criteria for a good user story

Previous example

> As a student, I want to purchase a parking pass so that I can drive to school

has been formulated in many places \[in a popular format\]\[https://www.agilealliance.org/glossary/user-story-template/\]

> As a *type of user*, I want *functionality* so that *business value*

This formulation is intended to draw attention to who benefits from the system function being described. The format does not lend itself well to descriptions in Finnish, so it will not be used in this course.

Recently, this way of formulating user stories has also come under criticism, among other things because it draws too much attention to how the story is written, rather than to *the story* itself, i.e., *what the story is about*. The format is losing popularity.

\![\]\[images/2-5.png\]{:height="200px" }

In his article \[INVEST in good User Stories\]\[https://xp123.com/articles/invest-in-good-stories-and-smart-tasks/\], Bill Wake lists six desirable characteristics for user stories:

- Independent
- Negotiable
- Valuable
- Estimable
- Small
- Testable

According to the *Independent* criterion, user stories should be as independent of each other as possible, meaning that the functionalities described in the stories should be implementable regardless of the status of other stories. This, in turn, gives the product owner more freedom to prioritize stories, i.e., to determine the order in which the application\'s functionalities will be completed.

Of course, there are situations where mutual dependence between stories cannot be avoided, such as in the case of e-commerce stories \"*add product to shopping cart*\" and \"*remove product from shopping cart*.\"

A good user story is *negotiable*, meaning that it is not an exhaustive requirement specification but a promise that the customer and the implementation team will agree on the content of the story\'s functionality with the necessary precision before the story is implemented.

*Valuable* means that the story should describe features that provide value to the user, formulated using the customer\'s language, not technical jargon.

It is considered good practice for a user story to describe all parts of the system (e.g., user interface, business logic, database) i.e., end-to-end functionality, rather than just a technical solution that is invisible to the user and only concerns a single technical layer of the system.

For example, *adding a row for each customer to the customers database table* would not be a recommended format for a user story, as it is not written in a way that is understandable to the user and only addresses the database layer.

*Estimable*, on the other hand, means that the amount of work required to implement a user story must be reasonably estimable.

The workload can be estimated more accurately if the user stories are *small* enough. A user story is definitely too large in terms of functionality if it cannot be implemented in a single sprint. A story that can just about be implemented in a single sprint is also considerably risky; it is better for the story to be closer to a day\'s worth of work than a week\'s worth.

User stories that are too large should be divided into smaller parts before they are implemented. For example, in an online store, there could be a use case *where the store administrator can log in to the site, add and update product information, and view a list of deliveries made to customers.* This should definitely be divided into several parts:

- the administrator can log in to the application
- the administrator can add products to the selection
- the administrator can update product information
- the administrator can view the list of deliveries made to customers

*The* sixth desired feature is *testability*, i.e., the user stories selected for implementation should be such that it is possible to test them or draw up criteria that make it possible to unambiguously determine whether the story has been implemented acceptably. Non-functional requirements (e.g., performance, usability) often pose challenges for testability.

For example, the user story *for an* online *store, which must function quickly even under heavy load,* can be formulated for testing as follows: *the user response time must not exceed 0.5 seconds in 99% of cases if there are a maximum of 1,000 simultaneous users on the page*.

As we will see later [in this section](osa2.md#user-story-ja-epiikki), user stories do not always have to comply with the INVEST criteria *for a good story*. In fact, the criteria only really apply to high-priority user stories, i.e., those that will be implemented in the near future. Lower priority stories may well be larger and more ambiguous in terms of testability and workload estimates. Stories should be divided and made to comply with the INVEST criteria at the latest when the story rises closer to the top of the priority order.

## Preliminary product backlog

Last week, in connection with Scrum, we talked *about the product backlog*, which is a prioritized list of the customer\'s requirements for the product, i.e., the desired features and functions. Nowadays, it is common practice for the product backlog to consist specifically of user stories.

At the beginning of a project, it is a good idea to start looking for and defining user stories and use them to form a preliminary product backlog. When applying Scrum, this is usually done before the start of the first sprint. This phase is sometimes referred to as the \[zero sprint\]\[https://www.mountaingoatsoftware.com/blog/sprint-zero-a-good-idea-or-not\].

All common requirements mapping techniques can be used to form the preliminary product backlog:

- interviews
- brainstorming
- workshops

The initial user story collection phase should not take too long, a few days at most. The nature of a user story (a memo and a promise that the requirement will be specified before implementation) makes it a good tool for starting a project. There is no need to get bogged down in unnecessary details, nor is it worthwhile to aim for a complete and comprehensive list of requirements, as stories will be refined, modified, and added to later. The second point in the definition of a user story is *conversations about the story to serve to flesh the details of the story*, which means that the content of the story may evolve over time.

Once a preliminary list of user stories has been compiled, they *are prioritized* and *the amount of work* they require *is assessed* at a level appropriate for the project. This forms a preliminary product backlog, i.e., a prioritized list of requirements.

## Prioritizing the backlog

The product backlog is therefore *a prioritized list of user stories*.

As stated [in the introduction to Scrum](osa1.md#scrum), *the product owner* is responsible for prioritization. The priority determines the order in which software developers implement the functionalities in the backlog.

The motivation for prioritization is to maximize the benefit/value that the customer will gain from the software being developed. The most important things are to be implemented as quickly as possible so that a preliminary version of the product can be brought to market as soon as possible.

In addition to the value that the functionality described in the story brings to the customer, the prioritization of user stories is influenced by at least *the amount of work* required to implement the story and *the technical risk* involved in the feature described in the story.

Therefore, it is not necessarily economically advantageous to prioritize solely based on the value the customer will gain from the user stories; some stories may generate a lot of value but be too labor-intensive to implement. A better \[return on investment, or ROI\]\[https://fi.wikipedia.org/wiki/Sijoitetun_p%C3%A4%C3%A4oman_tuottoaste\] can be achieved with an alternative story that is less laborious to implement.

Technical risks associated with the project should also be taken into account in prioritization. A technical risk may be, for example, whether a feature critical to the software can be implemented efficiently and economically with the available resources. It is better to identify such risk factors immediately rather than at a stage when a large amount of resources has already been invested in the project.

## Estimation, or assessing the amount of work

There are actually two motivations for estimating the amount of work required for user stories:

- to help the customer with prioritization
- to enable a rough estimate of the time required for the entire project or for versions containing certain functionalities

Over the years, several different methods have been developed for estimating the amount of work. What they all have in common is that they do not work properly, i.e., it is impossible to give accurate estimates of the amount of work involved. Sometimes the term *\"guestimation\"* is used jokingly to refer to estimating the amount of work involved, because in the end, estimating the amount of work involved is mostly guesswork.

The uncertainty associated with estimation is described by the concept *of the cone of uncertainty*:

\![\]\[images/2-6.png\]{:height="400px" }

In other words, the further away the completion of the product/feature is, the less accurate the work estimates are. This is because there are many unknown uncertainties at the beginning, but as the product development progresses, understanding increases and work estimates become more realistic. For example, if we consider a user story *about removing a product from the shopping cart*, it is very difficult to give any kind of work estimate for the story at the preliminary specification stage of the system. As application development progresses and we learn how the shopping cart will be technically implemented, what the application\'s user interface will look like, etc., it becomes much easier to estimate the workload for the story concerning removing items from the shopping cart.

## Estimation based on relative size

Agile software production methods take it for granted that estimation is uncertain and will only become more accurate during the course of the project. Because this is the case, strong promises based on estimation regarding software completion schedules are avoided.

There is some evidence (see \[Cohn: Agile estimation and planning\]\[https://www.mountaingoatsoftware.com/books/agile-estimating-and-planning\], chapter 8) that although it is difficult to estimate the exact time required to implement features, software developers are able to estimate the amount of work required for different tasks in relation to each other to a certain extent.

Examples of such relative estimation include

- *adding a product* from a user story *to a shopping cart* takes as long as *removing a product* from a user story *from a shopping cart*
- paying for *products in the shopping cart with a credit card* takes about three times longer than the previous tasks

Agile methods commonly use *relative* size-based estimation, often using an abstract time unit called *a story point*, which does not necessarily correspond to any actual time.

In the case of an online store, it could be determined that *adding a product* from a user story *to the shopping cart* is worth one story point. In this case*, removing a product from the shopping cart* would also be worth one story point, and *paying for products in the shopping cart with a credit card* would be worth three story points.

## Performing the estimation

Estimation is done in collaboration with the development team and the product owner. The product owner\'s role is to specify the requirements related to the user stories to be estimated to such an extent that the development team understands exactly what is involved. *However,* the actual estimation, i.e., *the work estimate*, *is always done by the software development team*. This is important because only application developers have even a somewhat realistic basis for making estimates.

As mentioned last week, agile projects usually define [a \"definition of done](osa1.md#definition-of-done),\" which is the general level of what is meant by \"finished.\" In most cases, \"done\" is defined as including the definition of the user story, design, implementation, automated testing, integration with other applications, documentation, and sometimes even deployment to production.

Estimation should therefore be based on the time required for the user story according to the definition of done, and not, for example, on the time required for programming alone.

Estimation is often aided by breaking down the user story into technical work phases. For example, the story *of adding a product to a shopping cart* could include the following technical tasks for implementation:

- a session is needed to remember the customer
- objects and data structures for displaying the shopping cart and purchase
- extension to the database schema
- the HTML view needs to be updated with the necessary buttons
- a controller for handling buttons
- unit tests for the controller and domain objects
- automation of acceptance tests

Breaking down the work into stages may also require some planning, e.g., you need to consider how the program structure needs to be modified in order to implement the new functionality in a sensible way.

If the functionality is similar to something that has been implemented before, the estimation can be done without considering the separate work phases required by the user story, by comparing the functionality to be estimated with previously implemented stories.

Since estimation is relatively inaccurate in any case, it is not worth spending too much time on it, e.g., a maximum of 15 minutes per user story. If this is not enough, it is likely that the content of the story, the assumptions it contains, and its dependence on the rest of the system are not yet known with sufficient accuracy to make estimation meaningful.

It may also be that a story that is difficult to estimate becomes easier to assess if it is divided into several smaller stories describing more limited functionality.

Estimating a user story is not a one-time task; the estimate is refined during the project as the developers\' view of the implementation principles for various issues begins to clarify.

As mentioned above, the *story point* unit used in relative estimation does not usually correspond to any time frame. However, some people measure a story point, at least at the beginning of a project, as *an ideal working day*, i.e., a working day without any distractions. However, the story point units used by different teams are not at all comparable with each other.

\[Many\]\[https://www.atlassian.com/agile/project-management/estimation\] \[parties\]\[https://medium.com/serious-scrum/12-common-mistakes-made-when-using-story-points-f0bb9212d2f7\] recommend not tying story points to hours or days. One argument in favor of not linking story points to specific time frames is that if a team defines a story point as, for example, eight hours of work, the team\'s estimates could be interpreted by company management as a commitment to the time required for each work phase. Agile methods want to avoid this at all costs due to the inherent uncertainty of estimates.

## Estimation methods

One fairly popular method of estimation is to attach a few stories of different sizes as references and then compare the complexity of other stories to these:

\![\]\[images/2-7.png\]{:height="300px" }

Since estimation is fairly inaccurate in any case, it is not appropriate to use a very precise scale for estimation. Most often, a scale that tapers off at the top is used, e.g., 1, 2, 3, 5, 10, 20, 40, 100. The Fibonacci sequence 1, 2, 3, 5, 8, 13, 21, 34, 55 is also popular as an estimation scale.

The motivation for a scale that tapers off at the upper end is that, because estimating large stories involves a particularly high degree of uncertainty, it is not worth pretending that the scale is very accurate for large stories.

Sometimes the value \"*epic*\" is used in estimation to refer to a user story that is so large or poorly understood that it does not make sense to estimate it at this time. In fact, Mike Cohn, the leading authority in the field, recommends using a scale of 1, 2, 3, 5, 8 or 1, 2, 4, 8 and giving stories larger than that an epic estimate.

In order for stories that have been given an *epic* estimate to be estimated, they must be broken down into smaller, more manageable stories. The term epic has another meaning in user stories, which we will return to a little later.

It is considered good practice for all members of the development team to participate in the estimation. This creates a common understanding of the content of the user story within the team. One popular way to involve the whole team in estimation is \[planning poker\]\[https://www.crisp.se/bocker-och-produkter/planning-poker\].

### Planning poker

In planning poker, the user stories in the backlog are reviewed one by one. The product owner presents the content of the user story and explains the nature and requirements of the story in more detail.

The team discusses the story and perhaps considers how it could be divided into technical work phases. When everyone feels ready to evaluate, each person gives their estimate (in units, i.e., story points). This step is often carried out using playing cards with estimated values, e.g., 1, 2, 5, 10, etc., and everyone participating in the estimation shows their estimate at the same time.

If the estimates are roughly the same, the estimate is marked on the user story and the team moves on to the next one.

If there are significant differences in the proposed estimates, the team discusses the reasons for the differences. For example, some team members may understand the user story requirements in a completely different way, which causes differences in the estimates.

Once the team has had time to discuss the matter, a new round of estimation takes place, and sufficient consensus is likely to be reached soon.

\![\]\[images/2-8.png\]{:height=\"350px\"}

## A good product backlog is DEEP

Mike Cohn and Roman Pichler have launched the acronym \[DEEP\]\[https://www.romanpichler.com/blog/make-the-product-backlog-deep/\] to describe the characteristics of a good backlog. The acronym stands for *detailed appropriately, estimated, emergent,* and *prioritized*.

Of these characteristics, *estimated* and *prioritized* are familiar to us: stories have work estimates and are prioritized, i.e., ranked in order of importance.

A good backlog is also *detailed appropriately*. The user stories with the highest priority, i.e., those to be implemented soon, should be relatively small, their acceptance criteria should be roughly clear, and there should be a reasonably good picture of the required workload.

Lower-priority user stories can still be larger and more roughly estimated. In fact, it is not even worth defining lower-priority stories too precisely, as it will be a long time before they are implemented in a sprint. It is often the case that lower priority stories are never implemented, as the functionality they define is found to be unnecessary. It is therefore not worth investing too much time speculatively in low priority stories.

*Emergent* describes the backlog\'s \[changing nature\]\[https://www.romanpichler.com/blog/make-the-product-backlog-deep/\]:

> The product backlog has an organic quality. It evolves, and its contents change frequently. New items emerge based on customer and user feedback, and they are added to the product backlog. Existing items are modified, reprioritized, refined, or removed on an ongoing basis.

In other words, the backlog does not remain unchanged but is constantly evolving. New stories are added, existing stories are refined and broken down, and unnecessary stories are removed. Work estimates and priorities are redefined.

Of course, this does not happen by itself; the backlog must be actively managed (backlog grooming or backlog refinement) as the project progresses. The Scrum Guide \[https://scrumguides.org/scrum-guide.html#artifacts-productbacklog\] mentions that backlog grooming should take place throughout the sprint in collaboration between the product owner and the development team.

The idea is to keep the backlog in DEEP mode at all times, which in turn makes it much easier to plan each new sprint. If the backlog is in poor condition (priorities are random, important stories are in a vague state, and stories corresponding to newly identified needs have not been added to the backlog) when planning the sprint, everyone\'s time will be wasted.

\![\]\[images/2-9.png\]{:height=\"250px\"}

## User story and epic

We mentioned earlier that a good user story is characterized by the INVEST criteria, meaning that the story is *independent, negotiable, valuable, small, and testable*. One of the criteria is that the story should be small, meaning that the user story should be implementable in a single sprint. The DEEP criteria for the backlog, on the other hand, state that the backlog should be *suitably detailed*, and that low-priority stories in particular should not be made too precise. The INVEST criteria apply specifically to high-priority stories, meaning that before a story can be implemented, it must be small enough, well estimated, and testable, i.e., the story\'s acceptance criteria must be clear.

The stories at the bottom of the backlog, on the other hand, can be large, even so large that they cannot be implemented in a single sprint, but must be divided into smaller, more limited stories before they can be implemented. Large stories like these are often called epics.

In some contexts, user stories are said to be \[ready\]\[http://scrumbook.org/value-stream/product-backlog/definition-of-ready.html\] if they comply with the INVEST criteria, i.e., they are *ready to be included in a sprint*.

A user story is therefore likely to be *an epic* at the beginning of its life cycle. As time passes, the story may be broken down and some of its parts become *ready* as they are refined and their priority increases. When a story is selected for a sprint and implemented, its status changes *to done*. Of course, not all stories added to the backlog are so large that they could be considered *epics*; a new story may be small but unclear in its requirements, meaning it is not yet *ready*.

## Velocity

Another purpose of estimating user stories is to enable a rough estimate of the time required for the entire project or a larger part of it.

However, if the unit of estimation is an abstract concept *called a story point*, how can estimates be used to estimate the time required for the project?

The development team\'s *velocity* offers a partial solution to this problem. Velocity refers to the number of story points that the team can complete on average during a single sprint.

If the team\'s velocity is known and the user stories to be implemented in the project or part of it have been estimated, it is easy to make a preliminary estimate of the time required

> (sum of user story estimates) / velocity \* sprint length

At the start of a project, velocity is usually not known, unless the team has worked together before. Several different methods have been developed to try to predict velocity before the project starts. However, these are very unreliable, and we will not discuss them here. At the start of a project, estimates of its duration are very inaccurate, mostly just guesses.

Velocity typically varies quite a lot at the beginning, especially if the application area and/or technologies used are not completely familiar to the team. However, velocity usually begins to stabilize after a few sprints.

\![\]\[images/2-11.png\]{:height="350px" }

The team\'s velocity and the estimate of the duration of the project or its sub-project based on it will gradually become more accurate.

In agile methods, it is essential to describe the progress of the project as realistically as possible. For this reason, only the story points of user stories that have been fully completed (i.e., at the quality level defined by [the definition of done](osa1.md#definition-of-done)) are included in the velocity calculation. Work that is \"almost complete\" is therefore not considered to be completed work at all.

\![\]\[images/2-12.png\]{:height=\"250px\"}

### Comparing the velocity of different teams

As mentioned earlier, a story point [does not correspond to any time-bound amount of work](osa2.md#suhteelliseen-kokoon-perustuva-estimointi). Each team defines for itself what a story point means to the team. Often, the definition is based on the estimated amount of work for a specific user story. For example, the team may define that *adding a product* to the *shopping* cart is one story point. For this reason, the velocity of different development teams is not comparable at all, except in situations where teams work on a shared backlog and handle estimation together.

## Burndown and burnup charts

The progress of an agile project is sometimes described using a *release burndown* chart. Time progresses on the x-axis of the chart, one sprint at a time, while the y-axis shows the amount of work remaining, measured in story points:

\![\]\[images/2-13.png\]{:height="350px" }

In an agile project, requirements may change during development, so the amount of work remaining does not always decrease. Sometimes *burn-up* charts are used, which more clearly show the increase in workload during the project:

\![\]\[images/2-14.png\]{:height="350px" }

## Release planning and product roadmap

The product backlog lists user stories describing the system requirements in order of priority. Priority is usually determined by the value that the stories bring to the customer. The development team implements the stories one sprint at a time, selecting the stories with the highest priority at that moment for each sprint.

When developing software, it is often necessary to have a higher-level view of project scheduling and development direction than just the backlog and individual sprints. There are many reasons for this. For example, applications may have different deadlines by which certain features must be ready. In some situations, application versions may need to be released at regular intervals, such as every four months.

This kind of longer-term planning for individual sprints is often referred to as release planning. Release planning usually involves considering user stories at a more general level, deciding which larger functional entities should be included in each release or milestone. Milestones typically consist of several sprints.

It can be thought of as release planning dividing the backlog content into larger blocks, into which the user stories that are thought to be included in that milestone at the time of planning are placed:

\![\]\[images/2-10.png\]

Different milestones may be of equal length, i.e., they may consist of a standard number of sprints. However, this is not always appropriate, and it may make sense for the length of milestones to vary.

Each milestone may have its own higher-level goal, e.g.:

- milestone/release 1: basic functionality of the online store
- milestone/release 2: product reviews and recommendations based on reviews
- milestone/release 3: product recommendations based on users\' purchase history

This makes it much easier to communicate the planned progress of the software to stakeholders than if you just use the product backlog as a communication tool.

However, in line with the agile spirit, the content of milestones can change, and the further away the future is, the more speculative the content of the release plan becomes. The release plan is often also referred to as the product roadmap \[https://www.romanpichler.com/blog/product-roadmap-vs-release-plan/\].

## User story mapping

A slight drawback of the product backlog is that it does not properly highlight the broad outlines of application development. \[User story mapping\]\[https://www.jpattonassociates.com/user-story-mapping/\] is a technique that has recently gained attention and offers a better tool for planning application releases than the \"one-dimensional\" view of the product backlog.

The technique divides user stories into separate columns according to their importance under the different functional areas of the application. The following example shows *a story map* for an online store, which divides user stories according to whether they relate to product search, product page, or checkout:

\![\]\[images/2-15.png\]{:height="400px" }

The rows in the story map are logical entities, each of which forms a milestone for the application or, for example, a meaningful entity to be developed in a single sprint.

## Is estimation worthwhile?

There are two motivations for estimating the amount of work involved in user stories:

- to help the customer with prioritization
- enabling the estimation of the time and thus also the cost of the entire project or certain milestones

Story point-based relative estimation has achieved a solid position in the canon of agile software development. The Scrum guide mentions that the requirements in the backlog are estimated, as are many best practices such as DEEP.

However, the \[#NoEstimates\]\[https://twitter.com/search?q=%23noestimates\] movement that has emerged in recent years has begun to question the story point-based estimation method and considers the benefits achieved to be too small compared to the time and effort spent on estimation. The #NoEstimates movement \[does not in any way dispute\]\[https://plan.io/blog/noestimates-6-software-experts-give-their-view/\] that work estimates are not useful; rather, its purpose is to get people to think about when estimation makes sense and to highlight alternative ways of estimating.

One method that has been in use for years \[https://ronjeffries.com/xprog/articles/jatrtsmetric/\] is to estimate the velocity of the development team by counting *the number* of user stories completed in each sprint, instead of using story point-based estimation. According to many \[experiences\]\[http://blog.karhatsu.com/2013/08/from-hour-estimates-gradually-to.html\], this method works quite well, especially if the stories are of sufficient uniform size.

## Sprint planning

As a recap [from last week](osa1.md#sprintin-suunnittelu), Scrum requires a planning meeting to be held before each sprint. The primary goal of the meeting is to determine *which user stories* will be selected for implementation *in the sprint*.

The starting point for sprint planning is a DEEP product backlog, i.e., a backlog that is in the right state. This means that the backlog has been prioritized and estimated, and the user stories with the highest priority are small enough and well understood by the product owner.

When planning the sprint, the product owner ensures that the development team has a good understanding of the user stories at the top of the product backlog. The team selects as many stories from the backlog as it estimates it can implement during the sprint at the quality level defined by the definition of done.

## Sprint goal

The Scrum Guide recommends that *the sprint goal* be defined during planning. The sprint goal is a short, one- or two-sentence description of what the team intends to accomplish during the sprint.

In his book written in 2002, Scrum developer Ken Schwaber mentions that he often sets the goal for the first sprint as: *demonstrate a key piece of user functionality on the selected technology*.

For example, when developing an online store, the goals for the following sprints could be:

- Basic shopping cart functionality: adding and removing products
- Paying for purchases and selecting delivery method

The sprint goal serves as a quick description for people outside the team of what the team is doing during the current sprint. Although the same information can in principle also be obtained by looking at which user stories the team is working on, a shorter description in a more generic form is better for many software stakeholders, such as company management, who are not interested in following events with the precision of individual stories.

The success of a sprint is usually assessed in relation to the sprint goal, meaning that even if some individual user stories remain unimplemented, the sprint can still be considered a success if the implemented functionality covers the essential parts of the sprint goals.

## Number of user stories to be implemented in a sprint

The development team decides how many user stories will be implemented in the sprint. The main principle is to select an \"appropriate number\" of the highest-priority user stories from the backlog and move them *to the sprint backlog*.

\![\]\[images/2-16.png\]{:height=\"350px\"}

There are \[several\]\[https://www.infoq.com/minibooks/scrum-xp-from-the-trenches-2/\] ways to decide on the number of stories to be included in a sprint:

- if the stories are estimated and the team\'s velocity is known, the number of stories included in the sprint is equal to the velocity
- if there are no estimates and/or the velocity is unknown, take as many high-priority stories as all team members feel they can commit to
- a combination of the above, i.e., even if the velocity and estimates are known, discretion is also used to determine whether the number selected based on the velocity feels appropriate for the team members

Regardless of the selection principle used, it is essential that only the number of stories that the team feels it can properly implement, i.e., at the quality level defined by the definition of done, is selected for implementation.

## Selecting user stories to be implemented in a sprint

By default, a set of user stories at the top of the backlog is selected for the sprint:

\![\]\[images/2-17.png\]{:height="220px" }

However, the product owner has the opportunity to influence the stories included in the sprint by *reprioritizing them*.

What if the product owner wants story D to be included in the sprint? The product owner raises the priority of D, and C is dropped from the set of user stories selected for the sprint:

\![\]\[images/2-18.png\]{:height="250px" }

What if the product owner wants to include all user stories A-D in the sprint? Something has to be sacrificed: the product owner reduces the functionality defined by user story A, the development team estimates the reduced A, and now A-D fit into the sprint:

\![\]\[images/2-19.png\]{:height="215px" }

What if the functionality of A cannot be reduced and the product owner still wants A-D included in the sprint? The solution is to split user story A into two smaller parts, A1 and A2. A1 contains the most important features of A and is included in the sprint, while A2 is given a lower priority and is left out of the sprint:

\![\]\[images/2-20.png\]{:height=\"250px\"}

## Splitting user stories

Splitting user stories into smaller ones is not easy for beginners, and sometimes even for professionals.

The INVEST principle mentioned earlier provides six criteria for a good, implementable user story, and these criteria should also be kept in mind when dividing stories into smaller ones. One fairly obvious way would be to divide stories according to the software architecture layers, i.e., *adding a product to the shopping cart* would be divided into the following stories:

- a button for adding a purchase to the browser-based user interface
- a mechanism for updating the shopping cart in the application logic on the server
- a table in the database for displaying the shopping cart

However, this kind of division is not good. Stories divided in this way are not valuable to the customer, nor are they independent of each other. In other words, if the first and second stories were implemented, for example, they would still be dependent on the third story before the functionality would be meaningful.

Below are a few different ways to divide stories, inspired by \[Richard Lawrence\]\[http://www.richardlawrence.info/2009/10/28/patterns-for-splitting-user- stories/\].

#### Pattern 1: workflow steps

Let\'s look at an application like Flamma, which can be used to publish articles on a company\'s website, among other things. One of the application\'s user stories is as follows:

*As a content manager, I can publish a news story to the corporate website.*

Publishing articles in a company that uses the application is a multi-step process, with each article going through several work stages (workflow), including linguistic (editor review) and legal (legal review) checks, and for this purpose, the articles are first published in a so-called staging environment.

One way to break down the original story is to divide it into several parts according to the different work stages:

- *\... I can publish a news story directly to the corporate website*
- *\... I can publish a news story with editor review on a staging site*
- *... I can publish a news story with legal review on a staging site*
- *... I can view a news story on a staging site*
- *... I can publish a news story from the staging site to production*

Although the first story does not yet provide support for all work phases on its own, its implementation may be sufficient for the feature to be introduced. Other work phases (editing and legal review) can initially be handled outside the system, e.g., by email. In later sprints, the functionality can then be expanded as needed by implementing other stories.

#### Pattern 2: business rule variations

A story that contains many complex conditions (business rules), e.g.

*As a user, I can search for flights with flexible dates.*

should be divided so that each of these conditions is specified in its own story:

- *\... as \"between dates x and y\"*
- *... as "a weekend in December"*
- *... as "± n days of dates x and y"*

#### Pattern 3: simple/complex

Somewhat similar to the previous method is to divide a complex user story into a simple but useful story, a kind of \"minimal viable product,\" and form a set of stories that add to its basic functionality.

For example, a story describing flexible flight search

*As a user, I can search for flights between two destinations*

can be divided as follows

- *... when only direct flights are used*
- *... specifying a maximum number of stops*
- *... including nearby airports*
- *... using flexible dates*

#### Pattern 4: major effort

Sometimes a good distribution criterion is to first implement the story with one example case and then generalize it into a separate story. For example, a story about credit card payments

*As a user, I can pay for my flight with VISA, MasterCard, Diners Club, or American Express.*

could be divided into two parts, where the first story would only cover one type of credit card, and the next story would generalize the function to all cards:

- *\... I can pay with VISA*
- *... I can pay with all four credit card types (VISA, MC, DC, AMEX) (given one card type already implemented)*

#### Pattern 5: data entry methods

A good way to divide stories is to first create a version with a simple user interface and then expand it into its own story. User story

*As a user, I can search for flights between two destinations*

can be easily divided into two, for example, as follows

- *\... using simple date input*
- *\... with a fancy calendar UI*

#### Pattern 6: Defer Performance

In some cases, a similar division can be made in terms of performance, i.e., a basic version is created first and an extended story optimizes performance. User story

*As a user, I can search for flights between two destinations*

is divided into two parts as follows:

- *\... slow---just get it done, show a \"searching\" animation*
- *... in under 5 seconds*

#### Pattern 7: Operations

One of the most common ways to divide stories is to separate the operations included in a story into their own stories.

A story describing user management

*As a user, I can manage my account*

can be conveniently divided into several parts

- *... I can sign up for an account*
- *\... I can edit my account settings*
- *... I can cancel my account*

#### Pattern 8: Break Out a Spike

There are many situations where it is really difficult to estimate the size of a story in advance. Either the requirements of the story are unclear, meaning that it is not yet clear what is wanted, or the story may contain a part that is risky in terms of implementation. Sometimes the uncertainty contained in a story cannot be eliminated in any other way than by conducting an experimental implementation to investigate the technical risks or clarify the user\'s intentions.

This type of experimental implementation is called a \[spike solution\]\[https://www.jamesshore.com/Agile-Book/spike_solutions.html\], and it is usually given a limited amount of time to complete, e.g., two days.

If the team has never implemented credit card payment functionality, the user story

*As a user, I can pay by credit card*

it is worth separating it into a time-limited experiment to be carried out in an earlier sprint. After this, it is hoped that the story implementing the actual functionality can be estimated more accurately:

- *Investigate credit card processing*
- *Implement credit card processing*

Earlier in this section, we talked about the Lean Startup method, in which the functionality of new ideas is tested using A/B testing, i.e., a minimal viable product (MVP), or minimalist version, of the idea is implemented and made available to some of the system\'s users. If the new idea seems to work, it is implemented properly and replaces the original functionality. A/B testing is very similar in concept to a spike solution, i.e., an MVP version is built using A/B testing to determine the functionality of an idea, and only then is the functionality implemented in its entirety.

There are many advantages to dividing user stories. When stories are divided, it is often noticed that the original large story, or epic, actually describes a much broader functionality than is needed, meaning that dividing stories can potentially eliminate a lot of unnecessary functionality from the application. Smaller stories also increase the predictability of software development. The smaller the stories are, the easier they are to estimate and the more likely they are to be implemented during a single sprint, making the team\'s velocity more predictable.

## The second goal of sprint planning

When planning a sprint, the user stories selected for the sprint are usually also given sufficient technical planning, i.e., an outline of *how* the stories will be implemented. Components and interfaces are planned at a rough level, and changes to the existing part of the application caused by user stories are taken into account.

During planning, it is common to break down each user story into technical tasks that must be completed in order to complete the user story.

For example, the story *of adding a product to the shopping cart* could be broken down into the following technical tasks:

- a session is needed to remember the customer
- objects and data structures for displaying the shopping cart and purchase
- extension to the database schema
- the HTML view must be updated with the necessary buttons
- a controller for handling buttons
- unit tests for the controller and shopping cart logic
- automation of acceptance tests

## Sprint backlog

The sprint task list, or *sprint backlog,* consists of user stories selected for the sprint and related technical tasks, or tasks. The sprint backlog is primarily a tool for the development team, and the team decides how to organize its backlog with the assistance of the scrum master.

The sprint backlog is often organized *into a* table-like *task board* with one row for each user story selected for the sprint. Tasks related to the story move from left to right through columns describing their status: *not started, in progress, done*:

\![\]\[images/2-21.png\]{:height="400px" }

Not all tasks related to a story are usually identified during sprint planning, and new tasks are added as needed as the sprint progresses.

The current best practice is to use physical task boards, with user stories represented by cardboard cards and tasks written on Post-it notes.

\![\]\[images/2-23.jpg\]

Unlike the previous example, the task board in this example also has a *\"blocked\"* column, which describes tasks that have been interrupted for one reason or another due to some obstacle. The task board can contain any columns. Scrum does not provide any guidelines for creating a sprint backlog; the main thing is that the team modifies its task board to support its own goals. It is also quite typical for a team to modify the task board during the project when it realizes that the existing task board structure is no longer optimal for the team\'s work.

## Sprint work estimates and burndown

According to the Scrum Guide \[https://scrumguides.org/scrum-guide.html#artifacts-sprintbacklog\], the team should monitor how much work is left in the sprint during the sprint. One way to monitor the workload during a sprint is to estimate the workload of the tasks in the sprint. According to several \[experts\]\[https://www.mountaingoatsoftware.com/blog/why-agile-teams-should-estimate-at-two-different-levels\], the tasks included in the sprint should be estimated based on *the number of working hours* they require, unlike user stories, which are estimated using an abstract time measure, i.e., story points.

Task estimates must be kept up to date, i.e., the amount of work remaining for each task is assessed, for example, in daily scrum meetings.

The amount of work remaining (measured in hours) can be visualized with a burndown chart that shows the progress of the sprint:

\![\]\[images/2-22.png\]

The work estimate may also increase during the sprint if new tasks are identified during the sprint or if a task is found to be more complex than originally thought. It is essential that the work estimates for tasks are *estimates of the amount of work still required*.

In Scrum, the amount of work *spent* on tasks is not tracked in any way, so even if a task took 5 hours to complete, it is not marked anywhere and is not directly deducted from the work estimate. Instead, *a new work estimate* is made based on how much time is still thought to be needed to complete the story.

### Sprint taskboard format

The general consensus is that, at least for Sprint management, a manual taskboard using sticky notes is superior in terms of usability and informativeness.

Of course, electronic versions of taskboards are often used, sometimes due to company practices, sometimes due to the working methods and location of team members. For example, an electronic taskboard may be the only viable solution for a remote team.

There are countless different solutions for creating an electronic backlog and taskboard. You can use a general-purpose application such as Excel or Google Drive. GitHub Projects now offers a very useful taskboard view of GitHub issues. There are also a large number of more or less useful applications designed specifically for agile project management, such as JIRA, Asana, Trello, Pivotal Tracker, Trac, and Bugzilla.

Spreadsheet programs work reasonably well as electronic taskboards. When using spreadsheets, each day of the sprint has its own column, where at the beginning of each day an estimate of the remaining workload (in hours) is entered:

\![\]\[images/2-24.png\]{:height="400px" }

This makes it easy to automate the drawing of the sprint burndown chart. The product and sprint backlogs for a software production project \[here\]\[https://docs.google.com/spreadsheets/d/13RzIZI2NFFuV0zdRjrrfoC-CrootK8AZNuHS571Wlxo/edit?usp=sharing\].

The task board and any burndown chart clearly show the progress of the sprint, and it is recommended that they be visible to all team members and project stakeholders. When using electronic taskboards, there is always a risk that they will not convey information as well as a manual taskboard on the wall. This may compromise the principle of transparency, which is vital for agile development.

### Is it worth estimating the internal workload of a sprint?

It is somewhat controversial whether it is worthwhile to estimate the workload of tasks related to stories. A book published in the fall of 2019 \[A Scrum book\]\[http://scrumbook.org/value-stream/information-radiator/sprint-burndown-chart.html\], published in the fall of 2019, does not recommend estimating the workload at the task level, but instead urges teams to only track *how many story points of user stories have been completed* during sprints.

This is quite wise advice: it is possible that the team completes almost all tasks in a sprint without completing a single story, meaning that the burn down may look quite good, but the value received by the customer is ultimately zero.

When using a physical task board, instead of estimating the workload for the sprint and drawing a burn down chart, a very simple way to monitor the progress of the sprint is to count, or even just visually check on the task board, the number of tasks that have been completed and those that are still to be completed in the sprint.

## Limiting the amount of work in progress

A large number of tasks in progress at the same time can be a problem in Scrum, as it increases the risk of having many partially completed user stories at the end of the sprint. It may therefore be useful to limit the number of tasks in progress at the same time by setting *work in progress (WIP)* limits. WIP limits are borrowed from the Kanban method, which we will discuss in more detail [in section 5](osa5.md#kanban). The combination of Scrum and Kanban is often referred to as \[Scrumban\]\[https://www.cs.helsinki.fi/u/mluukkai/ohtu/ilves-kandi.pdf\]. However, Scrumban has other elements borrowed from Kanban besides WIP limits.

WIP limits can be applied in many ways, for example, by limiting the amount of work at a certain stage of the task board:

\![\]\[images/2-25.png\]{:height="350px" }

In the example shown in the image, the constraints are indicated by numbers in the column headers describing the work phases. For example, the number 3 in *the development* column specifies that no more than three tasks may be in the implementation phase at any one time, while the number 2 in the *testing* column limits the number of tasks undergoing testing to two at a time.

## Lean waste and Scrumban

The idea of WIP (Work in Progress) constraints, which control the amount of work done at any one time, originates from the Kanban method. The Kanban method is one of the key tools of Lean thinking.

Lean thinking is based on the idea of eliminating waste (Japanese: muda) or things that do not produce value from the operations of organizations. Lean thinking originated decades ago in the Toyota Production System \[https://global.toyota/en/company/vision-and-philosophy/production-system/\].

Lean identifies several types of waste, including partially done work, intermediate storage, and unnecessary waiting. When applied to the context of software production, work stages that are not yet complete in the sense of the definition of done represent waste according to Lean. For example, functionalities awaiting testing (user stories) are considered to be \"in intermediate storage,\" as are functionalities that have already been tested but are still awaiting production.

For the customer, functionalities only start to generate value once they are put into use; while they are still in progress, they only generate costs and pose a risk.

In Kanban and Scrumban methods, WIP limits are usually used to limit the number of user stories being worked on at the same time. Kanban and Scrumban do not usually have a concept similar to Scrum sprints that punctuate development work, but may follow the principle where the team completes one user story at a time, demonstrates it to the customer, and selects the next story from the product backlog to work on.

In some cases, customer meetings and presentations of completed stories in Kanban and Scrumban may take place according to an agreed schedule, for example every two weeks, even if the development work itself does not follow sprints but progresses one story at a time.

WIP limits can be applied in many ways in Scrum. In the example above, the number of tasks allowed in one work phase at a time was limited. It may also be useful to define how many tasks one person can have in progress at a time. Perhaps the best way to apply WIP limits is to limit the number of user stories in progress at a time. For example, the Scrum book (http://scrumbook.org/) recommends that only one user story be worked on at a time. This ensures that value-producing entities \"flow\" to the application user as evenly as possible.

WIP limits are often adjusted during retrospectives if problems are identified in the development work.

## Before the start of the next sprint

As [mentioned](osa1.md#sprintin-katselmointi) in the previous section, a sprint review and sprint retrospective are held at the end of the sprint. The review evaluates the work done by the development team. Unfinished or poorly implemented user stories are moved back to the backlog.

During the sprint, new user stories may have been added to the product backlog, or existing stories may have been modified and reprioritized. It is recommended that the development team spend a small amount of time during the sprint on product backlog activities, i.e., [backlog grooming](osa2.md#hyva%CC%88-product-backlog-on-deep), such as estimating new user stories. If the product backlog is in good shape at the end of the [DEEP](osa2.md#hyva%CC%88-product-backlog-on-deep) sprint, it is easy to start planning the next sprint and move on to a new sprint.

In the retrospective, the team reviews its own practices and identifies possible areas for improvement for the next sprint. One important area of focus in the retrospective is the sprint task board: does it provide sufficient transparency for sprint monitoring, should more work phases be added to the board (e.g., testing, releasing, etc.), did tasks get stuck in certain work phases in an unexpected way, should WIP limits be added to the board?

\<\<\