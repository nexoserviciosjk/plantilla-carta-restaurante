const sectionsDiv = document.getElementById("sections");
const contentDiv = document.getElementById("content");

/* ===== PUBLICIDAD & WHATSAPP ===== */
const publicidadDiv = document.getElementById("publicidad");
const publicidadImg = document.querySelector(".publicidad-img img");
const btnWhatsapp = document.getElementById("btnWhatsapp");

/* ===== CONFIGURACIÓN EDITABLE ===== */
const publicidadImgs = [
  "publicidad1.jpg",
  "publicidad2.jpg"
];

const publicidadTiempo = 4000; //duración de imagen

const whatsappNumero = "51999999999";
const whatsappMensaje = "Hola, vi su menú en San Joy Lao";

/* ===== DATOS DEL MENÚ ===== */
const data = {
  "Carnes": [
    { nombre: "Carne de Res Saltada en Salsa de Ostión o Tausí", precio: "S/48", img: "carne-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Frijolito Chino", precio: "S/48", img: "carne-frijol.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Ostión a la Plancha", precio: "S/53", img: "carne-ostion-plancha.jpg", descripcion: "Carne, arroz, fideos" }
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
    { nombre: "Banquete de la Abundancia (6p)", precio: "S/300", img: "6p.jpg", descripcion: "Carne, arroz, fideos" }
  ],
};
/* ===== LISTA DE PLATOS ===== */
function showList(section) {
  sectionsDiv.classList.remove("hidden");
  contentDiv.innerHTML = "";
  ocultarInicio();

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

/* ===== DETALLE DEL PLATO ===== */
function showDetail(item, section) {
  sectionsDiv.classList.add("hidden");
  publicidadDiv.style.display = "none";
  btnWhatsapp.style.display = "flex";

  contentDiv.innerHTML = `<div class="plato-detalle"></div>`;
  const detalleDiv = contentDiv.querySelector(".plato-detalle");

  const descripcionHTML = item.descripcion ? `<p>${item.descripcion}</p>` : "";

  const botonesHTML = `
    <div style="display:flex; justify-content:center; gap:15px; margin-top:25px;">
      <button class="btn-back" onclick="showList('${section}')">⬅️</button>
      <button class="btn-back" onclick="volverInicio()">🏠</button>
    </div>
  `;

  if (item.img) {
    const imgTest = new Image();
    imgTest.src = item.img;

    imgTest.onload = () => {
      detalleDiv.innerHTML = `
        ${descripcionHTML}
        <img src="${item.img}" alt="${item.nombre}">
        ${botonesHTML}
      `;
    };

    imgTest.onerror = () => {
      detalleDiv.innerHTML = `
        ${descripcionHTML}
        ${botonesHTML}
      `;
    };
  } else {
    detalleDiv.innerHTML = `
      ${descripcionHTML}
      ${botonesHTML}
    `;
  }
}

/* ===== VOLVER A INICIO ===== */
function volverInicio() {
  contentDiv.innerHTML = "";
  sectionsDiv.classList.remove("hidden");
  mostrarPublicidad();
}

/* ================================================= */
/* ===== PUBLICIDAD (SOLO INICIO) ===== */
/* ================================================= */
let publicidadIndex = 0;
let publicidadInterval = null;

function mostrarPublicidad() {
  if (!publicidadImgs.length) return;

  publicidadDiv.style.display = "flex";
  btnWhatsapp.style.display = "flex";

  cargarImagenPublicidad(publicidadImgs[publicidadIndex]);

  publicidadInterval = setInterval(() => {
    publicidadIndex = (publicidadIndex + 1) % publicidadImgs.length;
    cargarImagenPublicidad(publicidadImgs[publicidadIndex]);
  }, publicidadTiempo);
}

function cargarImagenPublicidad(src) {
  const imgTest = new Image();
  imgTest.src = src;

  imgTest.onload = () => {
    publicidadImg.classList.remove("visible");
    setTimeout(() => {
      publicidadImg.src = src;
      publicidadImg.classList.add("visible");
    }, 200);
  };
}

/* ===== CLICK PARA PASAR IMAGEN ===== */
publicidadImg.addEventListener("click", () => {
  publicidadIndex = (publicidadIndex + 1) % publicidadImgs.length;
  cargarImagenPublicidad(publicidadImgs[publicidadIndex]);
});

/* ===== OCULTAR INICIO ===== */
function ocultarInicio() {
  publicidadDiv.style.display = "none";
  btnWhatsapp.style.display = "none";
  if (publicidadInterval) clearInterval(publicidadInterval);
}

/* ===== WHATSAPP ===== */
btnWhatsapp.href = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensaje)}`;

/* ===== INICIAR ===== */
window.onload = () => {
  for (let section in data) {
    const btn = document.createElement("button");
    btn.textContent = section;
    btn.onclick = () => showList(section);
    sectionsDiv.appendChild(btn);
  }
  mostrarPublicidad();
};
