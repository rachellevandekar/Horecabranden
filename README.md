# Horecabranden


**Google Firebase**
Het volgende vind je in de DB op Firestore:
* Gebruikers: gebruikers hebben een ID en een functie
* Functies: iedere functie heeft zijn uit te voeren taken
* Taken: hier worden gecontroleerde taken opgslagen. De inhoud bespreken we bij Checlist2
* Vragen: hier worden vragen voor de quiz uit opgehaald
* Score: hier worden bhe


**Checklist**

Lokaal draaiende POC's volgens de Must Haves uit de MoSCoW-analyse. Dit betekent een array waarin gegegevens zijn opgeslagen. Deze worden in de HTML geschreven door DOM-functies. Er is een render-functie voor het genereren van de HTML. Door een forEach wordt de ID van deze checkboxes en labels aangepast en weet het systeem welke items zijn aangevinkt. Deze worden gelogd door functie checkBoxnames.

**Checklist2**

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


**totaalproduct**

Start de webapp als volgt:

* open map tailwind
* open samenvoegen
* open inlog.html
* log in via Google
* voer functie in in de textbox
* klik op 'zie lijst'

De quiz werkt als volgt:


