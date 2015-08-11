var io = require('socket.io').listen(3000);

io.on('connection', function(socket){
    
    //Determine the date for the log
    var date = new Date();
    
    //all log events will be transmitted to the server as a "debugEvent"
    socket.on('debugEvent', function(message){
        console.log(message);
    });
    
    //Emit some information for every client connected
    console.log("======================================================");
    console.log("Client Connected: " + date.getDay() + "/" + date.getMonth() 
        + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" 
        + date.getSeconds());
    console.log( "Client IP: " + socket.request.connection.remoteAddress );
});