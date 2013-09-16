function getClasses(elem)
{
  var elemHndl = document.getElementById(elem);
  var classStr = elemHndl.className;
  var classArr = classStr.split(" ");
  return classArr;
}

function addClass(elem, className)
{
    //test to make sure that nothing is null
    if(elem == null)
    {
        alert("Element is null");
        return null;
    }
	//Element is not null, get a handle on it
	var elemHndl  = document.getElementById(elem);    
    //Get classes
    var classStr  = elemHndl.className;
    var stringArr = classStr.split(" ");
    //Check if class that is to be applied isn't already attached to
    //the element
    for(i = 0; i < stringArr.length; i++)
    {
        if(stringArr[i] == className)
        {
            return;
        }
    }
	elemHndl.className += " " + className;
}	

function test1(elem)
{
  var string = getClasses(elem);
  var hndl = document.getElementById(elem);
  hndl.innerHTML = "The classes are: " + string;
}

function test2(elem)
{
    var hndl = document.getElementById(elem);
    addClass(elem,"baz");
    hndl.innerHTML = "Classes now: " + hndl.className;
}

function test3(elem)
{
    var hndl = document.getElementById(elem);
    addClass(elem,"foo");
    hndl.innerHTML = "Classes now: " + hndl.className;
}

function reset(elem)
{
	var hndl = document.getElementById(elem);
	hndl.className = "";
    addClass(elem,"foo");
	addClass(elem,"bar");
    hndl.innerHTML = "Classes now: " + hndl.className;
}