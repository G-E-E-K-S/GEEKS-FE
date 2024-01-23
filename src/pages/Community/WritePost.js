import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import AddPhoto from "../../assets/img/Community/addPhoto.svg";

const DoneBtn = styled.div`
  border-radius: 8px;
  background: #ffc700;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px; /* 150% */
  display: inline-flex;
  padding: 8px 3.07vw;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const InputTitle = styled.input`
  width: 100%;
  height: 32px;
  margin: 16px 0 20px 0;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: #525252;
  &::-webkit-input-placeholder {
    color: #d0d0d0;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
`;
const Line = styled.div`
  background-color: #efefef;
  height: 1px;
  width: 100%;
  margin-bottom: 20px;
`;
const InputContent = styled.input`
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  height: 216px;
  vertical-align: top;
  margin-bottom: ${(props) =>
    props.contentHeight > 216 ? "clac(60px + contentHeight - 168px)" : "60px"};
  color: #525252;
  &::-webkit-input-placeholder {
    color: #d0d0d0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
`;
const InputFile = styled.input`
  display: none;
`;
const ShowImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  margin-left: 12px;
`;
const Community = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);

    const handleFile = (event) => {
        // const selectedFile = event.target.files[0];
        setFile(event.target.files);
        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     setUploadImg(reader.result);
        // };
        // reader.readAsDataURL(selectedFile);
    }
    const UploadPost = () => {
      const postData = {
        'title': title,
        'content': content
      }
      const formData = new FormData();

      formData.append(
        "dto",
        new Blob([JSON.stringify(postData)],{type: "application/json"})
      );

      if(file !== null){
        Object.values(file).forEach((f)=> formData.append('files',f));
      }
        async function fetchPost() {
          try {
            axios.defaults.withCredentials = true;
            const res = await axios.post("http://localhost:8080/post/create", formData,{
                headers:{
                    'Content-Type': `multipart/form-data`
                }
            });
            console.log(res);
          } catch (error) {
            console.error(error);
          }
        }
        fetchPost();
      };
  const getCookies = () => {
    async function fetch() {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:8080/member/admin");
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }
  const getPoint = () =>{
    async function fetchPoint() {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post("http://localhost:8080/detail/point");
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPoint();
  }

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <HeaderMenu>
            <DoneBtn onClick={() => UploadPost()}>완료</DoneBtn>
          </HeaderMenu>
          <InputTitle placeholder={`글 제목을 입력하세요`} onChange={(event)=>setTitle(event.target.value)}></InputTitle>
          <Line />
          <InputContent placeholder={`내용을 입력하세요`} onChange={(event)=>setContent(event.target.value)}></InputContent>
          <c.Flex>
            <label>
                <img src={AddPhoto} />
                <InputFile type="file" accept="image/*" multiple="multiple" onChange={handleFile.bind(this)} />
            </label>
          
            {/* <ShowImg src={uploadImg} /> */}
            <button onClick={()=>getCookies()}>get coo</button>
            <button onClick={()=>getPoint()}>getPoint</button>
          </c.Flex>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Community;
