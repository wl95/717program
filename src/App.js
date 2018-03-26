import React, { Component } from 'react'
import { BrowserRouter , Switch ,Redirect} from 'react-router-dom'
import RouterWraper from './components/Router'
import router from './router'

import './utils/fontSet'
import './css/reset.css'
import './static/font/iconfont.css'
import 'swiper/dist/css/swiper.min.css'


class App extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/homepage/home"/>
                <RouterWraper routers={router.routers}/>
            </Switch>
        </BrowserRouter>
    }
}

export default App;