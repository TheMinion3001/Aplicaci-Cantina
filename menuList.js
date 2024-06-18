//Imagenes Platos Combinados
import combinadoLomo from "./assets/Imagenes/lomo.png";
import combinadoBurguer from "./assets/Imagenes/comBurg.png";
import combinadoPollo from "./assets/Imagenes/comPollo.png";
import combinadoKent from "./assets/Imagenes/comKent.png";
import combinadoButi from "./assets/Imagenes/comButi.png";

//Imagenes Entrepans calents
import bocaLomo from "./assets/Imagenes/bocaLomo.png";
import bocaBoti from "./assets/Imagenes/bocaBoti.png";
import bocaSal from "./assets/Imagenes/bocaSal.png";
import bocaPollo from "./assets/Imagenes/bocaPolo.png";
import bocaKent from "./assets/Imagenes/bocaKent.png";
import bocaFran from "./assets/Imagenes/bocaFran.png";

//Imagenes Hotdogmania
import burguerImg from "./assets/Imagenes/burguer.png";
import frankfurtImg from "./assets/Imagenes/franfurt.png";
import menuHot from "./assets/Imagenes/menuHot.png";
import menuBurg from "./assets/Imagenes/menuBurg.png";

//Imagenes Amanides
import amaVerd from "./assets/Imagenes/amaVerd.png";
import amaAtu from "./assets/Imagenes/amaAtu.png";
import amaRul from "./assets/Imagenes/amaRul.png";
import amaCesar from "./assets/Imagenes/amaCesar.png";

//Imagenes Per picar
import picPata from "./assets/Imagenes/picPata.png";
import picBrav from "./assets/Imagenes/picBrav.png";
import picKent from "./assets/Imagenes/picKent.png";

//Imagenes Pasta
import pastBol from "./assets/Imagenes/pastBol.png";

