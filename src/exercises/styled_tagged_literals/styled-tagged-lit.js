'use strict'
const textContainer = document.createElement('h1')
let name1 = 'Jimmy'
const name2 = 'Ellie'
const duration = '5 days'
const nameUrl =
	'https://images4.fanpop.com/image/photos/22100000/Jimmy-The-Tulip-Tudeski-bruce-willis-22144802-500-325.jpg'

if (document.readyState !== 'complete') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
	const sentence = highlight`${name1} went to see ${name2} and has not been seen in ${duration}`
	textContainer.innerHTML = sentence

	document.body.insertAdjacentElement('afterbegin', textContainer)
}

// first we get the string array as sliced by the intermittent variables
// whose values we want spliced into the final string
function highlight(strings, ...values) {
	let str = ''
	strings.forEach((s, i) => {
		if (values[i] === name1) {
			insertAnchor(name1)
			str += `${s}<span class='hl'>${name1}</span>`
		} else {
			str += `${s}<span class='hl'>${values[i] || ''}</span>`
		}
	})
	return str
}

// separating that out so the highlight function actually only highlights
function insertAnchor(name1) {
	return (name1 = `<a href=${nameUrl} target="_blank">${name1}</a>`)
}
