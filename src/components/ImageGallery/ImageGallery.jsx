import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageList,imageClick }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem hits={imageList} onClick={imageClick} />
    </ul>
  );
};

ImageGallery.propTypes = {
  imageList: PropTypes.array.isRequired,
  imageClick:PropTypes.func.isRequired,
}
