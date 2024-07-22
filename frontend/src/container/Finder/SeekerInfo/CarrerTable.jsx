import React from 'react';
import styled from 'styled-components';

// 테이블

const CarrerTable = () => {
    return (
        <Container>
            <Table>
                <TableNum></TableNum>
                <TableWhere></TableWhere>
                <ServiceFor></ServiceFor>
                <HowLong></HowLong>
            </Table>
        </Container>
    );
};

export default CarrerTable;

const Table = styled.div`
margin-top: 20px;
border: 2px solid black;
width: 100%;
height: 300px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const TableNum = styled.div`
    border-right: 1px solid black;
    width: 10%;
`
const TableWhere = styled.div`
    border-right: 1px solid black;
    width: 30%;
`
const ServiceFor = styled.div`
    border-right: 1px solid black;
    width: 10%;
`
const HowLong = styled.div`
    width: 50%;
`
const Container = styled.div`
    width: 100%;
`