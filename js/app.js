if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('../sw.js').then(() => {
			console.log('soy el servceWorker registrado y funcionando.')
		})
	})
}