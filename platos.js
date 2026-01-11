const sectionsDiv = document.getElementById("sections");
const contentDiv = document.getElementById("content");
const whatsappBtn = document.getElementById("whatsapp-float");
const ad = document.getElementById("ad-container");
  
/* ===== DATOS COMPLETOS CON DESCRIPCION ===== */
const data = {
  "Carnes": [
    { nombre: "Carne de Res Saltada en Salsa de Ostión o Tausí", precio: "S/48", img: "carne-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Frijolito Chino", precio: "S/48", img: "carne-frijol.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Ostión a la Plancha", precio: "S/53", img: "carne-ostion-plancha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Tausí a la Plancha", precio: "S/53", img: "carne-tausi.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Del Mar": [
    { nombre: "Pescado San Joy Lao", precio: "S/62", img: "pescado-sjl.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Filete de Pescado al Vapor", precio: "S/65", img: "filete-vapor.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado con Langostino en salsa de Ostión o Tausí", precio: "S/55", img: "pescado-langostino.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado al ajo", precio: "S/55", img: "pescado-ajo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado con tamarindo", precio: "S/55", img: "pescado-tamarindo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado en Salsa de Ostión", precio: "S/55", img: "pescado-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado con Tausí a la Plancha", precio: "S/59", img: "pescado-tausi.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado en Salsa de Ostión a la Plancha", precio: "S/59", img: "pescado-ostion-plancha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos Picantes", precio: "S/50", img: "langostinos-picante.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos al Ajo", precio: "S/50", img: "langostinos-ajo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos Arrebozados", precio: "S/50", img: "langostinos-arrebol.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos en Salsa de Ostión o Tausí", precio: "S/50", img: "langostinos-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos en Salsa de Tamarindo", precio: "S/50", img: "langostinos-tamarindo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos en Nido de Paloma", precio: "S/53", img: "langostinos-nido.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos a la Plancha", precio: "S/57", img: "langostinos-plancha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Rueda de Langostinos", precio: "S/135", img: "rueda-langostinos.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chicharrón de Pescado", precio: "S/50", img: "chicharron-pescado.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Arroz": [
    { nombre: "Chaufa Taypá Personal", precio: "S/37", img: "chaufa-taypa-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa Taypá Fuente", precio: "S/72", img: "chaufa-taypa-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa Especial Personal", precio: "S/25", img: "chaufa-especial-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa Especial Fuente", precio: "S/48", img: "chaufa-especial-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo Personal", precio: "S/22", img: "chaufa-de-pollo-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo Fuente", precio: "S/42", img: "chaufa-de-pollo-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Chancho Personal", precio: "S/22", img: "chaufa-de-chancho-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Chancho Fuente", precio: "S/42", img: "chaufa-de-chancho-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo y Chancho Personal", precio: "S/22", img: "chaufa-de-pollo-y-chancho-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo y Chancho Fuente", precio: "S/42", img: "chaufa-de-pollo-y-chancho-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Res y Cilantro Personal", precio: "S/26", img: "chaufa-de-res-y-cilantro-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Res y Cilantro Fuente", precio: "S/50", img: "chaufa-de-res-y-cilantro-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pato Personal", precio: "S/27", img: "chaufa-de-pato-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pato Fuente", precio: "S/52", img: "chaufa-de-pato-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Cuy Personal", precio: "S/30", img: "chaufa-de-cuy-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Cuy Fuente", precio: "S/60", img: "chaufa-de-cuy-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Langostinos Personal", precio: "S/30", img: "chaufa-de-langostinos-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Langostinos Fuente", precio: "S/57", img: "chaufa-de-langostinos-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Arroz Blanco Porción", precio: "S/7", img: "", descripcion: "Carne, arroz, fideos" }
  ],
  "Tallarines": [
    { nombre: "Tallarín Taypá", precio: "S/50", img: "", descripcion: "" },
    { nombre: "Tallarín Sam Sí", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Pollo", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Pollo Fuente", precio: "S/60", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Pollo en Trozos", precio: "S/40", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Pollo en Trozos Fuente", precio: "S/70", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Chancho", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Res", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Pato", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Tallarín Saltado de Langostinos", precio: "S/46", img: "", descripcion: "" },
    { nombre: "Tallarín Lumin de Pollo", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Tallarín Lumin de Chancho", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Tallarín Lumin de Pato", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Tallarín Lumin de Langostinos", precio: "S/46", img: "", descripcion: "" },
    { nombre: "Sahofán de Pollo", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Sahofán de Chancho", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Sahofán de Res", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Sahofán de Pato", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Sahofán de Langostinos", precio: "S/46", img: "", descripcion: "" },
    { nombre: "Maifán de Pollo", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Maifán de Chancho", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Maifán de Res", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Maifán de Pato", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Maifán de Langostinos", precio: "S/46", img: "", descripcion: "" },
    { nombre: "Fansí de Pollo", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Fansí de Chancho", precio: "S/37", img: "", descripcion: "" },
    { nombre: "Fansí de Res", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Fansí de Pato", precio: "S/42", img: "", descripcion: "" },
    { nombre: "Fansí de Langostinos", precio: "S/46", img: "", descripcion: "" }
  ],
  "Tortillas": [
    { nombre: "Tortilla de Pollo", precio: "S/34", img: "pollo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tortilla de Chancho", precio: "S/34", img: "chancho.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tortilla de Pato", precio: "S/38", img: "pato.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tortilla de Langostinos", precio: "S/40", img: "langostinos.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Vegetarianos": [
    { nombre: "Tallarín Saltado con Verduras", precio: "S/30", img: "", descripcion: "" },
    { nombre: "Sahofán o Maifán o Fansí con Verduras", precio: "S/35", img: "", descripcion: "" },
    { nombre: "Frijolito Saltado", precio: "S/26", img: "", descripcion: "" },
    { nombre: "Chaufa Vegetariano Personal", precio: "S/26", img: "", descripcion: "" },
    { nombre: "Chaufa Vegetariano Fuente", precio: "S/50", img: "", descripcion: "" },
    { nombre: "Tortilla con Verduras", precio: "S/30", img: "", descripcion: "" },
    { nombre: "Verduras Salteadas", precio: "S/30", img: "", descripcion: "" }
  ],
  "Bebidas": [
    { nombre: "Chicha 1 L", precio: "S/18", img: "", descripcion: "" },
    { nombre: "Maracuyá 1 L", precio: "S/18", img: "", descripcion: "" },
    { nombre: "Maracuyá Frozen 1 L", precio: "S/21", img: "", descripcion: "" },
    { nombre: "Limonada 1 L", precio: "S/18", img: "", descripcion: "" },
    { nombre: "Limonada Frozen 1 L", precio: "S/21", img: "", descripcion: "" },
    { nombre: "Inca Kola Personal (Regular o Sin Azúcar)", precio: "S/6", img: "", descripcion: "" },
    { nombre: "Coca Cola Personal (Regular o Sin Azúcar)", precio: "S/6", img: "", descripcion: "" },
    { nombre: "Inca Kola 1.5 L (Regular o Sin Azúcar)", precio: "S/12", img: "", descripcion: "" },
    { nombre: "Coca Cola 1.5 L (Regular o Sin Azúcar)", precio: "S/12", img: "", descripcion: "" },
    { nombre: "Agua de Mesa (Con o Sin Gas)", precio: "S/6", img: "", descripcion: "" }
  ],
  "Dim Sum": [
    { nombre: "Rueda de Bocaditos x 3", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Rueda de Bocaditos x 6", precio: "S/80", img: "", descripcion: "" },
    { nombre: "Siu Kao bañado en Salsa Picante x 6 ¡Nuevo!", precio: "S/19", img: "", descripcion: "" },
    { nombre: "Siu Mai x 6", precio: "S/17", img: "", descripcion: "" },
    { nombre: "Ja Kao x 6", precio: "S/17", img: "", descripcion: "" },
    { nombre: "Enrolladito Primavera x 6", precio: "S/17", img: "", descripcion: "" },
    { nombre: "Siu Kao Frito x 6", precio: "S/17", img: "", descripcion: "" },
    { nombre: "Siu Kao San Joy Lao x 6 (vapor)", precio: "S/17", img: "", descripcion: "" },
    { nombre: "Wantán x 6", precio: "S/10", img: "", descripcion: "" },
    { nombre: "Wantán x 12", precio: "S/18", img: "", descripcion: "" },
    { nombre: "Chicharrón de Pollo", precio: "S/33", img: "", descripcion: "" },
    { nombre: "Nabo Encurtilo", precio: "S/14", img: "", descripcion: "" }
  ],
  "Sopas": [
    { nombre: "Wantán Personal", precio: "S/19", img: "", descripcion: "" },
    { nombre: "Wantán Sopera Grande", precio: "S/55", img: "", descripcion: "" },
    { nombre: "Wantán Especial Personal", precio: "S/22", img: "", descripcion: "" },
    { nombre: "Wantán Especial Sopera Grande", precio: "S/60", img: "", descripcion: "" },
    { nombre: "Siu Kao San Joy Lao Personal", precio: "S/23", img: "", descripcion: "" },
    { nombre: "Siu Kao San Joy Lao Sopera", precio: "S/65", img: "", descripcion: "" },
    { nombre: "Pac Pow Personal", precio: "S/19", img: "", descripcion: "" },
    { nombre: "Fu Chi Fu Personal", precio: "S/19", img: "", descripcion: "" },
    { nombre: "Caldo de Pollo con Fansí Personal", precio: "S/17", img: "", descripcion: "" },
    { nombre: "Sopa de Pato Personal", precio: "S/26", img: "", descripcion: "" },
    { nombre: "Sopa Sichuan Personal", precio: "S/25", img: "", descripcion: "" }
  ],
  "Pollo": [
    { nombre: "Kay Ten", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Koy Ten", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Chi Jau Kay", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Ti Pa Kay", precio: "S/43", img: "", descripcion: "" },
    { nombre: "5 Sabores", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Pollo con Frijolito Chino", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Pollo a la Naranja", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Pollo al Limón", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Pollo en Trozos con Salsa de Ostión o Tausí", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Pollo con Verduras", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Pollo Trozado con Piña y Duraznos", precio: "S/43", img: "", descripcion: "" },
    { nombre: "1/2 Pollo Chei Pei Kay", precio: "S/49", img: "", descripcion: "" },
    { nombre: "1/2 Pollo Kin Tou", precio: "S/49", img: "", descripcion: "" },
    { nombre: "Pollo Enrollado con Espárragos", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Pollo Enrollado con Espárragos a la Plancha", precio: "S/51", img: "", descripcion: "" }
  ],
  "Pato Asado": [
    { nombre: "Pato con Frijolito Chino", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Pato en Salsa de Ostión o Tausí", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Pato con Piña y Durazno", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Pato con Tamarindo", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Pato Asado al Ajo", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Pato al Ajo a la Plancha", precio: "S/53", img: "", descripcion: "" },
    { nombre: "1/2 Pato Kin Tou", precio: "S/65", img: "", descripcion: "" },
    { nombre: "1/2 Pato Chei Pei Kay", precio: "S/65", img: "", descripcion: "" },
    { nombre: "1/4 Pato Asado al Estilo Cantones", precio: "S/40", img: "", descripcion: "" },
    { nombre: "1/2 Pato Asado al Estilo Cantones", precio: "S/55", img: "", descripcion: "" },
    { nombre: "1 Pato Asado al Estilo Cantones", precio: "S/99", img: "", descripcion: "" },
    { nombre: "1/2 Pato Asado Cantones con hueso acompañado de Nabo Encurtilo ¡Nuevo!", precio: "S/52", img: "", descripcion: "" },
    { nombre: "1 Pato Asado Cantones con hueso acompañado de Nabo Encurtilo ¡Nuevo!", precio: "S/95", img: "", descripcion: "" }
  ],
  "Chanchito": [
    { nombre: "Chicharrón Oriental en Salsa Ostión o Tausí ¡Nuevo!", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Chicharrón Chifero en Salsa Picante ¡Nuevo!", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Chicharrón Kin Tou ¡Nuevo!", precio: "S/45", img: "", descripcion: "" },
    { nombre: "Chancho con Tamarindo", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Chancho al Ajo", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Cha Siu con Nabo", precio: "S/46", img: "", descripcion: "" },
    { nombre: "Chancho con Verduras", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Chancho Crujiente", precio: "S/43", img: "", descripcion: "" },
    { nombre: "Crujiente con Niño de Paloma", precio: "S/48", img: "", descripcion: "" },
    { nombre: "Costillas Picantes", precio: "S/48", img: "", descripcion: "" },
    { nombre: "Costillas con Tín y Niño de Paloma", precio: "S/51", img: "", descripcion: "" },
    { nombre: "Costillas Picantes a la Plancha", precio: "S/53", img: "", descripcion: "" }
  ],
  "Banquetes": [
    { nombre: "Banquete 2 Personas", precio: "S/110", img: "2p.jpg", descripcion: `Incluye:

- 1 Chaufa Plato (Pollo o Chancho)
- 1/2 Docena de Wantán Frito

Opciones:

- Opción 1: Pollo Enrollado con Espárragos / Pollo Trozado con Piña y Duraznos
- Opción 2: Pollo Enrollado con Espárragos / Cru Kay
- Opción 3: Chancho al Ajo / Pollo Ti Pa Kay
- Opción 4: Tallarín Saltado (Pollo o Chancho) / Kam Lu Wantán
- Opción 5: Pollo Chi Jau Kay / Cru Yoc` },
    { nombre: "Banquete 4 Personas", precio: "S/180", img: "4p.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Banquete de la Abundancia (6p)", precio: "S/300", img: "6p.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Banquete de la Fortuna (8p)", precio: "S/390", img: "8p.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Banquete de la Serpiente (10p)", precio: "S/495", img: "10p.jpg", descripcion: "Carne, arroz, fideos" }
};

/* ===== CREAR BOTONES DE SECCIÓN ===== */
for (let section in data) {
  const btn = document.createElement("button");
  btn.textContent = section;
  btn.onclick = () => showList(section);
  sectionsDiv.appendChild(btn);
}

/* ===== INICIO ===== */
window.onload = () => {
  handleAd(true);
  whatsappBtn.style.display = "flex"; // SOLO EN HOME
};

/* ===== LISTA DE PLATOS ===== */
function showList(section) {
  sectionsDiv.classList.remove("hidden");
  contentDiv.innerHTML = "";
  handleAd(false);
  whatsappBtn.style.display = "none";

  data[section].forEach(item => {
    const div = document.createElement("div");
    div.className = "plato-btn";
    div.innerHTML = `
      <span>${item.nombre}</span>
      <span class="plato-precio">${item.precio}</span>
    `;
    div.onclick = () => showDetail(item, section);
    contentDiv.appendChild(div);
  });
}

/* ===== DETALLE ===== */
function showDetail(item, section) {
  sectionsDiv.classList.add("hidden");
  whatsappBtn.style.display = "none";

  contentDiv.innerHTML = `
    <div class="plato-detalle">
      <p>${item.descripcion || ""}</p>
      <button class="btn-back" onclick="showList('${section}')">
        ⬅ Regresar
      </button>
    </div>
  `;
}
