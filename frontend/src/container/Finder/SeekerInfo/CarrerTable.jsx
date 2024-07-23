import React from 'react';
import styled from 'styled-components';

const CarrerTable = () => {
    return (
        <Container>
            <Table>
                {/*경력 갯수 */}
                <TableNumContainer>
                    <TableNum>no.</TableNum>
                    <TableNum></TableNum>
                    <TableNum></TableNum>
                    <TableNum></TableNum>
                </TableNumContainer>
                
                {/*어디서 */}
                <TableWhereContainer>
                    <TableWhere>근무지</TableWhere>
                    <TableWhere></TableWhere>
                    <TableWhere></TableWhere>
                    <TableWhere></TableWhere>
                </TableWhereContainer>

                {/*몇등급 */}
                <TableServiceContainer>
                    <ServiceFor>대상 등급</ServiceFor>
                    <ServiceFor></ServiceFor>
                    <ServiceFor></ServiceFor>
                    <ServiceFor></ServiceFor>
                </TableServiceContainer>

                {/*기간*/}
                <TableHowContainer>
                    <HowLong>근무기간</HowLong>
                    <HowLong></HowLong>
                    <HowLong></HowLong>
                    <HowLong></HowLong>
                </TableHowContainer>
                
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
const TableNumContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
`
const TableNum = styled.div`
    width: 100%;
    height: 25%;
    border-bottom: 1px solid black;
    color: #000;
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const TableWhereContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
`
const TableWhere = styled.div`
    width: 100%;
    height: 25%;
    border-bottom: 1px solid black;
    color: #000;
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TableServiceContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
`

const ServiceFor = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    height: 25%;
    color: #000;
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TableHowContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`
const HowLong = styled.div`
    width: 100%;
    height: 25%;
    border-bottom: 1px solid black;
    color: #000;
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 116.7%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    width: 100%;
`