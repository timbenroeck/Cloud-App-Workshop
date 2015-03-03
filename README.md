<a name="welcome" />
# Cloud and Application development Workshop #
Learn how to leverage the power of the cloud to build mobile and gaming applications.  

<a name="contact info" />
## Contact Information ##
- Tim: tim.benroeck@microsoft.com
- Phil: phaelion@microsoft.com

<a name="share-pictures" />
## Share your pictures ##
Please upload any pictures you took during the workshop to the [MySkills4Africa - Luanda - Cloud-App-Workshop OneDrive](http://1drv.ms/18qsR9u)

<a name="pre-requisites" />
## Pre-Requisites ##
- **A Microsoft account:** A Microsoft account is required to access Microsoft services such as OneDrive, Xbox Live, Hotmail, Azure, etc.  If you have an @hotmail.com or @outlook.com email address then you already have a Microsoft account.  However, you do not need to have a Microsoft email address to have a Microsoft account. 
	- [Sign up for a new Microsoft @outlook.com email address](http://signup.live.com)
	- [Associate your current email address as a Microsoft account.](http://aka.ms/easyid)  
_Note: This will not change your email hosting or affect your current account.  It will simply allow you to log into Microsoft services with an existing email address such as @gmail.com, @yahoo.com, or @yourdomain.com_

- **A Microsoft Azure subscription:** A Microsoft Azure subscription allows you to provision cloud resources.  As part of this training you will receive a Microsoft Azure Pass which is good for one month or $100 USD worth of cloud compute or storage. 
	- [Instructions on activating your Microsoft Azure Pass](http://aka.ms/azurepassvid)
	- [Instructions on activating your Microsoft Azure Pass. ](AzurePassInstructions.md)
		- **Video:** [How to activate your Microsoft Azure Pass. ](http://www.microsoftazurepass.com/) 

<a name="agenda" />
## Agenda ##
<a name="agenda-day1" />
### Day 1 - Introduction to application development and Microsoft Azure###
- **[Presentation](Slides/AppEntryPoints.pptx):** How to choose your app development environment
- **Demo:** Windows App Studio 
- **[Presentation](Slides/AzureIntroduction.pptx):** Introduction to Microsoft Azure and how to get started 
- **Demo:** The Microsoft Azure portal and creating your first Website and Virtual Machine 
- **Lab:** 
	- Build a Windows app using App Studio: [Video - how to use App Studio](http://channel9.msdn.com/Blogs/Windows-Phone/Windows-App-Studio-Beta-Walk-Through)
	- **Challenge:** Create a website that displays your Name

<a name="agenda-day2" />
### Day 2 - Game Development###
- Using the [Construct2](https://www.scirra.com/) game engine
- Using the [Phaser.io](http://phaser.io/) game engine
- **Lab:** Build your first game
	- **Contruct2 Tutorials:**
		- [Building a platformer](https://www.scirra.com/tutorials/253/how-to-make-a-platform-game)
		- [Building a top down shooter](https://www.scirra.com/tutorials/37/beginners-guide-to-construct-2)
		- [Building flappy bird](https://www.scirra.com/tutorials/857/flappy-birds-clone-in-10-minutes)
		- [Building Asteroid clone](https://www.scirra.com/tutorials/358/asteroid-clone-in-less-than-100-events)
		- [View more tutorials](https://www.scirra.com/tutorials)
	- **Phaser.io Tutorials:**
		- [Building a platformer](http://www.photonstorm.com/phaser/tutorial-making-your-first-phaser-game)
		- [Building flappy bird](http://www.codevinsky.com/phaser-2-0-tutorial-flappy-bird-part-1/)
		- [View more tutorials](http://www.lessmilk.com/phaser-tutorial/)
- **Challenge:** Create and upload your game to an Azure Website. 
	- [Instructions on how to FTP to Azure](http://blogs.msdn.com/b/tim/archive/2015/01/07/how-to-ftp-your-microsoft-azure-websites.aspx)

<a name="agenda-day3" />
### Day 3 - Game Deployment and Source Control basics###
- Deploy game to an Azure website with GitHub
- **[Presentation](Slides/GitAndGithub.pdf):** Source control basics with Git and GitHub
	- [Git cheat sheet](github-git-cheat-sheet.pdf)
	- [Create a repository with GitHub](https://help.github.com/articles/create-a-repo/)
- **Labs:**
	- Check your game into source control 
	- Deploy your game to an Azure website with GitHub
		- [Publish to Azure websites with Git and others](http://azure.microsoft.com/en-us/documentation/articles/web-sites-publish-source-control/)

<a name="agenda-day4" />
### Day 4 - JavaScript Development###
- **[Presentation](Slides/NodeJS.pptx):** Node.js basics
- JavaScript basics
- **Lab:**
	- Learn javascript with the following [node school](http://nodeschool.io/#workshoppers) labs:
		- javascripting (basic javascript)
		- learnyounode (node)
		- functional-javascript-workshop  (advanced javascript)
- **Challenge:** 
	- [Fibonacci Challenge:](fibonacci-challenge.md) 
		- Create a Fibonacci module with a function that returns the first 10 numbers in the Fibonacci number sequence 
		- Create a second function in the Fibonacci module that will return a section of the sequence based on a starting index. 
	- [Sudoku Solver:](sudoku-challenge.md) Create Sudoku solver node module to solve: 
```'158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413'```


<a name="agenda-day5" />
### Day 5 - APIs and Azure Mobile Services###
- What is an API and why does it matter?
- Using Azure Mobile Services to quickly make a backend for web and mobile services
	- [Tim's blog on Azure Mobile Services](http://blogs.msdn.com/b/tim/archive/2014/03/28/azure-mobile-services.aspx)
- **Lab:**
	- Set up an Azure Mobile Service
		- [Tutorial: How to create an Azure Mobile Service (and hook it up to a Windows app)](http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-get-started-data/#create-service)
- **Challenges:**
	- [Hook a web client up to your Azure Mobile Service and send it data](http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-how-to-use-client-library/)
	- [Add user authentication to your Azure Mobile Service](http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-get-started-users/)
	- [Limit users so they can only see their own data](http://azure.microsoft.com/en-us/documentation/articles/mobile-services-javascript-backend-service-side-authorization/)

<a name="agenda-day6" />
### Day 6 - Web Front End###
- Using CSS to style your app
	- Responsive design with [Twitter Bootstrap](http://getbootstrap.com/)
- Using JavaScript in the browser with jQuery
- **Lab:**
	- Make a front end web application styled with Bootstrap
		- [Bootstrap Getting Started](http://getbootstrap.com/getting-started/)
		- [Better Bootstrap Tutorial](http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/)
		- [Bootstrap Tutorial](http://www.sitepoint.com/twitter-bootstrap-tutorial-handling-complex-designs/)
		- [Bootstrap Quick Guide](http://www.tutorialspoint.com/bootstrap/bootstrap_quick_guide.htm)
- **Challenge:**
	- Use jQuery to add behavior to your page
		- [Learn jQuery](http://learn.jquery.com/)
		- [jQuery Tutorial](http://www.jquery-tutorial.net/)
	- Hook up your front end to Azure Mobile Services

<a name="agenda-day7" />
### Day 7 - Client - Server Architecture###
- **[Presentation](Slides/jQuery.pptx):** Adding website behavior with jQuery
- Using Azure Mobile services
	- Starter apps from Quick Start
- **Lab:** 
	- Add behavior to your website with jQuery
		- [jQuery Tutorial](http://www.jquery-tutorial.net/)
		- [Learn jQuery](http://learn.jquery.com/about-jquery/)
		- [jQuery Homepage](http://jquery.com/)
	- Hook up your front end app to Azure Mobile Services
		- [Azure Mobile Services Documentation](http://azure.microsoft.com/en-us/documentation/services/mobile-services/)

### Days 8 & 9 - HACKATHON!###

### Day 10 - Hackathon Presentations###