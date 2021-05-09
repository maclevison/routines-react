import * as S from './styles'

const TopBar = () => (
    <S.TopBar>
        <div>
            <S.Brand>
                <S.Logo />
                Routines
            </S.Brand>
        </div>
        <S.Navigation>
            <a href="#">Rotinas</a>
            <a href="#">Sobre</a>
            <a href="#">Indique</a>
        </S.Navigation>
    </S.TopBar>
)

export default TopBar
