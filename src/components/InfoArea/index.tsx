import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
import * as C from "./styles";
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth,onMonthChange,income,expense}: Props) => {
    const handlePrevMonth = () =>{
        let [year,month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year),parseInt(month) - 1, 1)
        currentDate.setMonth( currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`)

    }

    const handleNextMonth = () =>{
        let [year,month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year),parseInt(month) + 1, 1)
        currentDate.setMonth( currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`)
        
    }

    return (
        <C.Container>
            <C.MonthArea>
            <Button onClick={handlePrevMonth} colorScheme='blue'><ArrowBackIcon boxSize={7}/></Button>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <Button onClick={handleNextMonth} colorScheme='blue'><ArrowForwardIcon boxSize={7}/></Button>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title={'Receitas'} value={income}></ResumeItem>
                <ResumeItem title={'Despesas'} value={expense}></ResumeItem>
                <ResumeItem color={income-expense < 0 ? 'red' : 'green'} title={'Balanço'} value={income - expense}></ResumeItem>
            </C.ResumeArea>
        </C.Container>
    )
}