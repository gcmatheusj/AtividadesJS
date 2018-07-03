//Varáveis definidas com a palavra reservada var, tem escopo global e escopo de função.
{
    {
        {
            {
                var sera = 'Será??';
                console.log(sera);
            }
        }   
    }
}

//A variável var será é visível para todo mundo que estiver fora do bloco onde ela foi declarada.
console.log(sera);

//A variável var só será visível dentro do escopo da função.
function teste(){
    var local = 123;
    console.log(local);
}

teste();
