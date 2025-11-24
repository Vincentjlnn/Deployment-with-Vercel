import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  // Mengambil semua data mahasiswa dari database
  const mahasiswa = await prisma.mahasiswa.findMany();

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Daftar Mahasiswa</h1>
      <p>Data ini diambil dari SQLite database:</p>
      
      <ul style={{ marginTop: "20px" }}>
        {mahasiswa.map((mhs) => (
          <li key={mhs.id} style={{ marginBottom: "10px", fontSize: "18px" }}>
            {mhs.id}. <strong>{mhs.nama}</strong>
          </li>
        ))}
      </ul>

      {mahasiswa.length === 0 && (
        <p style={{ color: "red" }}>Belum ada data mahasiswa.</p>
      )}
    </div>
  );
}