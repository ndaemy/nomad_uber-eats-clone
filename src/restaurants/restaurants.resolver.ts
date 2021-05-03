import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

@Resolver()
export class RestaurantsResolver {
  @Query(returns => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);
    return [];
  }
}
