import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    InputGroup,
    FormControl,
    Image,
    Col,
    Alert
} from 'react-bootstrap';
import _ from 'lodash';

import { VK_LINK } from '../constants';
import {
    fetchFindGroupByIdRequest,
    settingsUserSet,
    clearFindGroupById,
    dataSaveRequest,
    dataLoadRequest
} from '../actions';
import { getFoundGroupById, getSettings } from '../reducers/';

class FindGroup extends PureComponent {
    state = {
        url: ''
    };

    componentDidMount() {
        this.props.dataLoadRequest();
    }

    componentDidUpdate() {
        const {
            foundIdGroup,
            settings,
            settingsUserSet,
            dataSaveRequest
        } = this.props;
        const checkRepeat = _.isEqual(foundIdGroup.result, settings.user);

        if (!checkRepeat && foundIdGroup.result) {
            settingsUserSet(foundIdGroup.result);
            dataSaveRequest();
        }
    }

    handleUrl = () => {
        const { foundIdGroup, fetchFindGroupByIdRequest } = this.props;
        const { url } = this.state;

        if (url && foundIdGroup.url !== url) {
            fetchFindGroupByIdRequest(url);
            this.setState({ url: '' });
        }
    };

    handleClearBtn = () => {
        this.props.clearFindGroupById();
    };

    handleControl = ({ target: { value } }) => {
        this.setState({ url: value });
    };

    handleEnter = ({ key }) => {
        if (key === 'Enter') this.handleUrl();
    };

    handleErrors = () => {
        const {
            foundIdGroup: { result, error }
        } = this.props;

        if (error) {
            return {
                text: 'неверно введен url или id (сообщества/страницы)',
                type: 'danger'
            };
        } else if (!_.isEmpty(result)) {
            return {
                text: `Страница для постов сохранена`,
                type: 'success'
            };
        } else {
            return {
                text: 'Введите ссылку или ID (группы/страницы)',
                type: 'secondary'
            };
        }
    };

    render() {
        const { url } = this.state;
        const {
            settings: {
                user: { id, type, photo, name }
            }
        } = this.props;
        const photoSrc = photo
            ? photo
            : `${VK_LINK}/images/community_100.png?ava=1`;

        const { text: messageText, type: messageType } = this.handleErrors();
        let vkLinkId = '';

        if (type === 'user') vkLinkId = `id${id}`;
        else if (type === 'public') vkLinkId = `public${id}`;
        else vkLinkId = '';

        return (
            <Fragment>
                <Col xl={2} className="d-flex justify-content-center">
                    <div>
                        <a
                            className="d-block text-center"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`${VK_LINK}/${vkLinkId}`}
                        >
                            <Image src={photoSrc} roundedCircle />
                        </a>
                        <div>{name}</div>
                    </div>
                </Col>

                <Col xl={10}>
                    <Alert variant={messageType}>{messageText}</Alert>
                    <InputGroup>
                        <FormControl
                            aria-describedby="basic-addon1"
                            onChange={this.handleControl}
                            value={url}
                            onKeyPress={this.handleEnter}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="outline-dark"
                                onClick={this.handleUrl}
                            >
                                Сохранить
                            </Button>
                            <Button
                                variant="outline-dark"
                                onClick={this.handleClearBtn}
                            >
                                X
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        foundIdGroup: getFoundGroupById(state),
        settings: getSettings(state)
    };
};

export default connect(mapStateToProps, {
    fetchFindGroupByIdRequest,
    settingsUserSet,
    clearFindGroupById,
    dataSaveRequest,
    dataLoadRequest
})(FindGroup);
