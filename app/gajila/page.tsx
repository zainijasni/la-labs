'use client'

import { useState } from 'react'

const G = '#1D6F42'
const G2 = '#E8F5EE'
const G3 = '#0F3D22'

const wrap: React.CSSProperties = {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '0 32px',
  width: '100%',
  boxSizing: 'border-box',
}

function Logo() {
  return (
    <span style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
      Gajila
    </span>
  )
}

/* ── NAV ─────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#111', borderBottom: '1px solid #222' }}>
      <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textDecoration: 'none', whiteSpace: 'nowrap' }}>← La Labs</a>
          <div style={{ width: '1px', height: '14px', background: '#333', flexShrink: 0 }} />
          <div style={{ background: '#222', borderRadius: '8px', padding: '4px 8px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src="/logo-gajila.png" alt="Gajila" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
          </div>
          <span className="gajila-badge" style={{ padding: '2px 8px', borderRadius: '6px', background: 'rgba(29,111,66,0.3)', color: '#4ade80', fontSize: '11px', fontWeight: 700, whiteSpace: 'nowrap' }}>Lite v1.0</span>
        </div>
        <a
          href="#beli"
          style={{ padding: '8px 16px', borderRadius: '8px', background: G, color: 'white', fontWeight: 700, fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          Beli Sekarang
        </a>
      </div>
    </nav>
  )
}

/* ── HERO ────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ paddingTop: '60px', background: 'white' }}>
      <div style={{ ...wrap, padding: '64px 32px 56px' }}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', borderRadius: '999px', background: G2, marginBottom: '20px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: G, display: 'inline-block' }} />
              <span style={{ color: G, fontSize: '12px', fontWeight: 600 }}>Sistem Penggajian Malaysia · Format Excel</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#111', lineHeight: 1.15, marginBottom: '16px' }}>
              Payroll Malaysia<br />dalam Excel yang<br /><span style={{ color: G }}>betul-betul lengkap</span>
            </h1>

            <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '16px', maxWidth: '460px' }}>
              KWSP, SOCSO, EIS, PCB/LHDN, HRDF, Zakat — semua dikira automatik.
              Slip gaji, laporan bulanan, dan borang statutory dalam satu fail Excel.
            </p>
            {/* SOCSO 24jam highlight */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '10px', background: '#fffbeb', border: '1.5px solid #fbbf24', marginBottom: '20px' }}>
              <span style={{ fontSize: '14px' }}>⭐</span>
              <span style={{ color: '#92400e', fontSize: '12px', fontWeight: 700 }}>Dah ada: SOCSO Lindungan 24 Jam — compulsory mulai 1 Jun 2026</span>
            </div>

            {/* Price + CTA */}
            <div style={{ marginBottom: '24px' }}>

              {/* RM19 gone — FOMO strip */}
              <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: '10px', padding: '10px 14px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>😢</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#713f12', fontSize: '13px' }}>Harga <span style={{ textDecoration: 'line-through' }}>RM 19</span> dah terlepas!</div>
                    <div style={{ color: '#92400e', fontSize: '12px' }}>50 orang pertama dah grab. Tahniah kepada mereka 🎉</div>
                  </div>
                </div>
              </div>

              {/* Current price urgency */}
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '10px 14px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>⚡</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#991b1b', fontSize: '13px' }}>Jangan lepas lagi! Harga RM 39 pun tak kekal lama.</div>
                    <div style={{ color: '#7f1d1d', fontSize: '12px' }}>Lepas ni naik ke RM 69 — rebut sekarang sebelum terlambat.</div>
                  </div>
                </div>
              </div>

              {/* Price display */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <div style={{ fontSize: '3.2rem', fontWeight: 800, color: G, lineHeight: 1 }}>RM 39</div>
                <div style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.95rem', color: '#9ca3af', textDecoration: 'line-through', fontWeight: 600 }}>RM 19 ✗</span>
                    <span style={{ fontSize: '0.95rem', color: '#9ca3af', textDecoration: 'line-through', fontWeight: 600 }}>RM 297</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#ef4444', fontWeight: 700 }}>⬆ Akan naik ke RM 69 · Jimat 87% sekarang</div>
                </div>
              </div>

              {/* License period - CLEAR */}
              <div style={{ padding: '10px 14px', borderRadius: '10px', background: G2, border: `1px solid ${G}25`, marginBottom: '16px', display: 'inline-block' }}>
                <span style={{ color: G, fontWeight: 700, fontSize: '13px' }}>✓ Lesen sah sehingga 31 Disember 2026</span>
              </div>

              <a
                href="#beli"
                style={{
                  display: 'block', textAlign: 'center', padding: '15px 32px', borderRadius: '10px', background: G,
                  color: 'white', fontWeight: 700, fontSize: '16px', textDecoration: 'none',
                  boxShadow: `0 4px 16px ${G}40`,
                }}
              >
                Dapatkan Sekarang →
              </a>
            </div>

            {/* Trust signals */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '13px' }}>
              {['✓ Aktif dalam masa 24 jam', '✓ Hantar via email', '✓ Sokongan percuma'].map(t => (
                <span key={t} style={{ color: '#374151' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right: Product preview */}
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <div style={{ borderRadius: '14px', border: '1.5px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
              {/* Excel title bar */}
              <div style={{ background: '#1f7346', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'white', fontSize: '13px', fontWeight: 700 }}>Gajila Lite · v1.0</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginLeft: '4px' }}>· Gaji selesai, kerja senang.</span>
              </div>
              {/* Setup steps */}
              <div style={{ background: 'white', padding: '20px 24px' }}>
                <div style={{ color: '#374151', fontSize: '13px', fontWeight: 700, marginBottom: '16px' }}>4 Langkah Mudah untuk Mula:</div>
                {[
                  { step: '1', label: 'Aktifkan lesen', sub: 'Satu klik — terus aktif' },
                  { step: '2', label: 'Isi maklumat syarikat', sub: 'Nama, SSM, alamat' },
                  { step: '3', label: 'Tambah pekerja', sub: 'Nama, IC, jawatan, gaji' },
                  { step: '4', label: 'Mula input payroll', sub: 'Proses gaji setiap bulan' },
                ].map(s => (
                  <div key={s.step} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: G, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>
                      {s.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#111', fontSize: '13px' }}>{s.label}</div>
                      <div style={{ color: '#9ca3af', fontSize: '11px' }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Tab bar */}
              <div style={{ background: '#f8fafc', borderTop: '1px solid #e5e7eb', padding: '8px 12px', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {['Payroll', 'Slip-Gaji', 'EPF1', 'SOCSO', 'EIS', 'PCB', 'Laporan', 'Borang-EA'].map((t, i) => (
                  <span key={t} style={{
                    padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 600,
                    background: i === 0 ? G : '#e5e7eb',
                    color: i === 0 ? 'white' : '#6b7280',
                  }}>{t}</span>
                ))}
                <span style={{ color: '#9ca3af', fontSize: '11px', padding: '3px 4px' }}>+6 lagi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #f0f0f0' }} />
    </section>
  )
}

/* ── WHAT'S INSIDE ───────────────────────────────────────────────── */
function WhatsInside() {
  const tabs = [
    { name: 'Payroll', desc: 'Input gaji bulanan semua pekerja — prorata, OT, elaun, bonus', icon: '📥' },
    { name: 'Slip Gaji', desc: 'Slip gaji individual yang lengkap — sedia untuk print atau PDF', icon: '📄' },
    { name: 'EPF1 / EPF2 / EPF60', desc: 'Jadual caruman KWSP untuk semua kategori pekerja', icon: '🏦' },
    { name: 'SOCSO', desc: 'Jadual caruman PERKESO — Kategori 1, 2, dan Lindungan 24 Jam (compulsory Jun 2026)', icon: '🛡️' },
    { name: 'EIS', desc: 'Pengiraan SIP untuk insurans pekerjaan', icon: '📑' },
    { name: 'PCB', desc: 'Jadual PCB LHDN — dikira auto berdasarkan pendapatan bercukai', icon: '💸' },
    { name: 'Borang EA', desc: 'Borang EA tahunan untuk penyerahan cukai pekerja', icon: '📋' },
    { name: 'Laporan', desc: 'Ringkasan penggajian bulanan dan tahunan', icon: '📊' },
    { name: 'Lap-Cuti', desc: 'Rekod dan baki cuti AL, MC dan cuti lain', icon: '🗓️' },
    { name: 'Cuti-AL / Cuti-ML', desc: 'Pengurusan cuti tahunan dan cuti sakit', icon: '🏖️' },
    { name: 'Pekerja', desc: 'Rekod lengkap semua pekerja — IC, jawatan, jabatan', icon: '👤' },
    { name: 'Syarikat', desc: 'Maklumat syarikat, SSM, nombor caruman statutory', icon: '🏢' },
  ]

  return (
    <section style={{ background: '#fafafa', padding: '72px 0' }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: '10px' }}>
            Apa yang ada dalam <Logo />?
          </h2>
          <p style={{ color: '#6b7280', fontSize: '15px' }}>14 sheet dalam satu fail — semua yang anda perlukan untuk payroll Malaysia</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }} className="tabs-grid">
          {tabs.map(t => (
            <div key={t.name} style={{ background: 'white', borderRadius: '12px', padding: '16px', border: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: '20px', marginBottom: '8px' }}>{t.icon}</div>
              <div style={{ fontWeight: 700, color: G, fontSize: '13px', marginBottom: '4px' }}>{t.name}</div>
              <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: 1.55 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── SLIP GAJI PREVIEW ───────────────────────────────────────────── */
function SlipPreview() {
  return (
    <section style={{ background: 'white', padding: '72px 0' }}>
      <div style={wrap}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Left copy */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <div style={{ display: 'inline-block', padding: '5px 12px', borderRadius: '999px', background: G2, color: G, fontSize: '12px', fontWeight: 600, marginBottom: '16px' }}>
              Slip Gaji
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#111', lineHeight: 1.25, marginBottom: '14px' }}>
              Slip gaji lengkap,<br />terus dari Excel
            </h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.8, marginBottom: '20px' }}>
              Setiap pekerja dapat slip gaji yang terperinci — semua pendapatan dan potongan statutory dicamtumkan secara automatik.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Pendapatan: Gaji, Elaun, OT, Bonus, Komisen',
                'Potongan: KWSP, SOCSO, EIS, PCB, HRDF, Zakat',
                'Sokongan: Bayar Balik Pinjaman, Pendahuluan Gaji',
                'Prorata auto untuk pekerja baru / keluar tengah bulan',
              ].map(f => (
                <div key={f} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: G, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '14px' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slip mockup */}
          <div style={{ flex: '1 1 300px', minWidth: 0, overflowX: 'auto' }}>
            <div style={{ borderRadius: '14px', border: '1.5px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', background: 'white' }}>
              {/* Header */}
              <div style={{ background: '#f0f4f8', padding: '14px 20px', borderBottom: '2px solid #1D6F42', textAlign: 'center' }}>
                <div style={{ fontWeight: 800, fontSize: '16px', color: '#111', letterSpacing: '0.05em' }}>SLIP GAJI / PAYSLIP</div>
                <div style={{ color: '#6b7280', fontSize: '13px', marginTop: '2px' }}>Mei 2025</div>
              </div>
              {/* Employee info */}
              <div style={{ padding: '12px 20px', borderBottom: '1px solid #f0f0f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '12px' }}>
                <div><span style={{ color: '#9ca3af' }}>Nama: </span><span style={{ fontWeight: 600 }}>Ahmad bin Mohd Zain</span></div>
                <div><span style={{ color: '#9ca3af' }}>Jawatan: </span><span style={{ fontWeight: 600 }}>Pengurus</span></div>
                <div><span style={{ color: '#9ca3af' }}>No. Pekerja: </span><span style={{ fontWeight: 600 }}>EMP001</span></div>
                <div><span style={{ color: '#9ca3af' }}>Jabatan: </span><span style={{ fontWeight: 600 }}>Operasi</span></div>
              </div>
              {/* Pendapatan & Potongan */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #f0f0f0' }}>
                {/* Pendapatan */}
                <div style={{ padding: '10px 16px', borderRight: '1px solid #f0f0f0' }}>
                  <div style={{ fontWeight: 800, fontSize: '11px', color: G, marginBottom: '8px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pendapatan</div>
                  {[
                    { label: 'Gaji Pokok', val: '5,000.00' },
                    { label: 'Elaun Tetap', val: '200.00' },
                    { label: 'OT', val: '180.29' },
                    { label: 'Tuntutan', val: '50.00' },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                      <span style={{ color: '#374151' }}>{r.label}</span>
                      <span style={{ fontWeight: 600, color: '#111', fontFamily: 'monospace' }}>{r.val}</span>
                    </div>
                  ))}
                </div>
                {/* Potongan */}
                <div style={{ padding: '10px 16px' }}>
                  <div style={{ fontWeight: 800, fontSize: '11px', color: '#ef4444', marginBottom: '8px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Potongan</div>
                  {[
                    { label: 'KWSP (Pekerja)', val: '594.00' },
                    { label: 'SOCSO', val: '25.00' },
                    { label: 'SIP/EIS', val: '10.00' },
                    { label: 'PCB/LHDN', val: '97.00' },
                    { label: 'HRDF', val: '53.80' },
                    { label: 'Zakat', val: '116.36' },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                      <span style={{ color: '#374151' }}>{r.label}</span>
                      <span style={{ fontWeight: 600, color: '#ef4444', fontFamily: 'monospace' }}>{r.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bersih */}
              <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: G2 }}>
                <span style={{ fontWeight: 800, color: G, fontSize: '13px' }}>GAJI BERSIH</span>
                <span style={{ fontWeight: 800, color: G, fontSize: '18px', fontFamily: 'monospace' }}>RM 4,534.13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PAYROLL PREVIEW ─────────────────────────────────────────────── */
function PayrollPreview() {
  return (
    <section style={{ background: '#f8fafc', padding: '72px 0' }}>
      <div style={wrap}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Payroll sheet mockup */}
          <div style={{ flex: '1 1 300px', minWidth: 0, overflowX: 'auto' }}>
            <div style={{ borderRadius: '14px', border: '1.5px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', minWidth: '480px' }}>
              <div style={{ background: G, padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'white', fontWeight: 700, fontSize: '13px' }}>Payroll — Input Bulanan</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['Jana Slip', 'Jana Semua', 'Borang EA'].map(b => (
                    <span key={b} style={{ padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: '10px', fontWeight: 600 }}>{b}</span>
                  ))}
                </div>
              </div>
              {/* Table header */}
              <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 80px 70px 90px 80px', background: '#e8f5ee', padding: '7px 12px', gap: '4px', borderBottom: '1px solid #d1fae5' }}>
                {['No. Pkj', 'Nama', 'Gaji Pokok', 'Hari Kerja', 'Gaji Prorata', 'Elaun Tetap'].map(h => (
                  <div key={h} style={{ color: G, fontSize: '10px', fontWeight: 700 }}>{h}</div>
                ))}
              </div>
              {[
                { id: 'EMP001', name: 'Ahmad bin Mohd Zain', gaji: '5,000', hari: '26', prorata: '5,000', elaun: '200' },
                { id: 'EMP002', name: 'Siti Nurhaliza bt Karim', gaji: '3,500', hari: '20', prorata: '2,692', elaun: '' },
                { id: 'EMP003', name: 'Tan Ah Kow', gaji: '2,800', hari: '26', prorata: '2,800', elaun: '' },
              ].map((r, i) => (
                <div key={r.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 80px 70px 90px 80px', padding: '7px 12px', gap: '4px', background: i % 2 === 0 ? 'white' : '#f9fafb', borderBottom: '1px solid #f3f4f6', fontSize: '11px' }}>
                  <div style={{ color: G, fontWeight: 600 }}>{r.id}</div>
                  <div style={{ color: '#374151' }}>{r.name}</div>
                  <div style={{ color: '#374151', fontFamily: 'monospace' }}>{r.gaji}</div>
                  <div style={{ color: '#374151', textAlign: 'center' }}>{r.hari}</div>
                  <div style={{ color: G, fontWeight: 600, fontFamily: 'monospace' }}>{r.prorata}</div>
                  <div style={{ color: '#374151', fontFamily: 'monospace' }}>{r.elaun}</div>
                </div>
              ))}
              <div style={{ padding: '8px 12px', background: '#f8fafc', borderTop: '1px solid #e5e7eb' }}>
                <span style={{ color: '#9ca3af', fontSize: '11px' }}>+ Tambah pekerja seterusnya...</span>
              </div>
            </div>
          </div>

          {/* Right copy */}
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            <div style={{ display: 'inline-block', padding: '5px 12px', borderRadius: '999px', background: G2, color: G, fontSize: '12px', fontWeight: 600, marginBottom: '16px' }}>
              Input Payroll Bulanan
            </div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#111', lineHeight: 1.25, marginBottom: '14px' }}>
              Input gaji semua<br />pekerja dalam<br />satu skrin
            </h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.8, marginBottom: '20px' }}>
              Masukkan data sekali — sistem auto kira prorata, OT, semua potongan statutory, dan jana slip untuk semua pekerja.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Prorata auto untuk pekerja masuk / keluar tengah bulan',
                'OT, elaun, bonus, komisen — semua disokong',
                'Satu klik jana semua slip gaji serentak',
                'Export terus untuk penyerahan KWSP & SOCSO',
              ].map(f => (
                <div key={f} style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: G, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#374151', fontSize: '14px' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FOR WHO ─────────────────────────────────────────────────────── */
function ForWho() {
  const personas = [
    { icon: '🏪', title: 'Owner SME', desc: 'Buat payroll sendiri tanpa perlu upah akauntan. Jimat kos, full control.' },
    { icon: '👩‍💼', title: 'HR / Admin', desc: 'Proses gaji lebih pantas dan tepat. Laporan statutory sedia dalam minit.' },
    { icon: '🏗️', title: 'Kontraktor & Pemaju', desc: 'Urus pekerja kontrak, pekerja harian, dan pekerja tetap dalam satu sistem.' },
    { icon: '🧾', title: 'Akauntan & Pembantu Akaun', desc: 'Layan banyak klien dengan mudah. Fail berasingan untuk setiap syarikat.' },
  ]

  return (
    <section style={{ background: 'white', padding: '72px 0' }}>
      <div style={wrap}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#111', marginBottom: '8px' }}>Sesuai untuk siapa?</h2>
          <p style={{ color: '#6b7280', fontSize: '15px' }}>Sesiapa yang buat payroll Malaysia akan dapat manfaat daripada Gajila Lite.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="persona-grid">
          {personas.map(p => (
            <div key={p.title} style={{ padding: '24px', borderRadius: '14px', border: '1.5px solid #f0f0f0', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{p.icon}</div>
              <div style={{ fontWeight: 700, color: '#111', fontSize: '15px', marginBottom: '8px' }}>{p.title}</div>
              <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PURCHASE SECTION ────────────────────────────────────────────── */
function BuySection() {
  return (
    <section id="beli" style={{ background: '#f8fafc', padding: '72px 0', borderTop: '1px solid #f0f0f0' }}>
      <div style={wrap}>
        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Price card */}
          <div style={{ flex: '1 1 320px', background: 'white', borderRadius: '20px', border: `2px solid ${G}`, padding: '36px', boxShadow: `0 8px 32px ${G}15` }}>
            {/* Urgency notice */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ background: '#fef9c3', border: '1px solid #fde047', borderRadius: '10px', padding: '10px 14px', marginBottom: '8px' }}>
                <div style={{ fontWeight: 700, color: '#713f12', fontSize: '13px' }}>😢 Harga <span style={{ textDecoration: 'line-through' }}>RM 19</span> dah terlepas — 50 orang bertuah dah grab!</div>
              </div>
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '10px', padding: '10px 14px' }}>
                <div style={{ fontWeight: 700, color: '#991b1b', fontSize: '13px', marginBottom: '2px' }}>⚡ Jangan lepas lagi — harga RM 39 pun tak kekal!</div>
                <div style={{ color: '#7f1d1d', fontSize: '12px' }}>Lepas ni naik ke RM 69. Dapatkan sekarang.</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '20px', color: '#111', marginBottom: '4px' }}><Logo /> Lite</div>
                <div style={{ color: G, fontSize: '13px', fontWeight: 600 }}>Format Excel · 1 Syarikat</div>
              </div>
              <span style={{ padding: '4px 10px', borderRadius: '999px', background: G2, color: G, fontSize: '11px', fontWeight: 700 }}>✅ Tersedia</span>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                <div style={{ fontSize: '3.2rem', fontWeight: 800, color: G, lineHeight: 1 }}>RM 39</div>
                <div style={{ marginBottom: '8px' }}>
                  <div style={{ fontSize: '1rem', color: '#9ca3af', textDecoration: 'line-through', fontWeight: 600 }}>RM 297</div>
                  <div style={{ fontSize: '11px', color: '#ef4444', fontWeight: 700 }}>Jimat 87% · Akan naik ke RM 69</div>
                </div>
              </div>
            </div>
            {/* License period box */}
            <div style={{ padding: '10px 14px', borderRadius: '10px', background: G2, border: `1px solid ${G}25`, marginBottom: '20px' }}>
              <div style={{ color: G, fontWeight: 700, fontSize: '13px' }}>✓ Lesen sah sehingga 31 Disember 2026</div>
              <div style={{ color: '#6b7280', fontSize: '12px', marginTop: '2px' }}>Selepas tempoh ini, renew diperlukan</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[
                '14 sheet statutory lengkap',
                'Slip gaji auto untuk semua pekerja',
                'KWSP, SOCSO, EIS, PCB, HRDF, Zakat',
                '✨ SOCSO Lindungan 24 Jam (Jun 2026)',
                'Borang EA & laporan bulanan',
                'Aktifkan lesen dengan satu klik',
                'Kadar statutory 2026 terkini',
                'Sokongan teknikal percuma',
              ].map(f => (
                <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ color: '#374151', fontSize: '14px' }}>{f}</span>
                </div>
              ))}
            </div>

            {/* CHIP payment button */}
            <a
              href="https://pay.chip-in.asia/gajilalite"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block', textAlign: 'center', padding: '16px',
                borderRadius: '12px', background: G, color: 'white',
                fontWeight: 800, fontSize: '17px', textDecoration: 'none',
                boxShadow: `0 4px 16px ${G}40`, marginBottom: '10px',
              }}
            >
              Dapatkan Sekarang — RM 39
            </a>

            <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '12px', marginBottom: '6px' }}>
              Pembayaran selamat melalui <strong style={{ color: '#374151' }}>CHIP</strong> · FPX · Kad Kredit / Debit
            </div>
            <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '11px' }}>
              🔒 Transaksi selamat · Lesen dihantar ke email dalam 24 jam bekerja
            </div>
          </div>

          {/* FAQ */}
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontWeight: 800, fontSize: '18px', color: '#111', marginBottom: '24px' }}>Soalan Lazim</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  q: 'Berapa kos dan berapa lama lesen ini?',
                  a: 'Harga sekarang RM 39 — dan lesen ini sah sehingga 31 Disember 2026. Harga asal sistem ini adalah RM 297. 50 orang bertuah dah beli pada harga RM 19, harga akan naik ke RM 69 tidak lama lagi.',
                },
                {
                  q: 'Apa berlaku selepas 31 Disember 2026?',
                  a: 'Lesen akan tamat dan sistem tidak boleh digunakan. Anda perlu renew lesen untuk teruskan penggunaan. Harga renew akan dimaklumkan kemudian.',
                },
                {
                  q: 'Boleh guna untuk berapa ramai pekerja?',
                  a: 'Tiada had bilangan pekerja. Satu lesen untuk satu syarikat, berapa ramai pekerja pun boleh.',
                },
                {
                  q: 'Macam mana nak aktifkan lesen?',
                  a: 'Selepas bayaran, fail Excel akan dihantar ke email anda. Buka fail, klik butang "Aktifkan Lesen" — selesai. Tiada perlu taip kod panjang.',
                },
                {
                  q: 'Perlukan Microsoft Excel?',
                  a: 'Ya, Gajila Lite memerlukan Microsoft Excel 2016 ke atas. Tidak berfungsi di Google Sheets atau LibreOffice.',
                },
                {
                  q: 'Ada sokongan teknikal?',
                  a: 'Ya! Hubungi kami via WhatsApp atau email. Kami akan bantu setup dari mula hingga guna sistem dengan lancar.',
                },
              ].map(faq => (
                <div key={faq.q}>
                  <div style={{ fontWeight: 700, color: '#111', fontSize: '14px', marginBottom: '4px' }}>{faq.q}</div>
                  <div style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.65 }}>{faq.a}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', padding: '16px 20px', borderRadius: '12px', background: G2, border: `1px solid ${G}20` }}>
              <div style={{ fontWeight: 700, color: G, fontSize: '14px', marginBottom: '6px' }}>Ada soalan lain?</div>
              <div style={{ color: '#6b7280', fontSize: '13px', marginBottom: '12px' }}>Kami sedia membantu anda sebelum membeli.</div>
              <a href="https://wa.me/60175866188?text=Saya nak tanya pasal Gajila Lite" style={{ display: 'inline-block', padding: '9px 20px', borderRadius: '8px', background: '#25D366', color: 'white', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PRO TEASER ──────────────────────────────────────────────────── */
function ProTeaser() {
  return (
    <section style={{ background: G3, padding: '40px 0' }}>
      <div style={{ ...wrap, display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '260px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '999px', background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.3)', marginBottom: '10px' }}>
            <span style={{ color: '#fbbf24', fontSize: '11px', fontWeight: 700 }}>AKAN DATANG</span>
          </div>
          <h3 style={{ fontWeight: 800, fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'white', marginBottom: '8px', lineHeight: 1.3 }}>
            Gajila Pro — Web Application
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.65, marginBottom: '16px' }}>
            Akses dari mana-mana, multi-user, multi-syarikat, dashboard analytics. Sedang dalam beta testing.
          </p>
          <a
            href="mailto:janamegaglobalmy@gmail.com?subject=Gajila Pro - Daftar Minat"
            style={{
              display: 'inline-block', padding: '10px 22px', borderRadius: '8px',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', fontWeight: 700, fontSize: '13px', textDecoration: 'none',
            }}
          >
            Daftar Minat →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', padding: '24px 32px', textAlign: 'center' }}>
      <div style={{ color: '#4b5563', fontSize: '12px', marginBottom: '4px' }}>
        <Logo /> Lite · Produk La Labs · Jana Mega Global
      </div>
      <a href="/" style={{ color: '#6b7280', fontSize: '12px', textDecoration: 'none' }}>← Kembali ke La Labs</a>
    </footer>
  )
}

/* ── MAIN ────────────────────────────────────────────────────────── */
export default function GajilaPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatsInside />
        <SlipPreview />
        <PayrollPreview />
        <ForWho />
        <BuySection />
        <ProTeaser />
      </main>
      <Footer />
    </>
  )
}


