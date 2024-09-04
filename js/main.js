const cardEl = document.querySelector('.card');

/* String padStart() and padEnd() */
const dummyImageSizes = [42, 20];
const imageWidth = dummyImageSizes[0].toString().padEnd(3, 0);
const imageHeight = dummyImageSizes[1].toString().padStart(3, 3);

console.log(imageWidth);
console.log(imageHeight);

/* async await */
async function getMarkText() {
	const promise = Promise.resolve('insights');
	const markText = await promise;

	const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
	cardTitleSpanEl.textContent = markText;
}

getMarkText();

/* Object entries() */
const statusLabels = {
	0: 'Companies',
	1: 'Templates',
	2: 'Queries',
};

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');

for (const [i, label] of Object.entries(statusLabels)) {
	cardStatusItemEls[i].querySelector('.label').textContent = label;
}

/* Object values() */
const dummyStatusAmounts = {
	0: '10K+',
	1: '314',
	2: '12M+',
};
const statusAmounts = Object.values(dummyStatusAmounts);

for (let i = 0; i < statusAmounts.length; i++) {
	cardStatusItemEls[i].querySelector('.num').textContent = statusAmounts[i];
}
