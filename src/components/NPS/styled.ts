import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const OptionGrid = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 100px;
  font-size: 35px;
  text-transform: uppercase;

`
export const Subtitle = styled.h2`
  color: white;
  margin-bottom: 32px;
  font-size: 30px;
`

export const Button = styled.button`
    background-color: ${props => props.color};
    width: 80px;
    height: 80px;
    border: solid 4px transparent;
    border-radius: 0.5rem;
    margin: 0.2rem;
    font-weight: bold;
    font-size: 2rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    &:focus {
      border:solid 4px white;
    }
`
export const ConfirmButton = styled.button`
  padding: 25px;
  border:0;
  border-radius: 2px;
  background-color: #62B54E;
  color:white;
  position: absolute;
  bottom: 40px;
  right: 50px;
  text-transform: uppercase;
  font-size: 20px;
  &:disabled{
    background-color: #ccc;
  }

`
