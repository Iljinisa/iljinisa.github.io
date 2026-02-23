## Selenium troubleshooting

Some people have had problems with Selenium. Below are a few ways to solve these problems. If you encounter a problem and solve it in a way not mentioned below, add the instructions to the document by editing \[this\]\[https://github.com/ohjelmistotuotanto-jyu/ohjelmistotuotanto-jyu.github.io/blob/master/selenium_troubleshooting.md\].

### Method 1: HtmlUnit driver

\[HtmlUnitDriver\]\[https://github.com/SeleniumHQ/selenium/wiki/HtmlUnitDriver\] is a so-called \[headless\]\[https://en.wikipedia.org/wiki/Headless_browser\] browser, meaning it has no graphical user interface. If you want to know which page the browser is on, you will need to print the page source code to the console using the command System.out.println(driver.getPageSource());.

Enable HtmlUnitDriver as follows:

    ...
    import org.openqa.selenium.htmlunit.HtmlUnitDriver;

    public class Tester {

        public static void main(String[] args) {
            WebDriver driver = new HtmlUnitDriver();
            driver.get("http://localhost:4567");
            
            // print the page to the console
            System.out.println(driver.getPageSource());
            
            WebElement element = driver.findElement(By.linkText("login"));
            element.click();

            // print the page to the console
            System.out.println(driver.getPageSource());
            
            // ...

            driver.quit();
        }
        
    }

The advantage of HtmlUnitDriver is its speed. You can also use it in tests. Debugging tests becomes more difficult, but the tests run quickly. When debugging tests, the best practice is probably to print the page\'s HTML code to the console.

#### Method 2: Downloading chromedriver

When I tried the task myself in November 2020 after a year\'s break on my new computer, I encountered the following error message

    Exception in thread "main" java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html
            at com.google.common.base.Preconditions.checkState(Preconditions.java:847)
            at org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:125)
            at org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)
            at org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:156)
            at org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:346)
            at org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:91)
            at org.openqa.selenium.chrome.ChromeDriver.<init>(ChromeDriver.java:123)
            at ohtu.Tester.main(Tester.java:11)

The problem was solved with the instructions \[here\]\[https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver#quick-installation\] (on my own Mac). The second set of instructions should work for TKT\'s freshman laptops, but they require administrator rights.

### Method 3: Downloading geckodriver (tested in fall 2019)

Download and install geckodriver \[according to the first answer here\]\[https://askubuntu.com/questions/870530/how-to-install-geckodriver-in-ubuntu\]

Replace step 4 of the instructions with this:

*sudo mv geckodriver /usr/local/bin/*

Enable *FirefoxDriver* in the code:

    import org.openqa.selenium.firefox.FirefoxDriver;

    /// ...

        WebDriver driver = new FirefoxDriver();
        final String URL = "http://localhost:4567";
        driver.get(URL);

### Method 4: WebDriverManager

Add the *webdrivermanager* dependency to the project:

    dependencies {
        // ...
        compile ("io.github.bonigarcia:webdrivermanager:1.6.2") {
            exclude group: 'org.seleniumhq.selenium'
        }
    }

\[WebDriverManager\]\[https://github.com/bonigarcia/webdrivermanager\] attempts to automatically configure the browser driver being used. It is called before creating the selected driver, for example, in the case of ChromeDriver:

    ...
    import io.github.bonigarcia.wdm.ChromeDriverManager;
    ...

    ChromeDriverManager.getInstance().setup();
    driver = new ChromeDriver();

To use it in cucumber tests, the driver initialization can be added to a function annotated with \@Before in the same way as in jUnit tests:

    ...
    import io.github.bonigarcia.wdm.ChromeDriverManager;
    ...

    @Before
    public void setUp() {
        ChromeDriverManager.getInstance().setup();
        driver = new ChromeDriver();
    }

### Method 5: FirefoxDriver

Try using FirefoxDriver instead of Chrome.

#### Option 1 (Tested on Linux)

Selenium 2.41.0, which is the default for the project, only supports Firefox version 28. You can find it \[here\]\[https://ftp.mozilla.org/pub/firefox/releases/28.0/\] by clicking on your architecture. Extract the package and save the path.

#### Option 2 (Tested on macOS)

Update the selenium specified in the *build.gradle* file to a newer version:

    project.ext {
        cucumberVersion = '1.2.5'
        seleniumVersion = '2.52.0'
    }

and update *spark-core* to a newer version:

    dependencies {
        // change the version number here
        compile group: 'com.sparkjava', name: 'spark-core', version: '2.5.5'
        // add the following line
        compile group: 'org.slf4j', name: 'slf4j-simple', version: '1.7.25'
        // ...
    }

Selenium 2.52.0 supports slightly newer versions of Firefox, such as version 45.8.0. It can be found \[here\]\[https://ftp.mozilla.org/pub/firefox/releases/45.8.0esr/\] when you click on your own architecture. Extract the package and save the path.

### Both options continue from here

Configure as follows:

    // ...
    import org.openqa.selenium.firefox.FirefoxBinary;
    import org.openqa.selenium.firefox.FirefoxDriver;
    import org.openqa.selenium.firefox.FirefoxProfile;

    public class Tester {
        public static void main(String[] args) {
            File pathBinary = new File("path/where/you/extracted/firefox/firefox.exe");
            FirefoxBinary firefoxBinary = new FirefoxBinary(pathBinary);
            FirefoxProfile firefoxProfile = new FirefoxProfile();
            WebDriver driver = new FirefoxDriver(firefoxBinary, firefoxProfile);
        } 
    }   

Define FirefoxDriver in a similar way in your tests.

### Method 6

Under Linux, the chrome binary called by ChromeDriver may, by default, want to use the wrong platform\'s background engine to draw its user interface, and does not provide particularly helpful error output to the console.

    $ ./gradlew browse

    > Task :browse
    Starting ChromeDriver 86.0.4240.75 (c69c33933bfc72a159aceb4aeca939eb0087416c-refs/branch-heads/4240@{#1149}) on port XYZ
    ...
    Exception in thread "main" org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.
      (unknown error: DevToolsActivePort file doesn't exist)
      (The process started from chrome location /usr/lib64/chromium-browser/chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
    ...

The troubleshooting may reveal the following, for example:

    $ /usr/lib64/chromium-browser/chrome
    [1661360:1661360:1116/191311.250169:ERROR:wayland_connection.cc(72)] Failed to connect to Wayland display
    [1661360:1661360:1116/191311.250227:FATAL:ozone_platform_wayland.cc(191)] Failed to initialize Wayland platform
    (core dumped)  /usr/lib64/chromium-browser/chrome

The browser has attempted to render itself using the Wayland protocol, even though we are in an X11 session!

You can work around this problem by modifying the program code as follows, for example

    ...
    import org.openqa.selenium.chrome.ChromeOptions;
    ...
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--ozone-platform=x11");
            //WebDriver driver = new ChromeDriver();
            WebDriver driver = new ChromeDriver(options);
