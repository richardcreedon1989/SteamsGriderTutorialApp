import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

// client ID = 790458747890-f1ucrqihp2603t4nebbciken2gei68ln.apps.googleusercontent.com

const App = () => {
   return (<div className="ui container"> 
            <BrowserRouter> 
                <div>  
                <Header /> 
                <Route path="/" exact component={StreamList} /> 
                   <Route path="/streams/new" exact component={StreamCreate} />
                   <Route path="/streams/edit" exact component={StreamEdit} />
                   <Route path= "/streams/delete" exact component={StreamDelete} />
                   <Route path="/streams/show" exact component={StreamShow} />
                </div> 
            </BrowserRouter>
        </div>)
};

export default App; 