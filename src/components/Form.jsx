import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Hello ${name}! Form submitted successfully.`);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;