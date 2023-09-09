let arr = [{
    id: 1,
    name: "Jeena-Jeena",
    artist: "Atif Aslam",
    img: "https://upload.wikimedia.org/wikipedia/en/2/22/Jeena_Jeena_%282015%29_-_Album_Cover.jpeg",
    genre: "Rock",
    source: "Jeena Jeena.mp3",

}, {
    id: 2,
    name: "Shape-of-You",
    artist: "Ed Sheeran",
    img: "https://i.ytimg.com/vi/JGwWNGJdvx8/sddefault.jpg",
    genre: "Pop",
    source: "Shape-of-You.mp3",

},
{
    id: 3,
    name: "Rockabye",
    artist: "Clean Bandit",
    img: "https://i.pinimg.com/originals/30/0f/49/300f49f1ab4d4db9c9d6a07c0095c93a.jpg",
    genre: "Hip-hop",
    source: "Rockabye.mp3",

},
{
    id: 4,
    name: "Deva-Deva",
    artist: "Arijit Singh",
    img: "https://www.koimoi.com/wp-content/new-galleries/2022/08/ranbir-kapoor-deva-deva-from-brahmastra-makes-one-feel-spiritually-powerful-with-rare-ease-001.jpg",
    genre: "Rock",
    source: "Deva_Deva.mp3",

},
{
    id: 5,
    name: "Hits-Different",
    artist: "Taylor Swiift",
    img: "https://www.rollingstone.com/wp-content/uploads/2023/06/taylor-swift-hits-different.jpg?w=1581&h=1054&crop=1",
    genre: "Pop",
    source: "Hits_Different.mp3",

},
{
    id: 6,
    name: "Baby",
    artist: "Justien Bieber",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3bATIqlPSxKbGlFFGOlrHmqsU15b8CM8_g&usqp=CAU",
    genre: "Pop",
    source: "Baby.mp3",

}]

