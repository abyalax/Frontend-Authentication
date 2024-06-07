const Button = (props) => {
    const {children = "custom", variant = "bg-blue-500 hover:bg-blue-700"} = props;
    return (
      <button className ={`${variant} text-white font-bold mx-1 py-2 px-4 rounded-md`}>
        {children}
      </button>
    );
  }
export default Button;