
import { toast } from 'react-toastify'

import { useState } from 'react';

export default function Searchbar({onSubmitForm}) {
  const [imageSearchName, setImageSearchName] = useState('');
  

  const inputNameChange = e => {
    setImageSearchName(e.currentTarget.value.toLowerCase() );
  };

  const submitForm = e => {
    e.preventDefault();

    if (imageSearchName.trim() === '') {
     return toast.error('Enter search information');
      
    }

    onSubmitForm(imageSearchName);
    setImageSearchName( '' );
    
  };

  
    return (
      <header className='Searchbar'>
        <form onSubmit={submitForm} className='SearchForm'>
          <button type="submit" className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>

          <input
            className='SearchForm-input'
            type="text"
            value={imageSearchName}
            
            placeholder="Search images and photos"
            onChange={inputNameChange}
          />
        </form>
        
      </header>
    );
  
}




// export default class Searchbar extends Component {
//   state = {
//     imageSearchName: '',
//   };

//   inputNameChange = e => {
//     this.setState({ imageSearchName: e.currentTarget.value.toLowerCase() });
//   };

//   submitForm = e => {
//     e.preventDefault();

//     if (this.state.imageSearchName.trim() === '') {
//      return toast.error('Enter search information');
      
//     }

//     this.props.onSubmitForm(this.state.imageSearchName);
//     this.setState({ imageSearchName: '' });
    
//   };

//   render() {
//     return (
//       <header className='Searchbar'>
//         <form onSubmit={this.submitForm} className='SearchForm'>
//           <button type="submit" className='SearchForm-button'>
//             <span className='SearchForm-button-label'>Search</span>
//           </button>

//           <input
//             className='SearchForm-input'
//             type="text"
//             value={this.state.imageSearchName}
//             // autocomplete="off"
//             // autofocus
//             placeholder="Search images and photos"
//             onChange={this.inputNameChange}
//           />
//         </form>
        
//       </header>
//     );
//   }
// }
