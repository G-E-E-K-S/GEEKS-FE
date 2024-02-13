import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as c from "../../components/Common/CommonStyle";
import Header from "../../components/Join/Header";
import JoinButton from "../../components/Join/JoinButton";
import MainText from "../../components/Join/MainText";
import Check from "../../assets/img/Join/agreeCheck.svg";
import FillCheck from "../../assets/img/Join/agreeFillCheck.svg";

const Title = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: #707070;
  margin-bottom: 8px;
  margin-top: 28px;
`;
const Content = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 16px;
  color: #707070;
  text-align: left;
  white-space: pre-wrap;
`;
const ContentNum = styled(Content)`
  margin-right: 5px;
`;
const Agree = () => {
  return (
    <c.Totalframe>
      <c.ScreenComponent>
        <Header />
        <MainText maintitle={`긱스 서비스 이용 약관`} />
        <Title>{`제1조(목적)`}</Title>
        <Content>{`이 약관은 긱스 (이하 ‘회사' 라고 합니다)가 제공하는 제반 서비스의 이용과 관련하여 회사와 회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.`}</Content>
        <Title>{`제2조(정의)`}</Title>
        <Content>{`이 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.`}</Content>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`‘서비스'라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 ‘이용자'가 이용할 수 있는 회사가 제공하는 제반 서비스를 의미합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`‘이용자'란 이 약관에 따라 회사가 제공하는 서비스를 받는 ‘개인회원’ 및 ‘기업회원'을 말합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`‘개인회원'은 회사에 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 ‘긱스'가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`4.`}</ContentNum>
          <Content>{`‘기업회원'은 회사에 기업정보 및 개인정보를 제공하여 회원등록을 한 사람으로, 회사로부터 지속적으로 정보를 제공받고 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`5.`}</ContentNum>
          <Content>{`‘아이디(ID)’라 함은 회원의 식별과 서비스 이용을 위하여 회원이 서비스에 처음 등록을 할시 재학생 인증을 위해 기재한 학교 이메일 주소를 의미합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`6.`}</ContentNum>
          <Content>{`‘비밀번호'라 함은 회원이 사용하는 아이디와 일치되는 회원임을 확인하고 비밀의 보호를 위해 회원 자신이 정한 문자(특수문자 포함)와 숫자의 조합을 의미합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`7.`}</ContentNum>
          <Content>{`‘콘텐츠'란 정보통신망법의 규정에 따라 정보통신망에서 사용되는 부호, 문자, 음성, 음향, 이미지 또는 영상 등으로 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 말합니다.`}</Content>
        </c.Flex>
        <Title>{`제3조(약관 외 준칙)`}</Title>
        <Content>{`이 약관에서 정하지 아니한 사항에 대해서는 법령 또는 회사가 정한 서비스의 개별약관, 운영정책 및 규칙 등(이하 세부지침)의 규정에 따릅니다. 또한 본 약관과 세부지침이 충돌할 경우에는 세부지침에 따릅니다.`}</Content>
        <Title>{`제4조(약관의 효력과 변경)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`이 약관은 긱스(이)가 제공하는 모든 모바일서비스에 게시하여 공시합니다. 긱스는 ‘전자상거래 등에서의 소비자 보호에 관한 법률(이하 ‘전자상거래법'이라 함)’, ‘약관의 규제에 관한 법률(이하 ‘약관규제법'이라 함)’, ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법'이라 함)’ 등 본 서비스와 관련된 법령에 위배되지 않는 범위에서 이 약관을 변경할 수 있으며, 회사는 약관이 변경되는 경우에 변경된 약관의 내용과 시행일을 정하여, 그 시행일로부터 최소 7일 (이용자에게 불리하거나 중대한 사항의 변경은 30일) 이전부터 시행일 후 상당한 기간동안 공지하고, 기존 이용자에게는 변경된 약관, 적용일자 및 변경사유(변경될 내용 중 중요사항에 대한 설명을 포함)를 별도의 전자적 수단(전자우편, 서비스 내 전자쪽지 발송, 알림 메시지를 띄우는 등의 방법)으로 개별 통지합니다. 변경된 약관은 공지하거나 통지한 시행일로부터 효력이 발생합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사가 제1항에 따라 개정약관을 공지 또는 통지하는 경우 ‘변경에 동의하지 아니한 경우 또는 통지를 받는 날로부터 7일(이용자에게 불리하거나 중대한 사항의 변경일 경우에는 30일)내에 계약을 해지할 수 있으며, 계약해지의 의사표시를 하지 아니한 경우에는 변경에 동의한 것으로 본다.’ 라는 취지의 내용을 함께 통지합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`이용자가 제2항의 공지일 또는 통지를 받은 날로부터 7일(또는 이용자에게 불리하거나 중대한 사항의 변경인 경우에는 30일)내에 변경된 약관에 대해 거절의 의사를 표시하지 않았을 때에는 본 약관의 변경에 동의한 것으로 간주합니다.`}</Content>
        </c.Flex>
        <Title>{`제5조(이용자에 대한 통지)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사는 이 약관에 별도 규정이 없는 한 이용자에게 전자우편, 전자쪽지, 푸쉬(Push)알림 등의 전자적 수단을 이용하여 통지할 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사는 이용자 전체에 대한 통지의 경우 7일 이상 회사가 운영하는 모바일 서비스의 내의 게시판(공지사항)에 게시함으로써 제1항의 통지에 갈음할 수 있습니다. 다만, 이용자 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 제1항의 개별 통지를 합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사는 이용자의 연락처 또는 이메일 미기재, 변경 후 미수정, 오기재 등으로 인하여 개별 통지가 어려운 경우에 한하여 전항의 공지를 함으로써 개별 통지를 한 것으로 간주합니다. `}</Content>
        </c.Flex>
        <Title>{`제6조(이용계약의 체결)`}</Title>
        <Content>{`이용계약은 다음의 경우에 체결됩니다.`}</Content>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`이용자가 회원으로 가입하고자 하는 경우 이용자가 약관의 내용에 대하여 동의를 한 다음 회원가입 신청을 하고 회사가 이러한 신청에 대하여 승낙한 때`}</Content>
        </c.Flex>
        <Title>{`제7조(회원가입에 대한 승낙)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사는 이용계약에 대한 요청이 있을 때 서비스 이용을 승낙함을 원칙으로 합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`전항에도 불구하고, 다음 각호의 사유에 해당하는 경우 회사는 회원가입을 보류하거나 거절하는 등 제한할 수 있습니다.`}</Content>
        </c.Flex>
        <Content>{`\t가. 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우(단, 회사의 재가입 승낙을 얻은 경우에는 예외로 함)\n\t나. 타인의 명의를 도용한 경우\n\t다. 회사가 정하는 필수 정보를 누락하거나 허위로 기재한 경우\n\t라. 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 이 약관 등 회사가 규정한 운영원칙을 위반한 경우\n\t마. 신용정보의 이용과 보호에 관한 법률에 따라 PC통신, 인터넷서비스의 신용불량자로 등록되어 있는 경우\n\t바. 정보통신윤리위원회에 PC통신, 인터넷서비스의 불량 이용자로 등록되어 있는 경우\n\t사. 이미 사용 중인 회원정보 또는 공서양속을 저해하는 아이디를 사용하고자 하는 경우`}</Content>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`제1항에 따른 신청에 있어 회사는 서비스 제공이 필요한 경우 전문기관을 통한 실명 확인 및 본인인증을 요청할 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`4.`}</ContentNum>
          <Content>{`회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`5.`}</ContentNum>
          <Content>{`제2항과 제4항에 따라 서비스 이용을 승낙하지 아니하거나 유보한 경우, 회사는 원칙적으로 이를 서비스 이용 신청자에게 알리도록 합니다. 단, 회사의 귀책사유 없이 이용자에게 알릴 수 없는 경우에는 예외로 합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`6.`}</ContentNum>
          <Content>{`이용계약의 성립 시기는 제6조 제1호의 경우에는 회사가 가입완료를 신청절차 상에서 표시한 시점, 제6조 제2호의 경우에는 결제가 완료되었다는 표시가 된 시점으로 합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`7.`}</ContentNum>
          <Content>{`회사는 회원에 대해 회사정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`8.`}</ContentNum>
          <Content>{`회사는 회원에 대하여 ‘영화및비디오물의진흥에관한법률' 및 ‘청소년보호법' 등에 따른 등급 및 연령 준수를 위하여 이용제한이나 등급별 제한을 둘 수 있습니다.`}</Content>
        </c.Flex>
        <Title>{`제8조(회원정보의 변경)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 재학 중인 학교의 이메일 주소 등은 수정이 불가능합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여는 회원에게 책임이 있습니다.`}</Content>
        </c.Flex>
        <Title>{`제9조(회사의 의무)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사는 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실된 때에는 이를 지체 없이 수리 또는 복구하며, 다음 각 호의 사유 발생 시 부득이한 경우 예고 없이 서비스의 전부 또는 일부의 제공을 일시 중지할 수 있습니다. 이 경우 그 사유 및 중지 기간 등을 이용자에게 지체 없이 사후 공지합니다.`}</Content>
        </c.Flex>
        <Content>{`가. 시스템의 긴급 점검, 증설, 교체, 시설의 보수 또는 공사를 하기 위하여 필요한 경우\n나. 새로운 서비스를 제공하기 위하여 시스템교체가 필요하다고 판단되는 경우\n다. 시스템 또는 기타 서비스 설비의 장애, 유무선 Network 장애 등으로 정상적인 서비스 제공이 불가능한 경우\n라. 국가비상사태, 정전, 불가항력적 사유로 인한 사유`}</Content>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 이용자와의 계약관련 절차 및 내용 등에 있어 이용자에게 편의를 제공하도록 노력합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사는 이용약관, 개인정보취급방침 등을 이용자가 쉽게 알 수 있도록 온라인 서비스 초기 화면에 게시합니다.`}</Content>
        </c.Flex>
        <Title>{`제11조(개인정보보호)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사는 이용자들의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 법규를 준수하기 위해 노력합니다. 회사는 개인정보보호정책을 통하여 이용자가 제공하는 개인정보다 어떠한 용도놔 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사는 최종 사용일로부터 연속하여 1년 동안 서비스 사용 이력이 없는 경우 ‘개인정보보호법' 및 같은 법 시행령의 규정에 따라 이용자 정보를 영구적으로 삭제할 수 있습니다. 단, 유료결제 상품을 보유하고 있는 경우 삭제 대상에서 제외되며 관련 법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계 법령에서 정한 기간 동안 이용자 정보를 보관합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사가 이용자의 개인정보의 보호 및 사용에 대해서 관련 법규 및 회사의 개인정보처리방침을 적용합니다. 다만, 회사에서 운영하는 웹 사이트 등에서 링크된 외부 웹페이지에서는 회사의 개인정보처리방침이 적용되지 않습니다.`}</Content>
        </c.Flex>
        <Title>{`제12조(이용자의 의무)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`이용자는 이용자가입을 통해 이용신청을 하는 경우 사실에 근거하여 신청서를 작성해야 합니다. 이용자가 허위, 또는 타인의 정보를 등록할 경우 회사에 대하여 일체의 권리를 주장할 수 없으며, 회사는 이로 인하여 발생한 손해에 대하여 책임을 부담하지 않습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`이용자는 본 약관에서 규정하는 사항과 기타 회사가 정한 제반 규정, 회사가 공지하는 사항을 준수하여야 합니다. 또한 이용자는 회사의 업무를 방해하는 행위 및 회사의 명예를 훼손하는 행위를 하여서는 안 됩니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`이용자는 주소, 연락처, 전자우편 주소 등 회원정보가 변경된 경우 즉시 온라인을 통해 이를 수정해야 합니다. 이 때 변경된 정보를 수정하지 않거나 수정이 지연되어 발생하는 책임은 이용자가 지게 됩니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`4.`}</ContentNum>
          <Content>{`이용자는 이용자에게 부여된 아이디와 비밀번호를 직접 관리해야 합니다. 이용자의 관리 소홀로 발생한 문제는 회사가 책임을 부담하지 않습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`5.`}</ContentNum>
          <Content>{`이용자가 아이디, 닉네임, 기타 서비스 내에서 사용되는 명칭 등을 선정할 때에는 다음 각 호에 해당하는 행위를 해서는 안 됩니다.`}</Content>
        </c.Flex>
        <Content>{`가. 회사가 제공하는 서비스의 공식 운영자를 사칭하거나 이와 유사한 명칭을 사용하여 다른 이용자에게 혼란을 주는 행위\n나. 선정적이고 음란한 내용이 포함된 명칭을 사용하는 행위\n다. 제3자의 상표권, 저작권 등 권리를 핌해할 가능성이 있는 명칭을 사용하는 행위\n라. 제3자의 명예를 훼손하거나, 그 업무를 방해할 가능성이 있는 명칭을 사용하는 행위\n마. 기타 반사회적이고 관계법령에 저촉되는 내용이 포함된 명칭을 사용하는 행위`}</Content>
        <c.Flex>
          <ContentNum>{`6.`}</ContentNum>
          <Content>{`이용자는 회사의 명시적 동의가 없는 한 서비스 이용 권한, 기타 이용 계약상의 지위에 대하여 매도, 증여, 담보제공 등 처분행위를 할 수 없습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`7.`}</ContentNum>
          <Content>{`본 조와 관련하여 서비스 이용에 있어 주의사항 등 그 밖의 자세한 내용은 운영정책으로 정하며, 이용자가 서비스 이용약관 및 운영정책을 위반하는 경우 서비스 이용제한, 민형사상의 책임 등 불이익이 발생할 수 있습니다.`}</Content>
        </c.Flex>
        <Title>{`제13조(서비스의 제공)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사의 서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다. 다만 회사 시스템의 유지 보수를 위한 점검, 통신장비의 교체 등 특별한 사유가 있는 경우 서비스의 전부 또는 일부에 대하여 일시적인 제공 중단이 발생할  수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사가 제공하는 개별 서비스에 대한 구체적인 안내사항은 개별 서비스 화면에서 확인할 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사가 제공하는 서비스의 내용은 다음과 같습니다.`}</Content>
        </c.Flex>
        <Content>{`\t가. 거주중인 기숙사 내에서의 룸메이트 매칭 서비스\n\t나. 동일 학교의 기숙사생들간의 모바일 채팅 서비스\n\t다. 동일 학교의 기숙사생들간의 정보 교류 및 친목 도모를 위한\n\t커뮤니티 기능`}</Content>
        <Title>{`제14조(서비스의 제한 등)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`무료 서비스는 전항의 규정에도 불구하고, 회사의 운영정책 등의 사유로 서비스의 전부 또는 일부가 제한되거나 중지될 수 있으며, 유료로 전환될 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사는 서비스의 이용을 제한하거나 정지하는 때에는 그 사유 및 제한기간, 예정 일시 등을 지체없이 이용자에게 알립니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`4.`}</ContentNum>
          <Content>{`회사는 사전에 결제정보를 입력 받고, 무료로 제공중인 서비스를 유료로 전환할 경우, 그 사유와 유료 전환 예정 일시를 통지하고 유료 전환에 대한 이용자의 동의를 받습니다.`}</Content>
        </c.Flex>
        <Title>{`제14조(서비스의 제한 등)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사는 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신사업자가 전기통신서비스를 중지하는 등 부득이한 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`무료 서비스는 전항의 규정에도 불구하고, 회사의 운영정책 등의 사유로 서비스의 전부 또는 일부가 제한되거나 중지될 수 있으며, 유료로 전환될 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사는 서비스의 이용을 제한하거나 정지하는 때에는 그 사유 및 제한기간, 예정 일시 등을 지체없이 이용자에게 알립니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`4.`}</ContentNum>
          <Content>{`회사는 사전에 결제정보를 입력 받고, 무료로 제공중인 서비스를 유료로 전환할 경우, 그 사유와 유료 전환 예정 일시를 통지하고 유료 전환에 대한 이용자의 동의를 받습니다.`}</Content>
        </c.Flex>
        <Title>{`제15조(서비스의 해제•해지 및 탈퇴 절차)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`이용자가 이용 계약을 해지하고자 할 때는 언제든지 홈페이지 상의 이용자 탈퇴 신청 을 통해 이용계약 해지를 요청할 수 있습니다. 단, 신규가입 후 일정 시간 동안 서비스 부정이용 방지 등의 사유로 즉시 탈퇴가 제한될 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사는 이용자가 본 약관에서 정한 이용자의 의무를 위반한 경우 등 비정상적인 이용 또는 부당한 이용과 이용자 금지프로그램 사용하는 경우 또는 타인의 명예를 훼손하 거나 모욕하는 방송과 게시물을 작성한 경우 이러한 행위를 금지하거나 삭제를 요청 하였음에도 불구하고 최초의 금지 또는 삭제 요청을 포함하여 2회 이상 누적되는 경 우 이용자에게 통지하고, 계약을 해지할 수 있습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사는 이용자의 청약철회, 해제 또는 해지의 의사표시를 수신한 후 그 사실을 이용자 에게 회신합니다. 회신은 이용자가 회사에 대하여 통지한 방법 중 하나에 의하고, 이 용자가 회사에 대하여 통지한 연락처가 존재하지 않는 경우에는 회신하지 않을 수 있습니다.`}</Content>
        </c.Flex>
        <Title>{`제16조(손해배상)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사 또는 이용자는 상대방의 귀책에 따라 손해가 발생하는 경우 손해배상을 청구할 수 있습니다. 다만, 회사는 무료서비스의 장애, 제공 중단, 보관된 자료 멸실 또는 삭 제, 변조 등으로 인한 손해에 대하여는 배상책임을 부담하지 않습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사가 제공하는 서비스의 이용과 관련하여 회사의 운영정책 및 개인 정보 보호정책, 기타 서비스별 이용약관에서 정하는 내용에 위반하지 않는 한 회사는 어떠한 손해에 대하여도 책임을 부담하지 않습니다.`}</Content>
        </c.Flex>
        <Title>{`제17조(면책사항)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임을 지지 않습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사는 이용자의 귀책사유로 인한 서비스 이용장애에 대하여 책임을 지지 않습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`회사는 이용자가 서비스를 이용하며 기대하는 수익을 얻지 못한 것에 대하여 책임 지지 않으며 서비스를 통하여 얻은 자료로 인한 손해 등에 대하여도 책임을 지지 않습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`4.`}</ContentNum>
          <Content>{`회사는 이용자가 웹페이지에 게재한 내용의 신뢰도, 정확성 등 내용에 대해서는 책임 지지 않으며, 이용자 상호간 또는 이용자와 제3자 상호간 서비스를 매개로 발생한 분쟁에 개입하지 않습니다.`}</Content>
        </c.Flex>
        <Title>{`제18조(권리의 귀속)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회사가 제공하는 서비스에 대한 저작권 등 지식재산권은 회사에 귀속됩니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사는 서비스와 관련하여 이용자에게 회사가 정한 조건 따라 회사가 제공하는 서비스를 이용할 수 있는 권한만을 부여하며, 이용자는 이를 양도, 판매, 담보제공 하는 등 처분행위를 할 수 없습니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`3.`}</ContentNum>
          <Content>{`제1항의 규정에도 불구하고 이용자가 직접 작성한 콘텐츠 및 회사의 제휴계약에 따라 제공된 저작물에 대한 지식재산권은 회사에 귀속되지 않습니다.`}</Content>
        </c.Flex>
        <Title>{`제19조(콘텐츠의 관리)`}</Title>
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`회원이 작성 또는 창작한 콘텐츠가 '개인정보보호법' 및 '저작권법' 등 관련 법에 위반 되는 내용을 포함하는 경우, 관리자는 관련 법이 정한 절차에 따라 해당 콘텐츠의 게 시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련 법에 따라 조치를 취하여야 합니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`회사는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련 법에 위반되는 경우에는 관련 법에 따라 해당 콘텐츠 에 대해 임시조치 등을 취할 수 있습니다.`}</Content>
        </c.Flex>
        
        <c.Flex>
          <ContentNum>{`1.`}</ContentNum>
          <Content>{`이용자가 서비스 내에 게시한 콘텐츠의 저작권은 해당 콘텐츠의 저작자에게 귀속됩니다.`}</Content>
        </c.Flex>
        <c.Flex>
          <ContentNum>{`2.`}</ContentNum>
          <Content>{`제1항에 불구하고 회사는 서비스의 운영, 전시, 전송, 배포, 홍보 등의 목적으로 별도의 허락 없이 무상으로 저작권법 및 공정한 거래관행에 합치되는 범위 내에서 다음 각 호와 같이 회원이 등록한 콘텐츠를 사용할 수 있습니다.`}</Content>
        </c.Flex>
        <Content>{`가. 서비스 내에서 이용자가 작성한 콘텐츠의 복제, 수정, 전시, 전송, 배포 등 저작권 을 침해하지 않는 범위 내의 2차적저작물 또는 편집 저작물 작성을 위한 사용. 다만, 해당 콘텐츠를 등록한 이용자가 해당 콘텐츠의 삭제 또는 사용 중지를 요청하 는 경우 회사는 관련 법에 따라 보존해야하는 사항을 제외하고 관련 콘텐츠를 모 두 삭제 또는 사용중지합니다.\n나. 서비스의 운영, 홍보, 서비스 개선 및 새로운 서비스 개발을 위한 범위 내의 사용\n다. 미디어, 통신사 등을 통한 홍보 목적으로 이용자의 콘텐츠를 제공, 전시하도록 하는 등의 사용.`}</Content>
        <Title>{`제21조(관할법원 및 준거법)`}</Title>
        <Content>{`서비스와 관련하여 분쟁이 발생한 경우 관할법원은 민사소송법에 따른 관할법원으로 정하며, 준거법은 대한민국의 법령을 적용합니다.`}</Content>
        <Title>{`부칙`}</Title>
        <Content>{`제1조 본 방침은 2024.02.01부터 시행됩니다.`}</Content>
      </c.ScreenComponent>
    </c.Totalframe>
  );
};

export default Agree;
