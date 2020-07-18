import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, FormGroup } from 'reactstrap';
import { pushToast } from '../../../components/Toast';

const StateEg = () => {
    const [text, setText] = useState('');

    const onTextChange = e => setText(e.target.value);

    const onPressButton = () => pushToast('info', text);

    return (
        <div>
            <span>This is state eg screen</span>
            <Link to='/list-user'>Go to list user</Link>
            <FormGroup>
                <Input
                    type="text"
                    placeholder="Type here..."
                    onChange={onTextChange}
                />
            </FormGroup>
            <Button color='info' onClick={onPressButton}>Display</Button>
        </div >
    );
};

export default StateEg;
