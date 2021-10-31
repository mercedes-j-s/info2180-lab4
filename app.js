function search_superheroes() {
    fetch('http://localhost/info2180-lab4/superheroes.php')
    .then(function(response)
    {
        return response.text();
    })
    .then(function(text){
        $('#result').html(text);
    });

    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('superheroes');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}