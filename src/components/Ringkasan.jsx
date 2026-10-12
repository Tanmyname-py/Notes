export default function Ringkasan({barang}) {
    const totalBarang = barang.length;
    const jumlahBarang = barang.filter(brg => brg.done).length
    return (
        <div className="ringkasan" >
            <p>{totalBarang === 0 ? 'Catatan barang kosong' : `${jumlahBarang} dari ${totalBarang} barang sudah di beli `}</p>
        </div>
    )
}