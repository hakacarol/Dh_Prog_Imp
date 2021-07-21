let promiseFail = false;

const promise = new Promise((resolve, reject) => {
	if (promiseFail) {
		reject('Ocorreu um erro.');
	} else {
		resolve(
			JSON.stringify({
				name: 'Felipe',
				age: 34,
			})
		);
	}
});

promise
	.then(verify => {
		console.log(verify);
	})
	.catch(err => {
		console.log(err);
	});