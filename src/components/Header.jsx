import logo from '../assets/pokeball.png'
const Header = ()=> {

    return(
        <div className='h-24 flex items-center'>
            <div className='flex flex-row gap-3 mt-[-10px] ml-10 items-center'>
                <img className='w-10' src={logo} alt="" />
               <h1 className='font-rubik font-semibold text-lg text-slate-200'>PokieAPI</h1>
            </div>
        </div>
    )
};

export default Header;