import React, { useEffect } from 'react';
import Modal from 'react-modal';
import {CreateModalStyled} from './ModalStyled';

function CreateDelete({message, isOpen, onRequestClose}) {
    // 모달이 열리면 일정 시간 후 자동으로 닫히도록 설정
    // useEffect(() => {
    //     let timer;
    //     if (isOpen) {
    //         timer = setTimeout(() => {
    //             onRequestClose(); // 모달 닫기 함수 호출
    //         }, 2000); // 5000ms = 5초 후에 모달이 자동으로 닫힘
    //     }

    //     // 컴포넌트 unmount 시 타이머 정리
    //     return () => clearTimeout(timer);
    // }, [isOpen, onRequestClose])
    
    return (
        <Modal
            isOpen={isOpen} //해당 값이 true 이면 Modal 창이 열리는 것
            onRequestClose={onRequestClose} //Modal이 닫힐 때 실행될 함수를 의미
            style={CreateModalStyled} //Modal style 적용
            ariaHideApp={false} //appElement를 숨길지 여부를 나타내는  값
            contentLabel="Popup Message" //사용자에게 콘텐츠를 전달할 때 사용되는 방법을 나타내는 문자열
            shouldCloseOnOverlayClick={true} //팝업창이 아닌 바깥 부분에서 클릭하였을 때, 닫히도록 할 것인지에 대한 처리
        > 
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <svg
            width="46"
            height="47"
            viewBox="0 0 46 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                width="46"
                height="46"
                transform="translate(0 0.5)"
                fill="#03458E"
                fill-opacity="0.1"/>
            <g clip-path="url(#clip0_262_10946)">
                <path
                    d="M27.298 19.788L28.702 21.213L22.909 26.92C22.522 27.307 22.013 27.5 21.502 27.5C20.991 27.5 20.477 27.305 20.086 26.915L17.304 24.219L18.697 22.782L21.49 25.489L27.298 19.788ZM35 23.5C35 30.117 29.617 35.5 23 35.5C16.383 35.5 11 30.117 11 23.5C11 16.883 16.383 11.5 23 11.5C29.617 11.5 35 16.883 35 23.5ZM33 23.5C33 17.986 28.514 13.5 23 13.5C17.486 13.5 13 17.986 13 23.5C13 29.014 17.486 33.5 23 33.5C28.514 33.5 33 29.014 33 23.5Z"
                    fill="#03458E"/>
            </g>
            <defs>
                <clipPath id="clip0_262_10946">
                    <rect width="24" height="24" fill="white" transform="translate(11 11.5)"/>
                </clipPath>
            </defs>
        </svg>
            <div>{message}</div>
        </div>
            <button onClick={onRequestClose}>
                <svg
                    width="29"
                    height="47"
                    viewBox="0 0 29 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_262_10950)">
                        <path
                            d="M16.43 23.5002L24.166 13.9432C24.687 13.2992 24.588 12.3552 23.943 11.8342C23.298 11.3122 22.355 11.4132 21.834 12.0572L14.5 21.1172L7.16601 12.0572C5.92501 10.5382 3.60601 12.4142 4.83401 13.9442L12.57 23.5012L4.83401 33.0572C4.31301 33.7012 4.41201 34.6452 5.05701 35.1662C5.69701 35.6852 6.64301 35.5902 7.16601 34.9432L14.5 25.8832L21.834 34.9432C22.358 35.5902 23.304 35.6852 23.943 35.1662C24.588 34.6452 24.687 33.7002 24.166 33.0572L16.43 23.5002Z"
                            fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_262_10950">
                            <rect width="24" height="24" fill="white" transform="translate(2.5 11.5)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </Modal>
    );
}

export default CreateDelete;
