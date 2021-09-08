import styled, { css } from 'styled-components';

export const Authdiv = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center; //수정
  margin-top: 6rem;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & form input {
    margin-top: 2rem;
    width: 100%;
    border: 0;
    border-bottom: 1.2px solid #f5df4d;
    outline: none;
    line-height: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    &:focus {
      border-bottom: 1.2px solid #fbbf65;
    }
    ::placeholder {
      color: #7e7e7e;
    }
  }

  & .btn {
    margin-top: 3rem;
    border: none;
    background-color: #f5df4d;
    color: white;
    font-size: 24px;
    width: 100%;
    cursor: pointer;
    align-self: center;
  }

  & .toggle {
    margin-top: 1.5rem;
    color: #6f6f6f;
    font-size: 18px;
  }

  & .googlebtn {
    width: 100%;
    margin-top: 1.5rem;
    line-height: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 6px;
    background-color: white;
    border: 1.2px solid #7e7e7e;
    align-content: flex- start;

    & .icon {
      position: relative;
      right: 20px;
    }
  }
`;
