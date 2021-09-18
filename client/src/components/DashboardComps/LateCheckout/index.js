import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LATE_CHECKOUT } from "../../../utils/queries";

const LateCheckout = () => {
    const { loading, data } = useQuery(QUERY_LATE_CHECKOUT);
    const lateCheckouts = data?.lateCheckouts || [];

    useEffect(() => {
        // query the database at 11:01am to see who hasn't checked out that day
    }, [lateCheckouts]);
    return (
        <>
            <h2>Guest Count</h2>
            <div>
                {loading ? <div>Loading...</div> : <div className="guest-count"><h2>{lateCheckouts}</h2></div>}
            </div>
        </>
    );
};
export default LateCheckout;