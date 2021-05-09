import * as S from './styles'

const Hero = () => (
    <S.Hero>
        <S.LeftCol>
            <div>
                o que criativos <br /> fazem <em>diariamente?</em>
            </div>
            <div>
                a rotina diária de profissionais Para inspirar a sua e deixa-la
                ainda mais produtiva.
            </div>
        </S.LeftCol>
        <S.RightCol>
            <img src="/images/text-circle.svg" alt="" />
            <S.HeroImage src="/images/hero-circle.png" alt="" />
        </S.RightCol>
    </S.Hero>
)

export default Hero
