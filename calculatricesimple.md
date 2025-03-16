## Calculatrice simple

## Étape 1/3 - Créer une variable
Utilise l'onglet ``||variables: Créer une variable||`` pour créer deux variables, une x, une y et une variable opéraiton. Insère ``||Variables: définir x à 0||`` et ``||Variables: définir y à 0||``

```blocks
let y = 0
let x = 0
```
## Étape 2/3 - Modifier la valeur de chacune des variables
Utilise les blocs ``||Basic: toujours||``, ``||logic: Si ... alors, sinon||``, ``||input:bouton A est pressé||``  et ``||variables: Modifier x de 1||``. 
Ton bloc logique devra contenir 4 parties, pour modifier les variables x, y et opération.
Pour s'assurer que nos variables ont les bonne valeur, ajouter un affichage de la valeur des variables en utilisant ``||Basic:Montrer nombre (...)||`` pour chaque section.
Pour le dernier sinon, ajoute un bloc de pause.

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        x += 1
        basic.showNumber(x)
    } else if (input.buttonIsPressed(Button.B)) {
        y += 1
        basic.showNumber(y)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        Opération += 1
        basic.showNumber(Opération)
    } else {
        basic.pause(100)
    }
})
```

## Étape 3/3 - Effectuer les calculs avec le micro:bit
Il y a plusieurs opérations possibles avec le Micro:Bit, nous utiliserons les 4 opérations de base (+,-,* et /).
Dans le but de faire les 4 opérations, il faudra utiliser les blocs  ``||logic: Si ... alors, sinon||``. 
Il faudra définir pour chacune des opérations la valeur de la variable opération doit prendre. Exemple : si opération =1 on fait une addition.
Laisse une trace dans ton document. 
Utilise les blocs``||math: ... + ...||`` et le bloc ``||input:bouton A est pressé||`` pour démarrer cette partie du programme. 

```blocks
input.onGesture(Gesture.Shake, function () {
    if (Opération == 1) {
        basic.showNumber(x + y)
    } else if (Opération == 2) {
        basic.showNumber(x - y)
    } else if (Opération == 3) {
        basic.showNumber(x * y)
    } else if (Opération == 4) {
        basic.showNumber(x / y)
    } else {
    basic.pause(100)
    }
})
```

## Étape 4/3 Bonus
Pour déterminer s'il y a eu une erreur dans l'entré de données, remplace la pause par un dessin de ? dans le groupe de blocs de calculs.
Utilise ``|| basic: Montrer LEDs||`` 
```blocks
basic.showLeds(`
    . # # . .
    # . . # .
    . . # . .
    . . . . .
    . . # . .
    `)
    ```
