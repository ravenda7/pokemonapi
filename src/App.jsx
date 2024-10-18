import Header from './components/Header';
import SearchBar from './components/SearchBar'
import MainCard from './components/MainCard';
function App() {

  return (
    <>
     <div className='bg-yellow-500 h-screen w-screen'>
      <Header />
      <SearchBar />
      <main className='pr-10 pl-10'>
        <MainCard />
      </main>
     </div>
    </>
  )
}

export default App
