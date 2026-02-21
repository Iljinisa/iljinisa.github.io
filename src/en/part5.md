>\>\>

The fifth week of the course covers three topics: the Lean philosophy, which has had a major impact on agile software development in recent years; scaling agile methods to larger projects; and various statistical and research data on the use and benefits of agile methods.

## Typos in the material

Please [suggest corrections](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

### Course feedback

In addition to the feedback collected at the end of the course, you can give anonymous feedback to the course staff at any time at <https://norppa.jyu.fi/targets/7131/feedback>.

## Lean

The concept *of Lean* has already been touched upon a few times during the course, so let\'s take a closer look at what it is.

### Background

Lean originates from Toyota\'s production and product development methods, and its origins can be traced back to the first half of the 20th century.

After World War II, Japan experienced a major reconstruction boom, but capital and raw materials were in short supply. It was discovered that improving quality increases productivity: the fewer errors and problems there are in products and production processes, the more productivity increases, which in turn leads to market share growth and new job opportunities. A strong culture emphasizing quality developed in Japanese companies.

The scarcity of resources led Toyota to develop the *Just In Time (JIT)* production model, where the ideal is to start manufacturing a product only after the buyer has already ordered it. This contrasts with traditional mass production, where large quantities of products are manufactured in advance and stored. The aim was to get the product to the consumer as quickly as possible after the order was placed, i.e., the lead time from order to delivery was to be as short as possible. The JIT production model had many benefits.

The JIT production model had many benefits. It was easy to prepare for changing customer needs, unlike in mass production, where products made for stock had to be sold even if they were no longer to the customer\'s liking. Because the lead time from order to customer was short, quality problems were quickly revealed, unlike with products that might have been in stock for months.

Mass production sought to optimize the work input of individual employees and machines, with the ideal being 100% machine utilization at all times. In Toyota\'s JIT production model, however, the focus of optimization was on product lead time. The aim was to eliminate all possible waste that did not contribute to the rapid flow of work, i.e., the product being manufactured, from order to customer. Factors that hindered flow, such as quality problems or suboptimal working methods, were addressed immediately.

Unlike traditional mass production, Toyota also adopted a culture of production optimization *that* respected, listened to, and empowered its employees. A key principle was the continuous improvement of operating and working methods at the level of the entire workforce. In practice, every employee was entitled and even obliged to stop the entire production line immediately if they noticed any problems.

#### Toyota Production System, TPS

Starting in 1965, Toyota began calling its operating method the Toyota Production System (TPS). The first English-language publications on the subject date back to 1977. Toyota\'s success aroused interest in the West, and at the end of the 1980s, researchers at MIT began to map and document Toyota\'s production system in more detail. The researchers launched the term \"lean production\" to describe the underlying philosophy of TPS.

In 1990, the book \[The Machine That Changed the World\]\[\<https://en.wikipedia.org/wiki/The_Machine_That_Changed_the_World\_(book\]\>) was published, bringing lean to wider Western awareness. In the 2000s, Toyota began to use the term lean internally to refer to its production system.

Over the past 30 years, a large number of books have been published describing Toyota\'s production system, one of the most famous and influential of which is Jeffrey Liker\'s The Toyota Way (https://www.amazon.com/Toyota-Way-Management-Principles-Manufacturer/dp/0071392319) (2001).

Originally, lean was a method used by Toyota to optimize car production, but it has since been adopted *for* product development as well. Production and product development are very different in nature, and the lean practices applied to them differ in many ways.

Lean has been applied to numerous different fields, and it was introduced to software production in Mary and Tom Poppendieck\'s book \[Lean software development, an agile toolkit\]\[https://www.amazon.com/Lean-Software-Development-Agile-Toolkit/dp/0321150783\], published in 2003. Despite its classic status, the book is outdated in places and interprets lean rather narrowly. The developers of Scrum, Ken Schwaber and Jeff Sutherland, were also very familiar with lean thinking, and many features of Scrum have been influenced by lean.

Lean has begun to be applied to an increasing number of areas, from healthcare to bakeries and banking. The administration of the University of Helsinki has also begun to talk more and more about lean, and several events on the subject have been organized within the university over the past couple of years. Lean, or whatever else is marketed under the lean label, has begun to take on a life of its own, separate from the Toyota production system, and today it is sometimes difficult to say exactly what someone means when they talk about lean.

In the following, we will discuss lean in more detail based on Craig Larman and Bas Vodde\'s excellent book Scaling Lean and Agile Development. The chapter introducing lean in the book is available to everyone \[here\]\[http://www.leanprimer.com/downloads/lean_primer.pdf\]. The chapter specifically introduces the modern form of the Toyota production system.

### The goals, foundations, and pillars of lean

Lean is illustrated in several sources as a diagram called *the lean thinking house*:

\![\]\[images/5-1.png\]{:height="550px" }

Lean has a goal, a foundation, two *pillars*, and a set of supporting *principles* (14 principles and product development principles) located at the \"top floor of the house.\" In addition to these, there are a number of tools that support Lean, the most famous of which is probably Kanban, which was mentioned during the course.

The goal of Lean is *to create a permanent, fast way to move from \"idea to product sold to the customer\" without exploiting employees and partners, while maintaining high quality and customer satisfaction.*

For this goal to be possible, there must be a lean approach deeply rooted in all levels of the company, aimed at long-term benefits, which managers apply and teach to their subordinates. This is called *the foundation of lean*.

The two pillars of lean are continuous improvement and respect for people.

*Continuous improvement* essentially defines Toyota\'s entire operating culture, which is centered on a willingness to learn and an encouraging atmosphere for change:

*The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, \"Why are we doing this?\"*

An atmosphere that encourages continuous learning and improvement is only possible if all activities are based *on respect for people*. This, in turn, means many concrete things, such as listening to employees, giving them responsibility and mentoring them, and ensuring a meaningful and safe working environment. Toyota extends this principle to include subcontractors and end customers. For example, Toyota builds genuine partnerships with subcontractors that benefit both parties and teaches subcontractors lean thinking.

All this sounds abstract, but hopefully it will become a little more concrete when we discuss the lean principles that guide lean operations in a more concrete way, based on the goals and pillars of lean.

### Continuous improvement -- value and waste

The developer of the Toyota production system, \[Taiichi Ohno\]\[https://en.wikipedia.org/wiki/Taiichi_Ohno\], describes the principle of continuous improvement as follows:

> All we are doing is looking at the time line, from the moment the customer gives us an order to the point where we collect the cash. And we are reducing the time line by reducing the non-value-adding wastes.

According to Ohno, the way to achieve a faster production cycle is to eliminate things that do not produce value, i.e., waste.

What exactly does lean mean by value and waste? Value refers to those things and stages of work that the customer is willing to pay for, i.e., those that benefit the customer. Waste, on the other hand, refers to everything related to production that does not produce value for the customer.

According to lean, there are three different types of waste: muri, mura, and muda.

Let\'s start with the most obvious type of waste, *muda*. Lean originally identified seven sources of muda waste:

- overproduction
- in-process inventory
- over/extra processing
- unnecessary transportation
- motion
- waiting
- defects

Originally, these were wastes associated with car manufacturing production lines, but let\'s now explore these concepts by interpreting them in the context of software development.

#### Overproduction

Products should only be manufactured in the quantities ordered by the customer, i.e., it is not worth producing for stock. Products manufactured for stock are problematic in many ways. They consume capital and may also contain systematic defects that are only noticed when the products are put into use.

Extra features in software can be considered overproduction. According to some studies, up to \[64% of software features\]\[https://www.mountaingoatsoftware.com/blog/are-64-of-features-really-rarely-or-never-used\] are either never used or used only very rarely. Implementing extra features costs money and increases the amount of code, which in turn makes further development more risky.

#### In-process inventory

This category includes partially completed work and its storage, i.e., components that are not yet in use. The problems are the same as in overproduction.

In software development, in-process inventory includes, for example, overly detailed requirements specifications for features that are not yet implemented, finished code that has not yet been tested or deployed, or code that implements features that the customer may want in the future.

#### Over/extra processing

Any extra work steps that aren\'t needed to get a good enough result are also a waste.

These include, for example, work stages that are required by the process but are irrelevant to the end result, such as a mandatory design document that no one ultimately needs. A similar harmful issue may be the requirement that test coverage must be 100%, as this can lead to the creation of almost useless tests that only increase coverage.

In some cases, code that is too well written can also be interpreted as overwork. For example, if you are creating an MVP that validates a useful feature (\[see part 2\]\[part2/#requirement-specification-in-the-2010s\]), it is advisable to implement it with lower quality than normal production code and, for example, skip automated testing. When implementing an MVP, it is therefore usually advisable to take on \[technical debt\]\[part4/#technical-debt\], which may then have to be repaid if the feature implemented by the MVP is decided to be left in the system.

#### Unnecessary transportation of materials

The raw materials or partially finished products needed to make the product should not be transported unnecessarily from one place to another.

In the context of software development, this means that the software to be developed should be defined, designed, implemented, tested, and put into production by a single team. In other words, a \"handoff,\" where, for example, the implemented software is given to a team separate from the development team (e.g., a QA team) for testing, is considered wasteful. Unnecessary movement of employees

#### Unnecessary movement of employees

Production equipment and materials should be located so that employees do not have to move unnecessarily from one place to another when manufacturing a product.

In software development, unnecessary movement is considered to be *task switching*, i.e., switching too quickly between different tasks, such as working on several projects at the same time.

#### Unnecessary waiting

Unnecessary waiting includes, for example, the time spent waiting for the necessary raw materials to arrive or for a piece of production equipment to become available.

In the context of software development, unnecessary waiting includes waiting for company management to approve requirements specifications, for testers to finish testing a new version of the program, for maintenance to put a new version of the application into production, for someone to merge a pull request, etc.

#### Defects

If a systematic defect caused by the production line is not noticed in time, large quantities of defective products/components may be manufactured. Even worse is if defective products reach consumers. Replacing or repairing them is expensive, and the damage to the company\'s image is potentially significant. If defects occur, it is essential to detect and correct them as quickly as possible.

In software development, defects are almost inevitable, and it is cost-effective to perform quality control as early as possible.

These original seven types of waste, which were adapted to the context of car manufacturing decades ago, have been reinterpreted in new contexts, such as software development.

Over the years, new forms of waste have also been proposed, one of which, *underutilizing people\'s potential*, has already become somewhat established. In English, this form of waste is described as follows *Under-realizing people\'s potential and varied skills, insights, ideas, and suggestions.*

#### Muri and mura types of waste

The muda-type waste discussed above in its various forms is the most prominent form of lean waste, and some sources do not even mention the other two types of waste, *mura* and *muri*.

Mura-type waste is unevenness, non-uniformity, or irregularity in working methods or the product being worked on.

In software development, for example, the highly variable size of user stories to be implemented is mura-type waste, which can result in muda-type waste, such as the need for intermediate storage. This, in turn, weakens value flow, i.e., the time it takes for a user story to go from being placed in the backlog to becoming part of the finished product.

The third type of waste*, muri*, refers to overload or unreasonable, impossible, or too difficult requirements. When considering a car production line, for example, using machines at 100% capacity without regular maintenance can be classified as muri. In software development, muri could be interpreted as, for example, overworking staff. Muri-type waste, such as overloading staff, is likely to result in muda, i.e., defects in the product.

### Kaizen

The purpose of continuous improvement is to optimize operations by eliminating waste that does not add value for the customer. Continuous improvement is often referred to by its Japanese name, *kaizen*, which is a comprehensive operating philosophy that applies to all employees:

> As a mindset, it suggests "My work is to do my work and to improve my work" and "continuously improve for its own sake."

Kaizen is also a concrete way of working:

- a technique/working method is selected and a commitment is made to implement it for a certain period of time
- once the activity has stabilized, review the effectiveness of the chosen working method and optimize it in relation to any shortcomings identified, thus creating a new standard way of working
- repeat this cycle forever\...

The cyclical improvement process associated with Kaizen often involves regular meetings, or \"Kaizen events.\" Scrum retrospectives are a classic example of Kaizen events.

#### Lean tool: value stream mapping

A technique known as \[value stream mapping\]\[https://en.wikipedia.org/wiki/Value-stream_mapping\] is often used to identify and map waste. The idea is to describe the product\'s journey through the work stages of the process used and to visualize the work stages that add value to the product in relation to the entire manufacturing life cycle of the product.

\![\]\[images/5-2.png\]{:height="400px" }

The figure shows six work stages that a product, e.g., a user story, goes through. The time spent in each work stage can be thought of as increasing the value of the work. For example, the *code and test* stage takes two hours, which is necessary in order for the story to be published at all. Between each stage, the story is *in intermediate storage*, waiting for the next stage, and intermediate storage is a form of waste. The purpose of value stream mapping is to highlight all \"intermediate storage,\" unnecessary waiting, and unnecessary work stages so that it is possible to consider how they can be minimized.

#### Lean tool: root cause analysis -- five whys

If value stream mapping or some other method reveals waste in the production process, i.e., things that do not produce value, the aim is to get rid of them. However, the purpose of continuous improvement, or kaizen, is not to merely treat the symptoms, but to perform *a* root cause analysis of the identified waste and thus strive for more permanent and effective improvements.

One root cause analysis technique is the five whys \[https://en.wikipedia.org/wiki/Five_whys\], which is easiest to illustrate with an example.

*The value stream map* in the previous figure shows that it takes 1.5 weeks from the completion of the code to its production.

- **Why?** The QA department still needs to verify that the code works in the staging environment.
- **Why?** Programmers do not have time to test the code themselves in the staging environment.
- **Why?** Programmers are busy working on the user stories that are the goal of the sprint.
- **Why?** Bug fixes for stories completed during previous sprints take a surprising amount of time.
- **Why?** There is never enough time to do proper quality control in the sprint where the stories are implemented.
- **Why?** Too many user stories are always included in sprints.

By repeatedly asking *why* (about five times), it is possible to get to the root cause of the problem, i.e., what needs to be fixed in order to hopefully eliminate waste. The six \"why\" questions in the example reveal that the root cause of the problem is that *too many user stories are always included in sprints*, meaning that the best way to eliminate waste is probably to start by reducing the workload of sprints.

In fact, it would have been good to ask at least one more *\"why\"* question. The essential question in terms of the root cause is why too many stories are included in the sprints. Is it due to the development team itself or to forces outside the team?

### Lean principles: pull system

The purpose of Lean is to optimize the time it takes from ordering a product to delivering it to the customer. The aim is to get value *flowing* to the customer without unnecessary delays and work stages. The value stream map presented above visualizes the flow of value.

The Lean mechanism for optimizing flow is the use *of pull systems*. A pull system refers to a production control method in which products or the components needed for products are only made when required by customer orders. The opposite of this is *a push system*, where products and components are manufactured in advance for storage, in the hope that they will sell.

Pizzerias, for example, operate on the pull principle: pizza is only made when a customer orders it. Unicafe, on the other hand, is a push system: lunches are made for storage and it is hoped that they will sell to customers.

[The chapter](osa5.md#taustaa) on the background of Lean discussed the Just in Time (JIT) production model. In practice, the pull system is a mechanism for implementing the JIT production model.

#### Kanban

The pull system is often implemented using *kanban*. The Japanese word kanban means signal card, or \"card you can see\" in English. Kanban implements *visual control*, which makes it easy for employees to know what to do next.

When a customer orders a product, the kanban card corresponding to the order is taken to the factory. If the manufacture of the product requires, for example, five different components, the components are \"ordered\" from the workstations that manufacture them by taking the kanban card corresponding to the order for each component to those workstations. If the manufacture of the components requires other components, these are also ordered using the same principle. When a component is ready, it is delivered to the customer. At the same time, the kanban card is returned for use in future orders.

Only a limited number of kanban cards are in use. This controls the amount of work that can be accumulated at any stage of production. In this way, kanban is used to \"pull\" the necessary components, instead of manufacturing large quantities of components in advance and storing them in the warehouse.

As already mentioned, components stored in intermediate storage are a form of lean waste. Stored components tie up capital, and if there are not enough orders, they may never be needed. Intermediate storage may also delay the detection of defects: if there is a manufacturing defect in the components, it may take a long time for the defect to be discovered, and large quantities of defective components may have already been manufactured and stored.

In practice, pull-based production may maintain small intermediate stocks in order to optimize the lead time for manufacturing a product.

#### Kanban in software production

Kanban has also been widely adopted in agile software development, as mentioned briefly [in section 2](osa2.md#yht%C3%A4aikaa-teht%C3%A4v%C3%A4n-ty%C3%B6n-rajoittaminen). The principles of kanban in software production are slightly different from those used in traditional production.

The functionality to be implemented, e.g., a user story or one of its technical tasks, corresponds to a kanban card that passes through different work stages.

Flow, i.e., the rapid completion of an individual story, is achieved by limiting the amount of work in progress at certain stages by setting *work in progress* (WIP) limits.

The kanban board in the image below is divided into three work stages: *analysis, develop, and test*, each of which has a WIP limit. There are also intermediate storage areas between the work stages, *dev ready* and *build ready*, which also have WIP limits.

\![\]\[images/5-3.png\]{:height=\"400px\"}

The kanban board in the image allows a maximum of twenty user stories to be placed on it. Once a story has gone through all the work stages, new capacity is freed up on the kanban board, and the product owner can place the next story to be implemented in *the input queue* stage.

The WIP limits on the kanban board in the image are not very strict, meaning that the amount of work in progress is quite large, with a maximum of 15 stories. Since lean considers work in progress to be waste (in-process inventory), *the flow of value* is not very optimal on the kanban board in the image. By reducing WIP limits and eliminating intermediate storage, it may be possible to optimize *lead time*, i.e., the time it takes from when a user story is \"ordered\" to when its specified feature is ready.

The ideal lean approach would be to implement *a* so-called *one-piece flow*, i.e., to complete the user story in its entirety before starting the next one. This principle is applied in many places, but if the work is poorly organized, it may lead *to underutilization*. In practice, this means that several people within the software team have to wait for others to finish their work before they can continue with their own. For this reason, in most cases, the team works on several stories at the same time instead of just one. In other words, finding suitable WIP limits always requires team-specific consideration and application.

### Lean principles

For the pull system to work well, i.e., for customer value to flow smoothly, it is advantageous if there is not too much variance in the duration of the different work phases. This is related to the Lean principle *of leveling the work*. One of the three forms of waste in Lean is *mura*, or irregularity or inconsistency. A large variance in the duration of work phases or the size of user stories implemented in the context of software development is one manifestation of this.

One cause of variance is defects. The lean principles are *Stop and fix* and *build quality in*.

*Stop and fix* refers to Toyota\'s old principle, where anyone is obliged to stop the production line if they notice a fault, such as a damaged component.

When the production line is stopped, the root cause *of the defect* must be identified as quickly as possible (for example, using the five whys method discussed above) and efforts should be made to eliminate the possibility of the fault recurring in the future, i.e., *quality* must be *built into* production.

In software production practices, automated testing and continuous integration can be seen as a direct manifestation of the *stop and fix* and *build quality in* principles.

Traditional mass production focuses on keeping production equipment running at maximum capacity and employees constantly busy. The remuneration of individual employees is often based on performance bonuses. The idea is that this will keep the unit price of products as low as possible and maximize the company\'s productivity.

Instead of examining the efficiency of individual employees and machines, lean focuses on the comprehensive development of systems through value stream optimization and assumes that this will be more profitable for the company in the long run. This is summarized by the principle *of long-term philosophy*.

For example, high utilization of a single machine or rewarding individual performance may be *local optimization* that can even be detrimental to the company as a whole. This can result in the production of a large number of components that are ultimately never needed. Instead of focusing on the performance of individual production equipment, individuals, or teams, focusing on the flow of value from order to customer aims to take into account bottlenecks affecting the entire production system when improving operations.

There are too many infamous examples of local optimization, such as savings in facility costs by different departments at universities. The rent paid by the university for its buildings remains the same even if a department \"saves\" by leaving facilities unused.

In pull systems, it is not customary to make production-related decisions (e.g., how much of a product and its components should be manufactured) at an early stage, but only when necessary. In English, this late decision-making is characterized as *\"commit at the last responsible moment*,\" meaning that decisions are delayed, but not so long that the delay causes problems. This is basically summed up as \"*decide as late as possible*.\"

When a decision is made late, the significant advantage is that the maximum amount of information is available to support the decision, unlike decisions made too early in advance, which are more speculative.

Once decisions have been made, we act as quickly as possible in the spirit of the pull system, i.e., *implement rapidly* or *deliver as fast as possible*, so that value flows to the customer without unnecessary delays.

The faster value can be delivered, the more decisions can be delayed and made in the light of better information.

### Value flow in agile software development

The application of the above principles is clearly visible in agile software development. Requirements are managed with a product backlog, which in the best case is [DEEP](osa2.md#hyv%C3%A4-product-backlog-on-deep), i.e., Detailed appropriately, emergent, estimated, prioritized.

Low-priority user stories are not defined very precisely. When the product owner selects a story to be implemented in the next sprint, the acceptance criteria for the story are defined and its implementation is planned. Precise requirements are therefore not defined speculatively, but *at the last responsible moment*. The stories selected for the sprint are completed during the sprint, i.e., *delivered as fast as possible*.

Scrum can be seen *as a* lean *pull system*, where each sprint takes orders defined by the customer\'s representative at the last minute (i.e., at the latest during sprint planning) and implements them as quickly as possible, i.e., during the sprint. Value, i.e., new functionalities implemented to working order, flows to the customer at the pace defined by the sprints.

In agile software development, various methods have recently been used to streamline the flow of value. Originally, and to some extent still, Scrum\'s goal is to bring new features into production in sprints, i.e., every few weeks. The recent trend has been to shorten the cycle; *continuous deployment* can mean that even every commit leads to the release of a new version of the program, meaning that new value-producing features can appear in the software dozens of times a day.

Scrum limits the amount of work in progress (which is one of the wastes identified in lean) by only including user stories that match the team\'s velocity in a sprint. In all contexts, for example when applying continuous deployment, a time-limited sprint does not make sense.

In some places, a \"purer\" pull system has been adopted, where user stories are implemented one (or a slightly larger number) at a time as quickly as possible. When a story is completed, i.e., production capacity is freed up, the product owner selects the next most important story, which is then defined, planned, and implemented immediately from start to finish. Flow is ensured by having only one or at most a few user stories in progress at any given time. The Scrumban method mentioned [in Part 2](osa2.md#lean-waste-ja-scrumban) works largely in this way.

### Growing lean and leadership principles

At Toyota, most new employees are carefully trained to familiarize themselves with the principles of lean thinking at a practical level. During several months of training, new employees work in many different jobs and are taught to recognize lean waste in its various forms. The aim is to internalize the mentality of continuous improvement, or kaizen.

At the heart of Toyota\'s management culture are managers who act as teachers, mentors, and coaches of lean thinking. The principle of *\"grow leaders\"* describes Toyota\'s way of developing managers who internalize the lean operating philosophy.

The principle of \"*my manager can do my job better than me*\" describes how managers within the company have grown into new responsibilities through different tasks and have also mastered the *hands-on* work that is the responsibility of employees. Managers are primarily teachers and mentors of lean practices working on the front lines.

One important principle of lean management is *go see* (genchi genbutsu in Japanese): employees, especially managers, should \"see things with their own eyes\" rather than just sitting at their desks reading facts reported by others. This is related to the ideal that managers are expected *to lead on the front line* (gemba in Japanese), i.e., where the work is actually done.

In the words of T. Ohno, developer of the Toyota production system:

> You can\'t come up with useful kaizen sitting at your desk\... We have too many people these days who don\'t understand the workplace. They think a lot, but they don\'t see. I urge you to make a special effort to see what\'s happening in the workplace. That\'s where the facts are.

The role of the scrum master is partly in line with the ideals of lean leadership. However, the principle that *my manager can do my job better than me* does not apply to most scrum masters. In many development teams, the technical side of leadership is represented by more experienced employees in mentor roles, such as lead developers or senior developers.

### Principles of lean product development

When applying lean to production, the main focus is on improving operations by eliminating waste.

When applying lean *to* product development (e.g., the design of completely new car models) instead of production optimization, entirely new principles emerge. The guiding principle in Toyota\'s product development is *to out-learn the competitors by generating more useful knowledge and using and remembering it effectively.*

In lean product development, the focus is not only *on improving efficiency* but also on *amplifying learning*. It is worth striving *for high-value information*, for example by focusing *on uncertain things*. Ideas that involve uncertainty and high technical risk should be implemented/tested quickly, as delayed information comes at a high cost (*cost of delay*).

One lean product development mechanism for accelerating learning is *set-based concurrent development*. If the goal is to develop a new engine cooling system, for example, several alternative solutions are developed simultaneously by different teams. The solutions developed at regular intervals are compared, and some of them are eliminated. Finally, the solution that proves to be the best is selected for use in the final product.

The set-based development method is radically different from the commonly used *iterative* development method, where the starting point is a solution that is improved step by step.

In software development, the set-based development method is used relatively rarely, mainly in user interface design, where several parallel proposals for a possible user interface solution are first presented to the customer.

At Toyota, product development is led by *the chief technical engineer*, who is responsible for both the technical and commercial success of the products. This is a typical lean front-line manager who has a thorough understanding of the practical work but is also very close to the customer. The role differs *from that of a* Scrum *product owner* due to its technical background.

### Applying lean to different fields

Since the 1990s, lean has attracted great interest around the world and has been applied in almost all fields, including software development. The principles of lean have been well known to the developers of Scrum, for example. Although the original sources of Scrum do not use lean terminology, Scrum has many features of lean.

Recent developments in agile methods have taken certain ideas, such as minimizing user story lead times, significantly further than the practices of Scrum and agile in their early days. Today, there is a lot of talk about lean software development.

Both agile methods and lean share the same fundamental principle: *continuous improvement of operations*. The line between lean and agile is not clear at all and is, in part, completely artificial. For example, the developers of Scrum did not intend Scrum to be a static structure that must be followed to the letter forever; such an approach would not be agile. Agility is an inspect-and-adapt cycle that enables transparency and focuses on the continuous improvement of operations. In practice, this is exactly the same idea as lean *kaizen*.

Many problems have also been encountered in the application of lean. Lean is a mindset developed for Toyota\'s needs, and the model has been refined and changed over the decades. It is therefore somewhat unclear how Toyota\'s practices can be transferred to other industries.

Like agile, lean is not a set of tools, but a continuous way of working, in the words of Toyota CEO \[Akio Toyoda\]\[https://en.wikipedia.org/wiki/Akio_Toyoda\].

- *The root of the Toyota Way is to be dissatisfied with the status quo; you have to ask constantly, "Why are we doing this?"*
- *In Toyota and in lean thinking, the idea is to repeat cycles of improvement experiments forever.*

## Large-scale agile software development

Agile software production methods were originally intended for small teams. For example, Scrum mentions that a development team consists of 3-9 people. But what if the product requires a larger number of developers?

The basic principle is still to keep teams small, but to increase production capacity by using more teams. This, in turn, requires that the work between teams be coordinated in some way.

### Scrum of Scrums

A long-established method for scaling Scrum is *the* so-called *Scrum of Scrums*, where the idea is to form a coordinating team consisting of one or, if necessary, several members from each Scrum team. The most traditional way is probably to assemble a coordination team from Scrum Masters. In some situations, however, a better person for coordination may be a lead developer, i.e., the most experienced application developer in the Scrum team. The Scrum of Scrums team can meet every day or, if not necessary, for example, on a weekly basis.

The Scrum of Scrums principle is already very old. In the article \[Agile Can Scale: Inventing and Reinventing SCRUM in Five Companies\]\[https://www.researchgate.net/publication/290823579_Agile_Can_Scale_Inventing_and_Reinventing_SCRUM_in_Five_Companies\], one of the developers of Scrum, Jeff Sutherland, says he used Scrum of Scrums as early as 1996.

Sutherland applied the principle in a company with hundreds of application developers and dozens of Scrum teams responsible for several different products.

Each product team was coordinated by its own Scrum of Scrums team, which met once a week. The entire company\'s product portfolio was managed by a \"management Scrum,\" or Scrum of Scrums of Scrums team, which met monthly. This top-level management Scrum team consisted of company executives, product managers, and leading software architects.

Sutherland\'s description is not very detailed and does not provide any guidance on how to handle backlogs in a larger-scale Scrum, for example.

### Large-scale agile methods

Over the past decade, more attention has been paid to agile scaling, and several large-scale agile methods have been introduced. The most notable of these are the Scaled Agile Framework (SAFe) \[http://www.scaledagileframework.com\], Large Scale Scrum (LeSS) \[https://less.works\], and, to some extent, Disciplined Agile (DA) \[http://www.disciplinedagiledelivery.com\].

What they have in common is that they extend agility by incorporating lean thinking. Unlike agile methods, lean is primarily intended to work on a very large scale and contains more principles that guide the entire organization\'s operations than traditional agile. Let\'s take a closer look at SAFe and LeSS. DA has received the least attention of the methods listed, so we will leave it out.

### SAFe, or Scaled Agile Framework

Scaled Agile Framework, or SAFe, is currently the most popular large-scale agile method. According to \[a study\]\[https://www.cprime.com/resource/white-papers/scaling-agile-survey-2017/\], , 45% of organizations engaged in large-scale agile development use SAFe, which is also currently used in the development of information systems and web services at several universities (e.g., the University of Helsinki and the University of Jyväskylä).

The main developer of SAFe is David Leffingwell, who worked as a consultant at Nokia Mobile Phones (NMP) in the 2000s. SAFe was largely developed based on work done at Nokia. Nokia used a kind of pre-version of SAFe. The official first version of SAFe was released in 2011. Version 6 is currently in use.

In a nutshell, SAFe combines all the best practices in agile and lean software development developed over the last 20 years with a set of practices aimed at managing a company\'s products.

SAFe offers a large number of principles, individual and team roles, and concepts. SAFe calls itself a framework, meaning that the intention is for companies to tailor a suitable process for themselves using the tools provided by SAFe.

SAFe also offers four pre-customized configurations of different sizes. The smallest of these, *Essential SAFe,* is intended for smaller companies and the initial stages of SAFe implementation. The largest configuration, *Full SAFe*, is suitable for use by large companies managing multiple products. The following image illustrates the Full SAFe concept:

\![\]\[images/5-4.png\]{:height="500px" }

At the core of application development (can you find it in the image?) is SAFe\'s slightly modified Scrum, which incorporates a set of XP principles.

Team coordination is managed top-down by bringing together teams responsible for a single product under the concept of a release train. The Scrum teams in the release train work in sync with each other, jointly producing larger functionalities during a *product increment* cycle consisting of several sprints.

Product increments and the release trains that implement them are in turn managed from higher up in the organization by various personnel roles. SAFe provides a lot of support for this through its concepts and defined roles.

SAFe is very well documented and provides extremely detailed guidance to facilitate the implementation and compliance with SAFe. The guidance is, of course, provided by highly paid consultants and customized training packages and certification.

SAFe seems to be particularly popular with company management. This is understandable, because unlike most agile methods, SAFe provides company management with suitable tasks in the form of roles and practices.

As mentioned earlier, SAFe includes practically all possible best practices for agile and lean software development, clearly and thoroughly documented. SAFe is a kind of agile/lean development supermarket, where everything is readily available in a ready-made package. Pick and mix, open the package, and follow the instructions\...

SAFe has also received a lot of criticism. Some of the criticism is directed at the cumbersome nature of the process defined by SAFe, while some is directed at the top-down management nature of SAFe.

For example Scrum developer Ken Schwaber has \[questioned whether SAFe is an agile method at all\]\[https://kenschwaber.wordpress.com/2013/08/06/unsafe-at-any-speed/\] according to the original idea of agility. The Agile Manifesto includes the principle *of individuals and interactions over processes and tools*. SAFe, on the other hand, seems like a very heavy process.

### LeSS, or Large Scale Scrum

LeSS was developed by Craig Larman and Bas Vodde, who worked as consultants in the early 2000s for companies such as Nokia Siemens Networks. Unlike SAFe, LeSS is very simple and strongly based on Scrum. There are no new roles, artifacts, or meetings. The only difference is that the team is larger than in Scrum.

There are two different versions of LeSS: *LeSS* for situations where the product is made by 2-8 Scrum teams, and *LeSS Huge* for situations where a larger number of teams are needed.

Both LeSS and LeSS Huge are based on the following assumptions

- a single product is being developed, with one product owner and one product backlog
- all teams have sprints that progress at the same time
- the teams are cross-functional and full-stack, as in Scrum, meaning they have all the necessary competencies to develop an entire part of the product
- During a sprint, teams work together to create one new, shippable product increment that delivers value to the customer.

One LeSS implementation is therefore intended for the development of a single product. If a company has several different products, each has its own LeSS implementation. Unlike SAFe, LeSS does not take a position on how a company manages its product families.

LeSS emphasizes that it is *not* a separate administrative layer added on top of Scrum, but only a way to apply Scrum principles and artifacts in the simplest possible way on a larger scale.

#### The principles behind LeSS

LeSS is based on a set of familiar agile and lean development principles.

\![\]\[images/5-5.png\]{:height=\"440px\"}

The principles are almost the same as in SAFe, but one of the principles makes a clear difference between the methods, as shown here in a direct quote \[from the documentation\]\[https://less.works/less/framework/introduction.html#LeSSPrinciples\]

*More with less:*

- We don't want more roles because more roles leads to less responsibility to Teams
- We don't want more artifacts because more artifacts leads to a greater distance between Teams and customers
- We don't want more process because that leads to less learning and team ownership of process, instead we want more responsible Teams by having less (fewer) roles
- We want more customer-focused teams building useful products by having fewer artifacts
- We want more team ownership of processes and more meaningful work by having less defined processes.
- *We want more with less*

In other words, by minimizing the number of processes, roles, and artifacts, the aim is for teams to take ownership of product development and communication with customers.

More about the principles in the \[LeSS:in\]\[https://less.works/less/framework/introduction.html\] documentation.

#### LeSS in practice

Let\'s take a closer look at the smaller configuration of LeSS, which is intended for managing approximately 2-8 teams.

The roles are the same as in normal Scrum. There is one product owner, and there may be several Scrum masters depending on the number of teams; one Scrum master can reasonably handle the affairs of about 1-3 teams.

The teams are self-organizing *full-stack feature teams*, meaning that each team focuses on implementing entities that generate value for the customer. The team division *does not follow* the architectural layers of the application, meaning that there are no separate front-end, back-end, and database teams, for example. Each team operates at all levels of the software, implementing the functionality described in the user stories from start to finish at the definition of done level.

The artifacts are also the same as in normal Scrum. There is one product backlog, but each team has its own sprint backlog. All teams work on the same software during the sprint, and *the potentially shippable product increment*, i.e., the completed software extension resulting from the sprint, is the same for all teams.

\![\]\[images/5-6.png\]{:height=\"350px\"}

Unlike normal Scrum, sprint planning is a two-part process.

In the first part, the product owner and representatives of all teams select user stories from the product backlog to be implemented by different teams during the next sprint.

The second part of the planning is team-specific. Each team forms its own sprint backlog, which is used to manage the internal activities of the sprint in the same way as in normal Scrum. However, if necessary, several teams can work in sync during the sprint, using a shared sprint backlog.

\![\]\[images/5-7.png\]{:height="350px" }

The joint achievement of all teams (one shippable product increment) is reviewed together. The retrospective is two-tiered: first, a team-specific retrospective is held as in normal scrum, followed by an overall retrospective reviewing the entire product manufacturing process, with representation from all teams and possibly company management.

\![\]\[images/5-8.png\]{:height=\"350px\"}

#### Other coordination between teams

In addition to the first part of the sprint planning, the sprint review, and the overall retrospective, which are common to all teams, LeSS does not require any other joint meetings for coordination between teams, but states that the teams decide among themselves how coordination will take place.

LeSS provides a set of guidelines and recommendations on this topic:

- Prefer decentralized and informal coordination over centralized coordination
- Emphasize *just talk* and informal networks via communicate in code, cross-team meetings, component mentors, travelers, scouts, and open spaces

The principle *of just talk* emphasizes the importance of direct communication, while *communicate in code* refers to a programming method that facilitates inter-group work, such as shared coding practices and continuous integration. *Scouts* refer to visiting other teams\' daily scrums.

LeSS also mentions scrum of scrums meetings as one possible form of inter-team coordination, but recommends more informal forms of communication.

#### Backlog maintenance

Scrum assumes that approximately 5-10% of sprint work is spent on backlog grooming, the purpose of which is to keep the backlog DEEP. Unlike Scrum, LeSS explicitly draws attention to backlog maintenance and provides guidance on the subject.

The product owner is responsible for the backlog and handles all prioritization. Backlog maintenance (grooming/refinement) should also involve representatives from all teams and various stakeholders of the application. By default, each team is responsible for refining the stories that the team is likely to implement. However, if necessary, teams organize joint backlog grooming sessions to review the refinement of closely related stories or to consider larger application development issues, such as those affecting architecture.

LeSS encourages development teams to communicate as directly as possible with customers or end users.

#### LeSS Huge

If there are more than eight teams, it is recommended to use the *LeSS Huge* version. It is still assumed that only one product is being developed, with one product backlog and one responsible product owner.

However, the backlog is now divided into requirement areas, each of which has *an area product owner* responsible for it. The area product owners form *a product owner team* that manages the product as a whole, operating under the leadership of the product owner for the entire product.

\![\]\[images/5-9.png\]{:height="380px" }

#### LeSS vs SAFe

It is very interesting that both SAFe and LeSS were largely created in Finland and at Nokia. However, due to Nokia\'s organizational structure, the software development practices of Nokia Mobile Phones (NMP) and Nokia Siemens Networks (NSN) were completely different, and SAFe (NMP) and LeSS (NSN) are very different methods despite their similar underlying principles and common origins.

The comparison of the two methods written by consultants Aki Tikka and Ran Nyman, who have worked with both methods, is worth reading \[https://gosei.fi/blog/less-safe-comparison/\].

As mentioned earlier, SAFe is popular among corporate management, but has been heavily criticized by influential advocates of agile development. I myself have never heard any application developers praise SAFe.

I don\'t know if this reflects anything about the long-term effectiveness of the methods, but SAFe\'s home, Nokia Mobile Phones, no longer exists. Nokia (Siemens) Networks, on the other hand, is now Nokia and continues to apply the LeSS method.

### Spotify\'s agile scaling framework

Henrik Kniberg\'s 2012 article \[Scaling Agile @ Spotify\]\[https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf\] told the general public how the Swedish music streaming service Spotify managed to scale its operations in about four years from a few application developers to several hundred software developers working in different cities, while maintaining its startup-like agility.

Spotify\'s \"model\" is fairly simple: it organizes developers *into teams* (squads), which are then divided *into* different tribes. In addition to the team/tribe structure, the model also includes a slightly different division, in which the company\'s people are divided into chapters within the tribes and guilds that cross tribe boundaries:

\![\]\[images/5-17.png\]{:height=\"380px\"}

Although Kniberg\'s description was not intended to encourage *other companies* to imitate Spotify\'s approach, this is what happened.

Let\'s take a closer look at Spotify\'s model, or what it looked like in 2012 and a few years later.

#### Squad, or team

At the core of Spotify\'s model is a team of about 5-10 people, referred to as *a squad*. However, we will refer to them as teams here, as this is probably the most commonly used term for squads in English.

In line with the agile ideal, the teams are *cross-functional*, meaning that they have all the expertise needed to take the software components under their responsibility from the idea stage to the production environment. The teams are completely self-organizing and are free to decide on their own working practices. For example, teams can use Scrum, Kanban, Scrumban, or any other working method internally. The entire team works in the same workspace.

\![\]\[images/5-18.png\]{:height=\"250px\"}

Each team is responsible for a logical part of the application. Often, this part of the application is something that is directly visible to the customer and independently generates value. Spotify\'s teams are therefore definitely *feature teams*, as in the LeSS development model.

A team may be responsible for, for example, Spotify\'s iPhone app, the user\'s playlist, the daily recommendations feature, or billing functions. Some teams, on the other hand, are responsible for things that are used internally by other teams at Spotify, such as ensuring that the backend, or background system, has sufficient performance. Some teams are more responsible for things that are used internally by other Spotify teams, such as ensuring that the backend, or background system, performs well enough.

The following image illustrates how a team is often responsible for a specific piece of functionality provided by the user interface:

\![\]\[images/5-19.png\]{:height="345px" }

The teams have *a product owner* who ensures that the part of the application for which the team is responsible is developed in a direction that makes sense for the whole. The concept of *a scrum master* is not known at Spotify. The teams are assisted by *agile coaches*, who are responsible for the usual duties of scrum masters, from organizing meetings to facilitating retrospectives. The coaches also help with technical issues and, if necessary, provide individual career guidance to team members.

The teams are intended to operate as much like startups as possible and be in direct contact with end users. The teams strive to utilize MVPs and A/B testing, familiar [from the Lean Startup method](osa2.md), to validate the usefulness of new features under development.

The teams have the authority to make business-related decisions fairly autonomously to a certain extent. The rationale behind this is that because Spotify needs to be able to operate as quickly as possible in a challenging market, decision-making must also be fast and even take place at the team level. To function, this requires a strong shared vision of the direction of the application\'s development and clear metrics on where development should be headed. At Spotify, the usability of many things is easy to measure using customer metrics such as the number of daily active users.

The effectiveness and operating conditions of teams are measured every few months. The metrics are

- relationship *with the product owner* and *agile coaches*: is the amount of support sufficient, is the team under too much pressure to develop the product at the expense of code quality
- the extent to which the team and its members are able to influence working methods (*influencing work*)
- is it easy for the team to release their changes into production (*easy to release*); this is a particularly important component, as a frequent release cycle is essential for rapid product development based on A/B testing
- Is the development process used by the team optimal for the team\'s needs (*process fits the team*)?
- Is *the* team\'s *mission*, i.e., the larger goal guiding their work, clear?
- Is there sufficient *support from* the rest of *the organization* in terms of solving both technical and less technical problems?

Team metrics are monitored so that any problems can be addressed with the most appropriate measures.

\![\]\[images/5-24.png\]{:height="245px" }

#### Tribe

Ideally, each team should be as independent as possible, able to operate without depending on other teams. However, there is inevitably interdependence between teams, as well as synergy. Teams working on the same topics are divided into tribes:

\![\]\[images/5-20.png\]{:height="380px" }

Spotify\'s teams work in the same space. All teams within a tribe are also intended to work close to each other, in the same building or even on the same floor. This enables easy and informal interaction between teams within the tribe.

A tribe consists of a maximum of ten teams, as the size of tribes is kept to a maximum of 100 people. The number 100 is based on the so-called \[Dunbar number\]\[https://en.wikipedia.org/wiki/Dunbar's_number\], which is a theoretical cognitive limit on the number of people with whom the average individual can maintain stable social relationships. The idea is that tribe members know each other more or less.

Kniberg also justifies the size of the tribe as follows: *When groups get too big, we start seeing more things like restrictive rules, bureaucracy, politics, extra layers of management, and other waste.* In other words, by keeping the size of the tribe roughly within Dunbar\'s number, it is still possible to manage it quite easily, without an unnecessarily complex and multi-layered organization.

The tribes hold regular meetings where the teams present their achievements and the direction of their development to each other.

Teams that work on related topics and need to communicate frequently are best placed in the same tribe. This facilitates communication and information exchange between teams, as by definition all teams in the tribe work close to each other, in the same building and preferably even on the same floor.

#### Chapter

Dividing teams into as autonomous units as possible is beneficial in that it allows each team to progress quickly toward its business objectives. The downside of autonomy, however, is that the same problems may have to be solved over and over again within different teams, and what one team learns is not automatically shared with other teams.

To eliminate this threat, Spotify has launched chapters consisting of members of a single tribe who have similar areas of expertise. For example, testers from different teams within a tribe could form their own chapter, as could all front-end developers:

\![\]\[images/5-21.png\]{:height="320px" }

The divisions organize more or less regular meetings where division members discuss problems encountered by different teams and solutions developed in different areas. This allows, for example, good testing practices developed within one team to be spread to other teams. Each section is led by *a chapter lead*, i.e., a senior member of the section who is also involved in a team, so it *is not* a leader dedicated to the section.

Teams and divisions thus serve the same overall goal, but in slightly different dimensions. The product owner is responsible for answering the question \"*what to build next*,\" i.e., guiding the direction of product development. The division, especially the division *lead* (a term for which I cannot think of a good English equivalent), aims to provide support for the question \"how to build it well.\" The division also supports the professional development of its members.

\![\]\[images/5-23.png\]{:height=\"280px\"}

#### Guild

Divisions are made up of people with the same skills within a *tribe*. A guild is like a tribe, but it\'s a group of people with the same skills or interests that works across tribe boundaries. For example, the testers\' guild consists of members of all testing divisions, but other interested parties, such as web developers, can also participate in events organized by the guild.

\![\]\[images/5-22.png\]{:height="360px" }

#### Application and criticism of the Spotify model

The Spotify model has begun to be applied in many other companies. According to Henrik Kniberg, who documented Spotify\'s scaling method and presented it to the world \[https://blog.crisp.se/2015/06/07/henrikkniberg/no-i-didnt-invent-the-spotify-model\], Spotify\'s model was not intended to be applied elsewhere, and according to him, there is no such thing as a Spotify model, as the way application development is done at Spotify is constantly changing, adapting to the needs of a growing company.

Spotify has since added a few new organizational components (trio and alliance) to its model, which help manage the direction of development in the big picture. Spotify also has a few cross-functional roles, such as *chief architect*, who is responsible for the architecture of the entire product.

Spotify\'s model has been subject to \[harsh\]\[https://www.linkedin.com/pulse/spotify-sucks-erwin-verweij/\] \[criticism\]\[https://www.jeremiahlee.com/posts/failed-squad-goals/\] on the internet. It is clear that Spotify has encountered many difficulties as the company has grown rapidly, and this has led to changes in the Spotify model (if any model can even be said to exist) and has clearly shaped the company\'s operations towards \[a more traditional, rigid corporation\]\[https://www.youtube.com/watch?v=ar4lq1l8pAc&t=2462s&ab_channel=QAgileQualityinAgile\].

When applying the Spotify model, it is important to keep in mind that it is not intended to be a static structure that can be copied verbatim into another context. Many aspects of the Spotify model are simply new names for old familiar concepts that can be found directly in, for example, Scrum, Lean, SAFe, or LeSS, and it may be wiser to turn directly to the literature on these methods. The popularity of the Spotify model is partly thought to be due to the halo effect.

The popularity of the Spotify model is partly thought to be due to the halo effect\[https://fi.wikipedia.org/wiki/S%C3%A4dekeh%C3%A4vaikutus\], i.e., the positive image of Spotify as a product may have been partly behind the fact that companies have also started to copy the company\'s way of operating without any major justification. This is despite the fact that there is nothing in the operating environment of these companies that resembles Spotify\'s operating environment.

The Spotify model, or at least the terminology it uses, has also been adopted by many Finnish companies, including \[Smartly\]\[https://www.smartly.io/\], which applies certain features of the model with considerable success.

If you are interested in the Spotify model, be sure to check out \[this\]\[https://www.youtube.com/watch?v=Yvfz4HGtoPc&ab_channel=HenrikKniberg\] and \[this\]\[https://www.youtube.com/watch?v=vOt4BbWLWQw&ab_channel=HenrikKniberg\] YouTube video on the subject. If you also want to take a peek into Spotify\'s somewhat messy reality, you should also check out Joakim Sundén\'s presentation \[You can do better than the Spotify Model\]\[https://www.youtube.com/watch?v=gL6ou9UwqUQ&ab_channel=PreziConferenceTeam\].

## The use and benefits of agile methods in light of research

At the end of the course, we will take a quick look at research related to the use and benefits of agile methods.

### How widely are agile methods used?

There are quite a few different surveys on the Internet that map the prevalence of agile methods.

Max Steinmetz\'s \[2018 article\]\[https://www.targetprocess.com/blog/agile-statistics/\] summarizes several different surveys that provide various figures on how widely agile methods are used in software projects. The lowest percentage is found in a survey by the Project Management Institute \[https://www.pmi.org/-/media/pmi/documents/public/pdf/learning/thought-leadership/pulse/pulse-of-the-profession-2018.pdf\], which states that 46% of software projects are carried out using agile methods. A survey of over 100,000 respondents by Stack Overflow found that 85.9% of respondents worked with agile methods.

A Google search reveals many other surveys, and in all of them, the rate of agility use falls roughly between these two percentages, usually well above fifty percent.

The majority of surveys on the internet do not meet the criteria for scientific research: their samples are not necessarily representative of the entire population, and their research methodology may be questionable. Some of the researchers are commercial operators who may have an interest in publishing results that are favorable to themselves.

Some scientific research has also been conducted on the subject. According to an article published in 2012 by researchers at the University of Oulu \[Survey on Agile and Lean usage in Finnish software industry\]\[http://esem.cs.lth.se/industry_public/Rodriguezetal_ESEM2012_IndustryTrack_1_0.pdf\], 58% of the 200 Finnish companies that participated in the study reported using agile or lean methods in software development.

A study conducted in Brazil, Finland, and New Zealand and published in late 2016 \[Adoption and Suitability of Software Development Methods and Practices\]\[https://ieeexplore.ieee.org/document/7890614/\] arrived at the following figures for the use of different methods

- Scrum 71.2%
- Kanban 49.5%
- Lean 39.7%
- Waterfall 35.3%

According to a \[study conducted by the University of Helsinki and Nitor at the end of 2018\[https://www.nitor.com/fi/uutiset-ja-blogi/nitor-ja-helsingin-yliopisto-selvittivat-suomalaisyritykset-ketteryyden-edellakavijoita\], only 5.9% of respondents reported that agile methods are not used at all in their company:

\![\]\[images/5-9a.png\]{:height="300px" }

As the figures show, agile development is taking over the field. The same trend can be seen in software projects under the US government, where, after a slow start, \[agile has risen\]\[https://www2.deloitte.com/insights/us/en/industry/public-sector/agile-in-government-by-the-numbers.html\] to a dominant position.

\![\]\[images/5-10.png\]{:height=\"300px\"}

### State of Agile report

The State of Agile report, which has been published for 15 years, provides a wealth of interesting statistical information on the use of agile methods. According to the report, Scrum dominates the field of agile methods.

\![\]\[images/5-11-2021.png\]{:height="300px" }

Scrum and its derivatives are used by 82% of respondents. Extreme programming (XP) accounts for a marginal 1%.

The share of agile project management practices was as follows:

\![\]\[images/5-12-2021.png\]{:height="400px" }

As in previous years, *daily standup* meetings are at the top of the list. 63% of respondents report that they use *short iterations*. Unfortunately, the survey does not specify how long *\"short\"* is, but the answer is somewhat surprising in any case. I would assume that *short iterations* are a prerequisite for the use of agile methods. If the iterations are long, e.g., several months, it is no longer possible to talk about agility, and [the](osa1.md#scrumin-ongelmia) notorious [ScrumBut](osa1.md#scrumin-ongelmia) may even be in use.

When it comes to agile technical practices, the situation looks like this:

\![\]\[images/5-13-2020.png\]{:height="400px" }

This list is also somewhat surprising, as one might assume that continuous integration would be used almost everywhere today, but only 55% report using it.

In light of the data from this survey, it seems that many people really need to step up their game when it comes to technical practices. In Chapter 3 \[Scientific Evidence\]\[part3/#scientific-evidence\], a large-scale study clearly showed how technical practices (such as automated testing, continuous integration, and continuous deployment) have a positive impact on both well-being at work and organizational efficiency.

The same study also showed that, in addition to certain technical practices, organizational efficiency is improved by, for example, working in small batches and limiting work in process. However, 37% of those participating in the State of Agile study *do not use* short iterations, and 49% *do not release* new versions of their applications frequently, meaning that the potential benefits of agility are clearly not being fully realized in nearly all organizations.

### Does agile software development work?

The Standish Group \[https://www.standishgroup.com/\], which conducts research on software project management methods, has been publishing *the Chaos Report* since 1995, which maps the success rate of software projects.

The report divides projects into three groups based on their success:

- *successful*: the project is *successful* if it is completed on schedule, within budget, and within the planned scope
- *challenged*: the success of the project is at *risk* if one of the components of success---*schedule, budget, or scope*---has not been achieved; for example, if the application has been completed on schedule and within budget, but not all of the planned functionality has been implemented
- *Failed*: the project has *failed* if it is not completed or never put into use.

In the 2018 report, the success rate of projects is as follows:

\![\]\[images/5-14.png\]{:height="150px" }

The size of the project is very important in terms of success. If the size of the project is taken into account in the review, the success rate is as follows:

\![\]\[images/5-15.png\]{:height="220px" }

Agile methods seem to work better than the waterfall model regardless of project size, but the difference increases as the size of the projects increases.

The \[State of Agile\]\[https://www.stateofagile.com\] report breaks down the benefits achieved through agility in more detail:

\![\]\[images/5-16-2021.png\]{:height="400px" }

### Conclusions

There is evidence that agile methods work. However, the evidence is not entirely indisputable, as all of the studies referred to above are surveys in which the concepts have not necessarily been properly defined (e.g., what is meant by agility or project success) and the respondents do not usually represent the entire population evenly. Furthermore, not all survey authors are impartial with regard to the methods, e.g. CollabNet/VersionOne \[https://www.collab.net/\], which produces the State of Agile report, is a company that produces agile project management tools. The validity of the studies is therefore somewhat questionable.

There has also been a great deal of academic research on agile methods, some of which was mentioned above. The systematicity, quality, and generalizability of academic research also varies. The study referenced in section three \[Scientific evidence\]\[osa3/#tieteellinen-evidenssi\] is probably the most comprehensive study currently available that analyzes the benefits of agile and lean principles.

There are also a large number of studies that focus on measuring the benefits of individual techniques, such as TDD, pair programming, or continuous integration. However, there are too many variables in software production to be able to measure the impact of any single factor empirically with complete certainty. The methods are always applied by people, and the measurement results for one software team may not necessarily be generalizable to other circumstances.

In almost all studies measuring the benefits of a single technique, such as TDD, the problem is that they do not measure the long-term benefits of the techniques, such as software maintenance and further development. Both common sense and many studies have shown that the majority of software costs are incurred during the maintenance phase, i.e., after the release of the first version. For example, \[this\]\[https://www.researchgate.net/publication/221408114_Distribution_of_Cost_over_the_Application_Lifecycle\_-\_a_Multi-case_Study\] study concludes that as much as 79% of software costs are incurred during the maintenance phase. It is possible that a particular technology may produce short-term benefits but actually reduce productivity in the long term.

\<\<\