// import { Component } from 'react';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ imageList }) => {
 
  return <ul className="ImageGallery">
    <ImageGalleryItem hits={imageList} /></ul>
}


// const BASE_URL = `https://pixabay.com/api`;
// const KEY = `30165080-69dc7af91b4e9c1a4c0e45d49`;

// export default class ImageGallery extends Component {
//   state = {
//     data: [],
//     loading: false,
//   };

//   componentDidUpdate(prevProps) {
//     if (
//       prevProps.imageSearchName !== this.props.imageSearchName ||
//       prevProps.page !== this.props.page
//     ) {
     
//       this.setState({ data: [] });
//       this.setState({ loading: true });

//       fetch(
//         `${BASE_URL}/?q=${this.props.imageSearchName}&page=${this.props.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(res => res.json())

//         .then(({ hits }) => {
//           this.setState(prevState => {
//             return {
//               data: [...prevState.data, ...hits],
//             };
//           });
//         })
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

  

//   render() {
//     return (
//       <div>
//         {this.state.loading && <p>Loading...</p>}
//         <ul className="ImageGallery">
//           <ImageGalleryItem data={this.state.data} />
//         </ul>
        
//       </div>
//     );
//   }
// }
