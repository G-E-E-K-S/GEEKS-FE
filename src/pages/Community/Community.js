import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import NavigationBar from "../../components/Main/NavigationBar";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import CommunityPost from "../../components/Community/CommunityPost";

const Community = () => {
  const [post, setPost] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchAllPost() {
      try {
        axios.defaults.withCredentials = true; // allow cookies
        const res = await axios.get("http://localhost:8080/post/showAll");
        setPost(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllPost();
  }, []);

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          {post.map((data) => (
            <CommunityPost
              postName={data.title}
              commentNum={data.commentCount}
              postContent={data.content}
              writeTime={data.createdDate}
              userName={`ㅅㄷㄴㅅ`}
              postImg={data.photoName}
              onClick={()=>navigate(`/post/${data.postId}`)}
            />
          ))}
        </c.SubScreen>
      </c.ScreenComponent>
      <NavigationBar type={`community`} />
    </c.Totalframe>
  );
};

export default Community;
