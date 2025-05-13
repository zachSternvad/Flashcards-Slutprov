// --- Datadefinitioner ---
const webDevQuestions = [
    {
        id: "webb_q1",
        question: "Vad används HTML-formulär till?",
        options: [
            "Att endast visa statisk information på en webbsida.",
            "Att samla in data från användare för bearbetning.",
            "Att spela upp video och ljud.",
            "Att definiera sidans grundläggande struktur."
        ],
        correctAnswerIndex: 1,
        explanation: "HTML-formulär är primärt till för att samla in indata från användare, som sedan kan skickas till en server för vidare hantering, exempelvis för inloggning, registrering eller sökningar."
    },
    {
        id: "webb_q2",
        question: "Vilket HTML-element används för att skapa ett formulär?",
        options: ["<form>", "<fieldset>", "<input>", "<div>"],
        correctAnswerIndex: 0,
        explanation: "HTML-elementet `<form>` används för att skapa ett formulär. Det omsluter alla formulärkontroller som textfält, knappar etc."
    },
    {
        id: "webb_q3",
        question: "Vad är skillnaden mellan POST och GET i ett formulär?",
        options: [
            "GET skickar data dolt, POST skickar data synligt i URL:en.",
            "POST har en strikt datamängdsbegränsning, GET har ingen.",
            "GET används för känslig data, POST för icke-känslig data.",
            "GET skickar data i URL:en (begränsad mängd, för hämtning), POST skickar data i HTTP-kroppen (större mängd, för sändning/bearbetning)."
        ],
        correctAnswerIndex: 3,
        explanation: "GET-metoden lägger till formulärdata i URL:en, är begränsad i storlek och bör inte användas för känslig information. POST-metoden skickar data i HTTP-förfrågans kropp, vilket är säkrare för känslig data och hanterar större datamängder."
    },
    {
        id: "webb_q4",
        question: "Vilket attribut används i `<form>`-taggen för att definiera var formulärdatan ska skickas?",
        options: ["method", "id", "action", "target"],
        correctAnswerIndex: 2,
        explanation: "Attributet `action` i `<form>`-taggen specificerar URL:en dit formulärdatan ska skickas när formuläret submittas."
    },
    {
        id: "webb_q5",
        question: "Vad gör attributet `required` i ett formulärfält?",
        options: [
            "Det gör fältet skrivskyddat.",
            "Det döljer fältet från användaren.",
            "Det anger att fältet måste fyllas i innan formuläret kan skickas.",
            "Det förifyller fältet med ett standardvärde."
        ],
        correctAnswerIndex: 2,
        explanation: "Attributet `required` är ett booleskt attribut som, när det är närvarande, specificerar att ett inmatningsfält måste fyllas i innan formuläret kan skickas. Webbläsaren kommer att förhindra formulärsändning och visa ett felmeddelande om ett obligatoriskt fält är tomt."
    },
    {
        id: "webb_q6",
        question: "Hur kopplas en `<label>` till ett formulärfält för bästa tillgänglighet och användarvänlighet?",
        options: [
            "Genom att ge `<label>` och fältet samma `name`-attribut.",
            "Genom `for`-attributet på `<label>` som matchar fältets `id`, eller genom att nästla fältet inuti `<label>`.",
            "Genom `link`-attributet på `<label>` som pekar på fältets `class`.",
            "Det sker automatiskt om de är placerade efter varandra i HTML-koden."
        ],
        correctAnswerIndex: 1,
        explanation: "En `<label>` kan kopplas till ett formulärfält antingen genom att `for`-attributet på `<label>`-elementet sätts till `id`-attributet för formulärfältet, eller genom att formulärfältet placeras inuti `<label>`-elementet. Detta gör att klick på etiketten fokuserar på fältet och är viktigt för skärmläsare."
    },
    {
        id: "webb_q7",
        question: "Vilken `<input>`-typ används för att tillåta användare att ladda upp filer?",
        options: ["type=\"upload\"", "type=\"file\"", "type=\"data\"", "type=\"attachment\""],
        correctAnswerIndex: 1,
        explanation: "För att tillåta användare att ladda upp filer i ett HTML-formulär används `<input type=\"file\">`."
    },
    {
        id: "webb_q8",
        question: "Vilket HTML-element används för att skapa en rullgardinsmeny (dropdown)?",
        options: ["<select>", "<list>", "<dropdown>", "<input type=\"dropdown\">"],
        correctAnswerIndex: 0,
        explanation: "HTML-elementet `<select>` används för att skapa en rullgardinsmeny. Varje valbart alternativ i menyn definieras sedan med `<option>`-element inuti `<select>`-elementet."
    },
    {
        id: "webb_q9",
        question: "Hur kan man bäst gruppera relaterade formulärfält visuellt och semantiskt i HTML?",
        options: [
            "Med `<div>`-element och CSS-klasser för styling.",
            "Med `<fieldset>`-elementet, ofta tillsammans med ett `<legend>`-element för en rubrik.",
            "Genom att placera dem i en HTML-tabell (`<table>`).",
            "Med det icke-standardiserade `<group>`-elementet."
        ],
        correctAnswerIndex: 1,
        explanation: "Elementet `<fieldset>` används för att gruppera relaterade kontroller (formulärfält) i ett HTML-formulär. `<legend>`-elementet kan användas inuti `<fieldset>` för att ge en beskrivande rubrik till gruppen, vilket också förbättrar tillgängligheten."
    },
    {
        id: "webb_q10",
        question: "Vilken typ av `<input>`-element används primärt för att skapa en knapp som skickar formuläret?",
        options: ["<input type=\"submit\">", "<input type=\"button\">", "<input type=\"send\">", "<input type=\"action\">"],
        correctAnswerIndex: 0,
        explanation: "`<input type=\"submit\">` skapar en knapp som, när den klickas, initierar sändningen av formulärdatan till den server eller URL som specificerats i formulärets `action`-attribut."
    },
    {
        id: "webb_q11",
        question: "Vad innebär begreppet 'responsiv webbdesign'?",
        options: [
            "Att webbsidan laddar extremt snabbt.",
            "Att webbsidans design och layout anpassar sig dynamiskt för att se bra ut och fungera väl på olika skärmstorlekar och enheter (datorer, surfplattor, mobiler).",
            "Att webbsidan endast är designad för mobila enheter.",
            "Att webbsidan kan svara på röstkommandon."
        ],
        correctAnswerIndex: 1,
        explanation: "Responsiv webbdesign är en strategi för att skapa webbsidor som ger en optimal användarupplevelse över ett brett spektrum av enheter, genom att layouten och elementen anpassar sig till skärmens storlek och orientering."
    },
    {
        id: "webb_q12",
        question: "Vilka av följande CSS-tekniker är centrala för att implementera responsiv webbdesign?",
        options: ["Endast Media Queries", "Endast Flexbox", "Endast CSS Grid", "En kombination av Media Queries, Flexbox och CSS Grid"],
        correctAnswerIndex: 3,
        explanation: "Media queries tillåter att olika CSS-regler appliceras baserat på enhetens egenskaper (t.ex. skärmbredd). Flexbox och CSS Grid är kraftfulla layoutmoduler som gör det enklare att skapa flexibla och responsiva strukturer. Tillsammans utgör de grunden för modern responsiv design."
    },
    {
        id: "webb_q13",
        question: "Vad är huvudsyftet med en CSS media query?",
        options: [
            "Att fråga användaren om mediepreferenser.",
            "Att applicera specifika CSS-regler endast när vissa villkor gällande enhetens egenskaper (t.ex. skärmbredd, upplösning, orientering) är uppfyllda.",
            "Att optimera laddningstiden för medieelement som bilder och videor.",
            "Att spela upp mediafiler direkt via CSS."
        ],
        correctAnswerIndex: 1,
        explanation: "En media query i CSS används för att villkorligt tillämpa stilregler. Detta gör det möjligt att anpassa utseendet på en webbsida för olika enheter eller skärmstorlekar, vilket är en kärnkomponent i responsiv webbdesign."
    },
    {
        id: "webb_q14",
        question: "Vad innebär 'mobile first'-strategin inom responsiv webbdesign?",
        options: [
            "Att man först designar för stora datorskärmar och sedan skalar ner.",
            "Att webbplatsen ska ha flest funktioner på mobilen.",
            "Att man designar och utvecklar för den minsta skärmstorleken (mobiler) först, och sedan gradvis förbättrar och lägger till funktioner för större skärmar (tablets, desktops).",
            "Att webbplatsens prestanda är optimerad endast för mobila nätverk."
        ],
        correctAnswerIndex: 2,
        explanation: "'Mobile first' är en design- och utvecklingsfilosofi där man börjar med att skapa en basupplevelse för mobila enheter. Detta hjälper till att prioritera innehåll och funktionalitet för den mest begränsade miljön, och sedan bygga ut för större skärmar."
    },
    {
        id: "webb_q15",
        question: "Vilka typer av CSS-enheter rekommenderas generellt för att skapa flexibla och responsiva layouter?",
        options: ["Endast `px` (pixlar) för exakt kontroll.", "`em`, `rem`, `%`, `vw`, `vh`.", "Endast `pt` (punkter) för tryckliknande precision.", "En blandning av `px` och `cm` (centimeter)."],
        correctAnswerIndex: 1,
        explanation: "Relativa enheter som `em` (relativt till förälderns teckenstorlek), `rem` (relativt till rot-elementets teckenstorlek), `%` (procent av förälderelementets storlek), `vw` (viewport width), och `vh` (viewport height) är att föredra för responsiv design eftersom de skalar med olika skärmstorlekar och inställningar, till skillnad från absoluta enheter som `px`."
    },
    {
        id: "webb_q16",
        question: "Vad är den fundamentala skillnaden mellan Java och JavaScript?",
        options: [
            "JavaScript är ett skriptspråk som härstammar direkt från Java.",
            "De är två helt olika programmeringsspråk; Java är ett kompilerat språk ofta använt för backend och Android, medan JavaScript är ett tolkat skriptspråk primärt för webbläsarinteraktion (frontend).",
            "Java används enbart för webbdesign och JavaScript för serverlogik.",
            "Det finns ingen praktisk skillnad, namnen används synonymt."
        ],
        correctAnswerIndex: 1,
        explanation: "Trots namnlikheten (som mest beror på marknadsföringsskäl när JavaScript först lanserades) är Java och JavaScript fundamentalt olika språk. Java är starkt typat och kompileras till bytekod, medan JavaScript är dynamiskt typat och tolkas oftast direkt i webbläsaren."
    },
    {
        id: "webb_q17",
        question: "Vilka nyckelord används för att deklarera variabler i modern JavaScript?",
        options: ["`var`, `let`, `const`", "`define`, `declare`, `variable`", "`int`, `string`, `bool` (som i C#)", "`dim`, `set`"],
        correctAnswerIndex: 0,
        explanation: "I JavaScript används `var` (äldre standard, funktions-scope), `let` (block-scope, kan omtilldelas), och `const` (block-scope, kan inte omtilldelas efter initialisering) för att deklarera variabler."
    },
    {
        id: "webb_q18",
        question: "Vilken av följande är INTE en vanlig metod för att visa eller logga information i JavaScript i en webbläsarkontext?",
        options: ["`console.log()`", "`alert()`", "`document.write()`", "`System.print()`"],
        correctAnswerIndex: 3,
        explanation: "`console.log()` används för att skriva till webbläsarens konsol, `alert()` visar ett popup-meddelande, och `document.write()` skriver direkt till HTML-dokumentet (används med försiktighet). `System.print()` är inte en standardmetod i webbläsar-JavaScript."
    },
    {
        id: "webb_q19",
        question: "Hur definieras en grundläggande namngiven funktion i JavaScript?",
        options: [
            "Med `def functionName(): { ... }`",
            "Med `function functionName() { ... }`",
            "Med `method functionName() => { ... }`",
            "Med `<script type=\"function\" name=\"functionName\"> ... </script>`"
        ],
        correctAnswerIndex: 1,
        explanation: "En namngiven funktion i JavaScript definieras med nyckelordet `function`, följt av funktionens namn, en parenteslista för eventuella parametrar, och sedan måsvingar `{}` som omsluter funktionens kodblock."
    },
    {
        id: "webb_q20",
        question: "Vad är syftet med `return`-satsen i en JavaScript-funktion?",
        options: [
            "Att avsluta funktionen och eventuellt skicka tillbaka ett värde till den anropande koden.",
            "Att starta om funktionen från början.",
            "Att deklarera en variabel som endast är synlig inom funktionen.",
            "Att skriva ut ett värde till webbläsarens konsol."
        ],
        correctAnswerIndex: 0,
        explanation: "`return`-satsen avslutar exekveringen av den funktion den befinner sig i och kan skicka tillbaka ett värde. Om ett värde anges efter `return`, skickas det värdet tillbaka som resultat av funktionsanropet. Om inget värde anges returneras `undefined`."
    },
    {
        id: "webb_q21",
        question: "Vad representerar och tillåter egenskapen `innerHTML` i JavaScript?",
        options: [
            "Enbart det yttre HTML-skalet av ett element.",
            "Att hämta eller sätta HTML-innehållet (inklusive taggar) inuti ett DOM-element.",
            "En metod för att skapa nya HTML-element från grunden.",
            "En CSS-pseudoklass för att styla internt innehåll."
        ],
        correctAnswerIndex: 1,
        explanation: "`innerHTML` är en egenskap hos DOM-element som ger tillgång till HTML-koden inuti elementet. Den kan användas både för att läsa det befintliga HTML-innehållet och för att ersätta det med nytt HTML-innehåll."
    },
    {
        id: "webb_q22",
        question: "Förklara skillnaden mellan `==` (lös jämförelse) och `===` (strikt jämförelse) i JavaScript.",
        options: [
            "`==` jämför endast datatyper, `===` jämför endast värden.",
            "`==` utför typomvandling innan jämförelse, `===` jämför både värde och datatyp utan typomvandling.",
            "`==` är för strängar, `===` är för siffror.",
            "Det finns ingen skillnad, `===` är bara en äldre version av `==`."
        ],
        correctAnswerIndex: 1,
        explanation: "Den lösa jämförelseoperatorn `==` försöker konvertera operander till samma typ innan den jämför dem. Den strikta jämförelseoperatorn `===` utför ingen typomvandling; om både värde och typ inte är identiska, returnerar den `false`."
    },
    {
        id: "webb_q23",
        question: "Vad står förkortningen DOM för i webbsammanhang?",
        options: ["Document Object Model", "Dynamic Object Management", "Data Oriented Module", "Digital Output Mechanics"],
        correctAnswerIndex: 0,
        explanation: "DOM står för Document Object Model. Det är ett programmeringsgränssnitt för HTML- och XML-dokument som representerar sidans struktur som ett träd av objekt, vilket gör att skript (som JavaScript) kan interagera med och modifiera sidans innehåll och struktur."
    },
    {
        id: "webb_q24",
        question: "Vilken JavaScript-metod är mest specifik och effektiv för att hämta ett enskilt HTML-element baserat på dess unika `id`?",
        options: ["`document.getElementsByClassName('elementId')`", "`document.querySelector('elementId')`", "`document.getElementById('elementId')`", "`document.getElementsByTagName('elementId')`"],
        correctAnswerIndex: 2,
        explanation: "`document.getElementById('elementId')` är den mest direkta och ofta mest effektiva metoden för att hämta ett element när dess unika `id` är känt. `document.querySelector('#elementId')` fungerar också men är mer generell."
    },
    {
        id: "webb_q25",
        question: "Vad är en `HTMLCollection` i JavaScripts DOM-manipulation?",
        options: [
            "En 'levande' (live) samling av HTML-element som liknar en array, men inte är en fullständig array.",
            "En statisk lista över alla CSS-klasser som används på sidan.",
            "Ett JavaScript-objekt som lagrar hela HTML-sidans källkod som en sträng.",
            "En specialiserad typ av event-lyssnare för formulär."
        ],
        correctAnswerIndex: 0,
        explanation: "En `HTMLCollection` är en array-liknande samling av HTML-element. Den är 'levande', vilket innebär att den automatiskt uppdateras om de underliggande dokumentelementen ändras. Den returneras av metoder som `getElementsByTagName()` och `children`."
    },
    {
        id: "webb_q26",
        question: "Hur itererar man typiskt igenom en `HTMLCollection` i JavaScript, med tanke på att det inte är en vanlig array?",
        options: [
            "Med en `forEach`-loop direkt på samlingen.",
            "Med en vanlig `for`-loop som använder index och `.length`-egenskapen.",
            "Genom att först konvertera den till en array med `Array.from()` och sedan använda `forEach`.",
            "Både en vanlig `for`-loop och konvertering till array med `Array.from()` följt av `forEach` är vanliga metoder."
        ],
        correctAnswerIndex: 3,
        explanation: "Eftersom `HTMLCollection` inte är en sann JavaScript-array och saknar metoder som `forEach` direkt, itererar man oftast igenom den med en traditionell `for`-loop ( `for (let i = 0; i < collection.length; i++)` ). Ett annat vanligt sätt är att först konvertera den till en array med `Array.from(collection)` och sedan använda array-metoder som `forEach`."
    },
    {
        id: "webb_q27",
        question: "Vad gör metoden `document.createElement()` i JavaScript?",
        options: [
            "Den skapar ett nytt HTML-element av den specificerade typen (t.ex. 'div', 'p', 'span').",
            "Den skickar data från ett formulär till en server.",
            "Den laddar om den aktuella webbsidan.",
            "Den tar bort ett befintligt element från DOM-trädet."
        ],
        correctAnswerIndex: 0,
        explanation: "Metoden `document.createElement('tagName')` används för att programmatiskt skapa ett nytt HTML-element med den angivna taggtypen (t.ex. `document.createElement('p')` skapar ett nytt `<p>`-element). Elementet skapas i minnet och kan sedan läggas till i DOM-trädet."
    },
    {
        id: "webb_q28",
        question: "Vad är syftet med metoden `element.setAttribute(attributeName, attributeValue)` i JavaScript?",
        options: [
            "Att hämta värdet av ett specificerat attribut från ett element.",
            "Att lägga till ett nytt attribut eller ändra värdet på ett befintligt attribut för ett HTML-element.",
            "Att ta bort ett attribut från ett element.",
            "Att kontrollera om ett element har ett visst attribut."
        ],
        correctAnswerIndex: 1,
        explanation: "`element.setAttribute(name, value)` används för att sätta värdet på ett attribut för det specificerade HTML-elementet. Om attributet redan finns, uppdateras dess värde. Om attributet inte finns, skapas det med det angivna namnet och värdet."
    },
    {
        id: "webb_q29",
        question: "Vad är en fundamental skillnad mellan en textnod (`TextNode`) och en elementnod (`ElementNode`) i DOM-trädet?",
        options: [
            "Textnoder kan ha barnnoder, medan elementnoder inte kan det.",
            "Elementnoder representerar HTML-taggar (t.ex. `<p>`, `<div>`) och kan ha attribut och barnnoder, medan textnoder representerar själva textinnehållet inuti element.",
            "Elementnoder är alltid osynliga, medan textnoder alltid är synliga.",
            "Det finns ingen skillnad, termerna används omväxlande."
        ],
        correctAnswerIndex: 1,
        explanation: "I DOM-trädet representerar en `ElementNode` ett HTML-element (som `<p>`, `<h1>`, `<div>`) och kan ha attribut och andra noder (inklusive textnoder eller andra elementnoder) som barn. En `TextNode` representerar textinnehållet inuti ett element och kan inte ha egna attribut eller barnnoder."
    },
    {
        id: "webb_q30",
        question: "Vilket av följande är ett korrekt exempel på hur man deklarerar en `onclick` event-hanterare direkt i HTML?",
        options: [
            "<button event:click=\"myFunction()\">Klicka</button>",
            "<button onclick=\"myFunction()\">Klicka</button>",
            "<button script:onclick=\"myFunction()\">Klicka</button>",
            "<button handler=\"click:myFunction()\">Klicka</button>"
        ],
        correctAnswerIndex: 1,
        explanation: "Ett vanligt sätt att koppla en JavaScript-funktion till ett klickevent direkt i HTML är att använda `onclick`-attributet på ett element, t.ex. `<button onclick=\"myJavaScriptFunction()\">Text</button>`."
    },
    {
        id: "webb_q31",
        question: "När exekveras (körs) en JavaScript-funktion som har definierats?",
        options: [
            "Automatiskt så snart den har definierats av webbläsaren.",
            "Endast när sidan laddas om helt.",
            "När den explicit anropas (kallas på) i koden, eller när en händelse den är kopplad till inträffar.",
            "Alltid kontinuerligt i bakgrunden efter att sidan har laddats."
        ],
        correctAnswerIndex: 2,
        explanation: "En JavaScript-funktion körs inte automatiskt bara för att den har definierats. Den måste anropas (kallas på med sitt namn följt av parenteser, t.ex. `myFunction()`) någonstans i koden, eller vara kopplad som en händelsehanterare till ett event (som ett klick) som sedan utlöser den."
    },
    {
        id: "webb_q32",
        question: "Vad är ett 'event' (händelse) i JavaScript-sammanhang på en webbsida?",
        options: [
            "Ett felmeddelande som visas för användaren.",
            "En åtgärd eller förekomst som sker i webbläsaren, t.ex. att användaren klickar på en knapp, att sidan har laddats klart, eller att muspekaren rörs över ett element.",
            "En speciell typ av variabel som lagrar tidsinformation.",
            "En metod för att schemalägga kod att köras vid en framtida tidpunkt."
        ],
        correctAnswerIndex: 1,
        explanation: "Ett event (händelse) i JavaScript är en signal om att något har hänt på webbsidan. Det kan vara användarinteraktioner (som musklick, tangenttryckningar) eller webbläsarhändelser (som att sidan har laddats klart, att ett fönster ändrar storlek). JavaScript kan 'lyssna' efter dessa händelser och reagera på dem."
    },
    {
        id: "webb_q33",
        question: "Förutom inline-attribut (t.ex. `onclick`), hur kan man programmatiskt koppla en JavaScript-funktion som en event-lyssnare till ett HTML-element?",
        options: [
            "Genom CSS med `:event`-selektorn.",
            "Med `element.linkEvent('click', myFunction)`.",
            "Med metoden `element.addEventListener('eventName', myFunction)`.",
            "Genom att använda `element.triggerEvent('click', myFunction)`."
        ],
        correctAnswerIndex: 2,
        explanation: "Den rekommenderade och mest flexibla metoden för att koppla händelser till element programmatiskt i JavaScript är att använda `element.addEventListener('eventType', functionToCall)`. Exempelvis `myButton.addEventListener('click', handleClick);`."
    },
    {
        id: "webb_q34",
        question: "Vad är det primära användningsområdet för CSS (Cascading Style Sheets)?",
        options: [
            "Att definiera strukturen och innehållet på en webbsida.",
            "Att hantera databaser och serverlogik.",
            "Att beskriva presentationen och utseendet (styling) av HTML-dokument, inklusive färger, layout, typsnitt etc.",
            "Att skapa interaktivitet och dynamiskt innehåll på webbsidor."
        ],
        correctAnswerIndex: 2,
        explanation: "CSS används för att styra hur HTML-element ska visas för användaren. Det separerar webbsidans innehåll (HTML) från dess presentation (CSS), vilket gör koden mer organiserad och lättare att underhålla."
    },
    {
        id: "webb_q35",
        question: "Vad står förkortningen CSS för?",
        options: ["Cascading Style Sheets", "Creative Style Syntax", "Computer Style System", "Colorful Styling Scheme"],
        correctAnswerIndex: 0,
        explanation: "CSS står för Cascading Style Sheets."
    },
    {
        id: "webb_q36",
        question: "Vad är en viktig skillnad mellan att använda en klass (`class`) och ett ID (`id`) som CSS-selektorer?",
        options: [
            "Klasser kan bara användas på `<div>`-element, medan ID:n kan användas på alla element.",
            "Ett ID måste vara unikt per HTML-sida och används för att identifiera ett specifikt element, medan en klass kan appliceras på flera element för att gruppera dem stilmässigt.",
            "ID:n har högre specificitet än klasser när CSS-regler appliceras.",
            "Både b och c är korrekta."
        ],
        correctAnswerIndex: 3,
        explanation: "Ett `id`-attribut ska vara unikt för ett element på en hel HTML-sida, medan ett `class`-attribut kan användas på flera element för att applicera samma stil. Dessutom har ID-selektorer högre specificitet i CSS än klass-selektorer, vilket innebär att en stil definierad med ett ID väger tyngre om det finns konflikter."
    },
    {
        id: "webb_q37",
        question: "Hur kopplar man ett externt CSS-dokument (t.ex. 'style.css') till en HTML-sida?",
        options: [
            "<style src=\"style.css\"></style>",
            "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">",
            "<script type=\"text/css\" href=\"style.css\"></script>",
            "@import url('style.css'); (direkt i body)"
        ],
        correctAnswerIndex: 1,
        explanation: "Ett externt CSS-dokument länkas in i en HTML-sidas `<head>`-sektion med hjälp av `<link>`-taggen, där `rel=\"stylesheet\"` anger relationen och `href` specificerar sökvägen till CSS-filen, t.ex. `<link rel=\"stylesheet\" href=\"style.css\">`."
    },
    {
        id: "webb_q38",
        question: "Vilken CSS-egenskap används vanligtvis för att göra text fetstilt?",
        options: ["`text-style: bold;`", "`font-weight: bold;`", "`font-style: bold;`", "`text-decoration: bold;`"],
        correctAnswerIndex: 1,
        explanation: "CSS-egenskapen `font-weight` används för att specificera textens tjocklek. Värdet `bold` gör texten fetstilt."
    },
    {
        id: "webb_q39",
        question: "Hur ändrar man bakgrundsfärgen på ett HTML-element med CSS?",
        options: [
            "`bgcolor: #FF0000;`",
            "`background-color: red;` (eller t.ex. `#FF0000`)",
            "`color-background: blue;`",
            "`element-style: background(green);`"
        ],
        correctAnswerIndex: 1,
        explanation: "CSS-egenskapen `background-color` används för att sätta bakgrundsfärgen på ett element. Färgen kan anges med namn (t.ex. `red`), hexkoder (t.ex. `#00FF00`), RGB-värden etc.."
    },
    {
        id: "webb_q40",
        question: "Vad står förkortningen AJAX för i webbutveckling?",
        options: [
            "Asynchronous JavaScript and XML",
            "Automated JavaScript and XHTML",
            "Advanced Java and XML",
            "Asynchronous Java and XHTML"
        ],
        correctAnswerIndex: 0,
        explanation: "AJAX står för Asynchronous JavaScript and XML. (Även om JSON numera oftare används än XML för dataöverföring, kvarstår akronymen)."
    },
    {
        id: "webb_q41",
        question: "Vad är en primär fördel med att använda AJAX på en webbsida?",
        options: [
            "Att göra webbsidan helt oberoende av JavaScript.",
            "Att kunna uppdatera delar av en webbsida med ny data från servern utan att behöva ladda om hela sidan.",
            "Att exekvera all serverlogik direkt i webbläsaren.",
            "Att minska behovet av HTML och CSS."
        ],
        correctAnswerIndex: 1,
        explanation: "En stor fördel med AJAX är möjligheten att asynkront kommunicera med en webbserver och hämta eller skicka data. Detta tillåter att delar av en webbsida uppdateras dynamiskt utan att hela sidan behöver laddas om, vilket ger en snabbare och smidigare användarupplevelse."
    },
    {
        id: "webb_q42",
        question: "Vilka tekniker kombineras vanligtvis i AJAX-anrop (även om XML inte alltid används)?",
        options: [
            "HTML, CSS, JavaScript, och DOM för att presentera och manipulera data.",
            "Endast PHP och MySQL för serverkommunikation.",
            "Flash och SQL för datainteraktion.",
            "Python och Ruby för klientlogik."
        ],
        correctAnswerIndex: 0,
        explanation: "AJAX bygger på en kombination av existerande tekniker: HTML/XHTML och CSS för presentation, DOM (Document Object Model) för dynamisk visning och interaktion med data, JavaScript för att sammanföra allt och `XMLHttpRequest`-objektet (eller moderna `Workspace API`) för asynkron datakommunikation med servern. Dataformatet är ofta JSON numera istället för XML."
    },
    {
        id: "webb_q43",
        question: "Vad menas med 'asynkrona uppdateringar' i samband med AJAX?",
        options: [
            "Att uppdateringar sker vid en exakt synkroniserad tidpunkt varje dag.",
            "Att webbläsaren kan fortsätta vara responsiv och användaren kan interagera med sidan medan data hämtas från servern i bakgrunden.",
            "Att alla uppdateringar måste godkännas manuellt av användaren innan de visas.",
            "Att servern skickar uppdateringar utan att webbläsaren först begär dem."
        ],
        correctAnswerIndex: 1,
        explanation: "Asynkron betyder att JavaScript-koden inte behöver vänta på att servern svarar innan den fortsätter exekvera. Webbläsaren kan alltså skicka en förfrågan till servern, och medan den väntar på svar, kan användaren fortsätta interagera med sidan. När svaret kommer, kan en funktion (callback) uppdatera sidan."
    },
    {
        id: "webb_q44",
        question: "Varför är DOM (Document Object Model) viktigt för att skapa dynamiska webbsidor med JavaScript?",
        options: [
            "DOM specificerar endast hur servern ska tolka inkommande anrop.",
            "DOM tillhandahåller ett sätt för JavaScript att interagera med och modifiera strukturen, innehållet och stilen på en webbsidas HTML-element efter att sidan har laddats.",
            "DOM är ett alternativt märkspråk till HTML för att bygga webbsidor.",
            "DOM används uteslutande för att validera CSS-kod."
        ],
        correctAnswerIndex: 1,
        explanation: "DOM representerar HTML-dokumentet som ett träd av objekt. JavaScript kan använda DOM för att läsa, lägga till, ta bort och ändra HTML-element och deras attribut, vilket gör det möjligt att skapa interaktiva och dynamiskt uppdaterade webbsidor utan att behöva ladda om dem från servern."
    },
    {
        id: "webb_q45",
        question: "Vad är en 'nod' (node) i DOM-trädet?",
        options: [
            "En extern JavaScript-fil som är länkad till HTML-dokumentet.",
            "Varje enskild del av ett HTML-dokument, såsom ett element, ett attribut, eller en textsträng, representeras som en nod i DOM-trädstrukturen.",
            "En säkerhetsmekanism som förhindrar oönskade skriptändringar.",
            "En serverdator som är en del av webbplatsens infrastruktur."
        ],
        correctAnswerIndex: 1,
        explanation: "I Document Object Model representeras ett HTML- eller XML-dokument som ett träd av noder. Allt i ett HTML-dokument – hela dokumentet, huvudet, kroppen, varje element (t.ex. `<p>`, `<div>`), varje attribut till ett element, och varje textstycke – är en nod."
    },
    {
        id: "webb_q46",
        question: "Vilka är några vanliga typer av noder som man stöter på i DOM?",
        options: [
            "Endast elementnoder och funktionsnoder.",
            "Elementnoder, textnoder, attributnoder och kommentarsnoder.",
            "Servernoder, klientnoder och databasnoder.",
            "Stilnoder, skriptnoder och medienoder."
        ],
        correctAnswerIndex: 1,
        explanation: "DOM-trädet består av olika typer av noder. De vanligaste inkluderar: Elementnoder (representerar HTML-taggar), Textnoder (representerar textinnehållet i element), Attributnoder (representerar attributen för element), och Kommentarsnoder (representerar HTML-kommentarer)."
    }
];

