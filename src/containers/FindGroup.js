import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { fetchFindGroupByIdRequest } from '../actions/findGroupById';
import { getFoundGroupById } from '../reducers/';

class FindGroup extends PureComponent {
    state = {
        url: ''
    };

    // componentDidMount() {
    //     const { fetchFindGroupByIdRequest } = this.props;
    //     fetchFindGroupByIdRequest('https://vk.com/id214031390/asf/asf');
    // }

    handleUrl = () => {
        const { fetchFindGroupByIdRequest } = this.props;
        const { url } = this.state;

        fetchFindGroupByIdRequest(url);
    };

    handleClearBtn = () => {
        this.setState({ url: '' });
    };

    handleControl = ({ target: { value } }) => {
        this.setState({ url: value });
    };

    render() {
        const { url } = this.state;
        const { foundIdGroup } = this.props;
        console.log(foundIdGroup.group);
        return (
            <InputGroup>
                <FormControl
                    aria-describedby="basic-addon1"
                    onChange={this.handleControl}
                    value={url}
                />
                <InputGroup.Append>
                    <Button variant="outline-dark" onClick={this.handleUrl}>
                        Искать
                    </Button>
                    <Button
                        variant="outline-dark"
                        onClick={this.handleClearBtn}
                    >
                        X
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
}

const mapStateToProps = state => {
    return { foundIdGroup: getFoundGroupById(state) };
};

export default connect(mapStateToProps, { fetchFindGroupByIdRequest })(
    FindGroup
);
