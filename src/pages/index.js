import { h }from 'preact'
import SEO  from '../components/SEO'
import Layout   from '../components/LayoutAPP'
import Content   from '../components/Content'
import Navbar   from '../components/Navbar'
import Sidebar   from '../components/Sidebar'
import Chat   from '../components/Chat'

const Index = () =>  (

<SEO title="Telegram" description="Telegram">
    <Layout>
        <Content>
            <Navbar />
            <Sidebar>
                <Chat 
                src='assets/papodedev.jpg' 
                title="Papo de dev" 
                description="papo de dev sempre on" />

                <Chat 
                src='assets/gatsby.jpg' 
                title="GatbyJS" 
                description="StrapiJS CMS" />


                <Chat 
                src='assets/adonisjs.jpg' 
                title="AdonisJS" 
                description="CRUD com Adonis 5" />


                <Chat 
                src='assets/AdCommunity.jpg' 
                title="AdCommunity" 
                description="Curso na udemy" />
            </Sidebar>
        </Content>
    </Layout>
    </SEO>
)

export default Index
     
     
