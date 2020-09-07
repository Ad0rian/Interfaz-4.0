function canvasalgorythmdraw()
{
    var canvas = document.getElementById("canvalgorythm");
    var ctx = canvas.getContext("2d");
    var lengthbin = $('#numberalg').val();

    ctx.fillStyle = "#FF0000";
    ctx.fillRect
    (
        canvas.width/2.25,
        canvas.height/2.25,
        canvas.width/10,
        canvas.height/10
    );

    for(var i = 0; i < lengthbin ; i++)
    {
        var numberalgoperation = Math.floor(Math.random() * 4);
       
    }
}