let light = true
let toggle = document.getElementById("inside")
toggle.addEventListener("click", function () {
    if (light) {
        toggle.style.left = "50%";
        document.getElementById("toggle").style.backgroundColor = "rgb(122, 151, 255)"
        light = false
        document.querySelector("body").style.backgroundColor = "rgb(16 10 10 / 79%)";
        document.querySelector("body").style.color = "white";
        document.querySelector(".songsname").style.backgroundColor = "darkslategrey"
        document.querySelector("#current").style.backgroundColor = "darkslategrey"
        document.querySelector("#songinfo").style.backgroundColor = "#342d2d"
        document.querySelector("#playlistsect input").style.backgroundColor = "inherit"
        document.querySelector("#myplay").style.backgroundColor = "darkslategrey"
        document.querySelector("#current").classList.add("shadow")
        document.querySelector("#songinfo").classList.add("shadow")
        document.querySelector("#myplay").classList.add("shadow")
        let a = document.querySelectorAll("#addsong>div")
        for (let ele of a) {
            ele.classList.add("back")
        }
        let b = document.querySelectorAll("#songsinplaylist>div")
        for (let ele of b) {
            ele.classList.add("back")
        }
        let c = document.querySelectorAll("#playlistname>div")
        for (let ele of c) {
            ele.classList.add("back")
        }
    }
    else {
        light = true
        toggle.style.left = "0%";
        document.getElementById("toggle").style.backgroundColor = "darkgray"
        document.querySelector("body").style.backgroundColor = "grey";
        document.querySelector("body").style.color = "black";
        document.querySelector(".songsname").style.backgroundColor = "rgb(122, 151, 255)"
        document.querySelector("#current").style.backgroundColor = "rgb(122, 151, 255)"
        document.querySelector("#songinfo").style.backgroundColor = "rgb(61, 102, 250)"
        document.querySelector("#playlistsect input").style.backgroundColor = "white"
        document.querySelector("#myplay").style.backgroundColor = "rgb(122, 151, 255)"
        document.querySelector("#current").classList.remove("shadow")
        document.querySelector("#songinfo").classList.remove("shadow")
        document.querySelector("#myplay").classList.remove("shadow")
        let a = document.querySelectorAll("#addsong>div")
        for (let ele of a) {
            ele.classList.remove("back")
        }
        let b = document.querySelectorAll("#songsinplaylist>div")
        for (let ele of b) {
            ele.classList.remove("back")
        }
        let c = document.querySelectorAll("#playlistname>div")
        for (let ele of c) {
            ele.classList.remove("back")
        }
    }

})
let songadded = document.querySelector("#addsong")
let songs = document.querySelector(".songsname select")
songs.addEventListener("input", function () {

    songadded.innerHTML = ""
    if (songs.value === "All") {
        for (let ele of arr) {
            let child = document.createElement("div")
            let currsongname = document.createElement("span")
            currsongname.innerText = ele.name
            currsongname.classList.add("songplay")
            let currsongauthor = document.createElement("span")
            currsongauthor.innerText = ` - ${ele.artist}`
            child.append(currsongname, currsongauthor)
            songadded.appendChild(child)
        }
    }
    for (let ele of arr) {
        if (ele.genre === songs.value) {
            let child = document.createElement("div")
            let currsongname = document.createElement("span")
            currsongname.innerText = ele.name
            currsongname.classList.add("songplay")
            let currsongauthor = document.createElement("span")
            currsongauthor.innerText = ` - ${ele.artist}`
            child.append(currsongname, currsongauthor)
            songadded.appendChild(child)
        }
    }
    if (!light) {
        let a = document.querySelectorAll("#addsong>div")
        for (let ele of a) {
            ele.classList.add("back")
        }
    }
    let currentsong = document.querySelectorAll("#addsong>div")
    for (let ele of currentsong) {
        ele.addEventListener("click", function () {
            let name = ele.innerText.split(" ")[0]
            for (let one of arr) {
                if (one["name"] === name) {
                    let image = document.querySelector("#imgcontain>img")
                    image.src = `${one.img}`
                    document.querySelector(".info>h2").innerText = `${one.name}`
                    document.querySelector(".info>p").innerText = `${one.artist}`
                    let audio = document.querySelector("audio")

                    audio.src = `${one.source}`
                    audio.play()
                }
            }
        })
    }



})
let currentsong = document.querySelectorAll("#addsong>div")
for (let ele of currentsong) {
    ele.addEventListener("click", function () {
        let name = ele.innerText.split(" ")[0]
        for (let one of arr) {
            if (one["name"] === name) {
                let image = document.querySelector("#imgcontain>img")
                image.src = `${one.img}`
                document.querySelector(".info>h2").innerText = `${one.name}`
                document.querySelector(".info>p").innerText = `${one.artist}`
                let audio = document.querySelector("audio")

                audio.src = `${one.source}`
                audio.play()
            }
        }
    })
}
function update(index) {
    let one = arr[index]
    let image = document.querySelector("#imgcontain>img")
    image.src = `${one.img}`
    document.querySelector(".info>h2").innerText = `${one.name}`
    document.querySelector(".info>p").innerText = `${one.artist}`
    let audio = document.querySelector("audio")

    audio.src = `${one.source}`
    audio.play()
}
const addtoplay = document.querySelector("#add")
const prevbtn = document.querySelector("#prev")
const nextbtn = document.querySelector("#next")
prevbtn.addEventListener("click", function () {
    let songplaying = document.querySelector(".info>h2").innerText
    let index = 0;
    for (let ele of arr) {
        if (ele.name === songplaying) {
            index = ele.id - 1
            break;
        }
    }
    let previndex = (index - 1) % arr.length
    if (previndex == -1) {
        previndex = arr.length - 1
    }
    update(previndex)
})
nextbtn.addEventListener("click", function () {
    let songplaying = document.querySelector(".info>h2").innerText
    let index = 0;
    for (let ele of arr) {
        if (ele.name === songplaying) {
            index = ele.id - 1
            break;
        }
    }
    let nextindex = (index + 1) % arr.length
    update(nextindex)
})
var playarr = []
let currentplaylist = null;
let playlistadd = document.querySelector("#playlistbtn")
playlistadd.addEventListener("click", function () {
    let input = document.querySelector("#label input").value
    if (input == "") {
        return
    }

    let playlistsect = document.querySelector("#playlistname")
    let exist = document.querySelectorAll("#playlistname div")
    for (let ele of exist) {
        if (ele.innerText == input) {
            return
        }
    }
    let playlistname = document.createElement("div")
    playlistname.innerText = input
    playlistsect.appendChild(playlistname)
    let selectplaylist = document.querySelectorAll("#playlistname div")
    let cuur = document.querySelector("#songsinplaylist")
    for (let ele of selectplaylist) {
        ele.addEventListener("click", function () {
            currentplaylist = ele.innerText;
            cuur.innerHTML = ""
            let heading = document.createElement("h3")
            heading.innerText = "Current Playlist"
            let find = false
            let index = null
            for (let i = 0; i < playarr.length; i++) {
                if (playarr[i].name == currentplaylist) {
                    index = i
                    find = true
                    break
                }
            }
            cuur.appendChild(heading)
            if (find) {
                for (let each of playarr[index].songs) {
                    let cre = document.createElement("div")
                    cre.textContent = each
                    cuur.appendChild(cre)
                }
            }


        })
    }

})


addtoplay.addEventListener("click", function () {
    if (!document.querySelector("#playlistname div") || currentplaylist == null) {

        return;
    }
    
    let songnameplaying = document.querySelector(".info>h2").innerText
    let songartist = document.querySelector(".info>p").innerText
    var appenda = document.querySelector("#songsinplaylist")
    var newele = document.createElement("div")
    
    let appended = false

    for (let elements of playarr) {
        if (elements.name == currentplaylist) {
            for (let each of elements.songs) {
                if (each == `${songnameplaying} - ${songartist}`) {
                    return
                }
            }
            elements.songs.push(`${songnameplaying} - ${songartist}`)
            appended = true
            break;
        }

    }
    if (!appended) {
        let obj = {
            name: currentplaylist,
            songs: [`${songnameplaying} - ${songartist}`]
        }
        playarr.push(obj)
    }
    newele.innerText = `${songnameplaying} - ${songartist}`
     
    appenda.appendChild(newele)
   

}
)
