import styled from 'styled-components'

export const TopBar = styled.div`
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
export const Navigation = styled.div`
    border-left: 1px solid var(--black);
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
`
export const Brand = styled.div`
    display: flex;
    font-family: ivyMode, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1.5rem;
    align-items: center;
    padding: 2rem 0;
`
export const Logo = styled.div`
    width: 23px;
    height: 23px;
    background-image: linear-gradient(
        180deg,
        rgba(248, 131, 113, 1),
        rgba(248, 131, 113, 0) 96%
    );
    border-radius: 9999px;
    margin-right: 1rem;
`
