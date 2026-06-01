'use client'

const G = '#1D6F42'
const G2 = '#E8F5EE'

/* ── THANK YOU PAGE ─────────────────────────────────────────────────
   URL: la-labs.my/gajila/terima-kasih
   Set this as the success redirect URL in CHIP dashboard.

   Flow:
   1. Buyer clicks "Minta Akses" → Google Drive request page
   2. Buyer signs in with Google & request access
   3. Admin gets email notification → approve in Google Drive
   4. Google Drive auto-sends download link to buyer's email

   Replace DRIVE_LINK below with your actual Google Drive file link.
────────────────────────────────────────────────────────────────────── */

const DRIVE_LINK = 'https://docs.google.com/spreadsheets/d/1znncCtxazW07JsGrIaDprxYbMa1lGcBR/edit?usp=sharing'

export default function TerimaKasih() {
  return (
    <main style={{
      minHeight: '100vh', background: '#f8fafc',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '32px', fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      <div style={{
        background: 'white', borderRadius: '24px', padding: '48px 40px',
        maxWidth: '540px', width: '100%', textAlign: 'center',
        boxShadow: '0 8px 40px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0',
      }}>

        {/* Checkmark */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%', background: G2,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 24px', border: `2px solid ${G}30`,
        }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111', marginBottom: '8px', lineHeight: 1.2 }}>
          Terima kasih kerana membeli!
        </h1>
        <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px' }}>
          Pembelian <strong style={{ color: '#111' }}>Gajila Lite</strong> anda berjaya.
        </p>

        {/* How to get file — info box */}
        <div style={{
          background: '#fffbeb', border: '1.5px solid #fbbf24', borderRadius: '14px',
          padding: '20px 24px', marginBottom: '24px', textAlign: 'left',
        }}>
          <div style={{ fontWeight: 700, color: '#92400e', fontSize: '14px', marginBottom: '12px' }}>
            📥 Macam mana nak dapatkan fail?
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { num: '1', text: 'Klik butang "Minta Akses" di bawah' },
              { num: '2', text: 'Log masuk dengan akaun Google anda & hantar permintaan akses' },
              { num: '3', text: 'Kami akan approve dalam masa 1–24 jam bekerja' },
              { num: '4', text: 'Google Drive akan email link download terus ke email anda' },
            ].map(s => (
              <div key={s.num} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', background: '#d97706',
                  color: 'white', fontSize: '11px', fontWeight: 700, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {s.num}
                </div>
                <span style={{ color: '#78350f', fontSize: '13px', lineHeight: 1.6, paddingTop: '2px' }}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Request access button */}
        <a
          href={DRIVE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            padding: '16px 32px', borderRadius: '12px', background: G,
            color: 'white', fontWeight: 700, fontSize: '16px', textDecoration: 'none',
            boxShadow: `0 4px 16px ${G}40`, marginBottom: '10px',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Minta Akses Download
        </a>
        <p style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '28px' }}>
          Anda akan dibawa ke Google Drive. Log masuk dan klik "Request access".
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '24px', marginBottom: '24px' }}>
          <div style={{ fontWeight: 700, color: '#111', fontSize: '14px', marginBottom: '14px' }}>
            Selepas dapat fail, langkah seterusnya:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
            {[
              'Buka fail dengan Microsoft Excel 2016 ke atas',
              'Klik butang "Aktifkan Lesen" dalam tab Mula-Mula',
              'Isi maklumat syarikat dan tambah pekerja',
              'Mula input payroll — gaji selesai!',
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', background: G,
                  color: 'white', fontSize: '11px', fontWeight: 700, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {i + 1}
                </div>
                <span style={{ color: '#374151', fontSize: '13px', lineHeight: 1.6, paddingTop: '2px' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div style={{ padding: '16px 20px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #f0f0f0' }}>
          <div style={{ color: '#6b7280', fontSize: '13px', marginBottom: '10px' }}>
            Perlu bantuan atau akses lambat? Hubungi kami terus.
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/60175866188?text=Saya baru beli Gajila Lite, boleh tolong approve akses download saya?"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '8px 18px', borderRadius: '8px', background: '#25D366', color: 'white', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}
            >
              WhatsApp Kami
            </a>
            <a
              href="mailto:janamegaglobalmy@gmail.com?subject=Gajila Lite - Minta Akses Download"
              style={{ padding: '8px 18px', borderRadius: '8px', background: '#f0f0f0', color: '#374151', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}
            >
              Email Kami
            </a>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <a href="/gajila" style={{ color: '#9ca3af', fontSize: '12px', textDecoration: 'none' }}>
            ← Kembali ke halaman Gajila
          </a>
        </div>
      </div>

      <div style={{ marginTop: '20px', color: '#9ca3af', fontSize: '12px' }}>
        Gajila Lite · <a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>La Labs</a> · Jana Mega Global
      </div>
    </main>
  )
}
