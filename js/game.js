class game{
    constructor(){

    }
    getState(){
        var GameStateref=database.ref('gameState')
        GameStateref.on("value",function(data){
            _GameState=data.val();
        })
    }
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
    start(){
    if(_GameState===0){
       _Player=new player()
       _Player.getCount()
       form=new Form()
       form.display()
   }
    }

}