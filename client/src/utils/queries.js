import { gql } from '@apollo/client';

export const QUERY_GUEST_COUNT = gql`
query getGuestCount($guestCount: Int) {
  guestCount(guestCount: $guestCount) {
    guestCount
  }

}
`
