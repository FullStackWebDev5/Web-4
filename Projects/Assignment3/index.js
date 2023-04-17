let globalTipPercent = 0

const calculateBill = (tipPercent = 0) => {
	let billAmount = Number(document.getElementById('bill-input').value)
	let numberOfPeople = Number(document.getElementById('people-input').value)
	if(tipPercent != 0)
		globalTipPercent = tipPercent
	let tipAmount = (globalTipPercent/100) * billAmount
	billAmount += tipAmount

	let tipAmountPerPerson = tipAmount / numberOfPeople
	let totalPerPerson = billAmount / numberOfPeople
	document.getElementById('tip-per-person').innerText = `₹ ${tipAmountPerPerson.toFixed(2)}`
	document.getElementById('total-per-person').innerText = `₹ ${totalPerPerson.toFixed(2)}`
}

const reset = () => {
	document.getElementById('bill-input').value = ''
	document.getElementById('people-input').value = '1'
	document.getElementById('tip-per-person').innerText = `₹ 0.00`
	document.getElementById('total-per-person').innerText = `₹ 0.00`
	globalTipPercent = 0
}

































/*
	Micro-Project 3: Bill Spill
	Figma Link: https://www.figma.com/file/S51jnHQ5zqS75W8Uy1AdPx/Bill-Spill?node-id=1-7&t=az7jHN8HP4ATgCM6-0

	Eg 1:
	1000 - Sub-total amount
	100 - Tip (10%)
	1100 - Total amount
	2 - Total people

	50.00 (Tip/person)
	550.00 (Total amount/person)

	Eg 2:
	1500 - Sub-total amount
	750 - Tip (50%)
	2250 - Total amount
	3 - Total people

	250.00 (Tip/person)
	750.00 (Total amount/person)
*/