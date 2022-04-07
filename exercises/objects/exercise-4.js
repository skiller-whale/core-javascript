"use strict"

const carrieFisher = { sing () { console.log('I can sing.')} }
const lindseaBuckingham = { playGuitar () { console.log('I can play the guitar.')} }
const leoSeayer = { playHarmonica () { console.log('I can play the harmonica.')}}

console.log('Carrie Fisher:')
carrieFisher.sing()

console.log('Lindsea Buckingham')
lindseaBuckingham.sing()
lindseaBuckingham.playGuitar()

console.log('Leo Seayer')
leoSeayer.sing()
leoSeayer.playGuitar()
leoSeayer.playHarmonica()
