# PathFinderApp / Koodihaaste
Tehtäväsi on toteuttaa reittihaku-sovellus, joka kertoo nopeimman mahdollisen reitin kahden pisteen välillä, mikä on kuljettavissa linja-autolla. Sovelluksen tulee myös kertoa mitä linja-autoreittejä tulisi käyttää perille pääsemiseksi.

Matkustaja voi vaihtaa bussilinjaa reitin varrella, jos se on suotuisaa nopeuden kannalta. Kulkuvälineen vaihtamisesta ei tule matkustamiseen lisäaikaa. Mahdollisissa vaihdoissa voit siis olettaa, että matka jatkuu saman tien ja kulkuvälineitä ei joudu odottamaan pysäkeillä.

Tehtävän toteutusta varten saat json-muotoisen datan, josta löydät seuraavat tiedot:

Pysäkit
Kaikki kartassa olevat pysäkit
Tiet
Kaikki kartan pysäkkien väliset yhteydet sekä matkan kesto niiden välillä. Tiet ovat kaksisuuntaisia (eli niitä voi matkustaa molempiin suuntiin), mutta aineistossa ne esiintyvät vain toiseen suuntaan.
Linjastot
Värikoodatut bussilinjastot ja niiden kulkemat pysäkkien välit kartastossa.

Lopputuloksena sinun tulee luoda web-käyttöliittymä, jossa käyttäjä voi hakea reittejä kahden pisteen välillä. Käyttöliittymästä näkee nopeimman mahdollisen reitin ja siihen käytettävät kulkuvälineet reitin varrella.

Toteutuksessa käytettävät teknologiat ovat vapaasti päätettävissäsi. Tehtävässä ei kuitenkaan saa käyttää mitään kolmannen osapuolen palvelua tai kirjastoa, mikä laskee parhaimman reitin.

Katso vielä lisätiedot tehtävän arviointikriteereistä sekä tarkempi ohje siitä, mitä palautuksessa tulee huomioida.

Onnea koodihaasteeseen ja mukavaa koodausta!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## JSON-data

{
  "pysakit": [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R"
  ],
  "tiet": [
    {
      "mista": "A",
      "mihin": "B",
      "kesto": 3
    },
    {
      "mista": "B",
      "mihin": "D",
      "kesto": 2
    },
    {
      "mista": "D",
      "mihin": "A",
      "kesto": 1
    },
    {
      "mista": "A",
      "mihin": "C",
      "kesto": 1
    },
    {
      "mista": "C",
      "mihin": "D",
      "kesto": 5
    },
    {
      "mista": "C",
      "mihin": "E",
      "kesto": 2
    },
    {
      "mista": "E",
      "mihin": "D",
      "kesto": 3
    },
    {
      "mista": "E",
      "mihin": "F",
      "kesto": 1
    },
    {
      "mista": "F",
      "mihin": "G",
      "kesto": 1
    },
    {
      "mista": "G",
      "mihin": "H",
      "kesto": 2
    },
    {
      "mista": "H",
      "mihin": "I",
      "kesto": 2
    },
    {
      "mista": "I",
      "mihin": "J",
      "kesto": 1
    },
    {
      "mista": "I",
      "mihin": "G",
      "kesto": 1
    },
    {
      "mista": "G",
      "mihin": "K",
      "kesto": 8
    },
    {
      "mista": "K",
      "mihin": "L",
      "kesto": 1
    },
    {
      "mista": "L",
      "mihin": "M",
      "kesto": 1
    },
    {
      "mista": "E",
      "mihin": "M",
      "kesto": 10
    },
    {
      "mista": "M",
      "mihin": "N",
      "kesto": 2
    },
    {
      "mista": "N",
      "mihin": "O",
      "kesto": 2
    },
    {
      "mista": "O",
      "mihin": "P",
      "kesto": 2
    },
    {
      "mista": "O",
      "mihin": "Q",
      "kesto": 1
    },
    {
      "mista": "P",
      "mihin": "Q",
      "kesto": 2
    },
    {
      "mista": "N",
      "mihin": "Q",
      "kesto": 1
    },
    {
      "mista": "Q",
      "mihin": "R",
      "kesto": 5
    },
    {
      "mista": "R",
      "mihin": "N",
      "kesto": 3
    },
    {
      "mista": "D",
      "mihin": "R",
      "kesto": 6
    }
  ],
  "linjastot": {
    "keltainen": ["E", "F", "G", "K", "L", "M", "N"],
    "punainen": ["C", "D", "R", "Q", "N", "O", "P"],
    "vihreä": ["D", "B", "A", "C", "E", "F", "G", "H", "I", "J"],
    "sininen": ["D", "E", "M", "N", "O"]
  }
}
