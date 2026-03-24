// 1. Diccionario de traducciones (Actualizado con tus textos reales)
const textos = {
    es: {
        acerca: "Acerca de mí",
        experiencia: "Experiencia",
        proyectos: "Proyectos realizados",
        contacto: "Contacto",
        tecnologias: "Tecnologías puestas en práctica",
        descripcion: "¡Bienvenido a mi espacio digital! Aquí encontrarás mi experiencia, algunos de mis proyectos realizados, y un poco sobre mí! Espero que disfrutes explorando mi mundo tanto como yo al crearlo. Soy un profesional en el ámbito de las <strong>tecnologías</strong> y los <strong>sistemas</strong>, con una sólida trayectoria en la implementación y desarrollo de soluciones IT.",
        
        expIntro: "A lo largo de mi trayectoria profesional, he tenido la oportunidad de trabajar en una variedad de proyectos y roles dentro del ámbito tecnológico, lo que me ha permitido desarrollar un conjunto amplio de habilidades en diferentes áreas tales como desarrollo de software, gestión de sistemas, administración y emprendimiento de nuevas actividades en el rubro. Si bien cuento con una experiencia extensa en múltiples sectores, he seleccionado algunas de las más relevantes para destacar mi capacidad técnica y mis habilidades en liderazgo, desarrollo y solución de problemas, que considero clave para los desafíos actuales del sector IT.",
        exp1Title: "Desarrollo de Aplicaciones Informáticas",
        exp1Desc: "Durante mi paso por diversas empresas, trabajé en el desarrollo de aplicaciones informáticas utilizando lenguajes de programación como PHP y SQL. Mi función principal consistió en colaborar con un equipo de desarrolladores para crear soluciones eficientes y escalables para diversos clientes. Este rol me permitió profundizar en el desarrollo backend y en la optimización de bases de datos, habilidades que son fundamentales en el desarrollo de software moderno.",
        exp2Title: "Laboratorio de Computación para Adultos -Fundador y Docente-",
        exp2Desc: "Como fundador del laboratorio de computación para adultos en EEMPA 1062, fui responsable de diseñar y coordinar un espacio educativo enfocado en la formación en informática básica para adultos. Además de impartir clases, me encargué de la gestión de los recursos tecnológicos y el diseño del programa educativo. Esta experiencia me permitió desarrollar habilidades pedagógicas y de comunicación, necesarias para transmitir conocimientos técnicos de forma clara y accesible.",
        exp3Title: "Administración Gerencial y Sistemas de Información",
        exp3Desc: "En Careglio Hnos. Srl., desempeñé funciones clave en administración gerencial y en el área de sistemas de información gestionando los recursos informáticos que esta empresa requería para su funcionamiento. Esta experiencia multifuncional me permitió adquirir habilidades en la gestión empresarial, el análisis de sistemas y la integración de soluciones tecnológicas para mejorar los procesos organizativos.",
        exp4Title: "Ingeniería en Sistemas de Información - UTN (En curso)",
        exp4Desc: "Actualmente, me encuentro cursando el cuarto año avanzado de la carrera de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN San Francisco). A través de esta formación, he adquirido una sólida base tanto en programación como en análisis y diseño de sistemas, utilizando diversas herramientas y lenguajes. Mi formación académica me ha permitido profundizar en temas como el modelado de software en diversas plataformas y su lógica de programación, preparándome para enfrentar desafíos complejos en el mundo del desarrollo de software.",
        exp5Title: "Empresa de servicios informáticos y tecnológicos.",
        exp5Desc: "Actualmente, soy propietario de un emprendimiento iniciado hace 11 años el cual está solidamente implantado en el contexto de ventas, servicio técnico en software y hardware como así también electrónica. Compucor informática en un negocio que lleva años de funcionamiento pleno en el circuito de locales de informática y soluciones en tecnologías, brindando a nuestros clientes una atención personalizada en cuanto a telefonía, sonido, computación y pantallas entre otros.",
        
        projIntro: "En mi recorrido profesional, he llevado adelante diversos proyectos que reflejan mi compromiso con la innovación, la resolución de problemas y la aplicación de soluciones tecnológicas de alto impacto. Estos proyectos abarcan desde el desarrollo de software y la integración de sistemas hasta iniciativas educativas y empresariales, destacando mi capacidad para adaptarme a diferentes desafíos y contextos. A continuación, presento una selección de los trabajos más representativos, que evidencian mi enfoque en la excelencia, la creatividad y el trabajo en equipo. - Los siguientes proyectos se encuentran de modo público en mi Gitgub (https://github.com/JuanmaGauna) las imágenes desplegadas son a modo ilustrativo del desarrollo trabajado.",
        
        acercaTitulo: "Acerca de mí",
        about1Title: "Mis \"Hobbies\"",
        about1Desc: "Me gusta mucho viajar, pasar tiempo con mi familia y amigos, conocer gente, tocar la guitarra, cantar, cocinar y hacer deporte! <strong>Creo que la vida se basa en pequeños grandes momentos.</strong> 😁",
        about2Title: "Mi segunda casa.",
        about2Desc: "Por supuesto, mi amada <strong>Universidad Tecnológica Nacional</strong> (UTN San Francisco), fuente de conocimiento y progreso incalculable. 🏛️",
        about3Title: "La vida misma.",
        about3Desc: "A seguir! Avant courage et gloire! Hasta el último suspiro! Sé un guerrero siempre y que ni el viento más poderoso te derrote. <strong>¡Tú puedes!</strong> Levántate y sigue adelante.💪",

        // --- TRADUCCIONES DEL NUEVO FORMULARIO ---
        formularioContacto: "Envíame un mensaje",
        nombre: "Tu Nombre *",
        email: "Tu Email *",
        empresa: "Empresa / Organización (Opcional)",
        opt1: "Selecciona un asunto (Opcional)",
        opt2: "Desarrollo de Software / Web",
        opt3: "Consultoría o Soporte IT",
        opt4: "Propuesta Laboral",
        opt5: "Networking / Tomar unos mates 🧉",
        opt6: "Otra consulta",
        mensajeTexto: "Tu Mensaje *",
        enviar: "Enviar Mensaje",
        inicio: "🏠 Ir al inicio"
    },
    en: {
        acerca: "About Me",
        experiencia: "Experience",
        proyectos: "Projects",
        contacto: "Contact",
        tecnologias: "Applied Technologies",
        descripcion:  "Welcome to my digital space! Here you will find a selection of my experience, projects, and areas of expertise. This site provides an overview of my knowledge, disciplines, and capabilities within the world of technology and systems. Each section reflects how I approach challenges: combining analysis, development, and practical solutions focused on delivering results. This portfolio represents a snapshot of my work and professional journey, while recognizing that my skills and experience extend beyond what is shown here and continue to grow with every new project.",
        
        expIntro: "Throughout my professional career, I have had the opportunity to work on a variety of projects and roles within the technological field, allowing me to develop a broad set of skills in different areas such as software development, system management, administration, and entrepreneurship in the sector. Although I have extensive experience in multiple sectors, I have selected some of the most relevant ones to highlight my technical capacity and my skills in leadership, development, and problem-solving, which I consider key to the current challenges of the IT sector.",
        exp1Title: "Software Application Development",
        exp1Desc: "During my time at various companies, I worked on software application development using programming languages like PHP and SQL. My main role involved collaborating with a team of developers to create efficient and scalable solutions for diverse clients. This role allowed me to deepen my backend development and database optimization skills, which are fundamental in modern software development.",
        exp2Title: "Adult Computer Lab -Founder and Teacher-",
        exp2Desc: "As the founder of the adult computer lab at EEMPA 1062, I was responsible for designing and coordinating an educational space focused on basic computer training for adults. In addition to teaching classes, I managed technological resources and designed the educational program. This experience allowed me to develop pedagogical and communication skills necessary to convey technical knowledge clearly and accessibly.",
        exp3Title: "Management Administration and Information Systems",
        exp3Desc: "At Careglio Hnos. Srl., I performed key roles in management administration and the information systems area, managing the IT resources this company required to operate. This cross-functional experience allowed me to acquire skills in business management, system analysis, and the integration of technological solutions to improve organizational processes.",
        exp4Title: "Information Systems Engineering - UTN (Ongoing)",
        exp4Desc: "Currently, I am in my advanced fourth year of the Information Systems Engineering degree at the National Technological University (UTN San Francisco). Through this training, I have acquired a solid foundation in both programming and system analysis and design, using various tools and languages. My academic background has allowed me to delve into topics such as software modeling across different platforms and its programming logic, preparing me to face complex challenges in the software development world.",
        exp5Title: "IT and Technological Services Company",
        exp5Desc: "Currently, I own a business started 11 years ago, which is solidly established in sales, software and hardware technical service, as well as electronics. Compucor Informática is a business that has been fully operating for years in the circuit of IT and tech solutions stores, providing our clients with personalized customer service regarding telephony, audio, computing, and displays, among others.",
        
        projIntro: "In my professional journey, I have carried out various projects that reflect my commitment to innovation, problem-solving, and the application of high-impact technological solutions. These projects range from software development and system integration to educational and business initiatives, highlighting my ability to adapt to different challenges and contexts. Below, I present a selection of the most representative works, which demonstrate my focus on excellence, creativity, and teamwork. - The following projects are publicly available on my GitHub (https://github.com/JuanmaGauna). The displayed images are illustrative of the developed work.",
        
        acercaTitulo: "About Me",
        about1Title: "My \"Hobbies\"",
        about1Desc: "I love traveling, spending time with family and friends, meeting new people, playing the guitar, singing, cooking, and doing sports! <strong>I believe life is built on great little moments.</strong> 😁",
        about2Title: "My second home.",
        about2Desc: "Of course, my beloved <strong>National Technological University</strong> (UTN San Francisco), a source of incalculable knowledge and progress. 🏛️",
        about3Title: "Life itself.",
        about3Desc: "Keep going! Avant courage et gloire! Until the last breath! Always be a warrior and let not even the most powerful wind defeat you. <strong>You can do it!</strong> Get up and keep moving forward. 💪",
        
        // --- TRADUCCIONES DEL NUEVO FORMULARIO (INGLÉS) ---
        formularioContacto: "Send me a message",
        nombre: "Your Name *",
        email: "Your Email *",
        empresa: "Company / Organization (Optional)",
        opt1: "Select a subject (Optional)",
        opt2: "Software / Web Development",
        opt3: "IT Consulting or Support",
        opt4: "Job Proposal",
        opt5: "Networking / grab a coffee ☕️",
        opt6: "Other inquiry",
        mensajeTexto: "Your Message *",
        enviar: "Send Message",
        inicio: "🏠 Go to top"
    }
};

