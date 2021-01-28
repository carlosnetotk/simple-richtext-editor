import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
        &:last-child {
            width: 100%;
            height: 100%;
            margin-top: 20px;
            color: white;
            border-radius: 10px;
            background: #2c3e50;
            padding: 20px;
        }
    }


`;