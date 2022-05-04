import React, { useReducer } from 'react';

function reducer(state, action) {
    console.log({ state, name: action.name, value: action.value });
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    이름: {name}
                </div>
                <div>
                    닉네임: {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info2;