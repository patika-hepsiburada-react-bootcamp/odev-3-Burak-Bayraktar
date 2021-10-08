import axios from 'axios'

export const fetchVotes = (answers, setVotes) => {
    answers.map((answer) => 
    axios.get(`${process.env.REACT_APP_API_URL}/votes/${answer}`, {headers: {"Access-Control-Allow-Origin": "*"}}).then(res => {
        setVotes((prev) => {
            const result = {
                ...prev,
                [answer]: res.data.length
            }

            return result;
        })
        
    }).catch(err => console.log(err))
)
}