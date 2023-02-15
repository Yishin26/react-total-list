const Input = ({ id, text, value, onChangeHandler }) => {
    return (
        <>
            <label htmlFor={id} className="">{text}</label>
            <input type="text" id={id} value={value} onChange={onChangeHandler} />

        </>
    );
};

export default Input;
