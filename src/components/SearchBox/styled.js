import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  margin: 10px auto;
  width: 100%;
`;

export const Button = styled.button`
  display: inline-block;
  color: #fa5a54;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #fa7a54;
  border-radius: 10px;
  display: block;
  height: 50px;
  min-width: 100px;
  outline-style: none;
  :hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  color: #fa5a54;
  font-size: 1em;
  border: 2px solid gray;
  border-radius: 10px;
  background: whitesmoke;
  width: 600px;
  height: 30px;
  outline-style: none;
  @media (max-width: 1279px) {
    width: 300px;
  }
  @media (max-width: 767px) {
    width: 150px;
  }
`;
