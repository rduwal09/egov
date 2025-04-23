import './image_with_loader.css';


const ImageWithLoader = ({ imageUrl, alternativeText}) => {

    return (
        <div className="ImageWithLoader">
           
            <img
                
                src={imageUrl}
                alt={alternativeText}
                />
        </div>
    )
}

export default ImageWithLoader