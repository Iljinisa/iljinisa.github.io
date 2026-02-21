>\>\>

## no root

When running the `poetry install `command, you may encounter the following error message:

    The current project could not be installed: [Errno 2] No such file or directory: '/mydir/README.md'
    If you do not want to install the current project, use --no-root

The error may also appear in the following format.

    The current project could not be installed: No file/folder found for package tennis
    If you do not want to install the current project, use --no-root

The error message actually tells you how to solve the problem, i.e., enter the command `poetry install --no-root`

## urllib3 or chardet doesn\'t match a supported

In some situations, poetry breaks down completely and every command causes the following error:

    /usr/lib/python3/dist-packages/requests/init.py:89: RequestsDependencyWarning: urllib3 (1.26.12) or chardet (3.0.4) doesn't match a supported version!
    warnings.warn("urllib3 ({}) or chardet ({}) doesn't match a supported "

The problem can be fixed with the command

    pip install requests --upgrade

## Keyring

If running the *poetry install* command prompts for a keyring password or causes an error

    Failed to open keyring: org.freedesktop.DBus.Error.ServiceUnknown: The name :1.165

run the following in the terminal

    export PYTHON_KEYRING_BACKEND=keyring.backends.fail.Keyring

and then run the *poetry install* command again.

You can add this line to your .bashrc (or similar) file so that you don\'t have to run it at the beginning of every terminal session.

## More instructions

A few additional instructions can be found [in the Poetry manual](poetry.md#ratkaisuja-yleisiin-ongelmiin)

\<\<\