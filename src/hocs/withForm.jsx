import { useState } from "react";

const withForm = (WrappedComponent, initialValue) => {
    return (props) => {
        const [formData, setFormData] = useState(initialValue);

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((oldFormData) => ({
                ...oldFormData,
                [name]: value
            }))
        }

        const resetInput = () => {
            setFormData(initialValue);
        };

        return <WrappedComponent resetInput={resetInput} handleInputChange={handleInputChange} formData={formData} {...props}/>
    }
}

export default withForm;