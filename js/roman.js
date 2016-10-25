$(function() {
      console.log("JavaScript is working on this site! Cool!");


      //-----------------------------------------------------------------------------------
      // convertToRomanNumeral function takes number as a parameter 
      // and returns a Roman numeral
      // 
      // 100 | C 
      // 90  | XC
      // 50  | L
      // 40  | XL
      // 10  | X
      // 9   | IX
      // 5   | V
      // 4   | IV
      // 1   | I

      function convertToRomanNumeral(input) {

        var output = "";
        
        // if (input == 0) {
        //   output=output.concat("nulla")
        // }
        // else if ($.isNumeric(input))
        
        
        while (input > 0) {
          if (input >= 100) {
            output=output.concat("C");
            input -= 100;


          }
          else if (input >= 90) {
            output=output.concat("XC");
            input -= 90;
          }
          else if (input >= 50) {
            output=output.concat("L");
            input -= 50;
          }
          else if (input >= 40) {
            output=output.concat("XL");
            input -= 40;
          }
          else if (input >= 10) {
            output=output.concat("X");
            input -= 10;
          }
          else if (input >= 9) {
            output=output.concat("IX");
            input -= 9;
          }
          else if (input >= 5) {
            output=output.concat("V");
            input -= 5;
          }
          else if (input >= 4) {
            output=output.concat("IV");
            input -= 4;
          }
          else if (input >= 1) {
            output=output.concat("I");
            input -= 1;
          }
          else if (input == 0) {
            output=output.concat("nulla")
          }
          else {
            output="This is not a roman numeral"
          }

          }




          console.log("Number = " + input);
          return output;
        }



        //-----------------------------------------------------------------------------------
        // Convert the number input when the button is clicked

        var $button = $("button");
        var $numberInput = $("#number_input");
        var $romanNumeralOutput = $("#roman_numeral_output");

        $button.on("click", function(e) {
          e.preventDefault();
          numberVal = $numberInput.val();
          romanNumeralVal = convertToRomanNumeral(numberVal);
          console.log("Roman numeral = " + romanNumeralVal);
          $romanNumeralOutput.val(romanNumeralVal);
        });

      });
