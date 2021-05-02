import { Query, Resolver } from '@nestjs/graphql';
import { RestaurantEntity } from '../entities/restaurant.entity';

@Resolver()
export class RestaurantsResolver {
  @Query(returns => RestaurantEntity)
  myRestaurant() {
    return true;
  }
}
