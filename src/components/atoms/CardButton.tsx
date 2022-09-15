import React from "react";

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const CardButton: React.FC<Props> = ({children, className = "", onClick = () => {}}) => {

    return <div onClick={onClick} className={className}>{children}</div>

}

export default CardButton;