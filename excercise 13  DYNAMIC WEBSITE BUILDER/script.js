let container = document.getElementById('container')

function CardGenerator() {
    let titlePrompt = prompt('Enter Title')
    let channelNamePrompt = prompt('Enter Your Channel name') + " . "
    let viewsPrompt = +prompt("Enter Views") + " . "
    let monthsOldPrompt = prompt("Enter How Months Old") + " . "
    let durationPrompt = prompt("Enter Duration")

    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    container.append(card)

    let image = document.createElement('img')
    image.setAttribute('src', 'https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ3wWyc69oKe6hWkHb-4Ua7K9UhA')
    image.setAttribute('class', 'thumbnail')
    card.append(image)

    let mainDiv = document.createElement('div')
    mainDiv.setAttribute('class', 'mainDiv')
    card.append(mainDiv)

    let titleDiv = document.createElement('div')
    titleDiv.setAttribute('class', 'titleDiv')
    mainDiv.append(titleDiv)

    let title = document.createElement('div')
    title.innerText = titlePrompt
    title.setAttribute('class', 'title')
    titleDiv.append(title)

    let flex = document.createElement('div')
    flex.setAttribute('class', 'flex')
    mainDiv.append(flex)

    let channelName = document.createElement('div')
    channelName.innerText = channelNamePrompt
    channelName.setAttribute('class', 'channelname')
    flex.append(channelName)

    let views = document.createElement('div')
    views.innerText = viewsPrompt
    views.setAttribute('class', 'views')
    flex.append(views)

    let monthsOld = document.createElement('div')
    monthsOld.innerText = monthsOldPrompt
    monthsOld.setAttribute('class', 'monthsOld')
    flex.append(monthsOld)

    let duration = document.createElement('div')
    duration.innerText = durationPrompt
    duration.setAttribute('class', 'duration')
    flex.append(duration)
}