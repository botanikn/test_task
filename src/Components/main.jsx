import React, {useState} from 'react';

const Main = () => {

    let [titles, titlesAdd] = useState([]);

    window.onload = () => {
        for (let i = 1; i < 46; i++) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
                .then(response => response.json())
                .then(json => {
                    titlesAdd(titles => [...titles, json.title])
                })
        }
    }

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