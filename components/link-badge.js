import Image from "next/image";

export default function LinkBadge({image, link, width, height}) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="link-badge">
            <Image src={image} alt="Logo" width={width} height={height}/>
        </a>
    )
}
