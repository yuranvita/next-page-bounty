import Image from 'next/image'

function Header() {
    return (
        <header className="h-20 flex justify-center p-8 items-center mb-10">
            <nav className='flex itens-center absolute left-10'>  <a href='/app/map'>QUEIMADAS</a></nav>
            <img className="animate-pulse absolute justify-center items-center mt-[125px] max-w-[190px] max-h-[190px]" src="/logo.png" alt="logo" />
            <nav className="justify-center gap-4 flex right-0 absolute">
                <a></a>
                <a>Fale conosco</a>
                <a></a>
            </nav>
        </header>

    )
}

export default Header 