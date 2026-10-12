export default function DaftarBarang({ option,barang,setBarang }) {
    const barangDone = barang.filter(brg => brg.done);
    const barangUndone = barang.filter(brg => !brg.done)
      function changeStatus(id) {
        setBarang(
          barang.map((brg) => brg.key === id ? { ...brg, done: !brg.done } : brg)
        )
      }
    
      function deleteBarang (id) {
        setBarang(
          barang.filter(brg => brg.key !== id)
        )
    }
    if (option === 'all') {
        return (
            <ul className="daftar-barang">
                {barang.map(itm => (
                    <li key={itm.key}>
                        <input type="checkbox" onChange={() => changeStatus(itm.key)} checked={itm.done}  />
                        <span className={`barang ${itm.done ? 'done' : 'undone'}`}>{itm.barang}</span><span className="material-symbols-outlined delete" onClick={() => deleteBarang(itm.key)}>delete</span></li>
                ))}
            </ul>
        )
    }
    else if (option === 'dones') {
        return (
            <ul className="daftar-barang">
               {barangDone.map(itm => (
                    <li key={itm.key}>
                        <input type="checkbox" onChange={() => changeStatus(itm.key)} checked={itm.done} />
                        <span className={`barang ${itm.done ? 'done' : 'undone'}`}>{itm.barang}</span><span className="material-symbols-outlined delete" onClick={() => deleteBarang(itm.key)}>delete</span></li>
                ))}
            </ul>
        )
    }
    else if (option === 'undones') {
        return (
            <ul className="daftar-barang">
               {barangUndone.map(itm => (
                    <li key={itm.key}>
                        <input type="checkbox" onChange={() => changeStatus(itm.key)} checked={itm.done} />
                        <span className={`barang ${itm.done ? 'done' : 'undone'}`}>{itm.barang}</span><span className="material-symbols-outlined delete" onClick={() => deleteBarang(itm.key)}>delete</span></li>
                ))}
            </ul>
        )
    }
}