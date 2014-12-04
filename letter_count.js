function processWord(word) {
    word = word.toLowerCase();
    var a = word.split('');
    var repeatCount = 0;
    for (var i in a) {
        var letter = a[i];
        var re = new RegExp('[' + letter + ']', 'g');
        var count = word.match(re).length;
        if (count > repeatCount) {
            repeatCount = count;
        }
    }
    return repeatCount;
}

function LetterCountI(str) {
    var words = str.split(" ");
    var accounting = [];
    var winner = '';
    
    for (var i in words) {
        var repeats = processWord(words[i]);
        accounting.push([words[i], repeats]);
    } // for
    // process accounting
    var mostRepeats = 1;
    for (var j = 0; j < accounting.length; j++) {
        
   
        if (accounting[j][1] > mostRepeats) {
            mostRepeats = accounting[j][1];
             winner = accounting[j][0];
        } 
  } // for
    winner = (mostRepeats > 1 ? winner : -1);
    return winner;
}