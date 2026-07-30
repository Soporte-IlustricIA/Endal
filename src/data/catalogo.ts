export type Producto = {
  id: number
  nombre: string
  referencia: string
  imagen: string
  descripcion: string
  atributos: Record<string, string>
}

export const catalogoEndal: Producto[] = [
  { id: 1, nombre: "ENVASE REDONDO PARA TAPA", referencia: "2800", imagen: "", descripcion: `Resistente al frío y al calor, este formato es el aliado del cocinero que prepara el menú del día con antelación. Se apila sin deformarse y aguanta el servicio de reparto sin problemas.`, atributos: {
    "unidades/caja": "1200",
    "volumen(cc)": "0.12",
    "exterior(mm)": "187",
    "interior(mm)": "168",
    "base(mm)": "142",
    "altura(mm)": "43",
    "capacidad(ml)": "800"
  } },
  { id: 2, nombre: "ENVASE REDONDO PARA TAPA", referencia: "2935", imagen: "", descripcion: `Capacidad pensada para raciones generosas de guisos, sopas o cremas. La boca ancha facilita el emplatado rápido en cocinas de alta producción.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.082",
    "exterior(mm)": "203",
    "interior(mm)": "190",
    "base(mm)": "173",
    "altura(mm)": "38",
    "capacidad(ml)": "935"
  } },
  { id: 3, nombre: "ENVASE REDONDO PARA TAPA", referencia: "21400", imagen: "21400.webp", descripcion: `Para platos de fondo que necesitan viajar: aguanta horno, vitrocerámica y congelador sin deformarse. El reborde reforzado garantiza el cierre hermético con su tapa.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.082",
    "exterior(mm)": "203",
    "interior(mm)": "190",
    "base(mm)": "170",
    "altura(mm)": "57",
    "capacidad(ml)": "1400"
  } },
  { id: 4, nombre: "ENVASE REDONDO PARA TAPA", referencia: "21425", imagen: "21425.webp", descripcion: `Formato amplio y bajo, pensado para platos que se comparten o se presentan en mesa. Distribuye el calor de manera uniforme, tanto en horno como en freidora de aire.`, atributos: {
    "unidades/caja": "700",
    "volumen(cc)": "0.12",
    "exterior(mm)": "233",
    "interior(mm)": "215",
    "base(mm)": "198",
    "altura(mm)": "43",
    "capacidad(ml)": "1425"
  } },
  { id: 5, nombre: "ENVASE REDONDO PARA TAPA", referencia: "21900", imagen: "21900.webp", descripcion: `Con capacidad generosa para cocidos, pucheros o menestras, este envase pasa del congelador directamente al horno sin problema. Muy usado en cocina de colectividades.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "217",
    "interior(mm)": "196",
    "base(mm)": "170",
    "altura(mm)": "70",
    "capacidad(ml)": "1900"
  } },
  { id: 6, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4280", imagen: "rectstapa4280.webp", descripcion: `La bandeja más compacta del catálogo: pensada para aperitivos, embutidos o muestras gastronómicas en buffet. Muy manejable en servicio de catering.`, atributos: {
    "unidades/caja": "2200",
    "volumen(cc)": "0.12",
    "exterior(mm)": "160x110",
    "interior(mm)": "150x100",
    "base(mm)": "138x88",
    "altura(mm)": "25",
    "capacidad(ml)": "280"
  } },
  { id: 7, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4360", imagen: "4360.webp", descripcion: `Dos raciones de tapa o una entrada: formato manejable que se adapta tanto a la cocina de restaurante como al servicio de catering y mesas compartidas.`, atributos: {
    "unidades/caja": "2200",
    "volumen(cc)": "0.12",
    "exterior(mm)": "156x116",
    "interior(mm)": "140x100",
    "base(mm)": "122x80",
    "altura(mm)": "35",
    "capacidad(ml)": "360"
  } },
  { id: 8, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "44965", imagen: "44965.webp", descripcion: `Para los grandes formatos de producción: paellas, lasañas familiares o preparaciones de obrador que hay que conservar o transportar en bloque. Estructura robusta para el traslado.`, atributos: {
    "unidades/caja": "120",
    "volumen(cc)": "0.12",
    "exterior(mm)": "405x330",
    "interior(mm)": "372x294",
    "base(mm)": "347x285",
    "altura(mm)": "50",
    "capacidad(ml)": "4965"
  } },
  { id: 9, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4425", imagen: "4425.webp", descripcion: `El formato para acompañamientos y guarniciones: patatas, verduras salteadas o arroces que se preparan en bloque y se porcionan en línea de cocina.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "228x128",
    "interior(mm)": "212x115",
    "base(mm)": "182x82",
    "altura(mm)": "30",
    "capacidad(ml)": "425"
  } },
  { id: 10, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4465", imagen: "4465.webp", descripcion: `Formato casi cuadrado, práctico para piezas individuales: flanes, budines o guarniciones de ración única. Apila bien y ocupa poco espacio en el pase de cocina.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "130x130",
    "interior(mm)": "118x118",
    "base(mm)": "95x95",
    "altura(mm)": "35",
    "capacidad(ml)": "365"
  } },
  { id: 11, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4470", imagen: "4470.webp", descripcion: `El tamaño estándar para aperitivos calientes o entrantes en servicios de catering. Resiste el horno sin combarse y permite preparar con horas de antelación.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "185x120",
    "interior(mm)": "170x102",
    "base(mm)": "158x90",
    "altura(mm)": "32",
    "capacidad(ml)": "470"
  } },
  { id: 12, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4590", imagen: "4590.webp", descripcion: `Ración de primer plato o guarnición generosa: el formato más solicitado para arroces caldosos, menestras y potajes en restauración colectiva.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "187x137",
    "interior(mm)": "175x125",
    "base(mm)": "158x109",
    "altura(mm)": "33",
    "capacidad(ml)": "590"
  } },
  { id: 13, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4750", imagen: "4750.webp", descripcion: `Alargado y estrecho: pensado para espárragos, puerros, piezas de pan o preparaciones que requieren ese formato más en longitud que en anchura.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "205x92",
    "interior(mm)": "190x80",
    "base(mm)": "173x60",
    "altura(mm)": "50",
    "capacidad(ml)": "750"
  } },
  { id: 14, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4797", imagen: "4797.webp", descripcion: `Lasañas individuales y canelones encuentran aquí su formato ideal: la relación largo-ancho facilita el emplatado y el corte en servicio. Muy extendido en cocina de producción.`, atributos: {
    "unidades/caja": "800",
    "volumen(cc)": "0.12",
    "exterior(mm)": "250x130",
    "interior(mm)": "235x116",
    "base(mm)": "220x100",
    "altura(mm)": "35",
    "capacidad(ml)": "797"
  } },
  { id: 15, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4835", imagen: "4835.webp", descripcion: `El formato para bandejas de presentación de asados y verduras. La poca altura facilita la exposición en mostradores de buffet y carta de menú del día.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.12",
    "exterior(mm)": "226x175",
    "interior(mm)": "207x158",
    "base(mm)": "196x145",
    "altura(mm)": "27",
    "capacidad(ml)": "835"
  } },
  { id: 16, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "4860", imagen: "4860.webp", descripcion: `Un litro en formato rectangular: la ración para pasta, arroz o cualquier plato de fondo que se sirve en catering de empresa o colectividades.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.12",
    "exterior(mm)": "226x175",
    "interior(mm)": "207x157",
    "base(mm)": "196x145",
    "altura(mm)": "38",
    "capacidad(ml)": "1000"
  } },
  { id: 17, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "41500", imagen: "41500.webp", descripcion: `Para elaboraciones que se preparan en bloque y se sirven en grandes cantidades: musaka, fideuá o gratinados de verdura en hostelería y eventos.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.12",
    "exterior(mm)": "283x186",
    "interior(mm)": "265x165",
    "base(mm)": "245x150",
    "altura(mm)": "40",
    "capacidad(ml)": "1500"
  } },
  { id: 18, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "42200", imagen: "42200.webp", descripcion: `El gran rectangular para cocinas de producción: bandejas de horno que se preparan la víspera y se regeneran al momento. Estable en pilas de varios niveles.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.215",
    "exterior(mm)": "315x212",
    "interior(mm)": "290x189",
    "base(mm)": "280x175",
    "altura(mm)": "44",
    "capacidad(ml)": "2200"
  } },
  { id: 19, nombre: "ENVASE RECTANGULAR SIN TAPA", referencia: "42400", imagen: "42400.webp", descripcion: `Formato banquete: la opción de mayor superficie de la familia rectangular sin tapa, para presentar ensaladas frías, asados o buffets de restauración colectiva.`, atributos: {
    "unidades/caja": "280",
    "volumen(cc)": "0.215",
    "exterior(mm)": "328x264",
    "interior(mm)": "294x233",
    "base(mm)": "280x215",
    "altura(mm)": "38",
    "capacidad(ml)": "2400"
  } },
  { id: 20, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "5250", imagen: "5250.webp", descripcion: `La ración individual más pequeña con tapa: tapas de bar, snacks de colmado o muestras en puntos de degustación. Compatible con tapas termosellables para venta directa.`, atributos: {
    "unidades/caja": "2000",
    "volumen(cc)": "0.12",
    "exterior(mm)": "128x100",
    "interior(mm)": "111x85",
    "base(mm)": "94x68",
    "altura(mm)": "32",
    "capacidad(ml)": "250"
  } },
  { id: 21, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "5360", imagen: "5360.webp", descripcion: `Formato de ración pequeña-media con cierre hermético: ensaladillas, mariscos aliñados o raciones de menú para delivery. La tapa asegura que nada se derrama en el transporte.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "156x116",
    "interior(mm)": "140x100",
    "base(mm)": "120x80",
    "altura(mm)": "35",
    "capacidad(ml)": "360"
  } },
  { id: 22, nombre: "PORTA ROLLO", referencia: "Porta Rollo Film", imagen: "portarollos sin tapa.webp", descripcion: `Soporte resistente para rollos de film estirable de uso profesional. Facilita el dispensado limpio y rápido en cocina sin que el rollo se enrolle o ensucie.`, atributos: {
    "unidades/caja": "1",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 23, nombre: "PORTA ROLLO", referencia: "Porta Rollo Aluminio", imagen: "portarollos con tapa.webp", descripcion: `Dispensador para rollos de papel de aluminio industrial. Mantiene el rollo tenso y listo para usar, ahorrando tiempo en tareas de envasado o cobertura en cocina.`, atributos: {
    "unidades/caja": "1",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 24, nombre: "MÁQUINA", referencia: "M21400", imagen: "m21400.webp", descripcion: `Máquina termoselladora para bandejas de aluminio de formato mediano. Integrable en líneas de producción alimentaria que requieren sellado hermético a alta cadencia.`, atributos: {
    "unidades/caja": "1",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 25, nombre: "MAQUINA", referencia: "M42600", imagen: "M42600.webp", descripcion: `Termoselladora diseñada para bandejas de gran formato. Pensada para obradores y centrales de producción que necesitan velocidad y hermeticidad en el cierre.`, atributos: {
    "unidades/caja": "1",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 26, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "5475", imagen: "5475.webp", descripcion: `La solución estándar para el menú del día de take-away: cabe un primer o segundo plato completo y el sellado con tapa impide derrames durante el reparto.`, atributos: {
    "unidades/caja": "1200",
    "volumen(cc)": "0.7",
    "exterior(mm)": "146x121",
    "interior(mm)": "130x102",
    "base(mm)": "107x80",
    "altura(mm)": "40",
    "capacidad(ml)": "475"
  } },
  { id: 27, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "5580", imagen: "5580.webp", descripcion: `Medio litro en formato rectangular cerrado: muy usado en tiendas de comida preparada para salsas, sopas frías o guisos de ración. Sella sin fugas.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.12",
    "exterior(mm)": "185x135",
    "interior(mm)": "170x120",
    "base(mm)": "151x101",
    "altura(mm)": "30",
    "capacidad(ml)": "580"
  } },
  { id: 28, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "5590", imagen: "5590.webp", descripcion: `La elección habitual del catering de empresa: cabe un plato completo con guarnición, aguanta el transporte y se mete al microondas directamente con la tapa retirada.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.099",
    "exterior(mm)": "191x141",
    "interior(mm)": "175x125",
    "base(mm)": "157x107",
    "altura(mm)": "33",
    "capacidad(ml)": "650"
  } },
  { id: 29, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "5860", imagen: "5860.webp", descripcion: `Un litro con cierre, el favorito de las cocinas de producción para platos únicos de catering corporativo. Fácil de etiquetar y apilar en cámaras de frío.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.12",
    "exterior(mm)": "230x175",
    "interior(mm)": "213x157",
    "base(mm)": "196x141",
    "altura(mm)": "34",
    "capacidad(ml)": "1000"
  } },
  { id: 30, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "5890", imagen: "5890.webp", descripcion: `Para guisos con algo de caldillo que no pueden perder líquido en el reparto. La tapa se ajusta con firmeza y aguanta las vibraciones del transporte sin abrirse.`, atributos: {
    "unidades/caja": "800",
    "volumen(cc)": "0.099",
    "exterior(mm)": "225x155",
    "interior(mm)": "200x135",
    "base(mm)": "175x115",
    "altura(mm)": "36",
    "capacidad(ml)": "890"
  } },
  { id: 31, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "51180", imagen: "51180.webp", descripcion: `Formato de restaurante que hace el menú para llevar: espacio suficiente para plato más guarnición, con tapa que permite servir sin trasvasar.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.12",
    "exterior(mm)": "240x188",
    "interior(mm)": "220x168",
    "base(mm)": "200x148",
    "altura(mm)": "35",
    "capacidad(ml)": "1180"
  } },
  { id: 32, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "51500", imagen: "51500.webp", descripcion: `Ración y media generosa con cierre: para cocinas de colectividades que necesitan envases grandes para repartir sin que el contenido se desplace.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "280x180",
    "interior(mm)": "258x158",
    "base(mm)": "240x147",
    "altura(mm)": "37",
    "capacidad(ml)": "1500"
  } },
  { id: 33, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "52200", imagen: "52200.webp", descripcion: `El gran formato de la familia con tapa: lasañas familiares, guisos de olla o preparaciones de obrador que se venden selladas al cliente final.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.21",
    "exterior(mm)": "315x210",
    "interior(mm)": "290x189",
    "base(mm)": "280x175",
    "altura(mm)": "46",
    "capacidad(ml)": "2200"
  } },
  { id: 34, nombre: "ENVASE RECTANGULAR PARA TAPA", referencia: "52400", imagen: "52400.webp", descripcion: `Máxima capacidad con cierre hermético en formato rectangular. Para grandes elaboraciones que se distribuyen como platos preparados a punto de consumo.`, atributos: {
    "unidades/caja": "400",
    "volumen(cc)": "0.21",
    "exterior(mm)": "325x250",
    "interior(mm)": "298x238",
    "base(mm)": "280x223",
    "altura(mm)": "38",
    "capacidad(ml)": "2400"
  } },
  { id: 35, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1205", imagen: "1205.webp", descripcion: `El diámetro más amplio en poca altura: el formato de presentación para tartas planas, quiches o cocas que se sirven por porciones en pastelerías y obradores.`, atributos: {
    "unidades/caja": "2500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "140",
    "interior(mm)": "125",
    "base(mm)": "117",
    "altura(mm)": "14",
    "capacidad(ml)": "205"
  } },
  { id: 36, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1230", imagen: "1230.webp", descripcion: `Tartaleta grande de pastelería: redonda, baja y de gran diámetro, para flan de queso, tarta fina de manzana o bases de repostería artesanal.`, atributos: {
    "unidades/caja": "2600",
    "volumen(cc)": "0.12",
    "exterior(mm)": "150",
    "interior(mm)": "140",
    "base(mm)": "133",
    "altura(mm)": "15",
    "capacidad(ml)": "230"
  } },
  { id: 37, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1240", imagen: "1240.webp", descripcion: `Disco amplio y muy bajo: el molde para bases de pizza artesanal, focaccias o panificación de obradores que buscan el dorado uniforme del aluminio.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "200",
    "interior(mm)": "190",
    "base(mm)": "175",
    "altura(mm)": "15",
    "capacidad(ml)": "240"
  } },
  { id: 38, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1250", imagen: "1250.webp", descripcion: `Alto y estrecho: el formato del flan de huevo clásico o el coulant individual. La profundidad favorece la cocción uniforme al baño María o en horno convencional.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "114",
    "interior(mm)": "99",
    "base(mm)": "58",
    "altura(mm)": "50",
    "capacidad(ml)": "250"
  } },
  { id: 39, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1280", imagen: "1280.webp", descripcion: `Formato de magdalena o bizcochito individual: redondo, de tamaño de ración única, muy habitual en obradores de panadería y pastelería artesanal.`, atributos: {
    "unidades/caja": "2000",
    "volumen(cc)": "0.12",
    "exterior(mm)": "130",
    "interior(mm)": "118",
    "base(mm)": "100",
    "altura(mm)": "32",
    "capacidad(ml)": "280"
  } },
  { id: 40, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1375", imagen: "1375.webp", descripcion: `El formato estrella para tartas de queso al horno y pasteles de obrador que se presentan enteros y se cortan en porciones. Plato bajo y de gran área.`, atributos: {
    "unidades/caja": "1400",
    "volumen(cc)": "0.12",
    "exterior(mm)": "205",
    "interior(mm)": "184",
    "base(mm)": "145",
    "altura(mm)": "23",
    "capacidad(ml)": "375"
  } },
  { id: 41, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1790", imagen: "1790.webp", descripcion: `El disco más plano del catálogo, con un diámetro notable: para pizzas artesanales, tartas finas y bases de repostería que necesitan poca altura de cocción.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.12",
    "exterior(mm)": "250",
    "interior(mm)": "240",
    "base(mm)": "220",
    "altura(mm)": "15",
    "capacidad(ml)": "790"
  } },
  { id: 42, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1900", imagen: "1900.webp", descripcion: `Gran superficie de fondo con poca profundidad: muy usado en presentación de quesos, embutidos o tablas de aperitivos que se sirven directamente del envase.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.12",
    "exterior(mm)": "240",
    "interior(mm)": "224",
    "base(mm)": "210",
    "altura(mm)": "25",
    "capacidad(ml)": "900"
  } },
  { id: 43, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1935", imagen: "1935.webp", descripcion: `El redondo estándar de restauración sin tapa: para flanes, natillas al horno o cremas brulée individuales que se desmoldan directamente en el plato.`, atributos: {
    "unidades/caja": "800",
    "volumen(cc)": "0.12",
    "exterior(mm)": "203",
    "interior(mm)": "190",
    "base(mm)": "173",
    "altura(mm)": "38",
    "capacidad(ml)": "935"
  } },
  { id: 44, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1975", imagen: "1975.webp", descripcion: `Plato hondo de gran diámetro y muy poca altura: el formato de presentación en buffet para ensaladas redondas, salsas o aderezos que acompañan a los platos principales.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.215",
    "exterior(mm)": "275",
    "interior(mm)": "260",
    "base(mm)": "250",
    "altura(mm)": "15",
    "capacidad(ml)": "975"
  } },
  { id: 45, nombre: "ENVASE REDONDO SIN TAPA", referencia: "11100", imagen: "11100.webp", descripcion: `Bandeja redonda de diámetro profesional y baja altura: para exposición en barra de aperitivos, raciones de queso o embutidos, o tartas que se cortan en mesa.`, atributos: {
    "unidades/caja": "800",
    "volumen(cc)": "0.215",
    "exterior(mm)": "295",
    "interior(mm)": "280",
    "base(mm)": "270",
    "altura(mm)": "17",
    "capacidad(ml)": "1100"
  } },
  { id: 46, nombre: "ENVASE REDONDO SIN TAPA", referencia: "11103", imagen: "11103.webp", descripcion: `Gran disco para servicio de buffet o banquetes: el formato de mayor diámetro del catálogo redondo, para tartas enteras, quiches o guiches de celebración.`, atributos: {
    "unidades/caja": "400",
    "volumen(cc)": "0.215",
    "exterior(mm)": "330",
    "interior(mm)": "314",
    "base(mm)": "307",
    "altura(mm)": "15",
    "capacidad(ml)": "1103"
  } },
  { id: 47, nombre: "ENVASE REDONDO SIN TAPA", referencia: "11150", imagen: "", descripcion: `Diámetro generoso con algo más de altura: el equilibrio entre capacidad y presentación para tartas de altura media en pastelerías y obradores.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "275",
    "interior(mm)": "263",
    "base(mm)": "250",
    "altura(mm)": "25",
    "capacidad(ml)": "1150"
  } },
  { id: 48, nombre: "ENVASE REDONDO SIN TAPA", referencia: "1470", imagen: "", descripcion: `El plato más plano de los grandes diámetros: para tartas de presentación en restauración donde la altura mínima del molde pone en valor el producto principal.`, atributos: {
    "unidades/caja": "800",
    "volumen(cc)": "0.12",
    "exterior(mm)": "220",
    "interior(mm)": "208",
    "base(mm)": "203",
    "altura(mm)": "15",
    "capacidad(ml)": "470"
  } },
  { id: 49, nombre: "OVALADAS", referencia: "41230V", imagen: "41230V.webp", descripcion: `La clásica bandeja ovalada para asados enteros: pollo, conejo o costillar caben cómodamente. Aguanta el líquido del jugo sin deformarse en horno a altas temperaturas.`, atributos: {
    "unidades/caja": "350",
    "volumen(cc)": "0.12",
    "exterior(mm)": "330x210",
    "interior(mm)": "325x203",
    "base(mm)": "308x195",
    "altura(mm)": "33",
    "capacidad(ml)": "0"
  } },
  { id: 50, nombre: "OVALADAS", referencia: "750870", imagen: "750870.webp", descripcion: `Oval de tamaño medio para presentar piezas a la vista: lechones, rodaballo o piezas de caza que se llevan directamente del horno a la mesa.`, atributos: {
    "unidades/caja": "100",
    "volumen(cc)": "0.098",
    "exterior(mm)": "357x243",
    "interior(mm)": "327x225",
    "base(mm)": "257x156",
    "altura(mm)": "21",
    "capacidad(ml)": "0"
  } },
  { id: 51, nombre: "OVALADAS", referencia: "751650", imagen: "751650.webp", descripcion: `La bandeja de gran gala: para presentar asados enteros en banquetes o restaurantes de carnes a la brasa. El aluminio mantiene el calor y el jugo durante el servicio.`, atributos: {
    "unidades/caja": "100",
    "volumen(cc)": "0.98",
    "exterior(mm)": "430x286",
    "interior(mm)": "401x261",
    "base(mm)": "325x185",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 52, nombre: "OVALADAS", referencia: "752151", imagen: "752151.webp", descripcion: `El formato más grande de la familia ovalada. Para piezas de carne de gran tamaño como cochinillo, cabrito o paletilla que se sirven en mesa sin trasvasar.`, atributos: {
    "unidades/caja": "100",
    "volumen(cc)": "0.098",
    "exterior(mm)": "548x359",
    "interior(mm)": "520x336",
    "base(mm)": "426x242",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 53, nombre: "OVALADAS", referencia: "CONCHA", imagen: "CONCHA.webp", descripcion: `Forma de concha para presentaciones originales: mariscos, gratinados de marisco o entrantes de alta gastronomía donde la estética del envase forma parte del plato.`, atributos: {
    "unidades/caja": "2500",
    "volumen(cc)": "0.01",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 54, nombre: "ENVASES OVALADOS PARA TAPA", referencia: "41900", imagen: "41900.webp", descripcion: `El oval cerrado para el pollo preparado: el formato estándar de los pollos asados de take-away, con tapa que mantiene el vapor y la jugosidad durante el reparto.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "250x200",
    "interior(mm)": "230x178",
    "base(mm)": "190x130",
    "altura(mm)": "57",
    "capacidad(ml)": "1900"
  } },
  { id: 55, nombre: "ENVASES OVALADOS PARA TAPA", referencia: "42600", imagen: "42600.webp", descripcion: `El ovalado más alto del catálogo, para piezas de carne voluminosas con salsa. La tapa garantiza que el caldo no se derrama y el producto llega en perfectas condiciones.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "250x200",
    "interior(mm)": "230x178",
    "base(mm)": "190x130",
    "altura(mm)": "100",
    "capacidad(ml)": "2600"
  } },
  { id: 56, nombre: "BAÑERAS", referencia: "53114", imagen: "53114.webp", descripcion: `La bañera de hostelería: para preparar grandes volúmenes de arroces, guisos o cocidos en cocinas centrales. Resiste el apilado en cámaras y la manipulación intensiva.`, atributos: {
    "unidades/caja": "50",
    "volumen(cc)": "0.997",
    "exterior(mm)": "525x325",
    "interior(mm)": "495x256",
    "base(mm)": "455x256",
    "altura(mm)": "67",
    "capacidad(ml)": "8850"
  } },
  { id: 57, nombre: "BAÑERAS", referencia: "53535", imagen: "53535.webp", descripcion: `Formato intermedio de bañera para media producción: pastelerías que hornean en bloque o cocinas de colectividades que regeneran en plancha o horno de convección.`, atributos: {
    "unidades/caja": "50",
    "volumen(cc)": "0.997",
    "exterior(mm)": "525x325",
    "interior(mm)": "495x295",
    "base(mm)": "473x273",
    "altura(mm)": "39",
    "capacidad(ml)": "5350"
  } },
  { id: 58, nombre: "BAÑERAS", referencia: "53680", imagen: "53680.webp", descripcion: `La bañera de producción diaria: se llena, se hornea, se enfría y se distribuye directamente. Estructura suficientemente rígida para soportar el peso del contenido.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.997",
    "exterior(mm)": "525x325",
    "interior(mm)": "495x295",
    "base(mm)": "465x265",
    "altura(mm)": "52",
    "capacidad(ml)": "6800"
  } },
  { id: 59, nombre: "BAÑERAS", referencia: "53885", imagen: "53885.webp", descripcion: `La bañera más profunda del catálogo, para preparaciones que necesitan volumen: rellenos de pasta, masas de bizcocho a granel o grandes elaboraciones de cocina.`, atributos: {
    "unidades/caja": "50",
    "volumen(cc)": "0.997",
    "exterior(mm)": "525x325",
    "interior(mm)": "495x295",
    "base(mm)": "446x246",
    "altura(mm)": "80",
    "capacidad(ml)": "11450"
  } },
  { id: 60, nombre: "BOMBONERÍA", referencia: "1/87", imagen: "1-87 bomboneria.webp", descripcion: `Cápsula pequeña de bombonería: la más habitual para bombones de chocolate negro de gramaje individual. Acabado espejo que realza el brillo del chocolate.`, atributos: {
    "unidades/caja": "5000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "30",
    "interior(mm)": "",
    "base(mm)": "24",
    "altura(mm)": "19",
    "capacidad(ml)": "0"
  } },
  { id: 61, nombre: "BOMBONERÍA", referencia: "2/86", imagen: "bomboneria aluminio 2-86.webp", descripcion: `Cápsula de tamaño medio para trufas y pralinés: la profundidad justa para que el relleno se enfríe bien y la cobertura quede uniforme en tableros de producción.`, atributos: {
    "unidades/caja": "5000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "38",
    "interior(mm)": "",
    "base(mm)": "28",
    "altura(mm)": "17",
    "capacidad(ml)": "0"
  } },
  { id: 62, nombre: "BOMBONERÍA", referencia: "3/87", imagen: "bomboneria aluminio 3-87.webp", descripcion: `Para piezas más grandes: el formato habitual de los bombones con relleno cremoso o ganache, donde se necesita más volumen interior para la trufa.`, atributos: {
    "unidades/caja": "4000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "46",
    "interior(mm)": "",
    "base(mm)": "33",
    "altura(mm)": "17",
    "capacidad(ml)": "0"
  } },
  { id: 63, nombre: "BOMBONERÍA", referencia: "3102", imagen: "bomboneria aluminio 3102.webp", descripcion: `La cápsula de gran formato para piezas únicas de obrador: bombones de lujo, mendiants con frutos secos o gianduja en gramajes de regalo.`, atributos: {
    "unidades/caja": "2200",
    "volumen(cc)": "0.35",
    "exterior(mm)": "68",
    "interior(mm)": "",
    "base(mm)": "60",
    "altura(mm)": "30",
    "capacidad(ml)": "0"
  } },
  { id: 64, nombre: "BOMBONERÍA", referencia: "4/86", imagen: "bomboneria aluminio 4-86.webp", descripcion: `Formato intermedio entre trufa y bombón: muy habitual en líneas de producción de confitería artesanal donde se preparan lotes de varias docenas de piezas.`, atributos: {
    "unidades/caja": "4500",
    "volumen(cc)": "0.046",
    "exterior(mm)": "55",
    "interior(mm)": "",
    "base(mm)": "44",
    "altura(mm)": "27",
    "capacidad(ml)": "0"
  } },
  { id: 65, nombre: "BOMBONERÍA", referencia: "7/87", imagen: "bomboneria aluminio 7-87.webp", descripcion: `Pieza plana y amplia: para bombones de corte o tabletas individuales de presentación en caja de regalo. La poca altura facilita el apilado perfecto.`, atributos: {
    "unidades/caja": "4000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "47",
    "interior(mm)": "",
    "base(mm)": "40",
    "altura(mm)": "12",
    "capacidad(ml)": "0"
  } },
  { id: 66, nombre: "BOMBONERÍA", referencia: "8/96", imagen: "8-96.webp", descripcion: `El disco grande de la bombonería: para piezas de chocolate con base amplia, mendiants de gran diámetro o tabletas artesanales con frutas y semillas.`, atributos: {
    "unidades/caja": "5000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "80",
    "interior(mm)": "",
    "base(mm)": "70",
    "altura(mm)": "20",
    "capacidad(ml)": "0"
  } },
  { id: 67, nombre: "BOMBONERÍA", referencia: "9/89", imagen: "9-89.webp", descripcion: `Gran cápsula de presentación para piezas únicas de alta confitería: el tamaño para trufas de lujo, mazapanes o piezas de chocolate rellenas de gran gramaje.`, atributos: {
    "unidades/caja": "3000",
    "volumen(cc)": "0.35",
    "exterior(mm)": "90",
    "interior(mm)": "",
    "base(mm)": "70",
    "altura(mm)": "20",
    "capacidad(ml)": "0"
  } },
  { id: 68, nombre: "BOMBONERÍA", referencia: "ORO2", imagen: "oro2.webp", descripcion: `La más pequeña del catálogo, con acabado que aporta brillo dorado: para mignardises, petit fours de chocolate o piezas de degustación en alta pastelería.`, atributos: {
    "unidades/caja": "4000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "31",
    "interior(mm)": "",
    "base(mm)": "26",
    "altura(mm)": "16",
    "capacidad(ml)": "0"
  } },
  { id: 69, nombre: "BOMBONERÍA", referencia: "1/87A", imagen: "", descripcion: `Versión individual de la cápsula clásica pequeña: misma medida pero formato de venta al detalle para confiterías que venden bombones sueltos o en cajas pequeñas.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.016",
    "exterior(mm)": "30",
    "interior(mm)": "",
    "base(mm)": "24",
    "altura(mm)": "19",
    "capacidad(ml)": "0"
  } },
  { id: 70, nombre: "BOMBONERÍA", referencia: "2/86A", imagen: "", descripcion: `La cápsula media en formato individual: para confiterías artesanales que trabajan bajo pedido o preparan cajas personalizadas de regalo en pequeños lotes.`, atributos: {
    "unidades/caja": "2000",
    "volumen(cc)": "0.016",
    "exterior(mm)": "38",
    "interior(mm)": "",
    "base(mm)": "28",
    "altura(mm)": "17",
    "capacidad(ml)": "0"
  } },
  { id: 71, nombre: "BOMBONERÍA", referencia: "3/87A", imagen: "", descripcion: `Cápsula de tamaño medio-grande en presentación individual: el referente para talleres de chocolate que trabajan bajo pedido o en pequeños lotes artesanales.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.016",
    "exterior(mm)": "46",
    "interior(mm)": "",
    "base(mm)": "33",
    "altura(mm)": "17",
    "capacidad(ml)": "0"
  } },
  { id: 72, nombre: "BOMBONERÍA", referencia: "C2/86", imagen: "c2-86.webp", descripcion: `Cápsula cuadrada pequeña para bombones de corte limpio: la forma geométrica facilita el embalaje en cajas de regalo con presentación alineada y elegante.`, atributos: {
    "unidades/caja": "5000",
    "volumen(cc)": "0",
    "exterior(mm)": "36x36",
    "interior(mm)": "",
    "base(mm)": "28x28",
    "altura(mm)": "17",
    "capacidad(ml)": "0"
  } },
  { id: 73, nombre: "BOMBONERÍA", referencia: "C3/89", imagen: "c3-89.webp", descripcion: `Cápsula rectangular pequeña para piezas alargadas: almendras garrapiñadas, regaliz de chocolate o nougat de corte que necesitan ese formato más estrecho.`, atributos: {
    "unidades/caja": "2600",
    "volumen(cc)": "0.035",
    "exterior(mm)": "50x30",
    "interior(mm)": "",
    "base(mm)": "45x25",
    "altura(mm)": "16",
    "capacidad(ml)": "0"
  } },
  { id: 74, nombre: "BOMBONERÍA", referencia: "C4/89", imagen: "c4-89.webp", descripcion: `Cuadrado de tamaño medio: para bombones de corte con relleno sólido o praliné que se producen en bloque y se separan en piezas individuales con acabado limpio.`, atributos: {
    "unidades/caja": "2000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "40x40",
    "interior(mm)": "",
    "base(mm)": "35x35",
    "altura(mm)": "16",
    "capacidad(ml)": "0"
  } },
  { id: 75, nombre: "BOMBONERÍA", referencia: "C5/95", imagen: "c5-95.webp", descripcion: `La cápsula rectangular más usada en pastelerías de autor: permite presentar con precisión piezas de chocolate con ingredientes visibles en la base, como nibs o sal.`, atributos: {
    "unidades/caja": "3000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "52x42",
    "interior(mm)": "",
    "base(mm)": "45x35",
    "altura(mm)": "15",
    "capacidad(ml)": "0"
  } },
  { id: 76, nombre: "BOMBONERÍA", referencia: "CORNE", imagen: "corne.webp", descripcion: `Formato cónico para cucuruchos y barquillos de chocolate: el soporte para helados de obrador, piezas de pastelería cónica o presentaciones de temporada.`, atributos: {
    "unidades/caja": "4000",
    "volumen(cc)": "0.016",
    "exterior(mm)": "BOCA 22",
    "interior(mm)": "",
    "base(mm)": "LARGO 60",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 77, nombre: "BOMBONERÍA", referencia: "C10/95", imagen: "c10-95.webp", descripcion: `Cápsula rectangular de tamaño generoso: para tabletas de chocolate artesanal de degustación, barras de turrón fino o piezas de obrador que se venden en formato regalo.`, atributos: {
    "unidades/caja": "1200",
    "volumen(cc)": "0.035",
    "exterior(mm)": "100x55",
    "interior(mm)": "",
    "base(mm)": "90x45",
    "altura(mm)": "20",
    "capacidad(ml)": "0"
  } },
  { id: 78, nombre: "BOMBONERÍA", referencia: "CA1/95", imagen: "ca1-95.webp", descripcion: `Formato alargado y estrecho para barras y regalices de chocolate: la longitud la hace apta para piezas de pastelería que no caben en los formatos cuadrados o redondos.`, atributos: {
    "unidades/caja": "3000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "67xlargo",
    "interior(mm)": "",
    "base(mm)": "60xlargo",
    "altura(mm)": "20",
    "capacidad(ml)": "0"
  } },
  { id: 79, nombre: "PASTELERÍA", referencia: "1025", imagen: "1025.webp", descripcion: `El molde de magdalena profesional: pequeño, de cocción rápida y uniforme, pensado para hornear varias decenas de piezas en una sola pasada de obrador.`, atributos: {
    "unidades/caja": "5000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "55",
    "interior(mm)": "50",
    "base(mm)": "30",
    "altura(mm)": "22",
    "capacidad(ml)": "25"
  } },
  { id: 80, nombre: "PASTELERÍA", referencia: "1030", imagen: "1030.webp", descripcion: `Tartaleta redonda de tamaño individual: para flanes de huevo, tartaletas de limón o bizcochitos que se sacan del molde y se venden directamente sin desmoldar.`, atributos: {
    "unidades/caja": "3000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "73",
    "interior(mm)": "64",
    "base(mm)": "33",
    "altura(mm)": "20",
    "capacidad(ml)": "30"
  } },
  { id: 81, nombre: "PASTELERÍA", referencia: "1052", imagen: "1052.webp", descripcion: `El molde de tartaleta grande: lo suficientemente amplio para quiches individuales, flanes de verduras o porciones de pastel de carne en restauración.`, atributos: {
    "unidades/caja": "3000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "82",
    "interior(mm)": "72",
    "base(mm)": "38",
    "altura(mm)": "23",
    "capacidad(ml)": "52"
  } },
  { id: 82, nombre: "PASTELERÍA", referencia: "1060", imagen: "1060.webp", descripcion: `Formato de magdalena grande o muffin de pastelería: el equilibrio entre borde y fondo para que la masa suba con domo uniforme sin desbordarse.`, atributos: {
    "unidades/caja": "4000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "73",
    "interior(mm)": "65",
    "base(mm)": "50",
    "altura(mm)": "25",
    "capacidad(ml)": "60"
  } },
  { id: 83, nombre: "PASTELERÍA", referencia: "1070", imagen: "1070.webp", descripcion: `Molde plano y ancho para galletas gruesas, panellets o tartaletas de base fina: el diámetro grande facilita la decoración posterior con frutas o crema.`, atributos: {
    "unidades/caja": "5000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "93",
    "interior(mm)": "82",
    "base(mm)": "72",
    "altura(mm)": "15",
    "capacidad(ml)": "70"
  } },
  { id: 84, nombre: "PASTELERÍA", referencia: "1080", imagen: "1080.webp", descripcion: `El clásico de la tarta de queso individual: base suficientemente amplia para que la cocción sea uniforme desde el centro, con borde que retiene bien el relleno.`, atributos: {
    "unidades/caja": "3300",
    "volumen(cc)": "0.046",
    "exterior(mm)": "100",
    "interior(mm)": "90",
    "base(mm)": "80",
    "altura(mm)": "20",
    "capacidad(ml)": "80"
  } },
  { id: 85, nombre: "PASTELERÍA", referencia: "1090", imagen: "1090.webp", descripcion: `El molde más plano de los grandes diámetros en pastelería: para financiers amplios, tartaletas de presentación o bases de postre que se comen directamente del molde.`, atributos: {
    "unidades/caja": "4000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "112",
    "interior(mm)": "100",
    "base(mm)": "86",
    "altura(mm)": "15",
    "capacidad(ml)": "90"
  } },
  { id: 86, nombre: "PASTELERÍA", referencia: "1101", imagen: "1101.webp", descripcion: `Molde alto de ración individual: para soufflés, coulants o bizcochos verticales que necesitan altura para crecer con forma definida en horno de convección.`, atributos: {
    "unidades/caja": "2000",
    "volumen(cc)": "0.12",
    "exterior(mm)": "80",
    "interior(mm)": "70",
    "base(mm)": "54",
    "altura(mm)": "35",
    "capacidad(ml)": "101"
  } },
  { id: 87, nombre: "PASTELERÍA", referencia: "1103", imagen: "1103.webp", descripcion: `El molde de flanera clásica: alto y estrecho, para flanes que se desmoldan perfectamente gracias a las paredes verticales del aluminio. Muy usado en restauración.`, atributos: {
    "unidades/caja": "4500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "73",
    "interior(mm)": "60",
    "base(mm)": "47",
    "altura(mm)": "49",
    "capacidad(ml)": "103"
  } },
  { id: 88, nombre: "PASTELERÍA", referencia: "1127", imagen: "1127.webp", descripcion: `Molde de flanera grande: la versión ampliada del clásico, para flanes con más gramaje o puddings de pan que se venden por porciones en pastelerías.`, atributos: {
    "unidades/caja": "4500",
    "volumen(cc)": "0.1",
    "exterior(mm)": "80",
    "interior(mm)": "70",
    "base(mm)": "53",
    "altura(mm)": "49",
    "capacidad(ml)": "127"
  } },
  { id: 89, nombre: "PASTELERÍA", referencia: "4037", imagen: "4037.webp", descripcion: `Molde cuadrado bajo para petit fours y mignardises: el tamaño del bocado de pastelería fina, donde la base cuadrada facilita la presentación en rejilla y la decoración.`, atributos: {
    "unidades/caja": "6000",
    "volumen(cc)": "0.1",
    "exterior(mm)": "74x74",
    "interior(mm)": "64x64",
    "base(mm)": "52x52",
    "altura(mm)": "10",
    "capacidad(ml)": "37"
  } },
  { id: 90, nombre: "PASTELERÍA", referencia: "5/86", imagen: "5-86.webp", descripcion: `Molde pequeño y bajo: el tamaño de una sola espiral de pasta choux, una tartaleta de una mordida o una pieza de petit four de pastelería de autor.`, atributos: {
    "unidades/caja": "4000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "55",
    "interior(mm)": "50",
    "base(mm)": "44",
    "altura(mm)": "15",
    "capacidad(ml)": "0"
  } },
  { id: 91, nombre: "PASTELERÍA", referencia: "T1127", imagen: "t1127.webp", descripcion: `Tapa de cartón o plástico para los moldes de flanera 1127: permite conservar y transportar la pieza desmoldada sin que se deforme ni pierda la humedad.`, atributos: {
    "unidades/caja": "4500",
    "volumen(cc)": "0.046",
    "exterior(mm)": "85",
    "interior(mm)": "",
    "base(mm)": "78",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 92, nombre: "PASTELERÍA", referencia: "4037A", imagen: "4037a.webp", descripcion: `La versión alternativa del molde cuadrado 4037: mismas proporciones en presentación individual, más adecuada para obradores de volumen medio.`, atributos: {
    "unidades/caja": "3500",
    "volumen(cc)": "0.046",
    "exterior(mm)": "74x74",
    "interior(mm)": "64x64",
    "base(mm)": "52x52",
    "altura(mm)": "10",
    "capacidad(ml)": "37"
  } },
  { id: 93, nombre: "PASTELERÍA", referencia: "T1103", imagen: "t1103.webp", descripcion: `Tapa para los moldes de flanera 1103: cierre circular que encaja a presión, para conservar el flan ya elaborado hasta el momento del servicio sin que se reseque.`, atributos: {
    "unidades/caja": "4500",
    "volumen(cc)": "0.046",
    "exterior(mm)": "80",
    "interior(mm)": "73",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 94, nombre: "PARED LISA", referencia: "1135-pl", imagen: "1135pl.webp", descripcion: `El molde de pared lisa para pastelería de autor: sin estrías, con superficie perfectamente plana para que el chocolate, el glaseado o el espejo queden sin marcas.`, atributos: {
    "unidades/caja": "2000",
    "volumen(cc)": "0.75",
    "exterior(mm)": "86",
    "interior(mm)": "75",
    "base(mm)": "62",
    "altura(mm)": "35",
    "capacidad(ml)": "135"
  } },
  { id: 95, nombre: "PARED LISA", referencia: "1140-pl", imagen: "1140pl.webp", descripcion: `Molde de pared lisa más bajo y ancho: para tartas tipo Sacher o mousse con cobertura de espejo donde la geometría limpia es parte de la presentación final.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.016",
    "exterior(mm)": "96",
    "interior(mm)": "86",
    "base(mm)": "80",
    "altura(mm)": "30",
    "capacidad(ml)": "140"
  } },
  { id: 96, nombre: "PARED LISA", referencia: "4117-pl", imagen: "4117pl.webp", descripcion: `El cuadrado de pared lisa: para brownies perfectos, tartaletas cuadradas o bizcochos compactos donde la forma geométrica tiene protagonismo estético.`, atributos: {
    "unidades/caja": "2000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "88x88",
    "interior(mm)": "78x78",
    "base(mm)": "70x70",
    "altura(mm)": "34",
    "capacidad(ml)": "117"
  } },
  { id: 97, nombre: "PARED LISA", referencia: "4330-pl", imagen: "4330pl.webp", descripcion: `Formato rectangular de pared lisa para pasteles de corte: bizcocho de té, tarta de zanahoria o cake de frutas que se presenta en barra y se vende en rodajas.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "158x100",
    "interior(mm)": "148x90",
    "base(mm)": "140x82",
    "altura(mm)": "28",
    "capacidad(ml)": "330"
  } },
  { id: 98, nombre: "PARED LISA", referencia: "1040-pla", imagen: "1040pla.webp", descripcion: `La tapa de pared lisa: encaja en los moldes de la familia pl para transportar o conservar la pieza elaborada sin que el envase deje marcas en la superficie.`, atributos: {
    "unidades/caja": "2500",
    "volumen(cc)": "0.46",
    "exterior(mm)": "89",
    "interior(mm)": "70",
    "base(mm)": "60",
    "altura(mm)": "10",
    "capacidad(ml)": "0"
  } },
  { id: 99, nombre: "PARED LISA", referencia: "T4330-pla", imagen: "4330pla.webp", descripcion: `Tapa para el formato rectangular 4330-pl: más larga que ancha, para sellar cakes de barra o pasteles longitudinales de obrador sin presionar el glaseado.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.046",
    "exterior(mm)": "165x108",
    "interior(mm)": "160x103",
    "base(mm)": "150x92",
    "altura(mm)": "12",
    "capacidad(ml)": "0"
  } },
  { id: 101, nombre: "ALUMINIO INDUSTRIAL", referencia: "Alum. Industrial", imagen: "aluminio industrial.webp", descripcion: `Bobina de aluminio para cocina industrial y envasado profesional: cubre bandejas de horno en grandes volúmenes, protege del frío en cámaras y resiste el calor del servicio.`, atributos: {
    "unidades/caja": "6",
    "volumen(cc)": "0.0262",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 102, nombre: "ALUMINIO INDUSTRIAL", referencia: "Aluminio Industrial 40 cm", imagen: "aluminio industrial.webp", descripcion: `La versión de mayor anchura para líneas de producción: cubre superficies más amplias con menos metros de papel, reduciendo tiempo en el emplatado o preparación.`, atributos: {
    "unidades/caja": "6",
    "volumen(cc)": "0.04",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 103, nombre: "BOBINA FILM INDUSTRIAL", referencia: "Film Industrial 40", imagen: "film industrial.webp", descripcion: `Film estirable de anchura profesional para envolver y proteger bandejas, platos preparados o porciones que van a cámara o se transportan sin envase rígido.`, atributos: {
    "unidades/caja": "4",
    "volumen(cc)": "0.012",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 104, nombre: "ENVASE OPS OVALADO", referencia: "End-500", imagen: "end 250.webp", descripcion: `Envase transparente para que el producto sea la estrella: ensaladas de marisco, macedonias o platos fríos de presentación donde el cliente elige con la vista.`, atributos: {
    "unidades/caja": "300",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "500"
  } },
  { id: 105, nombre: "ENVASE OPS OVALADO", referencia: "End 750", imagen: "end375.webp", descripcion: `El ovalado transparente de ración media: ensaladas compuestas, platos de colmado o sushi de take-away donde la visibilidad del producto es clave en punto de venta.`, atributos: {
    "unidades/caja": "300",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "750"
  } },
  { id: 106, nombre: "ENVASE OPS OVALADO", referencia: "END 600", imagen: "envase ops ovalado.webp", descripcion: `El pequeño OPS ovalado para entrantes individuales o aperitivos: tartares, ceviches o ensaladillas que se presentan en frío con todo el atractivo visual a la vista.`, atributos: {} },
  { id: 108, nombre: "ENVASE OPS OVALADO", referencia: "END 1000", imagen: "end 1000.webp", descripcion: `Un litro de visibilidad total: para ensaladas grandes, mix de frutas o preparaciones frías que el cliente puede ver y elegir directamente en el mostrador.`, atributos: {
    "unidades/caja": "200",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "1000"
  } },
  { id: 109, nombre: "ENVASE OPS OVALADO", referencia: "END 1500", imagen: "end 1500.webp", descripcion: `El gran formato transparente para comidas para compartir: ensaladas de pasta, taramas o platos de colmado que se presentan en barra fría y se venden por peso.`, atributos: {
    "unidades/caja": "0",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "1500"
  } },
  { id: 110, nombre: "ENVASE OPS OVALADO", referencia: "END 2000", imagen: "end 2500.webp", descripcion: `Capacidad máxima en OPS ovalado: para caterings que sirven ensaladas en grandes cantidades o tiendas de comida preparada que venden por kilos en mostrador.`, atributos: {
    "unidades/caja": "200",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "2000"
  } },
  { id: 111, nombre: "ENVASE OPS OVALADO", referencia: "ENS 600 Ensaladera", imagen: "ensaladera ops.webp", descripcion: `La ensaladera individual transparente: con suficiente volumen para una ración completa de ensalada con proteína, y la forma alta que facilita el mezclado con el aliño.`, atributos: {
    "unidades/caja": "300",
    "volumen(cc)": "0.15",
    "exterior(mm)": "170",
    "interior(mm)": "",
    "base(mm)": "90",
    "altura(mm)": "60",
    "capacidad(ml)": "600"
  } },
  { id: 112, nombre: "ENVASE OPS CUADRADO", referencia: "END1 250", imagen: "end1 250.webp", descripcion: `El cuadrado pequeño de OPS para porciones de degustación: wrap, sushi de una pieza o aperitivos de colmado que se venden en mostrador frío o en máquina expendedora.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "250"
  } },
  { id: 113, nombre: "ENVASE OPS CUADRADO", referencia: "END1 375", imagen: "end1 375.webp", descripcion: `Cuadrado de tamaño media ración: para sushi de 3-4 piezas, porciones de tarta fría o preparaciones de colmado donde la forma cuadrada facilita la exposición en nevera.`, atributos: {
    "unidades/caja": "400",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "375"
  } },
  { id: 114, nombre: "ENVASE OPS CUADRADO", referencia: "END1 500", imagen: "end1 500.webp", descripcion: `El cuadrado estándar de OPS para ensaladas y platos fríos de ración completa: muy usado en panaderías con corner de comida preparada y tiendas de conveniencia.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "500"
  } },
  { id: 115, nombre: "ENVASE OPS CUADRADO", referencia: "END1 670", imagen: "end1 670.webp", descripcion: `Cuadrado de ración generosa para platos únicos en frío: pasta fría, quinoa con verduras o arroz thai que el cliente compra para llevarse y comer en el trabajo.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "670"
  } },
  { id: 116, nombre: "ENVASE OPS CUADRADO", referencia: "END1 750", imagen: "end1 750.webp", descripcion: `El cuadrado para los platos de colmado más completos: espacio para proteína, base y guarnición en un solo envase que el cliente ve antes de decidir.`, atributos: {
    "unidades/caja": "300",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "750"
  } },
  { id: 117, nombre: "ENVASE OPS CUADRADO", referencia: "END1 1000", imagen: "end1 1000.webp", descripcion: `Un litro en cuadrado transparente: la opción de mayor tamaño para ensaladas completas, platos de pasta o preparaciones que se venden por peso en mostrador.`, atributos: {
    "unidades/caja": "300",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "1000"
  } },
  { id: 118, nombre: "ENVASE OPS CUADRADO", referencia: "END1 2000", imagen: "end1 2000.webp", descripcion: `El gran cuadrado de OPS para compartir: para catering de oficina o grupos donde la transparencia del envase permite ver el contenido antes de servir.`, atributos: {
    "unidades/caja": "200",
    "volumen(cc)": "0.15",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "2000"
  } },
  { id: 119, nombre: "ENVASE OPS CUADRADO", referencia: "END1 1500", imagen: "end1 1500.webp", descripcion: `Cuadrado de gran capacidad para ensaladas familiares o platos colectivos: la versión XL de los cuadrados OPS, para venta a granel o por peso en tiendas especializadas.`, atributos: {
    "unidades/caja": "0",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "1500"
  } },
  { id: 120, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "1103T", imagen: "t1103.webp", descripcion: `Tapa de aluminio para la flanera 1103: cierra el molde para transporte o conservación en frío sin deformar ni humedecer la pieza elaborada.`, atributos: {
    "unidades/caja": "4500",
    "volumen(cc)": "0.01",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 123, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T1140", imagen: "t1140.webp", descripcion: `La tapa del redondo 1140: encaje ajustado para mantener la temperatura y evitar derrames durante el transporte o la conservación en cámara frigorífica.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 124, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T1250", imagen: "t1250.webp", descripcion: `Tapa para el envase redondo 1250: cierre hermético que convierte la flanera en un envase completo apto para reparto o almacenamiento en frío.`, atributos: {
    "unidades/caja": "1500",
    "volumen(cc)": "0.12",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 125, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T1280", imagen: "t1280.webp", descripcion: `La tapa del redondo 1280: se ajusta al reborde del envase sin presionar el contenido, manteniendo la integridad de bizcochos o flanes desmoldados.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.012",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 126, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T2800", imagen: "t2800.webp", descripcion: `Tapa de aluminio para el envase redondo 2800: cierre para el servicio de delivery que previene derrames y mantiene la temperatura durante el reparto.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 127, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T2935", imagen: "t2935.webp", descripcion: `La tapa del redondo 2935: se combina con su envase para convertir una ración de guiso en un pack de reparto completo, hermético y estable.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 128, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T5250", imagen: "t5250.webp", descripcion: `Tapa del rectangular 5250: el cierre más pequeño de la familia rectangular, para las raciones más compactas de take-away o venta directa en mostrador.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 129, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T5360", imagen: "t5360.webp", descripcion: `La tapa del rectangular 5360: cierre que encaja sin esfuerzo y no se abre durante el transporte, con la presión justa para evitar fugas de líquidos.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 130, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-5475", imagen: "t5475.webp", descripcion: `Tapa para el rectangular 5475: el compañero del envase más vendido del catálogo de menús, con cierre que resiste el traslado sin distorsionar el formato.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 131, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-5580", imagen: "t5580.webp", descripcion: `La tapa del rectangular 5580: se ajusta al reborde del envase de medio litro y garantiza el sellado para reparto de sopas y guisos con caldo.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 132, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-5590", imagen: "t5590.webp", descripcion: `Tapa para el rectangular 5590: el cierre que convierte una bandeja de cocina en un envase de take-away listo para etiquetar y distribuir.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 133, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-5860", imagen: "t5860.webp", descripcion: `La tapa del rectangular 5860: cierre de un litro para catering de empresa, con encaje estable que aguanta la manipulación en reparto a múltiples puntos.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 138, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-21900", imagen: "t21900.webp", descripcion: `Tapa del gran redondo 21900: el cierre para el envase de cocido o puchero que va de la cocina al domicilio sin perder ni una gota de caldo.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 139, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-51180", imagen: "t5180.webp", descripcion: `La tapa del rectangular 51180: cierre para formatos de restaurante completos, con espacio para plato y guarnición y presión suficiente para no abrirse.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 140, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-51500", imagen: "t51500.webp", descripcion: `Tapa para el rectangular 51500: el cierre de las raciones más grandes del catálogo de take-away, para cocinas que hacen grandes volúmenes de menú.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 141, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-52200", imagen: "t52200.webp", descripcion: `La tapa del rectangular 52200: cierre para los grandes formatos de venta al público de platos preparados, con encaje limpio que no deja marca en el contenido.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 142, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-52400", imagen: "t52400.webp", descripcion: `Tapa para el rectangular 52400: el cierre de mayor superficie, para grandes elaboraciones que se venden enteras o en porciones en tiendas de comida preparada.`, atributos: {
    "unidades/caja": "400",
    "volumen(cc)": "0.035",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 143, nombre: "TAPAS ENVASES REDONDOS Y RECTANGULARES", referencia: "T-1135", imagen: "t1135.webp", descripcion: `La tapa del pared lisa 1135: cierre que no deja marcas en el glaseado ni en la superficie del molde, para transportar piezas de pastelería sin deteriorarlas.`, atributos: {
    "unidades/caja": "1000",
    "volumen(cc)": "0.01",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 145, nombre: "BOBINA DE PAPEL VEGETAL", referencia: "Rollo Vegetal 15", imagen: "", descripcion: `Papel vegetal en rollo de 15 metros: el antiadherente de referencia para hornear masas, bizcochos y galletas sin que peguen ni absorban grasa en exceso.`, atributos: {
    "unidades/caja": "20",
    "volumen(cc)": "0.019",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 146, nombre: "BOBINA PAPEL VEGETAL", referencia: "Rollo Vegetal 8", imagen: "", descripcion: `El formato más corto de papel vegetal en rollo: para pastelerías y obradores que consumen menos volumen o quieren mantener varios rollos en uso simultáneo.`, atributos: {
    "unidades/caja": "20",
    "volumen(cc)": "0.019",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 147, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "11103-P", imagen: "", descripcion: `Molde de papel para tarta grande: entra al horno sin necesidad de engrasado, y la pieza se puede vender directamente en su molde sin necesidad de desmoldar.`, atributos: {
    "unidades/caja": "500",
    "volumen(cc)": "0.012",
    "exterior(mm)": "330",
    "interior(mm)": "314",
    "base(mm)": "307",
    "altura(mm)": "15",
    "capacidad(ml)": "1103"
  } },
  { id: 148, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "Plumcake", imagen: "", descripcion: `El clásico molde de plumcake en papel: resistente al horno, con paredes que sostienen la masa durante el horneado y permiten la venta del bizcocho en su propio molde.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.12",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "750"
  } },
  { id: 149, nombre: "BOBINA FILM DOMÉSTICO", referencia: "Rollo PF", imagen: "", descripcion: `Film doméstico para cocina y nevera: transparente, de alta adherencia, para cubrir platos, conservar alimentos cortados o envolver raciones antes del frío.`, atributos: {
    "unidades/caja": "40",
    "volumen(cc)": "0.034",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 150, nombre: "BOBINA FILM DOMÉSTICO", referencia: "Rollo Film", imagen: "", descripcion: `La versión larga del film doméstico: para hogares o pequeñas cocinas que consumen mucho film y prefieren no tener que reponer con frecuencia.`, atributos: {} },
  { id: 152, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "mini", imagen: "", descripcion: `El molde de papel en miniatura: para mignardises de obrador, mini magdalenas de degustación o petit fours que se hornean y se sirven directamente en el papel.`, atributos: {
    "unidades/caja": "0",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 153, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "1375-PH", imagen: "", descripcion: `Molde de papel redondo para bizcocho de tarta: el formato estándar de pastelerías que hornean bases para tarta y las venden tal cual, sin necesidad de molde separado.`, atributos: {
    "unidades/caja": "1400",
    "volumen(cc)": "0.11",
    "exterior(mm)": "205",
    "interior(mm)": "184",
    "base(mm)": "145",
    "altura(mm)": "23",
    "capacidad(ml)": "375"
  } },
  { id: 154, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "cuadrado", imagen: "", descripcion: `Molde de papel cuadrado para brownies y bizcochos de mantequilla: se hornea directamente, se corta en porciones dentro del propio molde y se sirve sin trasvasar.`, atributos: {
    "unidades/caja": "0",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 155, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "mini plumcake", imagen: "", descripcion: `El mini plumcake en papel: formato individual para bizcochos de desayuno o merienda que se hornean en el molde y se venden o sirven directamente empaquetados.`, atributos: {
    "unidades/caja": "0",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 156, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "Tarta", imagen: "", descripcion: `Molde de papel para tarta entera: la opción de presentación en obrador que permite vender el pastel ya en su molde, listo para regalar o llevar sin manipulación extra.`, atributos: {
    "unidades/caja": "0",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 157, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "11150-PH", imagen: "", descripcion: `Molde de papel de gran diámetro para tartas festivas: para pasteles de cumpleaños, tartas de queso grandes o bases de repostería de celebración.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.11",
    "exterior(mm)": "275",
    "interior(mm)": "263",
    "base(mm)": "250",
    "altura(mm)": "25",
    "capacidad(ml)": "1150"
  } },
  { id: 158, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "plum bandeja", imagen: "", descripcion: `La bandeja de papel en formato plumcake: para barras y pasteles alargados que se cortan en rebanadas en el punto de venta o se entregan enteros como regalo.`, atributos: {
    "unidades/caja": "0",
    "volumen(cc)": "0",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 159, nombre: "BOBINA ALUMINIO DOMÉSTICO", referencia: "8 metros", imagen: "aluminio domestico.webp", descripcion: `El rollo de aluminio para el día a día: para cubrir platos, envolver bocadillos, conservar restos en nevera o cocinar al papillote en el horno de casa.`, atributos: {
    "unidades/caja": "40",
    "volumen(cc)": "0.04",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 160, nombre: "BOBINA ALUMINIO DOMÉSTICO", referencia: "16 metros", imagen: "aluminio domestico.webp", descripcion: `El doble de recorrido para hogares que usan el papel de aluminio con frecuencia: cocción al horno, congelación o transporte de fiambreras para el trabajo.`, atributos: {
    "unidades/caja": "40",
    "volumen(cc)": "0.04",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 161, nombre: "BOBINA ALUMINIO DOMÉSTICO", referencia: "50 metros", imagen: "aluminio domestico.webp", descripcion: `El gran formato doméstico para uso intensivo: familias numerosas o colectivos donde el aluminio se usa a diario en múltiples preparaciones sin querer reponer cada semana.`, atributos: {
    "unidades/caja": "40",
    "volumen(cc)": "0.04",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 162, nombre: "BOBINA ALUMINIO DOMÉSTICO", referencia: "30 metros", imagen: "aluminio domestico.webp", descripcion: `El equilibrio entre tamaño y precio para el hogar: suficiente para semanas de uso sin que el rollo ocupe demasiado espacio en el cajón de la cocina.`, atributos: {
    "unidades/caja": "40",
    "volumen(cc)": "0.04",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 163, nombre: "BOBINA FILM INDUSTRIAL", referencia: "Film industrial 30", imagen: "film industrial.webp", descripcion: `Film industrial de menor anchura para envolver piezas y bandejas de pequeño formato: misma resistencia al desgarro, adecuado para porciones individuales.`, atributos: {
    "unidades/caja": "4",
    "volumen(cc)": "0.012",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "0"
  } },
  { id: 167, nombre: "ENVASE POLIPROPILENO PP", referencia: "END PP 500", imagen: "", descripcion: `Envase de PP rígido para platos de take-away que se recalientan en microondas: el cliente abre la tapa, calienta directamente y come sin lavar nada extra.`, atributos: {
    "unidades/caja": "600",
    "volumen(cc)": "0.085",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "500"
  } },
  { id: 168, nombre: "ENVASE POLIPROPILENO PP", referencia: "END PP 750", imagen: "", descripcion: `El PP de ración estándar: lo suficientemente amplio para un plato con su guarnición, apto para microondas y fácil de apilar en nevera o mochila de delivery.`, atributos: {
    "unidades/caja": "400",
    "volumen(cc)": "0.085",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "750"
  } },
  { id: 169, nombre: "ENVASE POLIPROPILENO PP", referencia: "END PP 1000", imagen: "", descripcion: `Un litro en PP rígido: para platos únicos de catering corporativo que el trabajador recibe y calienta al momento sin necesidad de vajilla ni utensilios adicionales.`, atributos: {
    "unidades/caja": "400",
    "volumen(cc)": "0.085",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "1000"
  } },
  { id: 170, nombre: "ENVASE POLIPROPILENO PP", referencia: "END PP 1500", imagen: "", descripcion: `El PP más grande del catálogo, para porciones generosas o combinados: el envase de quien quiere llevarse el plato principal y la guarnición en un solo contenedor.`, atributos: {
    "unidades/caja": "300",
    "volumen(cc)": "0.085",
    "exterior(mm)": "",
    "interior(mm)": "",
    "base(mm)": "",
    "altura(mm)": "0",
    "capacidad(ml)": "1500"
  } },
  { id: 172, nombre: "ENVASE DE PAPEL PARA HORNEAR", referencia: "11103-PH", imagen: "", descripcion: `Molde de papel de gran diámetro para tartas de obrador: encaja en los hornos de convección estándar y aguanta el peso de masas densas sin perder la forma.`, atributos: {
    "unidades/caja": "400",
    "volumen(cc)": "0.11",
    "exterior(mm)": "330",
    "interior(mm)": "314",
    "base(mm)": "307",
    "altura(mm)": "15",
    "capacidad(ml)": "0"
  } },
  { id: 174, nombre: "ENVASE 4590 PH", referencia: "4590-ph", imagen: "", descripcion: `Molde de papel rectangular mediano: para pasteles de verduras, quiches o cocas que se hornean, se enfrían en el propio molde y se venden listos para cortar.`, atributos: {
    "unidades/caja": "1",
    "volumen(cc)": "0",
    "exterior(mm)": "198 x 140",
    "interior(mm)": "180 x 120",
    "base(mm)": "168 x 110",
    "altura(mm)": "33",
    "capacidad(ml)": "590"
  } },
]