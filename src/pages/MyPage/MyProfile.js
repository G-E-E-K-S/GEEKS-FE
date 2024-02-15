import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import API from "../../axios/BaseUrl";
import * as c from "../../components/Common/CommonStyle";
import styled from "styled-components";
import Header from "../../components/MyPage/Header";
import Br from "../../components/Common/Br";
import MainOtherProfile from "../../components/Main/MainOtherProfile";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";
import Loading from "../Loading";

const EditProfile = styled.div`
  padding: 16px 0px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin-bottom: 28px;
`;
const Profile = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const ProfileImg = styled.img`
  width: 72px;
  height: 72px;
  margin-right: 16px;
  border-radius: 50%;
`;
const TotalUserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 32px;
  color: #333;
`;
const Major = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  color: #525252;
`;
const MyDormitory = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 18px;
  color: #707070;
  margin-top: 28px;
  margin-bottom: 16px;
`;
const LiveYear = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  color: #d68d00;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
const LiveDormitory = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #525252;
  display: flex;
  align-items: center;
`;
const RoommateBox = styled.div`
  background-color: #fafafa;
  padding: 16px 20px;
  border-radius: 16px;
  margin-top: 16px;
`;
const MyRommate = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  color: #707070;
  margin-bottom: 12px;
`;
const NoApply = styled.div`
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #525252;
  margin-top: 63.82px;
`;
const MyProfile = () => {
  const [myProfile, setMyProfile] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    async function fetchMyProfile() {
      try {
        const res = await API.get("/member/profile");
        console.log(res.data)
        setMyProfile(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMyProfile();
  },[]);
  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <Profile>
          <ProfileImg src={myProfile.myPhotoName?.length === 0 ? BasicProfile : process.env.REACT_APP_BUCKET_BASEURL + myProfile.myPhotoName} />
          <TotalUserInfo>
            <UserName>{myProfile.myNickname}</UserName>
            <Major>{myProfile.myMajor} · {myProfile.myStudentID}</Major>
          </TotalUserInfo>
        </Profile>
        <EditProfile onClick={()=>navigate('/editprofile')}>{`프로필 수정하기`}</EditProfile>
        <Br />
        {myProfile.nickname !== null ?
          <>
            <MyDormitory>{`나의 기숙사`}</MyDormitory>
            <c.Flex>
              <LiveYear>{`2024 - 1학기`}</LiveYear>
              <LiveDormitory>{myProfile.type === 'NEW' ? '신관 거주' : myProfile.type === 'OLD' ? '구관 거주' : '행복기숙사 거주'}</LiveDormitory>
            </c.Flex>
            <RoommateBox>
              <MyRommate>{`현재 나의 룸메이트`}</MyRommate>
              {myProfile.nickname !== null &&
                <MainOtherProfile
                  onClick={()=>navigate('/detail/details/'+myProfile.roommateId)}
                  myProfile={true}
                  userprofile={myProfile?.photoName}
                  nickName={myProfile?.nickname}
                  major={myProfile?.major}
                  id={myProfile?.studentID}/>
              }
            </RoommateBox>
          </> : <NoApply>{`룸메이트 맺어진 내역이 없어요`}</NoApply>
        }
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};
export default MyProfile;
