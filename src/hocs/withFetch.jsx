import axios from "axios";
import { useEffect, useState } from "react";

const withFetch = (WrappedComponent, url) => {
    return (props) => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        useEffect(() => {
            fetchData();
        }, [url]);

        return <WrappedComponent data={data} error={error} {...props}/>
    }
}

export default withFetch;