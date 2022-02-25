import React, { useState } from 'react';

//Styles
import './Form.scss';

const Form = ({ setItems, items }) => {
    const [message, setMessage] = useState('');
    const setData = (e) => {
        e.preventDefault();
        if (e.target.title.value === '' || e.target.link.value === '') {
            return setMessage('Por favor, completá los datos.');
        }
        setNewItems(e);
        clearingInputs(e);
    };

    const setNewItems = (e) => {
        setItems([
            ...items,
            {
                id: +new Date(),
                title: e.target.title.value,
                link: e.target.link.value,
                commentary: e.target.commentary.value,
            },
        ]);
    };

    const clearingInputs = (e) => {
        e.target.title.value = '';
        e.target.link.value = '';
        e.target.commentary.value = '';
        setMessage('');
    };

    return (
        <>
            <form id="form" onSubmit={setData} autoComplete="off">
                <div name="inputref" className="input-wrap">
                    <label name="title" htmlFor="title">
                        Title:
                    </label>
                    <input type="text" name="title" id="title"></input>
                </div>
                <div className="input-wrap">
                    <label htmlFor="link" name="link">
                        Link:
                    </label>
                    <input id="link" type="text" name="link"></input>
                </div>
                <div className="input-wrap">
                    <label htmlFor="commentary" name="commentary">
                        Commentary:
                    </label>
                    <input id="commentary" type="text" name="commentary"></input>
                </div>
                <div className="btn-container">
                    <button type="submit" className="btn-send">
                        Enviar
                    </button>
                </div>
            </form>
            <p>{message}</p>
        </>
    );
};

export default Form;
