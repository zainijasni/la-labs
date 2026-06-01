'use client'

import { useState } from 'react'
import LaLabsLogo from '@/components/LaLabsLogo'

/* ─── NAV ─────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false)
  const links = ['Produk', 'Tentang Kami', 'Harga', 'Hubungi']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: '#A8005C', boxShadow: '0 2px 20px rgba(168,0,92,0.4)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <LaLabsLogo size={44} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/80 hover:text-white font-medium text-sm transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#produk"
            className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-medium transition-all border border-white/30"
          >
            Lihat Produk
          </a>
          <a
            href="mailto:hello@la-labs.my"
            className="px-5 py-2.5 rounded-full bg-white text-[#A8005C] text-sm font-bold hover:bg-pink-50 transition-all"
          >
            Mulakan Sekarang
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3" style={{ background: '#A8005C' }}>
          {links.map((l) => (
            <a key={l} href="#" className="block text-white/90 font-medium py-2 border-b border-white/10">
              {l}
            </a>
          ))}
          <a
            href="mailto:hello@la-labs.my"
            className="block mt-4 px-5 py-3 rounded-full bg-white text-[#A8005C] text-center font-bold"
          >
            Mulakan Sekarang
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO ────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative pt-20 pb-0 min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7A0042 0%, #A8005C 40%, #D4006E 70%, #E0007A 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4FD8, transparent)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-40 left-10 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #FF4FD8, transparent)', filter: 'blur(40px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Kini Tersedia di Malaysia
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Inovasi Digital{' '}
              <span className="block text-pink-200">untuk Malaysia</span>
            </h1>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              La Labs membina produk digital bertaraf dunia khusus untuk perniagaan Malaysia —
              dari sistem penggajian hingga pengurusan pelajar. Satu ekosistem, pelbagai penyelesaian.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#produk"
                className="px-8 py-4 rounded-full bg-white text-[#A8005C] font-bold text-lg hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Terokai Produk
              </a>
              <a
                href="mailto:hello@la-labs.my"
                className="px-8 py-4 rounded-full bg-white/15 text-white font-semibold text-lg border border-white/30 hover:bg-white/25 transition-all"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Compliant Malaysia
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Sokongan Bahasa Melayu
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Harga Berpatutan
              </span>
            </div>
          </div>

          {/* Right: mockup card */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div
                className="w-80 rounded-3xl p-6 shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">GajIla</div>
                    <div className="text-white/60 text-xs">Sistem Penggajian</div>
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {[
                    { label: 'KWSP', value: '11%', color: '#4ade80' },
                    { label: 'SOCSO', value: 'Kategori 1', color: '#60a5fa' },
                    { label: 'PCB / LHDN', value: 'Auto-kira', color: '#fb923c' },
                    { label: 'EIS / SIP', value: 'Termasuk', color: '#f472b6' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-white/70 text-sm">{item.label}</span>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: `${item.color}25`, color: item.color }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="text-white/50 text-xs mb-1">Gaji Bersih Pekerja</div>
                  <div className="text-white text-2xl font-extrabold">RM 3,284.50</div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg"
                style={{ background: 'linear-gradient(135deg, #ff6b35, #ff4fd8)' }}
              >
                ✓ Compliant 2025
              </div>

              {/* Floating stats */}
              <div
                className="absolute -bottom-4 -left-6 px-4 py-2 rounded-2xl text-white shadow-lg"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <div className="text-xs text-white/60">Digunakan oleh</div>
                <div className="font-bold">500+ Syarikat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition to white */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

/* ─── STATS BAR ───────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { num: '500+', label: 'Syarikat Aktif' },
    { num: '4', label: 'Produk Digital' },
    { num: '99.9%', label: 'Uptime Dijamin' },
    { num: '2024', label: 'Ditubuhkan' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{s.num}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PRODUCTS GRID ───────────────────────────────────────────────── */
function ProductsGrid() {
  const products = [
    {
      name: 'GajIla',
      tagline: 'Gaji selesai, kerja senang.',
      desc: 'Sistem penggajian Malaysia lengkap — KWSP, SOCSO, PCB, EIS dalam satu platform. Tersedia dalam format Excel (Lite) dan Web App (Pro).',
      icon: '💰',
      featured: true,
      badge: 'Produk Utama',
      color: '#1D6F42',
      bgColor: '#E8F5EE',
      href: '/gajila',
    },
    {
      name: 'FixLa',
      tagline: 'Penyelenggaraan tanpa kerumitan.',
      desc: 'Sistem pengurusan aduan dan penyelenggaraan fasiliti. Ideal untuk pejabat, sekolah, dan premis komersial.',
      icon: '🔧',
      featured: false,
      badge: 'Akan Datang',
      color: '#1860A8',
      bgColor: '#EEF3FA',
      href: '#',
    },
    {
      name: 'StudyLa',
      tagline: 'Belajar jadi lebih mudah.',
      desc: 'Platform pengurusan pelajar dan pembelajaran digital. Rekod kehadiran, markah, dan komunikasi ibu bapa dalam satu tempat.',
      icon: '📚',
      featured: false,
      badge: 'Akan Datang',
      color: '#7B3FA8',
      bgColor: '#F3EEF9',
      href: '#',
    },
    {
      name: 'StokLa',
      tagline: 'Inventori dalam genggaman.',
      desc: 'Pengurusan stok dan inventori ringkas untuk perniagaan kecil. Tak perlu software mahal — semua di telefon anda.',
      icon: '📦',
      featured: false,
      badge: 'Akan Datang',
      color: '#A85C00',
      bgColor: '#FBF3EE',
      href: '#',
    },
  ]

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-[#A8005C] text-sm font-semibold mb-4">
            Ekosistem Produk
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Semua yang Perniagaan Anda Perlukan
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Produk digital La Labs direka khas untuk keperluan perniagaan Malaysia —
            mudah, berpatutan, dan compliant dengan peraturan tempatan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className={`group block rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                p.featured
                  ? 'ring-2 ring-[#A8005C] shadow-lg'
                  : 'border border-gray-100 hover:border-gray-200'
              }`}
              style={{ background: p.featured ? 'linear-gradient(145deg, #fff, #fdf0f6)' : 'white' }}
            >
              {p.featured && (
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: '#A8005C' }}>
                    {p.badge}
                  </span>
                </div>
              )}
              {!p.featured && (
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: p.bgColor, color: p.color }}>
                    {p.badge}
                  </span>
                </div>
              )}

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: p.bgColor }}
              >
                {p.icon}
              </div>

              <h3 className="text-xl font-extrabold text-gray-900 mb-1">{p.name}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: p.color }}>{p.tagline}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>

              {p.href !== '#' && (
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: '#A8005C' }}>
                  Ketahui lebih lanjut
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── WHY LA LABS ─────────────────────────────────────────────────── */
function WhyLaLabs() {
  const reasons = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Compliant 100%',
      desc: 'Semua produk kami mematuhi peraturan Malaysia terkini — KWSP, SOCSO, LHDN, dan undang-undang buruh. Kemaskini automatik apabila kadar berubah.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Mudah & Pantas',
      desc: 'Antara muka yang intuitif dalam Bahasa Melayu. Pekerja baru pun boleh guna tanpa latihan panjang. Setup dalam masa kurang dari 30 minit.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Harga untuk SME',
      desc: 'Kami faham bajet SME. Harga kami direka supaya perniagaan kecil pun mampu guna teknologi terbaik tanpa membebankan cashflow.',
    },
  ]

  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg, #fff 0%, #fdf0f6 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-[#A8005C] text-sm font-semibold mb-4">
            Kenapa La Labs?
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Dibina untuk Malaysia,<br />bukan copy-paste dari luar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'linear-gradient(135deg, #A8005C, #E0007A)', color: 'white' }}
              >
                {r.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{r.title}</h3>
              <p className="text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PRODUCT SHOWCASE ────────────────────────────────────────────── */
function ProductShowcase() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* GajIla showcase — image right */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: '#E8F5EE', color: '#1D6F42' }}>
              GajIla — Produk Utama
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Payroll Malaysia yang{' '}
              <span className="gradient-text">Benar-benar Faham</span>{' '}
              Keperluan Anda
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              GajIla bukan sekadar kalkulator gaji. Ia adalah sistem pengurusan penggajian
              lengkap yang mengurus semua statutory Malaysia — KWSP, SOCSO, EIS, PCB, HRDF,
              dan Zakat — secara automatik.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Slip gaji automatik dalam PDF',
                'Laporan KWSP Borang A & SOCSO Borang 8A',
                'Pengiraan PCB berdasarkan jadual LHDN terkini',
                'Sokongan untuk pekerja kontrak & tetap',
                'Multi-syarikat dalam satu lesen',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#1D6F42' }}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/gajila"
                className="px-6 py-3 rounded-full font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #A8005C, #E0007A)' }}
              >
                Cuba GajIla Sekarang
              </a>
              <a
                href="/gajila#harga"
                className="px-6 py-3 rounded-full font-semibold border-2 border-[#A8005C] text-[#A8005C] hover:bg-pink-50 transition-all"
              >
                Lihat Harga
              </a>
            </div>
          </div>

          {/* Mockup UI */}
          <div className="relative">
            <div
              className="rounded-3xl p-8 shadow-2xl"
              style={{ background: 'linear-gradient(145deg, #1a1a2e, #16213e)' }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-auto text-white/40 text-xs font-mono">GajIla Pro</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">Nama Pekerja</span>
                  <span className="text-white font-semibold">Ahmad Farid</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">Gaji Pokok</span>
                  <span className="text-white font-semibold">RM 4,000.00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">KWSP (11%)</span>
                  <span className="text-red-400 font-semibold">- RM 440.00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">SOCSO</span>
                  <span className="text-red-400 font-semibold">- RM 19.75</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/60 text-sm">PCB / LHDN</span>
                  <span className="text-red-400 font-semibold">- RM 255.75</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white font-bold">Gaji Bersih</span>
                  <span className="text-2xl font-extrabold" style={{ color: '#4ade80' }}>RM 3,284.50</span>
                </div>
              </div>

              <button
                className="mt-6 w-full py-3 rounded-xl font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #A8005C, #E0007A)' }}
              >
                Jana Slip Gaji PDF
              </button>
            </div>

            <div
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl text-xs font-semibold text-white shadow-lg"
              style={{ background: 'linear-gradient(135deg, #A8005C, #FF4FD8)' }}
            >
              Kadar KWSP & PCB 2025 ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ────────────────────────────────────────────────── */
function Testimonials() {
  const testimonials = [
    {
      name: 'Zulkifli Hashim',
      role: 'Pengurus HR, Syarikat Pembinaan Maju Jaya',
      avatar: 'ZH',
      text: 'GajIla dah jimatkan kami berjam-jam kerja setiap bulan. Pengiraan KWSP dan PCB yang dulu buat kepala pening, sekarang semua auto. Harga pun berpatutan untuk SME macam kami.',
    },
    {
      name: 'Norliza Abdul Rahman',
      role: 'Pemilik, NL Trading & Logistics',
      avatar: 'NR',
      text: 'Sebelum ni guna spreadsheet biasa, selalu silap kira SOCSO. Lepas guna GajIla Lite, semua kira sendiri. Slip gaji pun nampak professional. Pekerja pun puas hati.',
    },
    {
      name: 'Mohd Hafiz Ismail',
      role: 'Akauntan, Firma KAF Associates',
      avatar: 'MH',
      text: 'Kami urus payroll untuk 12 syarikat klien. La Labs faham keperluan kami — multi-syarikat, laporan statutory, semua ada. Support team pun cepat respons bila ada soalan.',
    },
  ]

  return (
    <section className="py-20" style={{ background: '#fdf0f6' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#A8005C] text-sm font-semibold mb-4 shadow-sm">
            Testimoni Pelanggan
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Apa Kata Mereka
          </h2>
          <p className="text-gray-500 text-lg">Ratusan perniagaan Malaysia sudah mempercayai La Labs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="#A8005C" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-5 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #A8005C, #E0007A)' }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #A8005C, #E0007A, #FF4FD8)' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-white blur-2xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Sedia Mulakan Transformasi Digital?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Sertai ratusan perniagaan Malaysia yang sudah gunakan La Labs.
          Cuba percuma selama 30 hari — tiada kad kredit diperlukan.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@la-labs.my"
            className="px-8 py-4 rounded-full bg-white text-[#A8005C] font-bold text-lg hover:bg-pink-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            Cuba Percuma 30 Hari
          </a>
          <a
            href="https://wa.me/601112345678"
            className="px-8 py-4 rounded-full bg-white/15 text-white font-semibold text-lg border border-white/30 hover:bg-white/25 transition-all"
          >
            WhatsApp Kami
          </a>
        </div>

        <p className="text-white/50 text-sm mt-6">
          Tiada kontrak jangka panjang · Boleh batal bila-bila masa · Sokongan dalam Bahasa Melayu
        </p>
      </div>
    </section>
  )
}

/* ─── FOOTER ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: '#0f0f0f' }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <LaLabsLogo size={40} />
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              La Labs adalah jenama produk digital di bawah Jana Mega Global.
              Kami membina penyelesaian teknologi untuk perniagaan Malaysia.
            </p>
            <p className="mt-3 text-gray-600 text-xs">
              © 2025 Jana Mega Global. Hak cipta terpelihara.
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 className="text-white font-bold mb-4">Produk</h4>
            <ul className="space-y-2 text-sm">
              {['GajIla Lite', 'GajIla Pro', 'FixLa (Akan Datang)', 'StudyLa (Akan Datang)', 'StokLa (Akan Datang)'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi */}
          <div>
            <h4 className="text-white font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@la-labs.my
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +60 11-1234 5678
              </li>
              <li className="text-gray-600 text-xs mt-4">
                Isnin – Jumaat<br />9:00 pagi – 6:00 petang
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div>Produk La Labs | Jana Mega Global SDN BHD</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Dasar Privasi</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terma Penggunaan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── MAIN PAGE ───────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <ProductsGrid />
        <WhyLaLabs />
        <ProductShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
