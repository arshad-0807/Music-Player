var data = [
    { songName: "Pehle Bhi Main", url: "./songs/Pehle Bhi Main_192(Ghantalele.com).mp3", image: "Images/animal.jpg", duration: "4:20" },
    { songName: "Kahani Suno 2.0", url: "./songs/Kahani-Suno_320(PaglaSongs).mp3", image: "Images/kahani.jpeg", duration: "5:13" },
    { songName: "Apa Fer Milaange", url: "./songs/Apa-Fer-Milange_320(PaglaSongs).mp3", image: "Images/apafer.jpeg", duration: "3:56" },
    { songName: "Kaise Hua", url: "./songs/Kaise-Hua_320(PaglaSongs).mp3", image: "Images/kabir.jpeg", duration: "4:43" }

]
var allSongs = document.getElementById("all-songs");
var poster = document.getElementById("img-box")
var audio = new Audio();
var box = "";

data.forEach(function (elem, index) {
    box = box + `<div class="song-card" id=${index}>
                    <div class="part-1">
                        <img src=${elem.image} alt="">
                         <h2>${elem.songName}</h2>
                    </div>
                    <h6>${elem.duration}</h6>
                </div>`;
});

allSongs.innerHTML = box;


allSongs.addEventListener("click", function (details) {
    audio.src = data[details.target.id].url

    audio.play();
    poster.style.backgroundImage = `url(${data[details.target.id].image})`
    play.innerHTML= '<i class="ri-pause-circle-line"></i>'

})
// var play = document.getElementById("play");
// // var pause = document.getElementById("pause")
// play.addEventListener("click", function() {
//     // audio.pause()
//     // play.innerHTML= '<i id=pause class="ri-play-mini-fill"></i>'
//     if(audio.play()){
//         audio.pause();
//         play.innerHTML= '<i id=pause class="ri-play-mini-fill"></i>'
//     }
//     else {
//         audio.play()
//         play.innerHTML= '<i class="ri-pause-circle-line"></i> '
//     }
// })


var playButton = document.getElementById('play');

playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML= `<i class="ri-pause-circle-line"></i>`;
    } else {
        audio.pause();
        playButton.innerHTML = '<i z class="ri-play-mini-fill"></i>';
    }
    });

    var currentSongIndex = 0;
    var nextButton = document.getElementById("forward");
    nextButton.addEventListener("click", function () {
        audio.pause();
        playButton.innerHTML = '<i z class="ri-play-mini-fill"></i>';
        currentSongIndex = (currentSongIndex + 1) % data.length;
        audio.src = data[currentSongIndex].url;
        audio.play();
        setTimeout(function() {
            playButton.innerHTML= `<i class="ri-pause-circle-line"></i>`;
        },500)
        poster.style.backgroundImage = `url(${data[currentSongIndex].image})`;
        // console.log(data[currentSongIndex]);

    });

    var prevButton = document.getElementById("backward");
    prevButton.addEventListener("click", function (){
        audio.pause();
        playButton.innerHTML = '<i z class="ri-play-mini-fill"></i>';
        currentSongIndex = (currentSongIndex - 1 + data.length) % data.length;
        audio.src = data[currentSongIndex].url;
        audio.play();
        setTimeout(function(){
            playButton.innerHTML= `<i class="ri-pause-circle-line"></i>`;
        },500)
        poster.style.backgroundImage = `url(${data[currentSongIndex].image})`;
        // console.log(data[currentSongIndex]);
    })


    


