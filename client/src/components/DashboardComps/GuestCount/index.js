import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GUEST_COUNT } from "../../../utils/queries";

const GuestCount = () => {
    const { loading, data } = useQuery(QUERY_GUEST_COUNT);
    const guestCount = data?.guestCount || 0;

    return (
        <>
            <h2>Guest Count</h2>
            <div>
                {loading ? <div>Loading...</div> : <div className="guest-count"><h2>{guestCount}</h2></div>}
            </div>
        </>
    );
};
export default GuestCount;
