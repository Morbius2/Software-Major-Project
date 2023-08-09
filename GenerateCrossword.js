// This is the master function for creating a new crossword. It contains some global variables defined below


// variable to indicate if a word can be placed on the crossword puzzle
var Canbeplaced 
// the position of the random word selected from the dictionary
var RandomWordPosition
// the clue from the dictionary associated with the current selected random word
var RandomClue
// the randomly selected word from the dictionary
var RandomWord
// the array that holds all the words read in from the dictionary
var rows
// the array that hold the clues for the current crossword puzzle
var cluesArray = new Array()
// a flag that if true will send debugging messages to the console. only switch to true during testing
var DebugMode = false


// the array that holds the current crossword puzzle
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

      // a duplicate blank array to copy over the current crosswrd array to reset it when a new puzzle is created
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
  // This function loads the CSV file into a global array where it can be used for random word selection
  // We did not cover file loading in class so I did independent research to determine how to do this
  // I found this link on the internet https://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript
  // modified the code to work
  
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // Set the file path of the CSV file
  const filePath = "CrosswordDictionary.csv";

  
  // Set up a callback function to handle the XMLHttpRequest's response
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // Split the CSV file into rows and convert each row to an array
     rows = this.responseText.split("\n").map(row => row.split(","));
    
   // alert ("CSV file load completed.\nThere are " + rows.length + " loaded and ready to use")

    swal("Dictionary load success", "There are " + rows.length + " words  loaded and ready to use", "success");

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
// Here I'm using the Math object for the random number generation
// I looked up how to use these objects here https://www.w3schools.com/js/js_math.asp
  RandomWordPosition = Math.floor(Math.random() * rows.length);

  RandomClue = rows[RandomWordPosition][1];
  RandomWord = rows[RandomWordPosition][0];

  if (DebugMode == true)
{
  console.log("Random Word Generated : ",RandomWord)
}
   

}


function BuildNewCrossword ()
{
// This function will create a brand new crossword puzzle
//to make the message boxes look better I researched Javascript pluggins SWAL is a free plug-in for
//details on how sweetalert works
// https://sweetalert.js.org/
// The swal command operates exactly like the "alert" function. The description of how this function works is here
// https://sweetalert.js.org/docs/


if (rows == null)
{
  swal("Crossword generate", "Load the dictionary before building a crossword", "error");
  return(false);
}

ClearScreen()

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

//get random word and places it on the board. Word must be longer than 8 letters

let foundlongword = false;
do {
  getRandomWord();
  if (RandomWord.length >= 8)
  {
    foundlongword = true;
  }
}
while (foundlongword == false);

placeWord(RandomWord,1,1,true);
AddClue (true);

CheckandPlaceWord()

swal("Crossword creation success", "A new crossword of " + cluesArray.length + " words has been created", "success");

DisplayCrosswordPuzzle()

//alert("New crossword generated");


}

function placeWord (sWordtoPlace, atRow, atColumn, Horizontalplacement)
{
//This function puts a word into the current crossword
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

// The clue number has be put into the cell at the start of the placed word
// Down arrow ascii ↓ Cross arrow →
// right arrow is 39
// down arrow is &#8595
if (Horizontalplacement == true)
{
  crosswordArray[atRow][atColumn - 1] = (cluesArray.length + 1) + '→'
}
else
{
  crosswordArray[atRow - 1][atColumn] = (cluesArray.length + 1) + '↓'
}

}


