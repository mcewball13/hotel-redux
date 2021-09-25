import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            employee {
                _id
            }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($products: [ID]!) {
        addOrder(products: $products) {
            purchaseDate
            products {
                _id
                name
                description
                price
                quantity
                category {
                    name
                }
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            employee {
                _id
                username
            }
        }
    }
`;
export const CHECK_IN_GUEST = gql`
mutation check_in($room_id: Int!, $input: checkinInput!) {
  check_in(room_id: $room_id, input: $input) {
    room_id
      guest {
        name
        balance
        party
        nights
      }
    }
  }
`;

export const CHECK_OUT = gql`
  mutation check_out(
    $room_id: Int!, 
    ) {
      check_out(room_id: $room_id){
        room_id
        guest{
          name
        }
      }
    }
`;

export const ADD_ROOM = gql`
  mutation addRoom($room_id: Int!, $description: String!) {
    addRoom(room_id: $room_id, description: $description){
      room_id
    }
  }
`;

export const DELETE_ROOM = gql`
  mutation delRoom($room_id: Int!) {
    delRoom(room_id: $room_id){
      room_id
    }
  }
`;