import Link from '../src/components/Link'

export default function Page404(){
    return(
        <div>
            <h1>Pagina 404</h1>
            <Link href="/" passHref>
                Ir para a Home
            </Link>
        </div>
    )
}