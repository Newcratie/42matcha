import React, { Component } from 'react';
import ConversationList from './messenger-components/ConversationList';
import MessageList from './messenger-components/MessageList/message-list';
import '../public/css/Messenger.css';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {
    Segment,
    Container,
    Message,
    Button,
    Responsive, Header,
} from 'semantic-ui-react';
import store from "../redux/store/matcha-store";
import {getMatchsAction} from "../redux/action/matchs-action";
import Switcher from "./messenger-mobile/switcher";

class Messenger extends Component {
    constructor(props) {
        super(props);
        store.dispatch(getMatchsAction(this.props.messenger, this.props.login.id));
    }
    componentWillMount() {
        document.body.style.overflow = "hidden";
    }
    componentWillUnmount(){
        document.body.style.overflow = "";
    }
    render() {
        if (this.props.matchs[0].NodeIdentity === -1) {
            return (
                <Segment >
                    <Header as={"h3"}>Sorry loser, you have no match</Header>
                </Segment>
            )
        } else {
            if (this.props.messenger.suitorId === -1) {
                return (
                    <Container>
                        <Segment>
                            <Message
                                error
                                header="You don't have any match yet"
                                onClick={() => this.props.history.push('/')}
                            />
                            <Button
                                onClick={() => this.props.history.push('/')}
                            >Go back home</Button>
                        </Segment>
                    </Container>
                )
            } else {
                return (
                    <div>
                        <Responsive {...Responsive.onlyMobile}>
                            <Switcher mobile/>
                        </Responsive>
                        <Responsive {...Responsive.onlyTablet}>
                            <div className="messenger">
                                <div className="scrollable sidebar"><ConversationList/></div>
                                <div className="scrollable content"><MessageList/></div>
                            </div>
                        </Responsive>
                        <Responsive {...Responsive.onlyComputer}>
                            <div className="messenger">
                                <div className="scrollable sidebar"><ConversationList/></div>
                                <div className="scrollable content"><MessageList/></div>
                            </div>
                        </Responsive>
                    </div>
                );
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
        login: state.login,
        messenger: state.messenger,
        matchs: state.matchs,
    };
};

export default withRouter(connect(mapStateToProps)(Messenger))
