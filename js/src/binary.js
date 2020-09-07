function submitNumber()
{

    var arraybinary = [];
    var lengthbin = $('#numberbin').val();
    
    for(var i = 0; i < lengthbin ; i++)
    {
        var numberbinoperation = Math.floor(Math.random() * 2);
        arraybinary.push(numberbinoperation);
        if (numberbinoperation == 0){
        $('#contentprincipal').append(
            '<div id="binari" class="binariwhite">'+
            '</div>'
        );
        }
    if (numberbinoperation == 1){
        $('#contentprincipal').append(
            '<div id="binari" class="binariblack">'+
            '</div>'
        );
        }
    }
}