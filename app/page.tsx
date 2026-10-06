
"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  const [state, handleSubmit] = useForm("meaejbby");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold tracking-wider">
            ArifPortofolio
          </h1>

          <div className="hidden items-center gap-6 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/bocillkompee"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-purple-400"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.85 10.93.57.1.78-.25.78-.55v-2.15c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/arip_portofolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-400"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

        {/* Glow utama */}
        <div className="hero-glow absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        {/* Glow tambahan */}
        <div className="hero-glow-2 absolute left-[35%] top-[45%] h-64 w-64 rounded-full bg-pink-500/10 blur-[100px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <p className="hero-fade mb-6 text-sm uppercase tracking-[0.4em] text-purple-400">
            Web Developer & UI/UX Designer
          </p>

          <h1 className="hero-delay-1 text-5xl font-bold leading-tight md:text-7xl">
            Building digital
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              experiences
            </span>
          </h1>

          <p className="hero-delay-2 mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Saya adalah seorang fullstack web developer yang berfokus pada
            pengembangan website modern dan pengalaman pengguna yang menarik.
            Dengan keahlian dalam berbagai bahasa pemrograman dan framework,
            saya berkomitmen untuk menciptakan solusi digital yang inovatif
            dan efektif
          </p>

          <div className="hero-delay-3 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 font-medium text-black transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-medium backdrop-blur transition duration-300 hover:border-purple-400 hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>

        </div>
      </section>
      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
          About Me
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          A little bit about me
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Saya adalah seorang pelajar dari SMK Taruna Bhakti Depok yang
          memiliki minat dalam bidang teknologi dan pengembangan perangkat
          lunak. Saya memiliki pengalaman dalam membangun website modern,
          menguasai berbagai bahasa pemrograman, dan selalu bersemangat untuk
          mempelajari teknologi baru. Saya percaya bahwa dengan kerja keras
          dan dedikasi, saya dapat menciptakan produk digital yang bermanfaat
          bagi masyarakat
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-6 py-32">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I use
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Git & GitHub",
              "Flutter",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/5"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
          Projects
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Things I've built
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "ArtikelKu",
              description:
                "Aplikasi mobile untuk membuat dan mengelola artikel.",
            },
            {
              title: "TokoKita",
              description:
                "Website e-commerce dengan JavaScript, Tailwind CSS, dan DummyJSON API.",
              href: "https://bocillkompee.github.io/TokoKita2/",
            },
            {
              title: "Sistem Perpustakaan",
              description:
                "Website manajemen perpustakaan dengan fitur katalog dan login.",
            },
            {
              title: "Todo List",
              description:
                "Project sederhana untuk mengelola daftar tugas dengan fitur CRUD.",
              href: "https://kaleidoscopic-sopapillas-ea92a9.netlify.app/",
            },
          ].map((project) => (
            <a
              key={project.title}
              href={project.href || "#"}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noopener noreferrer" : undefined}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.06]"
            >
              <div className="mb-16 flex items-center justify-between">
                <span className="text-sm text-gray-500">PROJECT</span>

                <span className="text-gray-500 transition group-hover:text-purple-400">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-3 leading-7 text-gray-400">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-purple-400">
              Contact
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-400">
              Punya pertanyaan atau mau ngobrol soal project?
              Kirim pesan lewat form di bawah.
            </p>
          </div>

          {state.succeeded ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="text-2xl font-bold">
                Pesan berhasil dikirim
              </h3>

              <p className="mt-3 text-gray-400">
                Terima kasih telah menghubungi saya! Saya akan segera
                membalas pesan Anda.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              {/* Nama */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Nama
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Nama anda"
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-purple-400"
                />

                <ValidationError
                  prefix="Nama"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-purple-400"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Pesan */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Pesan
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tulis pesan anda di sini..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-purple-400"
                />

                <ValidationError
                  prefix="Pesan"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.submitting ? "Mengirim..." : "Kirim Pesan"}
              </button>

              <ValidationError errors={state.errors} />
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © 2026 ArifPortofolio. All rights reserved.
      </footer>
    </main>
  );
}

