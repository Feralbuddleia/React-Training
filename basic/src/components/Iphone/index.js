import React, { Component } from 'react';
import Content from './Content';
import Docker from './Docker';
import StatusBar from './StatusBar';
import './Iphone.css'

class Iphone extends Component {
    render() {
        const data ={
            apps: [
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/phone_ios7_ios_7.png',
                    title: 'phone',
                    isDocker: true
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/messages_ios7_ios_7.png',
                    title: 'message',
                    isDocker: true
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/mail_ios7_ios_7.png',
                    title: 'mail',
                    isDocker: true
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/app_store_ios7_ios_7.png',
                    title: 'apple store',
                    isDocker: true
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/music_ios7_ios_7.png',
                    title: 'music',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/camera_ios7_ios_7.png',
                    title: 'camera',
                    isDocker: false,
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/photos_ios7_ios_7.png',
                    title: 'photos',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/maps_ios7_ios_7.png',
                    title: 'map',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/weather_ios7_ios_7.png',
                    title: 'weather',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/stocks_ios7_ios_7.png',
                    title: 'stocks',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/clock_ios7_ios_7.png',
                    title: 'clock',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/calendar_ios7_ios_7.png',
                    title: 'calender',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/contacts_ios7_ios_7.png',
                    title: 'contract',
                    isDocker: false
                },
                {
                    src: 'https://cdn2.iconfinder.com/data/icons/apple-ios7-icons/118/face_time_ios7_ios_7.png',
                    title: 'face time',
                    isDocker: false
                }
            ]
        }
        //
        //
        return (
            <div className="Iphone-container">
                <StatusBar />
                <Content apps={data.apps.filter(app => !app.isDocker)} />
                <Docker apps={data.apps.filter(app => app.isDocker)} />
            </div>
        )
    }
}

export default Iphone;