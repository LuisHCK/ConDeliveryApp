export const restaurantsByCategory = (ids = []) => (
    {
        filters: {
            categories: {
                id: {
                    in: ids
                }
            }
        }
    }
)

export const featuredRestaurants = {
    filters: {
        featured: {
            eq: true
        }
    }
}

