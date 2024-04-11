import Intro from './components/Intro/page'
import Navbar from './components/Navbar/page'
import Products from './components/Products/page'

import style from './page.module.scss'

const Page = () => {
    return (
        <main className={style.container}>
            <Navbar/>
            <Intro/>
            <Products/>
        </main>
    )
}

export default Page