// Write your solution here!
let drivers=["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver{
  drivers.pop() 
}

function destructivelyRemoveFirstDriver{
  drivers.shift()
}

function appendDriver(name){
  newdrivers= [...drivers, 'name']
}

function prependDriver(name){
  newdrivers= ['name',...drivers]
}
