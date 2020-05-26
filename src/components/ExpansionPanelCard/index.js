import React, {Fragment} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FontAwesome from "../UiStyle/FontAwesome";

import './style.scss';

const ExpansionPanelCard = ({faqlists}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Fragment>
            {
                faqlists.map(item => {
                    return (
                        <ExpansionPanel className="collapseItem" expanded={expanded === item.id}
                                        onChange={handleChange(item.id)}>
                            <ExpansionPanelSummary
                                className="collapseHeader"
                                expandIcon={<FontAwesome name="angle-down"/>}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                {item.id}. {item.title}
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails
                                className="collapseBody"
                            >
                                {item.body}
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })
            }
        </Fragment>
    )
};

export default ExpansionPanelCard;