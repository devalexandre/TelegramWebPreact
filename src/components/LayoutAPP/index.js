import { h } from 'preact'
import { GlobalReset } from '../GlobalReset/styled'
import * as S from './styled'


const Layout = (props) => (

   
<S.Layout> 
<GlobalReset />
    { props.children } </S.Layout>

)

export default Layout