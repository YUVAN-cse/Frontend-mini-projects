async function getsongs() {
    const songs = await fetch("http://127.0.0.1:3000/songs/");
    const display = await songs.text();
    const div = document.createElement('div');
    div.innerHTML = display;
    const as = div.getElementsByTagName('a');
    const songlist = [];

    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songlist.push("/songs/" + element.href.split("/songs/")[1]);
        }
    }
    return songlist;
}

async function main() {
    let songs = await getsongs();
    console.log(songs);

    const songsUL = document.querySelector('.rarysongs ol');
    songsUL.innerHTML = ""; // Clear existing list

    for (const song of songs) {
        const ogsong = decodeURIComponent(song).split("(")[0];
        songsUL.innerHTML += `<li>${ogsong}</li>`;
    }

    var audio = new Audio(songs[0]);

    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(`Duration: ${duration} seconds`);
    });
}

main();

document.querySelectorAll('.playbutton')[1].addEventListener("click", function (e) {
    console.log(e.target);
    async function nn() {
        let songs = await getsongs();
        console.log(songs);

        for (let i = 0; i < songs.length; i++) {
            const element = songs[i];
            const ss = document.querySelectorAll(".playbutton")[1].parentElement.children[1].innerHTML.trim();
            console.log(`Matching: ${ss} with ${element}`);
            if (element.includes(ss)) {
                console.log("Playing song:", element);
                var audio = new Audio(element);
                audio.play().catch((error) => console.error("Playback error:", error));
                break; // Stop after finding the match
            }
        }
    }
    nn();

});
document.querySelectorAll('.playbutton')[0].addEventListener("click", function (e) {
    console.log(e.target);
    async function nn() {
        let songs = await getsongs();
        console.log(songs);

        for (let i = 0; i < songs.length; i++) {
            const element = songs[i];
            const ss = document.querySelectorAll(".playbutton")[0].parentElement.children[1].innerHTML.trim();
            console.log(`Matching: ${ss} with ${element}`);
            if (element.includes(ss)) {
                console.log("Playing song:", element);
                var audio = new Audio(element);
                audio.play().catch((error) => console.error("Playback error:", error));
                break; // Stop after finding the match
            }
        }
    }
    nn();
});
