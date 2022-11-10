import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    imageList: [],
    imageSearchName: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevState) {
    const BASE_URL = `https://pixabay.com/api`;
    const KEY = `30165080-69dc7af91b4e9c1a4c0e45d49`;

    if (
      prevState.imageSearchName !== this.state.imageSearchName
      // || prevState.page !== this.state.page
    ) {
      console.log(prevState.imageSearchName)
      console.log(this.state.imageSearchName)
      

      // fetch(
      //   `${BASE_URL}/?q=${this.state.imageSearchName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      // )
      //   .then(res => res.json())
      //   .then(({ hits }) => {
      //     this.setState(prevState => {
      //       return {
      //         imageList:[...prevState.imageList, ...hits]
      //       }
      //     });
      //   });
    }
  }

  handleFormSubmit = imageSearchName => {
    this.setState({ imageSearchName });
    this.setState({ page: 1 });
  };

  clickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageGallery imageList={this.state.imageList} />

        {/* <ImageGallery
          imageSearchName={this.state.imageSearchName}
          page={this.state.page}
        /> */}

        <ToastContainer autoClose={3000} />
        <Button clickLoadMore={this.clickLoadMore} />
      </div>
    );
  }
}