//Plats Combiants
const combList = [
  {
    titulo: "Llom",
    descripcion: "Plat combinat de llom amb patates fregides i ou ferrat.",
    precio: "7.00€",
    imagen: combinadoLomo,
    suplements: [
      {
        nom: "Ou extra",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Hamburguesa",
    descripcion:
      "Plat combinat de hamburguesa amb patates fregides i ou ferrat.",
    precio: "7.00€",
    imagen: combinadoBurguer,
    suplements: [
      {
        nom: "Ou extra",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Pit de Pollastre",
    descripcion:
      "Plat combinat de pit de pollastre amb patates fregides i ou ferrat.",
    precio: "7.00€",
    imagen: combinadoPollo,
    suplements: [
      {
        nom: "Ou extra",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Pollastre Kentucky",
    descripcion:
      "Plat combinat de pollastre kentucky amb patates fregides i ou ferrat.",
    precio: "7.00€",
    imagen: combinadoKent,
    suplements: [
      {
        nom: "Ou extra",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Botifarra",
    descripcion: "Plat combinat de botifarra amb patates fregides i ou ferrat.",
    precio: "7.00€",
    imagen: combinadoButi,
    suplements: [
      {
        nom: "Ou extra",
        preu: "0.50€",
      },
    ],
  },
];

//Entrepans Calents
const entreList = [
  {
    titulo: "Llom",
    descripcion: "Entrepà de llom amb formatge, pa, oli i tomàquet.",
    precio: "3.50€",
    imagen: bocaLomo,
    suplements: [
      {
        nom: "Formatge",
        preu: "0.50€",
      },
      {
        nom: "Ceba",
        preu: "0.50€",
      },
      {
        nom: "Bacon",
        preu: "1€",
      },
      {
        nom: "Enciam",
        preu: "0.30€",
      },
      {
        nom: "Tomàquet",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Botifarra",
    descripcion: "Entrepà de botifarra amb pa, oli i tomàquet.",
    precio: "3.95€",
    imagen: bocaBoti,
    suplements: [
      {
        nom: "Formatge",
        preu: "0.50€",
      },
      {
        nom: "Ceba",
        preu: "0.50€",
      },
      {
        nom: "Bacon",
        preu: "1€",
      },
      {
        nom: "Enciam",
        preu: "0.30€",
      },
      {
        nom: "Tomàquet",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Salsitxa",
    descripcion: "Entrepà de salsitxa amb pa, oli i tomàquet.",
    precio: "3.50€",
    imagen: bocaSal,
    suplements: [
      {
        nom: "Formatge",
        preu: "0.50€",
      },
      {
        nom: "Ceba",
        preu: "0.50€",
      },
      {
        nom: "Bacon",
        preu: "1€",
      },
      {
        nom: "Enciam",
        preu: "0.30€",
      },
      {
        nom: "Tomàquet",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Pit de Pollastre",
    descripcion:
      "Entrepà de pit de pollastre amb pa, enciam, ceba, oli i tomàquet.",
    precio: "3.50€",
    imagen: bocaPollo,
    suplements: [
      {
        nom: "Formatge",
        preu: "0.50€",
      },
      {
        nom: "Ceba",
        preu: "0.50€",
      },
      {
        nom: "Bacon",
        preu: "1€",
      },
      {
        nom: "Enciam",
        preu: "0.30€",
      },
      {
        nom: "Tomàquet",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Pollastre Kentucky",
    descripcion:
      "Entrepà de pollastre kentucky amb pa, enciam, ceba, oli i tomàquet.",
    precio: "4.50€",
    imagen: bocaKent,
    suplements: [
      {
        nom: "Formatge",
        preu: "0.50€",
      },
      {
        nom: "Ceba",
        preu: "0.50€",
      },
      {
        nom: "Bacon",
        preu: "1€",
      },
      {
        nom: "Enciam",
        preu: "0.30€",
      },
      {
        nom: "Tomàquet",
        preu: "0.50€",
      },
    ],
  },
  {
    titulo: "Truita Francesa",
    descripcion: "Entrepà de truita francesa amb pa, oli i tomàquet.",
    precio: "3.50€",
    imagen: bocaFran,
    suplements: [
      {
        nom: "Formatge",
        preu: "0.50€",
      },
      {
        nom: "Ceba",
        preu: "0.50€",
      },
      {
        nom: "Bacon",
        preu: "1€",
      },
      {
        nom: "Enciam",
        preu: "0.30€",
      },
      {
        nom: "Tomàquet",
        preu: "0.50€",
      },
    ],
  },
];

//Hotdogmania
const burgList = [
  {
    titulo: "Hot Dog",
    descripcion: "Frankfurt, mostassa, pa tendre i ceba cruixent.",
    precio: "3.00€",
    imagen: frankfurtImg,
    suplements: [
      {
        nom: "Ketchup",
        preu: "0.00€",
      },
      {
        nom: "Mostassa",
        preu: "0.00€",
      },
      {
        nom: "Maionesa",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Hamburguersa",
    descripcion: "Hamburguesa amb carn, formatge, enciam, tomàquet i ceba.",
    precio: "3.50€",
    imagen: burguerImg,
    suplements: [
      {
        nom: "Ketchup",
        preu: "0.00€",
      },
      {
        nom: "Mostassa",
        preu: "0.00€",
      },
      {
        nom: "Maionesa",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Menu Hot Dog",
    descripcion: "Hot Dog, patates fregides i beguda.",
    precio: "6.00€",
    imagen: menuHot,
    suplements: [
      {
        nom: "Ketchup",
        preu: "0.00€",
      },
      {
        nom: "Mostassa",
        preu: "0.00€",
      },
      {
        nom: "Maionesa",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Menu Burguer",
    descripcion: "Hamburguersa, patates fregides i beguda.",
    precio: "6.50€",
    imagen: menuBurg,
    suplements: [
      {
        nom: "Ketchup",
        preu: "0.00€",
      },
      {
        nom: "Mostassa",
        preu: "0.00€",
      },
      {
        nom: "Maionesa",
        preu: "0.00€",
      },
    ],
  },
];

//Amanides
const amaniList = [
  {
    titulo: "Amanida Verda",
    descripcion: "Amanida amb enciam, tomàquet, ceba i pastanaga.",
    precio: "4.50€",
    imagen: amaVerd,
    suplements: [
      {
        nom: "Vinagre",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Amanida amb Tonyina",
    descripcion: "Amanida amb enciam, tomàquet, ceba, tonyina i pastanaga.",
    precio: "5.50€",
    imagen: amaAtu,
    suplements: [
      {
        nom: "Vinagre",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Amanida rul·lo de cabra",
    descripcion: "Enciam, rul·lo de cabra, ceba caramel·litzada i fruits secs.",
    precio: "6.50€",
    imagen: amaRul,
    suplements: [
      {
        nom: "Vinagre",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Amanida Cèsar",
    descripcion:
      "Pollastre arrebossat, bacon, ceba cruixent, cogombrets i salsa tàrtara.",
    precio: "7.00€",
    imagen: amaCesar,
    suplements: [
      {
        nom: "Vinagre",
        preu: "0.00€",
      },
    ],
  },
];

//Per Picar
const picarList = [
  {
    titulo: "Cono Patates",
    descripcion: "Cono de patates fregides amb Ketchup i maionesa.",
    precio: "3.00€",
    imagen: picPata,
    suplements: [
      {
        nom: "Ketchup",
        preu: "0.00€",
      },
      {
        nom: "Mostassa",
        preu: "0.00€",
      },
      {
        nom: "Maionesa",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Patates Braves",
    descripcion: "Patates braves amb salsa brava.",
    precio: "3.50€",
    imagen: picBrav,
    suplements: [
      {
        nom: "Salsa Brava",
        preu: "0.80€",
      },
      {
        nom: "Ketchup",
        preu: "0.00€",
      },
      {
        nom: "Mostassa",
        preu: "0.00€",
      },
      {
        nom: "Maionesa",
        preu: "0.00€",
      },
    ],
  },
  {
    titulo: "Pollastre Kentucky",
    descripcion: "Peces de pollastre cruixent.",
    precio: "6.50€",
    imagen: picKent,
    suplements: [
      {
        nom: "Ketchup",
        preu: "0.00€",
      },
      {
        nom: "Mostassa",
        preu: "0.00€",
      },
      {
        nom: "Maionesa",
        preu: "0.00€",
      },
    ],
  },
];

//Pasta
const pastaList = [
  {
    titulo: "Pasta bolonyesa",
    descripcion: "Pasta a la bolonyesa amb carn, tomàquet i ceba.",
    precio: "5.00€",
    imagen: pastBol,
    suplements: [],
  },
];

export { combList, entreList, burgList, amaniList, picarList, pastaList };
