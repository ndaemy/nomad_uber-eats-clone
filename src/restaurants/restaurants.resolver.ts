import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';

@Resolver()
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Query(returns => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(returns => Boolean)
  async createRestaurant(
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurantDto);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  @Mutation(returns => Boolean)
  async updateRestaurant(
    @Args() updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.updateRestaurant(updateRestaurantDto);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
