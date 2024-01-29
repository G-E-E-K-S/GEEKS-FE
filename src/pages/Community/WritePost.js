import React, { useRef, useState, useCallback } from "react";
import API from "../../axios/BaseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import HeaderMenu from "../../components/Common/HeaderMenu";
import Br from "../../components/Common/Br";
import AddPhoto from "../../assets/img/Community/addPhoto.svg";
import checkBoxIcon from "../../assets/img/Community/checkBox.svg";
import FillCheckBoxIcon from "../../assets/img/Community/fillCheckBox.svg";

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
const InputContent = styled.textarea`
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  height: ${(props)=>props.height};
  margin-bottom: ${(props) =>props.contentHeight > 216 ? "clac(60px + contentHeight - 168px)" : "60px"};
  color: #525252;
  &::-webkit-input-placeholder {
    color: #d0d0d0;
    font-size: 1rem;
    font-weight: 700;
  }
`;
const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const InputFile = styled.input`
  display: none;
`;
const ShowImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
`;
const Anonymous = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  height: max-content;
`;
const CheckBox = styled.img`
  width: 20px;
  height: 20px;
`;
const AnonymousTxt = styled.div`
  color: #D0D0D0;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 5px;
  margin-top: 3px;
`;
const Community = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [showImages,setShowImages] = useState([]);
    const [height, setHeight] = useState('216px');
    const [isAnonymity, setIsAnonymity] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const contentRef = useRef();
    const navigate = useNavigate();
    
    const handleFile = (event) => {
      console.log(event.target.files);
      setFile(event.target.files);
      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];

      for(let i = 0 ; i < imageLists.length ; i++){
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
      setShowImages(imageUrlLists);
    }
    const UploadPost = () => {
      const postData = {
        'title': title,
        'content': content,
        'anonymity' : isAnonymity
      }
      const formData = new FormData();

      formData.append(
        "dto",
        new Blob([JSON.stringify(postData)],{type: "application/json"})
      );

      if(file !== null){
        Object.values(file).forEach((f)=> {
          formData.append('files',f);
        });
        
      }
        async function fetchPost() {
          try {
            const res = await API.post("/post/create", formData,{
                headers:{
                    'Content-Type': `multipart/form-data`
                }
            });
            if(res.data === 'success') navigate('/community');
            console.log(res);
          } catch (error) {
            console.error(error);
          }
        }
        fetchPost();
      };
    const handleResizeHeight = useCallback(() => {
      let scrollHeight = contentRef.current.scrollHeight +'px';
      scrollHeight > height ? setHeight(scrollHeight) : setHeight('216px');
    }, [contentRef]);

  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <c.SubScreen>
          <HeaderMenu>
            <DoneBtn onClick={() => UploadPost()}>완료</DoneBtn>
          </HeaderMenu>
          <InputTitle placeholder={`글 제목을 입력하세요`} onChange={(event)=>setTitle(event.target.value)}></InputTitle>
          <Line />
          <InputContent placeholder={`내용을 입력하세요`} onChange={(event)=>setContent(event.target.value)} ref={contentRef} onInput={handleResizeHeight} height={height}></InputContent>
          <label onClick={()=>setIsAnonymity(!isAnonymity)}>
            <Anonymous>
              <CheckBox src={isCheck ? FillCheckBoxIcon : checkBoxIcon } onClick={()=>setIsCheck(!isCheck)}/>
              <AnonymousTxt>{`익명`}</AnonymousTxt>
            </Anonymous>
          </label>
          <PhotoList>
            <label onChange={handleFile}>
                <img src={AddPhoto} />
                <InputFile type="file" accept="image/*" multiple="multiple"/>
            </label>
            {showImages.map((url,id)=>(
              <ShowImg src={url} key={id}/>)
            )}
          </PhotoList>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Community;
