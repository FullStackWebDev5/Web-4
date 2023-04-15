const calculateBill = () => {
	let item1 = document.getElementById('item-1').value
	let price1 = Number(document.getElementById('price-1').value)
	let quantity1 = Number(document.getElementById('quantity-1').value)

	let item2 = document.getElementById('item-2').value
	let price2 = Number(document.getElementById('price-2').value)
	let quantity2 = Number(document.getElementById('quantity-2').value)

	let item3 = document.getElementById('item-3').value
	let price3 = Number(document.getElementById('price-3').value)
	let quantity3 = Number(document.getElementById('quantity-3').value)

	let amount1 = price1 * quantity1
	let amount2 = price2 * quantity2
	let amount3 = price3 * quantity3
	document.getElementById('amount-1').value = `₹ ${amount1}`
	document.getElementById('amount-2').value = `₹ ${amount2}`
	document.getElementById('amount-3').value = `₹ ${amount3}`

	let subTotal = amount1 + amount2 + amount3
	document.getElementById('sub-total').value = `₹ ${subTotal}`

	let discountPercent = document.getElementById('discount-percent').value
	let discount = subTotal * discountPercent/100

	let taxPercent = document.getElementById('tax-percent').value
	let tax = subTotal * taxPercent/100

	let total = subTotal - discount + tax
	document.getElementById('total').value = `₹ ${total}`
}
