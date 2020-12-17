class player{
    constructor(){

    }
    getCount(){
     var PlayerCountref=database.ref('playerCount')
     PlayerCountref.on("value",function(data){
         _playercount=data.val()
     })
    }
}