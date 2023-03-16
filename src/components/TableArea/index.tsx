import * as C from "./styles";
import { TableItem } from '../TableItem'
import { Item } from "../../types/Item";
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
import { items } from "../../data/items";

type Props = {
  list: Item[];
};

export const TableArea = ({list}: Props) => {
  return (

        <C.TableAreaContainer>
      <TableContainer>
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th w={"300px"}>Data</Th>
              <Th w={"150px"}>Categoria</Th>
              <Th w={"600px"}>Título</Th>
              <Th w={"150px"}>Valor</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              list.map((item, index) => (
                <TableItem key={index} item={item}/>
              ))
            }
            
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
      </C.TableAreaContainer>
  );
};
