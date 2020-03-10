import styled from 'styled-components'
import { Pin } from '@styled-icons/entypo/Pin'
export const Chat = styled.div`
display:flex;
width:100%;
height:10vh;
font: 12px/18px 'Open Sans',"Lucida Grande","Lucida Sans Unicode",Arial,Helvetica,Verdana,sans-serif;
&:hover{
    background-color:#f2f6fa;
}
`

export const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
padding-top:0.5rem;
padding-bottom:0.5rem;
padding-left:0.8rem;
padding-right:0.8rem;
`

export const Content = styled.div`
display:flex;
width:50%;
flex-direction:column;
padding-top:0.5rem;
`
export const Title = styled.h3`
width:100%;
font-weight: bold;
`

export const Description = styled.p`
width:100%;
color:#698192;
font-size:10px;
font-weight: bold;
`

export const Time = styled.div`
display:flex;
flex-direction:column;
width:30px;
height:30px;
padding:3px;

`
export const Icon = styled(Pin)`
width:10px;
color:#b6d3e9;
`

export const Date = styled.p`
width:10px;
color:#b3b3b3;
`
