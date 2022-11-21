import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import FetchApi from './FetchApi/FetchApi';

import { useState, useEffect } from 'react';

export default function App() {
  const [imageList, setImageList] = useState([]);
  const [imageSearchName, setImageSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    if (!imageSearchName || !page) {
      return;
    }
    setLoading(true);

    FetchApi(imageSearchName, page, perPage)
      .then(res => res.json())
      .then(({ hits }) => {
        setImageList(imageList => [...imageList, ...hits]);
      })
      .finally(() => setLoading(false));
  }, [imageSearchName, page, perPage]);

  const handleFormSubmit = imageSearchName => {
    setImageSearchName(imageSearchName);
    setPage(1);
    setImageList([]);
  };

  const clickLoadMore = () => {
    setPage(page + 1);
    setLoading(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleImageClick = (url, tags) => {
    setUrl(url);
    setTags(tags);
    toggleModal();
  };

  return (
    <div className="App">
      <Searchbar onSubmitForm={handleFormSubmit} />
      <ImageGallery imageList={imageList} imageClick={handleImageClick} />

      {!loading &&
        imageList.length >= perPage &&
        Number.isInteger(imageList.length / perPage) && (
          <Button clickLoadMore={clickLoadMore} />
        )}

      {loading && <Loader />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={url} alt={tags} />
        </Modal>
      )}
      <ToastContainer autoClose={2000} />
    </div>
  );
}
