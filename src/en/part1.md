The first part begins with an overview *of software production*, its history, and subfields. This is followed by an introduction to the waterfall model, a previously popular method of managing software projects, and then to agile methods, the current prevailing method of software project development and management.

The latter half of this part focuses *on Scrum*, the most popular agile method, which provides concrete guidelines on how to manage agile software projects.

You have already read [Part 0](osa0.md), which goes into more detail about the course arrangements and assessment principles, right?

## Typos in the material

Please [suggest corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

## Software production and its subfields

The IEEE (Institute of Electrical and Electronics Engineers), one of the key influential organizations in our field, defines software engineering as follows:

> The application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software; that is, the application of engineering to software

According to the IEEE, software engineering refers to a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software. The final sentence of the definition states that it is an \"engineering\" approach to software development.

The source for this definition is \[SWEBOK\]\[https://www.computer.org/education/bodies-of-knowledge/software-engineering\], or *Software Engineering Body of Knowledge*, where the IEEE has defined, through a committee, what it means by software production and what areas it considers to be part of software production. The latest version of SWEBOK, 3.0, is from 2014, so it is already somewhat outdated.

> Side note: the term \"software production\" is *\"software engineering\"* in English. The Finnish equivalent \"*ohjelmistotuotanto\"* is actually a rather poor translation. If the Finnish term were translated back into English, the result would be *software production*, i.e., the manufacture of software. The term production is generally used for straightforward product manufacturing; for example, if a factory manufactures chairs, it can be said that its field is *chair production*. The activity of making software is very different from that of making chairs, for example. The English term \"development\" is used to refer to the \"construction\" of software, so we could say that *a company develops software for accounting*, which in Finnish would be *yritys kehittää ohjelmistoja laskutukseen*. Development is an activity that involves more than just straightforward manufacturing (production); it also includes planning and questioning what kind of product is needed and why. Software engineering refers to the application of an \"engineering\" approach to software development.

### Areas of software production

According to SWEBOK, software engineering is divided into the following areas:

- Software requirements
- Software design
- Software construction
- Software testing
- Software maintenance
- Software configuration management
- Software engineering management
- Software engineering process
- Software engineering models and methods
- Software quality

*Software requirements* refer to the requirements set for software, i.e., how the end user or customer thinks the software being developed should work.

*Software design,* on the other hand, refers to the design of the internal structure of software with the desired functionality.

*Software construction* refers to the activities used to turn the designed software into a working product, i.e., programming and debugging.

As you might guess, *software testing* refers to the methods used to ensure that the software works as intended and that it is sufficiently bug-free for use.

Most software is never truly finished. Once the first version is released, maintenance begins, i.e., bugs are fixed and new features are added to the software.

*Software configuration management* refers to the configuration of libraries, hardware, and the translation process related to the deployment of software, as well as software versioning.

Software development involves a lot of planning, coordination, administration, and reporting, i.e., \"management,\" which is referred to as *software engineering management*.

The *software engineering* process describes the ways or methods by which software developers should manage and schedule the various activities (requirements, design, construction, testing) required for software development. We will return to this topic in more detail in the next chapter.

*Software engineering models and methods* describe more detailed methods used in software development, such as modeling and various design methods.

*Software quality* is an even broader concept than testing in terms of determining whether software is good. More important than the absence of bugs and correct functioning is the question of whether the software meets the needs of users, i.e., whether it is suitable for its intended use.

Software production therefore encompasses a large number of very different things. This course covers all of these areas to at least some extent. Since there are so many topics and time is limited, the coverage of each topic will unfortunately be somewhat superficial. However, there are advanced courses available in the master\'s program for almost every topic.

At this stage, it is most important for a novice software student to gain an overview of the entire field of software production and then apply and reflect on the \"theory\" they have learned in practical software work, e.g. in the Department of Computer Science\'s course \[software production project\]\[https://github.com/HY-TKTL/TKT20007-Ohjelmistotuotantoprojekti\] or in real working life. Courses that delve deeper into the subject matter are likely to be much more rewarding at a stage when students already have some practical work experience in the field.

## Software phases and life cycle

The software production areas mentioned in the previous chapter

- Software requirements, requirements specification
- Software design
- Software construction
- Software testing
- Software maintenance

can be thought of as phases through which software progresses during its development. These phases are sometimes referred to as the software lifecycle. Over time, there have been different ways of structuring software development in terms of the lifecycle, meaning that how and by whom the phases are carried out has varied.

### Code'n'fix

In the early days of computers, hardware was expensive, and software was considered \"trivial\" compared to hardware. Programming was initially done by connecting cables and, a little later, in machine language. Application users, such as physicists calculating the flight paths of missiles, usually programmed the applications they needed themselves.

Application development was largely based on a *code and fix* mentality, i.e., the code was written and then checked to see if the software worked. Due to the simplicity and relative cheapness of the software, this did not create any bottlenecks in the work; on the contrary, it made the work easier, as calculations could be done on a computer instead of by hand.

Gradually, software began to grow. Higher-level programming languages such as Fortran, Cobol, and Algol were developed, and the use of software began to expand beyond the military industry. Software began to be made for end users who were no longer professionals in the software industry, meaning that the gap between software developers and end users began to grow.

The software industry began to encounter problems. According to Wikipedia \[https://en.wikipedia.org/wiki/Software_crisis\], the following issues began to arise

- budgets were exceeded and projects fell behind schedule
- software was inefficient, of poor quality, and did not meet user needs
- code maintenance and expansion were difficult
- and even though there were good intentions, it often happened that the software could not be delivered at all

### The software crisis

In the summer of 1968, a conference organized by NATO announced that the world was in the midst of a *software crisis*.

The term refers to the difficulty of implementing usable, properly functioning, efficient, and expandable software within the limits of available resources.

One of the pioneers of information technology, Turing Award winner Edsger Dijkstra, expressed this as follows in a \[presentation\]\[https://www.cs.utexas.edu/\~EWD/transcriptions/EWD03xx/EWD340.html\] he gave in 1972

> The major cause of the software crisis is that the machines have become several orders of magnitude more powerful! To put it quite bluntly: as long as there were no machines, programming was no problem at all; when we had a few weak computers, programming became a mild problem, and now we have gigantic computers, programming has become an equally gigantic problem.

In other words, when there were no computers, programming was not a problem. The first computers had low computing power and caused only minor problems for programming. With the advent of massively powerful computers, programming has also become a massive problem\...

### Software development as an engineering discipline: software engineering

The term *software engineering* was first defined in 1968:

> The establishment and use of sound engineering principles in order to obtain economically software that is reliable and works efficiently on real machines

The idea arose that instead of *a code\'n\'fix* mentality, software development should be like any other engineering work, such as bridge construction, where the artifact must first be precisely defined (requirements) and designed (design) without gaps, after which construction is a fairly straightforward step.

### The waterfall or linear model

Winston Royce\'s 1970 article \[Management of the development of Large Software\]\[https://web.archive.org/web/20230326053749/http://www-scf.usc.edu/\~csci201/lectures/Lecture11/royce1970.pdf\] discusses the problems associated with developing large software programs. On page 2 of the article, Royce presents *a* simple *process model* (i.e., guidelines for scheduling work phases) in which the phases of the software life cycle are performed linearly in sequence:

\![\]\[https://raw.githubusercontent.com/mluukkai/ohjelmistotekniikka-kevat2019/main/web/images/l-1.png\]

Royce\'s version of the image looks like this:

\![\]\[images/1-1.png\]

The straightforward linear model, which came to be known as the waterfall model, quickly gained popularity. The model makes sense in many ways; first, it is worth figuring out what you are doing, and only then should you proceed with the design. Once the plan is ready, the product can be manufactured and then tested to ensure that it works as intended, which is how things are done in many other areas of production.

The popularity of the waterfall model was partly due to the fact that the US Department of Defense (DoD), which was one of the world\'s largest software customers at the time, began to require all its subcontractors to comply with the process (Standard DoD STD 2167). Other software producers also thought that since the DoD required the waterfall model, it must be a good thing and worth adopting.

The waterfall model is strongly based on the idea that the different stages are carried out by separate production teams. A group of analysts works with the customer to determine the requirements for the application, and software architects receive the results of the requirements specification and design the program based on them. Programmers implement the application according to the architects\' plan and give it to testers for quality control. This seems like a natural division of labor, with each different stage being carried out by a group of people specializing in the working methods of that stage.

In order for information to flow between the different stages of software development, the results of each stage must be carefully documented. In particular, the requirements specification made with the customer must be carefully prepared and well documented, as all subsequent stages assume that the requirements have been comprehensively and accurately recorded.

The waterfall model is sometimes referred to as *Big Design Up Front*, or BDUF for short, to describe the fact that the entire software is defined and designed exhaustively before the programming phase begins. The term BDUF is usually used in a negative sense to describe the cumbersome nature of the waterfall model.

The software process based on the waterfall model is usually carefully planned, resourced, and scheduled in advance, which is why it is sometimes referred to as *a plan-based process*.

#### Problems with the waterfall model

Software production based on the waterfall model has not proven particularly successful.

The waterfall model assumes that the stages of software production occur sequentially and, at least in large projects, each stage is carried out by different people. This causes several problems.

The main problem is that no matter how carefully the requirements are specified, they are almost certain to change along the way. It has been found that when ordering software, customers do not know or cannot say what they want or need. This is because customer needs may change during the course of the project. The business environment may change, new legislation may be introduced, companies may merge, global economic conditions may change, a global pandemic may occur\... The longer the software development process, the more certain it is that requirements will change.

Time and again, we have seen that customers start wanting changes as soon as they see the finished result. Because software is an abstract product that may not have any previous models, it is very difficult for customers to think through all the functionality in advance to the extent that it can be completely finalized, as the waterfall model assumes.

There is also a risk that designers or programmers will misinterpret the documented customer requirements, or that the customer has not been fully understood at the time of recording the requirements, meaning that the requirements have been documented incorrectly from the outset. In fact, this is not even a risk, but rather a certainty that misunderstandings and misinterpretations will occur, no matter how accurate the documentation is.

Separating requirements specification, design, and implementation according to the waterfall model is practically unreasonable or even impossible. The chosen software architecture, i.e., the \"high-level structure,\" and the implementation technologies used have a major impact on the price of the defined features, so when defining them, it is also worth considering the design and implementation and the form in which the customer\'s requirements can be implemented with the most reasonable resources.

Separating design and implementation has not proven to be a viable idea. It is impossible to design software in such a way that implementation is a straightforward mechanical process; part of the design must necessarily take place during the programming phase.

Software production based on the waterfall model is therefore largely analogous to other engineering sciences: the artifact to be built must first be defined and designed (design) without gaps, after which construction is a trivial step.

> Traditionally, programming has been equated with the \"construction phase,\" which is considered trivial, and the challenge has been thought to lie in the definition and design. However, this comparison has begun to be criticized, as it has proven impossible to design software with such precision that the design can be converted directly into code.
>
> It has been \[argued\]\[http://www.bleading-edge.com/Publications/C++Journal/Cpjour2.htm\] that the trivial construction phase in the traditional engineering analogy is not programming in the software process, but rather the compilation of program code. Therefore, the program code is in fact the final plan for the software in the sense that engineering sciences understand design.

In waterfall model software development, testing is performed when the software is ready. However, quality control at the end of the process reveals problems far too late. Fixing bugs can be very expensive, as testing can reveal problems that force radical changes to the structure of the software or even its requirements.

If you want to read more about the problems with the waterfall model, check out Martin Fowler\'s article \[The New Methodology\]\[http://martinfowler.com/articles/newMethodology.html\].

#### Royce and the waterfall model

Paradoxically, Royce, who is considered the father of the waterfall model, *does not recommend* the use of a straightforward linear model in his article. Royce does present a linear waterfall model on page 2 of the article, but states that it *is not* suitable for complex software projects.

According to Royce, a prototype of the application should first be created, and only then should the final software be designed and implemented in light of the experience gained from the prototype. At the end of the article, Royce presents a model in which the software is created in two iterations, image from Royce\'s article

\![\]\[images/1-3.png\]

The waterfall model, or at least Royce\'s designation as the father of the waterfall model, is therefore a major misunderstanding. Fortunately, Royce\'s article is now easily available on the internet, and anyone can check for themselves what Royce has said about the waterfall model.

### Iterative and incremental software development

In response to the problems of the linear model, an *iterative* approach to software development began to gain popularity in the 1990s (e.g., the spiral model, the prototype model, and the Rational Unified Process).

In the iterative model, software production is divided into smaller time intervals, or *iterations*. Unlike software production based on the waterfall model, the iterative approach does not aim to produce a comprehensive specification and design at the outset.

During each iteration, part of the software is defined, designed, implemented, and tested, meaning that the software develops gradually. The program is completed piece by piece, which is why iterative methods are also said to be *incremental*.

The customer is consulted between each iteration, allowing them to see the current version of the program and influence the course of subsequent iterations. Due to the incremental growth of the software, it is possible to make the basic version available to end users even while development is still ongoing.

The following figure illustrates that in the iterative model, all stages of the software process are performed in each iteration. Specification and design are given greater weight at the beginning, but software implementation and testing begin during the first iterations.

\![\]\[images/1-4.png\]

Royce, the \"father\" of the waterfall model, recommended an iterative approach (two iterations) as a development model for complex software as early as 1970. The method proposed by Royce was not really incremental, as only a prototype was built during the first iteration, on the basis of which the actual application was defined, designed, and implemented.

A standard published by the US Department of Defense in 2000 (MIL-STD-498) began to recommend an iterative software process:

> There are two approaches, evolutionary (iterative) and single step (waterfall), to full capability. An evolutionary approach is preferred. \... In this approach, the ultimate capability delivered to the user is divided into two or more blocks, with increasing increments of capability\...software development shall follow an iterative spiral development process in which continually expanding software versions are based on learning from earlier development. It can also be done in phases

In fact, iterative software development is a much older idea than the waterfall model. For example, the software for NASA\'s Project Mercury, which took the first American into space, was developed iteratively in the late 1950s. The software for the space shuttles was developed during the heyday of the waterfall model in the late 1970s, but it was ultimately developed using an iterative process in 8-week iterations over a period of 31 months. For more on this topic, see Larman and Basil\'s excellent article \[incremental and iterative development, a brief history\]\[http://www.craiglarman.com/wiki/downloads/misc/history-of-iterative-larman-and-basili-ieee-computer.pdf\].

### Agile software development

The process models of the 1980s and 1990s emphasized careful project planning, formal quality control, detailed analysis and design methods, and a precise, tightly controlled software process. Process models particularly supported the development of large, long-lived software, but they often proved too rigid for the creation of small and medium-sized software.

Traditional process models (including iterative ones) have sought to minimize the importance of the individual doing the work. The idea has been that the individual is a \"factory worker\" who can easily be replaced by another, and this has no impact on the progress of the software process.

This conflict led to the emergence of a set of agile methods that emphasized the software itself and the importance of the software customer and implementers, rather than detailed planning and documentation.

### Agile Manifesto

In February 2001, 17 pioneers of agile methods gathered for a meeting that resulted in the \[Agile Manifesto\]\[http://agilemanifesto.org/\], a vision of what agile software development means.

The manifesto has been translated into many languages, including \[Finnish\]\[https://agilemanifesto.org/iso/fi/manifesto.html\], but let\'s look at the English version:

We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:

- *Individuals and interactions* over processes and tools
- *Working software* over comprehensive documentation
- *Customer collaboration* over contract negotiation
- *Responding to change* over following a plan

That is, while there is value in the items on the right, we value the items on the left more.

The manifesto consists of four contrasting points that express what agile methods consider to be the most essential aspects of software development. The first point states that different tools and processes may be important, but *even more important* are the software developers, users, customers, and the interaction between them. The second point does not deny the importance of documentation, but states that ultimately, what matters most is working software. The Agile Manifesto does not deny or devalue the things that the \"old world\" considers important, such as *following a plan*, but it shows that there are even more essential things, such as *responding to change*.

The group of authors of the manifesto \[https://agilemanifesto.org/authors.html\] consists of many familiar and influential names, such as Kent Beck, Robert Martin, Ken Schwaber, Martin Fowler, and Alistair Coburn, who have had a significant impact on the current approach to software development.

### Agile principles

In addition to the above, the manifesto contains 12 slightly more concrete agile principles that provide guidance for action. Let\'s go through the principles and also consider the ideas behind them.

Let\'s start with three principles.

> Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
>
> Deliver working software frequently, from a couple of weeks to a couple of months, with a preference for the shorter timescale.
>
> Working software is the primary measure of progress.

The most important thing of all and the measure of a project\'s progress is the delivery of functional, value-producing software to the customer. Unlike the waterfall model, the delivery of finished functionality begins at an early stage and is done repeatedly with fairly frequent iterations. The manifesto talks *about* a timeframe *of a couple of weeks to a couple of months*, but today the ideal is even more frequent delivery, with multiple versions of the application being released every day.

> Business people and developers must work together daily throughout the project.
>
> The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
>
> Welcome changing requirements, even late in development. Agile processes harness change for the customer\'s competitive advantage.

In the waterfall model, the fundamental principle was that software development begins with a comprehensive requirements specification, during which the customer\'s requirements are clarified, carefully documented, and \"frozen,\" meaning that no further changes to the requirements are allowed. The customer may not be involved in the development process again until the end, when they perform acceptance testing.

The principles of the Agile Manifesto are completely opposite. Customers and application developers are expected to work closely together, even on a daily basis, throughout the entire software development cycle. Instead of heavy documentation, communication is kept light, even through discussion. The approach to requirements specification has also been turned on its head. The customer is allowed to change their requirements during software development and is even encouraged to do so if they can gain an advantage by changing the requirements specification.

> Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
>
> The best architectures, requirements, and designs emerge from self-organizing teams.

Agile principles trust that when software developers are given a suitable working environment, they will do their best to deliver a valuable application to the customer without the need for external control. There is also no need for separate roles such as requirements analysts or software architects to take care of design; software teams work best when they are self-organizing, i.e., when they decide on their own working methods.

> At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

The principle mentioned earlier, *Welcome changing requirements*\..., describes how agility enables and even encourages changes in the direction of product development when new needs arise. Similarly, the development team is expected to review its own activities and continuously improve them.

> Simplicity -- the art of maximizing the amount of work not done -- is essential.

The waterfall model and other older development methods placed great emphasis on documentation and various \"process-driven\" reports, which took a lot of time and effort without contributing much to the completion of the product itself. The idea behind agile methods is to eliminate as much as possible everything that is not essential to the primary objectives (*Working software is the primary measure of progress*). Software developers also tend to build all kinds of extras into the software for future use, and this should also be viewed critically in the spirit of agility.

The last two principles are the ones that are most often forgotten:

> Continuous attention to technical excellence and good design enhances agility.
>
> Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.

Agility requires that the team be able to change the direction of application development when new needs arise. This, in turn, requires the team to maintain the quality of the software at a sufficient level, because if the internal structure of the application is poorly designed, it will be increasingly difficult to expand it with new functionalities, especially those that may not have been anticipated earlier. In other words, if sufficient attention is not paid to quality, agility is lost and application development becomes extremely slow.

Typically, software projects are approached with a deadline-driven mindset, meaning that as the deadline approaches, everyone goes into panic mode and works overtime to get a functional product out the door. After that, there is a breather, but soon the next important deadline is approaching, and as the years go by, the risk of burnout begins to increase. All of this often results in poor-quality code that becomes more difficult to modify with each passing day.

However, the manifesto reminds us that this kind of hamster wheel is not necessary and recommends that applications be developed at a pace that can be maintained indefinitely.

### Agile methods and Lean

Agile methods is an umbrella term for several different methods. In the early 2000s, Extreme Programming (http://www.extremeprogramming.org/), or XP, was the most popular of the agile methods. Nowadays, very few people apply \"textbook\" XP, but many of its practices have remained in use and been adopted into the toolkits of many software teams. We will explore many XP practices during the course.

XP has gradually been replaced by \[Scrum\]\[https://www.scrum.org/\], which is currently the most widely used software development method in the world. We will take a closer look at Scrum in the next chapter.

Agile software development has been heavily influenced by the lean thinking behind the Toyota production system. In recent years, the term lean has begun to appear more and more frequently alongside or instead of the term agile when discussing software development. Kanban, which originates from lean \[https://fi.wikipedia.org/wiki/Kanban\], has been widely applied to software development, often complementing an agile method such as Scrum. The combination of kanban and Scrum is known as \[Scrumban\]\[https://www.amazon.com/exec/obidos/ASIN/0321150783/poppendieckco-20\]. We will return to lean in more detail [in part 5](osa5.md#lean) of the course.

Agile methods were originally designed for managing individual, small software teams. Recently, several extensions to agile methods have been outlined, including \[SaFe\]\[https://www.scaledagileframework.com/\] and \[LeSS\]\[https://less.works/\], which make it possible to manage entities consisting of multiple software teams. In addition to agile principles, these larger-scale development methods rely heavily on the principles offered by lean. We will return to this topic [in the fifth part](osa5.md#laajan-skaalan-ketterä-ohjelmistokehitys) of the course.

## Scrum

Let\'s now take a look at the most widely used agile method, \[Scrum\]\[https://www.scrum.org/\]. First, let\'s examine a few fundamental assumptions underlying Scrum and other agile methods.

### Problems with the waterfall model

To recap the previous chapter, we can summarize the biggest problems with the waterfall model as follows:

- In most cases, it is impossible to define the software requirements exhaustively at the beginning of the project. The customer usually does not understand what they want at the beginning, and the business environment changes during the project.
- It is impossible to plan at a level where programming is a trivial and predictable construction phase, comparable to building a house, for example.
- Programming is part of the design process; the program code is the final design of the product. Design, on the other hand, is a technically challenging activity that involves risks.

The iterative process models developed in the 1990s remedy many of these shortcomings, but they are still strongly plan-based and assume that software production is *a process that can be controlled* to some extent.

The focus is therefore on a precise project plan (which can of course be iterative) and adherence to it, as well as a clear division of roles: project managers, analysts, architects, programmers, and testers each form teams related to their own areas of responsibility.

### Basic assumptions of agile methods

Most software projects are unique in nature. The requirements are different from any software that has been developed before. The developers often change, and each team has its own competencies and personalities. Implementation technologies are also constantly evolving, so new projects are likely to be carried out in ways that are unfamiliar to all software developers.

For these reasons, it makes sense to assume that agile methods are not a controlled process that can be planned in advance with precision. It is better to think of software development as a product development project that involves a great deal of uncertainty and unknowns. Instead of an approach based on a detailed plan, *an empirical process* is more suitable for managing such projects.

The underlying principles of an empirical process are transparency, inspection, and adaptation. It is essential that the entire team is as clear as possible about what is happening and what is being discussed, e.g., what is meant when something is said to be ready. There must therefore be a high degree of transparency regarding project-related matters, which in turn enables continuous inspection of the status of matters, i.e., whether the product development is going in the direction that is in line with the customer\'s current vision and whether the team\'s practices optimally support the development of the application. If and *when* room for improvement is identified, the product development direction or the team\'s operating principles are adapted.

Agile methods are based on the assumption that traditional command-and-control management and dividing people and teams into different areas of responsibility (designer, programmer, tester, frontend, backend) does not produce optimal results.

Instead, there is a strong assumption that people work best in self-organizing teams, where the team is given peace to work and is trusted to take responsibility for its own actions. A self-organizing team works as a collective, bearing joint responsibility for its actions, meaning that the team succeeds and fails together.

### Background of Scrum

Let\'s now take a look at Scrum, which is currently by far the most popular agile method/process model.

The term Scrum and some of the principles behind it were first introduced in an article published in 1986 \[The new new product development game\]\[https://web.archive.org/web/20210830051735/http://www.agilepractice.eu/wp-content/uploads/2016/09/Product-Development-Scrum-1986.pdf\], in which Japanese professors Takeuchi and Nonaka describe the common operating principles shared by a group of successful companies (including Fuji-Xerox, Canon, Honda, NEC, Epson, Brother, 3M, Xerox, and Hewlett-Packard).

The Scrum we know today, originally designed for software development, was developed by Ken Schwaber and Jeff Sutherland in the mid-1990s. The basic content of Scrum is defined in \[The Scrum Guide\]\[https://scrumguides.org/\], a document of just under 20 pages that is updated regularly. The previous version is from 2020.

In the words of its developers

> Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.

The developers of Scrum mention that it is a framework, i.e., *a methodological framework* that can be used to manage the development of complex products in such a way that the customer gets maximum value from the products. The developers of Scrum emphasize that it is not a process or technique that alone provides sufficient guidelines for work. It is a methodological framework that provides guidelines for development but also allows for and, in fact, requires other methods and techniques, each of which must be selected on a case-by-case basis.

The main goal of Scrum is to make the performance of the working methods used visible and thus enable continuous improvement of the product and the working environment. In other words, the aforementioned trio of *transparency,* inspection, and adaptation is at the heart of Scrum.

According to its developers, Scrum is

- *Lightweight*
- *Simple to understand*
- *Extremely difficult to master*

This is indeed the case, unlike some other software development models (such as the \[Rational Unified Process\]\[https://en.wikipedia.org/wiki/Rational_Unified_Process\] or \[SaFe\]\[https://www.scaledagileframework.com/\], which has gained popularity in recent years), Scrum contains only a few \"rules,\" which can be read in half an hour in the Scrum Guide. Everything seems clear and simple, but the reality is often different. To work effectively, Scrum requires in-depth knowledge and years of experience; simply following the rules mechanically is not enough.

### Scrum in brief

Scrum is an iterative and incremental method or, according to its developers, a framework in which software development takes place in 1-4 week iterations, called *sprints* in Scrum.

A *Scrum team* consisting of 3-9 developers is responsible for development. *The Scrum master* assists the team by guiding them in following and improving the process and acting as an interface with other stakeholders. The product owner manages *the* project *backlog*, which contains the requirements for the software to be implemented in the project in prioritized order.

At the beginning of each sprint, the team selects the requirements to be implemented during the sprint from the project backlog, i.e., the functionalities that are to be implemented during the sprint. During the sprint, the Scrum team implements the requirements selected for the sprint in a self-organized manner, resulting in functional software that meets the requirements.

\![\]\[images/2-1.png\]

### Scrum: roles, artifacts, and events

Let\'s go through the Scrum terminology in a little more detail before we get into the specifics.

Scrum defines three different *roles*: developer, Scrum master, and product owner. *The Finnish* translation for *product owner* is reasonably well established, but we will mainly use the English term in this course.

*The artifacts*, or \"concrete things,\" that belong to Scrum are the *product backlog*, the *sprint backlog*, and the part of the software that is currently being worked on, known as *the potentially releasable increment*.

In Scrum, work is organized *into sprints*, which are iterations lasting 1--4 weeks. Sprints include a few *standard meetings* (events): the sprint planning meeting, daily scrum meetings, the sprint review, and the retrospective.

### Product backlog

The product backlog (the official but rarely used translation of which is product task development queue) is a prioritized list of the customer\'s requirements for the product, i.e., desired features and functions. The backlog may also include, for example, larger bug fixes.

It is considered good practice that the requirements recorded in the backlog are meaningful and value-adding functionalities at the customer level. e.g., in an online store, the functionality could be *adding a purchase to the shopping cart*, or in a study management system, *a student could enroll in a course they have added to their HOPS*.

The requirements at the top of the backlog, i.e., those with the highest priority, are selected for implementation during the next sprint. For this reason, the requirements at the top of the backlog are usually recorded in more detail than those at the bottom.

Often, the aim is also to estimate the amount of work required to implement the requirements in the backlog. Work estimates are made by the development team.

Scrum does not specify the format in which the backlog and the requirements it contains are presented. In recent years, it has become common practice to present tasks *as* so-called *user stories*. We will familiarize ourselves with this technique \[in part 2\]\[part2/#user-story\].

### Product owner

According to Scrum, anyone can add new requirements to the backlog at any time. The backlog is prioritized solely by the product *owner*.

According to Scrum, the product owner is a single person. Of course, several people may influence the prioritization, but the product owner makes the final decisions regarding priorities.

The product owner is responsible for the backlog and thus the direction of development, i.e., what is being done to the application and in what order. The product owner\'s task is to prioritize the requirements in the product backlog so that the application\'s client/customer gets the maximum benefit from the product. In order for the product owner to do this, they must naturally communicate as extensively as possible with all stakeholders in the application.

The product owner is also responsible for ensuring that the development team understands the requirements selected for implementation.

### Scrum master

Each Scrum team has *a Scrum master*, i.e., a person who is responsible for ensuring that the rules and spirit of Scrum are followed in the development work. However, the Scrum master is not a traditional project manager, but rather a coach who supports the team. In some contexts, the Scrum master has been described as *a servant leader*.

The scrum master\'s tasks include guiding the team in following good practices and encouraging and helping the development team to self-organize and improve their working methods. The Scrum Master also takes care of practical matters, such as organizing Scrum-related meetings and coordinating communication with stakeholders.

Perhaps the most important role of the scrum master is to strive to eliminate obstacles to development work. These obstacles are often unrelated to the team, and the scrum master must negotiate with company management or other software suppliers to remove them. Such an obstacle may also be, for example, that the application development team does not have access to the production environment or even to similar server environments, or if the application being developed is dependent on interfaces that are the responsibility of other suppliers, and they are not completed on time or do not function as specified.

The \"obstacle\" may also be related to the team\'s working methods, in which case the Scrum master guides the team to change its practices so that the obstacle hindering productivity is removed.

The Scrum Master\'s role is also to ensure that the development team can work in peace and to protect the team from, for example, external companies interfering with sprint activities.

In some situations, the Scrum Master assists the Product Owner in maintaining the product backlog. This is particularly important if the Product Owner is inexperienced and does not yet know how to optimally formulate the user requirements for the application to be added to the backlog.

The scrum master therefore strives to do everything possible to ensure that the development team has the optimal conditions for developing an application that generates value for the customer.

### Development team

The development team consists of approximately 3-9 people, all of whom are referred to as developers. Although they all have the same title, some team members may specialize in a particular area, such as testing or backend programming. However, the entire team always shares responsibility for the development work.

Scrum teams must be *cross-functional*, meaning that the team should have all the necessary expertise for system design, implementation, testing, and even operation in a production environment.

The teams are autonomous, meaning that the development team is not managed from outside, but rather the team decides how many prioritized requirements from the product backlog it will commit to implementing in each sprint, i.e., how many requirements from the backlog will be selected for implementation in the sprint. The team also decides for itself, within certain constraints, how to achieve the sprint goal. The team is therefore self-organizing.

According to Scrum, the team should, by default, work in the same place, preferably in a shared open-plan office reserved for the team, and it is assumed that team members work in the team 100% of their working hours.

### Sprint

In Scrum, development work is divided into iterations, or sprints, lasting 1-4 weeks. The duration of a sprint is typically always the same in a project, with 2 weeks currently being the most popular sprint length. A sprint is \"time-boxed,\" meaning that under no circumstances will a sprint be extended.

At the beginning of each sprint, the team selects the requirements to be implemented during the sprint from the project backlog. The backlog is prioritized by the product owner, and the requirements are always selected from the top of the prioritized list. The product owner thus controls the order in which things are implemented. However, the team itself selects only as much to be implemented in the sprint as it believes it can commit to completing.

During the sprint, the Scrum team implements the software functionalities selected for the sprint in a self-organized manner.

The principle in Scrum is that at the end of each sprint, there must be *a working version* of the product (potentially shippable product increment), i.e., the aim during the sprint is to produce ready-to-use features, not just a pile of almost working code.

No new requirements are presented to the team during the sprint, and the Scrum Master is responsible for protecting the team if anyone outside the team tries to get the development team to do anything other than the agreed-upon requirements taken from the backlog during the sprint.

### Definition of done

One of the principles of the Agile Manifesto highlights software quality as a factor that promotes agility

> Continuous attention to technical excellence and good design enhances agility.

Scrum also places great emphasis on the quality of the software produced. The end result of each sprint should be \"potentially shippable,\" i.e., a finished, ready-to-use piece of software.

In order to reach a consensus on the quality level at which the software should be implemented, Scrum defines a \"*definition of done*\" at the project level, i.e., what it means for a requirement to be considered complete.

\"Finished\" is usually defined as meaning that the requirement has been analyzed, designed, programmed, tested, automated, documented, integrated with other software, and deployed to the production environment.

In other words, when the goal at the end of a sprint is to have a working program, this specifically means requirements that are functional and complete at the definition of done level. If some parts of the program are incomplete, the scrum master rejects them and moves them to the next sprint for implementation.

If, during the sprint, it becomes apparent that the team will not have time to implement everything it committed to, it is not acceptable to compromise on quality; instead, some of the requirements will be left for the next sprint.

Definition of done is one way in which Scrum strives *for transparency*, because in agile software development, the most important measure of progress is the finished software, so it is very important that everyone has the same understanding of what \"finished\" means. This is not at all self-evident if it is not precisely defined. It is quite common that when a software developer says that a feature is \"almost done\" after two days of programming, it ultimately takes a couple of weeks before the feature is completely ready in the sense that the application\'s customers can use the new feature.

### Sprint planning

Before each sprint, a *sprint planning* meeting is held.

Previously, Scrum specified that the meeting should be divided into two parts, but the 2017 Scrum guide simplified things, and now there are only two topics discussed in sprint planning.

The first topic is to determine *what* will be done during the sprint. The product owner presents the top requirements in the product backlog to the team. The team must understand the requirements to such an extent that they can at least roughly estimate how many resources would be needed to implement them, as the team must assess how many of the backlog requirements it will be able to implement during the sprint with the quality *defined in the definition of done*.

In addition to selecting the requirements to be implemented during the sprint, *a sprint goal* is set, which is a more generic expression of what is to be done in the upcoming sprint than the individual requirements.

The second topic of the planning meeting is to determine *how* the sprint goals will be achieved.

This usually means that the team plans the implementation of the selected requirements at the necessary level. The output of the second part of the planning meeting is often a list of tasks that need to be completed during the sprint in order to implement the requirements selected for the sprint. The tasks identified during the planning are recorded in the sprint backlog, i.e., the sprint task list.

Unlike the product backlog, which is written in \"customer language,\" the items in the sprint backlog are often expressed in the language of application developers and contain many technical details that are not yet of interest to the customer. The sprint backlog is primarily a tool for organizing the work of the scrum team\'s application developers.

The maximum duration of sprint planning is 8 hours if the sprints are 4 weeks long, and 4 hours otherwise.

We will return to sprint planning in more detail with concrete examples \[in part 2\]\[part2/#sprint-planning\].

### Daily scrum -- daily meeting

Each day during the sprint begins *with a daily scrum*, which is a meeting lasting no more than 15 minutes. The meeting is always held at the same time, in the same place, and all developers are expected to be present.

The purpose of the daily scrum is to maintain transparency about what is happening in the sprint. In a standard daily meeting, each member of the development team takes turns answering three questions

- What did I accomplish since the last meeting?
- What do I plan to accomplish before the next meeting?
- What obstacles are preventing me from moving forward?

Anyone can observe the daily scrum, but only team members have the right to speak. The meeting is intended to be short, and overly rambling discussions are not desirable. If anyone encounters problems or obstacles to progress, the scrum master will ensure that the issues are revisited with the person concerned after the daily scrum.

If other meetings are needed, e.g., for planning or specifying requirements, they should be held separately from the daily scrum. Scrum does not take a position on other meetings during the sprint.

Published on September 3, 2019 \[A Scrum book\]\[http://scrumbook.org/\], whose authors include Jeff Sutherland, one of the developers of Scrum, provides a slightly broader and more interesting description of the role of the \[Daily Scrum meeting\]\[http://scrumbook.org/\]:

> Have a short event every day to replan the Sprint, to optimize the chances first of meeting the Sprint Goal and second of completing all Sprint Backlog Items. Strictly time-box the meeting to keep focus on the daily plan and to avoid robbing time from development. Focus on the next day's work but keep the remainder of the Sprint in mind.

Instead of just a status meeting (what I did yesterday, what I\'m doing today, and what obstacles I\'m facing), the role of the daily meeting is also to reorient development work as necessary so that the sprint goals can still be achieved.

In other words, while the Scrum Guide gives the daily meeting a modest role emphasizing transparency, the new book sees the daily meeting as part of Scrum\'s inspect-and-adapt cycle, where the status of things is reviewed and, if necessary, redirected.

### Sprint review

At the end of the sprint, a sprint review is held. The review is an informal event during which the development team presents the sprint\'s achievements to all stakeholders interested in the product being developed.

The purpose of the review is to examine, demonstrate, and test the implemented, functioning software. Showing PowerPoint slides during the review is strictly prohibited.

The Scrum Master ensures that only those features that have been fully implemented, i.e., at the definition of done level, are demonstrated in the review. The aim is to provide as realistic a picture as possible of how the application development is progressing.

The product owner ensures (either during or before the review) that the requirements developed during the sprint have been implemented in an acceptable manner, i.e., that they function according to assumptions and expectations, in addition to being implemented at the quality level defined by the definition of done. Requirements that are not accepted as implemented are transferred back to the product backlog to be finalized during later sprints.

During the review, anyone can give feedback on the product and, for example, suggest new requirements to be added to the product backlog. The review often also necessitates a partial reprioritization of the product backlog.

The duration of the review is also limited (4 hours or 2 hours, depending on the duration of the sprint).

### Retrospective

One of the principles of the Agile Manifesto states

> At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

In Scrum, *the retrospective* held at the end of each sprint is an embodiment of this principle. Whereas other Scrum meetings are mainly intended to review the direction of the product, in the retrospective, the team, led by the Scrum Master, specifically reviews its own work process.

The aim is to identify what went well and where there is room for improvement. The meeting is used to consider solutions to some of the problems that need to be fixed during the next sprint.

Over time, \[numerous techniques\]\[https://retrospectivewiki.org\] have been developed for holding retrospectives. We will return to these in connection with the calculations.

### Scrum principles: transparency - inspection - adaptation

As mentioned earlier, Scrum is based on three principles: transparency, inspection, and adaptation. A retrospective is specifically a tool for observing and adapting the development process.

The tools for inspecting the product under development and adapting its direction are, first and foremost, a short development cycle in sprints, a product backlog that can be reprioritized if necessary, and regular meetings, from sprint planning and reviews to daily stand-ups.

Monitoring and adjustment are made possible by transparency, i.e., nothing is hidden; instead, the product\'s development direction, the definition of done, and the status of the current sprint are kept open and visible to everyone at all times, and matters are discussed at both the sprint and daily levels.

In other words, transparency enables continuous monitoring, which in turn makes it possible to adapt both operating methods and the product under development in the desired direction.

\![\]\[images/2-2.png\]

### Scrum values

The Scrum Guide also highlights a set of values as essential to creating the right mindset for effective application development.

> When the values of commitment, courage, focus, openness, and respect are embodied and lived by the Scrum Team, the Scrum pillars of transparency, inspection, and adaptation come to life and build trust for everyone.

The team must be *committed* to achieving a common goal and *focused* on doing the right things. It must also have *the courage* to make decisions and face even the most difficult issues, i.e., it must be open about both successes and problems, while *respecting* all members of the development team and software stakeholders at all times.

Published in fall 2019, \[A Scrum book\]\[https://pragprog.com/book/jcscrum/a-scrum-book\] states that values create *fertile soil*, which allows application development to flourish.

Scrum should therefore never be a slavish adherence to the instructions in the Scrum Guide. For Scrum to work, you need the right attitude and orientation to apply it. The inspect-and-adapt nature of Scrum even suggests that teams should, at some point, act contrary to some of Scrum\'s guidelines if the team\'s optimal functioning requires it.

## Problems with Scrum

Scrum has proven to be a better way to develop software than the waterfall model or other plan-driven models in many areas. However, Scrum is not a silver bullet, i.e., a universal recipe that would solve all application development problems, and as the use of Scrum becomes more widespread, the number of failed Scrum projects is also increasing.

One reason for the problems is said to be \[ScrumBut\]\[https://www.scrum.org/resources/what-scrumbut\]:

- We use Scrum, but having a Daily Scrum every day is too much overhead, so we only have one per week.
- We use Scrum, but Retrospectives are a waste of time, so we don\'t do them.
- We use Scrum, but we can't build a piece of functionality in two weeks, so our Sprints are 3 months long

ScrumBut refers to the fact that some aspects of Scrum are followed, but major compromises are made in relation to some essential parts, thereby compromising the principles of transparency, observation, and adaptation.

Distributed software production, the use of subcontractors, and massive projects continue to pose challenges for Scrum and other agile methods, even though attention has been paid to the issue in recent years. \[Uncle Bob Martin\'s critique of Scrum\]\[https://www.infoq.com/news/2010/02/scrum-failings\] highlights these and a few other key points:

- *No Technical Practices*: Scrum is a project management framework and doesn\'t make any technical recommendations.
- *Automated Testing*: without high quality automated tests it is difficult to work in short cycles and know that stories are really done.
- *30-day sprints are too long*
- *Certification in CSM*: The Certificate that a Scrum Master, a trained CSM, holds means that on many teams only that person plays the role.
- *Scrum Master sometimes turns into Project Manager*: Some Scrum Masters use Scrum as a form of micro management and control.
- *Scrum carries an anti-management undercurrent*: "Scrum over-emphasizes the role of the team as self-managing. Self-organizing and self-managing teams are a good thing. But there is a limit. Scrum does not describe this with enough balance."
- *Multiple Teams*: Scrum and generic Agile have little to say about how to scale.
- *Insufficient Guidance Regarding the Product Backlog*

Since Scrum does not take a position *on the technical principles* of software development, there is a high risk that insufficient attention will be paid to the internal quality of the application, which in turn may undermine agility. Development may progress quickly at first, but slow down over time as the technical debt of the application makes it increasingly difficult to expand. This risk is particularly high if the project does not have automated tests. Scrum does not take a position on application testing.

Martin considers the role of the Scrum Master to be problematic in many ways. First, he is bothered by the certification system, as Scrum Masters are trained in a couple of days and sometimes the person acting as Scrum Master is someone who previously held the title of project manager. Even though they have obtained the certificate, the only change in their working methods may be the new terminology.

Although Martin fears that Scrum masters are often just managers in disguise, he also finds it problematic that Scrum assumes that teams are completely self-organizing. Self-organization works in many contexts and with some teams, but it has its limits, especially if several Scrum teams are working on a product. Relying solely on self-organization can lead to problems.

Managing a complex product is complicated, but Scrum does not take a stance on organizing the product backlog and leaves developers to their own devices in this regard.

Uncle Bob\'s criticism dates back to 2010 but is still largely valid.

Scaled Agile Framework (SAFe), which has risen strongly in recent years, especially in Finland, actually offers many solutions to the problems raised by Martin. However, SAFe has also been heavily criticized, and even authoritative figures (such as Scrum developer Ken Schwaber) have questioned the agility of the method. We will take a brief look at SAFe \[in section 5\]\[osa5/#laajan-skaalan-ketter%C3%A4t-menetelm%C3%A4t\].

Scrum, like other agile development methods, originated largely among software developers. A fairly common problem reported when transitioning to agile development is that the rest of the organization remains completely unchanged. This often results in a development model known as \[waterscrumfall\]\[https://www.infoq.com/news/2011/12/water-scrum-fall-is-the-norm/\], where only the development of new program functionalities is done according to Scrum, while budgeting, requirements management, and production continue to follow the old controlled processes.

Let\'s conclude our preliminary introduction to Scrum with the words of the method\'s developers: \"*Scrum is easy to understand but extremely difficult to master*.\"