import { gql } from "@apollo/client";

export const QUERY_ROOMS_AVAILABLE = gql`
    {
        vacancy{
            room_id
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
    {
        guests{
            room_id
            guests{
                name
                party
                nights
                check_in
                balance
            }
        }
    }
`;
