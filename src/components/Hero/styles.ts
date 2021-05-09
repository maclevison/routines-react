import styled from 'styled-components'

export const Hero = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0;
    height: 85vh;
`
export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    font-family: ivyMode, sans-serif;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 300;
    em {
        text-transform: lowercase;
    }
`
export const RightCol = styled.div`
    border-left: 1px solid var(--black);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    padding: 2rem;
`
export const HeroImage = styled.img`
    position: absolute;
    width: 60vw;
    z-index: -1;
    top: 10rem;
    right: -5rem;
`
