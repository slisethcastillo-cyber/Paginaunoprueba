/* ======================
   ELEMENTOS
====================== */

const btn = document.getElementById("loveBtn");
const letter = document.getElementById("letter");
const overlay = document.getElementById("overlay");

/* ======================
   ABRIR CARTA
====================== */

btn.addEventListener("click", () => {
  letter.classList.add("show");
  overlay.classList.add("show");

  // animación botón
  btn.style.transform = "scale(0.95)";
  setTimeout(() => {
    btn.style.transform = "scale(1.08)";
  }, 150);
});

/* ======================
   CERRAR CARTA
====================== */

overlay.addEventListener("click", () => {
  letter.classList.remove("show");
  overlay.classList.remove("show");
});

/* ======================
   CORAZONES FLOTANTES
====================== */

function createHeart(){

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 25) + "px";
  heart.style.animationDuration = (3 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);


// ==============================
// TEXTO DE LA CARTA
// ==============================
// Aquí escribes todo lo que quieres que aparezca en la carta
const text =
  ` Hoy hace un mes decidimos formalizar nuestra relación y estoy muy feliz de haberte dicho que sí.  
    Tal vez tenía miedo, pero sabía que lo que sentía por ti no era momentáneo, no era un capricho, era real...  
  
    Gracias por estar conmigo, por tu amor, tu paciencia y por hacerme feliz cada día.  
    No sabes lo mucho que aprecio y valoro estar a tu lado, y haré todo lo que esté en mis manos para hacerte feliz conmigo.  
    El amor tiene muchos idiomas, y cambian. Dos personas pueden encontrarse y amarse incondicionalmente tan profundamente que los cambios no pueden acabar con lo que sienten.  
    Vamos a cambiar, lo sé. Apenas tenemos 17-16 y es inevitable, pero aun con todo lo que pueda pasar, con un sinfín de posibilidades,  
    yo te prometo que si tú me sigues eligiendo en cada etapa y cambio, yo también lo haré.  
    Si tú me amas, yo te amaré. 

     No necesito que todo sea perfecto entre nosotros, solo quiero que todo sea sincero: cada palabra, gesto, caricia y amor.  
    Si alguna vez te sientes mal, quiero que sepas que estoy para ti.  
    Y si eres feliz, yo también lo seré contigo.  
    Supongo que eso es confianza o seguridad… no lo sé, pero lo respeto porque te amo.  
    Algo que tengo muy presente es que todo está en manos de Dios, y Él nos guiará mientras nos sigamos eligiendo.  
    
   Este es solo el inicio de algo muy bonito ❤️ que construiremos juntos. 
   Quiero que siempre recordemos algo importante: una relación no se trata solo de los momentos bonitos, sino también de cómo nos cuidamos en los días difíciles. Quiero aprender contigo, crecer contigo y construir una relación donde la comunicación sea nuestra fuerza, donde podamos hablar sin miedo y entendernos sin orgullo.

No prometo perfección, pero sí esfuerzo, respeto y amor constante. Si alguna vez nos equivocamos, quiero que sepamos perdonarnos y volver a intentarlo, porque lo que sentimos vale más que cualquier error.

También quiero que nunca perdamos la capacidad de elegirnos, incluso cuando las cosas no sean fáciles. Porque el amor real no solo se trata de sentirlo, sino de decidirlo cada día, en los momentos felices y en los que no lo son tanto.

Me gusta pensar que nosotros somos un equipo. No dos personas separadas, sino dos almas que están aprendiendo a caminar juntas. Y aunque a veces tengamos diferencias, quiero que siempre recordemos que estamos del mismo lado, que no somos enemigos, sino compañeros de vida.

Quiero que podamos soñar juntos, desde cosas pequeñas hasta grandes metas. Que podamos apoyarnos en nuestros proyectos, motivarnos cuando uno sienta que no puede más, y celebrar cada logro como si fuera de los dos. Porque cuando uno crece, el otro también crece con él.

Y si algún día el mundo se siente pesado, quiero ser ese lugar donde puedas descansar. Quiero ser calma para tus tormentas, y también quiero que tú lo seas para mí. No siempre vamos a estar bien, pero sí podemos estar juntos en todo.

También deseo que nuestra relación siempre esté guiada por el respeto, la confianza y la sinceridad. Que nunca tengamos que fingir nada, ni ocultar lo que sentimos, ni cargar con miedo a ser nosotros mismos. Porque el amor verdadero no exige máscaras, sino autenticidad.

Y aunque el tiempo pase, las etapas cambien y nosotros cambiemos también, espero que nunca olvidemos lo que nos trajo hasta aquí. Ese momento en el que dijimos “sí”, sin saber todo lo que vendría después, pero con la certeza de que valía la pena intentarlo.

No sé qué nos depare el futuro, pero sí sé que quiero vivirlo contigo, paso a paso, sin prisa pero sin miedo. Y si el destino nos permite seguir eligiéndonos, yo lo haré sin dudarlo.

Porque al final, más allá de todo, tú eres una de mis decisiones más bonitas. 💖 
    Te amo muchísimo Jakam 💖  

    `;

// ==============================
// CONTROL DE ESCRITURA
// ==============================
// "i" controla qué letra se muestra
let i = 0;

// velocidad de escritura (más pequeño = más rápido)
const speed = 35;

// ==============================
// FUNCIÓN PRINCIPAL
// ==============================
// Esta función escribe letra por letra en pantalla
function typeWriter(){

  // mientras no haya terminado el texto
  if(i < text.length){

    // toma el elemento donde se mostrará el texto
    document.getElementById("typeText").innerHTML += text.charAt(i);

    // avanza a la siguiente letra
    i++;

    // vuelve a llamar la función después de un tiempo
    setTimeout(typeWriter, speed);
  }
}

// ==============================
// INICIO AUTOMÁTICO
// ==============================
// apenas carga la página empieza a escribir la carta
typeWriter();

const music = document.getElementById("bgMusic");

// intentar reproducir
window.addEventListener("click", () => {
  music.volume = 0.3;
  music.play();
});
btn.addEventListener("click", () => {
  music.play();
});