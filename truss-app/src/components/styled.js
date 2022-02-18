import styled from "styled-components";

//TodoList
export const TodoContainer = styled.div`
    display: flex;
    padding-top: 150px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: transparent;
    font-size: 10px;
    border-radius: 15px;

    img{
        width: 100px;
    }

`
//Todo

export const List = styled.div`
    font-size: 16px;
    margin: 5px;
`

//TodoForms

export const ButtoRadio = styled.div`
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
//Imag

export const Container = styled.ul`
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;