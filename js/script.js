
const linkSocialMedia = {

  github: `${localStorage.getItem('github')}`,
  youtube: `${localStorage.getItem('youtube')}`,
  facebook: `${localStorage.getItem('facebook')}`,
  instagram: `${localStorage.getItem('instagram')}`,
  twitter: `${localStorage.getItem('twitter')}`


}


const sendInfosUsers = () => {
  localStorage.setItem('github', document.querySelector('.js-input-github').value);
  localStorage.setItem('instagram', document.querySelector('.js-input-instagram').value);
  localStorage.setItem('facebook', document.querySelector('.js-input-facebook').value);
  localStorage.setItem('youtube', document.querySelector('.js-input-youtube').value);
  localStorage.setItem('twitter', document.querySelector('.js-input-twitter').value);


  getInfoGithub()
  changeLinkSocialMedia()
  reloadPage()

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

const reloadPage = () => window.location.reload(true);
