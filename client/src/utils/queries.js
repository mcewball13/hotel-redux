import { gql } from '@apollo/client';

export const QUERY_GUEST_COUNT = gql`
query getGuestCount($guestCount: Int) {
  guestCount(guestCount: $guestCount) {
    guestCount
  }

}
`
export const QUERY_LATE_CHECKOUT = gql`
query getLateCheckout($input: Input) {
  lateCheckouts(input: $input) {
    lateCheckouts
  }
}
`
export const QUERY_CURRENT_GUESTS = gql`
query guests(){
  name
  party
  nights
  check_in
  balance
}
`
