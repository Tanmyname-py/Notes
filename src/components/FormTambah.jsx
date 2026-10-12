
export default function FormTambah({ setText, text,saveText,barang }) {
    function handleSubmit(e) {
        e.preventDefault();
        if(text === '') return alert('input tidak boleh kosong !');
        saveText([...barang,{ barang: text, done: false,key: Math.floor(Math.random() * 1000000) }]);
        setText("")
    }
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} name="barang"/>
            <button>+ Tambah</button> 
        </form>
    )
}