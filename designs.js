// Select color input
// Select size input

var colums;
var cells;
var background;



// this funtion help to select the grid size
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    colums = $('#inputHeight').val();
    cells = $('#inputWidth').val();
    makeGrid(colums, cells);
    
})

function makeGrid(col, row) {
   // removes previous submit parameters 
    $('tr').remove();

   for (var x = 1; x <= col; x++) {
   // add the selected color      
        $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
        for (var y = 1; y<=row; y++) {
            $('#table' + x).append('<td></td>');
        }
    }
 
}

// add and remove color by click
document.addEventListener('click', function(e) {
    if (e.target.tagName === "TD") {
        if (e.target.hasAttributes('style')) {
            e.target.removeAttribute('style');
        }
        else {
            background = $('#colorPicker').val();
            e.target.style.backgroundColor = background;
        }
    }
})
