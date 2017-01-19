
// let notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// // Play the song at 400 beats per minute.
// playSong(notes, 400);
//
// First we need to be able to parse individual notes. Write a function called parseNote, that takes a string representing a single note (e.g. "C#*2" or "A") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.

//var i = "A*3";
parseNote = function(i){
  var notes = i.split("*"); //[A,3]
  var obj ={};
    if (notes.length == 1){//beats default to 1 if unspecified
        obj.pitch=notes[0]; //pitch takes the first element
        obj.beats=1;
      } else { //if beats given
          obj.pitch = notes[0]; //same as above, but beats change
          obj.beats = parseFloat(`${notes[1]}`);
         }
  return obj;
}  //parseNote(i), returns { pitch: 'A', beats: 3 }

// split the string of songs, and if no beats,
// let song = "Ab*3 B# C*4 D*8 E*5"
parseSong = function(song){
  var element = song.split(" "); //[A*3,B,C*4]
  var final =[];
  for (let j of element){
    var p = parseNote(j);//{pitch:'A',beats:3}
    final.push(p);
  }
  return final; //
}
// console.log(parseSong(song)); parsed into [{pitch: 'Ab', beats: 1},{},{}]


 function begin () {
   var song = window.prompt("Enter notes of the song you'd like to play, following this format: A*3 B C*3 F G*3 F C D");
   playSong(parseSong(song), 400, begin);
}
begin();


// example "Gb*2 A Gb E D C# D G*2 G*2 G*2 A Gb*2 A# Gb E D C# D E*2 E*2 E*3 F F#*2 C# F#*2 E D C# D B*2 B*2 B*2 A G F#*2 E D B*2 C#*2 D*4";
