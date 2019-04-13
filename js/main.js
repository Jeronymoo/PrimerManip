
document.getElementById('add').addEventListener('click', function() {

  //Reverse String
    let primer = document.getElementById('item').value.toUpperCase();
    function reverseString(str){
    let revSrring = "";
    str.split("").forEach(char => revSrring = char + revSrring);
    return revSrring;}
    
    //Replace String    
    let reversed = reverseString(primer);
    let mapObj = {
       A:"T",
       T:"A",
       C:"G",
       G:"C" 
    };
    reversed = reversed.replace(/A|T|C|G/gi, function(matched){
      return mapObj[matched];
    });

    //Add a li
    let list = document.getElementById('todo');
    let item = document.createElement('h4');
    item.appendChild(document.createTextNode(reversed));
    list.appendChild(item);
  });