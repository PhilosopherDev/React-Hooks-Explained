import { useEffect, useState } from "react";

function Info() {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState('');
    // useEffect(() => {
    //     console.log("rendering");
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    // useEffect(() => {
    //     console.log("component did mount");
    // }, [])

    // useEffect(() => {
    //     console.log("name changed", name);
    // }, [name])

    // useEffect(() => {
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name]);

    useEffect(() => {
        console.log("effect");
        return () => {
            console.log('unmount');
        }
    }, [])

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={onChangeName} />
            <input type="text" onChange={onChangeNickname} />
            <p>이름: {name}</p>
            <p>닉네임: { nickname }</p>
        </div>
    )

}

export default Info;