import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log("평균값 계산 중");
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);

    const onKeyDown = e => {
        if (e.keyCode === 13) onInsert();
    }

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} onKeyDown={onKeyDown} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((val, idx) => (
                            <li key={idx}>{val}</li>
                    ))
                }
            </ul>
            <div>
                평균값: {avg}
            </div>
        </div>
    )
}

export default Average;