const programmingQuestions = [
    {
        id: "prog_q1",
        question: "Vad är syftet med en `if`-sats i C#?",
        options: [
            "Att upprepa ett kodblock ett bestämt antal gånger.",
            "Att definiera en återanvändbar kodsekvens (en metod).",
            "Att tillåta programmet att fatta beslut och utföra olika kodblock baserat på om ett visst villkor är sant eller falskt.",
            "Att lagra en samling av data av olika typer."
        ],
        correctAnswerIndex: 2,
        explanation: "`if`-satsen används för villkorlig exekvering. Om villkoret inom parenteserna efter `if` evalueras till `true`, exekveras kodblocket som följer. Man kan också lägga till `else if`- och `else`-block för alternativa kodvägar."
    },
    {
        id: "prog_q2",
        question: "Hur fungerar en `switch`-sats i C# och när är den typiskt användbar?",
        options: [
            "Den används för att iterera över element i en samling, liknande en `foreach`-loop.",
            "Den utvärderar ett uttryck och jämför dess resultat med värden i flera `case`-etiketter, och exekverar sedan det matchande kodblocket. Användbar för val mellan flera kända alternativ.",
            "Den används uteslutande för att hantera asynkrona operationer.",
            "Den testar ett booleskt villkor och har bara två möjliga kodvägar, liknande en `if-else`-sats."
        ],
        correctAnswerIndex: 1,
        explanation: "En `switch`-sats tillhandahåller ett sätt att välja en av flera kodsektioner att exekvera baserat på värdet av ett uttryck (ofta en variabel). Varje `case` representerar ett möjligt värde. Det är ett tydligare alternativ till långa `if-else if-else`-kedjor när man jämför mot flera konstanta värden."
    },
    {
        id: "prog_q3",
        question: "Vad är den primära skillnaden mellan en `while`-loop och en `do/while`-loop i C#?",
        options: [
            "`while`-loopen körs alltid minst en gång, medan `do/while`-loopen kanske aldrig körs.",
            "`while`-loopen testar sitt villkor *före* varje iteration, medan `do/while`-loopen testar sitt villkor *efter* varje iteration (vilket garanterar minst en körning).",
            "Det finns ingen funktionell skillnad, `do/while` är bara en alternativ syntax.",
            "`do/while`-loopar kan bara användas med heltal som villkor."
        ],
        correctAnswerIndex: 1,
        explanation: "Huvudskillnaden är när villkoret utvärderas. En `while`-loop kontrollerar villkoret innan loopen startar (och före varje efterföljande iteration), så kroppen kanske aldrig körs. En `do/while`-loop exekverar kroppen minst en gång och kontrollerar sedan villkoret efter iterationen."
    },
    {
        id: "prog_q4",
        question: "Hur deklarerar du typiskt en array i C# som kan hålla 5 heltal?",
        options: [
            "`array<int> siffror = new array<int>(5);`",
            "`int[] siffror = new int[5];`",
            "`List<int> siffror = new List<int>(5);`",
            "`int siffror[5];` (C/C++ stil)"
        ],
        correctAnswerIndex: 1,
        explanation: "I C# deklareras en array med datatypen följt av `[]`, namnet på arrayen, och sedan initieras den med `new datatyp[storlek]`. Exempel: `int[] minArray = new int[5];`."
    },
    {
        id: "prog_q5",
        question: "Vad används en `foreach`-loop primärt till i C#?",
        options: [
            "Att exekvera ett kodblock så länge ett villkor är sant.",
            "Att iterera över varje element i en samling (t.ex. en array eller List) utan att behöva hantera index manuellt.",
            "Att definiera en räknare som ökar eller minskar med ett visst steg för varje iteration.",
            "Att hoppa till en specifik etikett (label) i koden."
        ],
        correctAnswerIndex: 1,
        explanation: "`foreach`-loopen är designad för att enkelt gå igenom alla element i en samling som implementerar `IEnumerable` (t.ex. arrayer, listor). Du behöver inte hålla reda på index eller samlingens storlek; loopen hanterar det automatiskt."
    },
    { 
        id: "prog_q6",
        question: "Beskriv ett exempel på ett HAR-förhållande (komposition/aggregation) mellan två klasser i objektorienterad programmering. Vad är dess syfte?",
        options: [
            "En `Anställd` ÄR en `Person`. Syftet är arv av grundläggande egenskaper.",
            "En `Bil` HAR en `Motor`. Syftet är att en `Bil` kan bestå av eller använda funktionaliteten hos ett `Motor`-objekt, vilket främjar återanvändning och modularitet.",
            "En `Motor` ÄR en del av en `Bil`. Syftet är att klassificera motortyper.",
            "Ett `Interface` HAR metoder. Syftet är att definiera ett kontrakt."
        ],
        correctAnswerIndex: 1,
        explanation: "Ett HAR-förhållande innebär att en klass innehåller en instans av en annan klass som ett fält eller egenskap. Exempel: `class Bil { Engine motor; }`. Här HAR bilen en motor. Syftet är att bygga komplexa objekt genom att kombinera enklare delar och främja kodåteranvändning och en tydligare modell av verkligheten."
    },
    {
        id: "prog_q7",
        question: "Vad innebär ett ÄR-förhållande (arv/inheritance) i objektorienterad programmering? Ge ett konkret exempel.",
        options: [
            "Att en klass använder en metod från en annan klass.",
            "Att en klass skapar en instans av en annan klass inuti en av sina metoder.",
            "Att en klass ärver egenskaper och metoder från en annan klass (subklassning). Exempel: `class Hund : Djur {}`, där en `Hund` ÄR ett `Djur`.",
            "Att två klasser delar data via en global variabel."
        ],
        correctAnswerIndex: 2,
        explanation: "Ett ÄR-förhållande representeras av arv (inheritance) i OOP. En subklass (eller härledd klass) ÄR en mer specialiserad version av sin basklass (eller superklass). Exempel: `class Labrador : Hund {}` innebär att en `Labrador` ÄR en `Hund` och ärver dess egenskaper, men kan också ha egna unika drag."
    },
    {
        id: "prog_q8",
        question: "Granska C#-koden: \n```csharp\nclass Vehicle { public string Brand; }\nclass Motorcycle : Vehicle { public string Model; }\nclass Program {\n static void Main(string[] args) {\n  Motorcycle m = new Motorcycle();\n  m.Brand = \"Yamaha\";\n  m.Model = \"MT-07\";\n }\n}\n```\nFinns det något fel? Om inte, förklara hur arvet fungerar.",
        options: [
            "Fel: `Motorcycle` kan inte komma åt `Brand` eftersom det är definierat i `Vehicle`.",
            "Fel: `Vehicle` måste ha en explicit konstruktor som anropas av `Motorcycle`.",
            "Inget fel. `Motorcycle` ärver det publika fältet `Brand` från `Vehicle`. Ett `Motorcycle`-objekt har därför både `Brand` och `Model`.",
            "Fel: `Main`-metoden måste först skapa ett `Vehicle`-objekt."
        ],
        correctAnswerIndex: 2,
        explanation: "Koden är korrekt. Klassen `Motorcycle` ärver från klassen `Vehicle`. Detta innebär att ett `Motorcycle`-objekt automatiskt får tillgång till alla publika (och skyddade) medlemmar från `Vehicle`, inklusive fältet `Brand`. Därför kan `m.Brand` tilldelas ett värde utan problem."
    },
    {
        id: "prog_q9",
        question: "Vad kommer följande C#-kod att skriva ut? \n```csharp\nabstract class Animal { public abstract void Speak(); }\nclass Cat : Animal { public override void Speak() { Console.WriteLine(\"Mjau\"); } }\nclass Dog : Animal { public override void Speak() { Console.WriteLine(\"Voff\"); } }\nclass Program { static void Main() { Animal a = new Cat(); a.Speak(); } }\n```",
        options: [
            "Voff",
            "Mjau",
            "Ett kompileringsfel uppstår.",
            "Ett NullReferenceException vid körning."
        ],
        correctAnswerIndex: 1,
        explanation: "Koden skriver ut \"Mjau\". Variabeln `a` är av typen `Animal` (abstrakt basklass), men objektet den refererar till är en instans av `Cat`. Eftersom `Speak()` är en abstrakt metod i `Animal` och implementeras med `override` i `Cat`, används `Cat`s version av `Speak()` vid anropet (detta kallas polymorfism)."
    },
    {
        id: "prog_q10",
        question: "Vad är det primära problemet med följande interface-definition i C# (om man utgår från traditionella interface före C# 8.0)? \n```csharp\ninterface IVehicle {\n void Drive() {\n  Console.WriteLine(\"Driving\");\n }\n}\n```",
        options: [
            "Interface-metoder måste deklareras som `public`.",
            "Ett interface kan inte innehålla några metoder, bara egenskaper.",
            "Interface-metoder får traditionellt sett inte ha en implementationskropp.",
            "Metoden `Drive` måste returnera ett värde, inte `void`."
        ],
        correctAnswerIndex: 2,
        explanation: "Traditionellt sett (och i C#-versioner före 8.0) specificerar ett interface endast ett kontrakt och får inte innehålla implementationskod (en kropp) för sina medlemmar. Klassen som implementerar interfacet ska tillhandahålla implementationen. (Notera: C# 8.0 och senare tillåter 'default interface methods' med implementation)."
    },
    {
        id: "prog_q11",
        question: "Vilken typparameter används oftast som platshållare (istället för `___`) i följande generiska klassdefinition i C#? \n```csharp\nclass Box<___> {\n private ___ item;\n public void Store(___ value) { item = value; }\n public ___ Retrieve() { return item; }\n}\n```",
        options: [
            "Object",
            "AnyType",
            "T (eller annan enstaka stor bokstav som TValue, TKey)",
            "GenericType"
        ],
        correctAnswerIndex: 2,
        explanation: "I C# är konventionen att använda en enda stor bokstav, oftast `T`, som platshållare för en typparameter i en generisk definition. När klassen sedan används specificeras en faktisk typ, t.ex. `Box<int>` eller `Box<string>`."
    },
    {
        id: "prog_q12",
        question: "Vad kommer följande C#-kod att skriva ut till konsolen? \n```csharp\nList<int> numbers = new List<int>() {10, 20, 30, 40};\nnumbers.RemoveAt(1);\nConsole.WriteLine(numbers.Count);\n```",
        options: ["4", "3", "20", "30"],
        correctAnswerIndex: 1,
        explanation: "Listan `numbers` initieras med {10, 20, 30, 40}. `numbers.RemoveAt(1)` tar bort elementet på index 1, vilket är värdet 20. Listan blir då {10, 30, 40}. `numbers.Count` returnerar antalet element i listan, vilket nu är 3."
    },
    {
        id: "prog_q13",
        question: "Vad blir resultatet av att köra följande C#-kod, och vad skrivs ut? \n```csharp\ntry {\n int result = int.Parse(\"abc\");\n Console.WriteLine(result);\n} catch (FormatException ex) {\n Console.WriteLine(\"Fel uppstod: \" + ex.Message);\n}\n```",
        options: [
            "Koden skriver ut 0.",
            "Koden kraschar med ett ohanterat undantag.",
            "Fel uppstod: Input string was not in a correct format.",
            "Ingenting skrivs ut."
        ],
        correctAnswerIndex: 2,
        explanation: "Försöket att konvertera strängen \"abc\" till ett heltal med `int.Parse(\"abc\")` kommer att misslyckas och kasta ett `FormatException`. `catch`-blocket fångar detta undantag och skriver ut \"Fel uppstod: \" följt av undantagets standardmeddelande."
    },
    {
        id: "prog_q14",
        question: "Om du ska skriva en C#-metod som sparar en boks titel och författare till en textfil 'book.txt', vilken metod från `System.IO` är lämplig för att enkelt skriva hela innehållet på en gång?",
        options: [
            "`File.ReadAllLines()`",
            "`File.AppendText()`",
            "`File.WriteAllText(\"book.txt\", content)`",
            "`StreamWriter.ReadLine()`"
        ],
        correctAnswerIndex: 2,
        explanation: "`System.IO.File.WriteAllText()` är en bekväm metod i C# för att snabbt skapa en ny fil (eller skriva över en befintlig), skriva en sträng till filen, och sedan stänga filen automatiskt."
    },
    {
        id: "prog_q15",
        question: "Vad är det huvudsakliga syftet med metoden `InitializeComponent()` i en C# Windows Forms-applikation?",
        options: [
            "Att ansluta till applikationens datakälla.",
            "Att köra användardefinierad initialiseringslogik vid programmets start.",
            "Att skapa och konfigurera alla grafiska kontroller (knappar, textrutor etc.) som har lagts till formuläret i designläget.",
            "Att hantera och logga fel som uppstår under formulärets livscykel."
        ],
        correctAnswerIndex: 2,
        explanation: "`InitializeComponent()` är en metod som automatiskt genereras av Windows Forms-designern i Visual Studio. Den innehåller all kod som behövs för att instansiera, ställa in egenskaper för, och placera de kontroller som designern har lagt till på formuläret. Den anropas vanligtvis i formulärets konstruktor."
    },
    {
        id: "prog_q16",
        question: "Vad är en metod i C# och varför används den primärt?",
        options: [
            "En variabel som lagrar komplex data.",
            "Ett kodblock som utför en specifik uppgift och kan återanvändas för att undvika kodupprepning och strukturera programmet.",
            "En speciell typ av klass som endast innehåller statiska medlemmar.",
            "Ett sätt att kommentera kod för bättre läsbarhet."
        ],
        correctAnswerIndex: 1,
        explanation: "En metod (eller funktion) är ett namngivet block av C#-kod som utför en specifik operation. Metoder används för att strukturera kod, göra den mer läsbar, och framför allt för att möjliggöra återanvändning av kod, vilket minskar redundans och förenklar underhåll."
    },
    {
        id: "prog_q17",
        question: "Hur skickar man typiskt parametrar (argument) till en metod i C#?",
        options: [
            "Genom globala variabler som metoden sedan läser.",
            "Parametrar specificeras inom parenteserna efter metodnamnet när metoden anropas, och matchar metodens parameterdefinition.",
            "Genom att sätta värden på klassens publika fält innan metoden anropas.",
            "Parametrar kan inte skickas till metoder i C#."
        ],
        correctAnswerIndex: 1,
        explanation: "När en metod anropas, skickas värden (argument) till metoden genom att de listas inom parenteserna efter metodnamnet. Dessa argument tas emot av metodens parametrar, som definieras i metodens signatur (t.ex. `MyMethod(int x, string s)`)."
    },
    {
        id: "prog_q18",
        question: "Vad innebär metodöverlagring (method overloading) i C#?",
        options: [
            "Att en metod i en subklass skriver över en metod i sin basklass med nyckelordet `override`.",
            "Att flera metoder i samma klass kan ha samma namn, förutsatt att deras parameterlistor skiljer sig åt (i antal, typ eller ordning av parametrar).",
            "Att en metod kan returnera olika datatyper beroende på de argument som skickas in.",
            "Att en metod automatiskt anropas när ett objekt av klassen förstörs (destruktor)."
        ],
        correctAnswerIndex: 1,
        explanation: "Metodöverlagring tillåter att flera metoder med samma namn existerar inom samma klass, så länge de har unika signaturer (dvs. skiljer sig i antalet och/eller typerna av sina parametrar). Detta gör att man kan erbjuda olika sätt att anropa en operation med samma namn men med olika indata."
    },
    {
        id: "prog_q19",
        question: "Vad innebär det att en metod (eller medlem) i en klass är deklarerad som `static` i C#?",
        options: [
            "Metoden kan bara anropas en gång under programmets körning.",
            "Metoden tillhör klassen själv snarare än en specifik instans (objekt) av klassen, och anropas via klassnamnet.",
            "Metoden kan inte ändra några värden på klassens fält.",
            "Metoden är automatiskt trådsäker."
        ],
        correctAnswerIndex: 1,
        explanation: "En `static` medlem (t.ex. metod eller fält) tillhör själva klassen, inte ett specifikt objekt av klassen. Man behöver alltså inte skapa ett objekt för att komma åt en statisk medlem; man använder klassnamnet följt av medlemsnamnet (t.ex. `Math.Pow()`)."
    },
    {
        id: "prog_q20",
        question: "Vad betyder det när en metod i C# har returtypen `void`?",
        options: [
            "Metoden returnerar ett null-värde.",
            "Metoden returnerar en ospecificerad datatyp som bestäms vid körning.",
            "Metoden returnerar inget värde alls till den anropande koden.",
            "Metoden kan endast anropas internt inom klassen (är privat)."
        ],
        correctAnswerIndex: 2,
        explanation: "Returtypen `void` för en metod i C# indikerar att metoden inte returnerar något värde efter att den har slutfört sin exekvering."
    },
    {
        id: "prog_q21",
        question: "Vad är den grundläggande skillnaden mellan en klass och ett objekt i C#?",
        options: [
            "En klass är en körbar instans, medan ett objekt är en mall.",
            "Ett objekt är en instans av en klass; klassen är en mall eller ritning som definierar objektets egenskaper och beteenden.",
            "Det är ingen skillnad, termerna används synonymt.",
            "Klasser används för att lagra data, medan objekt används för att utföra operationer."
        ],
        correctAnswerIndex: 1,
        explanation: "En klass är en definition eller en mall (ritning) som beskriver hur objekt av den typen ska se ut och bete sig. Ett objekt är en faktisk instans (ett exemplar) av en klass, skapat i minnet."
    },
    {
        id: "prog_q22",
        question: "Hur skapar man typiskt ett objekt (en instans) av en klass i C#?",
        options: [
            "Genom att anropa klassens namn som en funktion, t.ex. `MinKlass()`. ",
            "Med nyckelordet `new` följt av klassnamnet och parenteser (som anropar konstruktorn), t.ex. `MinKlass mittObjekt = new MinKlass();`.",
            "Genom att deklarera en variabel av klasstypen, objektet skapas då automatiskt.",
            "Med metoden `Object.Create(MinKlass)`."
        ],
        correctAnswerIndex: 1,
        explanation: "Ett objekt av en klass skapas i C# med hjälp av `new`-operatorn, följt av klassens namn och ett anrop till dess konstruktor (t.ex. `ClassName objectName = new ClassName();`)."
    },
    {
        id: "prog_q23",
        question: "Vad är en konstruktor i en C#-klass och när används den?",
        options: [
            "En metod som förstör objektet och frigör minne.",
            "En speciell metod som har samma namn som klassen och som automatiskt anropas när ett nytt objekt av klassen skapas. Används för att initiera objektets tillstånd.",
            "En metod som konverterar objektet till en strängrepresentation.",
            "En statisk metod som används för att skapa globala inställningar för klassen."
        ],
        correctAnswerIndex: 1,
        explanation: "En konstruktor är en speciell metod i en klass som automatiskt körs när ett nytt objekt av den klassen skapas (instansieras). Dess huvudsakliga syfte är att initiera det nya objektets datafält och ställa in det i ett giltigt starttillstånd."
    },
    {
        id: "prog_q24",
        question: "Vad innebär principen om inkapsling (encapsulation) i objektorienterad programmering?",
        options: [
            "Att all kod i ett program måste finnas inom en enda klass.",
            "Att kombinera data (fält) och metoder som opererar på datan inom en klass, och att skydda datan från direkt extern åtkomst, oftast genom access modifiers och properties.",
            "Att ärva egenskaper från flera basklasser samtidigt (multipelarv).",
            "Att automatiskt konvertera data mellan olika typer."
        ],
        correctAnswerIndex: 1,
        explanation: "Inkapsling är en av grundpelarna i OOP och innebär att man buntar ihop data (attribut/fält) och de metoder som manipulerar denna data inom en enhet (en klass). Det handlar också om att dölja den interna implementationen och skydda datan från oönskad extern åtkomst, ofta genom att göra fält privata och tillhandahålla publika metoder (t.ex. properties med get/set) för kontrollerad åtkomst."
    },
    {
        id: "prog_q25",
        question: "Hur används access modifiers (åtkomstspecificerare) som `private` och `public` i C#?",
        options: [
            "`private` medlemmar är tillgängliga från vilken klass som helst, medan `public` medlemmar bara är tillgängliga inom samma klass.",
            "`public` medlemmar är tillgängliga från vilken kod som helst som har tillgång till klassen, medan `private` medlemmar endast är tillgängliga inifrån den egna klassen.",
            "Både `private` och `public` gör medlemmar tillgängliga för subklasser.",
            "`public` används för metoder och `private` för fält, oavsett åtkomstbehov."
        ],
        correctAnswerIndex: 1,
        explanation: "`public` innebär att medlemmen (fält, metod, property etc.) kan nås från vilken kod som helst som har en referens till objektet eller klassen. `private` innebär att medlemmen endast kan nås av kod inuti samma klass. Detta är centralt för inkapsling."
    },
    {
        id: "prog_q26",
        question: "Vad är en egenskap (property) i C# och hur skiljer den sig från ett vanligt publikt fält?",
        options: [
            "En egenskap är exakt samma sak som ett publikt fält, bara ett annat namn.",
            "En egenskap tillhandahåller kontrollerad åtkomst till ett (ofta privat) fält via `get`- och `set`-accessorer, vilket möjliggör validering eller annan logik vid läsning/skrivning.",
            "Egenskaper kan bara lagra strängvärden, medan fält kan lagra alla datatyper.",
            "Egenskaper är alltid statiska, medan fält är instansmedlemmar."
        ],
        correctAnswerIndex: 1,
        explanation: "En egenskap (property) i C# ser ut som ett fält från utsidan men beter sig mer som metoder. De använder `get`- och `set`-accessorer för att kontrollera hur data läses från och skrivs till ett underliggande (ofta `private`) fält. Detta möjliggör logik som validering, beräkningar eller sidoeffekter när egenskapen används, vilket inte är möjligt med direkt åtkomst till ett publikt fält."
    },
    {
        id: "prog_q27",
        question: "Hur fungerar `get`- och `set`-accessorerna i en C#-egenskap (property)?",
        options: [
            "`get` används för att förstöra objektet, `set` för att skapa det.",
            "`get`-accessorn exekveras när egenskapens värde läses och ska returnera ett värde; `set`-accessorn exekveras när ett värde tilldelas egenskapen och tar emot det nya värdet (ofta via `value`-nyckelordet).",
            "`get` är för att hämta metadata om egenskapen, `set` är för att sätta dess datatyp.",
            "Både `get` och `set` måste alltid finnas och vara publika."
        ],
        correctAnswerIndex: 1,
        explanation: "`get`-accessorn i en egenskap används för att returnera egenskapens värde. Kod inuti `get` körs när man läser från egenskapen. `set`-accessorn används för att tilldela ett nytt värde till egenskapen. Kod inuti `set` körs när man skriver till egenskapen, och det nya värdet är tillgängligt via det implicita `value`-nyckelordet."
    },
    {
        id: "prog_q28",
        question: "Vad är en primär fördel med att använda automatiskt implementerade egenskaper (auto-implemented properties) i C#?",
        options: [
            "De tillåter mer komplex valideringslogik än vanliga egenskaper.",
            "De minskar mängden kod som behöver skrivas när ingen extra logik behövs i `get`- eller `set`-accessorerna, då kompilatorn automatiskt skapar ett dolt bakomliggande fält.",
            "De är alltid `readonly` efter att de har skapats.",
            "De kan bara användas för värdetyper, inte referenstyper."
        ],
        correctAnswerIndex: 1,
        explanation: "Automatiskt implementerade egenskaper (t.ex. `public string Name { get; set; }`) är en kortare syntax för att deklarera egenskaper när ingen speciell logik krävs i `get` eller `set`. Kompilatorn skapar då automatiskt ett privat, anonymt fält som egenskapen använder. Detta minskar mängden standardkod ('boilerplate')."
    },
    {
        id: "prog_q29",
        question: "Varför är det viktigt att följa DRY-principen (Don't Repeat Yourself) i programmering?",
        options: [
            "För att göra koden så lång och detaljerad som möjligt.",
            "För att minska kodupprepning, vilket leder till enklare underhåll, färre buggar (ändringar behöver bara göras på ett ställe) och mer lättläst kod.",
            "För att säkerställa att varje metod bara innehåller en enda kodrad.",
            "DRY är en princip som endast gäller för databasdesign."
        ],
        correctAnswerIndex: 1,
        explanation: "DRY-principen (Don't Repeat Yourself) syftar till att reducera upprepning av information och logik i ett system. Genom att undvika kodduplicering blir koden lättare att underhålla (en ändring behöver bara göras på ett ställe), risken för inkonsistenser och buggar minskar, och koden blir ofta mer generell och återanvändbar."
    },
    {
        id: "prog_q30",
        question: "Vad är ett \"fält\" (field) i en C#-klass?",
        options: [
            "En metod som inte returnerar något värde.",
            "En variabel som deklareras direkt inuti en klass eller struct, och som representerar data som är associerad med objekt av klassen (eller klassen själv om statisk).",
            "Ett externt dokument som klassen läser data från.",
            "En kommentar som beskriver klassens syfte."
        ],
        correctAnswerIndex: 1,
        explanation: "Ett fält (field) är en variabel som deklareras direkt inom en klass eller en struct. Fält används för att lagra data som hör till ett objekt (instansfält) eller till själva klassen (statiska fält)."
    },
    {
        id: "prog_q31",
        question: "Vad innebär arv (inheritance) i objektorienterad programmering?",
        options: [
            "Att en klass kan innehålla instanser av andra klasser.",
            "En mekanism där en klass (subklass/härledd klass) kan ärva egenskaper (fält, metoder) från en annan klass (basklass/superklass), vilket främjar kodåteranvändning och skapandet av hierarkier.",
            "Att en metod kan ha flera olika implementationer beroende på indata.",
            "Att data i ett objekt skyddas från extern åtkomst."
        ],
        correctAnswerIndex: 1,
        explanation: "Arv är en grundläggande OOP-princip som tillåter en klass (subklass eller härledd klass) att överta (ärva) medlemmar (fält och metoder) från en annan klass (basklass eller superklass). Detta möjliggör kodåteranvändning och skapandet av en 'är en'-relation mellan klasserna."
    },
    {
        id: "prog_q32",
        question: "Vad menas med termerna basklass (base class) och subklass (subclass) i samband med arv?",
        options: [
            "Basklassen är den mest komplexa klassen, subklassen är enklare.",
            "Basklassen är den klass som ärver från subklassen.",
            "Basklassen (även kallad superklass eller förälderklass) är den klass vars egenskaper ärvs av en annan klass. Subklassen (även kallad härledd klass eller barnklass) är den klass som ärver.",
            "Subklassen innehåller bara statiska metoder från basklassen."
        ],
        correctAnswerIndex: 2,
        explanation: "I en arvsrelation är basklassen (superklass/förälder) den klass som tillhandahåller medlemmar som kan ärvas. Subklassen (härledd klass/barn) är den klass som ärver dessa medlemmar från basklassen."
    },
    {
        id: "prog_q33",
        question: "Hur använder man nyckelordet `base` i C# i samband med en subklasskonstruktor?",
        options: [
            "För att förhindra att basklassens konstruktor anropas.",
            "För att explicit anropa en specifik konstruktor i den direkta basklassen från subklassens konstruktor.",
            "För att skapa en ny instans av basklassen inuti subklassen.",
            "`base` används endast för att komma åt basklassens statiska medlemmar."
        ],
        correctAnswerIndex: 1,
        explanation: "Nyckelordet `base` kan användas i en subklasskonstruktor för att explicit anropa en konstruktor i dess direkta basklass. Detta är användbart när basklassens konstruktor kräver argument eller när man vill säkerställa specifik initialisering i basklassen. Syntax: `public SubClassConstructor(...) : base(...) { ... }`."
    },
    {
        id: "prog_q34",
        question: "Vad innebär accessmodifieraren `protected` i C#?",
        options: [
            "Medlemmen är endast tillgänglig inom samma assembly (projekt).",
            "Medlemmen är endast tillgänglig inom den egna klassen.",
            "Medlemmen är tillgänglig inom den egna klassen OCH inom alla klasser som ärver från den (subklasser), oavsett assembly.",
            "Medlemmen är publik och tillgänglig överallt."
        ],
        correctAnswerIndex: 2,
        explanation: "En medlem som är deklarerad som `protected` är tillgänglig inifrån den klass där den är deklarerad och även från instanser av härledda klasser (subklasser). Den är inte tillgänglig för 'utomstående' klasser som inte ärver."
    },
    {
        id: "prog_q35",
        question: "Vad är polymorfism i objektorienterad programmering?",
        options: [
            "Möjligheten att definiera flera metoder med samma namn men olika parametrar (överlagring).",
            "Möjligheten för objekt av olika klasser (som delar en gemensam basklass eller interface) att svara på samma metodanrop på ett sätt som är specifikt för deras egen typ. Ordagrant 'många former'.",
            "Processen att konvertera ett objekt från en typ till en annan.",
            "Att en klass bara kan ärva från en enda basklass."
        ],
        correctAnswerIndex: 1,
        explanation: "Polymorfism betyder 'många former' och är en OOP-princip som tillåter att ett objekt kan behandlas som ett objekt av sin basklasstyp, men när en virtuell (eller abstrakt) metod anropas, är det subklassens specifika implementation av metoden som körs. Detta möjliggör flexibel och utbyggbar kod."
    },
    {
        id: "prog_q36",
        question: "Hur samverkar nyckelorden `virtual` och `override` i C# för att uppnå polymorfism?",
        options: [
            "`virtual` gör en metod privat, `override` gör den publik.",
            "En metod i en basklass deklareras som `virtual` för att indikera att den *kan* överskridas (modifieras) av subklasser. En subklass använder sedan `override` för att tillhandahålla sin egen specifika implementation av den virtuella metoden.",
            "`virtual` används i subklassen och `override` i basklassen.",
            "Båda nyckelorden används för att skapa helt nya, oberoende metoder."
        ],
        correctAnswerIndex: 1,
        explanation: "För att möjliggöra polymorfism via metodöverskridning, måste metoden i basklassen markeras med `virtual`. Detta signalerar att subklasser får tillhandahålla en egen version. Subklassen använder sedan `override` på sin metod för att indikera att den medvetet ersätter basklassens virtuella metod med en egen implementation."
    },
    {
        id: "prog_q37",
        question: "Vad är en viktig skillnad mellan en abstrakt klass och en vanlig (konkret) klass i C#?",
        options: [
            "Abstrakta klasser kan inte ha några konstruktorer.",
            "En abstrakt klass kan inte instansieras direkt (man kan inte skapa objekt av den med `new`), medan en vanlig klass kan. Abstrakta klasser är avsedda att vara basklasser.",
            "Vanliga klasser kan inte innehålla några abstrakta medlemmar.",
            "Abstrakta klasser kan ärva från flera klasser, vanliga klasser bara från en."
        ],
        correctAnswerIndex: 1,
        explanation: "Den huvudsakliga skillnaden är att man inte kan skapa direkta instanser (objekt) av en abstrakt klass med `new`-operatorn. Abstrakta klasser är designade för att fungera som basklasser som andra klasser kan ärva från. De kan innehålla både abstrakta medlemmar (som subklasser måste implementera) och vanliga implementerade medlemmar."
    },
    {
        id: "prog_q38",
        question: "Vad innebär det att en klass är deklarerad som `abstract` i C#?",
        options: [
            "Klassen kan bara innehålla statiska medlemmar.",
            "Klassen är ofullständig och kan inte instansieras direkt. Den är avsedd att vara en basklass och kan innehålla abstrakta metoder som subklasser måste implementera.",
            "Alla metoder i klassen blir automatiskt `virtual`.",
            "Klassen kan inte ärva från någon annan klass."
        ],
        correctAnswerIndex: 1,
        explanation: "En klass som deklareras med nyckelordet `abstract` kan inte skapas som ett objekt direkt (den kan inte instansieras). Den fungerar som en mall eller en bas för andra klasser att ärva från. En abstrakt klass kan innehålla abstrakta medlemmar (metoder, egenskaper etc.) som saknar implementation och som måste implementeras av icke-abstrakta subklasser."
    },
    {
        id: "prog_q39",
        question: "Vad är ett interface (gränssnitt) i C#?",
        options: [
            "En klass som endast innehåller privata fält.",
            "Ett användargränssnitt (GUI) för en applikation.",
            "Ett kontrakt som definierar en uppsättning publika medlemmar (metoder, egenskaper, events, indexerare) som en klass eller struct kan implementera. Det specificerar *vad* medlemmarna ska göra, men inte *hur* (traditionellt sett).",
            "En datastruktur för att lagra nyckel-värde-par."
        ],
        correctAnswerIndex: 2,
        explanation: "Ett interface i C# definierar ett kontrakt. Det specificerar en uppsättning relaterade funktioner (metoder, egenskaper, etc.) som en klass eller struct sedan kan 'lova' att implementera. Ett interface innehåller inga implementationer (traditionellt, före C# 8.0 default methods) och inga fält. Det säkerställer att implementerande klasser har en viss uppsättning medlemmar."
    },
    {
        id: "prog_q40",
        question: "Hur implementerar en klass flera interfaces i C#?",
        options: [
            "Genom att använda nyckelordet `inherits` för varje interface.",
            "En klass kan bara implementera ett enda interface.",
            "Genom att lista interfacenamnen efter klassnamnet (och eventuell basklass), separerade med kommatecken.",
            "Genom att nästla interface-definitionerna inuti klassen."
        ],
        correctAnswerIndex: 2,
        explanation: "En klass i C# kan implementera flera interfaces. Detta görs genom att specificera namnen på de interfaces som klassen ska implementera i klassdeklarationen, efter klassnamnet (och eventuell basklass), separerade med kommatecken. Exempel: `class MinKlass : IBasklass, IInterface1, IInterface2 { ... }`."
    },
    {
        id: "prog_q41",
        question: "Vad av följande får ett C#-interface traditionellt sett (före C# 8.0) INTE innehålla?",
        options: ["Metodsignaturer", "Egenskapsdefinitioner (properties)", "Fält (fields) eller konstruktorer", "Events"],
        correctAnswerIndex: 2,
        explanation: "Traditionellt sett (och i C#-versioner före 8.0) får ett interface inte innehålla några fält (instansvariabler) eller konstruktorer. Det får inte heller innehålla någon implementation för sina medlemmar. Det definierar endast kontraktet. (C# 8.0 introducerade möjligheten till default interface methods och statiska medlemmar i interfaces)."
    },
    {
        id: "prog_q42",
        question: "Vad är en `enum` (enumeration) i C# och hur används den typiskt?",
        options: [
            "En typ av loop som automatiskt räknar upp heltal.",
            "En speciell klass som bara kan ha en instans (singleton).",
            "En värdetyp som definierar en uppsättning namngivna heltaliga konstanter. Används för att ge meningsfulla namn åt en begränsad uppsättning värden.",
            "Ett interface som bara kan innehålla statiska metoder."
        ],
        correctAnswerIndex: 2,
        explanation: "En `enum` (enumeration) är en värdetyp som används för att definiera en uppsättning namngivna konstanter som representerar underliggande heltal (som standard `int`). Detta gör koden mer läsbar och mindre felbenägen genom att man kan använda meningsfulla namn istället för 'magiska siffror'. Exempel: `enum Day { Sun, Mon, Tue, Wed, Thu, Fri, Sat }`."
    },
    {
        id: "prog_q43",
        question: "Vad är en generisk klass (generic class) i C#?",
        options: [
            "En klass som automatiskt genereras av kompilatorn.",
            "En klass som bara kan användas med grundläggande datatyper som int och string.",
            "En klass som är designad för att fungera med vilken datatyp som helst, specificerad som en typparameter (t.ex. `<T>`). Detta möjliggör starkt typad kodåteranvändning.",
            "En klass som ärvs från `System.Generic`."
        ],
        correctAnswerIndex: 2,
        explanation: "Generiska klasser (och metoder) i C# tillåter dig att definiera klasser med platshållare för en eller flera typer (typparametrar, oftast `T`). När du sedan skapar en instans av klassen specificerar du vilken konkret typ som ska användas. Detta ger fördelarna med stark typkontroll och kodåteranvändning för olika datatyper utan att behöva skriva om klassen för varje typ."
    },
    {
        id: "prog_q44",
        question: "Vilka av följande är exempel på vanliga generiska samlingsklasser i C# .NET Framework/Core?",
        options: [
            "`ArrayList`, `Hashtable` (icke-generiska)",
            "`List<T>`, `Dictionary<TKey, TValue>`, `Queue<T>`, `Stack<T>`",
            "`StringCollection`, `IntegerArray`",
            "`GenericContainer`, `TypeSafeCollection`"
        ],
        correctAnswerIndex: 1,
        explanation: "Några av de mest använda generiska samlingsklasserna i C# inkluderar `List<T>` (dynamisk lista), `Dictionary<TKey, TValue>` (nyckel-värdepar), `Queue<T>` (först-in-först-ut-kö), och `Stack<T>` (sist-in-först-ut-stack). Dessa finns i `System.Collections.Generic`-namnrymden."
    },
    {
        id: "prog_q45",
        question: "Vad är en stor fördel med att använda `List<T>` istället för en vanlig array (`T[]`) i C#?",
        options: [
            "`List<T>` är alltid snabbare för alla operationer.",
            "`List<T>` har en fast storlek som bestäms vid kompilering, vilket ger bättre prestanda.",
            "`List<T>` är en dynamisk samling vars storlek kan ändras vid körning (element kan enkelt läggas till eller tas bort), medan en arrays storlek är fast efter att den har skapats.",
            "Arrays kan bara lagra värdetyper, medan `List<T>` kan lagra referenstyper."
        ],
        correctAnswerIndex: 2,
        explanation: "Den största fördelen med `List<T>` jämfört med en array (`T[]`) är att `List<T>` är dynamisk i storlek. Du kan enkelt lägga till och ta bort element utan att behöva skapa en ny samling och kopiera över element, vilket är fallet med arrayer vars storlek är fixerad när de skapas."
    },
    {
        id: "prog_q46",
        question: "Hur används metoderna `.Add()`, `.Remove()` (eller `.RemoveAt()`), och `.Sort()` typiskt på en `List<T>` i C#?",
        options: [
            "`.Add()` tar bort ett element, `.Remove()` sorterar, `.Sort()` lägger till.",
            "`.Add(item)` lägger till ett element i slutet av listan, `.Remove(item)` eller `.RemoveAt(index)` tar bort ett element, och `.Sort()` sorterar elementen i listan (om de är jämförbara).",
            "`.Add()` är för att addera två listor, `.Remove()` tömmer listan, `.Sort()` är inte en giltig metod.",
            "Dessa metoder finns bara på vanliga arrayer, inte på `List<T>`."
        ],
        correctAnswerIndex: 1,
        explanation: "För en `List<T>`: `.Add(item)` används för att lägga till ett element sist i listan. `.Remove(item)` tar bort den första förekomsten av ett specifikt element, medan `.RemoveAt(index)` tar bort elementet vid ett givet index. `.Sort()` sorterar elementen i listan enligt deras naturliga ordning eller en specificerad jämförare."
    },
    {
        id: "prog_q47",
        question: "Vad är en `Dictionary<TKey, TValue>` i C# och hur används den typiskt?",
        options: [
            "En ordnad lista av unika värden.",
            "En samling som lagrar par av nycklar och värden, där varje nyckel måste vara unik och används för att snabbt slå upp sitt associerade värde.",
            "En datastruktur som bara kan lagra strängar som nycklar och heltal som värden.",
            "En typ av array där indexen kan vara negativa."
        ],
        correctAnswerIndex: 1,
        explanation: "`Dictionary<TKey, TValue>` är en generisk samlingsklass som representerar en kollektion av nyckel-värdepar. Varje nyckel i dictionaryn måste vara unik och används för att effektivt hämta det tillhörande värdet. Det liknar en hashtabell eller en associativ array i andra språk."
    },
    {
        id: "prog_q48",
        question: "Hur fungerar en `Queue<T>` i C# och vad gör metoderna `.Enqueue()` och `.Dequeue()`?",
        options: [
            "`Queue<T>` är en LIFO-struktur (Last-In, First-Out); `.Enqueue()` tar bort och `.Dequeue()` lägger till.",
            "`Queue<T>` är en FIFO-struktur (First-In, First-Out); `.Enqueue(item)` lägger till ett objekt i slutet av kön, och `.Dequeue()` tar bort och returnerar objektet i början av kön.",
            "`Queue<T>` är en sorterad lista; `.Enqueue()` infogar på rätt plats, `.Dequeue()` tar bort det minsta elementet.",
            "`Queue<T>` används för att köa metoder som ska exekveras parallellt."
        ],
        correctAnswerIndex: 1,
        explanation: "`Queue<T>` representerar en först-in, först-ut (FIFO) samling av objekt. Det fungerar som en vanlig kö (t.ex. en kassakö). Metoden `.Enqueue(item)` lägger till ett element sist i kön, och `.Dequeue()` tar bort och returnerar det element som ligger först i kön."
    },
    {
        id: "prog_q49",
        question: "Vad är den huvudsakliga skillnaden i beteende mellan en `Stack<T>` och en `Queue<T>` i C#?",
        options: [
            "`Stack<T>` är snabbare för att lägga till element, `Queue<T>` är snabbare för att ta bort.",
            "Båda är FIFO-strukturer (First-In, First-Out).",
            "`Stack<T>` är en LIFO-struktur (Last-In, First-Out), medan `Queue<T>` är en FIFO-struktur (First-In, First-Out).",
            "`Stack<T>` kan bara lagra värdetyper, `Queue<T>` bara referenstyper."
        ],
        correctAnswerIndex: 2,
        explanation: "Den grundläggande skillnaden ligger i hur de hanterar element: `Stack<T>` följer LIFO-principen (Last-In, First-Out), där det element som senast lades till är det första som tas bort (t.ex. med `Pop()`). `Queue<T>` följer FIFO-principen (First-In, First-Out), där det element som först lades till är det första som tas bort (t.ex. med `Dequeue()`)."
    },
    {
        id: "prog_q50",
        question: "Vad menas med att generiska klasser (som `List<T>`) är starkt typade i C#?",
        options: [
            "De kan bara användas med strängar.",
            "De kan lagra vilken typ av data som helst utan typkontroll, vilket gör dem flexibla men osäkra.",
            "De säkerställer typsäkerhet vid kompilering eftersom den specifika datatypen (t.ex. `int` i `List<int>`) är känd. Detta förhindrar att felaktiga datatyper läggs till i samlingen och eliminerar behovet av riskfyllda typomvandlingar vid hämtning.",
            "De är krypterade för ökad säkerhet."
        ],
        correctAnswerIndex: 2,
        explanation: "Att generiska klasser är starkt typade innebär att när du specificerar en typ (t.ex. `List<string>`), så vet kompilatorn att listan endast ska innehålla strängar. Detta ger typsäkerhet vid kompileringstillfället, vilket minskar risken för runtime-fel orsakade av felaktiga datatyper och gör att man slipper manuella typkontroller och omvandlingar (cast)."
    },
    {
        id: "prog_q51",
        question: "Vad är syftet med ett `try`-block i C# undantagshantering?",
        options: [
            "Att definiera kod som alltid ska köras, oavsett fel.",
            "Att omsluta kod som potentiellt kan orsaka ett undantag (ett fel) under körning.",
            "Att explicit kasta ett nytt undantag.",
            "Att logga information om programmets tillstånd."
        ],
        correctAnswerIndex: 1,
        explanation: "`try`-blocket används för att omsluta den kod där ett undantag (exception) förväntas kunna inträffa. Om ett undantag kastas inuti `try`-blocket, avbryts den normala exekveringen och programmet letar efter ett matchande `catch`-block."
    },
    {
        id: "prog_q52",
        question: "Vad används ett `catch`-block till i C# undantagshantering?",
        options: [
            "För att definiera den kod som ska försökas köras.",
            "För att specificera kod som ska köras för att hantera ett specifikt typ av undantag som har inträffat i det associerade `try`-blocket.",
            "För att säkerställa att vissa resurser alltid frigörs.",
            "För att ignorera alla undantag som inträffar."
        ],
        correctAnswerIndex: 1,
        explanation: "Ett `catch`-block följer efter ett `try`-block och innehåller kod som körs om ett undantag av en specificerad typ (eller vilken typ som helst om ingen typ anges) inträffar i `try`-blocket. Det används för att 'fånga' och hantera felet på ett kontrollerat sätt, t.ex. genom att logga felet, visa ett meddelande till användaren, eller försöka återställa programmet."
    },
    {
        id: "prog_q53",
        question: "Vad är syftet med `finally`-blocket i C# undantagshantering?",
        options: [
            "Att kasta ett nytt, mer specifikt undantag.",
            "Att endast köras om inget undantag inträffade i `try`-blocket.",
            "Att innehålla kod som alltid ska exekveras efter `try`- och eventuella `catch`-block, oavsett om ett undantag inträffade eller inte. Används ofta för resursstädning.",
            "Att hoppa över all felhantering och fortsätta programkörningen."
        ],
        correctAnswerIndex: 2,
        explanation: "`finally`-blocket, om det finns, exekveras alltid efter att exekveringen lämnar `try`-blocket och eventuella `catch`-block. Detta gäller oavsett om ett undantag inträffade, om det fångades, eller om `try`-blocket slutfördes normalt. Det används typiskt för att frigöra resurser (t.ex. stänga filer eller databasanslutningar) som måste städas upp."
    },
    {
        id: "prog_q54",
        question: "Hur använder man nyckelordet `throw` i C#?",
        options: [
            "För att fånga ett undantag som har kastats av en annan metod.",
            "För att explicit signalera att ett fel eller en exceptionell situation har inträffat, genom att skapa och kasta ett undantagsobjekt.",
            "För att ignorera ett pågående undantag och fortsätta exekveringen.",
            "För att definiera en ny typ av undantag."
        ],
        correctAnswerIndex: 1,
        explanation: "Nyckelordet `throw` används för att explicit kasta ett undantag. Man skapar vanligtvis en instans av en undantagsklass (t.ex. `new Exception(\"Något gick fel\")` eller en mer specifik undantagstyp) och använder sedan `throw` för att signalera att ett fel har inträffat. Detta avbryter den normala programflödet och letar efter en `catch`-hanterare."
    },
    {
        id: "prog_q55",
        question: "Vad är en grundläggande skillnad mellan minnesområdena `stack` (stacken) och `heap` (heapen) i C#/.NET?",
        options: [
            "Stacken används för att lagra stora objekt, medan heapen används för små värdetyper.",
            "Stacken är ett LIFO-minnesområde (Last-In, First-Out) som används för att lagra värdetyper, metodparametrar, lokala variabler och returadresser. Heapen är ett minnesområde för dynamisk allokering av referenstyper (objekt).",
            "Allokering på heapen är snabbare än på stacken.",
            "Data på stacken hanteras av Garbage Collector, medan data på heapen måste frigöras manuellt."
        ],
        correctAnswerIndex: 1,
        explanation: "Stacken är ett minnesområde som hanteras automatiskt och effektivt för lagring av värdetyper och metodanropsinformation (LIFO-principen). Heapen är ett större minnesområde där objekt (instanser av referenstyper) allokeras dynamiskt. Minnet på heapen hanteras av skräpsamlaren (Garbage Collector)."
    },
    {
        id: "prog_q56",
        question: "Vad skiljer en värdetyp (value type) från en referenstyp (reference type) i C# när det gäller hur de lagras och hanteras?",
        options: [
            "Värdetyper lagras alltid på heapen, referenstyper på stacken.",
            "En variabel av en värdetyp innehåller direkt själva datavärdet (ofta lagrad på stacken). En variabel av en referenstyp innehåller en referens (en adress/pekare) till den plats i minnet (vanligtvis på heapen) där det faktiska objektet finns.",
            "Värdetyper kan inte vara `null`, medan referenstyper alltid är `null` initialt.",
            "Referenstyper är snabbare att kopiera än värdetyper."
        ],
        correctAnswerIndex: 1,
        explanation: "Värdetyper (t.ex. `int`, `struct`, `bool`) lagrar sitt faktiska värde direkt i variabeln, och dessa lagras oftast på stacken (om de är lokala variabler eller parametrar). Referenstyper (t.ex. klasser, interface, strängar, arrayer) lagrar en referens (minnesadress) till den plats på heapen där det verkliga objektet finns. När man kopierar en referenstypvariabel kopieras bara referensen, inte själva objektet."
    },
    {
        id: "prog_q57",
        question: "Vad är huvuduppgiften för en \"garbage collector\" (GC) i .NET-ramverket?",
        options: [
            "Att kompilera C#-kod till maskinkod.",
            "Att automatiskt identifiera och frigöra minne på heapen som inte längre används av applikationen, för att förhindra minnesläckor.",
            "Att optimera databasfrågor.",
            "Att hantera användarinput och händelser i ett grafiskt gränssnitt."
        ],
        correctAnswerIndex: 1,
        explanation: "Skräpsamlaren (Garbage Collector, GC) i .NET är en automatisk minneshanteringsmekanism. Dess primära uppgift är att periodiskt söka igenom heapen efter objekt som inte längre är nåbara (refererade) av den körande applikationen och sedan frigöra det minne som dessa objekt upptar. Detta hjälper till att förhindra minnesläckor."
    },
    {
        id: "prog_q58",
        question: "Vad är en viktig skillnad mellan teckenkodningarna ASCII och Unicode?",
        options: [
            "ASCII kan representera färger, medan Unicode bara kan representera svartvita tecken.",
            "Unicode är en äldre standard som bara stöder engelska tecken, medan ASCII stöder alla världens språk.",
            "ASCII är en mindre teckenuppsättning (ofta 7-bitars eller 8-bitars) som primärt täcker engelska bokstäver och kontrolltecken, medan Unicode är en mycket större standard som syftar till att kunna representera tecken från praktiskt taget alla skriftsystem i världen.",
            "ASCII-filer är alltid större än Unicode-filer."
        ],
        correctAnswerIndex: 2,
        explanation: "ASCII (American Standard Code for Information Interchange) är en tidig teckenkodning med ett begränsat antal tecken, huvudsakligen för det engelska alfabetet och vissa kontrollkoder. Unicode är en modernare och mycket mer omfattande standard som syftar till att ge ett unikt nummer för varje tecken i alla världens skriftsystem, vilket möjliggör hantering av flerspråkig text."
    },
    {
        id: "prog_q59",
        question: "Vad menas med att ett IP-nätverk har ett nät-ID (Network ID) och en broadcast-adress?",
        options: [
            "Nät-ID är routerns MAC-adress och broadcast-adressen är serverns IP-adress.",
            "Nät-ID är en unik identifierare för nätverket som helhet, medan broadcast-adressen är en speciell adress som används för att skicka ett meddelande till alla enheter (värdar) inom det specifika nätverket.",
            "Nät-ID används för att kryptera data, och broadcast-adressen för att dekryptera den.",
            "Både nät-ID och broadcast-adress är lösenord för att få åtkomst till nätverket."
        ],
        correctAnswerIndex: 1,
        explanation: "Inom ett IP-nätverk identifierar nät-ID:t själva nätverket (den del av IP-adressen som är gemensam för alla enheter i nätverket). Broadcast-adressen är en speciell IP-adress inom det nätverket som, om ett paket skickas till den, levereras till alla enheter som är anslutna till just det nätverket."
    },
    {
        id: "prog_q60",
        question: "Vad innebär subnetting (subnätindelning) i samband med IP-nätverk?",
        options: [
            "Att slå ihop flera små nätverk till ett stort supernät.",
            "Processen att dela upp ett större IP-nätverk i flera mindre, logiska delnät (subnät). Detta görs genom att 'låna' bitar från värd-ID-delen av IP-adressen för att skapa fler nät-ID:n.",
            "Att automatiskt tilldela IP-adresser till enheter i ett nätverk via DHCP.",
            "Att öka hastigheten på nätverkskommunikationen genom datakomprimering."
        ],
        correctAnswerIndex: 1,
        explanation: "Subnetting är tekniken att dela upp ett större IP-nätverksadressblock i flera mindre, självständiga delnät (subnät). Detta görs genom att utöka nätmasken (subnet mask) för att använda några av de bitar som ursprungligen var avsedda för värd-ID:t till att istället identifiera dessa nya subnät. Fördelar inkluderar bättre organisation, förbättrad säkerhet och effektivare adressanvändning."
    }
];

