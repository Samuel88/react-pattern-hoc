import { useState } from "react";

const withCountdown = (WrapperComponent, initialValue = 0, incrementValue = 1) => {
    return (props) => {
        const [counter, setCounter] = useState(initialValue);
        return <WrapperComponent counter={counter} increment={() => setCounter((old) => old + incrementValue)} {...props}/>
    };
}

export default withCountdown;