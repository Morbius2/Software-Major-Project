function readDictionaryCSV() {
  // The purpose of this function is to open the dictionary csv file and display its contents
  
  // HUGH : Create a routine on this screen that can add a new clue + word and save it into the CSV file
  
  
  // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Set the file path of the CSV file
    const filePath = "CrosswordDictionary.csv";

    
    // Set up a callback function to handle the XMLHttpRequest's response
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        // Split the CSV file into rows and convert each row to an array
        const rows = this.responseText.split("\n").map(row => row.split(","));
  
        // Create a new HTML table
        const table = document.createElement("table");

        // Creating a heading
        const headingrow = document.createElement("tr");
        const headingwordCell = document.createElement("td");
        const headingclueCell = document.createElement("td");
        headingwordCell.innerText = "WORD";
        headingclueCell.innerText = "CLUE";
        headingrow.appendChild(headingwordCell);
        headingrow.appendChild(headingclueCell);
        table.appendChild(headingrow);

        // Loop through the rows of the CSV file and create a new HTML row for each row
        for (let i = 0; i < rows.length; i++) {
          // Create a new HTML row
          const row = document.createElement("tr");
  
          // Create a new HTML cell for the word
          const wordCell = document.createElement("td");
          wordCell.innerText = rows[i][0];
          wordCell.style = "color: white;"
          // Create a new HTML cell for the clue
          const clueCell = document.createElement("td");
          clueCell.innerText = rows[i][1];
          clueCell.style = "color: white;"
          // Add the word cell and clue cell to the row
          row.appendChild(wordCell);
          row.appendChild(clueCell);
  
          // Add the row to the table
          table.appendChild(row);
        }
  
        // Append the table to the document body
        document.body.appendChild(table);
      }
    };
  
    // Open the CSV file using the GET method
    xhr.open("GET", filePath);
  
    // Set the response type to text
    xhr.responseType = "text";
  
    // Send the XMLHttpRequest
    xhr.send();
  }

  function AddCluetoCSV(){

    
    //var data = ["MILES","Clue wording"];
    
    //fs.writeFile("data.csv", data.join(","), function(err) {
    //if (err) throw err;
    //console.log("data saved");
    //});



    OutputMessage = "Your clue was successfully added to the dictionary file " 
    swal("Success!", OutputMessage, "success");

  }