<a name="fibonacci-challenge" />
# Fibonacci Challenge #
1. Open Visual Studio 2013
2. Start a new project: File > New > Project

	![vs-open-new-project](images/vs-open-new-project.png?raw=true)

3. On the left under Installed > Expand Tempalates > Expand JavaScript > Select Blank Node.js Console App
4. Give the console app a name: fibonacciApp
5. Press Ok

	![2-blank-node-console](images/2-blank-node-console.png?raw=true)

6. Right click on the the FibonacciApp project > Click Add > Click New Item

	![3-new-item](images/3-new-item.png?raw=true)

7. Select JavaScript File

8. Name the file: Fibonacci.js

9. Click Add	

	![4-new-file](images/4-new-file.png?raw=true)

10. In the _Fibonacci.js_ file paste the following code to create a node module: 

	````JavaScript
	var first10 = function () {
		var returnArray = [];
		 
		//Add the first two numbers for the sequence
		returnArray.push(1); 
		returnArray.push(1); 

		for (var i = 2; i < 10; i++) {
			 // Fibonacci Logic 
		}

		return returnArray;
	}

	module.exports.first10 = first10;
````

11. In the _app.js_ paste the following code to use the module you created: 

	````JavaScript
	var Fibonacci = require('./Fibonacci.js')
	var first10 = Fibonacci.first10();
	console.log(first10);

	console.log("\n\nPress CTRL C to exit");
	while(true); // Wait
````
12. Press the ![start-debugging](images/start-debugging.png?raw=true) button (or F5) to start debugging
13. This will run your application in the command window and the output should look like:
		
	![blank-fibonacci-output](images/blank-fibonacci-output.png?raw=true)

14. In the _Fibonacci.js_ file add the logic to return the first ten numbers in the Fibonacci sequence.  The final output should look like:
	![first10-output](images/first10-output.png?raw=true)

15. **Extra Challenges**
	- Add a function to the _Fibonacci.js_ file that will return the fibonacci sequence starting at a certain location. 

		````JavaScript
			var sequenceFrom = function (start,count) {
				 var returnArray = [];
				 // Fibonacci Logic  
				 return returnArray;
			}

			module.exports.sequenceFrom = sequenceFrom;
		````
	Call that function from your _app.js_ file starting at the 10th number returning the next 15.

		````JavaScript
		var from = Fibonacci.sequenceFrom(10, 15);
		console.log(from);
		````
![extra-challenge](images/extra-challenge.png?raw=true)



