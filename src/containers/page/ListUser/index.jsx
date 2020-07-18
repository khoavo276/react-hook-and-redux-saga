import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getListUsers } from '../../../actions/user';
import UserItem from "../../../components/UserItem/UserItem";
import Loading from "../../../components/Loading/Loading";
import { translate } from 'react-i18next';

const Index = props => {
    const { getListUsers, listUser, loading, t } = props;

    useEffect(() => {
        getListUsers();
    }, [getListUsers]);

    return (
        <div>
            <p className='test-red'>This is list user screen</p>
            <Link to='/state-eg'>{t('copy_success')}</Link>
            <Loading data={listUser} loading={loading}/>
            {
                listUser && listUser.map((user, index) => (
                    <UserItem user={user} key={index}/>
                ))
            }
        </div>
    );
};

const mapStateToProps = store => {
    return {
        listUser: store.user.listUser,
        loading: store.utils.loading,
    };
};

const mapActionToProps = {
    getListUsers,
};

export default compose(translate('translations'),withRouter, connect(mapStateToProps, mapActionToProps))(Index);
