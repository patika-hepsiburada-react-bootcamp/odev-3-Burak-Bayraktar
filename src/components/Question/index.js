import React from 'react'

const Question = () => {

    const handleSubmit = (e, index) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(index)
    }
    return (
        <form onSubmit={(e, index) => handleSubmit(e, index)}>
            <input name="os" type="radio" value="Windows" /> Windows
            <input name="os" type="radio" value="Mac OS" /> Mac OS
            <input name="os" type="radio" value="Debian" /> Debian
            <input name="os" type="radio" value="Ubuntu" /> Ubuntu
            <input name="os" type="radio" value="Pardus" /> Pardus
            <input name="os" type="radio" value="Chrome OS" /> Chrome OS

            <button>ONAYLA</button>
        </form>
    )
}

export default Question
