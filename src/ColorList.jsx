import SingleColor from "./SinleColor";

const ColorList = ({colors}) => {
    return (
        <section className="colors">
            {colors.map((color, index) => <SingleColor index={index} color={color} />)}
        </section>
    );
  };
  export default ColorList;