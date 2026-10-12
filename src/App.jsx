import FormTambah from "./components/FormTambah"
import Filter from "./components/Filter";
import Ringkasan from "./components/Ringkasan";
import DaftarBarang from "./components/DaftarBarang";
import { useState } from 'react'



export default function App() {
  const [text, setText] = useState('');
  const [barang, setBarang] = useState([]);
  const [option,setOption] = useState('all');
  console.log(barang)
  return (
    <main className="main-content">
      <h1 className="title-app">Daftar Belanja</h1>
      <FormTambah setText={setText} text={text} saveText={setBarang} barang={barang} />
      <Filter setOption={setOption} active={option}/>
      <DaftarBarang option={option} barang={barang}  setBarang={setBarang} / >
      <Ringkasan barang={barang} />
    </main>
  )
}
