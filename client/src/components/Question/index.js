import React, { useState } from 'react'
import styles from './style.module.css'
import { questions } from '../../constants'
import { connectToSocket, sendMessage } from '../../socketApi'
import axios from 'axios'
const Question = () => {
    const { question, answers } = questions[0]
    const [answer, setAnswer] = useState(answers[0]);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleAnswerChange = (event) => {
        setAnswer(event.target.value)
    }

    const saveVote = async (answer) => {
        connectToSocket();

        await axios.post("/votes", {
            vote: answer
        }).catch(err => console.log(err))

        sendMessage('new-vote', answer)
    }

    return (
        <>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.questionText}>{ question }</div>
            <fieldset>
                {
                    answers.map((a, index) => {
                        return (
                            <label className={styles.answer} key={index} htmlFor={a}>
                                <input className={styles.answerText} id={a} onChange={(event) => handleAnswerChange(event)} name="os" type="radio" value={a} checked={answer===a}/> {a}
                            </label>
                        )
                    })
                }  
            </fieldset>
            <button onClick={() => saveVote(answer)} className={styles.button}>ONAYLA</button>
        </form>
        </>
    )
}

export default Question
