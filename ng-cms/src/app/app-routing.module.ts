import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import the UserComponent
import { ArticlesComponent } from './articles/articles.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    // 4. The default route
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    // 5. Map /users to the UsersComponent
    { path: 'users', component: UsersComponent },
    { path: 'users/view/:id', component: UserViewComponent },
    { path: 'users/create', component: UserCreateComponent },
    { path: 'users/edit/:id', component: UserEditComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/view/:id', component: ArticleViewComponent },
    { path: 'articles/create', component: ArticleCreateComponent },
    { path: 'articles/edit/:id', component: ArticleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
