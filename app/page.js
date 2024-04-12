import Intro from './components/Intro/page'
import Navbar from './components/Navbar/page'
import Products from './components/Products/page'
import Footer from './components/Footer/page'

import style from './page.module.scss'

const Page = () => {
    return (
        <main className={style.container}>
            <Navbar/>
            <section className={style.content}>
                <Intro/>
                <Products/>
                <Footer/>
            </section>
        </main>
    )
}

export default Page