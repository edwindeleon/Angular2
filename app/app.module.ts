import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {HttpModule} from '@angular/http'
import {AppComponent} from './components/app.component'
import {RouterModule} from '@angular/router'
import {CoursesComponent} from './components/courses.component'
import {CourseBoxComponent} from './components/coursebox.component'
import {CartComponent} from './components/cart.component'
import {WelcomeComponent} from './components/welcome.component'
import {CourseDatail} from './components/details.component'

const routes = [
  {
    path : '',
    component : WelcomeComponent
  },
  {
    path : 'courses',
    component : CoursesComponent
  },
  {
    path : 'course/:id',
    component : CourseDatail
  }
]

@NgModule({
  imports : [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( routes )
  ],
  declarations:[
    AppComponent,
    CoursesComponent,
    CourseBoxComponent,
    CartComponent,
    WelcomeComponent,
    CourseDatail
  ],
  bootstrap: [ AppComponent]
})

export class AppModule{}