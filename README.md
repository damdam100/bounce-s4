# Bounce S4

Bounce S4 is een uitbreiding op de orginele Bounce.js, een javascript library gemaakt door [Luuk Derkx](https://github.com/drkx/bounce).


## Documentatie
---
## Implementatie in een HTML document
Als je een bounce element wilt gebruiken op je pagina, is het belangrijk dat je deze in een parent container doet. Deze container geeft de grensen aan waar de bounce elementen binnen blijven. 
```html
<!-- Een voorbeeld waarin twee bounce elementen worden gemaakt -->
<div id='bounceContainer'>
    <div class='bounce1'>
        bounce element 1
    </div>
    <div class='bounce2'>
        bounce element 2
    </div>
</div>

<script>
    //hierin worden de elementen gekoppeld aan de javascript functies
    var bounce1 = new Bounce();
    bounce1.init('bounce1');
    
    var bounce2 = new Bounde();
    bounce2.init('bounce2');
</script>
```

## Standaard functies
Deze functies zaten standaard in Bounce.js voordat we er additionele functies aan hebben toegevoegd.

### gravity:
Met deze functie kun je de valsnelheid van het element beslissen. De variable die je meegeeft moet een getal zijn
```html
<script>
    // maakt een bounce element aan met een gravity van 5
    var bounce = new Bounce();
    bounce.init('bounce1', {gravity: 5});
</script>
```

### updateSpeed
Met deze functie kun je het aantal miliseconden aangeven waarmee het bounce element geanimeerd wordt. De standaard is 1 miliseconde.
```html
<script>
    // maakt een bounce element aan die om de 5 miliseconde update
    var bounce = new Bounce();
    bounce.init('bounce1', {updateSpeed: 5});
</script>
```

## Toegevoegde functies
deze functies zijn door [Jesse van der Elst](https://github.com/TheUnderdoggie) en [Damien Michiels](https://github.com/damdam100) gemaakt. Bij elke functie staat aangegeven wie die heeft gemaakt.

### (Damien)moveX:
Met deze functie kun je de horizontale beweging van het bounce element aanpassen. Deze staat standaard op 0. De variable die je meegeeft moet een getal zijn.
```html
<script>
    //maakt een bounce element aan wat 5 pixels omlaag gaat, en 2 pixels opzei gaat per miliseconde.
    var bounce = new Bounce();
    bounce.init('bounce1', {gravity: 5, moveX: 2});
</script>
```

### (Jesse)info:
Met deze functie kun je de positie van het bounce element aangeven. Er zijn drie invoeropties:
 - geen; Er wordt geen informatie over de positie weergeven.
- zwart; Er wordt informatie over de positie weergeven in zwart/wit.
- kleur; Er wordt informatie over de positie weergeven in groen/geel/rood, afhankelijk van de hoogte.
    
De standaardwaarde is 'geen'.
```html
<script>
    //maakt twee bounce elementen, waarvan de eerste in zwart/wit informatie geeft, en de tweede in kleur
    var bounce = new Bounce();
    bounce.init('bounce1', {info: 'zwart'});
    
    var bounce2 = new Bounce();
    bounce2.init('bounce2', {info: 'kleur'});
</script>
```

### (Damien)color:
Met deze functie kun je een achtergrondkleur geven aan het bounce element. De invoer kan alleen in css RGB waardes. Als het niet lijkt te werken, controleer dan de console in het developer scherm. De standaard waarde is wit.
```html
<script>
    //maakt een element met een paarse achtergrond die 50% transparant is
    var bounce = new Bounce();
    bounce.init('bounce1', {color: 'rgb(200, 0, 255, 0.5)'});
</script>
```

## Demo 
---
Je kan een demo [hier](http://i363720.hera.fhict.nl/Bounce/) zien.

## Motivatie
---
Om onze javascript en Github skills te oefenen en te laten zien zijn we samen deze bestaande library gaan uitbreiden.


## Installatie
---
Download het bounce.js bestand, stop het in je hoofdfolder, en  roep het aan op de pagina(s) waar je het wilt gebruiken.
