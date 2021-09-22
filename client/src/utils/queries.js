import { gql } from "@apollo/client";

export const QUERY_ROOMS_AVAILABLE = gql`
<<<<<<< HEAD
    {
        vacancy{
            room_id
        }
=======
  {
      vacancy  {
        room_id
>>>>>>> 82d9cf93db16460ea75021849ae979a8d3e92004
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

export const QUERY_EMPLOYEE_USERNAME = gql`
    {
        employee{
            username
        }
    }
`;