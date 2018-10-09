/*Fonction permettant de respecter la règle des modulos positifs
Un modulo (%), c’est :
    - le reste de la division euclidienne,
    - positif ou nul,
    - plus petit que la valeur absolue du diviseur.*/
Number.prototype.mod = function(n) {
  //traite la partie entière positive
	var m = (( this % n) + n) % n;
  //application du respect du reste positif et renvoi du résultat
	return m < 0 ? m + Math.abs(n) : m;
};
//Fonction permettant le calcul et renvoi du résultat
function calculus(primeNumber, secNumber){
  //Division euclidienne
  var product = parseFloat(primeNumber).mod(parseFloat(secNumber));
  //renvoi du résultat de la multiplication
  return product;
};
//Contrôle des données et affichage via la fonction Calculus()
function displayResult(){
  // On récupère les éléments saisis dans le formulaire
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  // Déclaration de constantes définissant la Regex pour [le nom et le prénom] et la ville à part
  const regexFirstScnd =  /^[-+]?[0-9]+(\.[0-9]+)?([eE][-+]?[0-9]+)?$/;
  // Condition gérant les erreurs de saisie
  if(!regexFirstScnd.test(firstNumber)||firstNumber==null){
    //PAS BON : Premier nombre
    alert("Erreur de saisie : Peu importe ce que vous avez mis mais "+firstNumber+", c'est pas bon !");
  }else if((!regexFirstScnd.test(secondNumber)||secondNumber==null)){
    //PAS BON : Deuxième nombre
    alert("Erreur de saisie : Peu importe ce que vous avez mis mais "+secondNumber+", c'est pas bon !");
  }else{
    //TOUT BON !
    var resultat = calculus(firstNumber,secondNumber);
    //Affichage du résulat
    alert("Le reste de la division de "+firstNumber+" et de "+secondNumber+" est : "+resultat);
  }
};
