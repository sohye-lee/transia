import styled from 'styled-components';

export const Wrapper = styled.nav`
    background: transparent;
    height: 90px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--White);
`;

export const Brand = styled.div`
    flex-basis: 20%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 50%;
    width: auto;

    img {
        height: 100%;
        margin-right: 12px;
    }

    h2 {
        font-weight: 100;
        letter-spacing: 1px;
    }
`;

export const Toggle = styled.div`
    flex-basis: 80%;
    background: transparent;
    height: 70%;
    width: 70px;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    .icon {
        margin-left: 30px
    }
`;



