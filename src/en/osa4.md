

We have now covered the stages of the software life cycle: requirements specification and quality management. This section focuses on software design and implementation.

This section contains many code examples.

## Typos in the material

Make [a correction suggestion](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

## Software design

Software design is thought to be divided into two phases: architectural design and object or component design.

*Architectural design* involves outlining the structure of the program at a high level, i.e., considering the larger structural components that make up the program. How do the components communicate and what are the interfaces between them?

*In object or component design,* on the other hand, the implementation of individual components, classes, and methods is planned in more detail.

In addition to these technical aspects, there is also \[user interface and user experience design\]\[https://www.itewiki.fi/opas/kayttoliittymasuunnittelu-ux-user-experience-design-eli-kayttajakokemus/\], which unfortunately cannot be explored in depth in the course material. The department offers a few advanced courses on the subject, including \[Human computer interaction\]\[https://courses.helsinki.fi/fi/csm13401\].

The timing of software design depends on the production process used. In the waterfall model, design takes place after requirements specification, and programming only begins once the design is complete and documented. In agile methods, on the other hand, the necessary amount of design is done in each sprint, and there is usually no detailed design document.

The waterfall model design process is hardly used anywhere anymore, and at least requirements specification and architectural design overlap.

Precise and heavyweight design prior to programming, sometimes referred to as \[Big Design Up Front\]\[https://en.wikipedia.org/wiki/Big_Design_Up_Front\] or BDUF, is still used and is partly suitable for certain types of systems (well-known application areas, unchanging requirements).

## Software architecture

The concept of software architecture has been around for decades. The term became established in common use during the 2000s and has come to refer to employees with more experience than line programmers, such as software architects.

Most people in the field have some idea of what software architecture means. However, despite efforts, it has not been possible to define the term in a way that everyone agrees on.

The IEEE standard \[Recommended practices for Architectural descriptions of Software intensive systems\]\[https://ieeexplore.ieee.org/document/875998\] defines the concept as follows:

> Software architecture is the basic organization of a system, including the components of the system, the relationships between the components, the relationships between the components and the environment, and the principles that guide the design and evolution of the system.

Let\'s take a look at a couple of other definitions.

Philippe Krutchten \[https://www.semanticscholar.org/paper/The-Rational-Unified-Process-An-Introduction%2C-3rd-Kruchten/3239cd654d82aa775cf9382a4d2ad834a3ea1014\] defines architecture as follows

> An architecture is the *set of significant decisions about the organization of a software system*, the selection of structural elements and their interfaces by which the system is composed, together with their behavior as specified in the collaborations among those elements, the composition of these elements into progressively larger subsystems, and the *architectural style* that guides this organization - these elements and their interfaces, their collaborations, and their composition.

\[McGovern et al.\]\[http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.467.1174&rep=rep1&type=pdf\] say

> The software architecture of a system or a collection of systems consists of all the important design decisions about the software structures and the interactions between those structures that comprise the systems. *The design decisions support a desired set of qualities that the system should support to be successful*. The design decisions provide a conceptual basis for system development, support, and maintenance.

Although the definitions of architecture vary slightly, there are a number of common themes among them. According to each definition, architecture defines the structure of the software, i.e., its division into separate parts and the interfaces between those parts. In addition to structure, architecture also addresses behavior; it defines the responsibilities of the architectural components and the forms of communication between them.

Architecture focuses on the important or central principles of the system\'s structure. It does not describe the system in precise detail, but is *an abstraction* that focuses on the big picture.

In his article \[Who needs an architect\]\[https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf\], Martin Fowler states that *you might end up defining architecture as things that people perceive as hard to change*, i.e., architecture could be defined as those things in software that are difficult to change. The important structural principles of a system can also change over time, meaning that architecture \[is not immutable\]\[http://www.ibm.com/developerworks/rational/library/feb06/eeles/\], but radically changing it can be challenging.

Krutchten\'s definition expressed almost the same idea in slightly different terms: *a set of significant decisions about the organization of a software system*, i.e., architecture is formed through architectural decisions, a set of fundamental choices made regarding the structure and operation of the software.

### Factors affecting architecture

[In Part 2](osa2.md), we mentioned that system requirements fall into two categories: functional and non-functional requirements.

[The](osa2.md#ei-toiminnalliset-vaatimukset) non-functional [quality requirements](osa2.md#ei-toiminnalliset-vaatimukset) (ilities) set for the system have a major impact on the architecture. Quality requirements include, for example, usability, performance, scalability, fault tolerance, data timeliness, data security, maintainability, extensibility, testability, price, time-to-market, etc.

Some quality requirements are contradictory, so the architect must seek a compromise that satisfies all stakeholders. For example, time-to-market, i.e., how quickly the application can be delivered to end users, and low price are likely to conflict with almost all quality requirements.

The timeliness, scalability, and fault tolerance of data are also features that require compromises; it has even been mathematically proven that there are situations where all of these cannot be achieved (see \[CAP theorem\]\[http://en.wikipedia.org/wiki/CAP_theorem\]).

Implementation technologies, such as the application frameworks used in implementation and integration with existing systems, as well as the system\'s operating environment, e.g., medical and aviation regulations and required operating standards, also affect the architecture.

The most important role of architecture is to provide a framework for application development and maintenance that enables the application to continue to meet not only the functional requirements set by the customer but also the quality requirements set for the system.

Sometimes, the architecture originally chosen for the application no longer serves its purpose. This can happen, for example, if the quality requirements for the application change radically, e.g., if there is a need to scale the application to a significantly larger user base than the original architecture is capable of. Changing the architecture is difficult and expensive, but sometimes there is no other option.

### Architectural style

Software architecture is usually based on one or more architectural styles, which refer to proven methods of structuring certain types of applications.

There are \[a large number\]\[https://en.wikipedia.org/wiki/Architectural_pattern\] of architectural styles, for example:

- Layered architecture
- Model-view-controller
- Pipes and filters
- Client-server
- Publish-subscribe
- Event driven
- REST
- Microservice architecture
- Service-based architecture

In most cases, the structure of an application includes features of many architectural styles.

### Layered architecture

*The* most well-known and widely used architectural style is layered architecture, which aims to divide an application into conceptual layers, with each layer performing its own \"abstraction level\" tasks using only the services of the layer below it.

In layered architecture, the upper layers are closer to the user, with the top layer usually being the user interface (presentation layer in the figure) and the layer below it responsible for application logic (business layer in the figure). The lowest layers, on the other hand, focus on machine-related issues, such as data storage (persistence layer and database layer in the figure) or communication over the network.

\![\]\[images/4-1.png\]{:height="350px" }

In practice, each layer is a collection of related entities or components that form a logical whole in terms of functionality at their own level of abstraction.

Layer architecture has many advantages. Layering facilitates maintenance, because if changes are made to the service interface of a particular layer, i.e., the part visible to other layers, the changes only require maintenance measures in the layer directly above it. For example, changes to the user interface do not affect other layers, and changes to the layer responsible for data storage do not affect the user interface.

The independence of the application logic from the user interface facilitates the transfer of the program to new platforms, for example, to run in a mobile environment in addition to the web. The services of the lowest layers, such as the storage layer or at least parts of it, can possibly be reused in other applications.

From an application developer\'s point of view, layer architecture is a clear and well-understood model, but its application can lead to massive monolithic applications that are ultimately difficult to extend and whose scaling to support large numbers of concurrent users can become a problem.

### Todo application architecture

A concrete, albeit very simple, example of an application that follows layered architecture is the \[Software Engineering\]\[https://courses.helsinki.fi/fi/tkt20002\] reference application \[Todo application\]\[https://github.com/ohjelmistotekniikka-hy/python-todo-app\].

At the code level, the layered structure is visible in how the application code is divided into directories:

\![\]\[images/4-15.png\]{:height="390px" }

The packaging structure reflecting the architecture can be described using a UML \[packaging diagram\]\[https://ohjelmistotekniikka-hy.github.io/python/viikko3#pakkauskaavio\]:

\![\]\[images/4-16.png\]{:height="400px" }

The dependencies between the layers described as packages are marked with a dotted line. *The user* interface depends on the application logic *services*, which in turn depends on the storage layer *repositories*.

In practice, dependency means that the code in the upper layer calls a method in the code of the lower layer. In accordance with the spirit of layer architecture, dependencies only exist from top to bottom, i.e., the code in the application logic layer does not call the code in the user interface layer.

Both the application logic and the storage services use the package\'s entities objects. Although logically speaking, the package belongs to the upper \"business logic layer\" of the storage services, at the program code level, the lower storage layer is dependent on the package because it processes the code of the package classes.

### Describing architecture

Despite considerable effort, no commonly used notation has been developed for describing software architectures. UML is used to some extent, but it is not very popular or useful. The \[component diagram\]\[https://en.wikipedia.org/wiki/Component_diagram\] is better suited for describing the architectures of larger applications than the package diagram used in the previous example.

The component diagram differs from the package diagram mainly in terms of notation and highlights the interfaces provided and used by different components slightly better. For example, in the image below, the *web store* component, which is responsible for the application logic of the online store, provides interfaces for product search, shopping, and user management. The component itself is divided into three subcomponents, of which *authentication* provides an internal interface for the *shopping cart* component.

\![\]\[images/4-4.png\]{:height="450px" }

However, instead of UML, informal box/arrow diagrams are most often used to describe the architecture.

The following is an example of an architecture description drawn on a whiteboard by my own \[application development team\]\[https://toska.dev/\]:

\![\]\[images/arkkit3.png\]{:height="450px" }

Regardless of the method used to document the architecture, it is advisable to describe the architecture *from* several *different perspectives*, as different perspectives serve different needs. A high-level description can be used, for example, to structure discussions with different stakeholders during the requirements specification phase. More detailed descriptions, on the other hand, serve as guidelines for more detailed system design and early expansion during the maintenance phase.

It should be noted that an architectural description is not just a picture; for example, the responsibilities of components must be specified and the interfaces between them and the forms of communication must be defined. If this is not done, there is an increased risk that the architecture will not be followed.

A useful architectural description also justifies the architectural choices that have been made \[https://adr.github.io/\]. It is not uncommon for architectural design decisions made for software to be questioned a couple of years later, with no one remembering the carefully considered reasons behind the decisions.

### Microservice architecture

One of the drawbacks of layered architecture mentioned was that its application can lead to massive monolithic applications that are ultimately difficult to expand and can be problematic to scale for large numbers of users.

Microservices *architecture*, which has rapidly gained popularity in recent years, aims to address these challenges by composing an application from several (even hundreds) of small, autonomous services that communicate with each other over a network to implement the functionality of the system.

\![\]\[images/4-6.png\]{:height="300px" }

In a microservices-based application, the aim is to make individual services as *independent* and loosely connected as possible. For example, the services do not use a shared database or shared code. The services do not directly call each other\'s methods, but instead communicate via the network.

Microservices are intended to be relatively small and only take care of \"one thing.\" For example, in an online store, separate microservices could be:

- User management
- Product recommendations
- Product search functions
- Shopping cart functionality
- Payment functionality

When functionality is added to a system, it usually means implementing new services or simply expanding some existing services. This can make it easier to extend an application than in a layered architecture, where extension usually requires modifying the code in each layer.

An application that utilizes microservices may be easier to scale, as microservices that cause performance bottlenecks can be executed in parallel.

The use of microservices makes it possible to easily code an application in multiple languages or using multiple application frameworks, because unlike in monolithic projects, there is no requirement that all microservices be implemented using the same technology.

#### Communication between microservices

Microservices communicate with each other via the network. There are several different ways to communicate.

A simple option is to use the HTTP protocol for communication, which is the same mechanism that web browsers use to communicate with servers. In this case, microservices are said to provide a REST interface for communication. In Week 3\'s exercises, NHL statistics were retrieved from a REST interface that provides JSON-formatted data.

An alternative, much more flexible means of communication is the use of a message queue/bus.

Services do not send messages directly to each other, but instead use a network-based message queue service that handles the transmission of messages between different services.

\![\]\[images/4-6b.png\]{:height="400px" }

The principle of message queuing is that services publish messages to the message queuing service. Messages typically have a topic and *data content*, for example:

    {
      "topic": "new_user",
      "data": {
        "username": "Arto Hellas",
        "age": 31,
        "education": "PhD",
        "occupation": "Aalto University"
      }
    }

Services can subscribe to messages related to topics they are interested in from the message service. For example, the service responsible for user management will probably subscribe to messages with the subject *new_user*. The message delivery service forwards the messages it receives to all services that have subscribed to that subject.

All message delivery is therefore done through the message delivery service, meaning that services do not communicate directly with each other. This makes microservices very loosely coupled, and changes in one service do not affect anything else as long as the messages remain in their original form.

From the sender\'s point of view, message transmission is *asynchronous*, meaning that the service sends the message and immediately continues with its code regardless of whether the message has been forwarded to the subscribed services.

Architectures based on the transmission of asynchronous messages (often referred to *as events*) are also called event-driven architectures. Not all event-driven architectures are microservice architectures, however. For example, the user interface implemented with Python\'s Tkinter library communicates with the application using events.

#### Challenges of microservices

Despite its many advantages, the application of microservice architecture brings with it a whole host of new challenges. First, dividing an application into sensible microservices is challenging. Incorrect division of services can result in an application where each service has to communicate over the network with dozens of other services in the worst case, thus compromising the performance of the application.

Debugging and testing an application composed of multiple services is significantly more difficult than a monolithic one, especially if the microservices use message passing.

Operating software consisting of dozens or even hundreds of microservices, i.e., starting and running them on production servers, is challenging and requires extensive automation. The same applies to the application development environment and continuous integration. The successful application of microservices requires a strong DevOps culture.

Container technology, i.e., \[Docker\]\[https://www.docker.com/\] software, is widely used in connection with microservices. In simple terms, containers are lightweight virtual machines that can be run in large numbers on a single server. If a microservice is in its own container, it is practically the same as running the microservice on its own machine.

This is an important topic, but unfortunately we cannot cover it at all within the scope of this course. Fortunately, the Open University offers a suitable course on the subject: \[DevOps with Docker\]\[https://docker-hy.github.io/\].

## Architecture in agile methods

The main theme of agile methods is the rapid delivery of functional software that provides value to the customer. This is clearly stated in the principles of the agile manifesto:

*Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.*

*Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.*

Agile methods favor simplicity in design solutions:

*Simplicity, the art of maximizing the amount of work not done, is essential*

Architectural design and documentation, on the other hand, has traditionally been a rather lengthy phase preceding the start of programming, a kind of *Big Design Up Front*. Agile methods and \"architecture-driven\" software production are therefore somewhat contradictory.

In connection with agile methods, there is often talk of \[incremental design and architecture\]\[https://www.jamesshore.com/Agile-Book/incremental_design.html\].

The idea is that the architecture is considered and documented at a sufficient level at the beginning of the project. The \"final\" architecture of the software is formed iteration by iteration as new functionality is implemented in the software. For example, an application based on a layered architecture is not built \"layer by layer,\" but instead, each iteration adds a small piece of each layer, as much as is required to implement the functionality of that iteration.

A fairly typical approach is to start projects with a so-called \[zero sprint\]\[https://www.infoq.com/news/2008/09/sprint_zero/\], during which, among other things, the preliminary architecture and backlog are created.

Early articles on Scrum referred to a \"pre-game\" phase, during which various preparatory development tasks were carried out, such as sketching out a preliminary architecture. Since then, the whole concept has disappeared from Scrum, and one of Scrum\'s original developers, Ken Schwaber, even explicitly rejects and \[rejects\]\[https://web.archive.org/web/20120419073810/http://www.scrum.org/assessmentdiscussion/post/1317787\] the entire existence of the \"zero sprint.\"

### Walking skeleton

A common approach to incremental architecture is the use of *a walking skeleton*. \[Alistair Coburn\]\[http://alistair.cockburn.us/Walking+skeleton\] describes the concept as follows:

> A Walking Skeleton is a tiny implementation of the system that performs a small end-to-end function. It need not use the final architecture, but it should link together the main architectural components.
>
> The architecture and the functionality can then evolve in parallel.
>
> What constitutes a walking skeleton varies with the system being designed.
>
> For a layered architecture system, it is a working connection between all the layers.
>
> The walking skeleton is not complete or robust and it is missing the flesh of the application functionality. Incrementally, over time, the infrastructure will be completed and full functionality will be added.
>
> A walking skeleton is permanent code, built with production coding habits and regression tests, and is intended to grow with the system.

In other words, right at the start of the project, preferably in the first sprint, the aim is to implement *a walking skeleton* containing the framework of the planned architecture, which already includes the framework of all the basic components of the architecture and stub components corresponding to the layers, as well as the communication between them.

This skeleton is then gradually expanded as the project progresses and the functionality of the application grows.

The walking skeleton is not just disposable code; the application code is built around it, which means that when building the skeleton, it is advisable to program the production code with the required quality, i.e., in accordance with the project\'s definition of done.

### Advantages of incremental architecture

Traditionally, when using the waterfall model, for example, the software architect has been responsible for the architecture, and programmers have been obliged to follow the architecture defined for the application.

Agile methods do not favor a separate architect role; for example, Scrum uses the title \"developer\" for all team members. The ideal in agile methods is for the development team to create the architecture together, which is also one of the principles of the agile manifesto:

> The best architectures, requirements, and designs emerge from self-organizing teams.

According to the agile ideal, the software architecture, like the code, is *jointly owned by the team*. This has several advantages.

Developers are likely to be more committed to following an architecture created and owned by the team than one defined by an architect outside the team who is in an \"ivory tower.\"

The documentation of the architecture designed by the team can be light and informal, e.g., drawn on a whiteboard, as the team knows the spirit of the architecture and is able to follow it. If the architecture is designed by someone outside the team, communicating it to the team requires more extensive documentation.

In agile methods, it is assumed that the best possible architecture cannot be designed at the beginning of the project, when the requirements, operating environment, and implementation technologies are not yet known. It makes sense to change architectural solutions that have already been made if, over time, it becomes apparent that the choices made earlier do not support software development in the best possible way.

In other words, as with requirements specification, agile methods in architecture design also aim to avoid work that is done too early and is likely to prove unnecessary later on.

### Risks of incremental architecture

An incremental approach to architecture requires good internal code quality and a high degree of discipline from the development team.

Martin Fowler \[http://martinfowler.com/articles/designDead.html\] states the following

> Essentially, incremental design means that the design of the system grows as the system is implemented. Design is part of the programming processes and as the program evolves the design changes.
>
> In its common usage, incremental design is a disaster. The design ends up being the aggregation of a bunch of ad-hoc tactical decisions, each of which makes the code harder to alter.

According to Fowler\'s observations, the ideal of incremental architecture and design is rarely achieved. Most often, the carelessness of application developers, schedule pressures, and other factors This leads to the internal quality of the software deteriorating over time, and eventually the software becomes a shapeless pile of spaghetti code, or a \[big ball of mud\]\[http://www.laputan.org/mud/\], which becomes extremely challenging to maintain and further develop.

## Object and component design

The application architecture provides a framework that guides the detailed design and implementation of the application. This more detailed level of design is called object or component design, and its purpose is to specify the interfaces between architectural components and outline the more detailed class or module structure of the program.

In waterfall-style development, component design may be documented in great detail, for example using UML class and sequence diagrams. However, in agile software development in particular, detailed design usually only takes place during programming.

The primary goal in software design is to maximize [the internal quality of the code](osa3.md#yksikkötestaus), i.e., to keep the application structure easy to maintain and extend.

The following are important factors in terms of maintainability and extensibility

- The code must be clear and readable, and its naming must indicate as clearly as possible what the code does and highlight the \"design\" behind the code.
- It must be possible to change one place without causing side effects in parts of the code that the person making the change cannot anticipate.
- If an extension or bug fix needs to be made to the program, it must be easy to determine where in the code the change should be made.
- If \"one thing\" is changed in the program, all changes must be made in only one place in the code (method, class, or component).
- After changes and extensions, it must be easy to check that the change does not cause side effects elsewhere in the system.

According to \[https://www.amazon.com/Software-Development-Principles-Practices-Paperback/dp/B011DBKELY\], good code in terms of maintainability and extensibility has a set of consistent characteristics, or *quality attributes*, which include the following:

- Encapsulation
- High degree of cohesion
- Low dependency
- Non-repetitiveness
- Testability
- Clarity

Let\'s now take a look at these quality attributes, principles, and design solutions, which, when followed, make it possible to write code that is highly maintainable. Many of these good design principles have been named and documented as design patterns.

We have already seen a few design patterns during the course, at least the following: *dependency injection*, *singleton*, and *repository*. Most of the design patterns covered in this course have originated in object-oriented programming. Some design patterns are also relevant when using other paradigms, such as functional programming. Other paradigms also have their own design patterns, but we will not cover them in this course.

### Code quality attribute: encapsulation

In the basic programming course a few years ago, encapsulation was defined as follows

> The practice of programming the details of an object\'s implementation within a class definition---hidden from the object\'s user---is called encapsulation. The object\'s user does not need to know anything about the internal workings of the objects.

The definition is not exactly the same in the current course, but novice programmers still associate encapsulation with the following principle: *object variables should be defined as private and, if necessary, setters and getters should be created for them*. This principle was very prominent in Java programming, less so in Python, although it is also discussed in \[the current version of the advanced programming course\]\[https://ohjelmointi-21.mooc.fi/osa-9/3-kapselointi\].

However, this is a rather narrow view of encapsulation. In addition to the internal state of an object, the target of encapsulation can be, for example, the type of object used, the algorithm used, the way objects are created, the structure of the component used, etc.

Many design patterns involve the encapsulation of different levels of things, and we will soon see examples of this.

The pursuit of encapsulation is also evident at the software architecture level. For example, in a layered architecture, the upper layer only uses the interface provided by the layer below it, while everything else is encapsulated and hidden from view. Similarly, in microservice architectures, a single service encapsulates its functionality within its internal logic and only provides an interface that can be used via the network.

### Code quality attribute: cohesion

Cohesion refers to the extent to which the program code in a method, class, or component is focused on implementing a specific individual functionality. A high degree of cohesion is considered desirable.

Cohesion should therefore be sought at all levels of the program, in methods, classes, and components.

#### Cohesion at the method level

Let\'s look at an example of a method that retrieves data from a database. The method code looks like this:

    # SQL_SELECT_PARTS is a constant that contains an SQL query

    def populate(self):
        connection = sqlite3.connect(DATABASE_FILE_PATH)
        connection.row_factory = sqlite3.Row
        cursor = connection.cursor()
        cursor.execute(SQL_SELECT_PARTS)
        rows = cursor.fetchall()

        parts = []

        for row in rows:
            parts.append(Part(row["name"], row["brand"], row["retail_price"]))

        connection.close()

        return parts

This method does several things:

- Creates a connection to the database
- Performs a database query
- It goes through the query results and creates a Part object for each result row
- Closes the connection

The method also works at many different *levels of abstraction*. On the one hand, it deals with technical database-level issues such as opening database connections and performing queries, and on the other hand, it deals with meaningful Part-ios at the application logic level.

The method therefore has a very poor level of cohesion.

The method is easy *to refactor* by breaking it down into smaller parts, which are then coordinated by the original method.

    def populate(self):
        connection = self.get_database_connection()
        rows = self.get_rows(connection)
        parts = self.get_parts_by_rows(rows)
        connection.close()

        return parts

    def get_database_connection(self):
        connection = sqlite3.connect(DATABASE_FILE_PATH)
        connection.row_factory = sqlite3.Row

        return connection

    def get_rows(self, connection):
        cursor = connection.cursor()
        cursor.execute(SQL_SELECT_PARTS)

        return cursor.fetchall()

    def get_parts_by_rows(self, rows):
        parts = []

        for row in rows:
            parts.append(Part(row["name"], row["brand"], row["retail_price"]))

        return parts

Individual methods now all operate at the same level of abstraction and are descriptively named.

#### Cohesion at the class level

The aim of cohesion at the class level is for a class to be *responsible for* only one thing, also known as the \[single responsibility\]\[https://en.wikipedia.org/wiki/Single_responsibility_principle\] principle (SRP). Robert Martin defines that a class has a single responsibility *if it has only one reason to change*.

The first exercises in the course looked at a simple calculator:

    class Calculator:
        def __init__(self):
            self.read = input
            self.write = print

        def execute(self):
            while True:
                number1 = int(self.read("Number 1:"))

                if number1 == -9999:
                    return

                number2 = int(self.read("Number 2:"))

                if number2 == -9999:
                    return

                answer = self.calculate_sum(number1, number2)

                self.write(f"Sum: {answer}")

        def calculate_sum(self, number1, number2):
            return number1 + number2

The class violates the single responsibility principle. Why? The principle states that a class should have only one responsibility, i.e., one reason to change. However, the class now has several reasons to change:

- New calculations are to be implemented for the class
- Communication with the user is desired to be handled in some way other than through the console

By separating communication with the user into its own class and isolating it behind an interface, i.e., *encapsulating the implementation of communication*, we can reduce the responsibilities of the Calculator class:

    class Calculator:
        def __init__(self, io):
            self.io = io

        def execute(self):
            while True:
                number1 = int(self.io.read("Number 1:"))

                if number1 == -9999:
                    return

                number2 = int(self.io.read("Number 2:"))

                if number2 == -9999:
                    return

                answer = self.calculate_sum(number1, number2)

                self.io.write(f"Sum: {answer}")

        def calculate_sum(self, number1, number2):
            return number1 + number2

Now, changing the communication method does not require any changes to the class, provided that the new communication method implements the interface through which the Calculator class handles communication.

Even though the `Calculator `class still does the same things from the user\'s point of view as before, it does not handle everything itself but *delegates* some of its responsibilities elsewhere.

The communication interface can be implemented as follows, for example:

    class ConsoleIO:
        def read(self, text):
            return input(text)

        def write(self, text):
            print(text)

The calculator is configured by injecting an object that implements the read and write methods. Injection is performed via the constructor parameter:

    def main():
        io = ConsoleIO()
        calculator = Calculator(io)

        calculator.execute()

For testing purposes, *a stub*, or dummy component, can be implemented to allow the test to control the \"user\" inputs and read the program outputs:

    class StubIO:
        def __init__(self, inputs):
            self.inputs = inputs
            self.outputs = []

        def read(self, text):
            return self.inputs.pop(0)

        def write(self, text):
            self.outputs.append(text)

The structure of the improved calculator as a class diagram:

\![\]\[https://github.com/mluukkai/ohjelmistotuotanto2017/raw/master/images/os-1.png\]

The class is not yet optimal in terms of extensibility. We will return to this in a moment.

#### Cohesion at the component level

Cohesion and the *single responsibility* principle are not just concepts related to object-oriented programming, but universal principles of good code. If we consider the React library used in the \[Full stack web application development\]\[https://fullstackopen.com/\] course, the principle is to compile the user interface from small components, each of which focuses on one thing, such as rendering the HTML code of a single button. The state of the web application, on the other hand, is encapsulated in the Redux store, whose sole responsibility is to take care of the state and its changes.

The principle of cohesion is also visible at the application architecture level. In a layered architecture, each layer of the application focuses on its own level of abstraction, e.g., the application logic does not take a position on the user interface or how data is stored. In microservice architectures, cohesion is reflected in a slightly different way: a single microservice focuses on implementing a single business-level functionality, such as an online store recommendation algorithm or invoicing.

### Minimal dependencies

A program created in the spirit of the single responsibility principle consists of a large number of objects/components with a large number of small methods.

The objects must interact with each other in order to implement the program\'s functionality. The principle of low coupling aims to eliminate dependencies between classes and objects.

Since there are many objects based on the principle of high cohesion, dependencies are inevitable. So how can dependencies be eliminated? The idea is to eliminate unnecessary dependencies *and* avoid dependencies on concrete things.

Dependencies should be directed at things that do not change easily, i.e., either an interface or an abstract class. The same idea goes by a couple of different names:

- Program to an interface, not to an implementation
- Depend on abstractions, not on concrete implementation

Unlike Java and many other statically typed languages, Python does not have a clear concept of an interface or abstract class. The same thinking can also be extended to Python, assuming that an interface only refers to information about what kinds of methods the class used as a dependency has.

Concrete dependencies can be eliminated by giving the object implementations of dependencies, for example through a constructor or method call. We have done this often in the course, for example. The concrete dependencies of the online store on the Warehouse, Bank, and Reference Generator were replaced with objects provided through the class constructor. The dependency injection design pattern often served as a tool for eliminating concrete dependencies.

Some of the dependencies between classes are unnecessary and should be eliminated by changing the responsibilities of the class.

#### Favour composition over inheritance, i.e. when it is not worth inheriting [week 5](#viikko-5)

Inheritance creates a dependency between the inheriting and inherited classes, which can be problematic in some cases. One of the cornerstones of object-oriented design is the principle \[Favour composition over inheritance\]\[https://en.wikipedia.org/wiki/Composition_over_inheritance\], i.e., favor objects that work together instead of inheritance.

Let\'s look at an example that illustrates the situation.

We have a class that models a bank account:

    class Account:
        def __init__(self, account number, owner, interest rate):
            self.account_number = account_number
            self.owner = owner
            self.interest_rate = interest_rate
            self.balance = 0

        def transfer_money_from_account(self, account, amount):
            if self.balance < amount:
                return False

            self.balance = self.balance - amount
            account.balance = account.balance + amount

            return True

        def pay_interest(self):
            self.balance = self.balance * (1 + self.interest_rate)

The customer\'s requirements change and there is a need for an account with an interest rate based on either the 1, 3, 6, or 12-month Euribor rate. We decide to create a new class `EuriborAccount `by inheriting the class `Account `and overwriting the method `payInterest `so that the current value of the Euribor rate is retrieved from the network:

    class EuriborAccount(Account):
        def __init__(self, account number, owner, month):
            super().__init__(account_number, owner, 0)
            self.month = month

        def get_interest(self):
            data = urllib.request.urlopen(
                "https://www.euribor-rates.eu/en/current-euribor-rates/"
            ).read()

            row_pattern = re.compile(r"Euribor " + str(self.month) + " months[^%]+%")
            row_match = row_pattern.search(str(data))

            if row_match is None:
                return 0

            column_pattern = re.compile(r"\-?([0-9]|\.)+ %")
            column_match = column_pattern.search(row_match.group(0))

            if column_match is None:
                return 0

            return float(column_match.group(0).replace("%", "").strip())

        def pay_interest(self):
            self.balance = self.balance * (1 + self.get_interest())

We note that the EuriborTili class violates the *single responsibility* principle, as the class contains code that retrieves goods from the internet in addition to normal account-related operations. It is advisable to clarify responsibilities and separate interest rate retrieval into a separate class behind its own interface:

    class EuriborReader:
        def __init__(self, month):
            self.month = month

        def get_interest_rate():
            data = urllib.request.urlopen(
                "https://www.euribor-rates.eu/en/current-euribor-rates/"
            ).read()

            row_pattern = re.compile(r"Euribor " + str(self.month) + " months[^%]+%")
            row_match = row_pattern.search(str(data))

            if row_match is None:
                return 0

            column_pattern = re.compile(r"\-?([0-9]|\.)+ %")
            column_match = column_pattern.search(row_match.group(0))

            if column_match is None:
                return 0

            return float(column_match.group(0).replace("%", "").strip())

    class EuriborAccount(Account):
        def __init__(self, account_number, owner, month):
            super().__init__(account_number, owner, 0)
            self.euribor = EuriborReader(month)

        def pay_interest(self):
            self.balance = self.balance * (1 + self.euribor.get_interest_rate())

The EuriborAccount class is now looking pretty good, but the EuriborReader class could use a lot of improvement. For example, *the cohesion* of its only method is poor: the method does far too many things.

Next, we notice that there is a need *for a fixed-term account*, which is otherwise similar to `Account`, but money cannot be transferred from a fixed-term account to another account until a certain period of time has elapsed. We inherit the `Account `class again:

    class FixedTermAccount(Account):
        def __init__(self, accountNumber, owner, interestRate):
            super().__init__(account_number, owner, interest_rate)
            self.withdrawal_prohibition = True

        def allow_withdrawal():
            self.withdrawal_restriction = False

        def transfer_money_from_account(self, account, amount):
            if withdrawal_restriction:
                return False

            return super().transfer_money_from_account(account, amount)

At this stage, the structure of the program looks like this:

\![\]\[images/4-8.png\]{:height="120px" }

Next comes the idea *of fixed-term accounts using the Euribor interest rate*. How should we proceed now? Some of the functionality is in *the FixedTermAccount class* and some in the EuriborAccount class\...

Handling interest payments through inheritance was not the best solution after all; it is better to follow the principle of *favor composition over inheritance*. In other words, we separate *interest payments* into their own classes that implement the `get_interest `method:

    class FixedInterestRate:
        def __init__(self, interestRate):
            self.interest = interest

        def get_interest():
            return self.interest

    class EuriborInterestRate:
        def __init__(self, month):
            self.reader = EuriborReader(month)

        def get_interest_rate(self):
            return self.reader.get_interest_rate()

There is no longer a need for a separate EuriborAccount class, and a slightly modified version of `Account `is sufficient:

    class Account:
        def __init__(self, account number, owner, interest rate):
            self.account_number = account_number
            self.owner = owner
            self.interest = interest
            self.balance = 0

        def transfer_money_from_account(self, account, amount):
            if self.balance < amount:
                return False

            self.balance = self.balance - amount
            account.balance = account.balance + amount

            return True

        def pay_interest(self):
            self.balance = self.balance * (1 + self.interest.get_interest())

Different accounts are created as follows:

    normal = Account("1234-1234", "Jami Kousa", FixedInterestRate(0.04))
    euribor12 = Account("4422-3355", "Lea Kutvonen", EuriborInterestRate(12))

The structure of the program is now as follows:

\![\]\[images/4-9.png\]{:height="120px" }

Let\'s modify the `Account `class so that accounts can be created without a constructor:

    class Account:
        def __init__(self, account number, owner, interest rate):
            self.account_number = account_number
            self.owner = owner
            self.interest = interest
            self.balance = 0

        @staticmethod
        def create_euribor_account(account_number, owner, months):
            return Account(account_number, owner, EuriborInterest(months))

        @staticmethod
        def create_fixed_term_account(account_number, owner, interest_rate):
            return FixedTermAccount(account_number, owner, FixedInterestRate(interest_rate))

        @staticmethod
        def create_current_account(account_number, owner, interest_rate):
            return Account(account_number, owner, FixedInterestRate(interest_rate))

        def change_interest(self, interest):
            self.interest = interest

        # ...

We added three *static helper methods* to the class to make it easier to create accounts. Accounts can now be created as follows:

    fixed_term = Account.create_fixed_term_account("1234-1234", "Jami Kousa", 0.025)
    euribor12 = Account.create_euribor_account("4422-3355", "Lea Kutvonen", 12)
    fyrkka = Account.create_euribor_account("7895-4571", "Indre Zliobaite", 1)

#### Design pattern: static factory method [week 5](#viikko-5)

The principle we use for creating objects with static methods is a well-known design pattern called *static* factory method.

The static factory method used in the account example is the simplest of the many variants of the factory design pattern. The principle behind the design pattern is that a static factory method or methods are created for the class, which use the constructor and create instances of the class.

The factory method can be used to hide details related to the creation of an object. In the example, the creation and even the existence of interest objects was hidden from the account user using the factory method.

The factory method can also be used to hide the actual class of the created object from the user, as was done in the example with the fixed-term account.

The factory method thus helps *with encapsulation*, hiding the details related to the creation of the object and even the true nature of the object from the user. This, in turn, enables extremely flexible extensibility.

The static factory method is not a particularly good solution for testing. In our example, it would be difficult to create an account that is given a mock object instead of an interest object. However, this is now possible because the constructor is not completely hidden.

For more information on the factory design pattern, see \[here\]\[https://sourcemaking.com/design_patterns/factory_method\] and \[here\]\[http://www.oodesign.com/factory-method-pattern.html\].

Factory methods allow us to encapsulate the actual type of the class. Jami\'s account is a fixed-term account, but it is requested from the factory located in the Account class, and the actual type of the object is intentionally hidden from the user. This means that the user of a fixed-term account no longer has a concrete dependency on the `MaaraaikaisTili `class.

We also created a method that can be used to change the account interest rate. Jami\'s fixed-rate fixed-term account can easily be changed on the fly to a three-month Euribor account:

    fixedterm.change_interest(EuriborInterest(3))

In other words, by abandoning collection, the object structure becomes much clearer and performance flexibility (interest rate calculation method) is achieved, which is not possible when using collection.

#### Planning model: strategy [week 5](#viikko-5)

The technique used to manage interest payments is also a planning model, called a strategy.

Strategy can be used to handle situations where different objects behave in the same way, but a different \"algorithm\" is used at certain points. In our example, this algorithm was the definition of the interest rate. The same situation can often be handled using inheritance without using separate entities, but strategy enables a much more dynamic solution, as it is possible to change the strategy entity during runtime. The use of strategy is a great example of the \"favor composition over inheritance\" principle.

For more information on the strategy design model, see \[here\]\[http://www.oodesign.com/strategy-pattern.html\] and \[here\]\[https://sourcemaking.com/design_patterns/strategy\].

#### Separation of responsibilities: creating an account at the bank, [week 5](#viikko-5)

We just created static helper methods for creating accounts for `the Account class`. However, it might make more sense to transfer the responsibility for creating accounts to a separate class, `Bank`. Bank can also easily manage the generation of account numbers:

    class Bank:
        def __init__(self):
            self.number = 0

        def generate_account_number(self):
            self.number = self.number + 1
            return f"12345-{self.number}"

        def current_account(self, owner, interest_rate):
            return Account(self.generate_account_number(), owner, FixedInterest(interest))

        def fixed_term_account(self, owner, interest_rate):
            return FixedTermAccount(self.generate_account_number(), owner, FixedInterest(interest))

        def euribor_account(self, owner, month):
            return Account(self.generate_account_number(), owner, EuriborInterestRate(month))

        def fixed_term_euribor_account(self, owner, month):
            return FixedTermAccount(self.generate_account_number(), owner, EuriborInterestRate(month))

Accounts are created with the help of the bank as follows:

    spankki = Bank()

    euriborAccount = bank.euriborAccount("Lea Kutvonen", 6)
    fixed_term_account = bank.fixed_term_account("Arto Hellas", 0.15)

This means that the account creator no longer needs to worry about generating account numbers.

Each factory method has been converted from a static method of its own class to an object method placed in another class.

The responsibilities of the classes have been clarified: `Account `is responsible for matters related to a single account, such as the balance. Account also knows the object that manages the interest related to the account. `Bank`, on the other hand, manages all of its accounts and is also used to generate account numbers when accounts are created.

### Functionality encapsulation: calculator and strategy [week 5](#viikko-5)

We have expanded the Calculator class to also handle other calculation operations:

    class Calculator:
        def __init__(self, io):
            self.io = io

        def execute(self):
            while True:
                command = self.io.read("Command:")

                if command == "exit":
                    return

                number1 = int(self.io.read("Number 1:"))
                number2 = int(self.io.read("Number 2:"))

                answer = 0

                if command == "sum":
                    answer = self.calculate_sum(number1, number2)
                elif command == "product":
                    answer = self.calculate_product(number1, number2)
                elif command == "difference":
                    answer = self.calculate_difference()

                self.io.write(f"Result: {answer}")

        def calculate_sum(self, number1, number2):
            return number1 + number2

        def calculate_product(self, number1, number2):
            return number1 * number2

        def calculate_difference(self, number1, number2):
            return number1 - number2

The solution is not entirely satisfactory. What if we want other operations besides addition, subtraction, and multiplication? The if-clutter will grow.

We decide to switch to *a strategy planning model*, i.e., we will handle the calculation operation in its own class. We implement the class `OperationFactory`, which has a static factory method `create`:

    class OperationFactory:
        @staticmethod
        def create(operation):
            if operation == "sum":
                return Sum()
            elif operation == "product":
                return Product()

            return Difference()

`The` static `factory method `can be used to create objects corresponding to arithmetic operations. Classes corresponding to arithmetic operations must implement the `calculate `method with two parameters. Classes corresponding to arithmetic operations are defined as follows:

    class Sum:
        def calculate(self, number1, number2):
            return number1 + number2

    class Product:
        def calculate(self, number1, number2):
            return number1 * number2

    class Difference:
        def calculate(self, number1, number2):
            return number1 - number2

`The Calculator `class is greatly simplified:

    class Calculator:
        def __init__(self, io):
            self.io = io

        def execute(self):
            while True:
                command = self.io.read("Command:")

                if command == "exit":
                    return

                number1 = int(self.io.read("Number 1:"))
                number2 = int(self.io.read("Number 2:"))

                operation = OperationFactory.create(command)

                self.io.write(f"Result: {operation.calculate(number1, number2)}")

The great thing about the calculator is that we can now add operations and classes without having to change `the Calculator class `in any way. The only change required in the existing code is `to` the `OperationFactory `class method `create`.

The structure of the application looks like this:

\![\]\[images/4-10.png\]{:height="250px" }

#### Calculator and command object [week 5](#viikko-5)

What if we want the calculator to have other types of operations besides those that take two parameters, such as square root? Let\'s change the essence of `the OperationFactory `class so that it also takes care of communication with the user.

With this change, we move on to using the command design pattern, which is closely related to the Strategy design pattern. The classes that implement the command are extremely simple. They are given an IO object through the constructor, and they implement the `execute `method. The command can only be executed and does not even return anything!

The creation of separate command objects is transferred to a new class, `CommandFactory`:

    class CommandFactory:
        def __init__(self, io):
            self.io = io

        def get(self, command):
            if command == "sum":
                return sum(self.io)
            elif command == "income":
                return Income(self.io)
            elif command == "square":
                return Square(self.io)
            elif command == "stop":
                return Stop(self.io)

            return Unknown(self.io)

The command factory returns the command corresponding to the string parameter of the search method. Since the responsibility for communicating with the user has been transferred to the Command objects, they are given the IO object as a parameter to the constructor.

The if-clutter looks a bit ugly. However, it can be easily eliminated by storing separate commands in a dictionary:

    class CommandFactory:
        def __init__(self, io):
            self.io = io

            self.commands = {
                "sum": Sum(self.io),
                "income": Income(self.io),
                "square": Square(self.io),
                "stop": Stop(self.io)
            }

        def get(self, command):
            if command in self.commands:
                return self.commands[command]

            return Unknown(self.io)

Individual commands are very simple:

    class Sum:
        def __init__(self, io):
            self.io = io

        def execute(self):
            number1 = int(self.io.read("Number 1:"))
            number2 = int(self.io.read("Number 2:"))

            self.io.write(f"Answer: {number1 + number2}")

    class Nelio:
        def __init__(self, io):
            self.io = io

        def execute(self):
            number = int(self.io.read("Number 1:"))

            self.io.write(f"Answer: {number * number}")

    class Unknown:
        def __init__(self, io):
            self.io = io

        def execute(self):
            self.io.write("Allowed commands: sum, product, square, quit")

    class Stop:
        def __init__(self, io):
            self.io = io

        def execute(self):
            self.io.write("Thank you and goodbye!")
            sys.exit(0)

`The Calculator `class is further simplified; it does little else than create a command factory and contain an infinite loop, within which commands corresponding to user input are executed:

    class Calculator:
        def __init__(self, io):
            self.io = io
            self.commands = CommandFactory(io)

        def execute(self):
            while True:
                command = self.io.read("Command:")
                self.commands.fetch(command).execute()

Program structure at this stage:

\![\]\[images/4-11.png\]{:height="250px" }

#### Design pattern: command [week 5](#viikko-5)

We isolated the functionality related to each separate calculation operation into its own object, following the idea of the command design pattern, i.e., so that all operations implement a simple interface with only the `execute `method.

In the previous version of the program, we applied the strategy design pattern, where separate calculation operations were implemented as separate objects. The command design pattern differs in that we have now encapsulated the entire command execution, including communication with the user, into separate objects. The interface of command objects is simple; they have only one method, `execute`. In the strategy design pattern, on the other hand, the interface of strategy objects varies depending on the situation.

In the example, the commands were created using an object that provides a factory method, and the if statements were hidden inside the factory. The execute method of the command objects was executed immediately in the example, but this is not necessarily the case; commands could be queued and executed later, for example.

For more information on the command design pattern, see \[here\]\[http://www.oodesign.com/command-pattern.html\] and \[here\]\[http://sourcemaking.com/design_patterns/command\].

#### Separating shared code into a superclass [week 5](#viikko-5)

Since commands that ask the user for two parameters, such as sum, product, and difference, have a lot in common, a superclass is created for them:

    class BinaryOperation:
        def __init__(self, io):
            self.io = io
            self.number1 = 0
            self.number2 = 0

        def execute(self):
            self.number1 = int(self.io.read("Number 1:"))
            self.number2 = int(self.io.read("Number 2:"))

            self.io.write(f"Answer: {self.calculate()}")

        def calculate(self):
            return 0

The commands corresponding to sum and product are simplified:

    class Sum(BinaryOperation):
        def __init__(self, io):
            super().__init__(io)

        def calculate(self):
            return self.number1 + self.number2

    class Input(BinaryOperation):
        def __init__(self, io):
            super().__init__(io)

        def calculate(self):
            return self.number1 * self.number2

If you want to implement more two-parameter operations in the application, such as subtraction, a very simple addition would suffice:

    class Subtraction(BinaryOperation):
        def __init__(self, io):
            super().__init__(io)

        def calculate(self):
            return self.number1 - self.number2

Best of all, the only other class that needs to be touched is the CommandFactory class that creates commands.

This makes the program quite flexible in terms of extensibility. New operations are easy to add, and adding them does not require changes to many parts of the code. The Calculator class has no dependencies other than the CommandFactory class and the ConsoleIO class injected through the constructor.

\![\]\[images/4-12.png\]{:height="300px" }

The price of flexibility is an increase in the number of classes. At a quick glance, it may be difficult to see how the program works, especially if you are not used to this style, because in addition to the factory and command design patterns, *the template method* design pattern (for implementing a two-parameter command) is also hidden.

#### Design pattern: template method [week 5](#viikko-5)

The template method design pattern is suitable for situations where the execution of two or more operations is very similar and differs only in one or a few steps related to the operation.

The execution of the Sum and Product commands is essentially the same:

1.  Read number1 from user
2.  Read number2 from the user
3.  *Calculate the result of the operation*
4.  Print the result of the operation

Only the third step, *calculating the result of the operation,* differs when determining the sum and product.

In the spirit of the template method, this is handled by creating a superclass whose method implements the entire command execution logic:

    class BinaryOperation:
        # ...

        def execute(self):
            self.number1 = int(self.io.read("Number 1:"))
            self.number2 = int(self.io.read("Number 2:"))

            self.io.write(f"Answer: {self.calculate()}")

        def calculate(self):
            return 0

The variable part of the execution logic, i.e., the result of the calculation, is defined as the method `calculate`, which is called by the method `execute`.

Concrete implementations `Sum `and `Product `override the `calculate `method by defining how the calculation is performed in a specific concrete situation:

    class Sum(BinaryOperation):
        # ...

        def calculate(self):
            return self.number1 + self.number2

The class method `execute `is *a template method* that defines the execution in such a way that the differing parts of the execution are defined as superclass methods that are overridden by the subclasses. The template method can thus be used to define a \"generic algorithm framework\" that can be specialized in the subclasses as appropriate.

There can be more than one differing part in template methods, in which case the necessary number of methods is defined.

The strategy design pattern is partly related to the template method, in that the entire algorithm or part of the algorithm is replaced by an implementation in a separate class. Strategies can be changed during execution, whereas in the template method, a specific object functions in the same way throughout its lifetime.

More about the template method design pattern \[here\]\[http://www.oodesign.com/template-method-pattern.html\].

### Code quality attribute: uniqueness

We have discussed *encapsulation, cohesion*, and *minimal dependencies* as code quality attributes. Next up is redundancy, or repetition.

Novice programmers are warned about the dangers of repetition from the very beginning of their careers. Surely everyone has heard the warning: *don\'t copy and paste code*!

In programming circles, the principle of avoiding repetition is known as \[don\'t repeat yourself\]\[http://c2.com/cgi/wiki?DontRepeatYourself\], often abbreviated to *DRY*.

The most obvious form of repetition in code is copy-pasting, which is often easy to eliminate with functions or methods, for example. Not all repetition is so obvious, and many design patterns are about eliminating more subtle forms of repetition. In the previous example, the BinaryOperation class, which uses the template method design pattern, the motivation was actually that the same code handling user interaction was repeated in the `Sum `and `Income `classes.

The most obvious problem with code snippets copied to multiple locations is that if a bug is found in the copied code or its functionality logic needs to be changed, it is laborious to make the change in multiple places. Usually, a piece of code that has been copied to multiple locations is also an indication that, for example, the cohesion of the code could be improved.

The DRY principle actually goes much further than simply eliminating repetition in code. The book \[Pragmatic Programmer\]\[https://en.wikipedia.org/wiki/Don%27t_repeat_yourself\] defines *every piece of knowledge must have a single, unambiguous, authoritative representation within a system* suggests that, in addition to code, the principle should be extended to other parts of the system, such as database schemas, tests, build scripts, etc.

The spirit of the Pragmatic Programmer\'s definition may not be fully grasped without a concrete example. Let\'s assume that the online store we are developing would also be used in countries that do not use the euro as their currency. If the application does not follow the DRY principle with regard to currency handling, it is likely that the change would require modifications to several different parts of the application. If, on the other hand, currency handling had *a single authoritative representation*, e.g., it was encapsulated sufficiently well in the `Money `class, adding support for other currencies might require nothing more than modifying the code of a single class.

#### Removing non-trivial copy-paste using the Strategy pattern [Week 5](#viikko-5)

Let\'s examine the `GutenbergReader `class, which is intended for analyzing the content of books found on \[Project Gutenberg\]\[http://www.gutenberg.org/\]:

    class GutenbergReader:
        def __init__(self, address):
            self.lines = []

            data = request.urlopen(address)

            for line in data:
                self.rows.append(row.decode("utf-8").strip())

        def rows(self):
            returnables = []

            for row in self.rows:
                returnables.append(row)

            return returns

        def rows_ending_with_exclamation_mark(self):
            conditions_met = []

            for row in self.rows:
                if line.endswith("!"):
                    conditions_met.append(row)

            return conditions_met

        def rows_with_word(self, word):
            conditions_met = []

            for row in self.rows:
                if word in row:
                    conditions_met.append(line)

            return conditions_met

The class has three methods, all of which return `lines` from the book: `lines`, `lines_ending_with_exclamation_mark`, and `lines_with_word`, which function as their names suggest.

The class is used as follows:

    def main():
        address = "https://www.gutenberg.org/files/2554/2554-0.txt"
        book = GutenbergReader(address)

        for line in book.lines_containing_word("beer"):
            print(line)

    if __name__ == "__main__":
        main()

The class is programmed in a \"traditional\" imperative style, the lines of the book are traversed with a for-statement, and for each line, a conditional statement checks whether the line meets the criteria of the method in question, e.g., ending with an exclamation mark.

The three methods provided by `the GutenbergReader `class for searching the contents of a book are clearly very similar in structure. All of them go through each line of the book and return some (or all) of them to the method caller. The methods differ in terms *of which lines of the book they return*. The methods are therefore almost copy-paste, but they differ from each other to such an extent that eliminating copy-paste is not entirely straightforward.

If we consider how the methods work, we can think of each method as having *its* own *strategy* for returning lines, with everything else being the same except for the strategy. This is an excellent place to apply the strategy design pattern. If we separate the row selection strategy into its own class, we can get by with just one method that handles the row traversal.

We implement the classes corresponding to the selection strategy so that they implement the `test `method. The method should return `True `if the row received as a parameter meets the condition, otherwise `False`. Let\'s start by implementing the ContainsWord class:

    class ContainsWord:
        def __init__(self, word):
            self.word = word

        def test(self, row):
            return self.word in line

The idea is to create a separate class for each different *search condition* in the books. An object can be created from the ContainsWord class as follows:

    condition = ContainsWord("beer")

The object can be used to check whether strings contain the word *beer*:

    condition = ContainsWord("beer")
    condition.test("the best Finnish-language beer website on the internet is olutopas.info")
    condition.test("Python 3.9 was released on October 5, 2020")

The first method call would return `True `and the latter `False`.

Words that meet the correct condition can be returned from the book by adding the `GutenbergReader `method to the class:

    def lines_that_meet_the_condition(self, condition):
        returned_lines = []

        for line in self.lines:
            if condition.test(line):
                return_rows.append(row)

        return rows_to_return

and the lines containing the word *beer* are printed as follows:

    for row in book.rows_that_meet_the_condition(ContainsWord("beer")):
        print(line)

By defining suitable condition classes, we can get rid of the original row search methods. The application also becomes much more flexible, as new search conditions can be easily added by defining new classes that implement the test method.

Instead of classes, conditions can also be presented in a simpler form, such as functions or lambdas. Next, let\'s take a look *at functional programming*, which is based on the use of functions. Let\'s modify the rows_that_meet_the_condition method so that `the condition `received as a parameter is called a value:

    def rows_that_meet_the_condition(self, condition):
        return_rows = []

        for row in self.rows:
            if condition(row):
                return_rows.append(row)

        return rows_to_return

Note how `condition.test(row) `changed to `condition(row)`. We can now use *lambda* to specify the condition in the previous example:

    for row in book.rows_that_meet_condition(lambda row: "beer" in row):
        print(row)

Lambda is like a more compact representation of a function. Like a function, lambda can also have parameters. In the example, lambda has `the` parameter `row`. Unlike a function, lambda is always defined on a single line. The defined row is executed and its value is returned without a separate return statement.

Lambdas make it easy to define arbitrary conditions. The following prints all lines containing either the word *beer* or *vodka*. For clarity, the lambda expression expressing the condition is now defined on its own line:

    condition = lambda row: "beer" in row or "vodka" in row

    for line in book.lines_that_meet_the_condition(condition):
        print(line)

We can also implement functions that return lambdas:

    def structure_contains_word(word):
        return lambda row: word in row

    for row in book.rows_that_meet_condition(structure_contains_word("beer")):
        print(line)

Note how in this example the function `structure_contains_word `resembles factory methods in the factory design pattern.

Let\'s refactor the GutenbergReader class using Python\'s functional programming toolkit. Since the class methods deal with a lot of lists, we can use the \[map\]\[https://docs.python.org/3/library/functions.html#map\] and \[filter\]\[https://docs.python.org/3/library/functions.html#filter\] functions.

The `map `function can be used to modify the elements of a list (or any other iterator). The function has two parameters. The first parameter is lambda (or a similar callable value), which takes the iterator element as a parameter and returns a new value for the element. The second parameter is an iterator, whose elements are used to form a new iterator with the help of lambda. The map function does not change the iterator received as a parameter, but returns a new iterator with the desired modifications.

We can use the map function, for example, in the constructor of the GutenbergReader class:

    def __init__(self, address):
        rows_iterator = map(
            lambda row: row.decode("utf-8").strip(),
            request.urlopen(address)
        )

        self.rows = list(row_iterator)

Note that the map function does not return a list, but an iterator. The iterator can easily be converted to a list using the \[list\]\[https://docs.python.org/3/library/functions.html#func-list\] function.

Another useful function for processing lists is the filter function, which can be used to filter the elements of a list (or any other iterator). The function has two parameters. The first parameter is a lambda (or equivalent callable value) that takes the iterator element as a parameter and returns `True `if the element is to be included in the filtered iterator, otherwise `False`. The second parameter is the iterator whose elements are to be filtered. Like the map function, the filter function does not change the iterator received as a parameter, but returns a new iteration whose elements are filtered according to the given condition.

A good use case for the filter function is the GutenbergReader class method `rows_that_meet_the_condition`:

    def rows_that_meet_condition(self, condition):
        returnable_rows_iterator = filter(condition, self.rows)

        return list(rows_to_return_iterator)

We can pass the condition obtained as a parameter directly to the filter function.

#### Good vs. bad copy-paste [week 5](#viikko-5)

Although the uniqueness of code, configurations, database schemas, etc. is generally a good thing, it may sometimes make sense to first create a quick copy-paste solution and then \[refactor\]\[part4/#refactoring\] the code later if necessary to make it cleaner.

In many situations, removing copy-paste comes at a small price, as it may make the application more complex. In the case of the Gutenberg reader, the original version might be perfectly adequate for use, and refactoring might not be worth the effort. But if the application needed to support most conditions, the original design of the application would not be able to accommodate this properly, and there would be an increasing amount of copy-paste.

A fairly good principle is \[three strikes and you refactor\]\[\<https://en.wikipedia.org/wiki/Rule_of_three\_(computer_programming\]\>), i.e., similar code logic in two places is more or less okay, but if it needs to be copied to a third place, it is better to refactor the code so that copy-pasting can be eliminated.

### Code quality attribute: testability

An important feature of good code is its testability, i.e., the code is easy to test comprehensively with unit and integration tests. Easy testability usually follows from the fact that the code consists of loosely connected components with clear responsibilities.

Conversely, if comprehensive testing of the code is difficult, it is often because the responsibilities of the components are not clear and they have too many dependencies.

From the very first week of the course, we have strived for good code testability, for example, by removing unnecessary dependencies through dependency injection.

### Code quality attribute: clarity

Traditionally, program code has been thought to be inherently cryptic and difficult to read. For example In the C language, it has been customary to write very concise code, with the intention of doing as many things as possible in a single line, avoiding method calls for efficiency reasons, optimizing memory usage by reusing variables, and \"coding\" data at the bit level.

Times have changed, and the current trend is to write code that clearly expresses what it does through naming conventions and structure.

In addition to clear naming, other characteristics of readable, or \"clean,\" code include many things we are already familiar with, which are listed \[here\]\[https://www.planetgeek.ch/wp-content/uploads/2011/02/Clean-Code-Cheat-Sheet-V1.3.pdf\].

Why is writing clear code so important? Isn\'t it enough that the coder understands what the code is about? This is definitely not enough, because most \[according to some estimates, up to 90%\]\[https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is\] of the time spent on \"programming\" is spent reading existing code. Code, whether written by oneself or someone else, must be read during debugging and when extending the application. It is very common that code that was once so clear is no longer as clear a few months later:

\![\]\[images/4-13.jpg\]{:height=\"350px\"}

### Code smell

Suspicious features in code have come to be referred to as *code smell*.

According to Martin Fowler\'s \[definition\]\[https://martinfowler.com/books/refactoring.html\], code smell is an easily noticeable sign that something is wrong with the code. Even a novice programmer may be able to detect code smell, but the real cause behind it may lie deeper, even in the design of the program. Code smell therefore indicates that, for one reason or another, the internal quality of the code is not at the best possible level.

There are many different types and levels of code smells. Here are a few examples of easily recognizable smells:

- Repetitive code
- Overly long methods and functions
- Classes with too many instance variables
- Classes with too much code
- Method parameter lists that are too long
- Unclear names of variables, methods, or classes
- Comments

In fact, all of these are signs of phenomena that weaken the quality attributes of good code listed above. For example, a very long method probably means that the method\'s cohesion is poor, and a class with a lot of code or instance variables most likely means that the single responsibility principle is not being followed. If a class\'s methods have a lot of parameters, it may indicate that some of the data is the responsibility of the wrong class, or that the method should rather be in another class.

Nowadays, commenting code \[https://medium.com/@fagnerbrack/code-comment-is-a-smell-4e8d78b0415b\] has, somewhat surprisingly, come to be considered a code smell. The point is that code should be written so clearly and with naming conventions so communicative that comments are unnecessary. In other words, comments should only be used in places where the same thing cannot be expressed through code formatting and better naming conventions.

Let\'s take a couple of examples of slightly less obvious code smells.

\[Primitive obsession\]https://sourcemaking.com/refactoring/primitive-obsession refers to a situation where a concrete concept, such as *an address* or *an amount of money*, is represented using primitive type variables (e.g., a string or an integer) instead of defining a class to represent it.

The term shotgun surgery describes a situation where changing, extending, or bug-fixing one logical thing causes a series of changes in many other places in the code. This is a symptom of functionality not being sufficiently encapsulated in a single code module, i.e., a design that violates the DRY principle.

There are numerous lists of code smells available on the Internet, such as the following

- <https://sourcemaking.com/refactoring/bad-smells-in-code>
- <https://blog.codinghorror.com/code-smells/>

### Refactoring

The remedy for problems with the internal quality of application code is *refactoring*, i.e., changing the code, for example, the structure of a class, while keeping its functionality unchanged.

Refactoring as a systematic means of improving internal code quality was brought to the attention of the general public by Martin Fowler\'s book \[Refactoring\]\[https://martinfowler.com/books/refactoring.html\], published in 2000. A second, completely rewritten edition of the book was published in 2018.

Fowler\'s book lists numerous refactoring operations that improve code structure and are suitable for specific situations. The refactorings listed in the book can also be found \[on the internet\]\[https://refactoring.com/catalog/index.html\]. Here are a few examples

- *Rename variable/method/class*, rename something that has been poorly named
- *Extract method*, splitting a method that is too long by separating it into smaller methods
- *Move field/method*, move an instance variable or method to another class
- *Extract superclass*, create a superclass to which part of the class functionality is transferred

In quite a few less straightforward refactoring operations, suboptimal code is refactored into better code by applying a design pattern. Joshua Kerievsky has written an excellent book on the subject \[Refactoring to patterns\]\[https://martinfowler.com/books/r2p.html\].

In previous examples, we saw refactorings like this, e.g.

- Account interest payment strategy, \[replace conditional with polymorphism\]\[https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html\]
- Account creation, \[replace constructor with factory method\]\[https://refactoring.com/catalog/replaceConstructorWithFactoryFunction.html\]
- Calculator commands, \[replace method with method object\]\[https://refactoring.com/catalog/replaceFunctionWithCommand.html\]
- Calculator binary operations, \[form template method\]\[https://sourcemaking.com/refactoring/form-template-method\].

An almost absolute prerequisite for refactoring (except for simple automatically performed refactorings, such as *rename variable*) is the existence of comprehensive tests. The purpose of refactoring is only to improve the internal structure of a class or component; the outwardly visible functionality should remain unchanged, and ensuring this without tests is extremely challenging.

When refactoring, it is definitely advisable to proceed in small steps, i.e., one controlled change at a time. Tests should be performed after each refactoring operation so that any regression, i.e., the breakdown of previously functioning code, can be detected as quickly as possible.

Refactoring should be done almost all the time. When the internal quality of the code remains clean, extending the code is pleasant and performing small refactoring operations is relatively effortless. If the internal quality of the code deteriorates, expanding it becomes slow and refactoring becomes increasingly laborious. Many software development teams have included in *their definition of done* that the code must be refactored to a sufficiently clean state. Cleanliness can be monitored, for example, as a pull request review task \[https://ohjelmistotuotanto-hy.github.io/osa3/#koodin-katselmointi-github-ja-pull-requestit\].

Some refactorings, such as renaming methods or classes or splitting long methods into smaller ones, are easy. However, this is not always the case. Sometimes it is necessary to perform larger-scale refactorings that change the structure, or architecture, of the program. Such refactorings can take days or even weeks, and performing them in such a way that the code remains functional throughout is quite challenging.

### Technical debt

The internal quality of code is not always optimal, and sometimes it is even appropriate from the customer\'s point of view to write code of lower quality. Poor design and/or programming has come to be described by the term *technical debt*.

Taking shortcuts in programming may quickly achieve some functionality, but a hasty solution will come back to haunt you later *if* you intend to expand the program. In practice, internal quality problems that have accumulated in the code, i.e., *technical debt*, begin to slow down development work, and implementing new features becomes increasingly difficult and expensive.

On the other hand, if the time to pay the interest never comes, i.e., the program is just a prototype or is never put into use, taking on technical debt is a profitable solution for the customer.

\[Part 2\]\[part2/#requirement-specification-in-the-2010s\] discussed the *lean startup* ideology approach to validating the usefulness of new software features by building *a minimal viable product (MVP)* that implements the feature, i.e., a solution that is just sufficient to test the usability of the feature. As the name suggests, an MVP is a structure that consciously incurs technical debt during its creation. *If* the feature proves to be desirable, the technical debt is paid off by creating a more robust implementation of the functionality.

Taking on short-term technical debt can sometimes even be necessary. For example, due to market conditions, it may be essential to get the product to consumers as quickly as possible, or else the opportunity may be lost entirely. Startup companies may find themselves in a situation where they have to choose between technical debt and running out of money. By doing something quickly with poor internal quality, the company may be able to raise enough funds to continue its operations. In situations like this, technical debt is consciously taken on, and the poor quality of the application code and lack of testing are dealt with later.

Technical debt is therefore not only a bad thing, but also a good tool when used strategically, just like a mortgage, for example---without a loan, not everyone can afford to buy their own home. However, it is essential to calculate the loan amount correctly, otherwise the result may be a loss of creditworthiness.

There can be many reasons behind technical debt, such as recklessness, incompetence, ignorance, or a deliberate decision. Martin Fowler \[shares\]\[https://martinfowler.com/bliki/TechnicalDebtQuadrant.html\] technical debt into four different categories:

1.  Reckless and deliberate: "we do not have time for design"
2.  Reckless and inadverent: "what is layering"?
3.  Prudent and inadvertent: "now we know how we should have done it"
4.  Prudent and deliberate: "we must ship now and will deal with consequences"

Categories 1 and 2, for which Fowler uses the term *reckless*, can be considered bad technical debt. One is created intentionally, thinking that there is no time for quality, while the other is created due to incompetence.

Categories 3 and 4 are technical debt created under consideration (*prudent*). Category 4 is precisely the situation where, for example, an MVP is being created, or the code must be published immediately due to some necessity, and the consequences will be dealt with later. Category 3 is a very common situation where the software was designed and built with the best of intentions, but only much later, when the architecture and design have already been finalized, do we learn enough about the nature of the application to know *how it should have been designed*. This kind of situation may be resolved by refactoring the application architecture to better meet the needs.

### More design patterns in [week 6](#viikko-6)

At the end of this section, we will look at a few new design patterns.

#### Example: Decorated stack [week 6](#viikko-6)

We have implemented a stack for the customer:

    class Stack:
        def __init__(self):
            self.items = []

        def push(self, element):
            self.elements.append(element)

        def pop(self):
            return self.items.pop()

        def empty(self):
            return len(self.items) == 0

    def main():
        stack = Stack()

        print("Stacking, empty terminates:")

        while True:
            stack = input()

            if not stack:
                break

            stack.push(stack)

        while not stack.empty():
            print(stack.pop())

    if __name__ == "__main__":
        main()

Our customer wants a few new versions of the stack:

- `EncryptedStack `where elements are stored in the stack in encrypted form, elements come out of the stack normally
- `LogStack, `where information about stack operations, their parameters, and return values is stored in a log
- `PrepaidStack, `which stops working when it has performed the number of operations specified as a constructor parameter

In addition, all possible combinations must be implemented:

- `EncryptedLogStack`
- `LogEncryptedStack `(the difference from the previous one is that parameters are not stored in the log in encrypted form)
- `EncryptedPrepaidStack`
- `EncryptedLogPrepaidStack`
- `LogPrepaidStack`

It\'s starting to sound bad, especially when the Product Owner hints that the next sprint will probably require more versions of the stack, such as AudibleStack, LimitedCapacityStack, and of course all combinations are also needed\...

Fortunately, the decorator design pattern is just right for this situation! Let\'s create three new versions of the stack as decorated stacks. First, let\'s look at PrepaidStack:

    class PrepaidStack:
        def __init__(self, stack, credits):
            self.stack = stack
            self.credits = credits

        def spend_credit(self):
            if self.credits == 0:
                raise Exception("No more access rights in stack")

            self.credits = self.credits - 1

        def push(self, element):
            self.consume_credit()
            self.stack.push(item)

        def pop(self):
            self.consume_credit()
            return self.stack.pop()

        def empty(self):
            self.spend_credit()
            return self.stack.empty()

The PrepaidPino class **contains** a stack, which it receives as a constructor parameter. The PrepaidPino class uses this stack to store all of its elements. In other words, each operation of the PrepaidPino class *delegates* the implementation of the operation to the stack it contains.

`PrepaidPino `is created as follows:

    stack = PrepaidStack(Stack(), 5)

In other words, a normal `stack `is created and passed to the PrepaidPino class as a constructor parameter together with the stack credits.

The implementations of the other two stacks are as follows:

    class EncryptedStack:
        def __init__(self, stack):
            self.stack = stack

        def decrypt(self, element):
            decrypted = ""
            string_element = str(element)

            for i in range(0, len(string_element)):
                decrypted = decrypted + chr(ord(string_element[i]) - 1)

            return decrypted

        def encrypt(self, element):
            encrypted = ""
            string_element = str(element)

            for i in range(0, len(string_element)):
                encrypted = encrypted + chr(ord(string_element[i]) + 1)

            return encrypted

        def push(self, element):
            self.stack.push(self.encrypt(element))

        def pop(self):
            return self.decrypt(self.stack.pop())

        def empty(self):
            return self.stack.empty()

    class LogStack:
        def __init__(self, stack, log):
            self.stack = stack
            self.log = log

        def push(self, element):
            self.log.write(f"Push: {item}")
            self.stack.push(item)

        def pop(self):
            item = self.stack.pop()
            self.log.write(f"Pop: {item}")

            return item

        def empty(self):
            is_empty = self.stack.empty()
            self.log.write(f"Empty: {is_empty}")

            return is_empty

The principle is the same: stack decorators `LokiPino `and `KryptattuPino `delegate all their operations to the Pino objects they contain. `LokiPino `writes a record of every operation performed on the stack. *KryptattuPino,* on the other hand, encrypts every string placed on the stack using a primitive algorithm and decrypts the strings taken from the stack back into plain text.

We can create a stack that writes an entry for each operation on the stack and encrypts the stack elements as follows:

    class ConsoleLog:
        def write(self, message):
            print(message)

    log = ConsoleLog()
    stack = EncryptedStack(LogStack(Stack(), log))

With decoration, we can achieve many different feature combinations for the stack with relatively little programming. If we had tried to handle everything with normal inheritance, the number of classes would have grown exponentially in relation to the number of different features, and there would have been no reuse.

Decoration is therefore not essentially inheritance but *delegation*, and once again the principle of \"favor composition over inheritance\" has proven its power.

More on the decorator design pattern, for example, \[here\]\[https://sourcemaking.com/design_patterns/decorator\].

#### Stack Factory [Week 6](#viikko-6)

Creating stacks with different properties is a bit tedious for the user. Let\'s make stack factory to facilitate creation:

    class StackFactory:
        def prepaid_stack(self, credits):
            return PrepaidStack(Stack(), credits)

        def log_stack(self, log):
            return LogStack(Stack(), log)

        def encrypted_stack(self):
            return EncryptedStack(Stack())

        def encrypted_prepaid_stack(self, credits):
            return EncryptedStack(self.prepaid_stack(credits))

        def encrypted_log_stack(self, log):
            return EncryptedStack(self.log_stack(log))

        def prepaid_encrypted_log_stack(self, credits, log):
            return PrepaidStack(self.encrypted_log_stack(log), credits)

        # many other constructors...

The factory class is ugly and contains a huge number of methods. If more features are added to the stack, the factory will get out of hand.

However, creating a stack is easy thanks to the factory:

    factory = Pinotehdas()

    ownstack = factory.encrypted_prepaid_stack(100)

As we can see, the factory design pattern is not ideal for this situation. Instead, let\'s try the builder design pattern.

#### Stack builder [week 6](#viikko-6)

The builder design pattern is very well suited to our situation. Our aim is to enable the creation of a stack in the following style:

    build = StackBuilder()

    stack = build.prepaid(10).encrypted().stack()

The method names and variable names of the builder have been chosen in an interesting way. The aim has been to use expressions that resemble natural language as much as possible when creating stacks. This is actually a \[DSL\]\[https://martinfowler.com/bliki/DomainSpecificLanguage.html\] (domain specific language) for creating stacks.

First, we create a basic version of the constructor that is only suitable for creating normal stacks:

    construct = StackBuilder()

    stack = build.stack()

We get the first version of the constructor to work as follows:

    class StackBuilder:
        def __init__(self):
            self.stack_object = Stack()

        def stack(self):
            return self.stack_object

In other words, when a StackBuilder object is created, the builder creates a stack. The stack that is \"under construction\" by the builder can be requested from the builder by calling the `stack `method.

Let\'s now extend the constructor so that we can create prepaid stacks as follows:

    construct = StackBuilder()

    stack = build.prepaid(10).stack()

In order for the above to pass through the compiler, a method with the signature `prepaid(self, credits) `must be added to the constructor, i.e., in order for the object resulting from the method to be able to call the method `stack`, the method `prepaid `must return the constructor. Our constructor\'s body is thus expanded as follows:

    class StackBuilder:
        def __init__(self, stack = Stack()):
            self.stack_object = stack

        def prepaid(self, credits):
            # ???

        def stack(self):
            return self.stack_object

The constructor keeps the stack being built in the object variable. When we call the `prepaid `method for the constructor, the idea is that the constructor decorates the stack under the building as a prepaid stack. The method returns a new StackBuilder object, to which it gives the decorated stack as a constructor parameter. This makes it possible to continue accessing the stack under construction after the method call. The code is as follows:

    class StackBuilder:
        def __init__(self, stack = Stack()):
            self.stack_object = stack

        def prepaid(self, credits):
            return StackBuilder(PrepaidStack(self.stack_object, credits))

        def stack(self):
            return self.stack_object

Using the same principle, methods are added to the builder that can be used to decorate the stack being worked on as a log stack or a cryptographic stack:

    class StackBuilder:
        def __init__(self, stack = Stack()):
            self.stack_object = stack

        def prepaid(self, credits):
            return StackBuilder(PrepaidStack(self.stack_object, credits))

        def encrypted(self):
            return StackBuilder(EncryptedStack(self.stack_object))

        def log(self, log):
            return StackBuilder(LogStack(self.stack_object, log))

        def stack(self):
            return self.stack_object

The constructor code may seem a little confusing at first.

The constructor is used as follows:

    construct = StackBuilder()

    stack = build.encrypted().prepaid(10).stack()

Here, the constructor was asked to create an encrypted prepaid stack with 10 credits.

Stacks with other properties can be created in a similar way:

    builder = StackBuilder()

    stack1 = builder.stack();   # creates a normal stack
    stack2 = builder.encrypted().logging(log).prepaid.stack()  # creates what you would expect!

Note that constructor method calls always create a new constructor, so the previous constructor is not modified. This prevents potential bugs that could arise, for example, in the following code:

    builder = StackBuilder()

    encrypted_builder = builder.encrypted()
    encrypted_log_builder = encrypted_builder.logging(log)

    encrypted_stack = encrypted_builder.stack()
    encrypted_log_stack = encrypted_log_builder.stack()

If the methods did not always create a new builder, but used the same reference, `the encrypted_builder `in the example code would build a logging encrypted stack. This would be very confusing and would easily create bugs that are difficult to debug. This is a very useful and widely used principle, known as *immutability*. The basic idea behind this principle is that methods and functions that modify objects should not make changes directly to the reference received, but should return the reference to a new object that contains the desired changes. For example, the `map `and `filter `functions, which always return a new iterator, follow this principle.

The implementation of the constructor is based on a technique called \[method chaining\]\[http://en.wikipedia.org/wiki/Method_chaining\], i.e., the chaining of method calls. Methods that are otherwise void in nature are set to return a constructor object. This, in turn, allows a method to be called by another method returned by the constructor, and thus method calls can be chained together in any number. The motivation for method chaining is usually to make the object interface as natural as possible, similar to a DSL.

### Software licenses

Read Akira Taguchi\'s text on software licenses [here](lisenssit.md).

\<\<\