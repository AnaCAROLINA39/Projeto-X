function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")){
  //  html.classList.remove("ligth")
  // } else{
  //  html.classList.add("light")

  //pega a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./ASSETS/avatar.light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./ASSETS/avatar.png")
  }
}
