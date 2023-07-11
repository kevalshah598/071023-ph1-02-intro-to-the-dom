// const mainTitle = document.getElementById("main-title")
const mainTitle = document.querySelector("#main-title")
// console.log(mainTitle)

// const pTags = document.getElementsByTagName('p')
// // console.log(pTags)

const pTags = document.querySelectorAll("p")
// console.log(pTags)

const description = document.querySelector(".description")
// console.log(description)

// const element = document.querySelector('Twilight')
// console.log(element)


const newImage = document.createElement("img")
newImage.src = "https://play-lh.googleusercontent.com/qhfncXOqccJ5Y_IBPaRy0O79QZQDl7L5FyKQAsLFICt8c9-2Vfmqd2bniAPESto0ZmSLTOzjl-o1F_jgb2Nr=w240-h480-rw"
description.append(newImage)

const newImage1 = document.createElement("img")
newImage1.src = "https://images.pristineauction.com/158/1582578/share_1597378492-The-Dark-Knight-27x40-Movie-Poster-PristineAuction.com.jpg"

newImage.style.width = "100px"