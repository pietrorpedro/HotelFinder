import styles from "./Button.module.css";

const Button = ({text, width, onClick, type}) => {
    return (
        <button 
            className={styles.button}
            style={{width:`${width}`}}
            onClick={onClick}
            type={type}
        >
            {text}
        </button>
    )
}

export default Button;