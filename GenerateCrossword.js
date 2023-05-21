// This is the master function for creating a new crossword. It contains some global variables defined below


var Canbeplaced 
var RandomWordPosition
var RandomClue
var RandomWord
var rows
var cluesArray = new Array()
 
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

      var blankcrosswordArray = [ 
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
   
function getRandomWord() 
{
// This function gets a random word from the loaded dictionary
  RandomWordPosition = Math.floor(Math.random() * rows.length);

  RandomClue = rows[RandomWordPosition][1];
  RandomWord = rows[RandomWordPosition][0];

}


function BuildNewCrossword ()
{
// This function will create a brand new crossword puzzle

//clear out the clues array
cluesArray = [];

// clear out the old crossword array
for (i = 0; i < crosswordArray.length; i++) 
{ 
  for (j = 0; j < crosswordArray[i].length; j++) 
  {
    crosswordArray[i][j] = ''; 
  }
}

//get random word and place it on the board

getRandomWord();
placeWord(RandomWord,1,1,true);
AddClue (true);

CheckandPlaceWord()

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


function createCrosswordPuzzle() 
{ 
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
heading.innerText = 'Crossword Clues'; 
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
// this function shows the array that is holding the the current crossword puzzle. THis is for debugging 
var OutputArray = ""
var OutputCluesArray = ""
var CRow = ""
var i
var j


for (i = 0; i < crosswordArray.length; i++) 
{ 
  CRow = ""
  for (j = 0; j < crosswordArray[i].length; j++) 
  {
  CRow = crosswordArray[i][j]; 
    if(CRow == '')
    {
      CRow = '\t';
    }
    OutputArray = OutputArray + CRow;
  }
  OutputArray = OutputArray + '\n';
}

    
for (i = 0; i < cluesArray.length; i++) 
{ 
  OutputCluesArray = OutputCluesArray + cluesArray[i] + '\n';
}
alert (OutputArray);

alert(OutputCluesArray);
}

function AddClue (bAcross)
{
// This function will add a clue to the hints array
var sOrientation
// sOrientation is passed in to say whether the word is going accross or down
if(bAcross == true)
{
  sOrientation = "ACROSS"
}else
{
  sOrientation = "DOWN"
}
if (cluesArray === undefined || cluesArray.length == 0) {
  // array does not exist or is empty, then initialise the array
  cluesArray.push([1, RandomClue, RandomWord,sOrientation])
  }
  else
  {
    // If the array is alreadfy initialised, Add one to the existing array
  cluesArray.push([cluesArray.length + 1, RandomClue, RandomWord,sOrientation]);
  }


}


function ClearScreen()
{
// This function clears the existing crossword away

  let divElement = document.getElementById("hints-frame");
  divElement.remove();

  let divElement2 = document.getElementById("Crossword-frame");
  divElement2.remove();

}

function CheckandPlaceWord()
{
// This function tries to place 20 words on the crossword array
// It gets a random word
// for each letter in the random word it scans tha crossword to see if it can match a letter
// if it can, it then checks to see if the word could be placed on the crossword
// if it can be placed it adds it to the crossword and stores the clue

  for (var i = 0; i < 80; i++) 
  {
    getRandomWord();
    var bPlaced = false;
    for (var j = 0; ((j < RandomWord.length)&&(bPlaced==false));j++)
    {
      sLetter = RandomWord.substr(j,1);
      
      for(var k = 0; ((k < crosswordArray.length)&&(bPlaced==false)); k++)
      {
        for(var l = 0; ((l < crosswordArray[k].length) &&(bPlaced==false)); l++)
        {

                if (sLetter == crosswordArray[k][l])
                {
                 if (j==0)
                 {
                  // can the word be placed horizontally
                  Isclear(k,l,j,true);
                  
                  if (Canbeplaced==true) 
                    {
                      placeWord(RandomWord,k,l,true);
                      bPlaced = true;
                      AddClue (true);
                    } 
                    else
                    {
                      // can the word be placed vertically
                      Isclear(k,l,j,false)
                      
                      if (Canbeplaced==true) 
                      {
                      placeWord(RandomWord,k,l,false);
                      bPlaced = true;
                      AddClue (false); 
                      }
                  }

                 }
                }
        }

      }
    }
  }
}

function Isclear(startrow, startcolumn, ipoint, horizontalp)
{
  // This function checks to see if a word can be placed
  // The rules are :
  // The word should be clear , not touch any already placed words on the array
  // The word shouldnt run over the edges of the array
  // The ends of the word shouldnt touch a word that has already been placed on the array
  // This function assumes that it can be placed . If any of the illegal placement confditions are found it sets the flag to false
  // ipoint is the intersection of the placed word with the words already in the crossword


  if (crosswordArray === undefined || crosswordArray.length == 0) 
  {
    alert( "Warning: crossword array is empty")
    }
    
    if (RandomWord === undefined || RandomWord.length == 0) 
    {
      alert( "Warning: random word is empty")
      }

  Canbeplaced = true;

  if (horizontalp == true)
  {
    // If you are placing horizontally and the length of the word is greater than the array columns the word cannot be placed
    if((startcolumn + RandomWord.length) > crosswordArray[0].length)
    {
      Canbeplaced = false;
      return(true);
    }
  }
  else
  {
      // If you are placing vertically and the length of the word is greater than the array rows the word cannot be placed
    if((startrow + RandomWord.length) > crosswordArray.length)
    {
      Canbeplaced = false;
      return(true);
    }

  }


   // if you are placing horizontally 
if (horizontalp == true)
{
  for(var k = 0; k < RandomWord.length; k++)
  {
    //Check around outsides
    if (k !== ipoint)
    {
      //Check the row above is clear provided you are not on the first row
      if (startrow > 0) 
      {
        if (crosswordArray[startrow - 1][startcolumn + k] !== '')
        {
          Canbeplaced = false
        }
      }
      
      //Check the row below is clear provide you are not on the last row
      if (startrow < crosswordArray.length)
      {
        if (crosswordArray[startrow + 1][startcolumn + k] !== '')
        {
          Canbeplaced = false
        }
      }

      //check that the placement isnt overwriting anything
      if (crosswordArray[startrow][startcolumn + k] !== '')
        {
          Canbeplaced = false;
        }
    }
  }
  // check the space before the start of the word provided you are not in the first column
  if (startcolumn > 0)
  {
    if (crosswordArray[startrow][startcolumn - 1] !== '')
    {
      Canbeplaced = false
    }
  }
     
  // check the space after the end of the word provided the word doesnt finish on the very edge 
    if ((startcolumn + RandomWord.length) < crosswordArray[0].length)
      {
      // check the space one after the end of the word
      if (crosswordArray[startrow][startcolumn + RandomWord.length] !== '')
      {
        Canbeplaced = false
      }
  }
}
else
// Then if its a vertical placement
{
  for(var k = 0; k < RandomWord.length; k++)
  {
    //Check around outsides
    if (k !== ipoint)
    {
      // check left side provided you are not in the first column
      if (startcolumn > 0)
      {
        if (crosswordArray[startrow + k][startcolumn - 1] !== '')
        {
          Canbeplaced = false;
        }
      }
      // check right side provided you are not in the last column
      if (startcolumn < crosswordArray[0].length)
      {
        if (crosswordArray[startrow + k][startcolumn + 1] !== '')
        {
          Canbeplaced = false;
        }
      }
        //check that the placement isnt overwriting anything
      if (crosswordArray[startrow + k][startcolumn] !== '')
      {
        Canbeplaced = false;
      }

    }
  }
  // check the space before the start of the word
    if (crosswordArray[startrow - 1][startcolumn] !== '')
    {
      Canbeplaced = false;
    }

    // check the space after the end of the word provided the word doesnt finish on the edge
    if((startrow + RandomWord.length) < crosswordArray.length)
    {
      // check the space one after the end of the word
      if (crosswordArray[startrow + RandomWord.length][startcolumn] !== '')
      {
        Canbeplaced = false;
      }
      
    }


 
}


}