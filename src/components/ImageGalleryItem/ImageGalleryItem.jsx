

export const ImageGalleryItem = ({ hits }) => {
  return hits.map(({ id, largeImageURL, webformatURL, tags }) => (
    <li className='ImageGalleryItem' key={id}>
      <img className='ImageGalleryItem-image' src={webformatURL} alt={tags} />
    </li>
  ));
};


