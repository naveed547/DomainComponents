import React, { Fragment } from "LibApp/react";
import { useSelector } from "LibApp/react-redux";

const AppName = () => {
    const { hostAppName, page1AppName, page2AppName } = useSelector((state) => ({
        hostAppName: state.host.appName,
        page1AppName: state.page1.appName,
        page2AppName: state.page2.appName
    }));
    return (
        <Fragment>
            <h2>AppName from store hostReducer</h2>
            <p>{hostAppName}</p>
            <h2>AppName from store page1Reducer</h2>
            <p>{page1AppName}</p>
            <h2>AppName from store page2Reducer</h2>
            <p>{page2AppName}</p>
        </Fragment>
    );
};
export default AppName;