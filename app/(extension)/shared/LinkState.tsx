interface LinkStateProps {
    title: string,
    text: string,
    text2?: string,
    succes: boolean
}

const LinkState: React.FC<LinkStateProps> =  ({title, text, text2, succes}) => {
    const imageSrc = succes ? "/images/models/tick.gif" : "/images/models/stop.gif";
    const finalText = succes ? "Open the extension to continue." : "Open the extension to resend the link.";

    return (
        <div className="w-[40.75rem] flex flex-col items-center">
            <img src={imageSrc} alt="gif" className="ss:w-60 w-[40]" />
            <p className="font-bold lg:text-[4rem] ss:text-[3rem] text-[2rem] leading-[140%] mb-12 text-center">{title}</p>
            <p className="text-gray lg:text-2xl ss:text-xl text-base font-bold leading-[140%] text-center mb-12">{text2 === undefined ? text : <>{text}<br/>{text2}</>}</p>
            <p className="lg:text-2xl ss:text-xl text-base font-bold leading-[140%] text-center">{finalText}</p>
        </div>
    );
}

export default LinkState;