// --- DOM-element ---
const categorySelect = document.getElementById("category-select");
const questionTextElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackArea = document.getElementById("feedback-area");
const feedbackTextEl = feedbackArea.querySelector(".feedback-text");
const explanationTextEl = feedbackArea.querySelector(".explanation-text");
const nextButton = document.getElementById("next-button");
const currentCardNumberEl = document.getElementById("current-card-number");
const totalCardNumberEl = document.getElementById("total-card-number");
const completionMessageEl = document.getElementById("completion-message");
const summaryAreaEl = document.getElementById("summary-area");

// --- Applikationstillstånd ---
let currentDeck = [];
let currentCardIndex = 0;
let userAnswers = []; 

// --- Funktioner ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadDeck() {
    const selectedCategory = categorySelect.value;
    const sourceQuestions = (selectedCategory === "webb" ? webDevQuestions : programmingQuestions);
    
    const multipleChoiceQuestions = sourceQuestions.filter(q => q.options && q.options.length > 0 && q.hasOwnProperty("correctAnswerIndex") && q.explanation);

    if (multipleChoiceQuestions.length === 0) {
        questionTextElement.innerHTML = "Inga flervalsfrågor tillgängliga för denna kategori ännu.";
        optionsContainer.innerHTML = "";
        nextButton.disabled = true;
        nextButton.textContent = "Nästa Kort";
        summaryAreaEl.classList.add("hidden");
        summaryAreaEl.innerHTML = "";
        updateProgress();
        return;
    }
    
    let numQuestionsToLoad = Math.floor(multipleChoiceQuestions.length * 0.30); 
    if (numQuestionsToLoad < 10 && multipleChoiceQuestions.length >= 10) { 
        numQuestionsToLoad = 10;
    } else if (multipleChoiceQuestions.length < 10) { 
        numQuestionsToLoad = multipleChoiceQuestions.length;
    }

    if (numQuestionsToLoad > 30) { 
        numQuestionsToLoad = 30;
    }
    numQuestionsToLoad = Math.min(numQuestionsToLoad, multipleChoiceQuestions.length); 
    numQuestionsToLoad = Math.max(1, numQuestionsToLoad); 


    shuffleArray(multipleChoiceQuestions);
    currentDeck = multipleChoiceQuestions.slice(0, numQuestionsToLoad);
    
    currentCardIndex = 0;
    userAnswers = []; 
    completionMessageEl.textContent = "";
    feedbackTextEl.textContent = "";
    explanationTextEl.textContent = "";
    summaryAreaEl.classList.add("hidden"); 
    summaryAreaEl.innerHTML = ""; 
    questionTextElement.classList.remove("hidden");
    optionsContainer.classList.remove("hidden");
    feedbackArea.classList.remove("hidden");

    nextButton.removeEventListener("click", loadDeckOnRestart); 
    nextButton.addEventListener("click", nextCard); 


    if (currentDeck.length === 0) { 
        questionTextElement.innerHTML = "Kunde inte ladda några frågor.";
        optionsContainer.innerHTML = "";
        nextButton.disabled = true;
    } else {
        displayCard();
    }
    updateProgress();
}

