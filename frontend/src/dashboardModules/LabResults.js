import React from 'react';
import { data } from '../dashboardData/labResults';
class LabResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // labResults: [],
            // labResults: [],
            // youMightExperience: [],
            // labResults: [],
            // labResults: []
        };
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        //const { labResults } = this.state;
        let startdate = new Date('2019-10-10');
        let enddate = new Date('2019-10-17');

        const elems = data.labResults
            .filter(({ date }) =>
                (date >= startdate && date <= enddate))
            .map(({ date, text }) => {
                return (
                    <div>
                        <p>{text}</p>
                    </div>
                );
            })
        return (
            <div>
                {elems}
            </div>
        )
    }
}

export default LabResults;
