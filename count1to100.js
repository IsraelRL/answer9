function count1to100()
{ 	//contador del 1 al 100
	for (var i = 1; i <= 100; i++) {
		//comparamos si es multiplo de 3 y 5
		if (i%3==0 && i%5==0) {
			document.writeln("FizzBuzz");

		}else 
		//comparamos si es multiplo de 3
			if (i%3==0) {
			document.writeln("Fizz");
		}else 
		//comparamos si es multiplo de 5
			if (i%5==0) {
			document.writeln("Buzz");
		}else document.writeln(i);
	}
}