import gasolina from "./assets/gasolina.png"
import './App.css'

export default function App() {

  const gasolinavalor = document.querySelector('#gasolina')
  const alcoolvalor = document.querySelector('#alcool')

  const calcular = () => {
    const gasolina = Number(gasolinavalor.value)
    const alcool = Number(alcoolvalor.value)
    const resultado = alcool / gasolina
    if (resultado > 0.7) {
      alert('Melhor abastecer com gasolina')
    } else {
      alert('Melhor abastecer com álcool')
    }
  }

  return (
    <div>
      <header>
        <img className="gasolina" src={gasolina} alt="" />
        <h1>Qual a melhor opção?</h1>
      </header>
      <main>
        <label htmlFor="alcool">Álcool (preço por litro)</label>
        <input type="text" inputmode="numeric" name="alcool" id="alcool" />
        <label htmlFor="gasolina">Gasolina (preço por litro)</label>
        <input type="text" inputmode="numeric" name="gasolina" id="gasolina" />

        <button onClick={calcular}>Calcular</button>
      </main>
    </div>
  )
}

