>\>\>

## Typos in the material

Make [a correction suggestion](osa0.md#typoja-materiaalissa) by editing \[this\]\[{{site.repo_url}}/blob/{{site.repo_branch}}/{{page.path}}\] file on GitHub.

**Note:** Later on this page, \[Geckodriver\]\[chromedriver_installation_instructions/#geckodriver-installation-instructions\] may be easier to install than ChromeDriver, which is presented first. However, the order of presentation remains the same, as the Geckodriver instructions were only added on Friday, November 10, and its functionality on Windows has not yet been verified.

## ChromeDriver installation instructions

If you do not have the Chrome or Chromium browser installed on your computer, start by installing the latest version \[here\]\[https://www.google.com/chrome/\]. Chromium \[https://www.chromium.org/chromium-projects/\], the open source browser on which Google Chrome is based, is also suitable for use with ChromeDriver. Then download the chromedriver binary that is compatible with your operating system and Chrome version \[here\]\[https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json\]. Extract the downloaded package and follow the instructions for your operating system.

*Note:* choose the version of ChromeDriver that is compatible with the version of Chrome you are using!

The list behind the link is a bit cryptic. For example, in my case, the Chrome version is *Version 118.0.5993.117 (Official Build) (arm64)*, so the correct download link is

\![\]\[images/lh3-chromedriver2.png\]{:height="400px" }

### macOS and Linux

In order for the chromedriver command to work, the ChromeDriver binary must be moved to a directory whose path is in the operating system\'s PATH environment variable. The easiest way is to move the binary to the /usr/local/bin directory. This can be done by navigating to the directory where the chromedriver binary is downloaded using the command line and executing the command `mv chromedriver /usr/local/bin`/. After this, grant the binary execution rights with the command `chmod +x /usr/local/bin/chromedriver`.

**NOTE:** If you do not have permissions to move the binary to the /usr/local/bin directory, navigate to your home directory with the command `cd `and create a directory *bin* (if it does not already exist) with the command `mkdir bin`. Now go to the directory where the chromedriver binary was downloaded and move it to the directory you created with the command `mv chromedriver $HOME/bin`/. Then give the binary execution permissions with the command `chmod +x $HOME/bin/chromedriver`. Finally, add the \$HOME/bin directory to the PATH environment variable with the command `touch $HOME/.bashrc && echo "export PATH=\"\$HOME/bin:\$PATH\"" >> $HOME/.bashrc`.

**NOTE:** Macs may use the Zsh command interpreter by default, in which case the above changes should be made to the .zshrc file instead of the .bashrc file.

Restart the terminal and verify that the installation was successful by running the command:

    chromedriver --version

**NOTE:** As a Mac user, you may encounter a situation where ChromeDriver fails to start because the computer does not recognize ChromeDriver as a program from a trusted source. This problem can be fixed by following \[these instructions\]\[https://timonweb.com/misc/fixing-error-chromedriver-cannot-be-opened-because-the-developer-cannot-be-verified-unable-to-launch-the-chrome-browser-on-mac-os/\].

#### ArchLinux

In the ArchLinux distribution, the \[`chromium`\]\[https://archlinux.org/packages/extra/x86_64/chromium/\] package comes with ChromeDriver included. If, on the other hand, you have \[`google-chrome`\]\[https://aur.archlinux.org/packages/google-chrome\] installed from the Arch User Repositories, you can get ChromeDriver from the \[`chromedriver`\]\[https://aur.archlinux.org/packages/chromedriver\] package.

### Windows

In order for the chromedriver command to work, the chromedriver binary must be moved to a directory whose path is in the operating system\'s PATH environment variable. First, move the downloaded chromedriver binary to the directory of your choice (e.g., *C:Files* is one potential option). Then add the directory path (i.e., *just* the directory path, not the file name after the path) to the PATH environment variable by following \[these\]\[https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/\] instructions.

The system will probably need to be restarted for `the PATH `environment variable to be updated. You can check the status of the PATH environment variable in the Powershell terminal by running the command `$env:PATH`, or in the Command Prompt terminal with the command `echo %PATH%`, and checking if the path you just added is in the semicolon-separated list. If your path is not found, a restart is necessary.

If necessary, restart the entire system or just the terminal (PowerShell) and verify that the installation was successful by running the command:

    chromedriver --version

### Possible problems

**As a Windows 10 / WSL2 user**, you may encounter the following error message:

    Suite setup failed:
    WebDriverException: Message: unknown error: Chrome failed to start: crashed.
      (unknown error: DevToolsActivePort file doesn't exist)
      (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)

\[This\]\[https://www.gregbrisebois.com/posts/chromedriver-in-wsl2/\] guide may provide a solution.

An additional option for WSL users is to run our web application server in poetry on the WSL side and run selenium/robot tests in poetry on the Windows PowerShell side:

- Install Python for Windows if it is not already installed
- Install Poetry for Windows by running the following command in PowerShell

<!-- -->

    (Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -

- After installation, add the path provided, e.g., `C:\Users\<user>\AppData\Roaming\Python\Scripts, `to the system PATH variable as described in [the ChromeDriver instructions](../chromedriver_asennusohjeet.md) above
- Clone the project to the Windows file system (found in the WSL system under the /mnt directory at the root of the file system), e.g., to the desktop `/mnt/c/Users/<user>/Desktop`
- Install dependencies as usual in Poetry by running `poetry install `at the root of the newly cloned web-login directory
- Install ChromeDriver for Windows as described in [the instructions](../chromedriver_asennusohjeet.md) above
- Run Selenium/Robot tests from the root of the web-login directory with the command `poetry run robot .\src\tests\`

## Geckodriver installation instructions

To use Geckodriver, you must have \[Firefox\]\[https://www.mozilla.org/firefox/\] installed on your computer.

Download the geckodriver binary suitable for your operating system \[here\]\[https://github.com/mozilla/geckodriver/releases/\] from *the assets* section. Unzip the downloaded package and follow the instructions for your operating system.

### Linux

In order for the geckodriver command to work, the binary file must be moved to a directory whose path is in the operating system\'s PATH environment variable. The easiest way is to move the binary to the /usr/local/bin directory. This can be done by navigating to the directory where the *geckodriver* binary was downloaded and executing the command `mv geckodriver `/usr/local/bin/. Then, give the binary execution permissions with the command `chmod +x /usr/local/bin/geckodriver`.

**NOTE:** If you do not have permissions to move the binary to the /usr/local/bin directory, navigate to your home directory with the command `cd `and create a directory *bin* (if it does not already exist) with the command `mkdir bin`. Now go to the directory where the cgeckodriver binary was downloaded and move it to the directory you created with the command `mv geckodriver $HOME/bin`/. Then give the binary execution rights with the command `chmod +x $HOME/bin/geckodriver`. Finally, add the \$HOME/bin directory to the PATH environment variable with the command `touch $HOME/.bashrc && echo "export PATH=\"\$HOME/bin:\$PATH\"" >> $HOME/.bashrc`.

**NOTE:** Macs may use the Zsh command interpreter by default, in which case the above changes should be made to the .zshrc file instead of the .bashrc file.

Restart the terminal and verify that the installation was successful by running the command:

    geckodriver --version

### Windows

Follow the ChromeDriver instructions as applicable.

### NOTE

When using Geckodriver, the contents of the `resource.robot `file need to be modified slightly:

    *** Keywords ***
    Open And Configure Browser
        # the following line has been removed from comments
        ${options}  Evaluate  sys.modules['selenium.webdriver'].FirefoxOptions()  sys
        # the following line is commented out
        # ${options}  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys 
        Call Method    ${options}    add_argument    --no-sandbox
        # the following line has been commented out for now
        # Call Method  ${options}  add_argument  --headless
        Open Browser  browser=chrome  options=${options}
        Set Selenium Speed  ${DELAY}

In other words, the line containing *FirefoxOptions* has been removed from the comments and the line containing *ChromeOptions* has been commented out.

\<\<\