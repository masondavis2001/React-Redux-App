import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAdvice } from "../actions";

const Advice = ({ getAdvice, advice, isFetching }) => {

    useEffect(() => {
        getAdvice();
    }, [getAdvice]);

    if (isFetching) {
        return <h2>Getting Advice...</h2>;
    }

    return (
        <>
            <h2>Advice: {advice} </h2>
            <button onClick={getAdvice}>Get Some Advice</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return { advice: state.advice, isFetching: state.isFetching };
};

const mapDispatchToProps = { getAdvice };

export default connect(mapStateToProps, mapDispatchToProps)(Advice);