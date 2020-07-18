import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = props => {
    const { data, loading } = props;

    return !data && loading && (
        <Spinner color="primary" />
    );
};

export default Loading;