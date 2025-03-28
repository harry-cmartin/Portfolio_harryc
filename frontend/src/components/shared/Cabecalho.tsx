import Image from 'next/image'
import Container from './Container'
import Link from 'next/link'
import Menu from './Menu'

export default function Cabecalho() {
    return (
        <header className="w-full flex items-center h-16 bg-black/40">
            <Container classnames="flex-1 flex justify-center sm:justify-between items-center">
                <div className='flex items-center gap-20'>
                    <Link href="/" className="hidden sm:block">
                        <Image src="/preview.png" alt="Logo" width={80} height={0} />
                    </Link>
                    <Menu />
                </div>
                
                <div className='hidden sm:flex items-center '>
                    <Link
                        href="https://www.linkedin.com/in/harryson-campos-martins-166b09277/?trk=opento_sprofile_topcard"
                        target="_blank"
                        className="bg-green-500 rounded-full px-7 py-1 text-sm font-bold   "
                    >
                        Perfil
                    </Link>
                </div>
            </Container>
        </header>
    )
}
