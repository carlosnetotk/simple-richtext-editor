import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

`;
export const EditorButton = styled.button`

    margin-left: 10px;
    cursor: pointer;
    border: none;
    outline: none;
    background: #34495e;
    color: white;
    font-size: 16px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: transform 300ms ease;

    &:first-child {
        margin-left: 0;
    }

    :hover {
        transform: translateY(-10px);
    }

`;