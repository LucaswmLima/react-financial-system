import * as C from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <Tr>
      <Td>{formatDate(item.date)}</Td>
      <Td>
        <C.Category color={categories[item.category].color}>{categories[item.category].title}</C.Category>
      </Td>
      <Td>{item.title}</Td>
      <Td><C.Value color={categories[item.category].expense ? 'red' : 'green'}>R$ {item.value}</C.Value></Td>
    </Tr>
  );
};
