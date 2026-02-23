## Background

Undergraduate students Riku and Ville need a system that helps them keep the source references used in writing their bachelor\'s theses in order and in a suitable format for their theses. Like all savvy computer science students, Riku and Ville are writing their theses in \[LaTeX\]\[https://www.latex-project.org/\].

When using LaTeX, the text looks like this:

    \documentclass{article}
    \usepackage[utf8]{inputenc}

    \title{Example}
    \author{Matti Luukkainen}
    \date{November 2022}

    \begin{document}

    \maketitle

    \section{Introduction}

    Enhanced apprenticeship learning \cite{VPL11} (Engl. eXtreme Apprenticeship, XA) is
    originally developed for teaching the basics of programming as an extension of apprenticeship learning \cite{CBH91}
    . In addition to programming skills, the XA method aims to encourage 
    to the creation of high-quality code \cite{Martin09}. 

    \bibliographystyle{plain} 
    \bibliography{references}

    \end{document}

The text therefore contains LaTeX commands beginning with a slash that affect the formatting. The critical command in the software created in the mini-project is which is used to mark source references.

In LaTeX documents, source references are written in the so-called BibTeX format. The source references in the above document look like this: \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin09} \\bibitem{Martin0

    @inproceedings{VPL11,
        author = {Vihavainen, Arto and Paksula, Matti and Luukkainen, Matti},
        title = {Extreme Apprenticeship Method in Teaching Programming for Beginners.},
        year = {2011},
        booktitle = {SIGCSE '11: Proceedings of the 42nd SIGCSE technical symposium on Computer science education},
    }

    @article{CBH91,
        author = {Allan Collins and John Seely Brown and Ann Holum},
        title = {Cognitive apprenticeship: making thinking visible},
        journal = {American Educator},
        year = {1991},
        volume = {6},
        pages = {38–46}
    }

    @book{Martin09,
        author = {Martin, Robert},
        title = {Clean Code: A Handbook of Agile Software Craftsmanship},
        year = {2008},
        publisher = {Prentice Hall},
    }

The first \"field\" of each reference is a key (e.g., *VPL11* at the top), which is used to generate the reference from the LaTeX file.

LaTeX supports several different types of references, such as *inproceedings, article*, and *book* in the example. Each type of reference has a set of different possible fields, such as *author, title,* and *year*.

The result \"translated\" with LaTeX looks like this:

\![\]\[images/latex.png\]

We can see that the text ends correctly with source references, and it is precisely the management of source references that the software now being implemented is intended to facilitate.

LaTeX can be written with a text editor, and the document can be converted to PDF format from the command line once \[LaTeX\]\[https://www.latex-project.org/\] is installed on the computer. Nowadays, however, it is very common to create LaTeX documents directly online using the \[Overleaf\]\[https://www.overleaf.com/\] service.

The above document can be viewed in the Overleaf project \[here\]\[https://www.overleaf.com/read/pxspwqwfzgrj\].

More about BibTeX, for example, in the following:

- <https://en.wikipedia.org/wiki/BibTeX>
- <https://www.overleaf.com/learn/latex/Bibliography_management_with_bibtex>

An example of a slightly more extensive BibTeX file can be found [here](bibtex.md).

## System description

Riku and Ville want a system that allows them to manage references easily. The program must have at least the following features: - References must be added to the system in a user-friendly format, for example using a form. - The references in the system must be generated into a BibTeX file suitable for LaTeX documents. - It must also be possible to list references in a format that is more suitable for humans. - It should be possible to limit reference lists in some way, e.g., by author, year, or publication. - It would be good if each reference could be assigned a set of categories or tags that would enable more precise searches. - It\'s fine if it\'s an application that runs on a single computer, but it would be better if it were online and accessible from anywhere. - If it only works on a local computer, it should be possible to synchronize saved references between different computers. - It would be great if, for example, you could provide a link to the ACM digital library, e.g. \[like this\]\[https://dl.acm.org/doi/10.1145/2380552.2380613\], the software would crawl the reference information from there. - Other databases such as \[Google Scholar\]\[https://scholar.google.com/\] could also be supported. - An even better feature would be data retrieval based on the \[DOI\]\[https://www.doi.org/\] identifier. - It is worth remembering that LaTeX allows for all kinds of fields for different reference types, but many of these fields are completely unnecessary, at least for bachelor\'s thesis writers.

Requirements are specified with the customer in weekly meetings.