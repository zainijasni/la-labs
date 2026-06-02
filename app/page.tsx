'use client'

import { useState } from 'react'
import LaLabsLogo from '@/components/LaLabsLogo'

/* ─── SHARED STYLES ───────────────────────────────────────────────── */
const container: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 32px',
  width: '100%',
  boxSizing: 'border-box',
}

/* ─── NAV ─────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false)
  const links = ['Produk', 'Tentang Kami', 'Hubungi']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#8B0042', boxShadow: '0 2px 20px rgba(139,0,66,0.5)',
    }}>
      <div style={{ ...container, padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          <LaLabsLogo size={72} />

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-links">
            {links.map(l => (
              <a key={l} href="#" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }} className="nav-cta">
            <a href="#produk" style={{
              padding: '8px 20px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
              color: 'white', fontWeight: 500, fontSize: '14px', textDecoration: 'none',
            }}>Lihat Produk</a>
            <a href="mailto:janamegaglobalmy@gmail.com" style={{
              padding: '8px 20px', borderRadius: '999px',
              background: 'white', color: '#8B0042', fontWeight: 700, fontSize: '14px', textDecoration: 'none',
            }}>Hubungi Kami</a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="nav-burger"
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: 'white', borderRadius: '2px' }} />
            ))}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: '#8B0042', padding: '16px 32px 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {links.map(l => (
            <a key={l} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.9)', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>{l}</a>
          ))}
          <a href="mailto:janamegaglobalmy@gmail.com" style={{
            display: 'block', marginTop: '16px', padding: '12px', borderRadius: '999px',
            background: 'white', color: '#8B0042', fontWeight: 700, textAlign: 'center', textDecoration: 'none',
          }}>Hubungi Kami</a>
        </div>
      )}
    </nav>
  )
}

/* ─── HERO ────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #A0004E 0%, #8B0042 50%, #D4006E 100%)',
      paddingTop: '68px', minHeight: '100vh', position: 'relative',
      overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <div style={{ ...container, padding: '80px 32px 100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: '1 1 420px', minWidth: 0 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 16px', borderRadius: '999px',
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.9)', fontSize: '13px', fontWeight: 500, marginBottom: '24px',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              Jana Mega Global · Produk Digital Malaysia
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
              Satu Ekosistem.<br />
              <span style={{ color: '#fbb6ce' }}>Pelbagai Penyelesaian.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
              La Labs membina produk digital untuk perniagaan Malaysia —
              dari penggajian, makanan, pendidikan, hingga kewangan.
              Semua direka untuk mudah digunakan dan berpatutan.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a href="#produk" style={{
                padding: '13px 30px', borderRadius: '999px', background: 'white',
                color: '#8B0042', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}>Terokai Produk Kami</a>
              <a href="mailto:janamegaglobalmy@gmail.com" style={{
                padding: '13px 30px', borderRadius: '999px',
                background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                color: 'white', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
              }}>Hubungi Kami</a>
            </div>

            {/* Product pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { name: 'Gajila', live: true },
                { name: 'FixLa', live: true },
                { name: 'MakanLa', live: true },
                { name: 'StudyLa', live: true },
                { name: 'DuitLa 🔜', live: false },
              ].map(p => (
                <span key={p.name} style={{
                  padding: '5px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
                  background: p.live ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${p.live ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'}`,
                  color: p.live ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                }}>{p.name}</span>
              ))}
            </div>
          </div>

          {/* Right: product showcase card */}
          <div className="hero-card-col" style={{ flex: '0 0 320px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)', borderRadius: '24px',
              padding: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                Ekosistem Produk La Labs
              </div>

              {[
                { name: 'Gajila', desc: 'Sistem Penggajian Malaysia', logo: '/logo-gajila.png', live: true },
                { name: 'FixLa', desc: 'Marketplace Servis Tempatan', logo: '/logo-fixla.png', live: true },
                { name: 'MakanLa', desc: 'Food Discovery & Review App', logo: '/logo-makanla.png', live: true },
                { name: 'StudyLa', desc: 'Platform Pembelajaran Keluarga', logo: '/logo-studyla.png', live: true },
                { name: 'DuitLa', desc: 'Personal Finance Tracker', logo: null, live: false },
              ].map(p => (
                <div key={p.name} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 12px', borderRadius: '12px', marginBottom: '8px',
                  background: p.live ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                }}>
                  <div style={{ width: '40px', height: '40px', flexShrink: 0, borderRadius: '10px', background: '#111', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.logo
                      ? <img src={p.logo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      : <span style={{ fontSize: '18px' }}>💳</span>
                    }
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>{p.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px' }}>{p.desc}</div>
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '999px',
                    background: p.live ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.1)',
                    color: p.live ? '#4ade80' : 'rgba(255,255,255,0.4)',
                  }}>{p.live ? 'Live' : 'Soon'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

/* ─── STATS BAR ───────────────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { num: '5', label: 'Produk Digital' },
    { num: '4', label: 'Produk Live Sekarang' },
    { num: '100%', label: 'Made in Malaysia' },
    { num: '2024', label: 'Ditubuhkan' },
  ]
  return (
    <section style={{ background: 'white', padding: '56px 0' }}>
      <div style={container}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }} className="stats-grid">
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, background: 'linear-gradient(135deg, #8B0042, #E0007A, #FF4FD8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '6px' }}>
                {s.num}
              </div>
              <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: 500 }}>{s.label}</div>
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
      name: 'Gajila',
      tagline: 'Gaji selesai, kerja senang.',
      desc: 'Sistem penggajian Malaysia yang lengkap — KWSP, SOCSO, PCB, EIS, HRDF dan Zakat dikira secara automatik. Tersedia dalam format Excel (Lite) untuk SME dan Web App (Pro) untuk syarikat yang lebih besar.',
      logo: '/logo-gajila.png', color: '#1D6F42', bg: '#E8F5EE', live: true,
      url: '/gajila',
    },
    {
      name: 'FixLa',
      tagline: 'Cari servis, selesai masalah.',
      desc: 'Marketplace yang menghubungkan pelanggan dengan service provider tempatan — tukang elektrik, aircond, plumbing, IT, dan banyak lagi. Post kerja, terima bid, pilih terbaik.',
      logo: '/logo-fixla.png', color: '#1D9E75', bg: '#E6F7F3', live: true,
      url: 'https://fixla.my',
    },
    {
      name: 'MakanLa',
      tagline: 'Jejak Selera Kau.',
      desc: 'App food discovery Malaysia yang bantu kau decide nak makan apa. Explore kedai berdekatan, rate & review, jana Review Card viral, dan simpan Foodie Map perjalanan makan kau.',
      logo: '/logo-makanla.png', color: '#E05A00', bg: '#FFF3E8', live: true,
      url: '#',
    },
    {
      name: 'StudyLa',
      tagline: 'Faham dulu, baru jawab.',
      desc: 'Platform pembelajaran keluarga dengan Kaedah 3 Lapisan — bimbing anak Tahun 1–5 memahami sebelum menjawab. Soalan dijana AI mengikut kurikulum KSSR Semakan 2017.',
      logo: '/logo-studyla.png', color: '#7B3FA8', bg: '#F3EEF9', live: true,
      url: '/studyla',
    },
    {
      name: 'DuitLa',
      tagline: 'Track duit, senang la!',
      desc: 'Rekod perbelanjaan terus dalam Telegram — taip "nasi lemak RM8" dan AI auto detect kategori. Web dashboard dengan graf, laporan bulanan, budget tracker, dan pembantu cukai LHDN.',
      logo: null, color: '#0A7A6E', bg: '#E6F7F5', live: false,
      url: 'https://duitla.la-labs.my',
    },
  ]

  return (
    <section id="produk" style={{ background: 'white', padding: '80px 0' }}>
      <div style={container}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', background: '#fce7f3', color: '#8B0042', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
            Ekosistem Produk La Labs
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#111', marginBottom: '16px', lineHeight: 1.2 }}>
            Semua yang Perniagaan Anda Perlukan
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Dari penggajian hingga POS restoran — La Labs membina penyelesaian digital untuk setiap aspek perniagaan Malaysia.
          </p>
        </div>

        {/* Grid: 3 top + 2 bottom centered */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }} className="products-top">
          {products.slice(0, 3).map(p => <ProductCard key={p.name} p={p} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto' }} className="products-bottom">
          {products.slice(3).map(p => <ProductCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ p }: { p: { name: string; tagline: string; desc: string; logo: string | null; color: string; bg: string; live: boolean; url: string } }) {
  return (
    <div style={{
      borderRadius: '20px', padding: '28px',
      border: `1.5px solid ${p.live ? p.color + '25' : '#f0f0f0'}`,
      background: p.live ? `linear-gradient(145deg, white, ${p.bg}60)` : 'white',
      boxShadow: p.live ? `0 4px 24px ${p.color}12` : 'none',
      display: 'flex', flexDirection: 'column', gap: 0,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        {/* Logo icon — black bg, logo atas */}
        <div style={{ width: '72px', height: '72px', borderRadius: '18px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
          {p.logo
            ? <img src={p.logo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            : <span style={{ fontSize: '32px' }}>💳</span>
          }
        </div>
        <span style={{
          fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px',
          background: p.live ? '#dcfce7' : '#f3f4f6', color: p.live ? '#15803d' : '#9ca3af',
        }}>{p.live ? '● Live' : '○ Akan Datang'}</span>
      </div>
      <div style={{ fontWeight: 800, fontSize: '19px', color: '#111', marginBottom: '4px' }}>{p.name}</div>
      <div style={{ fontWeight: 600, fontSize: '13px', color: p.color, marginBottom: '12px' }}>{p.tagline}</div>
      <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
      {p.live && p.url !== '#' && (
        <a href={p.url} target={p.url.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '16px',
          fontSize: '13px', fontWeight: 700, color: p.color, textDecoration: 'none',
        }}>
          Lawati {p.name} →
        </a>
      )}
    </div>
  )
}

/* ─── WHY LA LABS ─────────────────────────────────────────────────── */
function WhyLaLabs() {
  const reasons = [
    {
      icon: '🛡️',
      title: 'Compliant Malaysia',
      desc: 'Semua produk mematuhi peraturan Malaysia — KWSP, LHDN, MDTCC, dan lain-lain. Kemaskini automatik mengikut perubahan kadar terkini.',
    },
    {
      icon: '🇲🇾',
      title: 'Dibina untuk Malaysia',
      desc: 'Bukan sekadar terjemahan produk luar negara. La Labs direka dari awal memahami keperluan, bahasa, dan budaya perniagaan Malaysia.',
    },
    {
      icon: '💡',
      title: 'Mudah Digunakan',
      desc: 'Antara muka dalam Bahasa Melayu, intuitif, dan tidak memerlukan latihan panjang. Sesuai untuk semua peringkat pengguna.',
    },
    {
      icon: '💰',
      title: 'Harga untuk SME',
      desc: 'Harga yang berpatutan untuk perniagaan kecil dan sederhana. Tidak perlu bajet besar untuk guna teknologi terbaik.',
    },
    {
      icon: '🔗',
      title: 'Ekosistem Bersepadu',
      desc: 'Semua produk La Labs direka untuk berfungsi bersama. Data mengalir antara sistem tanpa perlu input manual berulang.',
    },
    {
      icon: '📞',
      title: 'Sokongan Tempatan',
      desc: 'Tim sokongan Malaysia yang memahami keperluan anda. Respons pantas dalam Bahasa Melayu dan English.',
    },
  ]

  return (
    <section style={{ background: 'linear-gradient(180deg, white 0%, #fdf0f6 100%)', padding: '80px 0' }}>
      <div style={container}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', background: '#fce7f3', color: '#8B0042', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
            Kenapa La Labs?
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#111', lineHeight: 1.2 }}>
            Dibina untuk Malaysia,<br />bukan copy-paste dari luar
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="why-grid">
          {reasons.map(r => (
            <div key={r.title} style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>{r.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '17px', color: '#111', marginBottom: '10px' }}>{r.title}</div>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── ABOUT ───────────────────────────────────────────────────────── */
function About() {
  return (
    <section style={{ background: 'white', padding: '80px 0' }}>
      <div style={container}>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Left */}
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', background: '#fce7f3', color: '#8B0042', fontSize: '13px', fontWeight: 600, marginBottom: '20px' }}>
              Tentang La Labs
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#111', lineHeight: 1.2, marginBottom: '20px' }}>
              Inovasi Digital<br />dari Malaysia,<br />untuk Malaysia
            </h2>
            <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
              La Labs adalah jenama produk digital di bawah <strong>Jana Mega Global</strong> — sebuah syarikat teknologi Malaysia yang membina penyelesaian digital berkualiti tinggi untuk pasaran tempatan.
            </p>
            <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.8, marginBottom: '28px' }}>
              Dari sistem penggajian (<strong>Gajila</strong>), marketplace servis (<strong>FixLa</strong>), food discovery (<strong>MakanLa</strong>), hingga platform pembelajaran keluarga (<strong>StudyLa</strong>) — setiap produk kami direka khas untuk keperluan Malaysia.
            </p>
            <a href="mailto:janamegaglobalmy@gmail.com" style={{
              display: 'inline-block', padding: '13px 28px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #8B0042, #E0007A)',
              color: 'white', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            }}>
              Berkolaborasi dengan Kami
            </a>
          </div>

          {/* Right: mission cards */}
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { title: 'Visi Kami', text: 'Menjadi ekosistem produk digital nombor 1 untuk perniagaan Malaysia menjelang 2027.', icon: '🎯' },
              { title: 'Misi Kami', text: 'Membangunkan produk digital yang mudah, berpatutan, dan benar-benar menyelesaikan masalah sebenar perniagaan Malaysia.', icon: '🚀' },
              { title: 'Nilai Kami', text: 'Integriti, inovasi berterusan, dan obsesi terhadap pengalaman pengguna yang terbaik.', icon: '💎' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', padding: '20px', borderRadius: '16px', background: '#fdf0f6', border: '1px solid #fce7f3' }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#8B0042', marginBottom: '6px', fontSize: '15px' }}>{item.title}</div>
                  <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #8B0042, #E0007A, #FF4FD8)',
      padding: '80px 0', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ ...container, textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '16px', lineHeight: 1.2 }}>
          Sedia Mulakan Transformasi Digital?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px' }}>
          Hubungi kami hari ini dan ketahui bagaimana La Labs boleh membantu perniagaan anda berkembang.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:janamegaglobalmy@gmail.com" style={{
            padding: '14px 32px', borderRadius: '999px', background: 'white',
            color: '#8B0042', fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}>Hubungi Kami Sekarang</a>
          <a href="https://wa.me/60175866188" style={{
            padding: '14px 32px', borderRadius: '999px',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
            color: 'white', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
          }}>WhatsApp Kami</a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '24px' }}>
          Tiada kontrak jangka panjang · Sokongan penuh dalam Bahasa Melayu
        </p>
      </div>
    </section>
  )
}

/* ─── FOOTER ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: '#0f0f0f', color: '#9ca3af' }}>
      <div style={{ ...container, padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginBottom: '48px' }} className="footer-grid">
          {/* Brand */}
          <div>
            <LaLabsLogo size={38} />
            <p style={{ marginTop: '16px', color: '#6b7280', fontSize: '14px', lineHeight: 1.7 }}>
              La Labs adalah jenama produk digital di bawah Jana Mega Global.
              Kami membina penyelesaian teknologi untuk perniagaan Malaysia.
            </p>
            <p style={{ marginTop: '12px', color: '#4b5563', fontSize: '12px' }}>© 2025 Jana Mega Global. Hak cipta terpelihara.</p>
            <p style={{ marginTop: '4px', color: '#374151', fontSize: '12px', fontStyle: 'italic' }}>la-labs.my</p>
          </div>

          {/* Produk */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Produk</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              {[
                { name: 'Gajila — Sistem Penggajian', live: true },
                { name: 'FixLa — Marketplace Servis', live: true },
                { name: 'MakanLa — Food Discovery', live: true },
                { name: 'StudyLa — Platform Pembelajaran', live: true },
                { name: 'DuitLa — Personal Finance Tracker', live: false },
              ].map(item => (
                <li key={item.name}>
                  <a href="#" style={{ color: item.live ? '#9ca3af' : '#6b7280', textDecoration: 'none' }}>
                    {item.name} {!item.live && <span style={{ color: '#4b5563', fontSize: '11px' }}>(Akan Datang)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Hubungi Kami</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <div>📧 janamegaglobalmy@gmail.com</div>
              <div>📱 +60 17-586 6188</div>
              <div style={{ color: '#6b7280', fontSize: '12px', marginTop: '8px' }}>Isnin – Jumaat · 9 pagi – 6 petang</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '12px', color: '#4b5563' }}>
          <div>La Labs · Jana Mega Global</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Dasar Privasi</a>
            <a href="#" style={{ color: '#4b5563', textDecoration: 'none' }}>Terma Penggunaan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── MAIN ────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <ProductsGrid />
        <WhyLaLabs />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
