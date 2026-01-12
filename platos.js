const sectionsDiv = document.getElementById("sections");
const contentDiv = document.getElementById("content");

/* ===== PUBLICIDAD & WHATSAPP ===== */
const publicidadDiv = document.getElementById("publicidad");
const publicidadImgContainer = document.querySelector(".publicidad-img");
const btnWhatsapp = document.getElementById("btnWhatsapp");

/* ===== CONFIGURACIÓN ===== */
const publicidadImgs = [
  "publicidad1.jpg",
  "publicidad2.jpg"
];

const publicidadTiempo = 3000;

const whatsappNumero = "51999999999";
const whatsappMensaje = "Hola, vi su menú en San Joy Lao";

/* ===== DATOS DEL MENÚ ===== */
const data = {
  "Carnes": [
    { nombre: "Carne de Res Saltada en Salsa de Ostión o Tausí", precio: "S/48", img: "carne-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Frijolito Chino", precio: "S/48", img: "carne-frijol.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Ostión a la Plancha", precio: "S/53", img: "carne-ostion-plancha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Tausí a la Plancha", precio: "S/53", img: "carne-tausi.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Del Mar": [
    { nombre: "Pescado San Joy Lao", precio: "S/62", img: "pescado-sjl.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Filete de Pescado al Vapor", precio: "S/65", img: "filete-vapor.jpg", descripcion: "Carne, arroz, fideos" }
  ]
  // 👉 aquí sigue exactamente igual el resto de tus categorías
};

/* ================================================= */
/* ===== LISTA DE PLATOS ===== */
/* ================================================= */
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

/* ================================================= */
/* ===== DETALLE DEL PLATO ===== */
/* ================================================= */
function showDetail(item, section) {
  sectionsDiv.classList.add("hidden");
  publicidadDiv.style.display = "none";
  btnWhatsapp.style.display = "flex";

  contentDiv.innerHTML = `<div class="plato-detalle"></div>`;
  const detalleDiv = contentDiv.querySelector(".plato-detalle");

  const descripcionHTML = item.descripcion ? `<p>${item.descripcion}</p>` : "";

  const botonesHTML = `
    <div style="display:flex; justify-content:center; gap:15px; margin-top:25px;">
      <button class="btn-back" onclick="showList('${section}')">Regresar</button>
      <button class="btn-back" onclick="volverInicio()">Inicio</button>
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
/* ===== CARRUSEL DESLIZANTE ===== */
/* ================================================= */
let publicidadIndex = 0;
let publicidadInterval = null;
let startX = 0;

const track = document.createElement("div");
track.className = "publicidad-track";

const dots = document.createElement("div");
dots.className = "publicidad-dots";

publicidadImgs.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  track.appendChild(img);

  const dot = document.createElement("span");
  dot.onclick = () => moverPublicidad(i);
  dots.appendChild(dot);
});

publicidadImgContainer.innerHTML = "";
publicidadImgContainer.appendChild(track);
publicidadDiv.appendChild(dots);

function moverPublicidad(index) {
  publicidadIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  actualizarDots();
}

function actualizarDots() {
  [...dots.children].forEach((d, i) => {
    d.classList.toggle("active", i === publicidadIndex);
  });
}

function siguientePublicidad() {
  publicidadIndex = (publicidadIndex + 1) % publicidadImgs.length;
  moverPublicidad(publicidadIndex);
}

function mostrarPublicidad() {
  publicidadDiv.style.display = "flex";
  btnWhatsapp.style.display = "flex";
  moverPublicidad(publicidadIndex);
  publicidadInterval = setInterval(siguientePublicidad, publicidadTiempo);
}

function ocultarInicio() {
  publicidadDiv.style.display = "none";
  btnWhatsapp.style.display = "none";
  if (publicidadInterval) clearInterval(publicidadInterval);
}

/* ===== SWIPE ===== */
track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) siguientePublicidad();
  if (endX - startX > 50)
    moverPublicidad((publicidadIndex - 1 + publicidadImgs.length) % publicidadImgs.length);
});

/* ===== CLICK IMAGEN ===== */
track.addEventListener("click", siguientePublicidad);

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
