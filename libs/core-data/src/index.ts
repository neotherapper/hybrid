export { CoreDataModule } from './lib/core-data.module';
export { StateModule } from './lib/state/state.module'
export { PeopleService } from './lib/people/people.service';
export { PeopleFacade } from './lib/state/people/people.facade';
export { UserFacade } from './lib/state/user/user.facade';
export { Person, PersonI } from './lib/people/person.model';
export { UserAuth, UserAuthI } from './lib/user/user.auth';
export { AuthGuard } from './lib/user/auth-guard.service';
export { NoAuthGuard } from './lib/user/no-auth-guard.service';
