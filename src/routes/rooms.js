import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header'
import { Searchroom } from '../components/search rooms/searchroom';
import { Section } from '../components/section/section'


function Rooms() {
    return(
        <>
        <div>
            <Header />
            <Section />
            <Searchroom />
            <Footer />
        </div>
       
        </>
    )
}

export{Rooms}