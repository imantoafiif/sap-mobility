import Intro from './components/Intro/page'
import Navbar from './components/Navbar/page'
import style from './page.module.scss'

const Page = () => {
    return (
        <main className={style.container}>
            <Navbar/>
            {/* <Intro/> */}
        </main>
    )
}

export default Page