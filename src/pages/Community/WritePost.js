import React, { useRef, useState, useCallback, useEffect } from "react";
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
import DeletePhoto from "../../assets/img/Community/deletePhoto.svg";
import Loading from "../Loading";

const DoneBtn = styled.div`
  border-radius: 8px;
  background: #ffc700; 
  // #D0D0D0
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
    font-style: medium;
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
const ImgParent = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
`;
const ShowImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
  object-fit: cover;
`;
const Delete = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: -5px;
  top: -5px;
`
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
    const [file, setFile] = useState([]);
    const [showImages,setShowImages] = useState([]);
    const [height, setHeight] = useState('216px');
    const [isAnonymity, setIsAnonymity] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const contentRef = useRef();
    const navigate = useNavigate();
    
    const handleFile = (event) => {
      console.log(file)
      let newFiles = Array.from(event.target.files).slice(0, 5-file.length);
      if(newFiles.length !== 0) setFile([...file, ...newFiles]);
    }

    useEffect(()=>{
      let imageUrlLists = [];
      for(let i = 0 ; i < file.length ; i++){
        const currentImageUrl = URL.createObjectURL(file[i]);
        imageUrlLists.push(currentImageUrl);
      }
      setShowImages(imageUrlLists);
    },[file]);
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
          if(!(title && content)) return;
          setLoading(true);
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
      const handleDeleteImage = (id) => {
        setShowImages(showImages.filter((_, index) => index !== id));
        setFile(file.filter((_,index) => index !== id));
      }
      const handleResizeHeight = useCallback(() => {
        let scrollHeight = contentRef.current.scrollHeight +'px';
        scrollHeight > height ? setHeight(scrollHeight) : setHeight('216px');
      }, [contentRef]);
    
  return (
    loading ? <Loading/> : (
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
              <ImgParent>
                <ShowImg src={url} key={id}/>
                <Delete src={DeletePhoto} onClick={()=>handleDeleteImage(id)}/>
              </ImgParent>)
            )}
          </PhotoList>
        </c.SubScreen>
      </c.ScreenComponent>
    </c.Totalframe>
    )
  );
};

export default Community;
