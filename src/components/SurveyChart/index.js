import React from 'react'
import { Bar } from 'react-chartjs-2'
import styles from './style.css'

const SurveyChart = () => {
    const styling = {
        barPercentage: 0.5,
        barThickness: 50,
        maxBarThickness: 40,
        minBarLength: 4,
        backgroundColor: 'black',
        borderColor: 'rgb(255, 99, 132)',
    }
    const labels = ["Windows", "Mac OS", "Debian", "Ubuntu", "Pardus", "Chrome OS"]
    const values = [10,20,30,40,50,60]
    
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