function displayCard() {
    if (currentCardIndex >= currentDeck.length) {
        questionTextElement.classList.add("hidden");
        optionsContainer.classList.add("hidden");
        feedbackArea.classList.add("hidden");
        nextButton.textContent = "Börja om"; 
        nextButton.removeEventListener("click", nextCard); 
        nextButton.addEventListener("click", loadDeckOnRestart); 
        nextButton.disabled = false;
        completionMessageEl.textContent = "Bra jobbat! Alla kort avklarade för denna omgång.";
        displaySummary();
        updateProgress(true);
        return;
    }

    nextButton.textContent = "Nästa Kort"; 
    nextButton.removeEventListener("click", loadDeckOnRestart); 
    nextButton.addEventListener("click", nextCard); 


    const card = currentDeck[currentCardIndex];
    questionTextElement.innerHTML = card.question; //.replace(/\n/g, "<br>"); // Behövs om white-space: pre-wrap inte räcker för HTML inuti
    optionsContainer.innerHTML = ""; 
    feedbackTextEl.textContent = "";
    explanationTextEl.textContent = "";
    nextButton.disabled = true; 

    card.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option-button");
        button.innerHTML = option; //.replace(/\n/g, "<br>"); // Samma här
        button.classList.remove("correct", "incorrect", "selected");
        button.addEventListener("click", () => handleOptionSelect(index, card.correctAnswerIndex, card.explanation, card.question, card.options));
        optionsContainer.appendChild(button);
    });
}
    
