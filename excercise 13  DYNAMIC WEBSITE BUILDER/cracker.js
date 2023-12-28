function CreateCard() {
    let title = prompt('Enter Title')
    let channelName = prompt('Enter Channel Name')
    let views = +prompt('Enter Views')

    if (views > 999 && views <= 999999) {
        views = Math.floor(views / 1000) + "k"
    }
    else if (views >= 1000000) {
        views = Math.floor(views / 1000000) + "M"
    }
    else {
        views = views
    }

    console.log(views)

    let monthsOld = prompt('Enter How Months Video Old')
    let duration = prompt('Enter Duration')

    let cont = document.querySelector('.container')

    let html = `
    <div class="card">
    <div class="image">
         <img src="https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ3wWyc69oKe6hWkHb-4Ua7K9UhA" alt="" class="thumbnail">
         <div class="capsule duration">${duration}</div>
    </div>
    <div class="content">
     <h1 class="title">${title}</h1>
     <p>${channelName} . ${views} . ${monthsOld}MonthsOld</p>
    </div>`

    cont.innerHTML = html
}