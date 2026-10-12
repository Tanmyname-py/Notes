export default function Filter({ setOption,active }) {
    return (
        <div className="option-filter">
           <button className={`btn ${active === 'all' ? 'active' : '' }`.trim()} onClick={() => setOption('all') }>Semua</button>
           <button className={`btn ${active === 'dones' ? 'active' : ''}`.trim()} onClick={() => setOption('dones')}>Selesai</button>
           <button className={`btn ${active === 'undones' ? 'active' : ''}`.trim()} onClick={() => setOption('undones')}>Belum Selesai</button>
        </div>
    );
}