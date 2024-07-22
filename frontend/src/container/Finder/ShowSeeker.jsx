import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// 선택된 지역의 요양사를 보여주는곳

const ShowSeeker = ({lastAddress}) => {

const DommyData = [
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "60세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "61세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "62세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "63세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "64세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "65세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "66세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "67세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "68세",
        workHours: "9:00-18:00",
    },
    {
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "Gay",
        age: "69세",
        workHours: "9:00-18:00",
    },
    ];

    const [Seekers, setSeekers] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);

    const MakeTDArray = (arr,size) => {
        const result = [];
        for(let i =0;i<arr.length;){
            result.push(arr.slice(i,i+=size));
        }
        return result;
    };
    
    let SeekerArray = MakeTDArray(DommyData,5);

    // useEffect(() => {
    //     const fetchData = async() => {
    //         try {
    //             const response = await axios.get('');
    //             setSeekers(response.data);
    //         } catch (error) {
    //             throw error;
    //         }
    //     }
    //     fetchData();
    // },[]);

    const handlePage = (idx) => {
        setCurrentPage(idx);
    }
    

    return (
        <SeekerList>
            {SeekerArray.length > 0 ? (
                SeekerArray[currentPage].map(data => (
                    <PersonalSeeker>
                        <InfoContainer>
                            <Infodiv>
                                <Topdiv>
                                    <Position>{data.address}</Position>
                                    <DDay>D-Day</DDay>
                                </Topdiv>
                                <OtherInfodiv>
                                    <OtherInfo>시급 : {data.hourMoney}</OtherInfo>
                                    <OtherInfo>성별 : {data.gender}</OtherInfo>
                                    <OtherInfo>연령 : {data.age}</OtherInfo>
                                    <OtherInfo>근무 가능 시간 : {data.workHours}</OtherInfo>
                                </OtherInfodiv>
                            </Infodiv>
                        </InfoContainer>
                        <ProfileImg>프로실 사진</ProfileImg>
                    </PersonalSeeker>
                ))
            ):<div>아무것도 없어요</div>}
            
            <BtnDiv>
            {SeekerArray.length > 0 ? (
                SeekerArray.map((data, pageidx) => (
                    <PageBtn onClick={() => {
                        handlePage(pageidx)
                    }}>{pageidx+1}</PageBtn>
                ))
            ):<div>아무것도 없어요</div>}
            </BtnDiv>
        </SeekerList>
    );
};

export default ShowSeeker;


const SeekerList = styled.div`
    width: 100%;
`

const PersonalSeeker = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 110px;
border-top: 2px solid black;
border-bottom: 2px solid black;
justify-content: center;
align-items: center;
`

const InfoContainer = styled.div`
width: 70%;
justify-content: space-between;
`

const Position = styled.span`
cursor: pointer;
color: #000;
text-align: center;
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const ProfileImg = styled.div`
width: 75px;
height: 75px;
border-radius: 20px;
border: 1px solid black;
justify-self: flex-end;
`

const DDay = styled.div`
margin-left: 5px;
background-color:lightgray ;
border-radius: 20px;
width: 40px;
height: 20px;
font-size: 10px;
color: #824343;
font-family: "Open Sans";
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Topdiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;
`

const Infodiv = styled.div`
    display: flex;
    flex-direction: column;
`

const OtherInfodiv = styled.div`
display : flex;
flex-direction: column;
`

const OtherInfo = styled.span`
color: #000;
font-family: "Open Sans";
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const BtnDiv = styled.div`
margin-top: 10px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`

const PageBtn = styled.button`
border-left: 1px solid black;
border-right: 1px solid black;
border-top: none;
border-bottom:none;
background-color: transparent;
color: #000;
text-align: center;
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
cursor: pointer;
`
