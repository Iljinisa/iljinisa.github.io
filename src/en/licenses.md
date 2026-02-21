>\>\>

This section has dealt with software design and implementation. Next, we will look at where licensing plays a significant role in software design.

This section was written by \[Akira Taguchi\]\[https://github.com/akirataguchi115\].

Let\'s imagine that you are working on a mini-project to create a graphical calculator. You publish your code on GitHub, and someone contacts you. The person praises your work and would like to use it as the default calculator in their operating system distribution, Cubbl. However, they tell you that this is not possible until you have licensed your program with a suitable license. What do you do?

### The basics of software licenses

A software license is a legal tool that regulates the use and redistribution of software. For software developers, this often takes the form of a LICENSE file published alongside the source code. The content of this LICENSE file determines the selected software license. An example of Poetry\'s software license: \[https://github.com/python-poetry/poetry/blob/master/LICENSE\]\[https://github.com/python-poetry/poetry/blob/master/LICENSE\].

The software license is selected according to the intended use. The following website is a good starting point for finding the right software license for your purpose: \[https://choosealicense.com/\]\[https://choosealicense.com/\]. You can copy the desired license from the website to the clipboard and use it to fill in the contents of the repository\'s LICENSE file (see the Poetry example).

Although the Appendix subpage of the Choose a License website (\[https://choosealicense.com/appendix/\]\[https://choosealicense.com/appendix/\]) provides a good comparison of licenses, we will now briefly go through some of the more commonly used licenses:

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  License                              Terms                                                                                                                      Type
  ------------------------------------ -------------------------------------------------------------------------------------------------------------------------- ----------------------
  MIT License                          The license text must remain in the source code, and closed versions may be created, among other things.                   Permissive

  GNU General Public License, or GPL   The source code must be published under the same license, and closed versions may not be created.                          Protective

  GPL 2.0                              Same as GPL, but with an emphasis on not creating closed versions, even for other legal obligations                        Protective

  GPL 3.0                              Same as GPLv2, but with an emphasis that even the hardware must not restrict the obligations of the GPL license.           Protective

  Mozilla Public License 2.0           Same as GPL, except that if the project grows significantly large, the license can be changed, e.g. Chromium -\> Chrome.   Permissive

  The Unlicense                        Do whatever you want                                                                                                       Open

  \- (No license)                      You own all rights                                                                                                         Privately owned

  CC BY                                The license text must remain in the work. Can be given to non-software, e.g. Course materials                              Permissive

  CC BY NC                             Same as CC BY, but commercial use is prohibited (NC, No-Commercial)                                                        Permissive
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Practice

First, let\'s see what licenses other software uses.

What license does Code Climate use: \[https://github.com/codeclimate/codeclimate/\]\[https://github.com/codeclimate/codeclimate/\]?

Answer

GNU Affero General Public License v3.0

What license does Visual Studio Code use: \[https://github.com/microsoft/vscode/\]\[https://github.com/microsoft/vscode/\]?

Answer

    MIT License

Next, let\'s practice choosing a license for a mini-project.

I want my mini-project to be usable and shareable under any terms. I choose the

MIT license

The Unlicense

Answer

b.  The Unlicense

If my mini-project is used in a larger software program, I want the larger project to be able to use a different license than the original license of the mini-project, if it so desires. I choose

MIT License

Mozilla Public License 2.0

Answer

b.  Mozilla Public License 2.0

Now you should be able to license your mini-project and future software projects. If anything is unclear, ping \@mynamabitchiro (Akira Taguchi) on the OhTu Discord server or wherever you can find Akira on the internet.

### Free or open

There is a big difference between free software and open source code. The following video explains software freedom and the Software Freedom Conservancy, which fights for it:

If you are interested in software freedom, feel free to send Akira a message!

\<\<\