function DisplayCrosswordPuzzle() 
{ 
// This functions displays the current Crossword Puzzle on the screen. It creates 2 frames. One for the crossword puzzle and one for the clues
if (DebugMode == true)
{
  console.log("Displaying crossword",RandomWord)
}

if (crosswordArray === undefined || crosswordArray.length == 0) 
{
  console.log( "Warning: crossword array is empty")
  }

// This function loops through the crossword array and
// creates a class for the crossword frame, when a box is  placed, is is placed as an array in the crossword frame

// I did some research on how to create frames and tables ujsing javascript.
// I used this resource on w3schools to get ideas for code: https://www.w3schools.com/jsref/met_document_createelement.asp

var CrosswordFrame = document.createElement('div'); 
CrosswordFrame.className = 'Crossword-frame'; 
CrosswordFrame.id = 'Crossword-frame';
const table = document.createElement('table'); 

table.style.borderCollapse = 'collapse'; 
// For each row in the array
for (let i = 0; i < crosswordArray.length; i++) 
    { 
    const row = document.createElement('tr'); 
    // for each cell in ech row of the array
    for (let j = 0; j < crosswordArray[i].length; j++) 
        { 
        const cell = document.createElement('td');
        cell.style.border = '1px solid black'; 
        cell.style.width = '50px'; 
        cell.style.height = '50px'; 

        if (crosswordArray[i][j] !== '') 
        { 
        var sContents = ""; 
        sContents = crosswordArray[i][j].toString();
          if (sContents.search(/[^a-zA-Z]+/) === -1)
          // If the letter check is an A to Z make it an input put box otherwise add the clue indicator
            {
              const input = document.createElement('input'); 
              input.setAttribute('type', 'text'); 

            //The ID for the HTML boxes that the users enters their answers is related to the position in the array
            // The ID for the the first row and column is "0000"
            // The first 2 digits relate to the row and the second 2 digits relate to the column
            // for example the HTML input box with the ID of "0305" link to crossword array frow 4 column 6 

          
              input.setAttribute('id', (("0" + i.toString()).slice(-2)) + ("0" + j.toString()).slice(-2)); 

              
              input.setAttribute('maxlength', '1');
              input.setAttribute('autocomplete', 'off');  
              input.style.width = '50px'; 
              input.style.height = '50px'; 
              input.style.textAlign = 'center'; 


              input.style.fontSize = '50px';
              cell.appendChild(input); 
            }else
            {
              // If it is not a letter in the crosdsword array it must be a number and the text needs to
              // been shown
              cell.style.backgroundColor = 'black';
              cell.innerText = crosswordArray[i][j];
              cell.style.color = 'white'
              cell.style.textAlign = 'center'; 
            }

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
heading.innerText = 'CLUES'; 
hintsFrame.appendChild(heading); 
var heading2 = document.createElement('h3'); 
heading2.innerText = 'ACROSS'; 
hintsFrame.appendChild(heading2); 

var heading3 = document.createElement('h3'); 
heading3.innerText = 'DOWN'; 


// create the list for the hints 
var acrosshintsList = document.createElement('ul'); 
var downhintsList = document.createElement('ul'); 
// loop through the cluesArray and create a list item for each clue 
for (var i = 0; i < cluesArray.length; i++) 
{ 
  var clue = cluesArray[i][0] + " " + cluesArray[i][1]; 
  var listItem = document.createElement('li');     
  listItem.innerText = clue; 

  if (cluesArray[i][3] == "ACROSS")
  {
  acrosshintsList.appendChild(listItem); 
  }
  else
  {
    downhintsList.appendChild(listItem); 
  }
} 

    // add the hints list to the hints frame 
    hintsFrame.appendChild(acrosshintsList); 
    hintsFrame.appendChild(heading3); 
    hintsFrame.appendChild(downhintsList); 

    // add the crossword container to the document body 
    document.body.appendChild(hintsFrame); 
   
   
}


function AddClue (bAcross)
{
// This function will add a clue to the hints array when a word is added to the crossword during creation
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
  // array does not exist or is empty, then create the array
  cluesArray.push([1, RandomClue, RandomWord,sOrientation])
  }
  else
  {
    // If the array is already created, Add one to the existing array
  cluesArray.push([cluesArray.length + 1, RandomClue, RandomWord,sOrientation]);
  }


}


function ClearScreen()
{
// This function clears the existing crossword and hint frame from the screen

  let divElement = document.getElementById("hints-frame");
  if (divElement != null)
  {
    divElement.remove();
  } else
  {
    if (DebugMode == true)
    {
    console.log("Warning: No hint frame found")
    }
    
  }
  let divElement2 = document.getElementById("Crossword-frame");
  if (divElement2 != null)
  {
  divElement2.remove();
  }else
  {
    if (DebugMode == true)
    {
    console.log("Warning: No crossword frame found")
    }
  }

}


function CheckCrosswordAnswers()
{
// This function checks the entered answers
// There are 3 possible states for each box on the crossword either:
// - the box is empty
// - the box is filled with the correct letter
// - the box is filled an incorrect letter


if((cluesArray.length == 0) || (rows == null) )
{
  swal("forgetting something?", "You have to create a crossword, and fill it in first", "warning");
 return(false);
}

// variables to loop through the array
var i
var j
// variable to store the letter that was input by the user
var InputLetter
// variable to store the letter that is in the crossword puzzle answer
var CheckLetter

// store the number of letters that were not entered
let missedletter = 0

// store the number of letter that were correctly entered
let correctletter = 0

//store the number of letters that were incorrectly entered
let wrongletter = 0

// message to display to the user
var OutputMessage

//store the total number of letters in the crossword puzzle
var TotalLetters = 0

OutputMessage = ""
// The output message is what is shown to the user, it starts empty and gets set depending on 
// how many answers are correct

for (i = 0; i < crosswordArray.length; i++) 
// The Crossword array is 2d - you need 2 loops to check it for each row in the array
{ 
  CheckLetter = ""
  // for each cell in the row
  for (j = 0; j < crosswordArray[i].length; j++) 
  {
    CheckLetter = crosswordArray[i][j]; 
   
    if(CheckLetter != '')
    {
      if (CheckLetter.search(/[^a-zA-Z]+/) === -1)
      {
      TotalLetters++
      //The ID for the HTML boxes that the users enters their answers is related to the position in the array
      // The ID for the the first row and column is "0000"
      // The first 2 digits relate to the row and the second 2 digits relate to the column
      // for example the HTML input box with the ID of "0305" link to crossword array frow 4 column 6 
      InputLetter = document.getElementById((("0" + i.toString()).slice(-2)) + ("0" + j.toString()).slice(-2)).value.toUpperCase()
      
      if (DebugMode == true)
      {
      console.log("Letter Input by user: " + InputLetter, "Letter in Crossword array:" + CheckLetter)
      }

      if (InputLetter != '')
      {
        if (InputLetter == CheckLetter)
        {
          correctletter++
        } else
        {
          wrongletter++
        }
      }else
      {
        missedletter ++
      }
    }
    }
    
  }

}

if (correctletter > 0 )
{
  OutputMessage = OutputMessage + "Congratulations. You got " + correctletter + " letters right" + "\n"
}

if (wrongletter > 0 )
{
  OutputMessage = OutputMessage + "You got " + wrongletter + " letters wrong. Read a dictionary" + "\n"
}

if (missedletter > 0 )
{
  OutputMessage = OutputMessage + "You did not fill in " + missedletter + " letters. You should get glasses"
}

if (correctletter == TotalLetters)
{
OutputMessage = "Congratulations. \nYou successfully completed the crossword" 
swal("Congratulations!", OutputMessage, "success");
}
else{
  swal("Oh no!", OutputMessage, "error");

}


}

function CheckandPlaceWord()
{
// This function tries to place 80 words on the crossword array
// It gets a random word
// for each letter in the random word it scans tha crossword to see if it can match a letter
// if it can, it then checks to see if the word could be placed on the crossword
// if it can be placed it adds it to the crossword and stores the clue


// loop 80 times
  for (var i = 0; i < 80; i++) 
  {
    getRandomWord();
    var bPlaced = false;
    // for each letter in the random word I am trying to place
    for (var j = 0; ((j < RandomWord.length)&&(bPlaced==false));j++)
    {
      sLetter = RandomWord.substr(j,1);
      //get the letter from the random word
      // scan the Crossword array to see if there is a matching letter. The crossword array is 2d so it needs 2 loops
      // for each row
      for(var k = 0; ((k < crosswordArray.length)&&(bPlaced==false)); k++)
      {
        // for each cell in each row
        for(var l = 0; ((l < crosswordArray[k].length) &&(bPlaced==false)); l++)
        {
              // does the letter from the random word match the letter in the cell I am checking?
                if (sLetter == crosswordArray[k][l])
                {

                  // can the word be placed horizontally. This function checks all the spaces around the word to see if it can be placed on the crossword
                  Isclear(k,l,j,true);
                  
                  // if it can be placed then store the random word on the crossword and go back to trying to place words
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

function Isclear(startrow, startcolumn, ipoint, horizontalp)
{
  // This function checks to see if a word can be placed
  // The rules are :
  // The word should be clear , not touch any already placed words on the array
  // The word shouldnt run over the edges of the array
  // The ends of the word shouldnt touch a word that has already been placed on the array
  // This function assumes that it can be placed . If any of the illegal placement confditions are found it sets the flag to false
  // ipoint is the intersection of the placed word with the words already in the crossword
  // startrow and start column are the point where you want to put the word
  // horizontalp says if you want the word to go accrss or down , true means accross

  if (DebugMode == true)
  {
  if (crosswordArray === undefined || crosswordArray.length == 0) 
  {
    console.log( "Warning: crossword array is empty")
    }
    
    if (RandomWord === undefined || RandomWord.length == 0) 
    {
      console.log( "Warning: random word is empty")
      }
  }

  //Canbeplaced is a variable that says if the word is ok to go on the crossword at that position
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