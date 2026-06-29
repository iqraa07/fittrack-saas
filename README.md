# FitTrack

Platform manajemen klien untuk personal trainer. Menghubungkan jadwal latihan dari trainer dengan tracking nutrisi harian dari klien dalam satu ekosistem yang terintegrasi.

**Live Preview:** [iqraa07.github.io/fittrack-saas](https://iqraa07.github.io/fittrack-saas/)
**Product Docs:** [iqraa07.github.io/fittrack-saas/flowchart.html](https://iqraa07.github.io/fittrack-saas/flowchart.html)

---

## Tentang Proyek

FitTrack dibangun untuk menyelesaikan masalah komunikasi antara personal trainer dan klien di luar sesi gym. Saat ini, kebanyakan PT mengandalkan WhatsApp group atau spreadsheet manual untuk memantau kepatuhan klien — yang tidak terstruktur dan sulit dilacak.

FitTrack menyediakan platform dua arah:
- **Trainer** mengirimkan jadwal latihan dan memantau kepatuhan klien
- **Client** melaporkan asupan makanan harian dan melihat progress mereka

### Target Pengguna

- Personal trainer independen
- Studio gym kecil-menengah
- Klien yang ingin tracking nutrisi dengan bimbingan trainer

---

## Fitur Utama

### Sisi Personal Trainer

| Fitur | Deskripsi |
|-------|-----------|
| Manajemen Klien | Profil klien, target berat badan, status keaktifan |
| Workout Scheduler | Jadwal latihan harian/mingguan dengan template |
| Notifikasi Otomatis | Push notification jadwal latihan ke klien setiap pagi |
| Ringkasan Kepatuhan | Overview kepatuhan seluruh klien dalam satu dashboard |

### Sisi Client

| Fitur | Deskripsi |
|-------|-----------|
| Meal Logger | Input makanan per meal (sarapan, siang, malam, snack) |
| Kalori Tracker | Kalori dan makro otomatis terhitung dari database makanan |
| Progress Dashboard | Grafik berat badan mingguan, kalori harian vs target |
| Streak Counter | Tracking konsistensi meal logging dan workout |

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Frontend Web | Next.js 14 (App Router) |
| Client App | Progressive Web App (PWA) |
| Backend | Node.js + Fastify |
| Database | PostgreSQL via Supabase |
| Auth | Supabase Auth (JWT, magic link) |
| Cache | Redis via Upstash |
| Push Notification | Firebase Cloud Messaging |
| WhatsApp | Fonnte API |
| Storage | Cloudflare R2 |
| Hosting | Vercel (frontend) + Railway (backend) |

---

## Struktur File

```
fittrack-saas/
├── index.html        # Prototype UI (mobile-first)
├── style.css         # Design system dan styling
├── app.js            # Logic interaksi prototype
├── flowchart.html    # Product documentation + flowchart
└── README.md
```

---

## Dokumentasi Produk

Seluruh dokumentasi teknis tersedia di [flowchart.html](https://iqraa07.github.io/fittrack-saas/flowchart.html), mencakup:

1. **User Flow — Personal Trainer** — Autentikasi, manajemen klien, penyusunan jadwal
2. **User Flow — Client** — Notifikasi latihan, meal logging, progress tracking
3. **Arsitektur Sistem** — Frontend, backend, database, layanan eksternal
4. **Alur Notifikasi** — Cron job harian, alert real-time, ringkasan malam
5. **Skema Database** — Entity relationship dan relasi antar tabel
6. **Struktur Pricing** — Free, Pro (Rp 99k/bulan), Studio (Rp 249k/bulan)

Setiap bagian dilengkapi dengan diagram interaktif (Mermaid.js), tabel spesifikasi, dan catatan implementasi.

---

## Pricing Model

| Plan | Harga | Target |
|------|-------|--------|
| Free | Rp 0 | PT pemula, maks 3 klien |
| Pro | Rp 99.000/bulan | PT aktif, unlimited klien |
| Studio | Rp 249.000/bulan | Gym dengan multi-PT |

---

## Menjalankan Lokal

Clone repo dan buka langsung di browser:

```bash
git clone https://github.com/iqraa07/fittrack-saas.git
cd fittrack-saas
# Buka index.html di browser, atau gunakan local server:
npx serve .
```

---

## Roadmap

- [x] Prototype UI (mobile-first)
- [x] Product documentation dan flowchart
- [ ] Setup project Next.js + Supabase
- [ ] Auth dan user management
- [ ] Client CRUD dan profiling
- [ ] Workout scheduler API
- [ ] Meal log API + kalori calculator
- [ ] Notification service (Push + WhatsApp)
- [ ] Progress charts dan daily summary
- [ ] Beta testing

---

## Lisensi

MIT License. Silakan gunakan dan modifikasi sesuai kebutuhan.
