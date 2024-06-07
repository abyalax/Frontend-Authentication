const Input = (props) => {
    const {name, type, placeholder} = props;
    return (
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
        />
    );
};
export default Input