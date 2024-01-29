import React, { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
import API from "../../axios/BaseUrl";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Main/Header";
import NavigationBar from "../../components/Main/NavigationBar";
import MainOtherProfile from "../../components/Main/MainOtherProfile";
import HomeBox from "../../components/Main/HomeBox";
import Popup from "../../components/Common/Popup";
import MainPost from "../../components/Main/MainPost";
import checklist from "../../assets/img/Home/checkList.svg";
import rule from "../../assets/img/Home/Rule.svg";
import stayOut from "../../assets/img/Home/stayOut.svg";
import dormiNoti from "../../assets/img/Home/dormiNoti.svg";
import Close from "../../assets/img/Home/close.svg";
import Find from "../../assets/gif/find.gif";
import BasicProfile from "../../assets/img/MyPage/basicProfile.svg";

const System = styled.div`
  width: 100%;
  display: flex;
  margin: 4.26vh 1.28vw 0 1.28vw;
  & > :last-child {
    margin-right: 0; /* 마지막 이미지에는 간격을 적용하지 않음 */
  }
`;
const Icons = styled.div`
  width: 16.41vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 7.17vw;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const Icon = styled.img`
  margin-bottom: 8px;
`;
const IconText = styled.div`
  color: #333;
  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
const FindRoommateTxt = styled.div`
  white-space: pre-wrap;
  color: #707070;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
  margin-top: 1.89vh;
`;
const EnrollRule = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background: #ffc700;
  margin-top: 1.89vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #1a1a1a;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
`;
const ShowReviewBox = styled.div`
    width: 100%:
    height: 86px;
    padding: 20px 5.12vw;
    border-radius: 20px;
    background: #FCEDE8;
    margin-top: 24px;
`;
const ReviewTxt = styled.div`
  color: #1a1a1a;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 4px;
`;
const CloseImg = styled.img`
  width: 20px;
  height: 20px;
`;
const MoreSecurityTxt = styled.div`
  color: #525252;
  font-size: 0.875;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;
const PopularPostBox = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
  padding: 4px 1.02vw;
  border-radius: 12px;
  background: #f7f7f7;
  margin-bottom: 20px;
  position: relative;
`;
const PopularPostText = styled.div`
  width: calc(100% / 2);
  height: 100%;
  ${(props) => props.toggle && "position: absolute; left: 0; top: 0"};
  background-color: ${(props) => props.toggle && "#FFF"};
  color: ${(props) => (props.toggle ? "#1A1A1A" : "#949494")};
  font-weight: ${(props) => (props.toggle ? "600" : "500")};
  border-radius: ${(props) => props.toggle && "8px"};
  box-shadow: ${(props) => props.toggle && "2px 2px 4px 0px rgba(0, 0, 0, 0.04)"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.toggle && "transition: transform 0.5s ease, opacity 0.5s ease"};
  
  transform: ${(props) => (props.toggle ? (props.isWeeklyPost ? "translateX(100%)" : "translateX(0%)") : null)};

`;

// transition: transform 0.5s ease; /* Added transition property */

//   transform: ${(props) => (!props.isWeeklyPost ? "translateX(100%)" : "translateX(-100%)")};
// const PopularPostText = styled.div`
//   width: calc(100% / 2);
//   height: 100%;
//   ${(props) => props.toggle && "position: absolute; top: 1px; left: 0;"}
//   background-color: ${(props) => props.toggle && "#FFF"};
//   color: ${(props) => (props.toggle ? "#1A1A1A" : "#949494")};
//   font-weight: ${(props) => (props.isWeeklyPost ? "600" : "500")};
//   border-radius: ${(props) => props.toggle && "8px"};
//   box-shadow: ${(props) =>
//     props.toggle && "2px 2px 4px 0px rgba(0, 0, 0, 0.04)"};
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
const IconBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FindIcon = styled.img`
  width: 120px;
  height: 120px;
`;
const Home = () => {
  const [isShowReview, setIsSHowReiew] = useState(true);
  const [isWeeklyPost, setIsWeeklyPost] = useState("live");
  const [showPopup, setShowPopup] = useState(false);
  const [isExist, setIsExist] = useState(true);
  const [point, setPoint] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handlePage = () => {
    navigate("/liverule");
  };
  const isNavigate = () => {
    isExist && navigate("/roommate");
  };

  useEffect(() => {
    async function fetchEmailPage() {
      try {
        const res = await API.get("/home/main");
        setLoading(false);
        setIsExist(res.data.exist);
        setPoint(res.data.points);
        setPosts(res.data.posts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEmailPage();
  }, []);

  // useEffect(() => {
  //   setActive(true);

  //   const timeId = setTimeout(() => {
  //     setActive(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeId);
  //   };
  // }, [isWeeklyPost])

  const caclTime = (uploadTime) => {
    moment.locale("ko"); // 언어를 한국어로 설정
    return moment(uploadTime).fromNow(`A`) + "전"; // 지금으로부터 계산
  };
  return (
    !loading && (
      <c.Totalframe background={`#FAFAFA`}>
        <c.ScreenComponent>
          <c.SubScreen>
            <Header onClick={() => navigate("/search")} />
            {showPopup && (
              <Popup
                message={`곧 만날 수 있으니 조금만 기다려 주세요!`}
                setShowPopup={setShowPopup}
                top={`9.5vh`}
              />
            )}
            <System>
              <Icons onClick={() => setShowPopup(true)}>
                <Icon src={checklist} />
                <IconText>체크리스트</IconText>
              </Icons>
              <Icons onClick={() => handlePage()}>
                <Icon src={rule} />
                <IconText>생활 규칙</IconText>
              </Icons>
              <Icons>
                <Icon src={stayOut} />
                <IconText>외박 신청</IconText>
              </Icons>
              <a
                href={"https://www.smu.ac.kr/dormi2/board/notice.do"}
                target="_blank"
              >
                <Icons>
                  <Icon src={dormiNoti} />
                  <IconText>기숙사 공지</IconText>
                </Icons>
              </a>
            </System>
            <HomeBox
              name={`은진님과 딱 맞는\n룸메이트를 찾아드려요`}
              marginTop={`3.79vh`}
              marginBottom={isExist ? `4.73vh` : `1.42vh`}
              height={`max-content`}
              onClick={() => isNavigate()}
            >
              {isExist ? (
                point.map((opponent, index) => (
                  <MainOtherProfile
                    nickName={opponent.nickname}
                    userprofile={
                      opponent.photoName.length === 0
                        ? BasicProfile
                        : opponent.photoName
                    }
                    major={opponent.major}
                    id={opponent.studentID}
                    score={opponent.point}
                    smoke={opponent.smoke}
                    marginBottom={point.length === index + 1 ? "0px" : "36px"}
                  />
                ))
              ) : (
                <div>
                  <IconBox>
                    <FindIcon src={Find} />
                  </IconBox>
                  <FindRoommateTxt>{`생활 습관을 등록하고\n나와 딱 맞는 룸메이트를 찾아보세요!`}</FindRoommateTxt>
                  <EnrollRule
                    onClick={() => navigate("/lifestyle")}
                  >{`생활습관 등록하기`}</EnrollRule>
                </div>
              )}
            </HomeBox>
            {isShowReview && (
              <ShowReviewBox>
                <c.SpaceBetween>
                  <ReviewTxt>{`긱스 이용 후기를 남겨주세요!`}</ReviewTxt>
                  <CloseImg src={Close} onClick={() => setIsSHowReiew(false)} />
                </c.SpaceBetween>
                <MoreSecurityTxt>{`더 멋지게 보완해서 찾아올게요`}</MoreSecurityTxt>
              </ShowReviewBox>
            )}
            <HomeBox
              name={`이런 글은 어떠세요?`}
              marginTop={`2.84vh`}
              marginBottom={`3.31vh`}
              height={`max-content`}
            >
              {/* <PopularPostBox>
              <PopularPostText
                isWeeklyPost={isWeeklyPost === "live"}
                onClick={() => setIsWeeklyPost("live")}>{`실시간 인기글`}</PopularPostText>
              <PopularPostText
                isWeeklyPost={isWeeklyPost === "weekly"}
                onClick={() => setIsWeeklyPost("weekly")}>{`주간 인기글`}</PopularPostText>
            </PopularPostBox> */}
              <PopularPostBox>
                <PopularPostText onClick={() => setIsWeeklyPost("live")}>
                {`실시간 인기글`}
                </PopularPostText>
                <PopularPostText onClick={() => setIsWeeklyPost("weekly")}>
                  {`주간 인기글`}
                </PopularPostText>
                <PopularPostText 
                toggle={true} 
                isWeeklyPost={isWeeklyPost === 'weekly'}
                className={active ? 'active' : ''}
                >
                  {isWeeklyPost === "weekly"? '주간 인기글' : '실시간 인기글'}
                </PopularPostText>
              </PopularPostBox>
              {isWeeklyPost === "live" &&
                posts.map((post, index) => (
                  <MainPost
                    text={post.title}
                    comment={post.commentCount}
                    likeCnt={post.likeCount}
                    postContent={post.content}
                    UploadTime={caclTime(post.createdDate)}
                    marginBottom={posts.length === index + 1 ? "0px" : "24px"}
                  />
                ))}
                {isWeeklyPost === "weekly" &&
                posts.map((post, index) => (
                  <MainPost
                    text={post.title}
                    comment={post.commentCount}
                    likeCnt={post.likeCount}
                    postContent={post.content}
                    UploadTime={caclTime(post.createdDate)}
                    marginBottom={posts.length === index + 1 ? "0px" : "24px"}
                  />
                ))}
            </HomeBox>
          </c.SubScreen>
        </c.ScreenComponent>
        <NavigationBar type={`home`} />
      </c.Totalframe>
    )
  );
};
export default Home;
