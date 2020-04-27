let reverseString = function (str) {
    let revString = ""
    str.split("").forEach(char => revString = char + revString)
    return revString
}

let replaceString = function (txt) {
    let replacing = txt
    let mapObj = {
        A:"T",
       T:"A",
       C:"G",
       G:"C" 
    }
    replacing = txt.replace(/A|T|C|G/gi, function(matched) {
        return mapObj[matched];
    })
    return replacing
}

let complement = function (string) {
    let reversed = reverseString(string)
    let result = replaceString(reversed)
    return result
}

let append = function (resultado) {
    let count = document.getElementById('todo').childElementCount
    if (count > 0) {
        document.getElementById('todo').innerHTML = ''
    }
    let list = document.getElementById('todo')
    let item = document.createElement('h4')
    item.appendChild(document.createTextNode(resultado))
    list.appendChild(item)
    
}

document.getElementById('reverse').addEventListener('click', function() {
    let primer = document.getElementById('item').value.toUpperCase()
    let resultado = reverseString(primer)

    append(resultado)

    let current_pressed = document.createElement('small')
    let btn = document.createTextNode('Reversed')
    current_pressed.appendChild(btn)
    document.getElementById('todo').appendChild(current_pressed)
})

document.getElementById('complement').addEventListener('click', function() {
    let primer = document.getElementById('item').value.toUpperCase()
    let primer_r = reverseString(primer)
    let resultado = replaceString(primer_r)

    append(resultado)
    let current_pressed = document.createElement('small')
    let btn = document.createTextNode('Complemented')
    current_pressed.appendChild(btn)
    document.getElementById('todo').appendChild(current_pressed)
})

document.getElementById('replace').addEventListener('click', function() {
    let primer = document.getElementById('item').value.toUpperCase()
    let resultado = replaceString(primer)

    append(resultado)

    let current_pressed = document.createElement('small')
    let btn = document.createTextNode('Reversed & Complemented')
    current_pressed.appendChild(btn)
    document.getElementById('todo').appendChild(current_pressed)
})
