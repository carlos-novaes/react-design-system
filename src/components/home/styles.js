import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: left;

  div#left-menu {
    background-color: #fafbfd;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div#main {
    margin: 50px 80px;

    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #4f4f4f;
    }

    div {
      display: grid;
      grid-gap: 50px;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 1rem;
      div {
        display: block;

        button {
          margin-top: 12px;
        }
      }
    }
  }
`;
