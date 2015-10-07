$(document).ready(function() {
for (var i = 1; i <=100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		$("body").append("FizzBuzz <br><br>");
	} else if (i % 3 === 0) {
		$("body").append("Fizz <br><br>");
	} else if (i % 5 === 0) {
		$("body").append("Buzz <br><br>");
	} else {
		$("body").append(i + "<br><br>");
	}
}
});
