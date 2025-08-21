export interface RichTextContent {
  type: 'title' | 'paragraph' | 'list' | 'bold' | 'underline';
  content: string | string[];
  level?: number; // for titles (h1, h2, h3, etc.)
}

export interface Aanbod {
  title: string;
  description: string;
  image: string;
  items: {
    title: string;
    description: string[];
    details?: RichTextContent[] | null;
  }[];
}

export const aanbod: Aanbod[] = [
  {
    title: "Logopedie",
    description: "Logopedie helpt je bij moeilijkheden met communicatie in de breedste zin van het woord. Wij kunnen je begeleiden bij verschillende aspecten van spraak, taal en communicatie.",
    image: "/images/logopedie.jpg",
    items: [
      {
        title: "Communicatieve training",
        description: ["Sommige jonge kinderen komen niet vanzelf tot spreken. In onze communicatietraining ondersteunen we hen stap voor stap in hun ontwikkeling."],
        details: [
          {
            type: 'paragraph',
            content: "Via gerichte speltherapie stimuleren we betrokkenheid, imitatie, spel met materialen en communicatievaardigheden. Ouders worden actief betrokken in deze spelmomenten, zodat we ook thuis het leren kunnen versterken. Door hiermee aan de slag te gaan, stimuleren we zowel de non-verbale als de verbale communicatie van het kind."
          },
          {
            type: 'paragraph',
            content: "We werken volgens wetenschappelijk onderbouwde methodes zoals ESDM, Hanen, Impact en JASPER, en stellen steeds een programma op maat van jullie kind samen. Onze logopediste Jana heeft meer dan 10 jaar ervaring in het begeleiden van jonge kinderen met communicatieproblemen en zet haar expertise in om elk kind maximale groeikansen te bieden."
          },
          {
            type: 'paragraph',
            content: "We werken met kinderen vanaf 2 jaar, we zien ook dat het waardevol kan zijn om op vroege leeftijd met therapie te starten."
          }
        ]
      },
      {
        title: "Taalstoornissen",
        description: ["Soms ontwikkelt de taal van een kind wat trager dan je zou verwachten. De eerste woordjes laten op zich wachten, er worden rond 2 jaar nog geen woorden gecombineerd tot korte zinnetjes."],
        details: [
          {
            type: 'paragraph',
            content: "Bij andere kinderen merken we een atypische taalontwikkeling. Het kind ondervindt woordvindingsmoeilijkheden, spreekt woorden verkeerd uit, begrijpt niet alles wat er gezegd wordt, heeft problemen met het juist gebruiken van klanken, kan moeilijk beurt nemen in een gesprek. Dan spreken we van een taalontwikkelingsstoornis."
          },
          {
            type: 'paragraph',
            content: "Binnen onze taaltherapie gaan we samen met de ouders op zoek naar de sterke en zwakke vaardigheden van het kind. We werken op maat van het kind een therapieplan uit waarbij taalinhoud, taalvorm en taalgebruik al spelend aan bod komen."
          }
        ]
      },
      {
        title: "Articulatiestoornissen",
        description: ["Spreekt jouw kind anders dan leeftijdsgenootjes? Zijn sommige klanken lastig om goed uit te spreken? Of kom je kind soms niet goed uit zijn woorden als het iets wil vertellen?"],
        details: [
          {
            type: 'paragraph',
            content: "Misschien probeer je als ouder al een tijdje om die ene klank aan te leren, maar lukt het niet? Dan is het mogelijk dat er sprake is van een spraakklankstoornis."
          },
          {
            type: 'paragraph',
            content: "Bij een spraakklankstoornis worden sommige klanken anders uitgesproken dan bedoeld. De tong, lippen of kaak bewegen dan nét iets anders dan nodig is om een klank duidelijk te maken. Dit kan verschillende oorzaken hebben:"
          },
          {
            type: 'list',
            content: [
              "Een fysieke moeilijkheid (fonetisch)",
              "Een probleem in het taalgebruik van klanken (fonologisch)"
            ]
          },
          {
            type: 'paragraph',
            content: "Tijdens de logopedie gaan we op een speelse en doelgerichte manier aan de slag met de juiste uitspraak van klanken. We oefenen stap voor stap, met klanken, woorden en zinnen, zodat je kind zich steeds duidelijker kan uitdrukken en met meer zelfvertrouwen durft te spreken."
          }
        ]
      },
      {
        title: "Leerstoornissen",
        description: ["Sommige kinderen ondervinden moeilijkheden bij het leren lezen, schrijven of rekenen. Wij bieden gerichte remediëring om deze leerprocessen te ondersteunen, met aandacht voor het zelfvertrouwen, motivatie en leerplezier van het kind."],
        details: [
          {
            type: 'paragraph',
            content: "We werken nauw samen met ouders en school om aangepaste maatregelen te voorzien, zodat elk kind in een veilige en ondersteunende omgeving kan groeien."
          },
          {
            type: 'paragraph',
            content: "Bij specifieke leerstoornissen zoals dyslexie, dysorthografie en dyscalculie is er sprake van hardnekkige problemen die hun oorsprong vinden in tekorten in het taalvermogen, terwijl de intelligentie normaal is."
          },
          {
            type: 'list',
            content: [
              "Dyslexie en dysorthografie uiten zich in moeilijkheden bij het omzetten van gesproken taal in geschreven taal (spellen), én omgekeerd: van geschreven taal naar gesproken taal (lezen).",
              "Dyscalculie verwijst naar hardnekkige problemen bij specifieke rekenvaardigheden, vooral op het vlak van getalbegrip, automatisatie en rekenprocedures."
            ]
          },
          {
            type: 'paragraph',
            content: "Onze logopedisten zijn gespecialiseerd in het behandelen van deze moeilijkheden. We willen benadrukken dat logopedische therapie geen bijles is, maar een gespecialiseerde en doelgerichte behandeling op maat van het kind."
          }
        ]
      },
      {
        title: "Afwijkende mondgewoonten",
        description: ["Mondademhaling, duim- of vingerzuigen, speenzuigen, nagelbijten, foutieve tong- of lipgewoonten tijdens rust, slikken of spreken, het zijn allemaal vormen van afwijkend mondgedrag."],
        details: [
          {
            type: 'paragraph',
            content: "Ze lijken onschuldig, maar kunnen leiden tot een verstoord evenwicht in de mondspieren en een afwijkende stand van tanden of kaken."
          },
          {
            type: 'title',
            content: "Oromyofunctionele therapie (OMFT)",
            level: 2
          },
          {
            type: 'paragraph',
            content: "Binnen de oromyofunctionele therapie (OMFT) onderzoeken we welke mondgewoonten fout verlopen en hoe dit het evenwicht tussen de spieren in en rond de mond beïnvloedt."
          },
          {
            type: 'paragraph',
            content: "Deze therapie vormt een belangrijke basis voor een goede kaak- en tandontwikkeling én helpt om terugval na orthodontie te voorkomen."
          },
          {
            type: 'paragraph',
            content: "We starten deze therapie vanaf de leeftijd van 5 jaar, afhankelijk van de mondmotorische ontwikkeling van het kind."
          }
        ]
      }
    ]
  },
  {
    title: "Kinesitherapie",
    description: "Kinesitherapie richt zich op het herstellen en verbeteren van je lichamelijk functioneren. Je kan bij ons terecht voor verschillende vormen van bewegings- en ontwikkelingsondersteuning.",
    image: "/images/kinesitherapie.jpg",
    items: [
      {
        title: "Psychomotoriek",
        description: ["Psychomotoriek richt zich op de samenhang tussen bewegen, voelen en het psychisch functioneren van een kind."],
        details: [
          {
            type: 'paragraph',
            content: "Via spel en beweging werken we aan de fijne en grove motoriek, schrijfmotoriek en ruimtelijk-visuele vaardigheden, maar ook op schoolrijpheid, probleemoplossend denken, zelfvertrouwen, concentratie en emotionele ontwikkeling komen aan bod. Psychomotorische begeleiding ondersteunt het kind in zijn totale groei – zowel fysiek als mentaal."
          },
          {
            type: 'title',
            content: "Fijne en grove motoriek",
            level: 2
          },
          {
            type: 'paragraph',
            content: "Binnen de psychomotorische therapie werken we aan de grove motoriek (zoals springen, coördinatie, evenwicht) en de fijne motoriek (zoals scheuren, knippen, schroeven, rijgen). Door gerichte oefeningen en bewegingsspelletjes versterken we niet alleen de motoriek, maar ook het zelfvertrouwen, de concentratie en het lichaamsbesef van uw kind."
          },
          {
            type: 'title',
            content: "Schrijfmotoriek",
            level: 2
          },
          {
            type: 'paragraph',
            content: "Sommige kinderen hebben het moeilijk met schrijven. Er is geen ergonomische pengreep, ze schrijven traag of onleesbaar, of klagen over pijn in de hand. Dit kan het leren en het zelfvertrouwen beïnvloeden. Bij problemen met de schrijfmotoriek werken we op een rustige, speelse manier aan de fijne motoriek, schrijfhouding en schrijfbewegingen. Zo helpen we uw kind om vlotter, netter en met meer plezier te schrijven."
          },
          {
            type: 'title',
            content: "Ruimtelijk-visuele vaardigheden",
            level: 2
          },
          {
            type: 'paragraph',
            content: "Ruimtelijk-visuele vaardigheden helpen kinderen om vormen, afstanden en plaatsing in de ruimte goed te begrijpen. Dit is belangrijk voor bijvoorbeeld schrijven, puzzelen en oriënteren. Door spel en gerichte oefeningen stimuleren we deze vaardigheden, zodat uw kind zich beter kan concentreren en makkelijker leert."
          }
        ]
      },
      {
        title: "Ontwikkelingsstimulatie bij baby's",
        description: ["In de eerste maanden en jaren maken baby's grote stappen in hun ontwikkeling."],
        details: [
          {
            type: 'paragraph',
            content: "Tijdens deze motorische ontwikkeling doorloopt het kind een aantal motorische mijlpalen (zich oprichten in buiklig, omrollen, zitten, zich rechttrekken tot stand, kruipen, stappen,…). Bij sommige kinderen verloopt deze ontwikkeling minder vanzelfsprekend. De mijlpalen ontwikkelen zich op een andere manier, in een andere volgorde of op een later tijdstip."
          },
          {
            type: 'paragraph',
            content: "Tijdens ontwikkelingsstimulatie zal getracht worden om de typische ontwikkeling zoveel mogelijk te stimuleren door specifieke oefeningen. Er wordt nauw samengewerkt met de ouders zodat de aangereikte oefeningen ook in de thuissituatie kunnen worden toegepast."
          }
        ]
      },
      {
        title: "Respiratoire kinesitherapie bij baby's en peuters",
        description: ["Respiratoire kinesitherapie bij baby's en peuters is een behandeling die helpt om slijm in de luchtwegen los te maken en op te hoesten."],
        details: [
          {
            type: 'paragraph',
            content: "We maken hierbij gebruik van geassisteerde autogene drainage, waarbij de kinesitherapeut de ademhaling beïnvloedt door druk op de borstkas te geven. Hierdoor komen de slijmen los en kan het kind de slijmen ophoesten."
          },
          {
            type: 'paragraph',
            content: "Tijdens dit soort therapieën gaat de therapeut gebruik maken van bouncing en thoraxaandrukkingen. Mucusklaring (evacuatie van slijmen) wordt gedaan bij respiratoire aandoeningen zoals bronchitis, bronchiolitis, astma, pneumonie (longontsteking), hyperreactieve luchtwegen..."
          }
        ]
      },
      {
        title: "Relaxatietherapie",
        description: ["Al van kinderleeftijd wordt er in onze maatschappij veel verwacht. Er zijn veel prikkels en verwachtingen, ze ervaren druk van thuis uit, prestatiedruk op school, in de sportclub, van vriendjes,..."],
        details: [
          {
            type: 'paragraph',
            content: "Daarnaast voelen kinderen ook de spanningen uit hun omgeving aan. Kinderen kunnen hierdoor al van jongs af aan te veel stress ervaren."
          },
          {
            type: 'paragraph',
            content: "Relaxatie bij kinderen wordt specifiek aangepakt op maat van het kind. Er wordt steeds gestart met ademhalingsoefeningen. Ademhalingsoefeningen zijn belangrijk voor kinderen omdat ze helpen bij het reguleren van emoties, het verminderen van stress en angst, en het verbeteren van de concentratie."
          },
          {
            type: 'paragraph',
            content: "Ontspanning gaat bij kinderen vaak samen met fantasie, beweging en spel. Al van jongs af aan doen kinderen aan relaxatie zonder het zelf te beseffen: ademhalingsoefeningen, verhaaltjes, massages, dansbewegingen,... Het zijn een voor een activiteiten die kinderen helpen ontspannen en hen helpen om zich bewust te worden van hun lichaam, gevoelens en gewaarwordingen."
          }
        ]
      },
      {
        title: "Typ10",
        description: ["Typ10 is een speelse en kindvriendelijke manier om kinderen met fijnmotorische problemen, DCD, dyslexie, autisme, ADHD… blind te leren typen."],
        details: [
          {
            type: 'paragraph',
            content: "Met de juiste begeleiding leren kinderen binnen tien lessen de basisvaardigheden van blind typen. Tijdens deze typecursus ligt de focus niet op snelheid, maar op een rustige, stap-voor-stap aanpak zonder tijdsdruk."
          },
          {
            type: 'paragraph',
            content: "Dankzij een gevarieerd aanbod van leerkanalen — zoals kleuren, prenten en versjes — kan elk kind op zijn eigen manier leren."
          }
        ]
      },
      {
        title: "Ontwikkelingsstimulatie bij jonge kinderen",
        description: ["Binnen de therapie zetten we in op psychomotorische ontwikkelingsstimulatie, waarbij beweging en interactie dienen als basis voor het versterken van communicatie, zelfregulatie en spelvaardigheden."],
        details: [
          {
            type: 'paragraph',
            content: "Deze aanpak richt zich specifiek op jonge kinderen die baat hebben bij extra ondersteuning in hun ontwikkeling. Door middel van gerichte bewegingsoefeningen en interactieve spelactiviteiten stimuleren we niet alleen de motorische ontwikkeling, maar ook de cognitieve en sociale vaardigheden."
          },
          {
            type: 'paragraph',
            content: "We werken vanuit een holistische benadering waarbij het kind centraal staat. Elke sessie wordt aangepast aan de individuele behoeften en ontwikkelingsfase van het kind, met als doel het versterken van het zelfvertrouwen en de autonomie."
          }
        ]
      },
      {
        title: "Musculosceletale kinesitherapie",
        description: ["Musculoskeletale kinesitherapie bij kinderen richt zich op het behandelen van problemen met het bewegingsapparaat (spieren, botten, gewrichten, pezen en banden) bij kinderen."],
        details: [
          {
            type: 'paragraph',
            content: "Dit kan variëren van revalidatie na blessures of operaties tot het behandelen van aangeboren afwijkingen of ontwikkelingsproblemen."
          }
        ]
      }
    ]
  }
] 