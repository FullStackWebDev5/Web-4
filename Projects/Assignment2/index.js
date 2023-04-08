function increment(input) {
	var count = Number(document.getElementById('count').innerText)
	count = count + input
	document.getElementById('count').innerText = count
}

function decrement(input) {
	var count = Number(document.getElementById('count').innerText)
	count = count - input
	document.getElementById('count').innerText = count
}

function incrementRandom() {
	var input = Number(document.getElementById('increment-input').value)
	increment(input)
}

function decrementRandom() {
	var input = Number(document.getElementById('increment-input').value)
	decrement(input)
}

function reset() {
	document.getElementById('count').innerText = 0
}
















// count = count + 1; count++; count += 1 
/*
	function greet(firstName, lastName) {
		console.log('Hi, ' + firstName + ' ' + lastName + '!')
	}
*/