import Navbar from './components/Navbar/page'
import style from './page.module.scss'

const Page = () => {
    return (
        <main className={style.container}>
            <Navbar/>
            <section className={style.content}>
                {
                    [0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 , 0, 0, 0, 0, 0].map(item => (
                        <div><p>asd</p></div>
                    ))
                }
            </section>
        </main>
    )
}

export default Page