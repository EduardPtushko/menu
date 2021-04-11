import styled from 'styled-components';

export const Nav = styled.nav`
    max-width: 360px;
    margin: 0 auto;
`;
export const List = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        padding: 0.5rem 0.75rem;
        border: 0;
        color: var(--clr-gold);
        background-color: transparent;
        font-weight: 500;
        font-size: 1rem;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        border-radius: var(--radius);

        :hover {
            background-color: var(--clr-gold);
            color: var(--clr-grey-10);
        }
    }
`;
