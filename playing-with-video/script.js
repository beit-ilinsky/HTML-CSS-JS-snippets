const tslist = document.getElementById('time-stamp-list');
const videoelem = document.getElementById('video_with_titles');
const sts = document.getElementById('status');
const curt = document.getElementById('curtime');
let dur = NaN;
const dspan = document.getElementById('durspan');
dspan.innerText = dur;
const goton = document.getElementById("goton");

document.getElementById("go").onclick = () => {
    videoelem.currentTime = goton.value;
};

videoelem.oncanplaythrough = (ev) => {
    dur = (videoelem.duration).toFixed(2);
    dspan.innerText = dur;
    goton.max = Math.floor(dur);           
};
videoelem.onplay = (ev) => {
    sts.innerText = 'Playing at';
};
videoelem.onpause = (ev) => {
    sts.innerText = 'Paused at';
    curt.innerText = videoelem.currentTime;
};
videoelem.onseeked = (ev) => {
    sts.innerText = 'Position changed to';
    curt.innerText = videoelem.currentTime;
};
videoelem.ontimeupdate = (ev) => {
    curt.innerText = videoelem.currentTime;        
};     