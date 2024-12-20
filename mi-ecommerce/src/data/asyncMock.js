const base_de_datos =[
    {   
        id:1,
        name:"Anais Anais EDT 100ml",
        price:100,
        category:"Perfumes",
        img: '/perfumes/anais-anais-edt-100ml.png',
        description:'Anaïs Anaïs es una composición en la que maravilla, frescura y ternura se armonizan juntas. Es una escritura olfativa revolucionaria convertida en un gran clásico de la perfumería con notas verdes y potentes que se basan en el jacinto, una celebración que hace gala al romanticismo y al primer amor, el sentimiento más bello y puro que existe.',
    },
     {   
        id:2,
        name:"ESPEJO DOBLE FACETA",
        price:50,
        category:"Accesorios",
        img: '/accesorios/espejo.jpg',
        description:'Espejp doble faceta ideal para la cartera, retocar tu maquillaje estes donde estes',
    }, {   
        id:3,
        name:"CUARTETO DE SOMBRAS",
        price:65,
        category:"Maquillaje",
        img: '/perfumes/anais-anais-edt-100ml.png',
        description:'Paletas de sombras de ojos con el relieve del tejido, introducidas en una bolsita de tweed a juego con cada una de las armonías de color.',
    }, 
  
    {   
        id:4,
        name:"SACA PUNTAS",
        price:10,
        category:"Accesorios",
        img: '/accesorios/saca-punta.jpg',
        description:'Sacapuntas de maquillaje, delineador de ojos, sacapuntas de labios, sacapuntas cosméticos, sacapuntas dobles',
    },
    
    {   
        id:5,
        name:"Necessaire",
        price:45,
        category:"Accesorios",
        img: '/accesorios/necessaire.jpg',
        description:'Necessaire de viaje, bolsa de cosméticos de gran capacidad para mujeres, bolsa portátil impermeable, bolsa de aseo plana abierta, organizador de maquillaje con divisor y asa',
    },
    
    {   
        id:6,
        name:"POLVO MINERAL B10",
        price:95,
        category:"Maquillaje",
        img: '/maquillaje/polvo-b10.avif',
        description:'Intuitivos y versátiles, estos polvos pueden aplicarse libremente, incluso sin espejo, para una luminosidad inconfundiblemente natural bajo cualquier luz.Su textura ligera se difumina sin dejar manchas, para un acabado satinado que se asemeja lo más posible al aspecto de la piel. Un efecto natural y radiante durante todo el año.',
    }, 
    
    {   
        id:7,
        name:"BROCHA KABUKI GRANDE",
        price:65,
        category:"Accesorios",
        img: '/accesorios/brocha-kabuki-grande.webp',
        description:'En versión extragrande está especialmente diseñada para los polvos XXL. Una creación exclusiva con forma redondeada y un tacto aterciopelado para una aplicación suave y generosa en el rostro y el cuerpo, y un resultado de maquillaje ultranatural.Perfecta para realizar retoques durante el día.',
    }, 
    
    {   
        id:8,
        name:"EYELINER BROCHA 24",
        price:40,
        category:"Accesorios",
        img: '/accesorios/eyeliner-brocha-24',
        description:'Esta brocha para ojos ofrece un resultado de maquillaje sublimado de forma sencilla. En un solo gesto, permite aplicar los delineadores compactos y difuminar el lápiz eyeliner o khôl a lo largo de la línea de las pestañas.',
    }, 
    
    {   
        id:9,
        name:"MASCARA DIMENSIONS",
        price:49,
        category:"Maquillaje",
        img: '/maquillaje/mascara-dimensions.webp',
        description:'Una máscara que va a lo esencial. Longitud, curva, definición, volumen y tratamiento: ofrece justo lo necesario para abrir la mirada con armonía y revelar todas sus dimensiones.Su cepillo cónico intuitivo y su textura cremosa facilitan el maquillaje. Una fórmula de larga duración que no deja manchas.',
    },
    
    {   
        id:10,
        name:"POLVO DIAMOND DUST",
        price:85,
        category:"Maquillaje",
        img: '/maquillaje/polvo-iluminadr.webp',
        description:'Esta exclusiva creación de edición limitada ilumina los ojos, el rostro y el escote. Un resplandor instantáneo para un extraordinario look de maquillaje festivo.',
    }, 
    
    {   
        id:11,
        name:"GOOD GIRL EDP 80 ML",
        price:2,
        category:"Perfumes",
        img: '/perfumes/good-girl-edp-80ml.jpg',
        description:'Good Girl es una fragancia evocativa y sensual que nace de la hermosa contradicción y dualidad eterna de la mujer moderna. Revela tu lado bueno con el resplandor floral del jazmín, desafía tu lado malo con la sensualidad del haba tonka y cacao. Nunca ha sido tan bueno ser mala. Good Girl, una fragancia tan intensa como sensual para la mujer que celebra su lado bueno y libera su lado malo. El frasco está excepcionalmente único y moderno: un stiletto de color azul media noche con tacón dorado, expresa la naturaleza sensual, segura, femenina y poderosa de la mujer que lleva Good Girl.',
    }, 
    
    {   
        id:12,
        name:"BROCHA KABUKI PETIT",
        price:2,
        category:"lAccesorios",
        img: '/maquillaje/brocha-kabuki.webp',
        description:'Diseñado para aplicar todo tipo de polvos. Su forma generosa permite modular la cobertura como se desee. Para un resultado de maquillaje a medida, totalmente natural. Están compuestos por una selección de pelo sintético, tan suave como resistente, y protegidos por una funda negra, para resistir al paso del tiempo con elegancia.',
    }, 
    
    {   
        id:13,
        name:"l",
        price:2,
        category:"l",
        img: '/perfumes/anais-anais-edt-100ml.png',
        description:'k',
    }, {   
        id:1,
        name:"l",
        price:2,
        category:"l",
        img: '/perfumes/anais-anais-edt-100ml.png',
        description:'k',
    },

    {   
        id:1,
        name:"l",
        price:2,
        category:"l",
        img: '/perfumes/anais-anais-edt-100ml.png',
        description:'k',
    }, {   
        id:1,
        name:"l",
        price:2,
        category:"l",
        img: '/perfumes/anais-anais-edt-100ml.png',
        description:'k',
    },
]

export const getProducts = () => {

    return new Promise((res,rej) => {
        setTimeout(() => {
            res(base_de_datos);
            rej("error");
    }, 3000);
    }

    )
}