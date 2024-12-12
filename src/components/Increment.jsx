import withCountdown from "../hocs/withCounter";

const Increment = ({counter, increment}) => {
    return <button onClick={() => increment()}>{counter}</button>
};

export default withCountdown(Increment, 0);