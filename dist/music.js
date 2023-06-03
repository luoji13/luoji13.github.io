<link rel="stylesheet" href="APlayer.min.css">
<div id="aplayer"></div>
<script src="APlayer.min.js"></script>

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed： true,
    audio: [{
        name: 'The Sun Also Rises',
        artist: '久石譲',
        url: 'http://music.163.com/song/media/outer/url?id=441722.mp3',
        cover: 'cover.jpg'
    }]
});

import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';

const ap = new APlayer(options);