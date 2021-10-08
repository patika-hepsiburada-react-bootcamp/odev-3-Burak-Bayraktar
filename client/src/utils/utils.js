import axios from 'axios'

export const fetchVotes = (answers, setVotes) => {
    answers.map((answer) => 
    axios.get(`/votes/${answer}`, {headers: {"Access-Control-Allow-Origin": "*"}}).then(res => {
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