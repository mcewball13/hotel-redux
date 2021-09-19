import { gql } from "@apollo/client";

export const QUERY_ROOMS_AVAILABLE = gql`
    query getGuestCount($guestCount: Int) {
        guestCount(guestCount: $guestCount) {
            guestCount
        }
    }
`;
export const QUERY_LATE_CHECKOUT = gql`
    query getLateCheckout($input: Input) {
        lateCheckouts(input: $input) {
            lateCheckouts
        }
    }
`;
export const QUERY_CURRENT_GUESTS = gql`
    query guests($input: Input) {
        guests(input: $input) {
            name
            party
            nights
            check_in
            balance
        }
    }
`;
