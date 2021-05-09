import styled from 'styled-components'

export const Footer = styled.div`
    border-top: 1px solid var(--black);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0;
    text-transform: uppercase;
    padding: 2em;
    font-size: 0.85rem;
`
export const RightCol = styled.div`
    display: flex;
    justify-content: flex-end;
    span,
    a {
        display: inline-block;
        padding: 0 0.25rem;
        letter-spacing: 1px;
    }
`
