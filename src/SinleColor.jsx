import { toast } from "react-toastify";

const SingleColor = ({index, color}) => {
    const {hex, weight} = color;
    const saveToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`#${hex}`);
            toast.success('copying to clipboard');
        } catch (error) {
            toast.error('Error copying to clipboard');
        }
    }
    return (
        <article 
            className={index > 10 ? 'color color-light' : 'color'}
            style={{background: `#${hex}`}}
            onClick={saveToClipboard}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </article>

    )
}

export default SingleColor;