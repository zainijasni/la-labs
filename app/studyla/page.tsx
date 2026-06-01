'use client'

const P = '#7B3FA8'   // purple primary
const P2 = '#F3EEF9'  // purple light bg
const P3 = '#4C1D95'  // purple dark

const DAFTAR_URL = 'https://studyla-eight.vercel.app/daftar'
const LOGIN_URL = 'https://studyla-eight.vercel.app/login'

const wrap: React.CSSProperties = {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '0 32px',
  width: '100%',
  boxSizing: 'border-box',
}

/* ── NAV ─────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#111', borderBottom: '1px solid #222' }}>
      <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textDecoration: 'none' }}>← La Labs</a>
          <div style={{ width: '1px', height: '14px', background: '#333' }} />
          <div style={{ background: '#222', borderRadius: '8px', padding: '4px 10px', display: 'flex', alignItems: 'center' }}>
            <img src="/logo-studyla.png" alt="StudyLa" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
          </div>
          <span style={{ padding: '2px 8px', borderRadius: '6px', background: 'rgba(123,63,168,0.3)', color: '#c084fc', fontSize: '11px', fontWeight: 700 }}>Beta</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer"
            style={{ padding: '9px 18px', borderRadius: '8px', border: '1.5px solid rgba(255,255,255,0.25)', color: 'white', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
            Log Masuk
          </a>
          <a href={DAFTAR_URL} target="_blank" rel="noopener noreferrer"
            style={{ padding: '9px 18px', borderRadius: '8px', background: P, color: 'white', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
            Cuba Percuma
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ── HERO ────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      paddingTop: '60px',
      background: `linear-gradient(135deg, ${P3} 0%, ${P} 60%, #9333ea 100%)`,
      minHeight: '88vh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      {/* Decoration */}
      <div style={{ position: 'absolute', top: '10%', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ ...wrap, padding: '64px 32px 100px' }}>
        <div style={{ display: 'flex', gap: '56px', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: '1 1 400px', minWidth: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '20px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', fontWeight: 600 }}>Produk La Labs · Platform Pembelajaran Keluarga</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
              Faham dulu,<br />
              <span style={{ color: '#d8b4fe' }}>baru jawab.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px', maxWidth: '480px' }}>
              Platform pembelajaran keluarga Malaysia — bimbing anak Tahun 1 hingga 5
              memahami pelajaran dengan <strong style={{ color: 'white' }}>Kaedah 3 Lapisan</strong>,
              bukan sekadar hafal jawapan.
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {['KSSR Semakan 2017', 'Matematik', 'BM', 'BI', 'Sains', 'AI Jana Soalan'].map(t => (
                <span key={t} style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 600 }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={DAFTAR_URL} target="_blank" rel="noopener noreferrer" style={{
                padding: '14px 28px', borderRadius: '10px', background: 'white',
                color: P, fontWeight: 700, fontSize: '15px', textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}>
                Cuba Percuma Sekarang
              </a>
              <a href="#kaedah" style={{
                padding: '14px 28px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
                color: 'white', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
              }}>
                Ketahui Lebih Lanjut
              </a>
            </div>

            <div style={{ marginTop: '20px', color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
              Percuma untuk daftar · Tiada kad kredit diperlukan
            </div>
          </div>

          {/* Right: app card mockup */}
          <div className="hero-card-col" style={{ flex: '0 0 300px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px' }}>
                Dashboard Ibu Bapa
              </div>

              {[
                { name: 'Aisyah', tahun: 'Tahun 3', subjek: 'Matematik', progress: 72, color: '#4ade80' },
                { name: 'Imran', tahun: 'Tahun 5', subjek: 'Sains', progress: 58, color: '#60a5fa' },
              ].map(s => (
                <div key={s.name} style={{ padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <div style={{ color: 'white', fontWeight: 700, fontSize: '14px' }}>{s.name}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>{s.tahun} · {s.subjek}</div>
                    </div>
                    <span style={{ color: s.color, fontWeight: 800, fontSize: '14px' }}>{s.progress}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px' }}>
                    <div style={{ width: `${s.progress}%`, height: '100%', background: s.color, borderRadius: '999px' }} />
                  </div>
                </div>
              ))}

              <div style={{ padding: '10px 12px', borderRadius: '10px', background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.25)', marginTop: '4px' }}>
                <div style={{ color: '#4ade80', fontSize: '12px', fontWeight: 700 }}>🔥 Streak 7 hari berturut!</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '2px' }}>Aisyah belajar setiap hari minggu ini</div>
              </div>
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

/* ── KAEDAH 3 LAPISAN ────────────────────────────────────────────── */
function Kaedah() {
  return (
    <section id="kaedah" style={{ background: 'white', padding: '80px 0' }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '999px', background: P2, color: P, fontSize: '12px', fontWeight: 600, marginBottom: '14px' }}>Pendekatan Unik StudyLa</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#111', marginBottom: '12px' }}>Kaedah 3 Lapisan</h2>
          <p style={{ color: '#6b7280', fontSize: '15px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
            Bukan sekadar bagi jawapan. StudyLa bimbing anak memahami soalan dulu — barulah menjawab.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', position: 'relative' }} className="layers-grid">
          {[
            {
              num: '1',
              title: 'Faham Soalan',
              icon: '🧠',
              color: '#7B3FA8',
              bg: P2,
              desc: 'Ibu bapa baca skrip panduan, bantu anak faham apa yang soalan minta — bukan terus cari jawapan.',
            },
            {
              num: '2',
              title: 'Cara Selesaikan',
              icon: '💡',
              color: '#1D6F42',
              bg: '#E8F5EE',
              desc: 'Tunjuk kaedah langkah demi langkah. Anak belajar proses berfikir, bukan hafal formula.',
            },
            {
              num: '3',
              title: 'Cuba Jawab',
              icon: '✏️',
              color: '#1860A8',
              bg: '#EEF3FA',
              desc: 'Anak cuba sendiri. Betul — teruskan. Tak faham — ulang dari Lapisan 1 secara automatik.',
            },
          ].map(l => (
            <div key={l.num} style={{ borderRadius: '20px', padding: '28px', background: l.bg, border: `1.5px solid ${l.color}20`, position: 'relative' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: l.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>
                {l.icon}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontWeight: 800, fontSize: '13px', color: l.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Lapisan {l.num}</span>
              </div>
              <div style={{ fontWeight: 800, fontSize: '18px', color: '#111', marginBottom: '10px' }}>{l.title}</div>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7 }}>{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FEATURES ────────────────────────────────────────────────────── */
function Features() {
  const features = [
    { icon: '🤖', title: 'Soalan Dijana AI', desc: 'Google Gemini jana soalan mengikut topik, tahun, dan subjek secara dinamik. Tidak berulang.' },
    { icon: '📚', title: '4 Subjek, 38 Topik', desc: 'Matematik, Bahasa Melayu, Bahasa Inggeris, dan Sains — merangkumi Tahun 1 hingga 5 KSSR.' },
    { icon: '📊', title: 'Laporan Kemajuan', desc: 'Pantau progress anak per topik — Dah Faham, Dalam Proses, atau Perlu Bantuan.' },
    { icon: '👨‍👩‍👧', title: 'Multi-Profil Anak', desc: 'Satu akaun ibu bapa boleh urus semua anak. Progress tersimpan berasingan.' },
    { icon: '🔥', title: 'Streak Harian', desc: 'Sistem streak galakkan anak belajar setiap hari. Konsisten bina keyakinan.' },
    { icon: '📱', title: 'PWA — Tanpa App Store', desc: 'Install di telefon terus dari browser. Tak perlu ke App Store atau Google Play.' },
  ]

  return (
    <section style={{ background: '#fafafa', padding: '80px 0' }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '999px', background: P2, color: P, fontSize: '12px', fontWeight: 600, marginBottom: '14px' }}>Ciri-ciri Platform</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#111' }}>Semua yang keluarga perlukan</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="features-grid">
          {features.map(f => (
            <div key={f.title} style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{f.icon}</div>
              <div style={{ fontWeight: 700, color: '#111', fontSize: '15px', marginBottom: '8px' }}>{f.title}</div>
              <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SUBJECTS ────────────────────────────────────────────────────── */
function Subjects() {
  const subjects = [
    { icon: '🔢', name: 'Matematik', topics: 12, list: 'Nombor Bulat, TBAB, Wang, Masa, Ukuran, Pecahan, Perpuluhan, Peratus, Luas & Perimeter, Data & Graf, Nisbah' },
    { icon: '✍️', name: 'Bahasa Melayu', topics: 8, list: 'Ejaan & Sebutan, Kata Nama & Kerja, Pemahaman, Karangan Bergambar, Simpulan Bahasa, Ayat Majmuk' },
    { icon: '🔤', name: 'Bahasa Inggeris', topics: 8, list: 'Vocabulary, Phonics, Grammar, Tenses, Reading Comprehension, Guided Writing, Letter Writing' },
    { icon: '🔬', name: 'Sains', topics: 10, list: 'Deria, Haiwan, Tumbuhan, Cuaca, Jirim, Sistem Badan, Cahaya & Bunyi, Daya & Gerakan, Ekosistem' },
  ]

  return (
    <section style={{ background: 'white', padding: '80px 0' }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '999px', background: P2, color: P, fontSize: '12px', fontWeight: 600, marginBottom: '14px' }}>Kurikulum</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#111', marginBottom: '8px' }}>KSSR Semakan 2017</h2>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>4 subjek · 38 topik · Tahun 1 hingga 5</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="subjects-grid">
          {subjects.map(s => (
            <div key={s.name} style={{ borderRadius: '16px', padding: '24px', border: `1.5px solid ${P}20`, background: P2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '28px' }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: '#111' }}>{s.name}</div>
                  <div style={{ color: P, fontSize: '12px', fontWeight: 600 }}>{s.topics} topik</div>
                </div>
              </div>
              <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.65 }}>{s.list}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ─────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${P3}, ${P}, #9333ea)`, padding: '72px 0' }}>
      <div style={{ ...wrap, textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>📚</div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: 'white', marginBottom: '14px' }}>
          Mula belajar bersama anak hari ini
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', marginBottom: '32px', maxWidth: '460px', margin: '0 auto 32px' }}>
          Percuma untuk daftar. Cuba Kaedah 3 Lapisan dan lihat perbezaannya dalam pemahaman anak anda.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={DAFTAR_URL} target="_blank" rel="noopener noreferrer" style={{
            padding: '14px 32px', borderRadius: '10px', background: 'white',
            color: P, fontWeight: 700, fontSize: '15px', textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}>
            Daftar Percuma Sekarang
          </a>
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" style={{
            padding: '14px 32px', borderRadius: '10px',
            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
            color: 'white', fontWeight: 600, fontSize: '15px', textDecoration: 'none',
          }}>
            Log Masuk
          </a>
        </div>
        <div style={{ marginTop: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
          Atau kembali ke <a href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>La Labs</a> untuk terokai produk lain
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', padding: '20px 32px', textAlign: 'center' }}>
      <div style={{ color: '#4b5563', fontSize: '12px', marginBottom: '4px' }}>
        StudyLa · Produk La Labs · Jana Mega Global
      </div>
      <a href="/" style={{ color: '#6b7280', fontSize: '12px', textDecoration: 'none' }}>← Kembali ke La Labs</a>
    </footer>
  )
}

/* ── MAIN ────────────────────────────────────────────────────────── */
export default function StudyLaPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Kaedah />
        <Features />
        <Subjects />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
