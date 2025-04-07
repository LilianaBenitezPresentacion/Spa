


function LetterFinder(word,match){

    for(var i=0; i< word.lenght; i++ ){

        if(word[i] == match ){
            console.log('Found the', match, 'at', i)
        }
        else{
            console.log('---No match found at', i)
        }
        
    }
    
}



LetterFinder("test", "t")