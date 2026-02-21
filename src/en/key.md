>\>\>

- Create an encryption key by entering the command `ssh-keygen `in the command line.
  - You can answer all questions by pressing Enter
- Two encryption keys will be generated, one secret and one public. They will be placed in the .ssh directory under your home directory
- Go to the directory and enter the command `ssh-add`
- View the contents of the directory
- The file *id_rsa.pub* contains the public key, which should be copied to GitHub to enable key-based authentication
- You can view the contents of the file with the command `cat id_rsa.pub`
- Go to the GitHub settings page by clicking on the symbol in the upper right corner and selecting Settings
- Select SSH and GPG keys from the settings

\![\]\[images/ssh0.png\]

- Create a new SSH key (New SSH key).
- Give the key a title (e.g., TKT) and copy the contents of the id_rsa.pub file into the key field:

\![\]\[images/ssh1.png\]

\<\<\