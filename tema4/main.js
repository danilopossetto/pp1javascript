const users = [
    { "id": 1, "first_name": "Nikolas", "last_name": "Cogdon", "bank": "PARIS 09", "country": "France", "city": "Paris", "salary": 1000, "expense": 800 },
    { "id": 2, "first_name": "Aloysius", "last_name": "Arnald", "bank": "NUEVA CARTEYA", "country": "Spain", "city": "Nueva Carteya", "salary": 1200, "expense": 900 },
    { "id": 3, "first_name": "Gauthier", "last_name": "Celier", "bank": "CINCINNATI", "country": "United States", "city": "Cincinnati", "salary": 2500, "expense": 1800 },
    { "id": 4, "first_name": "Moshe", "last_name": "Batt", "bank": "CLEVELAND", "country": "United States", "city": "Cleveland", "salary": 3000, "expense": 1700 },
    { "id": 5, "first_name": "Donna", "last_name": "Sanger", "bank": "Donegal", "country": "Ireland", "city": "Donegal", "salary": 2200, "expense": 1200 },
    { "id": 6, "first_name": "Noreen", "last_name": "Veart", "bank": "Stege", "country": "Denmark", "city": "Stege", "salary": 5000, "expense": 1500 },
    { "id": 7, "first_name": "Teodoro", "last_name": "Wallsam", "bank": "Soutelo", "country": "Portugal", "city": "Soutelo", "salary": 4500, "expense": 1000 },
    { "id": 8, "first_name": "Any", "last_name": "Ferber", "bank": "READING", "country": "United Kingdom", "city": "Reading", "salary": 6000, "expense": 2000 },
    { "id": 9, "first_name": "Maybelle", "last_name": "Brafferton", "bank": "RICHMOND", "country": "United States", "city": "Richmond", "salary": 3800, "expense": 500 },
    { "id": 10, "first_name": "Pauly", "last_name": "Youthed", "bank": "LUXEMBOURG", "country": "Luxembourg", "city": "Luxembourg City", "salary": 5500, "expense": 2500 },
    { "id": 11, "first_name": "Donni", "last_name": "McNaught", "bank": "LINCOLN", "country": "Greece", "city": "Angelochóri", "salary": 16, "expense": 68 },
    { "id": 12, "first_name": "Caroljean", "last_name": "Whoolehan", "bank": "PINE BLUFFS", "country": "France", "city": "Marseille", "salary": 45, "expense": 7 },
    { "id": 13, "first_name": "Boothe", "last_name": "Stonhard", "bank": "MIAMI", "country": "United States", "city": "Vancouver", "salary": 17, "expense": 90 },
    { "id": 14, "first_name": "Nedi", "last_name": "Pendock", "bank": "NAPERVILLE", "country": "Albania", "city": "Krutja e Poshtme", "salary": 44, "expense": 97 },
    { "id": 15, "first_name": "Shea", "last_name": "Kilmister", "bank": "LEWISTON", "country": "Oman", "city": "Al Qābil", "salary": 27, "expense": 27 },
    { "id": 16, "first_name": "Georgy", "last_name": "Seeviour", "bank": "BORGO SAN GIACOMO", "country": "Azerbaijan", "city": "Ujar", "salary": 99, "expense": 79 },
    { "id": 17, "first_name": "Candy", "last_name": "Laming", "bank": "RIVERSIDE", "country": "United States", "city": "New York City", "salary": 56, "expense": 9 },
    { "id": 18, "first_name": "Roderigo", "last_name": "de Mullett", "bank": "WAYNE", "country": "Philippines", "city": "Balungao", "salary": 36, "expense": 90 },
    { "id": 19, "first_name": "Gaston", "last_name": "Reece", "bank": "OMAHA", "country": "China", "city": "Sanzao", "salary": 73, "expense": 18 },
    { "id": 20, "first_name": "Lynne", "last_name": "Escale", "bank": "TAMPA", "country": "China", "city": "Gexi", "salary": 12, "expense": 99 },
    { "id": 21, "first_name": "Edna", "last_name": "Sansbury", "bank": "CLEVELAND", "country": "Philippines", "city": "Payabon", "salary": 3, "expense": 77 },
    { "id": 22, "first_name": "Pattie", "last_name": "Haldin", "bank": "ROMA", "country": "Czech Republic", "city": "Sadská", "salary": 97, "expense": 93 },
    { "id": 23, "first_name": "Reider", "last_name": "Marchiso", "bank": "MILANO", "country": "Latvia", "city": "Limbaži", "salary": 91, "expense": 54 },
    { "id": 24, "first_name": "Nelia", "last_name": "Flement", "bank": "STARKVILLE", "country": "Indonesia", "city": "Kauhan", "salary": 81, "expense": 57 },
    { "id": 25, "first_name": "Jordan", "last_name": "Ginnell", "bank": "Frankfurt am Main", "country": "Bulgaria", "city": "Asenovgrad", "salary": 72, "expense": 10 },
    { "id": 26, "first_name": "Cammi", "last_name": "Macartney", "bank": "BAXLEY", "country": "Russia", "city": "Shalakusha", "salary": 69, "expense": 99 },
    { "id": 27, "first_name": "Darbee", "last_name": "Canter", "bank": "STUART", "country": "China", "city": "Ronggui", "salary": 4, "expense": 95 },
    { "id": 28, "first_name": "Rudolfo", "last_name": "Skeath", "bank": "PARIS 09", "country": "China", "city": "Huangbu", "salary": 89, "expense": 14 },
    { "id": 29, "first_name": "Darnall", "last_name": "Lambell", "bank": "WILMOT", "country": "United States", "city": "Cumming", "salary": 78, "expense": 50 },
    { "id": 30, "first_name": "Hasheem", "last_name": "Brumby", "bank": "Stockholm", "country": "Canada", "city": "Banff", "salary": 90, "expense": 28 },
    { "id": 31, "first_name": "Kean", "last_name": "Brayshay", "bank": "PITTSBURGH", "country": "Bahamas", "city": "Andros Town", "salary": 14, "expense": 12 },
    { "id": 32, "first_name": "Gloria", "last_name": "Kurtis", "bank": "DRAGUIGNAN", "country": "China", "city": "Zhangduangu", "salary": 25, "expense": 45 },
    { "id": 33, "first_name": "Otha", "last_name": "Norwich", "bank": "WAGONER", "country": "Peru", "city": "Cabanaconde", "salary": 45, "expense": 8 },
    { "id": 34, "first_name": "Mirna", "last_name": "Hannen", "bank": "DETROIT", "country": "Russia", "city": "Uvarovka", "salary": 13, "expense": 49 },
    { "id": 35, "first_name": "Zollie", "last_name": "Palomba", "bank": "AMSTERDAM", "country": "Guinea-Bissau", "city": "Mansôa", "salary": 9, "expense": 57 },
    { "id": 36, "first_name": "Violetta", "last_name": "Ivery", "bank": "HENRICO", "country": "Brazil", "city": "Santaluz", "salary": 70, "expense": 83 },
    { "id": 37, "first_name": "Mickie", "last_name": "Ullyott", "bank": "GREENSBURG", "country": "Indonesia", "city": "Tanahwulan", "salary": 18, "expense": 62 },
    { "id": 38, "first_name": "Gay", "last_name": "Slowey", "bank": "SPOKANE", "country": "Spain", "city": "Murcia", "salary": 63, "expense": 33 },
    { "id": 39, "first_name": "Berty", "last_name": "Creebo", "bank": "MILANO", "country": "Portugal", "city": "Outeiro", "salary": 47, "expense": 69 },
    { "id": 40, "first_name": "Giraldo", "last_name": "Ungerechts", "bank": "PADOVA", "country": "Philippines", "city": "Tambak", "salary": 4, "expense": 38 },
    { "id": 41, "first_name": "Heath", "last_name": "Thickett", "bank": "BROWNSVILLE", "country": "Russia", "city": "Bokino", "salary": 97, "expense": 76 },
    { "id": 42, "first_name": "Karyl", "last_name": "Lansdale", "bank": "Praha 4", "country": "Philippines", "city": "Alannay", "salary": 19, "expense": 27 },
    { "id": 43, "first_name": "Delmer", "last_name": "Plenty", "bank": "Lisboa", "country": "China", "city": "Qiujia", "salary": 14, "expense": 71 },
    { "id": 44, "first_name": "Siusan", "last_name": "Rummings", "bank": "Stockholm", "country": "Indonesia", "city": "Sila", "salary": 81, "expense": 45 },
    { "id": 45, "first_name": "Perrine", "last_name": "Chapier", "bank": "Weilburg", "country": "Colombia", "city": "Barrancas", "salary": 72, "expense": 79 },
    { "id": 46, "first_name": "Brennan", "last_name": "Papierz", "bank": "POISSY Cedex", "country": "France", "city": "Creil", "salary": 30, "expense": 58 },
    { "id": 47, "first_name": "Rolando", "last_name": "Conyers", "bank": "SHALLOWATER", "country": "Turkmenistan", "city": "Ashgabat", "salary": 86, "expense": 2 },
    { "id": 48, "first_name": "Titos", "last_name": "Haggerwood", "bank": "WYOMING", "country": "Indonesia", "city": "Kalipucang", "salary": 3, "expense": 39 },
    { "id": 49, "first_name": "Ree", "last_name": "Brehat", "bank": "Stuttgart", "country": "Poland", "city": "Siekierczyn", "salary": 61, "expense": 75 },
    { "id": 50, "first_name": "Austine", "last_name": "Newlove", "bank": "Warszawa", "country": "United States", "city": "Washington", "salary": 39, "expense": 94 }
  ];
