import styled from "styled-components";
import { categories } from "../../data/categories";

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
  width: calc(100%);
  text-align: center;
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
