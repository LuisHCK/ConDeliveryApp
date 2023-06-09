import { gql } from '@apollo/client'

export const GET_HOMEPAGE = gql`
query GetHomepage{
    homePage {
        data {
            id
            attributes {
                popular_title
                popular_restaurants {
                    id
                    restaurant {
                        data {
                            id
                            attributes {
                                name
                                address
                                updatedAt
                                publishedAt
                                rating
                                photo {
                                    data {
                                        id
                                        attributes {
                                            url
                                        }
                                    }
                                }
                              categories {
                                data {
                                  id
                                  attributes {
                                    name
                                  }
                                }
                              }
                            }
                        }
                    }
                }
                popular_categories {
                    id
                    category {
                        data {
                            id
                            attributes {
                                createdAt
                                description
                                icon {
                                    data {
                                        attributes {
                                            url
                                        }
                                        id
                                    }
                                }
                                name
                                publishedAt
                                updatedAt
                            }
                        }
                    }
                }
                createdAt
                updatedAt
                publishedAt
            }
        }
    }
}
`

export const GET_CATEGORIES = gql`
query GetCategories {
    categories {
      data {
        id
        attributes {
          name
          description
          icon {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_RESTAURANTS_LIST = gql`
query GetRestaurants($filters: RestaurantFiltersInput) {
    restaurants(filters: $filters) {
      data {
        attributes {
          photo {
            data {
              id
              attributes {
                url
              }
            }
          }
          name
          rating
          address
          description
          categories {
            data {
              attributes {
                name
                icon {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                description
              }
              id
            }
          }
        }
        id
      }
    }
  }
`

export const GET_RESTAURANT = gql`
query GetRestaurant($restaurantId: ID)  {
    restaurant(id: $restaurantId) {
      data {
        attributes {
          name
          address
          description
          phone
          phone2
          rating
          featured
          createdAt
          updatedAt
          publishedAt
          deliveryTax
          taxFreeMinTotal
          photo {
            data {
              id
              attributes {
                url
              }
            }
          }
          cover {
            data {
              id
              attributes {
                url
              }
            }
          }
          categories {
            data {
              id
              attributes {
                description
                name
                icon {
                  data {
                    attributes {
                      url
                    }
                    id
                  }
                }
              }
            }
          }
          menu {
            id
            Item {
              id
              description
              name
              category
              photo {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
              price
            }
          }
        }
        id
      }
    }
  }
`

export const CREATE_ORDER = gql`
    mutation CreateOrder($data: OrderInput!) {
        createOrder(data: $data) {
        data {
            attributes {
            total
            status
            note
            orderItems {
                id
                name
                quantity
                price
                item_id
            }
            userAddress {
                id
                address
                name
                phone
            }
            restaurant {
                data {
                id
                attributes {
                    name
                    address
                    description
                }
                }
            }
            createdAt
            updatedAt
            }
            id
        }
        }
  }
`

export const GET_ORDER = gql`
query Orders($orderId: ID) {
    order(id: $orderId) {
      data {
        attributes {
          total
          status
          note
          orderItems {
            id
            name
            quantity
            price
            item_id
          }
          userAddress {
            id
            address
            name
            phone
          }
          restaurant {
            data {
              id
              attributes {
                name
                phone
                phone2
                photo {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                description
                address
                featured
                createdAt
                updatedAt
                taxFreeMinTotal
                rating
                publishedAt
              }
            }
          }
          createdAt
          updatedAt
        }
        id
      }
    }
  }
`
