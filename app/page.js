import Intro from './components/Intro/page'
import Navbar from './components/Navbar/page'
import Products from './components/Products/page'

import style from './page.module.scss'

const Page = () => {
    return (
        <main className={style.container}>
            <Navbar/>
            <section className={style.content}>
                <Intro/>
                <Products/>
                {/* {
                    [0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0].map(item => (
                        <div><p>asd</p></div>
                    ))
                } */}
            </section>
        </main>
    )
}

export default Page