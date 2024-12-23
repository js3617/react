// import React, {useEffect, useState} from 'react';

// function TodoList() {
//     const [text, setText] = useState('');

//     const [email, setEmail] = useState('');

//     const onChange= (e) => {
//         setText(e.target.value);
//     }
//     console.log(text);

//     const onReset = () => {
//         setText('');
//     }

//     return (
//         <>
//             <div>
//                 <input onChange={onChange} value={text} placeholder='시뻘 뭐라고?'/>
//                 <button onClick={onReset}>초기화</button>
//             </div>
//             <div>
//                 이게 글자냐?: {text}
//             </div>
//         </>
//     )
// }

// export default TodoList;

import React, { useState } from 'react';

function TodoList() {
    const [form, setForm] = useState({
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: '',
    });

    // 이메일과 비밀번호 일치 여부를 검사하는 상태
    const [isValid, setIsValid] = useState({
        isEmailMatch: true,
        isPasswordMatch: true,
    });

    // 이메일 또는 비밀번호 변경시 유효성 검사
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));

        if (name === "email" || name === "emailConfirm") {
            setIsValid(prev => ({
                ...prev,
                isEmailMatch: form.email === form.emailConfirm,
            }));
        } else if (name === "password" || name === "passwordConfirm") {
            setIsValid(prev => ({
                ...prev,
                isPasswordMatch: form.password === form.passwordConfirm,
            }));
        }
    };

    return (
        <>
            <input 
                placeholder='이메일을 입력하세요'
                type='email'
                name='email'
                value={form.email}
                onChange={handleInputChange}
                style={{ borderColor: isValid.isEmailMatch ? 'initial' : 'red' }}
            />
            <input 
                placeholder='이메일을 확인하세요'
                type='email'
                name='emailConfirm'
                value={form.emailConfirm}
                onChange={handleInputChange}
                style={{ borderColor: isValid.isEmailMatch ? 'initial' : 'red' }}
            />

            <input 
                placeholder='비밀번호를 입력하세요'
                type='password'
                name='password'
                value={form.password}
                onChange={handleInputChange}
            />
            <input 
                placeholder='비밀번호를 확인하세요'
                type='password'
                name='passwordConfirm'
                value={form.passwordConfirm}
                onChange={handleInputChange}
                style={{ borderColor: isValid.isPasswordMatch ? 'initial' : 'red' }}
            />
        </>
    );
}

export default TodoList;
