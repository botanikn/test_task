import React, {useState} from 'react';

const Main = () => {

    let [titles, titlesAdd] = useState([]);
    // let id = 0;

    window.onload = () => {
        for (let i = 1; i < 21; i++) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
                .then(response => response.json())
                .then(json => {
                    titlesAdd(titles => [...titles, json.title])
                })
        }
    }
    // window.onload = () => {
    //     if (window.innerWidth * window.innerHeight / 10 >= 120000) {
    //         for (let i = 1; i < 21; i++) {
    //             fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    //                 .then(response => response.json())
    //                 .then(json => {
    //                     titlesAdd(titles => [...titles, json.title])
    //                 })
    //         }
    //         id = 1;
    //     }
    //     else if (window.innerWidth * window.innerHeight / 10 < 120000 && window.innerWidth * window.innerHeight / 10 >= 100000) {
    //         for (let i = 1; i < 17; i++) {
    //             fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    //                 .then(response => response.json())
    //                 .then(json => {
    //                     titlesAdd(titles => [...titles, json.title])
    //                 })
    //         }
    //         id = 2;
    //     }
    // }

    // window.addEventListener('resize', (event) => {
    //     if (window.innerWidth * window.innerHeight / 10 >= 120000 && id !== 1) {
    //         titlesAdd(titles = [])
    //         for (let i = 1; i < 21; i++) {
    //             fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    //                 .then(response => response.json())
    //                 .then(json => {
    //                     titlesAdd(titles => [...titles, json.title])
    //                 })
    //         }
    //         id = 1;
    //     }
    //     else if (window.innerWidth * window.innerHeight / 10 < 120000 && window.innerWidth * window.innerHeight / 10 >= 100000  && id !== 2) {
    //         titlesAdd(titles = [])
    //         for (let i = 1; i < 17; i++) {
    //             fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    //                 .then(response => response.json())
    //                 .then(json => {
    //                     titlesAdd(titles => [...titles, json.title])
    //                 })
    //         }
    //         id = 2;
    //     }
    //     else id = 3;
    // })

    return (
        <div className={"main"}>
            <div className={"header"}>
                <h4>Header</h4>
            </div>
            <div className={"body"}>
                <div className={"left"}>
                    <h4>Left Panel</h4>
                </div>
                <div className={"center"}>
                    {
                        titles.map((title) => {
                            return(
                                <div className={"title"}>
                                    {title}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={"right"}>
                    <h4>Right Panel</h4>
                </div>
            </div>
            <div className={"footer"}>
                <h4>Footer</h4>
            </div>
        </div>
    );
};

export default Main;