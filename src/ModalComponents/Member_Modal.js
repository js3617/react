import React, { useEffect } from 'react';
import Modal from 'react-modal';
import {SuccessModalStyled} from './ModalStyled';

function PopupMessage({message, isOpen, onRequestClose}) {
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
            style={SuccessModalStyled} //Modal style 적용
            ariaHideApp={false} //appElement를 숨길지 여부를 나타내는  값
            contentLabel="Popup Message" //사용자에게 콘텐츠를 전달할 때 사용되는 방법을 나타내는 문자열
            shouldCloseOnOverlayClick={true} //팝업창이 아닌 바깥 부분에서 클릭하였을 때, 닫히도록 할 것인지에 대한 처리
        > 
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.3725 10.86L22.1275 12.6413L14.8863 19.775C14.4025 20.2588 13.7662 20.5 13.1275 20.5C12.4887 20.5 11.8463 20.2563 11.3575 19.7687L7.88 16.3988L9.62125 14.6025L13.1125 17.9862L20.3725 10.86ZM30 15.5C30 23.7712 23.2712 30.5 15 30.5C6.72875 30.5 0 23.7712 0 15.5C0 7.22875 6.72875 0.5 15 0.5C23.2712 0.5 30 7.22875 30 15.5ZM27.5 15.5C27.5 8.6075 21.8925 3 15 3C8.1075 3 2.5 8.6075 2.5 15.5C2.5 22.3925 8.1075 28 15 28C21.8925 28 27.5 22.3925 27.5 15.5Z"
                    fill="white"/>
            </svg>
            <div>{message}</div>
        </div>
            {/* <button onClick={onRequestClose}>닫기</button> */}
        </Modal>
    );
}

export default PopupMessage;
