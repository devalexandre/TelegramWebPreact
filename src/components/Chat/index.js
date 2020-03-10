import { h } from 'preact'
import * as S from './styled'

const Chat = props => (
    <S.Chat>
        <S.Avatar src={props.src} />
        <S.Content>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
        </S.Content>
        <S.Time>
            <S.Icon />
            <S.Date>Seg</S.Date>
        </S.Time>
    </S.Chat>
)


export default Chat