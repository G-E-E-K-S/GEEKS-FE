import React, { useState } from "react";
import styled from 'styled-components';
import Modal from 'react-modal';
import downArrow from '../../assets/img/Home/downArrow.svg';
import search from '../../assets/img/Home/search.svg';
import noti from '../../assets/img/Home/noti.svg';
import edit from '../../assets/img/Home/edit.svg';
import GeeksLogo from "../../assets/img/Common/geeksLogo.svg";

const TotalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 10;
    position: relative;
    margin-top: 8px;
`;
const DormitoryKind = styled.div`
    display: flex;
`;
const DormitoryText = styled.div`
    color: #333;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    margin-right: 6px;
    white-space: no-wrap;
`;
const modalStyle = {
    overlay:{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 10,
    },
    content:{
        width: '124px',
        height: '152px',
        inset:'0',
        padding: '0',
        marginTop: '10.9vh',
        marginLeft: '5.12vw',
        borderRadius: '12px',
        background: '#fff',
        overflow: 'hidden'
    }
}
const DormitoryKinds = styled.div`
    color: #1A1A1A;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    padding: 12px;
    
    height: 48px;
    width: 100%;
    cursor: pointer;
`;
const Icon = styled.div`
    display: flex;
    gap: 16px;
    cursor: pointer;
`;
const Header = (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    return(
        <TotalHeader>
            {/* <DormitoryKind onClick={()=>setModalOpen(true)}>
                <DormitoryText>신관</DormitoryText>
                <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} ariaHideApp={false} style={modalStyle}>
                    <DormitoryKinds>구관</DormitoryKinds>
                    <DormitoryKinds>신관</DormitoryKinds>
                    <DormitoryKinds>행복기숙사</DormitoryKinds>
                </Modal>
                <img src={downArrow}/>
            </DormitoryKind> */}
            <img src={GeeksLogo}/>
            <Icon>
                <img src={search} onClick={props.onClick}/>
                {props.isNoti && <img src={noti}/>}
                {props.isEdit && <img src={edit}/>}
            </Icon>
        </TotalHeader>
    );
};

export default Header;
