/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import styles from './style.module.css'
import { questions } from '../../constants'
import { styling } from './chartConfig'
import { connectToSocket, subscribeToNewVote } from '../../socketApi'
import { fetchVotes } from '../../utils/utils'

const SurveyChart = () => {
    const [votes, setVotes] = useState([])
    const { answers } = questions[0]    
    useEffect(() => {
        fetchVotes(answers, setVotes);
    }, [])

    useEffect(() => {
        connectToSocket();

        subscribeToNewVote(() => {
            fetchVotes(answers, setVotes);
        });
    }, []);

    const data = {
        labels: Object.keys(votes),
        datasets: [{
        ...styling,
        label: "Survey",
        data: Object.values(votes),
        }]
    };
    
    return (
        <div className={styles.survey}>
            <Bar data={data} height={25} width={50} />
            <div>
                <pre>
                    { JSON.stringify(votes, null,2)}
                </pre>
            </div>
        </div>
    )
}

export default SurveyChart
