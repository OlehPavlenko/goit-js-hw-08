import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const storageKey = 'videoplayer-current-time';
const key = localStorage.getItem(storageKey);

console.log(key)

if (key) {
  player.setCurrentTime(JSON.parse(key));
}

player.on('timeupdate', throttle(data => {
  localStorage.setItem(storageKey, JSON.stringify(data.seconds));
}, 1000));
// player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then().catch();

// player.on('timeupdate', throttle((data) => {
//     localStorage.setItem("videoplayer-current-time", data.seconds);
// }, 1000));
