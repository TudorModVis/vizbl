import FAQAccordion from "./FAQAccordion"
import FAQTitle from "./FAQTitle"

const FAQ:React.FC = () => {
  return (
    <div className='mt-[14rem] flex justify-center items-center gap-[6.25rem]'>
      <FAQTitle />
      <FAQAccordion />
    </div>
  )
}

export default FAQ