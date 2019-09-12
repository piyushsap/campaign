import React, { Component, Fragment } from 'react';
import componentService from '../../services/ComponentsService';
import edit from '../../Assets/Images/edit.svg';
import mail from '../../Assets/Images/mail.svg';
import settings from '../../Assets/Images/settings.svg';
import view from '../../Assets/Images/view.svg';
import image from '../../Assets/Images/image.svg';
import './dashboard.scss';
import { Button } from '../../Components/';

class Dashboard extends Component {
    state = {
        campaigns: []
    }
    componentWillMount() {
        componentService.fetchCampaigns().then(response => {
            this.setState({
                campaigns: response
            });
        });
    };
    render() {
        const newcampaign = () => {
            let campaign = {
                name: 'Campaign 1',
            }
            componentService.postCampaign(campaign).then(response => {
                this.props.history.push("/create-campaign/"+response.name)
            });
        }
        return (
            <section className="dashboard">
                <header className="dashboard-header">
                    <h2>
                        Campaign builder
                        <Button {...{ type: "button", val: "New Campaign", class: 'default', handleClick: newcampaign }} />
                    </h2>
                </header>
                <section className="dashboard-wrapper">
                    <h1 className="dashboard-heading">Saved Campaigns</h1>

                    <section className="campaigns-wrapper">
                    {
                        Object.keys(this.state.campaigns).map(campaign => {
                            let campaigns = this.state.campaigns[campaign];
                            return <section className="campaigns">
                            <div className="campaigns-image">
                                <img src={image} alt="campaign 1" className="default" />
                            </div>
                            <div className="campaigns-footer">
                                <h3>{campaigns.name}</h3>
                                <div className="campaigns-actions">
                                    <a href="#"><img src={edit} alt="edit" /></a>
                                    <a href="#"><img src={view} alt="View" /></a>
                                    <a href="#"><img src={mail} alt="Responses" /></a>
                                    <a href="#"><img src={settings} alt="Settings" /></a>
                                </div>
                            </div>
                        </section>
                        })
                    }
                    </section>
                </section>
            </section>
        );
    }
}

export default Dashboard;