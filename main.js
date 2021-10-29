//variaveis let ou const (let pode mudar, const nao)
const LinkSocialMedia = {
  github: 'enzowilliam',
  youtube: ' ',
  facebook: '',
  instagram: 'enzo_william',
  twitter: 'enzoowilliam'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.login //muda o nome do github
      userLink.href = data.html_url //muda o link do github href
      userImage.src = data.avatar_url //muda a imagem por isso  src
    })
}

getGithubProfileInfos()
