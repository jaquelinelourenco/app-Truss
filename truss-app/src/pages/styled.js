import styled from "styled-components"

//Home
export const ContainerHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%
`
export const Header = styled.div`
  color: white;
  background-color: black;
  height: 70px;
  width: 100vw;
  position: fixed;
  padding: 15px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  box-shadow: 3px 3px 3px 3px #5F6B6B;
  img {
    width: 90px;
  }
  button {
      color: black;
      background-color: white;
      padding: 10px;
      border-radius: 20px;
      :hover {
        cursor: pointer;
        background-color: #5F6B6B;
      }
    }
`

export const HomeFlexBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 0px;
`;