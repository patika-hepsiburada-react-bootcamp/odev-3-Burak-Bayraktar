import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import styles from './style.module.css'
import axios from 'axios'
import { questions } from '../../constants'
import { styling } from './chartConfig'
const SurveyChart = () => {
    const { answers } = questions[0]
    const labels = answers
    const values = [10,20,30]
    
    useEffect(() => {
        axios.get("http://localhost:3002/votes").then(res => {
            console.log(res.data)
        })
    }, [])

    const data = {
        labels: labels,
        datasets: [{
        ...styling,
        label: "Survey",
        data: values
        }]
    };
    
    return (
        <div className={styles.survey}>
            <Bar data={data} height={25} width={50} />
        </div>
    )
}

export default SurveyChart
