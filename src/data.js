export const characters = [
  {
    id: "student",
    name: "Alya",
    role: "Student",
    palette: "from-pink-200 to-rose-100",
    trait: "Hemat, teliti, sering wudhu di kampus.",
    bonus: "Bonus +4 ilmu saat memilih produk mudah dibersihkan.",
  },
  {
    id: "office",
    name: "Naira",
    role: "Office Worker",
    palette: "from-teal-100 to-pink-100",
    trait: "Aktif meeting, butuh rutinitas yang praktis.",
    bonus: "Bonus +5 seimbang saat tidak menunda shalat.",
  },
  {
    id: "creator",
    name: "Safa",
    role: "Influencer",
    palette: "from-fuchsia-100 to-amber-100",
    trait: "Suka review produk dan edukasi followers.",
    bonus: "Bonus +6 syiar saat memilih produk wudhu-friendly.",
  },
];

export const cosmetics = [
  {
    id: "tint",
    name: "Breathable Lip Tint",
    type: "Ringan",
    beauty: 16,
    halal: 15,
    knowledge: 12,
    barrier: false,
    detail: "Tipis dan mudah dibersihkan sebelum wudhu.",
  },
  {
    id: "waterproof-mascara",
    name: "Waterproof Mascara",
    type: "Tahan air",
    beauty: 22,
    halal: -16,
    knowledge: 8,
    barrier: true,
    detail: "Berisiko menghalangi air jika masih menempel saat wudhu.",
  },
  {
    id: "peel-polish",
    name: "Peel-Off Nail Color",
    type: "Bisa dilepas",
    beauty: 14,
    halal: 18,
    knowledge: 15,
    barrier: false,
    detail: "Aman untuk gaya harian jika dilepas sebelum wudhu.",
  },
  {
    id: "matte-foundation",
    name: "Longwear Foundation",
    type: "Full cover",
    beauty: 20,
    halal: -10,
    knowledge: 9,
    barrier: true,
    detail: "Perlu dibersihkan total agar air sampai ke kulit.",
  },
  {
    id: "serum-sunscreen",
    name: "Hydrating Sunscreen",
    type: "Skincare",
    beauty: 12,
    halal: 12,
    knowledge: 10,
    barrier: false,
    detail: "Pilih formula ringan yang tidak membentuk lapisan tebal.",
  },
  {
    id: "cleansing-balm",
    name: "Gentle Cleansing Balm",
    type: "Pembersih",
    beauty: 8,
    halal: 20,
    knowledge: 18,
    barrier: false,
    detail: "Membantu memastikan tidak ada lapisan kosmetik tersisa.",
  },
];

export const prayerEvents = [
  {
    id: "dhuhr",
    name: "Dhuhr Break",
    time: "12:08",
    prompt: "Kamu baru selesai kelas. Makeup masih rapi, tapi waktu shalat masuk.",
    choices: [
      {
        label: "Bersihkan dulu, lalu wudhu",
        score: { halal: 18, knowledge: 12, balance: 10 },
        feedback: "Air wudhu perlu menyentuh anggota wudhu tanpa penghalang.",
      },
      {
        label: "Langsung wudhu tanpa cek",
        score: { halal: -12, knowledge: 4, balance: 0 },
        feedback: "Produk waterproof atau longwear sebaiknya dicek dan dibersihkan dulu.",
      },
    ],
  },
  {
    id: "asr",
    name: "Asr Reminder",
    time: "15:31",
    prompt: "Ada janji foto sore. Kamu ingin tetap fresh sekaligus tenang beribadah.",
    choices: [
      {
        label: "Pakai ulang produk ringan setelah shalat",
        score: { halal: 16, knowledge: 10, balance: 12 },
        feedback: "Rutinitas setelah shalat membuat gaya dan ibadah sama-sama terjaga.",
      },
      {
        label: "Pertahankan semua produk tahan air",
        score: { halal: -10, knowledge: 3, balance: 4 },
        feedback: "Gaya boleh, tapi produk yang menghalangi air butuh perhatian ekstra.",
      },
    ],
  },
  {
    id: "maghrib",
    name: "Maghrib Choice",
    time: "18:02",
    prompt: "Hari hampir selesai. Kamu membuat konten singkat tentang tips makeup.",
    choices: [
      {
        label: "Bagikan tips wudhu-friendly",
        score: { halal: 12, knowledge: 16, balance: 8 },
        feedback: "Edukasi kecil bisa membuat kebiasaan baik terasa lebih mudah.",
      },
      {
        label: "Fokus hanya pada hasil makeup",
        score: { halal: 0, knowledge: -6, balance: 6 },
        feedback: "Konten makin lengkap jika juga menyebut cara menjaga wudhu.",
      },
    ],
  },
];