function loadDeckOnRestart() { 
    loadDeck();
}

function handleOptionSelect(selectedIndex, correctIndex, explanation, questionText, allOptions) {
    const optionButtons = optionsContainer.querySelectorAll(".option-button");
    let isCorrect = selectedIndex === correctIndex;

    optionButtons.forEach(btn => btn.disabled = true);
    optionButtons[selectedIndex].classList.add("selected");

    if (isCorrect) {
        feedbackTextEl.textContent = "Rätt!";
        feedbackTextEl.className = "feedback-text correct";
        optionButtons[selectedIndex].classList.add("correct");
    } else {
        feedbackTextEl.textContent = "Fel!";
        feedbackTextEl.className = "feedback-text incorrect";
        optionButtons[selectedIndex].classList.add("incorrect");
        if (optionButtons[correctIndex]) { 
            optionButtons[correctIndex].classList.add("correct"); 
        }
    }
    
    explanationTextEl.innerHTML = `Förklaring: ${explanation}`; //.replace(/\n/g, "<br>"); // Samma här
    nextButton.disabled = false; 

    userAnswers.push({
        question: questionText,
        userAnswerText: allOptions[selectedIndex],
        correctAnswerText: allOptions[correctIndex],
        wasCorrect: isCorrect
    });
}
    
