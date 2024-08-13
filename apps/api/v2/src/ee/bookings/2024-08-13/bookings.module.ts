import { BookingsController_2024_08_13 } from "@/ee/bookings/2024-08-13/controllers/bookings.controller";
import { BookingsService_2024_08_13 } from "@/ee/bookings/2024-08-13/services/bookings.service";
import { InputBookingsService_2024_08_13 } from "@/ee/bookings/2024-08-13/services/input.service";
import { OutputBookingsService_2024_08_13 } from "@/ee/bookings/2024-08-13/services/output.service";
import { BillingModule } from "@/modules/billing/billing.module";
import { OAuthClientRepository } from "@/modules/oauth-clients/oauth-client.repository";
import { OAuthFlowService } from "@/modules/oauth-clients/services/oauth-flow.service";
import { PrismaModule } from "@/modules/prisma/prisma.module";
import { RedisModule } from "@/modules/redis/redis.module";
import { TokensModule } from "@/modules/tokens/tokens.module";
import { TokensRepository } from "@/modules/tokens/tokens.repository";
import { Module } from "@nestjs/common";

@Module({
  imports: [PrismaModule, RedisModule, TokensModule, BillingModule],
  providers: [
    TokensRepository,
    OAuthFlowService,
    OAuthClientRepository,
    BookingsService_2024_08_13,
    InputBookingsService_2024_08_13,
    OutputBookingsService_2024_08_13,
  ],
  controllers: [BookingsController_2024_08_13],
})
export class BookingsModule_2024_08_13 {}
