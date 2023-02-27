import React, { useState } from 'react'
import GalleryImage from './GalleryImage'
import initialState from './data'
import './App.css';


const App = () =>{
  let [currentIndex, setCurrentIndex] = useState(0)
  const [photos] = useState(initialState.photos )

  return (
    <div style={{width: '480px', margin: 'auto', border: '1px solid'}} className="App">
      <GalleryImage 
        photos={photos} 
        currentIndex={currentIndex} 
        changeImage={() => {
          setCurrentIndex((photos.length === currentIndex + 1) ? 0 : currentIndex += 1 )
        }} 
      />
    </div>
  );
}

// ******************************************
// App versione classe
// ******************************************
// class App extends React.Component{

//   constructor(){
//     super() 
//     this.state = initialState
//     this.changeImage = this.changeImage.bind(this)
//   }

//   changeImage(e){
//     const currentIndex = (this.state.photos.length === this.state.currentIndex + 1 ) ? 0 : this.state.currentIndex += 1 
//     this.setState( {currentIndex} )
//   }


//   render(){
//     const {photos, currentIndex} = this.state

//     return (
//       <div style={{width: '480px', margin: 'auto', border: '1px solid'}} className="App">
//         <GalleryImage 
//           photos={photos} 
//           currentIndex={currentIndex} 
//           changeImage={this.changeImage} 
//         />
//       </div>
//     );
//   }
// }

export default App;
