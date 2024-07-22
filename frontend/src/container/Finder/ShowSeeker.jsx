import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// 선택된 지역의 요양사를 보여주는곳

const ShowSeeker = () => {

const DommyData = [
    {
        id:1,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "남",
        age: "60세",
        workHours: "9:00-18:00",
    },
    {
        id:2,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "남",
        age: "61세",
        workHours: "9:00-18:00",
    },
    {
        id:3,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "남",
        age: "62세",
        workHours: "9:00-18:00",
    },
    {
        id:4,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "남",
        age: "63세",
        workHours: "9:00-18:00",
    },
    {
        id:5,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "여",
        age: "64세",
        workHours: "9:00-18:00",
    },
    {
        id:5,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "여",
        age: "65세",
        workHours: "9:00-18:00",
    },
    {
        id:6,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "여",
        age: "66세",
        workHours: "9:00-18:00",
    },
    {
        id:7,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "여",
        age: "67세",
        workHours: "9:00-18:00",
    },
    {
        id:8,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "여",
        age: "68세",
        workHours: "9:00-18:00",
    },
    {
        id:9,
        address: "[ls로_143]",
        hourMoney: 3000,
        gender: "여",
        age: "69세",
        workHours: "9:00-18:00",
    },
    ];

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);

    const MakeTDArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    let SeekerArray = MakeTDArray(DommyData, 5);

    const handlePage = (idx) => {
        setCurrentPage(idx);
    };

    const handlePath = (id) => {
        navigate(`/seekerInfo?id=${id}`);
    };

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

    return (
        <SeekerList>
            {SeekerArray.length > 0 ? (
                SeekerArray[currentPage].map((data) => (
                    <PersonalSeeker key={data.id}>
                        <InfoContainer onClick={() => handlePath(data.id)}>
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
                        <ProfileImg onClick={() => handlePath(data.id)}>프로필 사진</ProfileImg>
                    </PersonalSeeker>
                ))
            ) : (
                <div>아무것도 없어요</div>
            )}

            <BtnDiv>
                {SeekerArray.length > 0 ? (
                    SeekerArray.map((_, pageidx) => (
                        <PageBtn key={pageidx} onClick={() => handlePage(pageidx)}>
                            {pageidx + 1}
                        </PageBtn>
                    ))
                ) : (
                    <div>아무것도 없어요</div>
                )}
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
cursor: pointer;
width: 60%;
justify-content: space-between;
`

const Position = styled.span`
color: #000;
text-align: center;
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
`

const ProfileImg = styled.div`
cursor: pointer;
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
