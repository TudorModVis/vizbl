'use client'
import { useState } from "react"

import AccordionTile from "./AccordionTile"


const FAQAccordion = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className='w-[42rem]'>
        <div className="cursor-pointer"
            onClick={() => {
                activeIndex === 0 ? setActiveIndex(null) : setActiveIndex(0)
            }}
        >
            <AccordionTile 
                title="What forms of payment do you accept?" 
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio velit, ornare a velit ut, egestas lobortis lacus."
                index={0}
                activeIndex={activeIndex}
            />
        </div>

        <div className="cursor-pointer"
            onClick={() => {
                activeIndex === 1 ? setActiveIndex(null) : setActiveIndex(1)
            }}
        >
            <AccordionTile 
                title="How secure is my data in ViZBL?" 
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio velit, ornare a velit ut, egestas lobortis lacus."
                index={1}
                activeIndex={activeIndex}
            />
        </div>

        <div className="cursor-pointer"
            onClick={() => {
                activeIndex === 2 ? setActiveIndex(null) : setActiveIndex(2)
            }}
        >
            <AccordionTile 
                title="How do refunds work?" 
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio velit, ornare a velit ut, egestas lobortis lacus."
                index={2}
                activeIndex={activeIndex}
            />
        </div>

        <div className="cursor-pointer"
            onClick={() => {
                activeIndex === 3 ? setActiveIndex(null) : setActiveIndex(3)
            }}
        >
            <AccordionTile 
                title="How do I cancel a paid plan?" 
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio velit, ornare a velit ut, egestas lobortis lacus."
                index={3}
                activeIndex={activeIndex}
            />
        </div>

        <div className="cursor-pointer"
            onClick={() => {
                activeIndex === 4 ? setActiveIndex(null) : setActiveIndex(4)
            }}
        >
            <AccordionTile 
                title="Where can I have more information?" 
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce odio velit, ornare a velit ut, egestas lobortis lacus."
                index={4}
                activeIndex={activeIndex}
            />
        </div>
    </div>
  )
}

export default FAQAccordion