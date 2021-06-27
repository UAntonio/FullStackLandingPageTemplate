import { faCalendarAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Marginer } from '../marginer';
import { Button } from '../../components/button';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import { SCREENS } from '../responsive';


const CardContainer = styled.div`
min-height: 4.3en;
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
${tw`
flex
justify-center
items-center
rounded-md
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-9
md:pr-9
`}
`;

const ItemContainer = styled.div`
${tw`
flex relative
`}
`;

const Icon = styled.div`
${tw`
text-red-500
fill-current
text-xs
md:text-base
mr-1
md:mr-3
`}
`;

const Name = styled.div`
user-select:none;
${tw`
text-gray-600
text-xs
md:text-sm
cursor-pointer
select-none
`}`;

const LineSeprator = styled.div`
width:2px;
height:45%;
${tw`
bg-gray-300
mr-2
ml-2
md:mr-5
md:ml-5
`}`;

const DateCalendar = styled(Calendar)<{offset: boolean}>`
user-select:none;
position: absolute;
max-width: none;
top:5em;
left: -2em;

${({offset}) => offset && css`
left: -2em;
`}

@media(min-width: ${SCREENS.md}){
    top:3.5em
    left: -2em
}
`;

const SmallIcon = styled.span`
${tw`
text-gray-500
fill-current
text-xs
md:text-base
ml-1
`}`;


export function BookCard() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);

    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

    const toggleopenStartDateCalendar = () => {
        setIsStartCalendarOpen(!isStartCalendarOpen)
        if(isReturnCalendarOpen){
            setIsReturnCalendarOpen(false);
        }
    }
    const toggleopenReturnDateCalendar = () => {
        setIsReturnCalendarOpen(!isReturnCalendarOpen)
        if(isStartCalendarOpen){
            setIsStartCalendarOpen(false);
        }
    }
    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleopenStartDateCalendar}>Pick up Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
            {isStartCalendarOpen && <DateCalendar offset={false} value={startDate} onChange={setStartDate} />}
        </ItemContainer>
        <LineSeprator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleopenReturnDateCalendar}>Return Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
                </SmallIcon>
            {isReturnCalendarOpen && <DateCalendar offset={true} value={returnDate} onChange={setReturnDate} />}

        </ItemContainer>
        <Marginer direction='horizontal' margin='2en' />
        <Button text="Book your Ride" />

    </CardContainer>
}
