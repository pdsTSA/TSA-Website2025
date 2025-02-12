const ColorBlock = ({children, color, className}) => {
    return <div style={{backgroundColor: color, width: "100%"}} className={className}>
        {children}
    </div>
}

export default ColorBlock