import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ hits, onClick }) => {
  return hits.map(({ id, largeImageURL, webformatURL, tags, }) => (
    <li className="ImageGalleryItem" key={id}>
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={()=>onClick(largeImageURL,tags)}
          />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  hits: PropTypes.array.isRequired,
  onClick:PropTypes.func.isRequired
}
