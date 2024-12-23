import React, {useState} from 'react';
import Modal from './ModalComponents/Member_Modal';
import CreateModal from './ModalComponents/CreateDelete_Modal';

import styled from 'styled-components';

const Select = styled.select`
    position: relative;
    display: inline-block;
    .select-wrap {
        position: absolute;
    }
    select {
        display: inline-block;
}
`;

function DateRangeSelector() {

    const currentYear = new Date().getFullYear(); // 현재 년도를 가져옴
    const currentMonth = new Date().getMonth() + 1; // 현재 월 가져오기(0부터 시작하므로 +1)
    
    // 시작 및 종료 날짜 상태 관리
    const [startDate, setStartDate] = useState({
        year: `${currentYear}`,
        month: `${currentMonth
            .toString()
            .padStart(2, '0')}` // 현재 월을 두 자리 수로 표현
    });
    const [endDate, setEndDate] = useState({
        year: `${currentYear}`,
        month: `${currentMonth
            .toString()
            .padStart(2, '0')}`
    });

    const [modalOpen, setModalOpen] = useState(false); // 모달의 열림 상태를 관리
    const [message, setMessage] = useState(""); // 모달에 표시될 메세지 상태

    // 모달을 열고 메시지를 설정하는 함수
    const handlePopupMessage = () => {
        setModalOpen(true);
        setMessage("회원 정보 수정이 완료되었습니다.");
    };

    // 연도와 월을 동적으로 생성하여 선택할 수 있게 배열 생성
    const years = Array.from({
        length: 4
    }, (_, i) => `${currentYear + i}`);
    const months = Array.from({
        length: 12
    }, (_, i) => `${i + 1}`.padStart(2, '0'));

    // 날짜 선택을 처리하는 함수
    const handleDateChange = (value, type, isStart) => {
        if (isStart) {
            setStartDate(prev => ({
                ...prev,
                [type]: value
            }));
        } else {
            setEndDate(prev => ({
                ...prev,
                [type]: value
            }));
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px'
            }}>
            <div>
                <Select size={3}
                    value={startDate.year}
                    onChange={e => handleDateChange(e.target.value, 'year', true)}>
                    {years.map(year => <option key={year} value={year}>{year}년</option>)}
                </Select>
                <Select size={3}
                    value={startDate.month}
                    onChange={e => handleDateChange(e.target.value, 'month', true)}>
                    {months.map(month => <option key={month} value={month}>{month}월</option>)}
                </Select>
            </div>
            <span>~</span>
            <div>
                <Select size={3}
                    value={endDate.year}
                    onChange={e => handleDateChange(e.target.value, 'year', false)}>
                    {years.map(year => <option key={year} value={year}>{year}년</option>)}
                </Select>
                <Select size={3}
                    value={endDate.month}
                    onChange={e => handleDateChange(e.target.value, 'month', false)}>
                    {months.map(month => <option key={month} value={month}>{month}월</option>)}
                </Select>
            </div>
            <button onClick={handlePopupMessage}>모달 열기</button>
            <Modal
                message={message}
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}/>
            <CreateModal
                message={message}
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}/>
        </div>
    );
}

export default DateRangeSelector;