// 2. Función para cambiar el idioma
function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll("[data-lang]");
    
    elementos.forEach(el => {
        const key = el.getAttribute("data-lang");
        
        // Verificamos que la traducción exista para esa clave
        if (textos[idioma][key]) {
            // Si el elemento es un input (como el botón enviar), cambiamos su value
            if (el.tagName === 'INPUT') {
                el.value = textos[idioma][key];
            } else {
                // Usamos innerHTML para respetar las etiquetas como <strong>
                el.innerHTML = textos[idioma][key];
            }
        }
    });

    // Cambiamos el atributo lang del HTML para mejorar el SEO
    document.documentElement.lang = idioma;
}

// 3. Funcionalidad del Acordeón (Experiencia y Proyectos)
function toggleContent(element) {
    const content = element.querySelector(".experiencia-content");
    const allContents = document.querySelectorAll(".experiencia-content");
    
    // Cierra todos los demás contenidos abiertos
    allContents.forEach((item) => {
        if (item !== content) {
            item.classList.remove("active");
        }
    });

    // Alterna la clase 'active' en el elemento clickeado
    content.classList.toggle("active");
}

// Cerrar el acordeón si el usuario hace clic afuera de la caja
document.addEventListener("click", (event) => {
    if (!event.target.closest(".experiencia-item")) {
        document.querySelectorAll(".experiencia-content").forEach((item) => {
            item.classList.remove("active");
        });
    }
});

// 4. Lógica del Modal (Ventana flotante de contacto)
// Usamos DOMContentLoaded para asegurarnos de que el HTML cargó primero
document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById('dialog');
    const showButton = document.getElementById('show');
    const closeButton = document.getElementById('close');

    // Prevenimos errores si los botones no existen en la página
    if (showButton && dialog && closeButton) {
        showButton.addEventListener('click', () => {
            dialog.showModal();
        });

        closeButton.addEventListener('click', () => {
            dialog.close();
        });
    }
});