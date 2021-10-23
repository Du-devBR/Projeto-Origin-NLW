

const linkSocialMedia = {

  github: "Du-devBR",
  youtube: "channel/UCOjh2L-G4nE69z6yR2D7cFA",
  facebook: "Eduardo Ananias da Silva",
  instagram: "eduaro.bills",
  twitter: "twitter"

}

function changeLinkSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `http://${social}.com/${linkSocialMedia[social]}/`

  }
}

changeLinkSocialMedia()
