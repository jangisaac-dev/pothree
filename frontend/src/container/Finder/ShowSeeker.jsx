import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// 선택된 지역의 요양사를 보여주는곳

const ShowSeeker = () => {

    const [Seekers, setSeekers] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);

    const MakeTDArray = (arr,size) => {
        const result = [];
        for(let i =0;i<arr.length;i+=size){
            result.push(arr.slice(i,i+=size));
        }
        return result;
    };
    
    let SeekerArray = MakeTDArray(Seekers,8);

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
            <PersonalSeeker>
                <InfoContainer>
                    <Infodiv>
                        <Topdiv>
                            <Position>[위치]</Position>
                            <DDay>D-Day</DDay>
                        </Topdiv>
                        <OtherInfodiv>
                            <OtherInfo>시급</OtherInfo>
                            <OtherInfo>성별</OtherInfo>
                            <OtherInfo>연령</OtherInfo>
                            <OtherInfo>근무가능 시간</OtherInfo>
                        </OtherInfodiv>
                    </Infodiv>
                </InfoContainer>
                <ProfileImg>프로실 사진</ProfileImg>
            </PersonalSeeker>
            {/* {Seekers.map((seeker,index) => {
                <PersonalSeeker key={index}>
                    <Position key={index}>[{}]</Position>
                    <ProfileImg key={index}></ProfileImg>
                </PersonalSeeker>
            })} */}
            <BtnDiv>
                <PageBtn>1</PageBtn>
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
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`

const PageBtn = styled.button`
background-color: transparent;
border: none;
color: #000;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 116.7%;
cursor: pointer;
`
