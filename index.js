// Write your solution here!
let drivers=["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name)
  drivers.push(name)
end

function destructivelyPrependDriver(name)
  drivers.unshift(name)
end

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
