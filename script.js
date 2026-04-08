// Interacciones básicas para Carnaval Box

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const backToTop = document.getElementById("backToTop");
  const faqList = document.getElementById("faqList");
  const planModal = document.getElementById("planModal");
  const planForm = document.getElementById("planForm");
  const planTypeInput = document.getElementById("planType");
  const newsletterForm = document.getElementById("newsletterForm");
  const contactForm = document.getElementById("contactForm");

  // Menú móvil
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Cerrar menú al hacer clic en un enlace
    navMenu.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "a") {
        navMenu.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Botón volver arriba
  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    if (window.scrollY > 380) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // FAQ acordeón
  if (faqList) {
    faqList.addEventListener("click", (event) => {
      const button = event.target.closest(".faq-question");
      if (!button) return;
      const item = button.closest(".faq-item");
      if (!item) return;

      // Cerrar otros
      document.querySelectorAll(".faq-item.open").forEach((opened) => {
        if (opened !== item) {
          opened.classList.remove("open");
        }
      });

      item.classList.toggle("open");
    });
  }

  // Modal de planes
  function openPlanModal(planName) {
    if (!planModal || !planTypeInput) return;
    planTypeInput.value = planName;
    planModal.classList.add("show");
    planModal.setAttribute("aria-hidden", "false");
  }

  function closePlanModal() {
    if (!planModal || !planTypeInput) return;
    planModal.classList.remove("show");
    planModal.setAttribute("aria-hidden", "true");
    planTypeInput.value = "";
  }

  document.querySelectorAll("[data-plan]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const planName = btn.getAttribute("data-plan") || "";
      openPlanModal(planName);
    });
  });

  if (planModal) {
    planModal.addEventListener("click", (event) => {
      const closeTrigger = event.target.closest("[data-modal-close]");
      if (closeTrigger || event.target === planModal.querySelector(".modal-backdrop")) {
        closePlanModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && planModal.classList.contains("show")) {
        closePlanModal();
      }
    });
  }

  // Envío de formulario de plan (MVP: solo muestra mensaje)
  if (planForm) {
    planForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = planForm.fullName.value.trim();
      const email = planForm.email.value.trim();
      const city = planForm.city.value.trim();

      if (!name || !email || !city) {
        alert("Por favor completa nombre, correo y ciudad para continuar.");
        return;
      }

      alert(
        "¡Gracias! Hemos registrado tu interés en: " +
          (planTypeInput.value || "Carnaval Box") +
          ". Te contactaremos por correo en las próximas horas."
      );

      planForm.reset();
      closePlanModal();
    });
  }

  // Newsletter (MVP)
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = newsletterForm.newsletterEmail.value.trim();
      if (!email) {
        alert("Por favor ingresa tu correo para suscribirte.");
        return;
      }
      alert("¡Listo! Te acabas de sumar a la bitácora del sur.");
      newsletterForm.reset();
    });
  }

  // Contacto (MVP)
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = contactForm.contactName.value.trim();
      const email = contactForm.contactEmail.value.trim();
      const message = contactForm.contactMessage.value.trim();

      if (!name || !email || !message) {
        alert("Por favor completa nombre, correo y mensaje antes de enviar.");
        return;
      }

      alert("¡Gracias por escribir! Revisaremos tu mensaje y te responderemos pronto.");
      contactForm.reset();
    });
  }
});