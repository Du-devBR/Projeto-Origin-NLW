

const linkSocialMedia = {

  github: prompt("Digite seu id do Github"),
  youtube: "channel/UCOjh2L-G4nE69z6yR2D7cFA",
  facebook: "Eduardo Ananias da Silva",
  instagram: prompt("Digite seu login do Instagram"),
  twitter: "twitter"

}

function changeLinkSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `http://${social}.com/${linkSocialMedia[social]}/`

  }
}

changeLinkSocialMedia()

function getInfoGithub() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLink.textContent = data.login
    })
}


getInfoGithub()
