
function foo() {

	var bar;

	quux = 1;

	function zip() {
		var quux = 2;
		bar = true;
	}

	function zip2() {
		bar = false;
	}

	function zip3() {
		bar = undefined;
	}

	function log() {
		console.log(bar);
	}

	return [zip, zip2, zip3, log];
}

var a = foo();

a[0]();
a[3]();
a[1]();
a[3]();
a[2]();
a[3]();