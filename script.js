// Menu mobile
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuButton.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

// Demonstração interativa
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("demoResult");

const responses = {
    oportunidade: {
        icon: "fa-briefcase",
        title: "Oportunidade encontrada!",
        text: "O Conecta+ poderia apresentar vagas, cursos, projetos e outras oportunidades relevantes para o usuário."
    },

    informacao: {
        icon: "fa-circle-info",
        title: "Informação encontrada!",
        text: "O usuário poderia encontrar conteúdos, serviços e informações organizadas em um único espaço."
    },

    comunidade: {
        icon: "fa-users",
        title: "Comunidade encontrada!",
        text: "A plataforma poderia conectar o usuário a pessoas e organizações com interesses ou necessidades semelhantes."
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        choices.forEach((item) => {
            item.classList.remove("active");
        });

        choice.classList.add("active");

        const answer = choice.dataset.answer;
        const response = responses[answer];

        result.innerHTML = `
            <div class="result-icon">
                <i class="fa-solid ${response.icon}"></i>
            </div>

            <h3>${response.title}</h3>

            <p>${response.text}</p>
        `;

        result.style.animation = "none";

        setTimeout(() => {
            result.style.animation = "fadeUp 0.5s ease";
        }, 10);
    });
});

// Animação ao aparecer na tela
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.15
    }
);

document
    .querySelectorAll(".info-card, .demo-box")
    .forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);
    });
