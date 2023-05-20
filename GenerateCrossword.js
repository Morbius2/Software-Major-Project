// This is the master function for creating a new crossword. It contains some global variables defined below


var RandomWordPosition
var RandomClue
var RandomWord
var rows
var cluesArray = [['','','']];

 
    var crosswordArray = [ 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] ];

function LoadtheCSV() {
  // This function loads the CSV file into a global array where it can be accessed for random word selection
  
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // Set the file path of the CSV file
  const filePath = "CrosswordDictionary.csv";

  
  // Set up a callback function to handle the XMLHttpRequest's response
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // Split the CSV file into rows and convert each row to an array
     rows = this.responseText.split("\n").map(row => row.split(","));
    
    alert ("CSV file load completed")
    }
  };

  // Open the CSV file using the GET method
  xhr.open("GET", filePath);

  // Set the response type to text
  xhr.responseType = "text";

  // Send the XMLHttpRequest
  xhr.send();

  
  
}
   
function getRandomWord() {
RandomWordPosition = Math.floor(Math.random() * rows.length);

RandomClue = rows[RandomWordPosition][1];
RandomWord = rows[RandomWordPosition][0];

}


function BuildNewCrossword ()
{
// This function will create a brand new crossword puzzle




//get random word

getRandomWord();
placeWord(RandomWord,1,1,true);
AddClue ();

getRandomWord();
placeWord(RandomWord,5,5,false);
AddClue ();

alert("New crossword generated");


}

function placeWord (sWordtoPlace, atRow, atColumn, Horizontalplacement)
{
//This function puts a word into the crossword
var iRow = atRow
var iColumn = atColumn


for (var i = 0; i < sWordtoPlace.length; i++) 
{ 
  var letter = sWordtoPlace[i]; 
  crosswordArray[iRow][iColumn] = letter;
  if (Horizontalplacement == true)
  {
    iColumn++;
  } 
  else
  {
    iRow++;
  }


} 

}


function createCrosswordPuzzle() { 
// This functions displays the current Crossword Puzzle

var CrosswordFrame = document.createElement('div'); 
CrosswordFrame.className = 'Crossword-frame'; 
CrosswordFrame.id = 'Crossword-frame';
const table = document.createElement('table'); 

table.style.borderCollapse = 'collapse'; 
for (let i = 0; i < crosswordArray.length; i++) 
    { 
    const row = document.createElement('tr'); 
    for (let j = 0; j < crosswordArray[i].length; j++) 
        { 
        const cell = document.createElement('td');
        cell.style.border = '1px solid black'; 
        cell.style.width = '50px'; 
        cell.style.height = '50px'; 
        if (crosswordArray[i][j] !== '') 
        { 
        const input = document.createElement('input'); 
        input.setAttribute('type', 'text'); 
        input.setAttribute('maxlength', '1'); 
        input.style.width = '50px'; 
        input.style.height = '50px'; 
        input.style.textAlign = 'center'; 
        input.style.fontSize = '50px';
        cell.appendChild(input); 
        } else 
        { 
        cell.style.backgroundColor = 'black';

        } 
        row.appendChild(cell);
        } 
    table.appendChild(row);
    } 
    
        // add the crossword to the crossword frame 
        CrosswordFrame.appendChild(table); 
  
        // add the crossword container to the document body 
        document.body.appendChild(CrosswordFrame); 




// create the hints frame 


var hintsFrame = document.createElement('div'); 
hintsFrame.className = 'hints-frame'; 
hintsFrame.style.backgroundColor = 'white';
hintsFrame.id = "hints-frame";
// create the heading for the hints frame 
var heading = document.createElement('h2'); 
heading.innerText = 'Hints'; 
hintsFrame.appendChild(heading); 
// create the list for the hints 
var hintsList = document.createElement('ul'); 
// loop through the cluesArray and create a list item for each clue 
for (var i = 0; i < cluesArray.length; i++) 
{ 
  var clue = cluesArray[i][1]; 
  var listItem = document.createElement('li');     
  listItem.innerText = clue; 

  hintsList.appendChild(listItem); 
} 

    // add the hints list to the hints frame 
    hintsFrame.appendChild(hintsList); 
  
    // add the crossword container to the document body 
    document.body.appendChild(hintsFrame); 

   
}





function ShowCrosswordArray ()
{
// this function shows the array that is holding the the current crossword puzzle
var OutputArray = ""
var CRow = ""

for (var i = 0; i < crosswordArray.length; i++) 
{ 
   CRow = crosswordArray[i]; 

  OutputArray = OutputArray + '\n' + CRow + '\n';
   }

    


alert (OutputArray);

alert(cluesArray);
}

function AddClue ()
{
// This function will add a clue to the hints array

cluesArray.push([cluesArray.length + 1, RandomClue, RandomWord]);


}


function ClearScreen()
{

  let divElement = document.getElementById("hints-frame");
 // while (divElement.firstChild) {
 //    divElement.removeChild(divElement.firstChild);
 // }
divElement.remove()

  let divElement2 = document.getElementById("Crossword-frame");
//  while (divElement2.firstChild) {
//     divElement2.removeChild(divElement2.firstChild);
//  }
divElement2.remove()

}