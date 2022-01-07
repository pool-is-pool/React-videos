import React from "react"
import SearchBar from "./SearchBar"
// import CssTest from "./cssLibraryTest"
import VideoList from "./VideoList"
import youtube from "../api/youtube"
import VideoDetail from "./VideoDetail"

class App extends React.Component {
    state= { videos: [], selectedVideo: null}
    
    componentDidMount() {
        this.onTermSubmit("buildings")
    }



    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(response)
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})    
    }
    
    render() {
        return(
            <div class="ui container"> 
                <SearchBar forSearchBar={this.onTermSubmit} />
                <div class="ui grid">
                    <div class="ui row">
                        <div class='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        
                        <div class="five wide column" >
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
               
            </div>
        ) 
    }
}

// class App extends React.Component {
//     render() {
//         return(
//             <div> 
//                 <CssTest />
//              </div>
//         ) 
//     }
// }

export default App