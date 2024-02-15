import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as c from "../../components/Common/CommonStyle";
import API from "../../axios/BaseUrl";
import Header from "../../components/MyPage/Header";
import CommunityPost from "../../components/Community/CommunityPost";
import moment from "moment";
import "moment/locale/ko";
import Loading from "../Loading";

const ScrapPost = () => {
  const [scrapPost, setScrapPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchScrapPost() {
      try {
        const res = await API.get("/post/scrap/history");
        setScrapPost(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchScrapPost();
  }, []);
  return (
    loading ? <Loading/> : (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header subtitle={`스크랩한 글`}/>
        {scrapPost.map((post) => (
          <CommunityPost
            padding={'10px 0'}
            dot={false}
            onClick={() => navigate(`/post/${post.postId}`)}
            postName={post.title}
            commentNum={post.commentCount}
            postContent={post.content}
            isLike={post.likeCount > 0 ? true : false}
            likeNum={post.likeCount}
            writeTime={moment(post.createdDate).format('MM.DD')}
          />
        ))}
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};

export default ScrapPost;
