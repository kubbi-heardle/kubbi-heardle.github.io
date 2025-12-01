// the worst code ever known to the mankind
let left_panel = document.querySelectorAll('.flex.flex-1:not(.justify-end)')[0];
left_panel.insertAdjacentHTML('beforeend', '<button class="px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk air-button" onclick="AirOpen()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="--darkreader-inline-stroke: currentColor;" data-darkreader-inline-stroke=""><line x1="2" y1="22" x2="22" y2="22"></line><line x1="2" y1="22" x2="12" y2="2"></line><line x1="22" y1="22" x2="12" y2="2"></line><line x1="2" y1="10" x2="22" y2="10"></line></svg></button>');

function AirOpen() {
	document.body.firstElementChild.insertAdjacentHTML('afterbegin', `<div class="modal-background p-3 pointer-events-none svelte-1nyqrwd air-popup"><div class="pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm" role="dialog" aria-modal="true"><div class="bg-custom-bg border border-custom-mg p-6"><div class="flex items-center justify-center mb-6"><div class="flex-1 pl-7"><h2 class="text-sm text-center uppercase text-custom-line font-semibold tracking-widest">settings</h2></div> <div class="justify-self-end flex"><button autofocus="" class="border-none text-custom-mg" onclick="AirClose()"><svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div> <div class="text"><input id="sa-checkbox" type="checkbox" onchange="ChangeShowBirthday(this)" style="scale:1.25"><p class="mb-3 text-custom-fg" style="display:inline;margin-left:0.5rem">Show album birthdays</p></div></div></div></div>`);
	document.getElementById('sa-checkbox').checked = (localStorage.getItem('showAlbumBirthdays') === 'true');
	document.body.firstElementChild.insertAdjacentHTML('afterbegin', '<div class="modal-background p-3 flex justify-center svelte-1nyqrwd air-popup"></div>');
}
function AirClose() {
	let popup = document.getElementsByClassName('air-popup');
	popup[1].remove();
	popup[0].remove();
}

function ChangeShowBirthday(checkbox) {
	localStorage.setItem('showAlbumBirthdays', checkbox.checked);
}

date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

function AlbumClose() {
	let popup = document.getElementsByClassName('album-popup');
	popup[1].remove();
	popup[0].remove();
	let ignore_album_birthdays = JSON.parse(localStorage.getItem('ignoreAlbumBirthdays'));
	ignore_album_birthdays.push(`${day}-${month}-${year}`);
	localStorage.setItem('ignoreAlbumBirthdays', JSON.stringify(ignore_album_birthdays));
}

album_birthdays = [
{cover:"https://f4.bcbits.com/img/a3289610672_16.jpg",title:"I dunno lol EP",day:11,month:8,year:2011},
{cover:"https://f4.bcbits.com/img/a4000442763_16.jpg",title:"Transmittance album",day:16,month:1,year:2012},
{cover:"https://i1.sndcdn.com/artworks-000023638398-qy9ird-t500x500.jpg",title:"Sleet album",day:1,month:5,year:2012},
{cover:"https://i1.sndcdn.com/artworks-000035338547-jp4ip8-t500x500.jpg",title:"Circuithead album",day:1,month:12,year:2012},
{cover:"https://f4.bcbits.com/img/a4136762078_16.jpg",title:"2012 Singles album",day:4,month:2,year:2013},
{cover:"https://i1.sndcdn.com/artworks-000046979280-v9mspt-t500x500.jpg",title:"Gas Powered EP",day:1,month:5,year:2013},
{cover:"https://i1.sndcdn.com/artworks-000059977473-uod9ce-t500x500.jpg",title:"Something New single",day:14,month:10,year:2013},
{cover:"https://i1.sndcdn.com/artworks-000111875515-68vjcu-t500x500.jpg",title:"Ember album",day:5,month:2,year:2015},
{cover:"https://i1.sndcdn.com/artworks-000314066334-5jw39o-t500x500.jpg",title:"Taiga album",day:10,month:3,year:2018},
];

if(localStorage.getItem('ignoreAlbumBirthdays') == null) {
	localStorage.setItem('ignoreAlbumBirthdays', '[]');
}
if(localStorage.getItem('showAlbumBirthdays') == null) {
	localStorage.setItem('showAlbumBirthdays', 'true');
}

if(!JSON.parse(localStorage.getItem('ignoreAlbumBirthdays')).includes(`${day}-${month}-${year}`) & JSON.parse(localStorage.getItem('showAlbumBirthdays'))) {
	let album_t_yo = [];
	album_birthdays.forEach(album => {
		if(day == album.day & month == album.month) {
			album_t_yo.push({title:album.title,yo:date.getFullYear() - album.year});
			if(document.getElementsByClassName('album-popup').length == 0) {
				document.body.firstElementChild.insertAdjacentHTML('afterbegin', `<div class="modal-background p-3 pointer-events-none svelte-1nyqrwd album-popup"><div class="pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm " role="dialog" aria-modal="true"><div class="bg-custom-bg border border-custom-mg p-6"><div class="flex items-center justify-center mb-6"><div class="flex-1 pl-7"><h2 class="text-sm text-center uppercase text-custom-line font-semibold tracking-widest">album</h2></div> <div class="justify-self-end flex"><button autofocus="" class="border-none text-custom-mg" onclick="AlbumClose()"><svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div> <div class="text"><div class="flex mb-6"><div id="album-popup-covers" class="mr-4 text-custom-line"><div class="flex items-center" style="width:6rem;border:1px solid var(--color-line);"><img src="${album.cover}"></div></div><div id="album-popup-text" style="color: var(--color-fg);"><p>Today is the ${album_t_yo[0].yo}th birthday of the ${album.title}!</p></div></div></div></div></div></div>`);
				document.body.firstElementChild.insertAdjacentHTML('afterbegin', '<div class="modal-background p-3 flex justify-center svelte-1nyqrwd album-popup"></div>');
			} else {
				document.getElementById('album-popup-covers').insertAdjacentHTML('afterbegin', `<div class="flex items-center" style="width:6rem;margin-bottom:1rem;border:1px solid var(--color-line);"><img src="${album.cover}"></div>`);

				let albums = "";
				album_t_yo.forEach(album_t_yo_element => {
					albums += `the ${album_t_yo_element.yo}th birthday of the ${album_t_yo_element.title}`;
					if(album_t_yo[album_t_yo.length - 1].title != album_t_yo_element.title & album_t_yo.length != 2) {
						albums += ', ';
					}
					if(album_t_yo[album_t_yo.length - 1].title != album_t_yo_element.title) {
						albums += ' '
					}
					if(album_t_yo[album_t_yo.length - 2].title == album_t_yo_element.title) {
						albums += 'and '
					}
				});
				document.getElementById('album-popup-text').innerHTML = `<p>Today is ${albums}!</p>`;
			}
		}
	});
}