const users = [{"id":1,"first_name":"Kaitlin","last_name":"Rapps","email":"krapps0@smh.com.au","gender":"Female","ip_address":"66.25.222.59"},
{"id":2,"first_name":"Normie","last_name":"Clawley","email":"nclawley1@whitehouse.gov","gender":"Polygender","ip_address":"244.103.252.6"},
{"id":3,"first_name":"Heywood","last_name":"Jendrich","email":"hjendrich2@bloomberg.com","gender":"Male","ip_address":"58.21.87.177"},
{"id":4,"first_name":"Brigitte","last_name":"Hug","email":"bhug3@yandex.ru","gender":"Female","ip_address":"115.114.211.35"},
{"id":5,"first_name":"Marjy","last_name":"Rizzillo","email":"mrizzillo4@kickstarter.com","gender":"Female","ip_address":"161.229.162.101"},
{"id":6,"first_name":"Gar","last_name":"Simonato","email":"gsimonato5@gov.uk","gender":"Male","ip_address":"241.114.179.211"},
{"id":7,"first_name":"Crosby","last_name":"Macey","email":"cmacey6@slideshare.net","gender":"Male","ip_address":"186.183.251.5"},
{"id":8,"first_name":"Stanislaw","last_name":"Crann","email":"scrann7@indiegogo.com","gender":"Male","ip_address":"129.85.22.215"},
{"id":9,"first_name":"Tessie","last_name":"Di Claudio","email":"tdiclaudio8@washingtonpost.com","gender":"Female","ip_address":"123.25.7.180"},
{"id":10,"first_name":"Kippy","last_name":"Brace","email":"kbrace9@economist.com","gender":"Female","ip_address":"90.21.215.128"},
{"id":11,"first_name":"Graham","last_name":"Irnis","email":"girnisa@netlog.com","gender":"Male","ip_address":"175.154.86.130"},
{"id":12,"first_name":"Adda","last_name":"Tumility","email":"atumilityb@cpanel.net","gender":"Female","ip_address":"46.131.235.88"},
{"id":13,"first_name":"Friederike","last_name":"Portwaine","email":"fportwainec@ucla.edu","gender":"Female","ip_address":"39.238.124.78"},
{"id":14,"first_name":"Ella","last_name":"Youster","email":"eyousterd@shinystat.com","gender":"Female","ip_address":"179.137.39.130"},
{"id":15,"first_name":"Tucky","last_name":"Weymouth","email":"tweymouthe@t-online.de","gender":"Male","ip_address":"197.57.119.245"},
{"id":16,"first_name":"Amaleta","last_name":"Mulvey","email":"amulveyf@nih.gov","gender":"Female","ip_address":"132.136.117.61"},
{"id":17,"first_name":"Frants","last_name":"Hairesnape","email":"fhairesnapeg@ebay.co.uk","gender":"Male","ip_address":"180.147.210.146"},
{"id":18,"first_name":"Olivette","last_name":"Ropkins","email":"oropkinsh@businessweek.com","gender":"Female","ip_address":"158.148.183.133"},
{"id":19,"first_name":"Alon","last_name":"Dunican","email":"adunicani@furl.net","gender":"Male","ip_address":"129.69.242.5"},
{"id":20,"first_name":"Katerine","last_name":"Attridge","email":"kattridgej@diigo.com","gender":"Female","ip_address":"105.30.231.19"},
{"id":21,"first_name":"Dannie","last_name":"Conre","email":"dconrek@go.com","gender":"Female","ip_address":"73.191.14.159"},
{"id":22,"first_name":"Lombard","last_name":"Bru","email":"lbrul@theguardian.com","gender":"Male","ip_address":"248.20.141.130"},
{"id":23,"first_name":"Knox","last_name":"Plaistowe","email":"kplaistowem@adobe.com","gender":"Male","ip_address":"121.139.232.129"},
{"id":24,"first_name":"Rochell","last_name":"McCard","email":"rmccardn@tmall.com","gender":"Female","ip_address":"169.169.57.74"},
{"id":25,"first_name":"Tobi","last_name":"Noore","email":"tnooreo@dion.ne.jp","gender":"Female","ip_address":"39.191.71.97"},
{"id":26,"first_name":"Skippy","last_name":"Colclough","email":"scolcloughp@pen.io","gender":"Agender","ip_address":"35.75.118.127"},
{"id":27,"first_name":"Waiter","last_name":"McKinie","email":"wmckinieq@guardian.co.uk","gender":"Male","ip_address":"160.172.66.50"},
{"id":28,"first_name":"Glyn","last_name":"Arkil","email":"garkilr@cisco.com","gender":"Female","ip_address":"48.103.52.130"},
{"id":29,"first_name":"Nady","last_name":"Ruter","email":"nruters@posterous.com","gender":"Female","ip_address":"154.100.95.121"},
{"id":30,"first_name":"Mercy","last_name":"Jilliss","email":"mjillisst@t.co","gender":"Female","ip_address":"103.119.80.153"},
{"id":31,"first_name":"Wallas","last_name":"Hadgraft","email":"whadgraftu@mtv.com","gender":"Male","ip_address":"1.227.56.80"},
{"id":32,"first_name":"Hodge","last_name":"Claige","email":"hclaigev@google.co.uk","gender":"Male","ip_address":"85.116.225.77"},
{"id":33,"first_name":"Benita","last_name":"Greenshiels","email":"bgreenshielsw@godaddy.com","gender":"Female","ip_address":"91.115.113.91"},
{"id":34,"first_name":"Lief","last_name":"Bridgett","email":"lbridgettx@nbcnews.com","gender":"Male","ip_address":"36.86.78.247"},
{"id":35,"first_name":"Nanine","last_name":"Fishby","email":"nfishbyy@lulu.com","gender":"Female","ip_address":"62.175.33.171"},
{"id":36,"first_name":"Niccolo","last_name":"Coorington","email":"ncooringtonz@usnews.com","gender":"Male","ip_address":"237.12.71.78"},
{"id":37,"first_name":"Chip","last_name":"Pepper","email":"cpepper10@irs.gov","gender":"Male","ip_address":"99.147.234.67"},
{"id":38,"first_name":"Frazer","last_name":"Andrichuk","email":"fandrichuk11@icio.us","gender":"Male","ip_address":"80.192.175.246"},
{"id":39,"first_name":"Odessa","last_name":"Hinckley","email":"ohinckley12@theatlantic.com","gender":"Female","ip_address":"12.68.30.90"},
{"id":40,"first_name":"Vyky","last_name":"Francesc","email":"vfrancesc13@altervista.org","gender":"Female","ip_address":"111.229.55.198"},
{"id":41,"first_name":"Adan","last_name":"Bourgeois","email":"abourgeois14@jimdo.com","gender":"Female","ip_address":"80.77.30.6"},
{"id":42,"first_name":"Chrissie","last_name":"Dorrance","email":"cdorrance15@ed.gov","gender":"Male","ip_address":"128.173.42.228"},
{"id":43,"first_name":"Katherina","last_name":"Gymblett","email":"kgymblett16@buzzfeed.com","gender":"Female","ip_address":"253.70.174.36"},
{"id":44,"first_name":"Cece","last_name":"Rioch","email":"crioch17@addthis.com","gender":"Male","ip_address":"60.59.161.244"},
{"id":45,"first_name":"Tera","last_name":"Steinor","email":"tsteinor18@deliciousdays.com","gender":"Female","ip_address":"123.38.212.184"},
{"id":46,"first_name":"Eliza","last_name":"Kopta","email":"ekopta19@answers.com","gender":"Female","ip_address":"255.229.13.46"},
{"id":47,"first_name":"Gerhardine","last_name":"Bailes","email":"gbailes1a@meetup.com","gender":"Female","ip_address":"218.24.170.77"},
{"id":48,"first_name":"Moss","last_name":"Eubank","email":"meubank1b@webnode.com","gender":"Male","ip_address":"5.137.188.3"},
{"id":49,"first_name":"Thaine","last_name":"Rubberts","email":"trubberts1c@comcast.net","gender":"Male","ip_address":"125.181.50.229"},
{"id":50,"first_name":"Pauly","last_name":"Panchen","email":"ppanchen1d@paginegialle.it","gender":"Female","ip_address":"226.7.155.47"}]

