import scss from './ImageHeader.scss'
const ImageHeader =(props) => {
    return (
        <>
        {props.backgroundImageFe07&&props.backgroundImageFe07.map((item) => {
                    return (
                        <img src={item.backGroundFe07} alt=""/>
                    )
                }
            )
        }
        </>
    )
}
export default ImageHeader
