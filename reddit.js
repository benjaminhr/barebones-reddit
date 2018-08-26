const subredditHeader = document.querySelector('#sr-header-area')
const subredditHeaderParent = document.querySelector('#header')

subredditHeaderParent.removeChild(subredditHeader)

const sidebar = document.querySelector('.side')
document.body.removeChild(sidebar)

const leftSideBar = document.querySelector('.listing-chooser')
document.body.removeChild(leftSideBar)

const content = document.querySelector('.content')
content.style.marginLeft = '20px'
content.style.marginTop = '20px'

const trending = document.querySelector('.trending-subreddits')
const trendingParent = document.querySelector('body > div.content > div:nth-child(2)')
trendingParent.removeChild(trending)