function displaySummary() {
    summaryAreaEl.innerHTML = ""; 
    summaryAreaEl.classList.remove("hidden");

    const heading = document.createElement("h2");
    heading.textContent = "Rundans Resultat";
    summaryAreaEl.appendChild(heading);

    let numCorrect = 0;
    let numIncorrect = 0;

    userAnswers.forEach(answer => {
        if (answer.wasCorrect) {
            numCorrect++;
        } else {
            numIncorrect++;
        }

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("summary-item");

        const qP = document.createElement("p");
        qP.classList.add("question-summary");
        qP.innerHTML = `Fråga: ${answer.question}`; //.replace(/\n/g, "<br>");  // Samma här
        itemDiv.appendChild(qP);

        const userAP = document.createElement("p");
        userAP.innerHTML = `Ditt svar: <span class="user-answer ${answer.wasCorrect ? "" : "incorrect-summary"}">${answer.userAnswerText}</span>`; //.replace(/\n/g, "<br>")
        itemDiv.appendChild(userAP);
        
        if (!answer.wasCorrect) {
            const correctAP = document.createElement("p");
            correctAP.innerHTML = `Rätt svar: <span class="correct-answer-summary">${answer.correctAnswerText}</span>`; //.replace(/\n/g, "<br>")
            itemDiv.appendChild(correctAP);
        }
        summaryAreaEl.appendChild(itemDiv);
    });

    const totalsP = document.createElement("p");
    totalsP.classList.add("summary-totals");
    totalsP.textContent = `Totalt: ${numCorrect} rätt, ${numIncorrect} fel av ${currentDeck.length} frågor.`;
    summaryAreaEl.appendChild(totalsP);
}

