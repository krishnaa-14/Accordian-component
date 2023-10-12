import AccordianItem from './AccordianItem';
import accordianData from './accordianData.json';
import {useState} from 'react';

const Accordian = () => {

    const [activeItem, setActiveItem] = useState("0");

    return (
        <div>
            {accordianData.length > 0 && 
                <div>
                    {
                        accordianData.map(item => 
                            <div key = {item.id}>
                                <AccordianItem activeItem = {activeItem} setActiveItem = {setActiveItem} title = {item.title} description={item.description} id = {item.id}> </AccordianItem>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Accordian;