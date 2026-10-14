document.addEventListener("DOMContentLoaded", () => {
  /* ===== HERO: animasi masuk berurutan ===== */
  document.querySelectorAll("#hero .hero-item, #beranda .hero-item").forEach((el, i) => {
    setTimeout(() => el.classList.add("is-visible"), 150 + i * 200);
  });

  /* ===== REVEAL: elemen muncul saat masuk layar ===== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ===== Gambar departemen, pengurus & program: sembunyikan jika file belum ada ===== */
  document.querySelectorAll(".dept-img, .person-img, .program-img").forEach((img) => {
    img.addEventListener("error", () => (img.style.visibility = "hidden"));
  });

  /* ===== PROGRAM: slider pada setiap card ===== */
  document.querySelectorAll(".program-card").forEach((card) => {
    const slider = card.querySelector(".slider");
    const slides = slider.querySelectorAll("img");
    const wrap = slider.parentElement;
    if (slides.length < 2) return;

    const chevron = (d) =>
      `<svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="${d}"/></svg>`;

    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "slide-btn slide-prev";
    prev.setAttribute("aria-label", "Foto sebelumnya");
    prev.innerHTML = chevron("M15 19l-7-7 7-7");

    const next = document.createElement("button");
    next.type = "button";
    next.className = "slide-btn slide-next";
    next.setAttribute("aria-label", "Foto berikutnya");
    next.innerHTML = chevron("M9 5l7 7-7 7");

    const dots = document.createElement("div");
    dots.className = "slide-dots";
    slides.forEach(() => {
      const dot = document.createElement("span");
      dot.className = "slide-dot";
      dots.appendChild(dot);
    });

    wrap.append(prev, next, dots);

    const current = () => Math.round(slider.scrollLeft / slider.clientWidth);
    const goTo = (i) => {
      const index = (i + slides.length) % slides.length; // berputar
      slider.scrollTo({ left: index * slider.clientWidth, behavior: "smooth" });
    };
    const updateDots = () => {
      const i = current();
      dots.querySelectorAll(".slide-dot").forEach((d, n) => d.classList.toggle("is-active", n === i));
    };

    prev.addEventListener("click", () => goTo(current() - 1));
    next.addEventListener("click", () => goTo(current() + 1));
    slider.addEventListener("scroll", updateDots, { passive: true });
    updateDots();
  });

  /* Sentuhan di layar sentuh: card yang disentuh mendapat efek hover + panah slide */
  const programCards = document.querySelectorAll(".program-card");
  document.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse") return; // mouse sudah ditangani :hover
    const hit = e.target.closest(".program-card");
    programCards.forEach((c) => c.classList.toggle("is-touched", c === hit));
  });

  /* ===== KONTAK: form (membuka aplikasi email dengan pesan terisi) ===== */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        status.textContent = "Mohon lengkapi semua kolom dengan benar.";
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const subject = `Pesan dari ${data.get("nama")}`;
      const body = `Nama: ${data.get("nama")}\nEmail: ${data.get("email")}\n\n${data.get("pesan")}`;

      window.location.href =
        `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      status.textContent = "Membuka aplikasi email kamu…";
      form.reset();
    });
  }

  /* ===== NAVBAR ===== */
  const navbar = document.getElementById("navbar");
  const links = document.querySelectorAll(".nav-link");

  // 1. Latar navbar menjadi solid setelah halaman di-scroll
  const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // 2. Tandai menu yang dipilih (garis muncul hanya setelah menu diklik)
  const setActive = (hash) => {
    links.forEach((link) => {
      const active = link.getAttribute("href") === hash;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", () => setActive(link.getAttribute("href")));
  });

  // Klik logo = kembali ke atas, tanpa menu terpilih
  document.querySelector('#navbar a[href="#beranda"]:not(.nav-link)')
    ?.addEventListener("click", () => setActive(null));

  // 3. Menu mobile
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  const setMenu = (open) => {
    mobileMenu.classList.toggle("hidden", !open);
    iconOpen.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    // Penanda status menu mobile terbuka (untuk styling bila diperlukan)
    navbar.classList.toggle("is-menu-open", open);
  };

  toggle.addEventListener("click", () => setMenu(mobileMenu.classList.contains("hidden")));
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Tutup menu mobile otomatis jika layar dilebarkan ke ukuran desktop
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });

  // 4. Fallback jika logo belum tersedia
  const logo = document.getElementById("nav-logo");
  logo.addEventListener("error", () => (logo.style.visibility = "hidden"));
});