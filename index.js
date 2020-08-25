// Write your solution here!
let drivers=["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name)
  drivers.push(name)
end

function destructivelyPrependDriver(name)
  drivers.unshift(name)
end

function destructivelyRemoveLastDriver()
  drivers.pop() 
end 

function destructivelyRemoveFirstDriver()
  drivers.shift()
end 

function appendDriver(name)
  newdrivers= [...drivers, 'name']
end

function 