//1//
const balanceMensual = (users) => {
    const idIngresado = Number(prompt("ingrese ID del usuario que desea saber el balnace"))
    const buscandoUser = users.find(i => i.id === (idIngresado)); //buscamos el usuario//
    if (!buscandoUser) return "ID no encontrado";

    return {
        Nombre: `${buscandoUser.first_name} ${buscandoUser.last_name}`,
        Banco: buscandoUser.bank,
        Ahorro: buscandoUser.salary - buscandoUser.expense
    };
};

//console.log (balanceMensual(users));

//2
const clasificacionFinanciera = (users) => {
    return users.map(i => {     //Metodo que recorre cada elemento de array y ejecuta determinada funcion/accion y dev un nuev array, en este caso con el ahorro mensual
        const ahorroMensual = i.salary - i.expense;
        const clasificacionAhorro = ahorroMensual < 500
        ? "ahorro bajo"
        : ahorroMensual <= 1500
        ? "ahorro medio"
        : "ahorro alto";
        
        return{
            Nombre: `${i.first_name} ${ i.last_name}`,
            Ahorro: ahorroMensual,
            Clasificacion: clasificacionAhorro
        };
    });
};


//console.table (clasificacionFinanciera(users));


//3
const calcularAhorroPorBanco = (users) => {
    const bancos = {}

    users.forEach(i => {
        const nombreBanco = i.bank;
        const ahorroUser = i.salary - i.expense;

        if (!bancos[nombreBanco]){   //Si el bancono existe lo creamos
            bancos[nombreBanco] = {
                banco : nombreBanco,
                cantidadUsuarios: 0,
                ahorroTotal: 0
            };
        }
            bancos[nombreBanco].cantidadUsuarios++; // Sumamos los datos al banco correspondiente
            bancos[nombreBanco].ahorroTotal += ahorroUser;
        });
        return Object.values(bancos);  //cambiamos el objeto por un array de los resultados
};

//console.table(calcularAhorroPorBanco(users));

4//

const agruparPorPais = (lista) => {
    const resumenPaises = {};
  
    lista.forEach(user => {
      const pais = user.country;
      const ahorroIndividual = user.salary - user.expense;
  
      if (!resumenPaises[pais]) {
        resumenPaises[pais] = {
          country: pais,
          cantidadUsuarios: 0,
          ahorroTotal: 0
        };
      }
  
      resumenPaises[pais].cantidadUsuarios++;
      resumenPaises[pais].ahorroTotal += ahorroIndividual;
    });
  
    return Object.values(resumenPaises);
  };
  
  const resultado = agruparPorPais(users);
  console.table(resultado);