let i;
const idUser = prompt ("ingrese id del usuario que desea ver sus datos")
for (i = 0; i < users.length; i++) {
    if (idUser == users[i].id){
        const nombre = users[i].first_name;
        const apellido = users[i].last_name;
        const correo = users[i].email;
        const genero = users[i].gender;
        const ip = users[i].ip_address;
        msj = `
            Nombre completo: ${nombre} ${apellido}
            Email: ${correo}
            Genero : ${genero}
            Dirección IP: ${ip}`
        console.log (msj);
        break;
    } 
    }
if (i == users.length) {
    console.log ("USUARIO NO ENCONTRADO");
}

// 1. Creamos el objeto vacío donde vamos a acumular los totales
const conteoGeneros = {};

for (let i = 0; i < users.length; i++) {
    // 2. Guardamos el género del usuario actual en una variable para que sea más claro
    const genero = users[i].gender;

    // 3. LA LÓGICA CLAVE:
    // ¿Ya existe este género en nuestro objeto?
    if (conteoGeneros[genero]) {
        // Si ya existe, le sumamos 1
        conteoGeneros[genero]++;
    } else {
        // Si NO existe (es la primera vez que lo vemos), lo creamos empezando en 1
        conteoGeneros[genero] = 1;
    }
}

// 4. Mostramos el resultado final
console.log("Resumen de géneros:");
console.table(conteoGeneros);
