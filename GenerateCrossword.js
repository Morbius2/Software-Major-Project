
   

function BuildNewCrossword ()
{
// This needs to 
// open file
// random pick words
// arrange words

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();
  
// Set the file path of the CSV file
const filePath = "CrosswordDictonary.csv";
var rows


// Open the CSV file using the GET method
xhr.open("GET", filePath);

// Set the response type to text
xhr.responseType = "text";

// Send the XMLHttpRequest
xhr.send();

rows= xhr.responseText.split("\n").map(row => row.split(","));



var RandomWordPosition
var RandomClue
var RandomWord

RandomWordPosition = Math.floor(Math.random() * rows.length);

RandomClue = rows[RandomWordPosition][1];
RandomWord = rows[RandomWordPosition][0];


alert("Random Clue " + RandomWord);

}



function createCrosswordPuzzle() { 
    const crosswordArray = [ ['A', 'C', 'R', 'O', 'B', 'A', 'T', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
                         ['', 'B', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
                         ['', 'B', 'E', 'E', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                         ['', 'O', '', 'D', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
                         ['', 'T', '', 'I', 'C', 'E', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
                         ['', 'T', '', 'C', '', 'F', '', '', '', '', '', '', '', '', '', '', '', '', '', ''], 
                         ['', '', '', 'T', '', 'F', '', '', '', '', 'B', '', '', '', '', '', '', '', '', ''], 
                         ['', '', '', '', '', 'O', 'T', 'T', 'T', 'E', 'R', '', '', '', '', '', '', '', '', ''], 
                         ['', '', '', '', '', 'R', '', '', 'I', '', 'A', '', '', '', '', '', '', '', '', ''], 
                         ['', '', '', '', '', 'T', '', '', 'P', '', 'T', 'O', 'O', '', '', '', '', '', '', ''], 
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'M', '', '', '', '', '', ''], 
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'N', '', '', '', '', '', ''],
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'I', '', '', '', '', '', ''], 
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'P', '', '', '', '', '', ''],
                         ['', '', '', '', '', '', '', '', '', '', '', '', 'B', 'O', 'O', 'T', '', '', '', ''],
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'T', '', 'R', '', '', '', ''], 
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'E', '', 'A', '', '', '', ''], 
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'N', '', 'S', '', '', '', ''],
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', 'T', '', 'H', '', '', '', ''],
                         ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] ];

const cluesArray = [ ['1', 'A circus performer' ],  
['2', 'A religous leader' ], 
['3', 'Stinging Insect' ], 
['4', 'A rule or command' ],
['5', 'Frozen Water' ], 
['6', 'Deadpool says Maximum....' ]  
];

const table = document.createElement('table'); 
table.style.borderCollapse = 'collapse'; 
for (let i = 0; i < crosswordArray.length; i++) 
    { 
    const row = document.createElement('tr'); 
    for (let j = 0; j < crosswordArray[i].length; j++) 
        { 
        const cell = document.createElement('td');
        cell.style.border = '1px solid black'; 
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
    document.body.appendChild(table); 


// create the hints frame 


var hintsFrame = document.createElement('div'); 
hintsFrame.className = 'hints-frame'; 
// create the heading for the hints frame 
var heading = document.createElement('h2'); 
heading.innerText = 'Hints'; 
hintsFrame.appendChild(heading); 
// create the list for the hints 
var hintsList = document.createElement('ul'); 
// loop through the cluesArray and create a list item for each clue 
for (var i = 0; i < cluesArray.length; i++) 
{ var clue = cluesArray[i]; 
    var listItem = document.createElement('li'); 
    listItem.innerText = clue; 
    hintsList.appendChild(listItem); } 

    // add the hints list to the hints frame 
    hintsFrame.appendChild(hintsList); 
  
    // add the crossword container to the document body 
    document.body.appendChild(hintsFrame); 

    
}

function readDictionaryCSV() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Set the file path of the CSV file
    const filePath = "CrosswordDictonary.csv";

    
    // Set up a callback function to handle the XMLHttpRequest's response
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        // Split the CSV file into rows and convert each row to an array
        const rows = this.responseText.split("\n").map(row => row.split(","));
  
        //alert(rows[1][0]);
        var RandomWordPosition
        var RandomClue
        var RandomWord

        RandomWordPosition = Math.floor(Math.random() * rows.length);

        RandomClue = rows[RandomWordPosition][1];
        RandomWord = rows[RandomWordPosition][0];


        alert("Random Clue " + RandomWord);
        // Loop through the rows of the CSV file and create a new HTML row for each row
        //for (let i = 0; i < rows.length; i++) {

         // wordCell.innerText = rows[i][0];
  
         // clueCell.innerText = rows[i][1];
  

        //}
  

      }
    };
  
    // Open the CSV file using the GET method
    xhr.open("GET", filePath);
  
    // Set the response type to text
    xhr.responseType = "text";
  
    // Send the XMLHttpRequest
    xhr.send();
  }