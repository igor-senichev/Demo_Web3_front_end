import styled from "styled-components"
import "../../assets/styles/variables.scss"

export const Card = styled.div`
  padding: 18px 20px;
  border-radius: 25px;
  // background-color: white;
  background-color: #121212;

  @media (prefers-color-scheme: dark) {
    background-color: #121212;
  }
`

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

export const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? "#6e6e6e" : "var(--tg-theme-button-color)"};
  border: 0;
  border-radius: 16px;
  padding: 10px 20px;
  color: var(--tg-theme-button-text-color);
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#6e6e6e" : "var(--tg-theme-button-color-hover)"};
  }
`

export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const Input = styled("input")`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;

  @media (prefers-color-scheme: dark) {
    border: 1px solid #fefefe;
  }
`
