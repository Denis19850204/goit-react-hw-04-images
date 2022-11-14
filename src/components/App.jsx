import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import FetchApi from './FetchApi/FetchApi';

export default class App extends Component {
  state = {
    imageList: [],
    imageSearchName: '',
    page: 1,
    perPage: 12,
    loading: false,
    showModal: false,
    url: null,
    tags: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageSearchName, page, perPage } = this.state;

    if (
      this.state.imageSearchName !== prevState.imageSearchName ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });

      FetchApi(imageSearchName, page, perPage)
        .then(res => res.json())
        .then(({ hits }) => {
          this.setState(prevState => {
            return {
              imageList: [...prevState.imageList, ...hits],
            };
          });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = imageSearchName => {
    this.setState({ imageSearchName, page: 1, imageList: [] });
  };

  clickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  handleImageClick = (url, tags) => {
    this.setState({ url, tags });
    this.toggleModal();
  };

  render() {
    const { loading, imageList, perPage, showModal, url, tags } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageGallery
          imageList={imageList}
          imageClick={this.handleImageClick}
        />

        {!loading && imageList.length >= perPage && (
          <Button clickLoadMore={this.clickLoadMore} />
        )}

        {loading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={url} alt={tags} />
          </Modal>
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}
