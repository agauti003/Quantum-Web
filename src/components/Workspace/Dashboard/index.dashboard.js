/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React from 'react';
import Accounts from '../Accounts/index.account';
import Transactions from '../Transactions/index.transactions';
import Editor from '../Editor/index.editor';
import Contracts from '../Contracts/index.contract';

export default function Dashboard(props) {
    switch (true) {
        case props.SelectedSidebar === 'Accounts':
            return <Accounts {...props} />;
        case props.SelectedSidebar === 'Transactions':
            return <Transactions {...props} />;
        case props.SelectedSidebar === 'Editor':
            return <Editor {...props} />;
        case props.SelectedSidebar === 'Contracts':
            return <Contracts {...props} />;
        default:
            return <Accounts {...props} />;
    }
}
