import React, { Component, Fragment } from 'react';
import componentService from '../../services/ComponentsService';
import edit from '../../Assets/Images/edit.svg';
import mail from '../../Assets/Images/mail.svg';
import settings from '../../Assets/Images/settings.svg';
import view from '../../Assets/Images/view.svg';
import image from '../../Assets/Images/image.svg';
import './dashboard.scss';
import { Button } from '../../Components/';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    state = {
        campaigns: '',
        forms:'',
    }
    componentDidMount() {
        componentService.fetchCampaigns().then(response => {
            this.setState({
                campaigns: response
            });
        });
        componentService.getForms().then(response => {
            console.log(response,122)
            this.setState({
                forms: response
            });
        });
    };

     getmessagecount = (campaignid) => {
        let count = 0;
        if(this.state.forms && campaignid)
        {
            count = this.state.forms[campaignid] && Object.keys(this.state.forms[campaignid]) && Object.keys(this.state.forms[campaignid]).length;
        }
        debugger;
        return count || 0;
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
                        
                    </h2>
                    <Button {...{ type: "button", val: "New Campaign", class: 'preview', handleClick: newcampaign }} />
                </header>
                {this.state.forms && this.state.campaigns && (
                    <section className="dashboard-wrapper">
                    <h1 className="dashboard-heading">Saved Campaigns</h1>

                    <section className="campaigns-wrapper">
                    {
                        Object.keys(this.state.campaigns).map(campaign => {
                            let campaigns = this.state.campaigns[campaign];
                            return <section key={campaign} className="campaigns">
                            <div className="campaigns-image">
                                <img src={image} alt="campaign 1" className="default" />
                            </div>
                            <div className="campaigns-footer">
                                <h3>{campaigns.name}</h3>
                                <div className="campaigns-actions">
                                    <NavLink to={'/create-campaign/'+campaign}><img src={edit} alt="edit" /></NavLink>                                    
                                    <NavLink to={'/publish/'+campaign}><img src={view} alt="View" /></NavLink>
                                    <a href="#"><img src={mail} alt="Responses" /><span className="count">{this.getmessagecount(campaign)}</span></a>
                                    <a href="#"><img src={settings} alt="Settings" /></a>
                                </div>
                            </div>
                        </section>
                        })
                    }
                    </section>
                </section>
                )}
                
            </section>
        );
    }
}

export default Dashboard;