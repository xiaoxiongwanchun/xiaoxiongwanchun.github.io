let $b = document.body
let $swiper = document.querySelector('#swiper')
let $back = document.querySelector('.back')
let $trigger = document.querySelector('.trigger')
let $note = document.querySelector('.note')

main()

function main () {
	// 等待资源加载好后显示文字
	Promise.all([
		imgLoader('images/星空/bg.jpg'),
		imgLoader('images/星空/011.jpg'),
		imgLoader('images/星空/note.svg')
	]).then(res => {
		// 显示文字
		$b.className += ' z-start'

		setTimeout(function(args) {
			// 显示音符
			$note.className += ' z-show'

			// 显示trigger
			$trigger.className += ' z-show'
		}, 4000)
	})

	var mySwiper = new Swiper ('.swiper-container', {
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true
		}
	})


	var hammertime = new Hammer(document.querySelector('.bg-1'));

	hammertime.get('pan').set({ direction: Hammer.DIRECTION_UP });

	hammertime.on('pan', function(ev) {
		$swiper.classList.add('z-show')
	});

	$back.addEventListener('touchstart', function () {
		$swiper.classList.remove('z-show')
	})
}

function imgLoader (url) {
	return new Promise((resolve, reject) => {
		let img = new Image()

		img.onload = () => resolve(url)
		img.onerror = () => reject(url)

		img.src = url
	})
}