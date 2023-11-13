import Card from './components/Card'
import ThemeChanger from './components/ThemeChanger'

function App() {
  return (
    <>
    <h1 className='bg-black text-white p-5 text-lg font-bold'>Tailwind with React & Props in React</h1>
    <div className='flex flex-wrap'>
      <Card n="Two" num={2}/>
      <Card />
    </div>
    <ThemeChanger />
    </>
  )
}

export default App
