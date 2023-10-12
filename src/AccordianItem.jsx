
const AccordianItem = ({id, title, description, activeItem, setActiveItem}) => {

    const toggleActiveItem = () => {
        if(id === activeItem) {
            setActiveItem("0");
        }
        else {
            setActiveItem(id);
        }
    }

    return (
        <>
            <div style = {{display : "flex", justifyContent : "space-between", border : "1px solid black", padding : "10px", height : "40px", width : "400px"}}>
                <div>
                    {title}
                </div>
                <div>
                    <button style = {{height : "30px"}} onClick = {() => toggleActiveItem(id)}> {activeItem !== id ? "Expand" : "Collapse"} </button>
                </div>
            </div>
            { id === activeItem && 
            <div style = {{display : "flex", justifyContent : "space-between", border : "1px solid black", padding : "10px", height : "100%", width : "400px"}}>
                {description}
            </div>
            }
        </>
    )
}

export default AccordianItem;