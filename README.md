# Horecabranden

## **Introductie**
Voor het probleem branden in de horeca is de buddy brandbeveiligingsapp gemaakt. Het probleem ontstaat vaak door menselijk handelen en gebrek aan kennis op de werkvloer. De buddy brandbeveiligingsapp bevat daarom een checklist en een quiz om dit te verbeteren. 

Per functie is er een checklist beschikbaar met een aantal taken die voltooid moeten worden. Als een taak voltooid is zal deze aangevinkt moeten worden. Daarnaast is de medewerker ook verantwoordelijk over een buddy, wat een andere medewerker is. Zo wordt er gecontroleerd of alle taken voltooid worden. Een buddysysteem werkt doordat iemand zo ook verantwoordelijkheid over een ander voelt. 

Met de quiz zal de kennis op de werkvloer verbeterd worden. De quiz bevat een aantal vragen over brandveiligheid en dus zal de medewerker hier over na moeten denken. Medewerkers spelen ook de quiz tegen een buddy. Per goed antwoord wordt er een score bijgehouden die vervolgens aan een leaderboard wordt toegevoegd. 

## **Google Firebase**
Het volgende vind je in de DB op Firestore:
* Gebruikers: gebruikers hebben een ID en een functie
* Functies: iedere functie heeft zijn uit te voeren taken
* Taken: hier worden gecontroleerde taken opgslagen. De inhoud bespreken we bij Checlist2
* Vragen: hier worden vragen voor de quiz uit opgehaald
* Score: hier worden de score en naam van de gebruiker opgeslagen


## **Checklist**

Lokaal draaiende POC's volgens de Must Haves uit de MoSCoW-analyse. Dit betekent een array waarin gegegevens zijn opgeslagen. Deze worden in de HTML geschreven door DOM-functies. Er is een render-functie voor het genereren van de HTML. Door een forEach wordt de ID van deze checkboxes en labels aangepast en weet het systeem welke items zijn aangevinkt. Deze worden gelogd door functie checkBoxnames.

## **Checklist2**

Let op: het gaat hier om test.html en test.js.

POC's die gegevens ophalen en verwerken vanuit Google Firebase volgens de Should Haves uit de MoSCoW-analyse. Het heeft een inlogfunctie waarmee ingelogd kan worden via Google. De user-ID van deze gebruiker wordt vastgelegd in de collectie 'taken' in Firebase. In deze zelfde collectie wordt het volgende geschreven:

* de tijd van aanmaken: een standaard Firebase-functie
* de taak die het betreft: waarde uit functie checkBoxNames
* checked: waarde die bepaald wordt door checkboxNames
* gebruiker: ID van de gebruikers in de DB
* UID": de user-ID van de met Google-account ingelogde persoon
* gebruikersnaam: diens gebruikersnaam

Verder is  er de functie lijstRef: een functie die de laatst gecheckte taken en diens parameters toont. 

Voor het tonen van de lijst is er de functie selectFunction, waarin door de ingevoerde werknemer (afwasser, barman, etc), taken opgehaald worden. 


## **VragenLijst**

### **index.html en script.js**

Lokale POC's doormiddel van een array waar vragen in zijn opgeslagen. Dit is gedaan volgens een MoSCoW-analyse. Met behulp van DOM-functies wordt het in de HTML geschreven. In de showQuestion functie wordt per antwoord een nieuwe button aangemaakt met een forEach.  De selectAnswer functie controleerd het antwoord en geeft aan wat goed en fout is, waarbij punten worden bijgehouden.  Met de incrementScore wordt deze score bij een goed antwoord met 1 opgehoogd en wordt opgeslagen in localStorage. De clearStatusClass en resetState zorgen ervoor dat bij elke nieuwe vraag de vorige wordt weggehaald. 

### **end.html en end.js**
Vanuit het overzicht is er een button beschikbaar voor de score. Uit de localStorage wordt de laatst behaalde score opgehaald. In het invoerveld kan hier een naam aan worden toegevoegd. Met saveHighScore wordt de score met de naam toegevoegd aan highScores in de localStorage. Daarna gaat de pagina terug naar het overzicht in de index.html.

### **highscores.html en highscores.js**
Uit de localStorage worden de gegevens uit highScores gehaald. Met highScores.map worden de naam en score toegevoegd op de HTML pagina. 


## **VragenLijst copy**

### **index.html en script_quiz.js**
POC's die vragen ophalen uit een Google Firebase database. Dit wordt gedaan volgens Should Haves uit een MoSCoW-analyse. De vragen uit de collectie 'vragen' en antwoorden worden eerst opgeslagen in een lijst, door middeld van vragenLijst.push. Bij startQuiz wordt gekeken naar beschikbare vragen en met startBijVraag wordt gezorgd dat de quiz altijd bij vraag 1 begint. De vragen en antwoorden worden in de HTML gezet. Met de antwoordCheck functie wordt gekeken of het geselecteerde antwoord gelijk is aan het goede antwoord uit de database. Vervolgens wordt er een kleur aan toegevoegd en een bij een goed antwoord een score. Deze wordt opgeslagen in de localStorage. 

### **end.html en end.js**

Na de laatste vraag wordt de end.html geladen. Door een naam in te voeren wordt deze toegevoegd aan de laatst behaalde score uit de localStorage. Dit wordt op de volgende manier naar de collectie 'score' geschreven:

* createdAt: een functie van Firebase om de tijd van aanmaak toe te voegen
* score: de behaalde score uit de local storage 
* name: de toegevoegde naam uit end.html

### **highscores.html en highscores.js**
Uit de 'score' collectie van de Google Firebase worden alle scores met de naam gehaald. Deze worden vervolgens aan de HTML toegevoegd.



## **Totaalproduct**

Start de webapp als volgt:

* open map tailwind
* open samenvoegen
* open inlog.html
* log in via Google
* voer functie in in de textbox
* klik op 'zie lijst'

De quiz werkt als volgt:
* open map tailwind
* open samenvoegen
* open inlog.html
* log in via Google
* klik op Quiz
* klik op vraag 1/4
* beantwoord de vragen
* voer naam in in het invulveld
* klik op leaderboard


