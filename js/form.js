class Form{
    constructor(){

    }
    display()
    {
        var title= createElement('h2')
        title.html('CarRacingGame')
        title.position(200,100)
        var input = createInput('name')
        var button = createButton('play')
        var greeting = createElement('h3')
        input.position(300,300)
        button.position(300,400)
    }

}