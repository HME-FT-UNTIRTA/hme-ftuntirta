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

  /* ===== DATA POP UP DEPARTEMEN (edit isi di sini) =====
     foto     : daftar foto untuk slide. Tiap foto yang ada = 1 slide (yang filenya belum ada otomatis dilewati)
     deskripsi: penjelasan singkat departemen
     program  : daftar program kerja (tiap item tampil sebagai label bulat) */
  const DEPT_DATA = {
    bph: {
      foto: [
        "dist/img/bph.jpeg",
        "dist/img/bph/ketua-himpunan.jpg",
        "dist/img/bph/sekretaris-umum.jpg",
        "dist/img/bph/bendahara-umum.jpg",
      ],
      deskripsi: "Badan Pengurus Harian (BPH) di HME berperan sebagai penggerak utama dan pusat kendali organisasi. ",
      program: ["PDOHME", "Open Recruitment", "Rapat Kerja", "Musyawarah Mahasiswa", "Rapat Akhir Kepengurusan"],
    },
    kesekretariatan: {
      foto: [
        "dist/img/kestari.jpeg",
        "dist/img/departemen/kesekretariatan-2.jpg",
        "dist/img/departemen/kesekretariatan-3.jpg",
      ],
      deskripsi: "Divisi Kesekretariatan merupakan, suatu divisi yang bertugas untuk membantu sekretaris umum dalam menaungi terkait surat menyurat, pengarsipan, serta pendataan inventaris Himpunan Mahasiswa Elektro.",
      program: ["Pengarsipan", "Piket PKM", "Inventarisasi"],
    },
    bume: {
      foto: [
        "dist/img/bume.jpeg",
        "dist/img/departemen/bume-2.jpg",
        "dist/img/departemen/bume-3.jpg",
      ],
      deskripsi: "Divisi Badan Usaha Milik Elektro merupakan, suatu divisi kewirausahaan yang berfokus pada pengembangan usaha, kreatifitas, dan kemandirian finansial dari Himpunan Mahasiswa Elektro.",
      program: ["Pembuatan PDH", "Pembuatan Merchandise HME", "Pembuatan Modul Praktikum"],
    },
    kaderisasi: {
      foto: [
        "dist/img/kaderisasi.jpeg",
        "dist/img/departemen/kaderisasi-2.jpg",
        "dist/img/departemen/kaderisasi-3.jpg",
      ],
      deskripsi: "Departemen Kaderisasi adalah bagian penting dalam Himpunan Mahasiswa Elektro yang berperan strategis dalam regenerasi dan pengembangan sumber daya manusia di Teknik Elektro Untirta. Departemen ini bertugas mencetak kader berkompeten, berkarakter, dan berintegritas yang aktif berkontribusi di organisasi dan masyarakat.",
      program: ["Hiring Ketua Pelaksana", "Musyawarah Kaderisasi", "WTHME 2025", "LKHME 2025", "Monitoring & Evaluasi", "Pendelegasian"],
    },
    internal: {
      foto: [
        "dist/img/internal.jpeg",
        "dist/img/internal/kadep-internal.jpg",
        "dist/img/internal/kadiv-internal.jpg",
        "dist/img/internal/internal-1.jpg",
        "dist/img/internal/internal-2.jpg",
        "dist/img/internal/internal-3.jpg",
        "dist/img/internal/internal-4.jpg",
        "dist/img/internal/internal-5.jpg",
        "dist/img/internal/internal-6.jpg",
      ],
      deskripsi: "Departemen Internal merupakan departemen yang berperan sebagai penghubung antara mahasiswa Teknik Elektro FT UNTIRTA dengan jurusan dan pihak terkait dalam lingkungan akademik.",
      program: ["PINTAR", "SAPA", "AKSES", "KAWAL", "E-Talk", "Kajian Rohani"],
    },
    eksternal: {
      foto: [
        "dist/img/eksternal.jpeg",
        "dist/img/eksternal/kadep-eksternal.jpg",
        "dist/img/eksternal/kadiv-eksternal.jpg",
        "dist/img/eksternal/eksternal-1.jpg",
        "dist/img/eksternal/eksternal-2.jpg",
        "dist/img/eksternal/eksternal-3.jpg",
        "dist/img/eksternal/eksternal-4.jpg",
        "dist/img/eksternal/eksternal-5.jpg",
        "dist/img/eksternal/eksternal-6.jpg"
      ],
      deskripsi: "Departemen eksternal merupakan sebuah departemen yang dibentuk untuk mempererat tali silaturahmi mahasiswa teknik elektro FT Untirta dengan alumni dan dengan mahasiswa teknik elektro yang tergabung dalam FKHMEI baik di wilayah regional maupun nasional. ",
      program: ["Penjemputan Wisudawan", "Studi Banding", "ELRUMI", "Galang Dana", "Bina Desa", "Elektro Goes To School"],
    },
    psdm: {
      foto: [
        "dist/img/psdm.jpeg",
        "dist/img/psdm/kadep-psdm.jpg",
        "dist/img/psdm/kadiv-psdm.jpg",
        "dist/img/psdm/psdm-1.jpg",
        "dist/img/psdm/psdm-2.jpg",
        "dist/img/psdm/psdm-3.jpg",
        "dist/img/psdm/psdm-4.jpg",
        "dist/img/psdm/psdm-5.jpg",
      ],
      deskripsi: "Departemen Pengembangan Sumber Daya Mahasiswa berkontribusi secara signifikan terhadap pengembangan mahasiswa, peningkatan kualitas pendidikan,meningkatkan efektifitas dan efisiensi program kerja serta persiapan   mahasiswa untuk masa depan.",
      program: ["BBM", "ELS", "Latihan Rutin", "E-Mabar", "TELCO"],
    },
    medfokom: {
      foto: [
        "dist/img/medfokom.jpeg",
        "dist/img/medfokom/kadep-medfokom.jpg",
        "dist/img/medfokom/kadiv-medfokom.jpg",
        "dist/img/medfokom/medfokom-1.jpg",
        "dist/img/medfokom/medfokom-2.jpg",
        "dist/img/medfokom/medfokom-3.jpg",
        "dist/img/medfokom/medfokom-4.jpg",
        "dist/img/medfokom/medfokom-5.jpg",
      ],
      deskripsi: "Departemen Media Informasi dan Komunikasi (Medfokom) merupakan departemen di bawah Himpunan Mahasiswa Elektro (HME) yang berperan sebagai pusat pengelolaan informasi, publikasi, dan komunikasi organisasi. Sebagai ujung tombak komunikasi dan citra organisasi, Departemen Medfokom juga berperan penting dalam membangun identitas visual dan branding HME agar tetap konsisten, profesional, dan mudah dikenali oleh anggota, civitas akademika, serta masyarakat umum.",
      program: ["Foto Kabinet", "INFOMETRO", "Publikasi Hari Ulang Tahun Pengurus", "Peringatan Hari Besar", "Pengelolaan Sosial Media", "Pengembangan Web"],
    },
  };

  /* ===== Geser dengan mouse (di layar sentuh sudah bisa digeser dengan jari) ===== */
  const enableDrag = (slider) => {
    if (slider._dragReady) return;
    slider._dragReady = true;

    slider.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;

      const width = slider.clientWidth;
      const total = slider.querySelectorAll("img").length;
      const startX = e.clientX;
      const startLeft = slider.scrollLeft;
      const startIndex = Math.round(startLeft / width);
      let moved = false;

      const onMove = (ev) => {
        const dx = ev.clientX - startX;
        if (!moved && Math.abs(dx) > 4) {
          moved = true;
          slider.classList.add("is-dragging");
        }
        if (moved) slider.scrollLeft = startLeft - dx;
      };

      const onUp = (ev) => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        if (!moved) return;

        const dx = ev.clientX - startX;
        let index = startIndex;
        if (dx < -width * 0.15) index += 1; // geser ke kiri = foto berikutnya
        if (dx > width * 0.15) index -= 1;  // geser ke kanan = foto sebelumnya
        index = Math.max(0, Math.min(total - 1, index));

        slider.classList.remove("is-dragging");
        slider.scrollTo({ left: index * width, behavior: "smooth" });
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    });
  };

  /* ===== SLIDER: panah, titik penanda, dan geser (dipakai card Program & pop up) ===== */
  // showAlways = true: tombol panah tetap tampil walau hanya 1 foto (dalam keadaan nonaktif)
  const buildSlider = (slider, showAlways = false) => {
    const wrap = slider.parentElement;
    wrap.querySelectorAll(".slide-btn, .slide-dots").forEach((el) => el.remove());
    if (slider._onScroll) slider.removeEventListener("scroll", slider._onScroll);
    slider.classList.remove("is-swipeable");

    const slides = slider.querySelectorAll("img");
    const single = slides.length < 2;
    if (single && !showAlways) return;

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

    if (single) {
      prev.disabled = true;
      next.disabled = true;
      wrap.append(prev, next);
      return;
    }

    slider.classList.add("is-swipeable");
    enableDrag(slider);
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
    slider._onScroll = updateDots;
    slider.addEventListener("scroll", updateDots, { passive: true });
    updateDots();
  };

  /* ===== PROGRAM: slider pada setiap card ===== */
  document.querySelectorAll(".program-card .slider").forEach(buildSlider);

  /* Sentuhan di layar sentuh: card yang disentuh mendapat efek hover + panah slide */
  const programCards = document.querySelectorAll(".program-card");
  document.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse") return; // mouse sudah ditangani :hover
    const hit = e.target.closest(".program-card");
    programCards.forEach((c) => c.classList.toggle("is-touched", c === hit));
  });

  /* ===== STRUKTUR: pop up departemen saat card diklik ===== */
  const modal = document.getElementById("dept-modal");

  if (modal) {
    const mSlider = document.getElementById("dept-modal-slider");
    const mTitle = document.getElementById("dept-modal-title");
    const mDesc = document.getElementById("dept-modal-desc");
    const mList = document.getElementById("dept-modal-programs");
    const mClose = modal.querySelector(".dept-modal-close");
    let lastFocus = null;
    let token = 0;

    // Cek foto yang benar-benar ada; yang tidak ada dilewati
    const loadImage = (src) =>
      new Promise((resolve) => {
        const im = new Image();
        im.onload = () => resolve(src);
        im.onerror = () => resolve(null);
        im.src = src;
      });

    const openModal = async (card) => {
      const data = DEPT_DATA[card.dataset.dept] || {};
      const name = card.querySelector(".dept-name").textContent.trim();
      lastFocus = card;

      mTitle.textContent = name;
      mDesc.textContent = data.deskripsi || "Deskripsi belum tersedia.";
      mList.innerHTML = "";
      (data.program || []).forEach((item) => {
        const li = document.createElement("li");
        li.className = "program-chip";
        li.textContent = item;
        mList.appendChild(li);
      });
      mSlider.innerHTML = "";
      mSlider.scrollLeft = 0;

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.documentElement.classList.add("modal-open");
      mClose.focus();

      // Isi slide setelah foto selesai dicek
      const mine = ++token;
      const results = await Promise.all((data.foto || []).map(loadImage));
      if (mine !== token) return; // pop up sudah ditutup / diganti
      let sources = results.filter(Boolean);

      // Bantuan: tampilkan di console foto mana yang tidak ditemukan
      const missing = (data.foto || []).filter((_, i) => !results[i]);
      if (missing.length) console.warn(`[Pop up ${name}] Foto tidak ditemukan (dilewati):`, missing);

      if (!sources.length) sources = [card.querySelector(".dept-img").getAttribute("src")];

      sources.forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${name} - foto ${i + 1}`;
        img.className = "h-full w-full shrink-0 snap-center object-cover";
        img.draggable = false;
        mSlider.appendChild(img);
      });
      buildSlider(mSlider, true);
    };

    const closeModal = () => {
      token++;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.documentElement.classList.remove("modal-open");
      if (lastFocus) lastFocus.focus();
    };

    document.querySelectorAll(".dept-card[data-dept]").forEach((card) => {
      card.addEventListener("click", () => openModal(card));
      card.addEventListener("keydown", (e) => {
        if (e.target !== card) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card);
        }
      });
    });

    // Tutup: tombol X, klik di luar panel, atau tombol Esc
    modal.addEventListener("click", (e) => {
      if (e.target.closest("[data-close]")) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("is-open")) return;

      if (e.key === "Escape") {
        closeModal();
        return;
      }

      // Panah kiri / kanan = foto sebelumnya / berikutnya
      if (e.key === "ArrowLeft") modal.querySelector(".slide-prev")?.click();
      if (e.key === "ArrowRight") modal.querySelector(".slide-next")?.click();

      // Fokus keyboard tetap berada di dalam pop up
      if (e.key === "Tab") {
        const focusable = [...modal.querySelectorAll("button")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

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
    iconOpen.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    // Penanda status menu mobile terbuka (untuk styling bila diperlukan)
    navbar.classList.toggle("is-menu-open", open);
  };

  toggle.addEventListener("click", () => setMenu(!navbar.classList.contains("is-menu-open")));
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  // Tutup menu mobile otomatis jika layar dilebarkan ke ukuran desktop
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (e.matches) setMenu(false);
  });

  // 4. Fallback jika logo belum tersedia
  const logo = document.getElementById("nav-logo");
  logo.addEventListener("error", () => (logo.style.visibility = "hidden"));
});