function nextCard() {
    currentCardIndex++;
    displayCard();
    updateProgress();
}
    
function updateProgress(completed = false) {
    if (currentDeck.length === 0) {
        currentCardNumberEl.textContent = "0";
        totalCardNumberEl.textContent = "0";
    } else if (completed) {
        currentCardNumberEl.textContent = currentDeck.length.toString();
        totalCardNumberEl.textContent = currentDeck.length.toString();
    } else {
        const displayIndex = (currentCardIndex < currentDeck.length) ? currentCardIndex + 1 : currentCardIndex;
        currentCardNumberEl.textContent = displayIndex.toString();
        totalCardNumberEl.textContent = currentDeck.length.toString();
    }
}

// --- Händelselyssnare ---
categorySelect.addEventListener("change", loadDeck);
nextButton.addEventListener("click", nextCard);

loadDeck(); 
const initialMultipleChoiceQuestionsWebb = webDevQuestions.filter(q => q.options && q.options.length > 0 && q.hasOwnProperty("correctAnswerIndex") && q.explanation);
const initialMultipleChoiceQuestionsProg = programmingQuestions.filter(q => q.options && q.options.length > 0 && q.hasOwnProperty("correctAnswerIndex") && q.explanation);

if (initialMultipleChoiceQuestionsWebb.length === 0 && initialMultipleChoiceQuestionsProg.length === 0) {
    questionTextElement.innerHTML = "Inga flervalsfrågor tillgängliga för någon kategori ännu. Konvertera fler frågor i koden.";
    optionsContainer.innerHTML = "";
    nextButton.disabled = true;
} else if (currentDeck.length === 0) { 
    const selectedCategoryName = categorySelect.options[categorySelect.selectedIndex].text;
    questionTextElement.innerHTML = `Inga flervalsfrågor tillgängliga för kategorin '${selectedCategoryName}'. Välj en annan kategori eller lägg till frågor.`;
    optionsContainer.innerHTML = "";
}