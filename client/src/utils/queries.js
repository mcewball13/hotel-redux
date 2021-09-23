import { gql } from "@apollo/client";

export const QUERY_ROOMS_AVAILABLE = gql`
  {
    vacancy  {
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
    query guests {
        checkedIn{
            room_id
            guest{
                name
                party
                nights
                check_in
                balance
            }
        }
    }
`;

export const QUERY_EMPLOYEE_USERNAME = gql`
    {
        employee{
            username
        }
    }
`;